import Image from "next/image";
import React from "react";
import { useState } from "react";
import Screeen from "../../assets/Screeen.png";
import contactPage from "../../assets/contactPage.png";
import { useRouter } from "next/router";
import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { useAddContact } from "@/hooks/contact/mutation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // ===============================================Usestate=====================================================================

  const [form, setForm]: any = useState({
    FirstName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });
  const [errors, setErrors]: any = useState({});
  // ====================================================================================================================

  // const router = useRouter();

  // ==================================Hook For Api Call =============================================
  const contact: any = useAddContact();
  // ==============================================================================================

  // ========================================================Declaring Function and API CALL===============================================================

  const handleToast = () => {
    toast.success(" Thanks For Contacting With Us!", {
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

  const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regexName = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!inputValue) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        FirstName: "Name is required",
      }));
    } else if (!regexName.test(inputValue)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        FirstName: "Name format is not a valid!",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        FirstName: "",
      }));
    }

    setForm((prevForm: any) => ({
      ...prevForm,
      FirstName: inputValue,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!inputValue) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        Email: "Email is required",
      }));
    } else if (!regexEmail.test(inputValue)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        Email: "Email is not a valid!",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        Email: "",
      }));
    }

    setForm((prevForm: any) => ({
      ...prevForm,
      Email: inputValue,
    }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const regexPhone = /^[0-9]+$/;
    if (!inputValue) {
      console.log("empty");
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        PhoneNumber: "PhoneNumber is required",
      }));
      setForm((prevForm: any) => ({
        ...prevForm,
        PhoneNumber: inputValue,
      }));
    } else if (regexPhone.test(inputValue)) {
      console.log("true", regexPhone.test(inputValue));
      // setForm({ ...form, PhoneNumber: inputValue });
      setForm((prevForm: any) => ({
        ...prevForm,
        PhoneNumber: inputValue,
      }));
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        PhoneNumber: "",
      }));
    } else if (!regexPhone.test(inputValue)) {
      console.log("false", regexPhone.test(inputValue));
      setForm(form);
    }
    //  else if (!regexEmail.test(inputValue)) {
    //   setErrors((prevErrors: any) => ({
    //     ...prevErrors,
    //     PhoneNumber: "PhoneNumber is not a valid !",
    //   }));
    // }
    else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        PhoneNumber: "",
      }));
      setForm((prevForm: any) => ({
        ...prevForm,
        PhoneNumber: inputValue,
      }));
    }
  };

  // ===============================================================================================================

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let errors: any = {};
    const regexName = /^[A-Za-z\s]+$/;
    // /^[a-zA-Z]+$/;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexphone = /^[0-9]+$/;
    // const cleaned = `${form.PhoneNumber}`.replace(/\D/g, "");
    // const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{3})$/);

    // /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;
    // /^\d*(\.\d+)?$/;
    // /^[0-9+-]+$/;

    if (!form.FirstName) {
      errors.FirstName = "Name is required";
    } else if (!regexName.test(form.FirstName)) {
      errors.FirstName = "Name format is not a valid!";
    }
    if (!form.Email) {
      errors.Email = "please enter your email id";
    } else if (!regexEmail.test(form.Email)) {
      errors.Email = "Email format is not a valid !";
    }
    if (!form.PhoneNumber) {
      errors.PhoneNumber = "Phone Number is required";
    } else if (!regexphone.test(form.PhoneNumber)) {
      errors.PhoneNumber = "Phone Number is not a valid!";
    }
    if (!form.Message) {
      errors.Message = "Message is required";
    }
    // else if (!form.Message.test(form.Message)) {
    //   errors.Message = "Message can't be empty";
    // }
    setErrors(errors);
    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      // console.log("formData1111111111111", form);
      contact
        ?.mutateAsync({
          body: {
            name: form?.FirstName,
            email: form?.Email,
            phone_number: form?.PhoneNumber,
            message: form?.Message,
          },
        })
        ?.then((response: any) => {
          console.log("response", response);
          handleToast();
          setForm({ FirstName: "", Email: "", PhoneNumber: "", Message: "" });
        })
        ?.catch((error: any) => console.log("error", error));
    }
  };
  // ======================================================================================================================
  return (
    <div className="h-fit ">
      <ToastContainer />
      <div
        className=" relative w-full 
        "
      >
        <Image
          alt="bgImage"
          priority
          height="300px"
          src={contactPage}
          className="    group-hover:opacity-60   "
        />
        {/* <BreadCrumb /> */}
      </div>
      <div className=" mb-40 mt-20  grid  items-center justify-center gap-4  lg:grid-cols-2 ">
        <div className=" w-[100%]  px-2  md:px-[5rem] xl:px-[8rem]">
          <div className=" flex flex-col gap-7 text-[18px] text-gray-800">
            <div className=" text-justify text-3xl font-semibold ">
              {" "}
              Get In Touch
            </div>
            <div className=" text-[16px]   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui
              maxime sit at totam molestias quis quisquam libero iusto
              voluptatem id dolorem dolor sint omnis fugiat, ipsa labore name
            </div>
            <div>
              <p className=" my-2 text-[16px]">
                <span className=" font-bold">Address:</span> House 09, Road 32,
                mohammadpur, Dhaka 1212{" "}
              </p>
              <p className=" my-2">
                <span className="font-bold">Phone:</span>+966 11 11 146{" "}
              </p>
              <p className=" my-2">
                <span className=" font-bold">Email:</span> yoursite@demo.com
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="">
              <input
                // onChange={(e) => {
                //   setForm({ ...form, FirstName: e.target.value });
                // }}
                onChange={handleFirstname}
                placeholder="Enter your name*"
                value={form.FirstName}
                className=" w-[80%] rounded-lg  border-none  bg-gray-200   focus:ring-0 "
                type="text"
              />
              {errors.FirstName && (
                <div className="text-red-600">{errors.FirstName}</div>
              )}
            </div>
            {/* <div className=" ">
                  <div>Last Name</div>
                  <input
                    onChange={(e) => {
                      setForm({ ...form, LastName: e.target.value });
                    }}
                    value={form.LastName}
                    type="text"
                    className="  "
                  />
                </div> */}
          </div>
          <div className="mt-4 ">
            <input
              className=" w-[80%] rounded-lg border-none bg-gray-200 focus:ring-0 "
              // onChange={(e) => {
              //   setForm({ ...form, Email: e.target.value });
              // }}
              onChange={handleEmailChange}
              placeholder="Enter your email*"
              value={form.Email}
              type="email"
            />
            {errors.Email && <div className="text-red-600">{errors.Email}</div>}
          </div>
          <div className="mt-4 ">
            <input
              // onChange={(e) => {
              //   setForm({ ...form, PhoneNumber: e.target.value });
              // }}
              onChange={handlePhone}
              maxLength={10}
              placeholder="Enter your phone number*"
              value={form?.PhoneNumber}
              type="text"
              className=" w-[80%] rounded-lg border-none bg-gray-200 focus:ring-0 "
            />
            {errors.PhoneNumber && (
              <div className="text-red-600">{errors.PhoneNumber}</div>
            )}
          </div>
          <div className=" mt-4 ">
            <textarea
              onChange={(e) => {
                if (e.target.value !== "") {
                  setErrors({ ...errors, Message: "" });
                  setForm({ ...form, Message: e.target.value });
                } else {
                  setForm({ ...form, Message: e.target.value });

                  setErrors({ ...errors, Message: "Message is required" });
                }
              }}
              placeholder="Enter message*"
              value={form.Message}
              className="h-36 w-[80%] resize-none rounded-lg border-none bg-gray-200 focus:ring-0"
            ></textarea>
          </div>
          {errors.Message && (
            <div className="mb-5 mt-0 text-red-600">{errors.Message}</div>
          )}
          <div className=" ">
            <button
              onClick={handleSubmit}
              className="  my-5 rounded-lg bg-[#612C13] px-10 py-2 font-bold text-white "
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="xxs:mt-14 lg:mt-0  ">
          {/* <Image
            alt=""
            src={Screeen}
            height="700px"
            width="600px"
            className=" group-hover:opacity-60  "
          /> */}
          {/* __________________GoogleMap_______________ */}
          <div className="mx-2 h-[680px] lg:w-[472px] 2xl:w-[700px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.733475427074!2d75.6004422!3d31.3111108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bcb2a31a8b7%3A0xa212ba939239a831!2sLyallpur%20Khalsa%20College%20Technical%20Campus%20(%20A%20merge%20entity%20of%20LKC%20Engg.%20%26%20KCLIMT)!5e0!3m2!1sen!2sin!4v1663839188864!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="mapLocation"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
