import React from "react";
import Creative from "../../assets/creative.svg";
import Brands from "./Brands";
import Stats from "./Stats";

export default function SectionOne() {
  return (
    <div className="bg-gradient-to-tr from-bg from-35%  to-gray sm:bg-gradient-to-tl sm:from-bg sm:from-35%  sm:to-gray ">
      <div className="  sm:pt-24 pt-8">
        <div className="flex flex-row sm:p-4 justify-center space-x-3 lg:max-h-screen ">
          <div className="flex-row text-white  mt-14 space-y-10 p-5 sm:w-6/12">
            <img src={Creative} className="sm:hidden m-auto " />
            <p className="text-2xl font-bold sm:text-5xl sm:font-medium text sm:leading-snug	">
              Lorem ipsum dolor sit amet,
              <span className="pb-1 border-b-4 border-yellow ">
                {" "}
                consectetur
              </span>
              <span className="text-xl sm:text-5xl font-extrabold sm:font-medium">
                {" "}
                adipiscing elit.
              </span>
            </p>
            <p className="font-light sm:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <p className="sm:text-3xl">
                Wanna get in Touch?{" "}
                <span className="border-b-4 border-yellow">Let's talk</span>
              </p>
            </div>
            <div className=" sm:hidden p-6 space-y-8">
              <Stats />
              <Brands />
            </div>
            <div className="hidden sm:block ">
              <Stats />
            </div>
          </div>
          <img
            src={Creative}
            className=" hidden sm:block sm:object-contain  sm:h-auto  sm:w-5/12 justify-center lg:h-auto"
          />
        </div>
        <div className="hidden sm:block sm:pb-8">
          <Brands />
        </div>
      </div>
    </div>
  );
}
