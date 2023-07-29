/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useMail } from "@/hooks/Forgotmail/mutation";

const ForgotEmail = () => {
  // ===========================================USESTATE==========================================================================

  const [email, setEmail] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(false);

  // =====================================================================================================================
  // ============================================Declaring Constants=========================================================================

  const router: any = useRouter();

  // ====================================================================================================================

  // ============================================Declaring Functions =========================================================================

  const handleToast = (err: any) => {
    toast.error(err, {
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

  const handleSucess = (msg: any) => {
    toast.success(msg, {
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
  // ============================================API HOOK =========================================================================
  const mail = useMail();
  // ==========================================================================================================================
  // ================================================API CALL==========================================================================
  const handleSubmit = () => {
    if (email) {
      mail
        ?.mutateAsync({
          body: {
            email: email,
          },
        })
        ?.then((res: any) => {
          console.log("res", res);
          handleSucess(res?.message);
          setTimeout(() => {
            router.push(`/ForgotEmail/ForgotOTP?email=${email}`);
          }, 2000);
        })
        .catch((err) => {
          handleToast(err?.response?.data?.error?.message);
        });
    } else {
      if (email.trim() === "") {
        setError(true);
      } else {
        setError(false);
      }
    }
  };
  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
    setError(false);
    // ==========================================================================================================================
  };
  return (
    <div>
      <div className="mb-5">
        <ToastContainer />
      </div>
      <div className="  flex justify-center py-2">
        <div className="flex flex-col gap-[10px] rounded-md bg-[#F7EEE1] px-10 py-5 text-[#612C13] shadow-xl ">
          <p className="bordr mt-10 px-2 py-4 text-center font-[Cinzel,sans-serif] text-3xl font-semibold">
            {" "}
            Forgot Password
          </p>
          <div className="borderr flex flex-col items-center gap-2 rounded-sm border-[#100C08] p-2">
            <p className="borderr py- px-2 text-center font-[Cinzel,sans-serif] text-xl font-semibold ">
              Enter Email Address
            </p>
            <div className="borderr ">
              <input
                type="email"
                onChange={(e) => {
                  {
                    handleInputChange(e);
                  }

                  setEmail(e.target.value);
                }}
                className="w-[100%] rounded-[25px] border  border-[#612C13] bg-transparent px-5 py-2 text-[18px] focus:border  focus:outline-none"
                placeholder="Enter Your Email"
              />
              {error && (
                <p style={{ color: "red" }}>Please enter your email.</p>
              )}
            </div>
            <p className="borde mt-4 cursor-pointer px-2 py-1 text-center font-[sans-serif] text-[12px]  font-semibold ">
              Back to{" "}
              <span className="" onClick={() => router.push("Signin")}>
                Log In
              </span>{" "}
            </p>
            <div
              className="mt-3 cursor-pointer rounded-[25px] border border-[#612C13] bg-[#612C13]  text-center text-xl text-[#F7EEE1]  "
              onClick={handleSubmit}
            >
              {submitLoading ? (
                <div className="flex justify-center bg-black"></div>
              ) : (
                <div className=" w-[150px] rounded-[25px] bg-[#612C13] px-2 py-2 font-[Cinzel,sans-serif]  font-semibold">
                  Send
                </div>
              )}
            </div>
            <div className="flex  w-[80%] items-center justify-center">
              <hr className="w-[50%] border border-[#612C13]" />{" "}
              <p className="px-2 py-2 text-center font-[sans-serif] text-[15px] font-semibold ">
                Or
              </p>
              <hr className="w-[50%] border border-[#612C13]" />
            </div>

            <p className=" py- px-2 text-center font-[sans-serif] text-[12px] font-semibold">
              Don't have an account?
            </p>
            <div
              className="w-[50%] cursor-pointer px-2 pb-4 text-center font-[Cinzel,sans-serif]  text-xl font-semibold hover:text-[#612C13]"
              onClick={() => {
                router.push("/Signup");
              }}
            >
              SignUp
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default ForgotEmail;
