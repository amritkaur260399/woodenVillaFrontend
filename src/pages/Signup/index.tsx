import { useSign } from "@/hooks/Signup/mutation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  // ==========================UseStates========================================================================================
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    PhoneNumber: "",
    email: "",
    password: "",
  });
  const [errors, setErrors]: any = useState({});

  // ===============================================================================================================================================
  // ==================================Declaring constants =========================================================================================
  const router = useRouter();

  const signup = useSign();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\s][A-Za-z\s]*$/;
  // const regexPhone = /^[0-9]+$/;
  const regexPhone = /^[^a-zA-Z]+$/;

  // ===============================================================================================================================================

  // ================================================Declaring Functions ==============================================================================
  const Handleroute = () => {
    router.push("/Signin");
  };
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleToast = () => {
    toast.success(" Submitted successfully!", {
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
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regexName = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!inputValue) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else if (!regexName.test(inputValue)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        name: "Name format is not a valid!",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        name: "",
      }));
    }

    setFormData((prevForm: any) => ({
      ...prevForm,
      name: inputValue,
    }));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!inputValue) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!regexEmail.test(inputValue)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: "Email is not a valid!",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: "",
      }));
    }

    setFormData((prevForm: any) => ({
      ...prevForm,
      email: inputValue,
    }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: "",
      }));
    }

    setFormData((prevForm: any) => ({
      ...prevForm,
      password: inputValue,
    }));
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn?.includes("true")) {
      router.push("/");
    }
  }, []);

  // ===============================================================================================================================================

  // =====================================ApiCall===================================================================================================

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let errors: any = {};
    if (!formData.name) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      errors.name = "Format is not a valid";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Format is not correct";
    }
    if (!formData.PhoneNumber) {
      errors.PhoneNumber = "Phone Number is required";
    } else if (!regexPhone.test(formData.PhoneNumber)) {
      errors.PhoneNumber = "Format is not correct";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      console.log("formdata ", formData);
      console.log("errors", errors);
      const body = {
        name: formData?.name,
        phone: formData?.PhoneNumber,
        email: formData?.email,
        password: formData?.password,
      };

      signup
        ?.mutateAsync({
          body: {
            name: formData?.name,
            phone: formData?.PhoneNumber,
            email: formData?.email,
            password: formData?.password,
          },
        })
        .then((response: any) => {
          if (response?.success) {
            // console.log("respoonse", response);
            handleToast();
            window.localStorage.setItem("signUp", JSON.stringify(body));
            // window.localStorage.setItem("isLoggedIn", "true");
          }
          setTimeout(() => {
            router.push(`/Signup/Otp?email=${formData?.email}`);
          }, 2000);
        })
        .catch((error) => {
          handleToast2(error?.response?.data?.error?.message);

          console.log(error?.response?.data?.error?.message);
        });
      // alert("Your Form has been subsmitted successfully");
      setFormData({
        name: "",
        PhoneNumber: "",
        email: "",
        password: "",
      });
    }
  };
  // ===============================================================================================================================================

  return (
    <div>
      <ToastContainer />
      <div className=" my-20  flex w-full  justify-center  py-10 text-[#612C13]">
        <div className=" h-fit  w-96 rounded-lg  bg-[#f7eee1]  shadow-lg shadow-gray-700/50">
          <div className="w-full  p-4 text-center text-3xl ">
            Create Account
          </div>
          ​
          <div className=" px-6">
            <div className=" py-2">
              <label htmlFor="name" className="pl-2 font-semibold  ">
                Name
              </label>
              <br></br>
              <input
                className="  w-full rounded-lg  border-none  text-black   outline-none  focus:ring-0"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                // onChange={(event) => {
                //   setFormData({ ...formData, name: event.target.value });
                // }}
                onChange={handleName}
              />
              {errors.name && <div className="text-red-600">{errors.name}</div>}
            </div>
            <div className="py-2">
              <label className="pl-2   font-semibold">Mobile Number</label>
              <br></br>
              <input
                className=" w-full rounded-lg border-none  text-black   outline-none  focus:ring-0"
                type="number"
                // id="number"
                maxLength={10}
                // name="number"
                placeholder="Enter your Mobile number"
                value={formData.PhoneNumber}
                onChange={(event) => {
                  if (event.target.value.length > 10) {
                    return false;
                    // setErrors({
                    //   ...errors,
                    //   PhoneNumber: "Phone number must be less than 10",
                    // });
                  } else {
                    setErrors({ ...errors, PhoneNumber: "" });
                    setFormData({
                      ...formData,
                      PhoneNumber: event.target.value,
                    });
                  }
                }}
              />
              {errors.PhoneNumber && (
                <div className="text-red-600">{errors.PhoneNumber}</div>
              )}
            </div>
            <div className="py-2">
              <label className="pl-2  font-semibold">Email Address</label>
              <br></br>
              <input
                className=" w-full rounded-lg border-none  text-black   outline-none  focus:ring-0"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                // onChange={(event) => {
                //   setFormData({ ...formData, email: event.target.value });
                // }}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>
            <div className="py-2">
              <label className="pl-2  font-semibold">Password</label>
              <br></br>
              <div className="relative flex">
                <input
                  className="w-full rounded-lg border-none  text-black   outline-none  focus:ring-0"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  // onChange={(event) => {
                  //   setFormData({ ...formData, password: event.target.value });
                  // }}
                  onChange={handlePassword}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-1 top-2"
                >
                  {passwordVisible ? (
                    <AiOutlineEye className="ml-2 text-[20px]" />
                  ) : (
                    <BsEyeSlash className=" ml-2 text-[20px]" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <div className="py-2">
              <button
                className="  w-[98%] rounded-lg bg-[#612C13]  py-2 text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          ​
          <div className=" my-2 w-full text-center ">
            {" "}
            Already have an account ?{" "}
            <div
              className="mb-5 cursor-pointer font-bold text-[#612C13] "
              onClick={Handleroute}
            >
              Sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
