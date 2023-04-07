import React from "react";
import Logo from "../assets/brands/image 1.png";
import Faq from "./Footer/Faq";
import SocialLogo from "./Footer/SocialLogo";
import { TbPhoneCall, TbMail, TbMapPin } from "react-icons/tb";

export default function Footer() {
  const useFullLinks = {
    title: "Useful Links",
    links: [
      { url: "", text: "Home" },
      {
        url: "",
        text: "About us",
      },
      { url: "", text: "Contact us" },
      { url: "", text: "Portfolio" },
    ],
  };
  const ourServices = {
    title: "our Services",
    links: [
      { url: "", text: "AI" },
      {
        url: "",
        text: "ML",
      },
      { url: "", text: "Digital design" },
      { url: "", text: "UI Services" },
    ],
  };
  const contactDetails = {
    title: "contact Details",
    links: [
      { url: "", text: "+91 987 654 3210", icon: <TbPhoneCall size={24} /> },
      {
        url: "",
        text: "youremail@example.com",
        icon: <TbMail size={24} />,
      },
      {
        url: "",
        text: "nowhere street, dummy road, example street, NY, 123456",
        icon: <TbMapPin size={50} />,
      },
    ],
  };

  return (
    <div className="">
      <div className="sm:hidden text-white sm:bg-gradient-to-tr sm:from-gray   sm:via-gray26 sm:to-grayDark ">
        {/* */}
        <div className=" p-8 bg-gray26 sm:bg-opacity-0 flex flex-col sm:flex-row  space-y-4 sm:space-x-8">
          <div className="text-center sm:text-left sm: flex flex-col sm:flex-col space-y-4">
            <img src={Logo} className="m-auto w-24" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="hidden sm:block">
              <SocialLogo />
            </div>
          </div>
          <div className="sm:hidden">
            <SocialLogo />
          </div>
          <div className="sm:hidden border-b-2 border-grayDark pb-4">
            <Faq title="usefull Links">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
            <Faq title="our services">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
            <Faq title="contact details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
          </div>
          <div></div>
        </div>
        <div className="border-r-1 border-grayDark"></div>
        {/* */}
        {/* */}
        <div className="bg-gray26 sm:flex sm:flex-row sm: sm:px-96 ">
          <p className="text-center font-light">© All rights reserved 2023</p>
          <div className="hidden sm:flex sm:flex-row">
            <p className="text-center font-light sm:text-white">
              © All rights reserved 2023
            </p>
            <p className="text-center font-light sm:text-white">
              reserved 2023
            </p>
          </div>
        </div>
        {/* */}
      </div>
      <div className=" hidden sm:block text-white mx-auto py-16 sm:bg-gradient-to-tr sm:from-footGray   sm:via-footGray sm:to-gray ">
        <div className=" ">
          <div className="px-4 pt-16 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 ">
            <div className="grid mb-8 lg:grid-cols-7 ">
              <div className="  lg:col-span-3 ">
                {/*  */}
                <div className="px-6 text-sm sm:text-left sm: flex flex-col sm:flex-col space-y-4 ">
                  <img src={Logo} className="pb-4 w-24 " />
                  <p className="sm:text-xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                  </p>
                  <div className="hidden sm:block">
                    <SocialLogo />
                  </div>
                </div>
                <div className="sm:hidden">
                  <SocialLogo />
                </div>
              </div>
              {/*  */}
              <div className="grid  gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 items-center">
                <div className="space-y-8 ">
                  <p className="font-light tracking-wide text-gray-300 uppercase xl:text-2xl">
                    <span className="border-b-2 border-yellow">usefull</span>{" "}
                    link
                  </p>
                  <ul className="mt-2 space-y-2 ">
                    {useFullLinks.links.map((link, index) => (
                      <li key={index} className=" mb-2 py-2 text-xl font-light">
                        <a
                          href={link.url}
                          className="text-blue-600 hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8 ">
                  <p className="font-light tracking-wide text-gray-300 uppercase xl:text-2xl">
                    <span className="border-b-2 border-yellow">Our</span>{" "}
                    services
                  </p>
                  <ul className="mt-2 space-y-2">
                    {ourServices.links.map((link, index) => (
                      <li key={index} className=" mb-2 py-2 text-xl font-light">
                        <a
                          href={link.url}
                          className="text-blue-600 hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8 ">
                  <p className="font-light tracking-wide text-gray-300 uppercase xl:text-2xl">
                    <span className="border-b-2 border-yellow">contact</span>{" "}
                    details
                  </p>
                  <ul className="mt-2 space-y-2">
                    {contactDetails.links.map((link, index) => (
                      <li
                        key={index}
                        className="mb-2 py-2 text-xl font-light flex items-center"
                      >
                        {link.icon}
                        <a
                          href={link.url}
                          className="text-blue-600 hover:underline ml-2"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between  pt-12 pb-10 border-t-2 border-grayDark sm:flex-row">
              <p className="text-sm text-gray-500 px-4">
                © Copyright 2020 Lorem Inc. All rights reserved.
              </p>
              <div className="flex  mt-4 space-x-4 sm:mt-0 px-4">
                <a href="/">Privacy Policy</a>
                <div className="border-r-2 border-grayDark "> </div>
                <a href="/">Terms of services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
