/* eslint-disable react/no-unescaped-entities */
import { useGetAllProducts } from "@/hooks/Product/query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import array1 from "../../assets/furniture_Sofa_set copy 2.jpg";
import array2 from "../../assets/Again_sofa-copy.png";
import NoProduct from "../../assets/nproduct.png";
import Style from "./index.module.css";
import { ArrowRight } from "@/utils/AppIcons";

const Newarrival = () => {
  const [data, setData]: any = useState([]);

  const router = useRouter();
  const handleroute = (id: any) => {
    router.push(`/ProductDescription?id=${id}`);
  };
  // console.log("idd", router?.query?.subcategory);

  const products: any = useGetAllProducts({});
  // console.log("products", products?.data?.products);

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
  return (
    <div>
      <div>
        <div className="">
          {productss?.length === 0 && (
            <div className="flex h-screen items-center justify-center text-[50px]">
              <div>
                <Image
                  src={NoProduct}
                  alt="no product"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          )}

          <div>
            <p className="my-10 text-center font-serif text-[40px] text-[#652B12] ">
              NEW ARRIVALS
            </p>
          </div>

          <div className=" flex justify-center">
            <div className="mt-[50px] flex justify-center">
              <div className="grid grid-cols-4">
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
                          src={item?.media?.[0]?.url}
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

export default Newarrival;
