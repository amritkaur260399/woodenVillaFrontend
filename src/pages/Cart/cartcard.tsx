import React, { useState } from "react";
import Image from "next/image";
import { Like, Liked } from "@/utils/AppIcons";
import { useAddtoCart, useDeleteCart } from "@/hooks/cart/mutation";
import Loader from "@/components/Loader";
import { useAddtoWishList } from "@/hooks/wishlist/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cartcard = ({ val, refetch }: any) => {
  // ===========================================USESTATES==============================================================
  const [loading, setLoading] = useState(false);
  // =================================================================================================================

  // ===========================================USE HOOK==============================================================

  const cartUpdate = useAddtoCart();
  const deleteCart = useDeleteCart();
  const AddWishlist: any = useAddtoWishList();
  // =======================================================================================================================

  // =============================================DECLARING FUNCTIONS==========================================================================

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

  // =================================================================================================================
  const handleToast2 = () => {
    toast.success(" Product Removed  From Cart", {
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
  // =================================================================================================================

  // ===================================================API CALL====================================================================

  const DeleteCart = (id: any) => {
    // console.log("id", id);
    deleteCart
      ?.mutateAsync({
        pathParams: {
          id,
        },
      })
      ?.then((res: any) => {
        console.log("res", res);
        refetch();
        handleToast2();
        // window.location.reload();
      })
      ?.catch((err: any) => {
        console.log("err", err);
      });
    // ================================
  };
  const AddToWishlist = (id: any) => {
    if (id) {
      // console.log("id", id);

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
  // =======================================================================================================================

  const handleClick = ({ productId, quantity }: any) => {
    setLoading(true);

    // Perform some async action, such as an API call

    // console.log("id", productId);
    // console.log("item", quantity);
    cartUpdate
      ?.mutateAsync({
        body: {
          productId: productId,
          quantity: quantity,
        },
      })
      ?.then((res: any) => {
        console.log("res", res);
        refetch();
        // window.location.reload();
      })
      ?.catch((err: any) => {
        console.log("err", err);
      });

    // Once the action is complete, setLoading(false) can be called to indicate completion

    setTimeout(() => {
      setLoading(false);
      // Action complete, perform any additional logic
    }, 1000);
  };

  // =======================================================================================================================

  return (
    <div>
      <ToastContainer />
      <div key={val?._id}>
        <div className="  my-5 flex h-fit w-[950px] border px-2 py-3 text-[15px]  shadow-md">
          <div className="   flex  ">
            <Image
              src={val?.productDetails?.media[0]?.url}
              alt={val?.productDetails?.subProductName?.name}
              height={100}
              width={120}
              objectFit="scale-down"
              className="rounded "
            />
            <div className="   truncate-4-lines h-[120px] w-[200px] px-4 py-4 ">
              <p>{val?.productDetails?.subProductName?.name}</p>
              {/* <p>Size:213223</p> */}
              {/* <p>Price:${val?.productDetails?.price}</p> */}
            </div>
          </div>
          <div className="  flex w-[200px] flex-col items-center py-8 ">
            {" "}
            <div className=" flex justify-center  ">
              <button
                className=" "
                //   onClick={() => {

                //      result === 1
                //        ? setResult(result)
                //        : setResult(result - 1);

                //   }}
                // >

                onClick={() => {
                  handleClick({
                    productId: val?.productId,
                    quantity: val?.quantity - 1,
                  });
                }}
              >
                {val?.quantity === 1 ? (
                  <button
                    disabled={true}
                    className=" h-[35px]  cursor-not-allowed  border bg-[#F6F6F6] px-[10px] text-[20px] hover:border-[#8A4E32] hover:text-[#8A4E32]"
                  >
                    -
                  </button>
                ) : (
                  <button className=" h-[35px]  border bg-[#F6F6F6] px-[10px] text-[20px] hover:border-[#8A4E32] hover:text-[#8A4E32]">
                    {" "}
                    {loading ? <Loader /> : "-"}{" "}
                  </button>
                )}
              </button>

              <div className=" ml-[4px] h-[35px]  border bg-[#F6F6F6] px-[10px]  py-1 text-[20px] ">
                {val?.quantity}
              </div>
              <button
                className=""
                // onClick={() => {
                //   result === val?.productDetails?.inventory
                //     ? setResult(result)
                //     : setResult(result + 1);
                //   // setResult(result + 1);
                // }}
                onClick={() => {
                  handleClick({
                    productId: val?.productId,
                    // quantity:
                    //   val?.quantity === val?.productDetails?.inventory
                    //     ? val?.quantity
                    //     : val?.quantity + 1,
                    quantity: val?.quantity + 1,
                  });
                }}
              >
                <button className=" h-[35px]  border bg-[#F6F6F6] px-[10px] text-[20px] hover:border-[#8A4E32] hover:text-[#8A4E32]">
                  {" "}
                  {loading ? <Loader /> : "+"}{" "}
                </button>
              </button>
            </div>
          </div>
          <div className="   w-[200px]  py-10 text-center text-[25px]">
            {" "}
            ${val?.quantity * val?.productDetails?.price}
            <div className="text-[15px] ">Inc. all Taxes</div>
          </div>
          <div className="   flex w-[200px] items-center justify-evenly">
            {/* <Like /> */}
            <div className=" ">
              {val?.productDetails?.isAddedToWishList === true ? (
                <Liked />
              ) : (
                <button
                  onClick={() => {
                    AddToWishlist(val?.productId);
                  }}
                >
                  <Like />
                </button>
              )}
            </div>
            <button
              className="rounded-md border border-gray-400 px-2 py-1 hover:border-[#8A4E32]"
              onClick={() => {
                DeleteCart(val?._id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
