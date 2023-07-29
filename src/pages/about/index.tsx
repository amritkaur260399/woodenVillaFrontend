import Image from "next/image";
import React from "react";
import about from "../../assets/about.webp";
import aboutBg from "../../assets/bgabout.jpg";
import { useRouter } from "next/router";

const About = () => {
  const aboutCards = [
    {
      // id: "1",
      Image: aboutBg,
      name: "Free Shipping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus.",
    },
    {
      // id: "2",
      Image: aboutBg,
      name: "Our Products",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus.",
    },
    {
      // id: "2",
      Image: aboutBg,
      name: "How We Works",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus.",
    },
  ];

  const router = useRouter();

  return (
    <div>
      {/* ================================================== ABOUT =================================================================== */}
      <div className=" mt-10 xl:mx-[15rem]">
        {/* <div className="  justify-center  lg:flex ">
          <div className=" w-full ">
            <Image
              src={about}
              width={600}
              height={400}
              alt="Picture of the product"
              className=" "
            />
          </div>
          <div className="  xxxs:mx-6 md:mx-[80px]  ">
            <h1 className=" text-[#612C13] ">Welcome to Wooden villa </h1>
            <p className=" my-[22px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              nulla impedit quasi ipsam eos ipsum tenetur asperiores itaque
              dolorem id totam eveniet magni adipisci, rem odit enim? Commodi
              eligendi cumque culpa placeat itaque autem fuga facilis reiciendis
              cupiditate architecto sit, amet qui quaerat nisi quasi minus,
              neque vitae soluta voluptatibus.
            </p>
            <button className=" mt-[3%] w-[20%] border  border-[#612C13] bg-[#632811] p-4  text-[18px] font-semibold text-white hover:bg-white  hover:text-[#612C13]  ">
              Shop now
            </button>
          </div>
        </div> */}
        <div className="   items-center justify-center  lg:flex">
          <div className=" flex w-full justify-center p-4 ">
            <div className="">
              <Image
                src={about}
                objectFit="contain"
                width="400px"
                height="400px"
                alt="logo"
              />
            </div>
          </div>

          <div className="w-full  p-4 ">
            {/* <h3 className=' text-[20px]'>Welcome to Wooden Villa</h3> */}
            <h1 className="text-center text-[38px] leading-9 tracking-wider  text-[#612c13] xl:text-start ">
              Welcome to Wooden Villa
            </h1>

            <p className="mt-3 w-full  text-justify  text-[16px] text-[#333333] ">
              Serving since 2017 To smoke shop ,vape shop ,head shop . We carry
              products such as vape , hookah , smoking accessories, lighter ,
              etc . We ship products directly from our Connecticut Wharehouse
              and strive to provide.We are a Wholesale distributor serving, etc.
              We carry products such as ashtrays, cigarette cases, incense &
              candles, lighters etc. We ship products directly from our
              warehouse in Bristol , CT and Strive to provide our customers with
              the best possible service & price. We accept most major credit
              cards (some restrictions apply).
            </p>
          </div>
        </div>
      </div>
      {/* ============================================================ section sec ============================================================ */}

      <div className="flex justify-center ">
        <div
          className="relative mx-2 my-10   w-full text-center   md:h-[35vh]   lg:h-[33vh] xl:h-[35vh] xl:w-[75vw]"
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundSize: "cover",
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" flex h-full w-full flex-col items-center justify-center bg-black opacity-80">
            <h1 className="p-16 text-center font-serif font-bold text-white xxxs:text-2xl md:text-4xl">
              Wooden Villa Wholesale
            </h1>
            <p className=" max-w-[600px] p-3 pb-10 text-center text-[16px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              facere earum quisquam placeat maxime tempore reiciendis hic
              praesentium iusto voluptatibus sapiente! Eum ex molestiae minus
              necessitatibus nam delectus rerum laboriosam!
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* <div
          className='relative mt-10  hidden w-full text-center  md:block md:h-[35vh]  lg:block lg:h-[33vh] xl:block xl:h-[38vh]'
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundSize: 'cover',
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`,
            backgroundRepeat: 'no-repeat',
          }}
        >
         <div className=" ">
            <div className="">
              <h1 className=" p-16 text-center font-serif font-bold text-white xxxs:text-2xl md:text-4xl">
                Wooden Villa Wholesale
              </h1>
              <div className="p-6 px-32 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                facere earum quisquam placeat maxime tempore reiciendis hic
                praesentium iusto voluptatibus sapiente! Eum ex molestiae minus
                necessitatibus nam delectus rerum laboriosam!
              </div>
              <div className="flex justify-center">
                <button className=" mt-[3%]  w-[20%]  border border-[#612C13] bg-[#632811] p-4 text-[18px] font-semibold text-white ">
                  Shop now
                </button>
              </div>
            </div>
            <div className=" mx-auto xxxs:w-[100%]  sm:w-[60%] lg:w-[40%]"></div>
          </div>
        </div> */}
      </div>
      {/* <div className=" mt-[8%] ">
        <div
          className="relative "
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundPosition: "center",
            height: "500px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  top-6 my-[2rem] h-[500px] bg-black bg-opacity-80 2xl:mx-[28.4rem] ">
            <div className="">
              <h1 className=" p-16 text-center font-serif font-bold text-white xxxs:text-2xl md:text-4xl">
                Wooden Villa Wholesale
              </h1>
              <div className="p-6 px-32 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                facere earum quisquam placeat maxime tempore reiciendis hic
                praesentium iusto voluptatibus sapiente! Eum ex molestiae minus
                necessitatibus nam delectus rerum laboriosam!
              </div>
              <div className="flex justify-center">
                <button className=" mt-[3%]  w-[20%]  border border-[#612C13] bg-[#632811] p-4 text-[18px] font-semibold text-white ">
                  Shop now
                </button>
              </div>
            </div>
            <div className=" mx-auto xxxs:w-[100%]  sm:w-[60%] lg:w-[40%]"></div>
          </div>
        </div>
      </div> */}
      {/* ============================================================ CARDS ============================================================ */}
      <div className="m-2  mb-[8%] grid xxxs:grid-cols-1  sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3  lg:justify-center xl:mx-[12%] xl:mt-[5%]">
        {aboutCards?.map((item: any) => (
          <div key={item?.id}>
            <div className="  m-5">
              <div className=" h-[440px] rounded-md border border-[#612C13] bg-[#F7EEE1] py-[14%] text-[#612C13] shadow-xl">
                <div className="flex justify-center">
                  <Image
                    alt="about"
                    src={item?.Image}
                    height="150"
                    width="150"
                    className=" rounded-full  "
                  />
                </div>

                <div className=" text-center xl:px-10 ">
                  <h5 className=" p-4 text-[29px] font-semibold xl:mt-[6%]  ">
                    {item?.name}
                  </h5>
                  <p className=" p-4 xl:mt-[6%]  ">{item?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
