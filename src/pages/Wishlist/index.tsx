import React, { useState } from "react";
import Image from "next/image";
import whoWeAre from "../../assets/whoWeAre.webp";
import { Delete, Cart1, Like, WISHLIST, Check } from "@/utils/AppIcons";
import Style from "./index.module.css";
import { UseGetWishList } from "@/hooks/wishlist/query";
import { useDeleteWishList } from "@/hooks/wishlist/mutation";
import { useAddtoCart } from "@/hooks/cart/mutation";
import { UseGetCart } from "@/hooks/cart/query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import NoProduct from "../../assets/emptywishlist-removebg-preview.png"


const Wishlist = () => {
  // ====================================================USESTATE===================================================================

  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipid, setShowTooltipid] = useState("");
 // ======================================================DECLARING CONSTANTS=================================================================
 const router = useRouter();
//  =============================================================================================================================================
  // =======================================================================================================================
  // ======================================================DECLARING FUNCTIONS=================================================================

  const handleMouseEnter = (id:any) => {
    setShowTooltip(true);
    setShowTooltipid(id);

  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setShowTooltipid("");
  };

  const handleroute = (id: any) => {
    router.push(`/ProductDescription?id=${id}`);
  };


  const handleToast1 = () => {
    toast.success(" Product Removed From  Wishlist", {
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
  // ==================================================================================================================================
 

// ==================================================USEHOOK ===============================================================================
const { data: allWishList, refetch }: any = UseGetWishList();
const Addcart = useAddtoCart();



  // =================================================================================================================================
  // =========================================================API CALL========================================================================



  const AddToCart = (id:any) => {
    if (id) {
      // console.log("id", id);
      // console.log("item", item);
      Addcart?.mutateAsync({
        body: {
          productId: id,
          quantity: 1,
        },
      })
        ?.then((res: any) => {
          // console.log("res", res);
          handleToast2()
          refetch();
        })
        ?.catch((err: any) => {
          console.log("err", err);
        });
    }
  };
  // console.log(allWishList, "Wish");
  const del: any = useDeleteWishList();

  const removeWishlist = (id: any) => {
    if (id) {
      del
        ?.mutateAsync({
          pathParams: {
            id,
          },
        })
        ?.then((res: any) => {
          console.log("res", res);
          handleToast1()
          refetch();
          // window.location.reload();
        })
        ?.catch((err: any) => {
          console.log("err", err);
        });
    }
  };

  // =================================================================================================================================================
  return (
  
    <div>
      <ToastContainer/>
      <div>
        <div className="my-10 flex flex-col items-center justify-center  text-center  font-serif text-[#652B12]  ">
          <WISHLIST /> <p className="px-5 py-5 text-[45px]">My Wishlist</p>
        </div>
       
      </div>
{allWishList?.getWishList?.length===0 ?<div className="flex  items-center justify-center text-[50px]"><Image src={NoProduct} alt='no product' height={500} width={500}/> </div>:<div> <div>
        <div className="flex justify-center">
          <table className="w-[950px] table-auto border-collapse">
            <thead>
              <tr>
                <th
                  className="px-2 py-2 text-[25px]   font-normal "
                  colSpan={2}
                >
                  <div className="px-2 text-start">Product Name
                    </div>
                </th>
                <th
                  className="px-4 py-2  text-[25px] font-normal   "
                  colSpan={0}
                >
                  Price{" "}
                </th>

                <th
                  className="px-4 py-2  text-[25px]  font-normal "
                  colSpan={0}
                >
                  Stock Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allWishList?.getWishList?.map((item: any) => (
                <tr className={"bg-gray-100  "} key={item._id}>
                 
                  <td className="w-[80px] border-b px-4 py-2">
                    {" "}
                    <Image
                      alt="product"
                      src={item?.productDetails?.media[0]?.url}
                      height={100}
                      width={80}
                      objectFit="scale-down"
                    />{" "}
                  </td>
    
                  <td className="w-[200px] border-b px-4 py-2" onMouseEnter={()=>{handleMouseEnter(item?.productId)}   } onMouseLeave={handleMouseLeave}>
                  <div className="tooltip-container cursor-pointer"   onClick={() => {
                  handleroute(item?.productId);
                }} >
    
         { showTooltipid === item?.productId && showTooltip && <div className="tooltip-content ">Click To See Full Product Details</div>}
                    {item?.productDetails?.subProductName?.name}
    </div>
                    
                  </td>
                  <td className="w-[150px] border-b px-4 py-2  text-center">
                    {/* $ {item?.productDetails?.price} */}
                  </td>
                  <td className="w-[200px] border-b px-4  py-2 text-center">
                   
                      <p className="text-green-500">InStock</p>
                  
                  </td>
                  <td className="border-b px-4 py-5 text-center  flex justify-around items-center ">
                  <div className=" " >
                {item?.productDetails?.isAddedToCart === true ? (
                  <button
                    disabled={true}
                    className=" flex  cursor-not-allowed items-center justify-center rounded-xl bg-[#612c13] px-2 py-1 text-[#F9F5F0]"
                  >
                    <Check />
                    Added
                  </button>
                ) : (
                  <button onClick={()=>{AddToCart(item?.productId)}} className="rounded-xl bg-[#612c13] px-2 py-1 text-[#F9F5F0]">
                    Add to Cart
                  </button>
                )}
              </div>
              <td className="w-[10px] border-b px-1 py-2 ">
                    <div
                      onClick={() => {
                        removeWishlist(item?._id);
                      }}
                    >
                      <Delete />
                    </div>
                  </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></div>}

     
    </div>
  );
};

export default Wishlist;
