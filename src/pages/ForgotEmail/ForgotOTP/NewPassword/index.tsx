import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Base64 } from "js-base64";
import { usePass } from "@/hooks/Forgotmail/mutation";

const NewPassword = () => {
  // ==================================Usestate==============================================================
  const [passwordVisible, setPasswordVisible]: any = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError]: any = useState(null); // state variable for error message
  const [password, setPassword] = useState({ new: "", confirm: "" });
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  // =====================================================================================================================
  // ===========================================Declaring Constants==========================================================================
  const router = useRouter();
  const { email } = router.query;

  // =====================================================================================================================
  // =================================================Hook For Api call====================================================================
  const pass: any = usePass();
  // =====================================================================================================================
  // =================================================Declaring Functions====================================================================
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const togglePasswordVisibility1 = () =>
    setPasswordVisible1(!passwordVisible1);

  const handleToast = (err: any) => {
    toast.success(err, {
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
  // =====================================================================================================================
  // ==================================================Api Call===================================================================

  // function to handle form submission
  const handleSubmit = () => {
    if (password.new === "" || password.confirm === "") {
      setError("Please enter both fields."); // set error message if fields are empty
    } else if (password.new !== password.confirm) {
      setError("Passwords do not match."); // set error message if passwords don't match
    } else {
      setError(null); // clear error message
      // setSubmitLoading(true);

      const decodedStringemail = email?.toString();
      const decodedStringpassword = password.confirm?.toString();

      // Encode the String
      const token = Base64.encode(
        `${decodedStringemail}:${decodedStringpassword}`
      );
      // console.log("password", token);
      pass
        ?.mutateAsync({
          pathParams: {
            token,
          },
        })
        .then((response: any) => {
          console.log("response", response?.message);
          handlemsg(response?.message);

          setTimeout(() => {
            router.push(`/Signin`);
          }, 2000); // Change
        })
        .catch((error: any) => {
          handleToast(error?.response?.data?.error?.message);
          console.log(error);
        });
    }
  };
  // =====================================================================================================================

  return (
    <div>
      <div className="mb-5">
        <ToastContainer />
      </div>
      <div className="  flex justify-center py-2">
        <div className="flex flex-col gap-[10px] rounded-xl border bg-[#F7EEE1] px-10 py-5 text-[#612C13] shadow-xl">
          <p className="borde mt-10 px-2 py-4 text-center font-[Cinzel,sans-serif] text-3xl font-semibold">
            {" "}
            New Password
          </p>
          <div className="items-cente relative flex flex-col gap-3 rounded-sm border-[#F7EEE1] bg-[#F7EEE1] ">
            <p className="borderr px-2 py-1 font-[Cinzel,sans-serif] text-[15px] font-semibold ">
              Enter New Password{" "}
            </p>
            <div className="borderr relative flex gap-1">
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-[100%]  rounded-[15px] border border-[#612C13]  bg-[#F7EEE1] px-5 py-2 text-[18px] focus:border focus:outline-none"
                placeholder="Enter Your Password"
                onChange={(e) =>
                  setPassword({ ...password, new: e.target.value })
                }
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2"
              >
                {passwordVisible ? (
                  <AiOutlineEye className="text-[20px]" />
                ) : (
                  <BsEyeSlash className="text-[20px]" />
                )}
              </button>
            </div>
            <div className="items-cente flex  flex-col gap-2 rounded-sm border border-[#F7EEE1] bg-[#F7EEE1] ">
              {error && <p className=" font-medium text-red-500">{error}</p>}
            </div>
            <p className="borderr py- px-2 font-[Cinzel,sans-serif] text-[15px] font-semibold ">
              Confirm New Password
            </p>
            <div className="borderr relative flex gap-1 ">
              <input
                type={passwordVisible1 ? "text" : "password"}
                className="w-[100%] rounded-[15px] border  border-[#612C13] bg-transparent px-5 py-2 text-[18px] focus:border focus:outline-none"
                placeholder="Enter Your Password"
                onChange={(e) =>
                  setPassword({ ...password, confirm: e.target.value })
                }
              />{" "}
              <button
                onClick={togglePasswordVisibility1}
                className="absolute right-2 top-2"
              >
                {passwordVisible1 ? (
                  <AiOutlineEye className="text-[20px]" />
                ) : (
                  <BsEyeSlash className="text-[20px]" />
                )}
              </button>
            </div>
            <div className="items-cente flex  flex-col gap-2 rounded-sm border border-[#F7EEE1] bg-[#F7EEE1] ">
              {error && <p className=" font-medium text-red-500">{error}</p>}
            </div>

            <div
              className="mb-5 ml-[2%] mt-3 cursor-pointer rounded-[15px] px-2 py-2 text-center font-[Cinzel,sans-serif] text-xl font-semibold text-black"
              onClick={handleSubmit}
            >
              {submitLoading ? (
                <div className="flex justify-center bg-[#612C13]"></div>
              ) : (
                <div className=" w-[250px] rounded-[25px] bg-[#612C13] px-2 py-2 font-[Cinzel,sans-serif] font-semibold text-[#F7EEE1]">
                  Submit
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default NewPassword;
