/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetAllProducts } from "@/hooks/Product/query";
import NoProduct from "../../assets/nproduct.png";
import Style from "./index.module.css";
import { ArrowRight } from "@/utils/AppIcons";

const AllProducts = () => {
  const [data, setData]: any = useState([]);

  const router = useRouter();
  const handleroute = (id: any) => {
    router.push(`/ProductDescription?id=${id}`);
  };
  console.log("idd", router?.query?.subcategory);

  const products: any = useGetAllProducts({});
  // console.log("products", products?.data?.products);

  return (
    <div>
      <div>
        <div className="">
          {products?.data?.products?.length === 0 && (
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
              OUR PRODUCTS
            </p>
          </div>
          <div>
            <div className="mt-[50px] flex justify-center">
              <div className="grid xxs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {products?.data?.products?.map((item: any) => (
                  <div
                    key={item?._id}
                    onClick={() => {
                      handleroute(item?._id);
                    }}
                  >
                    <div
                      className={`${Style.products} flex h-[350px] cursor-pointer flex-col items-center justify-center shadow-xl transition delay-150 duration-300  ease-in-out xxs:w-[280px] sm:m-2 md:w-[350px] `}
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

export default AllProducts;
