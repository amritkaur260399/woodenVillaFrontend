import {
  notifyError,
  notifySuccess,
} from "@/components/UIComponents/Notification";
import { useLogin } from "@/hooks/Login/mutation";
import { CustUser } from "@/services/Customer";
import { meUser } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  // ==========================UseStates========================================================================================
  const [passwordVisible, setPasswordVisible]: any = useState(false);

  const [formData, setFormData]: any = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useAtom(meUser);

  const [errors, setErrors]: any = useState({});

  // ==================================================================================================================

  // ==========================Declaring Constants========================================================================================

  const router = useRouter();
  const Handleroute = () => {
    router.push("/Signup");
  };
  const Handleroute2 = () => {
    router.push("/ForgotEmail");
  };
  const Login = useLogin();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleToast = () => {
    toast.success(" Logged in successfully!", {
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

  const handleToast2 = (message: any) => {
    toast.error(message, {
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
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn?.includes("true")) {
      router.push("/");
    }
  }, []);

  // ==================================================================================================================

  // ==========================API Call =======================================================================================

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let errors: any = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Format is not correct";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      Login?.mutateAsync({
        body: {
          email: formData?.email,
          password: formData?.password,
        },
      })
        .then((response: any) => {
          if (response?.success) {
            // console.log("respoonse", response);
            handleToast();
            console.log("ressponse", response);
            localStorage.setItem("accessToken", response?.accessToken);
            localStorage.setItem("isLoggedIn", "true");

            // setUser()
            setTimeout(() => {
              router.push(`/`);
            }, 2000); // Change
            // window.location.reload();
            console.log("response?.user", response?.user);
            CustUser()
              .then((response: any) => {
                console.log("responsssse", response?.data);
                setUser(response?.data);
              })
              .catch((error) => {
                console.log("error", error);
              });
          }
        })
        .catch((error) => {
          handleToast2(error?.response?.data?.error?.message);

          console.log(error?.response?.data?.error?.message);
        });

      setFormData({ email: "", password: "" });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      // Enter key was pressed
      handleSubmit(event);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex h-fit justify-center pb-40 pt-24 text-[#612C13]">
        <div className="h-fit w-96 rounded-lg bg-[#f7eee1]  py-10 shadow-lg shadow-gray-700/50 ">
          <div className="w-full py-8 text-center text-4xl font-bold text-[#612C13]">
            Login
          </div>
          ​
          <div className="flex w-full flex-col   justify-center gap-4">
            <div className="mx-6">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <br></br>
              <input
                className="w-[100%]  rounded-lg  border-none  outline-none focus:ring-0"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
              {errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>
            <div className="mx-6">
              <label className="font-bold" htmlFor="password">
                Password:
              </label>
              <br></br>
              <div className="relative flex">
                <input
                  className="w-[100%] rounded-lg   border-none   outline-none  focus:ring-0 "
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  onKeyDown={handleKeyDown}
                  name="password"
                  value={formData.password}
                  onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2"
                >
                  {passwordVisible ? (
                    <AiOutlineEye className=" text-[20px]" />
                  ) : (
                    <BsEyeSlash className="text-[20px]" />
                  )}
                </button>{" "}
              </div>
              {errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <button
              className="mx-4 mt-10 rounded-lg  bg-[#612C13] px-8 py-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div
            className=" my-2 w-full cursor-pointer text-center"
            onClick={Handleroute2}
          >
            Forgot Password
          </div>
          <div className="w-full text-center">
            Already have an account yet?{" "}
            <div className="cursor-pointer font-bold " onClick={Handleroute}>
              SignUp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
