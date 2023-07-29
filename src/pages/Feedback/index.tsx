import Image from "next/image";
import villa from "../../assets/asset_4_720.png";
import React, { useEffect, useState } from "react";

import Rating from "./Rating";
import { useFeedback } from "@/hooks/Feedback/mutation";
// import currentRating from "./RatingComponent";

const Feedback = () => {
  const [{ feedback }, setFeedback]: any = useState({});
  const postfeedback = useFeedback();

  const handleDataSubmit = (e: any) => {
    const { name, value } = e.target;
    setFeedback((crr: any) => ({ ...crr, [name]: value }));

    postfeedback
      ?.mutateAsync({
        body: {
          rating: 5,
          feedback: "hjd",
          productId: "647d6e871a26700814c9ed32",
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  //   const handleSubmit = () => {
  //     if (feedback) {
  //       axios
  //         .post(`${liveurl}/api/passenger/createFeedback`, user, {
  //           headers: { Authorization: localStorage.getItem("accessToken") },
  //         })
  //         .then((res) => {
  //           if (res?.data?.success) {
  //             handleToast();
  //           }
  //           setFeedback({ feedback: "" });
  //           setRateStar("");
  //         });
  //     }
  //   };
  return (
    <div>
      <div>
        <div className="">
          {/* <div className="mt-10 text-center text-[50px] font-semibold text-[#612C13] ">
            Feedback
          </div> */}

          <div className="header-bg-img mx-auto  mb-10 mt-10 h-[44rem] w-[100%] rounded-md border bg-[#F7EEE1] shadow-2xl md:w-[35rem]">
            <div className="">
              <div className="mx-auto flex w-[250px] justify-center py-10 sm:w-[300px]  lg:w-[400px] ">
                <Image
                  src={villa}
                  loading="lazy"
                  height={130}
                  width={250}
                  alt="logo"
                  className=""
                />
              </div>
            </div>
            <div className="flex  justify-around">
              <div className=" mx-auto">
                <div className=" mt-5 p-2 ">
                  <div className=" mb-6 text-center text-3xl text-[#612C13]">
                    {" "}
                    Feedback
                  </div>
                  <div className=" ">
                    <Rating />
                  </div>
                  <textarea
                    //   onChange={handleDataSubmit}
                    cols={45}
                    rows={6}
                    name="feedback"
                    value={feedback}
                    placeholder="Write your feedback"
                    className="mt-4 w-[100%] resize-none rounded border-none bg-gray-100 p-2 focus:outline-none"
                  ></textarea>
                  <div className="flex justify-center">
                    <button
                      className=" mt-4 flex justify-end rounded-md border border-[#612C13] bg-[#612C13] p-3 px-12   text-white hover:bg-amber-900  "
                      onClick={handleDataSubmit}
                    >
                      Submit
                    </button>
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

export default Feedback;
