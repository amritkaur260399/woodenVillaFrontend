// import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import villa from "../../../assets/asset_4_720.png";
import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import {
  ArrowDown2,
  Cart,
  Like,
  Menu,
  Search,
  User,
  UserIcon,
} from "@/utils/AppIcons";
import { useRouter } from "next/router";
import { useCust } from "@/hooks/Customer/query";
import { UseCat } from "@/hooks/Category/query";
// import { useGetSingleProduct } from "@/hooks/Product/mutation";
import { useGetAllProducts, useGetSingleProduct } from "@/hooks/Product/query";
import { GetSingleProduct } from "@/services/Product";
import { CustUser } from "@/services/Customer";
import { useAtom } from "jotai";
import { meUser } from "@/store";
import { debounce } from "lodash";
import userIcon from "../../../assets/userIcon.png";
import Popover from "@/components/UIComponents/Popover";

const Header = () => {
  // =====================================Usestate =================================
  const [isExpanded, setIsExpanded] = useState(false);
  const [Nav, setNav] = useState(false);
  const [user, setUser]: any = useAtom(meUser);

  const [isShown, setIsShown] = useState("");
  const [isShown1, setIsShown2] = useState(false);

  const [furniture, setFurniture] = useState(false);
  const [furniture2, setFurniture2] = useState(false);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const ref: any = useRef(null);
  const searchRef: any = useRef(null);
  // popover ref hook
  const cardRef = useRef<HTMLButtonElement | any>(null);
  // const [user]: any = useAtom(meUser);
  // console.log("12222222222", user);

  const products: any = useGetAllProducts({
    query: {
      keyword: searchTerm,
    },
  });

  // ==========================================================================================
  // =======================Declaring Functions=====================================================
  const handlefurniture = () => {
    setFurniture(!furniture);
  };

  const handleFocus = () => {
    setIsExpanded(true);
    setFurniture(false);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setFurniture(false);
  };
  const Handleroute = () => {
    router.push("/Signup");
    setFurniture(false);
    setFurniture2(false);
    setNav(false);
  };
  const debouncedSearch = debounce((criteria) => {
    setSearchTerm(criteria);
  });

  const handleClickOutside = (event: any) => {
    if (ref?.current && !ref?.current.contains(event.target)) {
      if (searchTerm === "") {
        setFurniture(false);
      }
    }
  };
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      if (
        searchTerm &&
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        !ref?.current?.contains(e.target)
      ) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [searchTerm]);

  // =============================================================================================================
  // =======================Declaring Constants===================================================================

  const router = useRouter();

  const { data: categgory }: any = UseCat();
  let catgory = categgory?.data;
  // console.log("category", categgory);

  // =================================================================================================================

  // ========================================================API CALL============================================================

  const getSingleProduct = (id: any) => {
    GetSingleProduct({
      query: {
        subCategory: id,
      },
    })
      ?.then((res: any) => console.log("res", res))
      ?.catch((err: any) => console.log("err", err));
  };
  // ====================================================================================================================

  console.log("router", router);
  useEffect(() => {
    CustUser()
      .then((response: any) => {
        console.log("responsssse", response?.data);
        setUser(response?.data);
        window.localStorage.setItem(
          "currentUser",
          JSON.stringify(response?.data)
        );
      })
      .catch((error) => {
        console.log("error", error);
        localStorage.clear();
      });
  }, []);

  return (
    <div>
      {/*======== main div========== */}
      <div className="-mt-16 h-[4rem] place-content-center items-center  justify-around bg-[#F7EEE1]  xxs:hidden lg:flex  ">
        {/* div for image */}
        <div className="">
          <Image
            width="100px"
            height="60px"
            src={villa}
            onClick={() => {
              router?.push("/");
            }}
            alt="logo"
            className="cursor-pointer "
          />
        </div>

        {/* div for searchbar */}
        <div className="">
          <div className=" flex justify-between ">
            <div className=" ">
              <div
                className={`flex  h-[40px] w-[250px] items-center overflow-hidden rounded-[18px] border border-black transition-all duration-300 ease-in-out ${
                  isExpanded ? "w-[250px]" : "w-[250px]"
                }`}
              >
                <div className="ml-2 flex w-fit cursor-pointer items-center py-1 pr-1">
                  <div
                    className={`cursor-pointer ${isExpanded ? "" : ""}`}
                    onClick={handleExpand}
                  >
                    <Search />
                  </div>
                </div>
                <input
                  type="text"
                  style={{ border: "none", outline: "0 !important" }}
                  placeholder="Search..."
                  className={`h-[39px] w-full rounded-r-[18px] bg-transparent outline-0 outline-offset-0 focus:outline-0`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={searchTerm}
                  ref={ref}
                  onChange={(e: any) => {
                    debouncedSearch(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* div for navbar static contents */}
        <div className=" ">
          <div className=" ">
            <div className="  relative flex h-[4rem] place-content-center items-center  justify-center  xl:w-[800px]  ">
              <div className="relative  z-[5000] flex cursor-pointer  justify-evenly bg-[#F7EEE1] text-[#8A4E32] lg:gap-3  xl:w-[800px]">
                <div></div>
                <Link href="/">
                  <div
                    className={`${
                      router.pathname === "/" && "border-b-2 border-[#8A4E32]"
                    }  pb-2 text-[16px] font-semibold text-[#8A4E32]`}
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                    }}
                  >
                    Home
                  </div>
                </Link>
                <Link href="/about">
                  <div
                    className={`${
                      router.pathname === "/about" &&
                      "border-b-2 border-[#8A4E32]"
                    }  pb-2 text-[16px] font-semibold `}
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                    }}
                  >
                    About
                  </div>
                </Link>
                <div
                  className={`${
                    router.pathname === "/Furniture" &&
                    "border-b-2 border-[#8A4E32]"
                  }  pb-2 text-[16px] font-semibold `}
                  ref={cardRef}
                  onClick={handlefurniture}
                >
                  Furniture
                </div>
                <Link href="/Sale">
                  <div
                    className={`${
                      router.pathname === "/Sale" &&
                      "border-b-2 border-[#8A4E32]"
                    }  pb-2 text-[16px] font-semibold `}
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                    }}
                  >
                    Clearance Sale
                  </div>
                </Link>
                <Link href="/allproducts">
                  <div
                    className={`${
                      router.pathname === "/allproducts" &&
                      "border-b-2 border-[#8A4E32]"
                    }  pb-2 text-[16px] font-semibold text-[#8A4E32]`}
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                    }}
                  >
                    Products
                  </div>
                </Link>
                <Link href="/contact">
                  <div
                    className={`${
                      router.pathname === "/contact" &&
                      "border-b-2 border-[#8A4E32]"
                    }  pb-2 text-[16px] font-semibold text-[#8A4E32]`}
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                    }}
                  >
                    Contact Us
                  </div>
                </Link>
              </div>
              <></>
            </div>
          </div>
        </div>

        {/* div for side contents */}
        <div className="">
          <div className="">
            {user?.email ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                  setFurniture(false);
                }}
              >
                <div className="  h-[30px] w-[30px] rounded-[100%] border border-[#612C13] bg-[#612C13]  pt-[2.5px]  text-center text-[18px] text-white ">
                  {user?.name[0].toUpperCase()}
                </div>
              </div>
            ) : (
              <div className="cursor-pointer" onClick={Handleroute}>
                {/* <User /> */}
                {/* <Image src={userIcon} height={50} width={50} /> */}
                <UserIcon />
              </div>
            )}
            {/* <div className="cursor-pointer" onClick={Handleroute}>
                <User />
              </div>
              {/* ==========================================================================modal when user is logged in ============================================================ */}
            {open && (
              <div className=" absolute right-[20px]  top-[70px] z-[5000] flex h-[50px]   w-[180px]  bg-[#F7EEE1] shadow-md ">
                <div className=" h-fit text-center">
                  {/* <div className="">
                      <div className="relative left-[100px] mt-2 h-[45px] w-[40px] rounded-[100%] border border-[#612C13] bg-[#612C13] py-2  text-center text-[30px] text-white ">
                        {custommer?.data?.data?.name[0]}
                      </div>
                      <p className="h-fit w-[250px] break-words  border-[#100C08] p-2 text-[#100C08]   ">
                        {custommer?.data?.data?.name.toUpperCase()}
                      </p>
                      <p className="h-fit w-[250px] break-words  border-[#100C08] pt-2 text-[#100C08] ">
                        {custommer?.data?.data?.email}
                      </p>
                    </div> */}
                  {/* <div
                    onClick={() => {
                      router?.push("/Order"), setOpen(false);
                      setFurniture(false);
                    }}
                    className=" mt-4 flex w-[200px] cursor-pointer  place-content-center items-center justify-center rounded    text-center text-[#612C13] hover:bg-[#F9F5F0] "
                  >
                    <div>
                      <Image
                        src="https://img.icons8.com/?size=512&id=4255&format=png"
                        alt="order"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="px-2 pb-2 text-[18px] ">My Orders</div>
                  </div> */}
                  <div
                    onClick={() => {
                      setOpen(false);
                      setFurniture(false);
                      window.location.reload();
                      window.localStorage.removeItem("accessToken");
                      alert("You have been Logged Out!");
                    }}
                    className="  mt-4 flex w-[180px] cursor-pointer  place-content-center items-center justify-center rounded    text-center text-[#612C13] hover:bg-[#F9F5F0] "
                  >
                    <div>
                      <Image
                        src="https://img.icons8.com/?size=1x&id=2445&format=png"
                        alt="order"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="px-4 pb-2 text-[18px] "> Log Out</div>
                  </div>
                  {/* <div
                    onClick={() => {
                      alert("You has been Log Out!"), setOpen(false);
                      setFurniture(false);
                    }}
                    className=" mx-auto mt-2 w-[200px] cursor-pointer rounded  py-1.5 text-center text-[#612C13] hover:bg-[#F9F5F0] "
                  >
                    Log Out
                  </div> */}
                </div>
              </div>
            )}
            {/* ==================================================================================================================================================================== */}
            {/* <div className="cursor-pointer" onClick={HandleWish}>
              <Like />
            </div>
            <div className="cursor-pointer" onClick={Handlecart}>
              <Cart />
            </div> */}
          </div>
        </div>
      </div>

      {/* Navbar for burger modal on mobile screen */}

      <div className="xxs:block lg:hidden">
        <div className="flex items-center  justify-between bg-[#f7eee1] px-2">
          <div className=" ">
            <Image
              width="60px"
              height="50px"
              src={villa}
              onClick={() => {
                router?.push("/");
              }}
              alt="logo"
              className="cursor-pointer"
            />
          </div>
          <div className="">
            <div className=" flex justify-around ">
              <div className=" ">
                <div
                  className={` flex h-[40px] items-center rounded-[18px] border border-black  xxs:w-[150px] xs:mx-auto xs:w-[100%] 
                    
                  `}
                >
                  <div className="ml-2 flex w-fit cursor-pointer items-center py-1 pr-1">
                    <div
                      className={`cursor-pointer ${isExpanded ? "" : ""}`}
                      onClick={handleExpand}
                    >
                      <Search />
                    </div>
                  </div>
                  <input
                    type="text"
                    style={{ border: "none", outline: "0 !important" }}
                    placeholder="Search..."
                    className={`h-[39px] w-full rounded-r-[18px] bg-transparent outline-0 outline-offset-0 focus:outline-0`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchTerm}
                    onChange={(e: any) => {
                      debouncedSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              {user?.email ? (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                    setFurniture(false);
                  }}
                >
                  <div className=" h-[30px] w-[30px] rounded-[100%] border border-[#612C13] bg-[#612C13] pt-[2.5px]  text-center text-[18px] text-white ">
                    {user?.name[0].toUpperCase()}
                  </div>
                </div>
              ) : (
                <div className="cursor-pointer" onClick={Handleroute}>
                  <UserIcon />
                </div>
              )}
              {/* <div className="cursor-pointer" onClick={Handleroute}>
                <User />
              </div>
              {/* ==========================================================================modal when user is logged in ============================================================ */}
              {open && (
                <div className=" absolute right-[20px]  z-[5000] flex h-[50px]  bg-[#F7EEE1]   shadow-md xxs:right-0  xxs:top-[60px] ">
                  <div className=" h-fit text-center">
                    {/* <div className="">
                      <div className="relative left-[100px] mt-2 h-[45px] w-[40px] rounded-[100%] border border-[#612C13] bg-[#612C13] py-2  text-center text-[30px] text-white ">
                        {custommer?.data?.data?.name[0]}
                      </div>
                      <p className="h-fit w-[250px] break-words  border-[#100C08] p-2 text-[#100C08]   ">
                        {custommer?.data?.data?.name.toUpperCase()}
                      </p>
                      <p className="h-fit w-[250px] break-words  border-[#100C08] pt-2 text-[#100C08] ">
                        {custommer?.data?.data?.email}
                      </p>
                    </div> */}
                    {/* <div
                    onClick={() => {
                      router?.push("/Order"), setOpen(false);
                      setFurniture(false);
                    }}
                    className=" mt-4 flex w-[200px] cursor-pointer  place-content-center items-center justify-center rounded    text-center text-[#612C13] hover:bg-[#F9F5F0] "
                  >
                    <div>
                      <Image
                        src="https://img.icons8.com/?size=512&id=4255&format=png"
                        alt="order"
                        height={20}
                        width={20}
                      />
                    </div>
                    <div className="px-2 pb-2 text-[18px] ">My Orders</div>
                  </div> */}
                    <div
                      onClick={() => {
                        setOpen(false);
                        setFurniture(false);
                        window.location.reload();
                        window.localStorage.removeItem("accessToken");
                        window.localStorage.removeItem("currentUser");

                        alert("You has been Log Out!");
                      }}
                      className="  mt-4 flex w-[180px] cursor-pointer  place-content-center items-center justify-center rounded    text-center text-[#612C13] hover:bg-[#F9F5F0] "
                    >
                      <div>
                        <Image
                          src="https://img.icons8.com/?size=1x&id=2445&format=png"
                          alt="order"
                          height={20}
                          width={20}
                        />
                      </div>
                      <div className="px-4 pb-2 text-[18px] "> Log Out</div>
                    </div>
                    {/* <div
                    onClick={() => {
                      alert("You has been Log Out!"), setOpen(false);
                      setFurniture(false);
                    }}
                    className=" mx-auto mt-2 w-[200px] cursor-pointer rounded  py-1.5 text-center text-[#612C13] hover:bg-[#F9F5F0] "
                  >
                    Log Out
                  </div> */}
                  </div>
                </div>
              )}
              {/* ==================================================================================================================================================================== */}
              {/* <div className="cursor-pointer" onClick={HandleWish}>
              <Like />
            </div>
            <div className="cursor-pointer" onClick={Handlecart}>
              <Cart />
            </div> */}
            </div>
          </div>

          <div
            onClick={() => {
              setNav(!Nav);
              setFurniture2(false);
            }}
          >
            <Menu />
          </div>
        </div>

        {Nav && (
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="z-[15000]"
              >
                <div className=" ">
                  <div className=" flex flex-col bg-[#F7EEE1] text-[#612c13]">
                    <Link href="/">
                      <div
                        className=" h-[2.5rem] w-fit  px-2 py-2 text-[18px]"
                        onClick={() => {
                          setOpen(false);
                          setFurniture2(false);
                          setNav(false);
                        }}
                      >
                        Home
                      </div>
                    </Link>
                    <Link href="/about">
                      <div
                        className="h-[2.5rem] w-fit  px-2 py-2 text-[18px] "
                        onClick={() => {
                          setOpen(false);
                          setNav(false);
                          setFurniture2(false);
                        }}
                      >
                        About
                      </div>
                    </Link>
                    {/* <div
                      className="w-fit  px-2 py-2 text-[18px]"
                      onClick={handlefurniture}
                    >
                      Furniture
                    </div> */}
                    <Link href="/Sale">
                      <div
                        className="h-[2.5rem] w-fit  px-2 py-2 text-[18px]  "
                        onClick={() => {
                          setOpen(false);
                          setNav(false);
                          setFurniture2(false);
                        }}
                      >
                        Clearance Sale
                      </div>
                    </Link>
                    <Link href="/allproducts">
                      <div
                        className="h-[2.5rem]  w-fit px-2 py-2 text-[18px] "
                        onClick={() => {
                          setOpen(false);
                          setNav(false);
                          setFurniture2(false);
                        }}
                      >
                        Products
                      </div>
                    </Link>
                    <Link href="/contact">
                      <div
                        className="h-[2.5rem] w-fit  px-2 py-2 text-[18px]  "
                        onClick={() => {
                          setOpen(false);
                          setNav(false);
                          setFurniture2(false);
                        }}
                      >
                        Contact Us
                      </div>
                    </Link>
                    <div
                      ref={cardRef}
                      className="h-[2.5rem] w-fit  px-2 py-2 text-[18px]   "
                      onClick={() => {
                        setFurniture2(!furniture2);
                      }}
                    >
                      Furniture
                    </div>
                  </div>
                  <div className="  ">
                    {furniture2 && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ y: -200, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1 }}
                          className="left-  left-2 top-[70px] z-[5000] max-h-[60vh] w-full overflow-y-scroll  bg-[#F7EEE1] py-5 shadow-xl"
                        >
                          {/* <p className="mx-4 w-28 border-b-2 border-[#8A4E32] text-[25px] font-bold text-[#8A4E32]">
                Furniture
              </p> */}

                          <div className="  flex cursor-pointer flex-col  justify-center   ">
                            {catgory?.map((val: any) => (
                              <div
                                key={val?.id}
                                onClick={() => {
                                  setIsShown2(!isShown1);
                                  setIsShown(val?.name);
                                }}
                                onMouseLeave={() => {
                                  setIsShown("");
                                }}
                                className="py-2"
                              >
                                <div className=" flex cursor-pointer items-center   px-2 py-1 hover:bg-gray-100 ">
                                  <Image
                                    width={50}
                                    height={40}
                                    src={val?.media[0]?.url}
                                    alt="img"
                                    // className={`cursor-pointer ${isExpanded ? "" : ""}`}
                                    // onClick={handleExpand}
                                  />
                                  <div className=" ml-1  h-[30px] w-[100%]   px-1 py-1 text-[17px] ">
                                    {val?.name}
                                  </div>
                                </div>
                                {/* <div className="h-[15px]  "></div> */}

                                {isShown1 && isShown === val?.name && (
                                  <AnimatePresence>
                                    <motion.div
                                      initial={{ y: -200, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      transition={{ duration: 1 }}
                                      className="absolute z-[100] w-[100%] "
                                    >
                                      <div className=" absolute z-[100] w-[100%] ">
                                        <div
                                          className={`  w-[320px z-50 grid max-h-[25vh] grid-cols-1 overflow-y-scroll rounded-r-md  border bg-[#F7EEE1]  px-1 py-2 text-[16px] shadow-lg 
                                
                              `}
                                        >
                                          {val?.subCategory?.length === 0 ? (
                                            <div className="px-2 py-2 text-[#612C13]">
                                              No Categories Yet!
                                            </div>
                                          ) : (
                                            <div>
                                              {val?.subCategory?.map(
                                                (item2: any) => (
                                                  <div
                                                    key={item2?.id}
                                                    // href={`/product/?subcategory=${item2?._id}`}
                                                    className=""
                                                  >
                                                    <div
                                                      className="   border-orange-900   text-[#] hover:bg-gray-100"
                                                      onClick={() => {
                                                        // alert("ll")
                                                        setIsShown(""),
                                                          router.push(
                                                            `/product/?subcategory=${item2?._id}`
                                                          );
                                                        getSingleProduct(
                                                          item2?._id
                                                        );
                                                        setOpen(false);
                                                        setFurniture2(false);
                                                        setNav(false);
                                                      }}
                                                    >
                                                      <div className=" flex w-[100%] cursor-pointer items-center justify-center  py-2 hover:bg-gray-100 ">
                                                        <Image
                                                          width={50}
                                                          height={40}
                                                          src={
                                                            item2?.media?.[0]
                                                              ?.url
                                                          }
                                                          alt="img"
                                                          // className={`cursor-pointer ${isExpanded ? "" : ""}`}
                                                          // onClick={handleExpand}
                                                        />
                                                        <div className=" ml-1  h-[30px] w-full  px-1 py-1 text-[14px] ">
                                                          {item2?.name}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </motion.div>
                                  </AnimatePresence>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* ========================================================================================= */}

      {/* main div ends========================================================================= */}
      {/* ---------------Sub navbar========================= */}

      <div className="">
        <Popover
          isVisible={furniture}
          onclose={setFurniture}
          userRef={cardRef}
          className={"absolute  z-[5000] w-max  bg-[#F7EEE1] shadow-xl"}
        >
          <AnimatePresence>
            <motion.div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 10, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={
                "absolute left-0 top-0  z-[5000] w-max  bg-[#F7EEE1] py-5 shadow-xl"
              }
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <div className="  flex w-full cursor-pointer flex-col justify-center   ">
                  {catgory?.map((val: any) => (
                    <div
                      key={val?.id}
                      onMouseEnter={() => {
                        setIsShown(val?.name);
                      }}
                      onMouseLeave={() => {
                        setIsShown("");
                      }}
                      className="py-2"
                    >
                      <div className=" flex cursor-pointer items-center   px-3 py-1 hover:bg-gray-100 ">
                        <Image
                          width={50}
                          height={40}
                          src={val?.media[0]?.url}
                          alt="img"
                          // className={`cursor-pointer ${isExpanded ? "" : ""}`}
                          onClick={handleExpand}
                        />
                        <div className=" ml-1  h-[30px] w-full   px-1 py-1 text-[17px] ">
                          {val?.name}
                        </div>
                      </div>
                      {/* <div className="h-[15px]  "></div> */}

                      {isShown === val?.name && (
                        <div className="absolute left-[240px]  top-0  h-[600px] max-h-screen  ">
                          <div
                            className={` relative z-50 grid w-[250px] grid-cols-1  rounded-r-md  border bg-[#F7EEE1]  px-1 py-2 text-[16px] shadow-lg 
                                
                              `}
                          >
                            {val?.subCategory?.length === 0 ? (
                              <div className="px-2 py-2 text-[#612C13]">
                                No Categories Yet!
                              </div>
                            ) : (
                              <div>
                                {val?.subCategory?.map((item2: any) => (
                                  <div
                                    key={item2?.id}
                                    // href={`/product/?subcategory=${item2?._id}`}
                                    className=""
                                  >
                                    <div
                                      className="   border-orange-900   text-[#] hover:bg-gray-100"
                                      onClick={() => {
                                        // alert("ll")
                                        setIsShown(""),
                                          router.push(
                                            `/product/?subcategory=${item2?._id}`
                                          );
                                        getSingleProduct(item2?._id);
                                        setOpen(false);
                                        setFurniture(false);
                                      }}
                                    >
                                      <div className=" flex cursor-pointer items-center justify-center  py-2 hover:bg-gray-100 ">
                                        <Image
                                          width={50}
                                          height={40}
                                          src={item2?.media?.[0]?.url}
                                          alt="img"
                                          // className={`cursor-pointer ${isExpanded ? "" : ""}`}
                                          // onClick={handleExpand}
                                        />
                                        <div className=" ml-1  h-[30px] w-full  px-1 py-1 text-[14px] ">
                                          {item2?.name}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Popover>
      </div>
      {/* ===================SearchCreteria=============================== */}
      <div>
        {searchTerm !== "" ? (
          <div
            ref={searchRef}
            className=" absolute
                    left-[12rem] top-16 z-40 ml-1 mt-2 flex h-56 w-[350px] overflow-y-auto overflow-x-hidden rounded-md border-gray-200 bg-[#F7EAD7] bg-scroll  text-[#612c13] shadow-lg xxs:left-0 xxs:top-[50px] xxs:h-[240px] xxs:w-[100%] md:left-[12rem] md:w-[25rem] "
          >
            <div className="h-[16px] w-full cursor-pointer  rounded-r-full p-[10px] ">
              {products?.data?.products?.map((i: any) => {
                return (
                  <div
                    key={i?._id}
                    className="ml-3 mt-3 w-full  lowercase hover:text-[#612c13]"
                    onClick={(e) => {
                      e?.preventDefault();
                      setIsOpened(false);
                      setSearchTerm("");
                    }}
                  >
                    <div
                      onClick={() => {
                        router.push(`/ProductDescription?id=${i?._id}`);
                      }}
                    >
                      <span className="w-full text-lg">
                        {i?.productName?.name?.trim("")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            {searchTerm !== "" && products?.data?.products?.length === 0 && (
              // eslint-disable-next-line no-console
              // <div
              //   className=" absolute
              // left-[23rem] top-24 z-40 h-56 w-[550px] rounded-md border-gray-200 bg-white text-gray-500 shadow-lg"
              // >
              //   <div className="flex h-full w-full items-center justify-center">
              //     <span className="text-2xl font-medium">
              //       NO PRODUCT FOUND
              //     </span>
              //   </div>
              // </div>
              <div
                className=" top-0 z-[1000] flex h-36 w-auto items-center justify-center rounded-lg border-gray-500
                       bg-[#F7EAD7] text-lg font-medium text-gray-500  shadow-lg
                        xxs:absolute xxs:top-[50px]  xxs:h-[230px] xxs:w-[100%] md:absolute  md:left-[12rem] md:top-16  md:w-[25rem]"
              >
                NO PRODUCT FOUND
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
