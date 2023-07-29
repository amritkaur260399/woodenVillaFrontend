import React, { createRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useOtp, useSendotp } from "@/hooks/Otp/mutation";
import { Base64 } from "js-base64";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOtpp } from "@/hooks/Forgotmail/mutation";

const ForgotOTP = () => {
  // =================================UseStates==============================================================
  const [submitLoading, setSubmitLoading] = useState(false);
  const [otpValues, setOTPValues] = useState(Array(6).fill(""));
  const [otp, setOtp] = useState("");

  const [timer, setTimer] = useState(0);

  // ================================================================================================================
  // ===============================Declaring Constants =================================================================

  const inputRefs: any = useRef([...Array(6)].map(() => createRef()));
  const router = useRouter();
  const Otpp = useOtpp();
  const resendOtp = useSendotp();
  const { email } = router.query;
  console.log("emaail", email);
  // =====================================================================================================================

  // =====================================UseEffect====================================================================

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  // ====================================================================================================
  // =======================================Declaring Functions=============================================================

  const handleInput = (event: any, index: any) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 1) {
      const newValues = [...otpValues];
      newValues[index] = value;
      setOTPValues(newValues);
      if (newValues.every((val) => val.length === 1)) {
        const otp = newValues.join("");
        setOtp(otp);
      }
      if (value && index < 5) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };
  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <input
          key={i}
          type="number"
          maxLength={1}
          value={otpValues[i]}
          onChange={(e) => handleInput(e, i)}
          className="focus:border- rounded-[100%] border border-[#612C13] bg-transparent text-center  text-[#612C13] focus:outline-none xxs:h-[40px] xxs:w-[40px]  xxs:text-[15px]  md:h-[50px] md:w-[50px] md:text-[18px]"
          placeholder="0"
          ref={inputRefs.current[i]}
        />
      );
    }
    return inputs;
  };

  const handleToast = (error: any) => {
    toast.error(error, {
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
  const handlemsg = (msg: any) => {
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
  const handlemsg1 = (msg: any) => {
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

  // ====================================================================================================
  // ========================================API Call ============================================================

  const handleOtpSubmit = () => {
    if (!otpValues || otpValues[0] === "") {
      //   //   handleToast();
    } else if (otpValues) {
      //     setSubmitLoading(true);

      // console.log("123456", email, "-", otp);
      // Define the string
      const decodedStringemail = email?.toString();
      const decodedStringOtp = otp?.toString();

      // Encode the String
      const token = Base64.encode(`${decodedStringemail}:${decodedStringOtp}`);
      // console.log("otp", token);
      Otpp?.mutateAsync({
        pathParams: {
          token,
        },
      })
        .then((response: any) => {
          console.log("response", response?.message);
          handlemsg(response?.message);
          setOtp("");
          setTimeout(() => {
            router?.push(`/ForgotEmail/ForgotOTP/NewPassword?email=${email}`);
          }, 2000);
        })
        .catch((error) => {
          handleToast(error?.response?.data?.error?.message);
          console.log(error);
        });
    }
  };

  const handleResendClick = () => {
    console.log("hello");
    console.log("emailllll", email);
    resendOtp
      ?.mutateAsync({
        body: {
          email: email,
        },
      })
      .then((res: any) => {
        // console.log("res", res);
        setTimer(120);
        setTimeout(() => {
          handlemsg1(res.message);
        }, 1000);
      })

      .catch((err: any) => {
        console.log("err", err);
      });
  };
  // ====================================================================================================

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <div className="mb-5"></div>
      <div className="  flex justify-center py-2 ">
        <div className="flex flex-col gap-[10px] border bg-[#F7EEE1]  py-5 text-white shadow-xl">
          <div className="mt-10 flex items-center px-2 py-4 font-[Cinzel,sans-serif] font-semibold xxs:text-2xl md:text-3xl">
            <hr className="w-[100%] border-[#612C13] pr-2 text-[#612C13] shadow-md shadow-[#612C13]" />
            <p className=" text-[#612C13] "> Verification</p>
            <hr className="w-[100%] border-[#612C13] shadow-md shadow-white" />
          </div>
          <div className="borderr border[#100C08] flex flex-col items-center gap-2 rounded-sm p-2">
            <p className="borderr px-2 py-4 text-center text-xl   font-semibold text-[#612C13] ">
              Enter Verification Code
            </p>
            <div className="">
              <div className="flex gap-2">{renderInputs()}</div>
            </div>

            <button
              className="mt-5 text-[#612C13]"
              onClick={handleResendClick}
              disabled={timer > 0}
            >
              {timer > 0 ? `Resend in ${timer} seconds` : "Resend OTP"}
            </button>
            <div></div>
            <div
              className="mb-4 mt-3 w-[50%] cursor-pointer   rounded-[25px] px-2 py-2  text-center font-[Cinzel,sans-serif] text-xl font-semibold text-black"
              onClick={handleOtpSubmit}
            >
              <div className=" w-[150px] rounded-[25px] bg-[#612C13] px-2 py-2 font-[Cinzel,sans-serif]  font-normal text-white">
                Verify
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotOTP;
