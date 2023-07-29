import React, { useState } from "react";
import Image from "next/image";
import whoWeAre from "../../assets/whoWeAre.webp";
import { Cart2, Delete, Like } from "@/utils/AppIcons";

import { UseGetCart } from "@/hooks/cart/query";
import Cartcard from "./cartcard";
import NoProduct from "../../assets/emptyCaart-removebg-preview.png";

const Cart = () => {
  // =============================================USEHOOK==========================================================================

  const { data: AllCart, refetch }: any = UseGetCart();
  // =======================================================================================================================

  // console.log("AllCart?.data", AllCart);

  return (
    <div>
      <div className="my-10 flex flex-col items-center justify-center  text-center  font-serif text-[#652B12]  ">
        <Cart2 /> <p className="px-5 py-5 text-[45px]">My Cart</p>
      </div>

      <div className="  flex justify-center">
        {/* <div className="">
        <table className=" mx-auto w-[70%] h-fit border border-gray-200 shadow-md my-32">
          <thead className="">
           
              <th className="px-2 py-2 border text-[20px]">PRODUCT</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th></th>
              <th></th>
            
          </thead>
          <tbody className=" " >
            <tr>
              <td className="">
                 <div className="flex  justify-center gap-2">
                <div className="flex  ">
                  <Image
                    src={whoWeAre}
                    alt=""
                    height={100}
                    width={100}
                    className="rounded "
                  />
                </div>
                <div className="text-center">
                <div>DUMMY PRODUCT NAME</div>
                <div className=" ">Color : Black</div>
                <div className="text-2xl font-semibold"> $56.00</div>
                <div className="font-bold text-[#612c13]">IN Stock</div>
                </div>
                </div>
              </td>
              <td>
                {" "}
          
                  <div className=" flex justify-center">
               
                 
                          <button
                            className=" border bg-[#F6F6F6] px-[10px] hover:text-[#8A4E32] "
                            onClick={() => {
                              result === 1
                                ? setResult(result)
                                : setResult(result - 1);
                            }}
                          >
                            -
                          </button>

                          <div className=" ml-[4px] border bg-[#F6F6F6] px-[10px] ">
                            {result}
                          </div>
                          <button
                            className="ml-[4px] border bg-[#F6F6F6] px-[10px] hover:text-[#8A4E32]   "
                            onClick={() => {
                              setResult(result + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                  
          
              </td>
              <td>
                {" "}
                <div className=" mt-6  text-center">
              
                  <span className="text-2xl font-semibold">$250.00</span>{" "}
                </div>
              </td>
              <td>
                {" "}
                <div className=" flex justify-center ">
                  <Delete />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div> */}

        {AllCart?.getCart?.length === 0 ? (
          <div className="h-scree flex items-center justify-center text-[50px]">
            <Image src={NoProduct} alt="no product" height={500} width={800} />
          </div>
        ) : (
          <div className={` my-3 h-fit border-t   py-3 `}>
            <div className="  flex h-[35px] w-[950px] text-center text-[18px] font-semibold ">
              <div className=" w-[320px] ">Product</div>
              <div className="   w-[200px] ">Quantity</div>
              <div className="   w-[200px] "> Total Price</div>
              <div className="   w-[200px] "></div>
            </div>
            {AllCart?.getCart?.map((val: any) => (
              <Cartcard key={val?._id} val={val} refetch={refetch} />
              // <div key={val?._id}>
              //   <div className="  flex my-5 h-fit border px-2 py-3 shadow-md w-[950px]  text-[15px]">
              //     <div className="   flex  ">
              //       <Image
              //         src={val?.productDetails?.media[0]?.url}
              //         alt=""
              //         height={100}
              //         width={120}
              //         objectFit="scale-down"
              //         className="rounded "
              //       />
              //       <div className="   truncate-4-lines h-[120px] w-[200px] px-4 py-4 ">
              //         <p>{val?.productDetails?.subProductName?.name}</p>
              //         {/* <p>Size:213223</p> */}
              //         <p>Price:${val?.productDetails?.price}</p>
              //       </div>
              //     </div>
              //     <div className="   w-[200px] ">
              //       {" "}
              //       <div className=" flex justify-center py-10">
              //         <button
              //           className=" h-[35px]  border bg-[#F6F6F6] px-[10px] text-[20px] hover:border-[#8A4E32] hover:text-[#8A4E32] "
              //           onClick={() => {
              //             setDivId(val?._id)

              //            if (divId === val?._id) {

              //              result === 1
              //                ? setResult(result)
              //                : setResult(result - 1);
              //            }
              //           }}
              //         >
              //           -
              //         </button>

              //         <div className=" ml-[4px] h-[35px]  border bg-[#F6F6F6] px-[10px]  py-1 text-[20px] ">
              //           {result}
              //         </div>
              //         <button
              //           className="ml-[4px] h-[35px] border bg-[#F6F6F6] px-[10px] text-[20px]  hover:border-[#8A4E32] hover:text-[#8A4E32]"
              //           onClick={() => {
              //             setResult(result + 1);
              //           }}
              //         >
              //           +
              //         </button>
              //       </div>
              //     </div>
              //     <div className="   w-[200px]  py-10 text-center text-[25px]">
              //       {" "}
              //       $1232
              //       <div className="text-[15px] ">Inc. all Taxes</div>
              //     </div>
              //     <div className="   flex w-[200px] items-center justify-evenly">
              //       <Like />
              //       <button className="rounded-md border border-gray-400 px-2 py-1 hover:border-[#8A4E32]">
              //         Remove
              //       </button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
