/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import topSelling from "../../assets/topSelling.webp";
import Redchair from "../../assets/RedChair.webp";
import Yellowchair from "../../assets/YellowChair.webp";
import comma from "../../assets/comma.png";
import Style from "./index.module.css";

import ocean from "../../assets/ocean.webp";
import shop from "../../assets/shopname.webp";
import retro from "../../assets/retroage.webp";
import design from "../../assets/design.webp";
import photo from "../../assets/photo.webp";

// import swiper3 from "../../assets/swiper9.webp";

import SwiperCore, {
  A11y,
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useGetAllProducts } from "@/hooks/Product/query";
import { ArrowRight } from "@/utils/AppIcons";
import swiper from "../../assets/Slider.png";
import swiper2 from "../../assets/small_sofa_full.png";

SwiperCore.use([EffectFade, Pagination, Navigation]);

const Home = () => {
  const [hover, setHover] = useState(false);
  const [hoverid, setHoverid] = useState(0);
  const [isBestSelling, setBestSelling] = useState("newarrival");
  const allproducts: any = useGetAllProducts({});
  // console.log("allproducts?.data?.products", allproducts?.data?.products);

  const serviceList = [
    {
      id: 1,
      title: "Save Money",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/save-money-1965435-1661661.png?f=avif&w=256",
    },
    {
      id: 2,
      title: "Save Time",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/save-time-2668426-2223000.png?f=avif&w=256",
    },
    {
      id: 3,
      title: "24/7 Customer Service",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/customer-service-1897747-1608147.png?f=avif&w=256",
    },
    {
      id: 4,
      title: "Minimum Shipping",
      img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/shipping-truck-2168968-1825387.png?f=avif&w=256",
    },
  ];

  // const custommer = useCust();

  const images = [swiper, swiper2];
  const router = useRouter();
  const handleroute = (id: any) => {
    router.push(`/ProductDescription?id=${id}`);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          {/* Swiper */}
          {/* <div>
            <div className="test mb-5 h-[75vh]">
              <Swiper
                spaceBetween={30}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={2000}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,

                  type: "bullets",
                }}
                modules={[Autoplay, Navigation]}
                // className="test"
              >
                {images?.map((item: any) => (
                  <SwiperSlide key={item?.id}>
                    <div className=" ">
                      <div />

                      <Image
                        src={item}
                        alt="images"
                        height={780}
                        width={2000}
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination "></div>
            </div>
          </div> */}

          <div>
            <Swiper
              spaceBetween={30}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={2000}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {images?.map((item: any) => (
                <SwiperSlide key={item?.id}>
                  <div className="-m">
                    <div />

                    <Image
                      className="z-0"
                      src={item}
                      style={{
                        zIndex: "-10px",
                      }}
                      alt="images"
                      height={780}
                      width={2000}
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          {/* Products  */}

          <div className="grid grid-rows-2 items-center justify-center gap-x-10  ">
            <div className="  grid grid-cols-6    ">
              {allproducts?.data?.products?.slice(0, 6)?.map((item: any) => {
                if (item?.isActive === true) {
                  return (
                    <div
                      // href={`/products/viewproduct?productId=${item?._id}`}
                      key={item?._id}
                      onClick={() => {
                        handleroute(item?._id);
                      }}
                    >
                      {/* <div
                        className={`m-[20px]   cursor-pointer px-[40px] py-[10px] md:h-[250px] md:w-[250px] lg:h-[250px] lg:w-[250px] xl:h-[180px] xl:w-[180px] ${Style.circle}`}
                      >
                        <div className="mt-8 text-center xl:ml-0 xl:mt-4">
                          <Image
                            objectPosition="center"
                            src={item?.media?.[0]?.url}
                            height="100px"
                            width="100px"
                            alt={item?.name}
                            objectFit="cover"
                          />
                          <div className="mt-2 w-[150x] truncate text-[14px]">
                            {item?.name}
                          </div>
                        </div>
                      </div> */}
                    </div>
                  );
                }
              })}
            </div>
            {/* <div className="  flex justify-center">
              {allproducts?.data?.products?.slice(6, 12)?.map((item: any) => {
                if (item?.isActive === true) {
                  return (
                    <div
                      // href={`/products/viewproduct?productId=${item?._id}`}
                      key={item?._id}
                              onClick={() => {
                  handleroute(item?._id);
                }}
                      
                    >
                      <div
                        className={`m-[20px]   cursor-pointer px-[40px] py-[10px] md:h-[250px] md:w-[250px] lg:h-[250px] lg:w-[250px] xl:h-[180px] xl:w-[180px] ${Style.circle}`}
                      >
                        <div className="mt-8 text-center xl:ml-0 xl:mt-4">
                          <Image
                            objectPosition="center"
                            src={item?.media?.[0]?.url}
                            height="100px"
                            width="100px"
                            alt={item?.name}
                            objectFit="cover"
                          />
                          <div className="mt-2 w-[150x] truncate text-[14px]">
                            {item?.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div> */}
          </div>

          {/* <div className="m-1 mt-[50px] grid justify-center gap-4 py-[20px] lg:flex xl:flex   ">
         

          <div className="text-[45px] font-semibold font-[Open Sans] text-[#612C13] text-center py-10 ">
            NEW ARRIVALS
          </div>
        </div>
        <div>
          {/* Products */}

          <div>
            <div className="font-[Open Sans] py-10 text-center font-semibold text-[#612C13] xxs:text-[35px] md:text-[45px] ">
              NEW ARRIVALS
            </div>
            <div className=" flex justify-center">
              <div className="grid gap-10 xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allproducts?.data?.products?.slice(0, 6)?.map((item: any) => (
                  <div
                    key={item?._id}
                    onClick={() => {
                      handleroute(item?._id);
                    }}
                  >
                    <div
                      className={`${Style.products} flex h-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition delay-150 duration-300  ease-in-out xxs:w-[310px] sm:m-2 md:w-[350px] `}
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
                          src={item?.media?.[0]?.url}
                          height="250px"
                          width="250px"
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
          {/* <div className="my-20 flex justify-center "></div> */}
        </div>
        <div>
          <div className="xxs:hodden relative my-5 h-fit bg-[#F7EEE1] py-[50px]">
            <div className="my-10 flex flex-wrap justify-center gap-10 ">
              {serviceList.map((item: any) => (
                <div
                  key={item?.id}
                  className="relative mx-2 mt-10 h-[142px] w-full rounded-xl border-[2px] border-[#8a8a8a]  bg-[#612c13] pt-[60px] sm:w-1/2 md:w-1/3 lg:mt-0 lg:w-1/5 xl:mt-0 xl:w-[300px]"
                >
                  <div className="absolute -top-[50px] left-[50%] max-h-[100px] max-w-[100px] translate-x-[-50%] transform  rounded-full border-2 border-[#612c13]  bg-[#F7EEE1] p-5 ">
                    <img src={item?.img} height="100px" width="100px" />
                  </div>
                  <div className=" bg-[#612c13] text-center ">
                    <div className="mt-5 text-[20px] text-[#F7EEE1] ">
                      {item?.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Free Shipping */}

        <div>
          <div className="font-[Open Sans] py-10 text-center font-semibold text-[#612C13] xxs:text-[35px] md:text-[45px] ">
            BEST SELLERS
          </div>
          <div>
            <div className=" flex justify-center">
              <div className="grid gap-10 xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allproducts?.data?.products?.slice(3, 8)?.map((item: any) => (
                  <div
                    key={item?._id}
                    onClick={() => {
                      handleroute(item?._id);
                    }}
                  >
                    <div
                      className={`${Style.products} flex h-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition delay-150 duration-300  ease-in-out xxs:w-[250ox] sm:m-2 md:w-[350px] `}
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
                          src={item?.media?.[0]?.url}
                          height="250px"
                          width="320px"
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

export default Home;
