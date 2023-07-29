/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import bedRoomSets1 from "../../assets/Again_sofa-copy.png";
import bedRoomSets2 from "../../assets/furniture_Sofa_set copy 2.jpg";
import bedRoomSets3 from "../../assets/Front_single02.png";
import bedRoomSets4 from "../../assets/Side_set.png";
import bedRoomSets5 from "../../assets/Again_sofa-copy.png";
import bedRoomSets6 from "../../assets/furniture_Sofa_set copy 2.jpg";
import ratingStar from "../../assets/ratingStar copy.png";
import "react-toastify/dist/ReactToastify.css";

// import ratingStar from "../../assets/ratingStar.png";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Arrowleft,
  Check,
  Like,
  Liked,
} from "@/utils/AppIcons";

import { useRouter } from "next/router";
import { useGetProductDescription } from "@/hooks/Product/query";
import { useAddtoCart } from "@/hooks/cart/mutation";
import { UseGetCart } from "@/hooks/cart/query";
import { useAddtoWishList } from "@/hooks/wishlist/mutation";
import { UseGetWishList } from "@/hooks/wishlist/query";
import { ToastContainer, toast } from "react-toastify";

const ProductDescription = () => {
  // ====================================================UseState============================================================

  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

  const [product, setProduct] = useState(true);
  const [description, setDescription] = useState(true);
  // const [dimension, setDimension] = useState(false);
  // const [feature, setFeature] = useState(false);
  const [item, setItem] = useState(1);
  const [add, setAdd] = useState(false);

  // ================================================================================================================

  // ====================================================ARRAY FOR SWIPER============================================================

  const images = [
    bedRoomSets1,
    bedRoomSets2,
    bedRoomSets3,
    bedRoomSets4,
    bedRoomSets5,
    bedRoomSets6,
  ];
  // ================================================================================================================
  // =========================================================Declaring constants======================================================
  const router = useRouter();

  const { id } = router?.query;

  const { data: productDescription, refetch }: any = useGetProductDescription({
    pathParams: { id },
  });
  // console.log('ProductDecription', productDescription?.data?.product
  // )
  console.log("id", id);

  const Addcart = useAddtoCart();
  // const { data: GetCart }: any = UseGetCart();
  const AddWishlist: any = useAddtoWishList();

  // console.log("Getcart", GetCart?.data?.getCart);
  // console.log("Getcart", getWishList);

  // console.log('item', item)

  // console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', id)
  // ================================================================================================================
  // ============================Declaring Functions =================================================================
  const handleToast2 = () => {
    toast.success(" Product Added to Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // =====================================
  const handleToast1 = () => {
    toast.success(" Product Added to Wishlist", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // =======================================================================================================================
  // ====================================================API CALL============================================================

  const AddToCart = () => {
    if (id) {
      // console.log("id", id);
      // console.log("item", item);
      Addcart?.mutateAsync({
        body: {
          productId: id,
          quantity: item,
        },
      })
        ?.then((res: any) => {
          // console.log("res", res);
          handleToast2();
          refetch();
        })
        ?.catch((err: any) => {
          console.log("err", err);
        });
    }
  };

  // =======================================================================================================================
  const AddToWishlistButton = () => {
    if (id) {
      console.log("id", id);

      AddWishlist?.mutateAsync({
        body: {
          productId: id,
        },
      })
        ?.then((res: any) => {
          console.log("res", res);
          handleToast1();
          refetch();
        })
        ?.catch((err: any) => {
          console.log("err", err);
        });
    }
  };

  // const getSingleProduct = () => {
  //   GetProductDescription({
  //     pathParams: {
  //       id
  //     },
  //   })
  //     ?.then((res: any) => console.log('mmmmmmm', res))
  //     ?.catch((err: any) => console.log("err", err));
  // };

  // useEffect(() => {
  //   getSingleProduct();
  // }, [id]);

  // ================================================================================================================

  return (
    <div>
      <ToastContainer />
      <div className="">
        <div className=" grid  xxs:grid-cols-1 lg:grid-cols-2 lg:px-28">
          {/* <div>
          <div className="relative h-[5rem] w-[45rem] ">
            <div className="test relative">
              <Swiper
                style={{}}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next1",
                  prevEl: ".swiper-button-prev1",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {productDescription?.product?.media.map((image: any) => (
                  <SwiperSlide key={image?.id}>
                    <Image
                      src={image?.url}
                      height={550}
                      width={720}
                      alt="swiper"
                      className=" rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prev1 absolute left-0 top-[30%] z-[5000] h-[50px] w-[50px] rounded-full bg-white  py-3">
                <Arrowleft />
              </div>
              <div className="swiper-button-next1 absolute right-0 top-[30%] z-[5000] h-[50px] w-[50px] rounded-full bg-white py-3">
                {" "}
                <ArrowRight />
              </div>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {productDescription?.product?.media.map((image: any) => (
                  <SwiperSlide key={image?.id}>
                    <Image
                      src={image?.url}
                      height={50}
                      width={50}
                      className="cursor-grabbing rounded-md"
                      alt="image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div> */}
          <div className=" lg:px-10  lg:py-10 ">
            <div className="relative  h-fit lg:w-[35vw] ">
              <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                loop={true}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next1",
                  prevEl: ".swiper-button-prev1",
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="productswiper2"
              >
                {productDescription?.product?.media.map((image: any) => (
                  <SwiperSlide key={image?.id} className="rounded-[10px]">
                    <Image
                      src={image?.url}
                      height={600}
                      width={600}
                      alt="swiper"
                      className=" rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev1 absolute left-5 top-[40%] z-[5000] h-[50px] w-[50px] rounded-full bg-white  py-3">
                <Arrowleft />
              </div>
              <div className="swiper-button-next1 absolute right-5 top-[40%] z-[5000] h-[50px] w-[50px] rounded-full bg-white py-3">
                {" "}
                <ArrowRight />
              </div>
              <div className=" py-5 xxs:px-[85px] lg:px-20">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="productswiper"
                >
                  {productDescription?.product?.media.map((image: any) => (
                    <SwiperSlide key={image?.id}>
                      <Image
                        src={image?.url}
                        height={50}
                        width={50}
                        className="cursor-grabbing rounded-md"
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>{" "}
            </div>
          </div>

          <div className="  mt-10  ">
            <h1 className=" text-[25px] font-semibold text-[#612c13] xxs:px-2 md:px-8">
              {productDescription?.product?.productName?.name.toUpperCase()}
            </h1>
            {/* <h5
            className="
          "
          >
            Rating:{" "}
            {Array(5).fill(
              <Image src={ratingStar} alt="star" height="20px" width="20px" />
            )}
          </h5> */}

            <h1 className="">
              {/* {productDescription?.product?.price} <br /> */}
              {/* On Sale */}
            </h1>
            <h6 className="text-[15px] xxs:px-2 md:px-8">
              incl. VAT <br />
              Free postage
              <br />
              Get it by Thu 18 May
              <br />
              {/* <span className="font-semibold">Deliver to:</span>
            <br />
            EC1A 7ES - LONDON
            <br /> */}
            </h6>
            {/* <div className=" flex  justify-start gap-10">
            <div className="rounded-md border border-red-500">
              <Image
                src={bedRoomSets1}
                alt="images"
                height={150}
                width={140}
                objectFit="scale-down"
              />
            </div>
            <div className="rounded-md border border-red-500">
              <Image
                src={bedRoomSets1}
                alt="images"
                height={150}
                width={140}
                objectFit="scale-down"
              />
            </div>
          </div> */}

            <div className="justify-cente   xxs:flex md:px-10 ">
              <div className="place-content-cente flex w-[11rem] items-center  text-center  xxs:w-[8rem] ">
                <button
                  type="button"
                  onClick={() => {
                    +item === 1 ? setItem(+item) : setItem(+item - 1);
                  }}
                  className=" h-[40px] w-[2.5rem]  rounded-l-[30px]  border border-[#8a4e32]  bg-[#f7eee1] pb-1 text-center  text-[35px] font-medium  text-[#8a4e32] "
                >
                  -
                </button>
                <input
                  value={Number(item)}
                  onChange={(e: any) => {
                    setItem(e.target.value);
                  }}
                  type="number"
                  className="  h-[40px]  appearance-none border-none bg-[#612C13] py-2 text-center text-[#f7eee1]  focus:outline-none xxs:w-[3rem]"
                />
                <button
                  type="button"
                  onClick={() => {
                    setItem(+item + 1);
                  }}
                  className="t h-[40px] w-[2.5rem] rounded-r-[30px] border border-[#612C13] bg-[#f7eee1] pb-1 text-center  text-[35px] font-medium text-[#8a4e32]"
                >
                  +
                </button>
              </div>
              <div className="  flex py-5  md:justify-start ">
                <div className="px- flex h-[40px] w-[4.5rem] cursor-pointer  py-2 xxs:w-fit   ">
                  <div className="h-[40px]  w-[40px]  rounded-full ">
                    {productDescription?.product?.isAddedToWishList === true ? (
                      <Liked />
                    ) : (
                      // <button onClick={AddToWishlistButton}>
                      <button>
                        <Like />
                      </button>
                    )}
                  </div>
                </div>
                <div className=" ">
                  {productDescription?.product?.isAddedToCart === true ? (
                    <button
                      disabled={true}
                      className=" flex h-[40px] w-[7rem] cursor-not-allowed items-center justify-center rounded-[50px] border border-[#8a4e32] bg-[#612C13] px-1 py-1 text-center text-[18px]  text-[#f7eee1]"
                    >
                      <Check />
                      Added
                    </button>
                  ) : (
                    <button
                      // onClick={AddToCart}
                      className="h-[40px] w-[13rem] rounded-[50px] border border-[#8a4e32] bg-[#612C13] px-2 py-1 text-center text-[22px] text-[#f7eee1] xxs:w-[8rem]  xxs:text-lg"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/*  */}

            <div>
              <div className="hide-scrollbar overflow-y-scroll  xxs:h-[250px] xxs:p-0  md:h-[450px] md:px-5">
                <div>
                  <div>
                    <div className="">
                      <h1 className=" mt-10 px-2 py-1 text-[28px] font-semibold text-[#612c13] xxs:mt-2">
                        Description
                      </h1>

                      <div
                        onClick={() => {
                          setDescription(!description);
                        }}
                      >
                        {/* {description === true ? <ArrowUp /> : <ArrowDown />} */}
                      </div>
                    </div>
                    {description && (
                      <>
                        <p className="py-1 xxs:px-5">
                          {productDescription?.product?.description} Lorem ipsum
                          dolor sit amet consectetur adipisicing elit.
                          Voluptatibus dolore est voluptas molestiae vitae.
                          Assumenda officia ipsa recusandae, nihil facere
                          dolorem dicta. Harum, sequi accusamus assumenda
                          dolores eos natus sunt dolor optio animi error. Optio
                          deleniti recusandae maiores? Eveniet sit quod deleniti
                          sapiente rem accusantium suscipit illo sequi
                          praesentium aut!
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
