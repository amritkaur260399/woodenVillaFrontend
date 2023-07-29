import React from "react";
import {
  EmailIcon,
  Facebook,
  Home,
  Instagram,
  Liked,
  Phone,
  Twitter,
} from "@/utils/AppIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* <div className=" border  border-[#612c13]"></div> */}
      <div className=" flex w-full items-center justify-center  bg-[#f7eee1] py-10  ">
        <div className="[w-70%] grid   py-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
          <div className="flex   h-72  flex-col  items-center justify-center ">
            <div>
              <h4 className="text-[#612C13]  ">Categories</h4>

              <div className=" flex flex-col gap-4 py-2 text-base text-[#612C13] ">
                <Link href={""} className=" ">
                  Sofa Furniture
                </Link>
                <Link href={""} className=" ">
                  Kitchen Furniture
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]   ">
                  Home
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]  ">
                  Bedroom Furniture
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]  ">
                  Bathroom Furniture
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]   ">
                  Office Furniture
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  h-72  flex-col  items-center justify-center ">
            <div>
              <h4 className="text-[#612C13] ">Information</h4>
              <div className="flex flex-col gap-4 py-2 text-base text-[#612C13]  ">
                <Link href={"/"} className="py-10">
                  Home
                </Link>
                <Link href={"/about"}> About Us</Link>
                <Link href={"/contact"}>Contact Us</Link>
                <Link href={""} className="py-2 text-base text-[#612C13]   ">
                  Return & Exchange
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]  ">
                  Shipping & Delivery
                </Link>
                <Link href={""} className="text-basetext-[#612C13] py-2   ">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  h-72  flex-col  items-center justify-center ">
            <div>
              <h4 className="pr-[50px] text-[#612C13] ">Quick Links</h4>
              <div className="flex flex-col gap-4 py-2 text-base text-[#612C13]  ">
                <Link href={"/"} className="py-10">
                  Store Location
                </Link>
                <Link href={"/about"}> My Account</Link>
                <Link href={"/contact"}>Order Tracking</Link>
                <Link href={""} className="py-2 text-base text-[#612C13]   ">
                  Size Guide
                </Link>
                <Link href={""} className="py-2 text-base text-[#612C13]  ">
                  Shopping Rates
                </Link>
                <Link href={""} className="text-basetext-[#612C13] py-2   ">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex  h-72  flex-col  items-center justify-center ">
            <div>
              <div className="flex flex-row gap-4 py-2 xxs:justify-evenly md:justify-normal ">
                <Instagram />
                <Facebook />
                <Twitter />
              </div>

              <div className="flex flex-col py-2  pt-4 ">
                <div className="flex gap-2 py-2 text-base text-[#612C13]   ">
                  <Home />
                  184 Main Rd E, St Albans VIC 3021, Australia
                </div>
                <div className="flex gap-2 py-2 text-base text-[#612C13]   ">
                  <EmailIcon />
                  Mail Us:yourmail@gmail.com
                </div>
                <div className="flex gap-2 py-2 text-base text-[#612C13]  ">
                  <Phone />
                  Phone: + 00 123 456 789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
