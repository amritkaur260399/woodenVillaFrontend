/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
// import greyChair from "../../assets/greyChair.webp";
// import woodenTable from "../../assets/woodenTable.webp";
// import officeChair from "../../assets/officeChair.webp";
// import DrawerTable from "../../assets/DrawerTable.webp";
// import bookStand from "../../assets/bookStand.webp";
// import sofaChair from "../../assets/sofaChair.webp";
// import swingChair from "../../assets/swingChair.webp";
// import whiteChair from "../../assets/whiteChair.webp";
// import heart from "../../assets/heart.png";
// import shoppingBag from "../../assets/shoppingBag.png";
// import zoom from "../../assets/zoom.png";

import array1 from "../../assets/Again_sofa-copy.png";
import array2 from "../../assets/Front_single02.png";
import { useGetAllProducts } from "@/hooks/Product/query";
import { useRouter } from "next/router";
import { ArrowRight } from "@/utils/AppIcons";
import Style from "./index.module.css";

const Sale = () => {
  // ====================================================UseState============================================================
  const [hover, setHover] = useState(false);
  const [hoverid, setHoverid] = useState(0);
  // ================================================================================================================

  // ====================================================Declaring Constants============================================================

  const router = useRouter();

  // ================================================================================================================
  // ====================================================Declaring Functions============================================================
  const handleroute = (id: any) => {
    router.push(`/ProductDescription?id=${id}`);
  };

  // ================================================================================================================
  // ====================================================USING HOOKS FOR API CALL============================================================
  const allproducts: any = useGetAllProducts({});
  const getproducts: any = allproducts?.data?.products;
  console.log("allproducts?.data?.products", allproducts?.data?.products);

  // ================================================================================================================

  const productss = [
    {
      id: 1,
      name: "Dummy Product",
      image: array2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 2,
      name: "Dummy Product",
      image: array1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 3,
      name: "Dummy Product",
      image: array2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 4,
      name: "Dummy Product",
      image: array1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 5,
      name: "Dummy Product",
      image: array2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 6,
      name: "Dummy Product",
      image: array1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 7,
      name: "Dummy Product",
      image: array2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
    {
      id: 8,
      name: "Dummy Product",
      image: array1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum labore veritatis iusto nobis laborum reprehenderit, rerum voluptatum ipsa earum .",
      price: 500,
    },
  ];

  // ================================================================================================================

  return (
    <div>
      {/* ========================================================== NEW ARRIVALS ================================================================ */}
      <div className="mt-[8%]   ">
        <p className="text-center font-serif  text-[40px] leading-8 text-[#652B12] ">
          NEW YEAR SALE
        </p>
        <p className="mt-5 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className=" flex justify-center ">
          <div className="mt-[50px] flex justify-center">
            <div className="grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
              {productss?.map((item: any) => (
                <div
                  key={item?._id}
                  onClick={() => {
                    handleroute(item?._id);
                  }}
                  className="my-5 p-2"
                >
                  <div
                    className={`${Style.products} flex h-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition delay-150 duration-300  ease-in-out xxs:w-[280px] md:w-[350px]  `}
                    // key={id}
                    // style={{ width: '48%', maxWidth: '300px' }}
                  >
                    <div
                      className={`${Style.container}  mt-2 flex h-[279px] w-[16rem] justify-center `}
                    >
                      {/* <div
          className={`${Style.options} absolute z-40  mt-5  ml-[120px] flex gap-2`}
        ></div> */}
                      <Image
                        objectPosition="center"
                        src={item?.image}
                        height="250px"
                        width="350px"
                        alt={item?.name}
                        objectFit="cover"
                      />
                    </div>

                    <div className="mx-[5px] my-[20px] text-center">
                      <h2 className="overflow-hidden text-ellipsis text-[1rem] uppercase  text-[#000000]">
                        {item?.name}
                      </h2>

                      <div
                        onClick={() => {
                          handleroute(item?._id);
                        }}
                        className="mt-5 flex justify-center"
                      >
                        View Further
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= Limitid stocks =============================================================== */}

      <div className="mt-[8%]  ">
        <p className="text-center font-serif text-[40px] leading-8  text-[#652B12] ">
          WINTER END SALE
        </p>
        <p className="mt-5 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className=" relative mt-[2%] xl:flex xl:justify-center">
          <div className=" ">
            <div className="mt-[50px] flex justify-center">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {productss?.map((item: any) => (
                  <div
                    key={item?._id}
                    onClick={() => {
                      handleroute(item?._id);
                    }}
                    className="my-5 "
                  >
                    <div
                      className={`${Style.products} flex h-[350px] w-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition  delay-150 duration-300 ease-in-out sm:m-2 `}
                      // key={id}
                      // style={{ width: '48%', maxWidth: '300px' }}
                    >
                      <div
                        className={`${Style.container}  mt-2 flex h-[279px] w-[16rem] justify-center `}
                      >
                        {/* <div
          className={`${Style.options} absolute z-40  mt-5  ml-[120px] flex gap-2`}
        ></div> */}
                        <Image
                          objectPosition="center"
                          src={item?.image}
                          height="250px"
                          width="350px"
                          alt={item?.name}
                          objectFit="cover"
                        />
                      </div>

                      <div className="mx-[5px] my-[20px] text-center">
                        <h2 className="overflow-hidden text-ellipsis   text-[1rem] uppercase  text-[#000000]">
                          {item?.name}
                        </h2>

                        <div
                          onClick={() => {
                            handleroute(item?._id);
                          }}
                          className="mt-5 flex justify-center"
                        >
                          View Further
                          <ArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== Festive sale ================================================================== */}

      <div className="mt-[8%]  ">
        <p className="text-center font-serif text-[40px] text-[#652B12] ">
          DIWALI OFFER
        </p>
        <p className="mt-5 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className=" relative mt-[2%] xl:flex xl:justify-center">
          <div className=" ">
            <div className="mt-[50px] flex justify-center  ">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {productss?.map((item: any) => (
                  <div
                    key={item?._id}
                    onClick={() => {
                      handleroute(item?._id);
                    }}
                  >
                    <div
                      className={`${Style.products} flex h-[350px] w-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition  delay-150 duration-300 ease-in-out sm:m-2 `}
                      // key={id}
                      // style={{ width: '48%', maxWidth: '300px' }}
                    >
                      <div
                        className={`${Style.container}  mt-2 flex h-[279px] w-[16rem] justify-center `}
                      >
                        {/* <div
          className={`${Style.options} absolute z-40  mt-5  ml-[120px] flex gap-2`}
        ></div> */}
                        <Image
                          objectPosition="center"
                          src={item?.image}
                          height="250px"
                          width="350px"
                          alt={item?.name}
                          objectFit="cover"
                        />
                      </div>

                      <div className="mx-[5px] my-[20px] text-center">
                        <h2 className="overflow-hidden text-ellipsis text-[1rem] uppercase  text-[#000000]">
                          {item?.name}
                        </h2>

                        <div
                          onClick={() => {
                            handleroute(item?._id);
                          }}
                          className="mt-5 flex justify-center"
                        >
                          View Further
                          <ArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
