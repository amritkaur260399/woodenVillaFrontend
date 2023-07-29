import React, { useState } from "react";
import Image from "next/image";
import whoWeAre from "../../assets/whoWeAre.webp";
import { Delete } from "@/utils/AppIcons";
import Style from "./index.module.css";
const Order = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState(1);
  const [result, setResult] = useState(1);

  return (
    // <div className=" h-screen">
    //   <div>
       
    //     <div className="  p-8">
    //       <div className=" ml-[10%] grid grid-cols-5  2xl:w-[80%]  ">
    //         <div className="text-center">
    //           <p className="font-bold  text-[#8A4E32] ">PRODUCT</p>
    //           <div className="mt-[20%] flex items-center justify-center gap-x-2  ">
    //             <div>
    //               <Image
    //                 src={whoWeAre}
    //                 width={100}
    //                 height={100}
    //                 alt="Picture of the author"
    //               />
    //             </div>
    //             <div className=" ">
    //               <p className=" font-serif text-[13px] font-semibold text-[#666666] hover:text-[#8A4E32] ">
    //                 DUMMY PRODUCT NAME
    //               </p>
    //               <p className="text-[15px] text-[#666666] ">Color : Black </p>
    //               <p className="text-[15px] text-[#666666]">Size : SL</p>
    //             </div>
    //           </div>
    //           <div className="mt-[8%] flex items-center justify-center gap-x-2  ">
    //             <div>
    //               <Image
    //                 src={whoWeAre}
    //                 width={100}
    //                 height={100}
    //                 alt="Picture of the author"
    //               />
    //             </div>
    //             <div className=" ">
    //               <p className=" font-serif text-[13px] font-semibold text-[#666666] hover:text-[#8A4E32] ">
    //                 DUMMY PRODUCT NAME
    //               </p>
    //               <p className="text-[15px] text-[#666666] ">Color : Black </p>
    //               <p className="text-[15px] text-[#666666]">Size : SL</p>
    //             </div>
    //           </div>
    //           <div className="mt-[8%] flex items-center justify-center gap-x-2 ">
    //             <div>
    //               <Image
    //                 src={whoWeAre}
    //                 width={100}
    //                 height={100}
    //                 alt="Picture of the author"
    //               />
    //             </div>
    //             <div className=" ">
    //               <p className=" font-serif text-[13px] font-semibold text-[#666666] hover:text-[#8A4E32] ">
    //                 DUMMY PRODUCT NAME
    //               </p>
    //               <p className="text-[15px] text-[#666666] ">Color : Black </p>
    //               <p className="text-[15px] text-[#666666]">Size : SL</p>
    //             </div>
    //           </div>
    //         </div>

        

    //         <div className=" text-center">
    //           <p className="font-bold  text-[#8A4E32]">PRICE</p>
    //           <div className=" mt-[24%] font-semibold text-[#666666] hover:text-[#8A4E32]">
    //             $56.00
    //           </div>
    //           <div className=" mt-[42%] font-semibold text-[#666666] hover:text-[#8A4E32]">
    //             $56.00
    //           </div>
    //           <div className=" mt-[42%] font-semibold text-[#666666] hover:text-[#8A4E32]">
    //             $56.00
    //           </div>
    //         </div>

       

    //         <div className="">
    //           <p className="font-bold  text-[#8A4E32]">ORDERED ON </p>
    //           <div className=" mt-[24%] ">
    //             <div className=" flex  ">
    //              25th  March 2023

                  
                 
    //             </div>
    //           </div>
    //           <div className=" mt-[42%] ">
    //             <div className=" flex  ">
    //              25th  March 2020

                  
                 
    //             </div>
    //           </div>
    //           <div className=" mt-[42%] ">
    //             <div className=" flex  ">
    //              25th  December 2022

                  
                 
    //             </div>
    //           </div>
    //         </div>

            

    //         <div>
    //           <p className="font-bold  text-[#8A4E32]">TOTAL</p>
    //           <div className="mt-[24%] ">$112.00</div>
    //           <div className="mt-[42%] ">$112.00</div>
    //           <div className="mt-[42%] ">$112.00</div>
    //         </div>

    //               <div className="">
    //           <p className="font-bold  text-[#8A4E32]">TRACK YOUR ORDER</p>
    //           <div className="mt-[24%]  cursor-pointer ">
    //             <div className="border border-red-500 w-[80px]  text-center">

    //             TRACK
    //             </div>
    //           </div>
    //           <div className="mt-[45%]  cursor-pointer ">
    //           TRACK
    //           </div>
    //           <div className="mt-[45%]  cursor-pointer ">
    //           TRACK
    //           </div>
    //         </div>
    //       </div>
    //     </div>

      
    //   </div>
    // </div>
<div>
<div className="flex justify-center my-10">
<div className={` border shadow-xl bg-[#F9F5F0] px-3 py-2 `}  >
      <div className="text-2xl text-[#612c13] px-2 py-1">
        Delivered on 23rd March 2020
      </div>
      <div className="flex bg-[#F9F5F0]  justify-evenly place-content-center w-[1000px]  ">
       <div  className="">
         <Image
        src={whoWeAre}
        alt="product"
        height={150}
        width={150}
        objectFit="scale-down"
       
        />
       </div>
        <div className=" w-[500px]  py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae natus optio minima fugiat. Hic, tempore tenetur. Quo, totam repellat. Reiciendis 
        </div>
      <div className=" py-2 ">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          AMOUNT
          
        </div>
        <div  className="text-[#612c13] py-1 px-2">
          RS 40000
        </div>
      </div>
      <div className=" py-2">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          ORDERED ON 
          
        </div>
        <div className="text-[#612c13] py-1 px-2">
       5 JUNE 2023
        </div>
      </div>
      <div className=" py-10 ">
        <button className="border  rounded-lg border-[#612c13] text-[15px] h-[35px] w-[80px] cursor-pointer">

        TRACK
        </button>
      </div>
        
      </div>
    </div>
    
</div>
<div className="flex justify-center my-10">
<div className={` border shadow-xl bg-[#F9F5F0] px-3 py-2 `}  >
      <div className="text-2xl text-[#612c13] px-2 py-1">
        Delivered on 23rd March 2020
      </div>
      <div className="flex bg-[#F9F5F0]  justify-evenly place-content-center w-[1000px]  ">
       <div  className="">
         <Image
        src={whoWeAre}
        alt="product"
        height={150}
        width={150}
        objectFit="scale-down"
       
        />
       </div>
        <div className=" w-[500px]  py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae natus optio minima fugiat. Hic, tempore tenetur. Quo, totam repellat. Reiciendis 
        </div>
      <div className=" py-2 ">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          AMOUNT
          
        </div>
        <div  className="text-[#612c13] py-1 px-2">
          RS 40000
        </div>
      </div>
      <div className=" py-2">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          ORDERED ON 
          
        </div>
        <div className="text-[#612c13] py-1 px-2">
       5 JUNE 2023
        </div>
      </div>
      <div className=" py-10 ">
        <button className="border  rounded-lg border-[#612c13] text-[15px] h-[35px] w-[80px] cursor-pointer">

        TRACK
        </button>
      </div>
        
      </div>
    </div>
    
</div>
<div className="flex justify-center my-10">
<div className={` border shadow-xl bg-[#F9F5F0] px-3 py-2 `}  >
      <div className="text-2xl text-[#612c13] px-2 py-1">
        Delivered on 23rd March 2020
      </div>
      <div className="flex bg-[#F9F5F0]  justify-evenly place-content-center w-[1000px]  ">
       <div  className="">
         <Image
        src={whoWeAre}
        alt="product"
        height={150}
        width={150}
        objectFit="scale-down"
       
        />
       </div>
        <div className=" w-[500px]  py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae natus optio minima fugiat. Hic, tempore tenetur. Quo, totam repellat. Reiciendis 
        </div>
      <div className=" py-2 ">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          AMOUNT
          
        </div>
        <div  className="text-[#612c13] py-1 px-2">
          RS 40000
        </div>
      </div>
      <div className=" py-2">
      <div className="text-[#612c13] text-[18px] py-1 px-2">
          ORDERED ON 
          
        </div>
        <div className="text-[#612c13] py-1 px-2">
       15 JUNE 2022
        </div>
      </div>
      <div className=" py-10 ">
        <button className="border  rounded-lg border-[#612c13] text-[15px] h-[35px] w-[80px] cursor-pointer">

        TRACK
        </button>
      </div>
        
      </div>
    </div>
    
</div>
</div>

  );
};

export default Order;
