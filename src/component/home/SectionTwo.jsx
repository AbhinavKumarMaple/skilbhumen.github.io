import React from "react";
import AboutCard from "./SectionTwo/AboutCard";

import Logo1 from "../../assets/brands/Homepage About Card/creative-brain.svg";
import Logo2 from "../../assets/brands/Homepage About Card/machine.svg";
import Logo3 from "../../assets/brands/Homepage About Card/Group.svg";

export default function SectionTwo() {
  return (
    <div className="bg-grayDark  sm:bg-gradient-to-tr sm:from-gray   sm:via-bg sm:to-gray flex sm:justify-evenly text-center flex-col p-6 space-y-6 px-10 text-white sm:h-screen ">
      <div className="sm:space-y-8">
        <p className="font-thin uppercase sm:text-2xl">
          {" "}
          <span className="border-b-2 border-yellow">creating</span> experiences
          through
        </p>
        <p className="font-bold p-4 mx-12 text-xl  sm:text-5xl lg:mx-52 ">
          AI, ML, mobile, <span className="text-yellow ">web, Degital UI</span>{" "}
          design and UX services
        </p>
      </div>
      <div className=" sm:flex sm:flex-row sm:text-left  ">
        <AboutCard
          src={Logo1}
          title="Artificial Intelligence"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          button="LEARN MORE"
        />
        <div className="border-r-2 border-grayDark"></div>
        <AboutCard
          className=""
          src={Logo2}
          title="Artificial Intelligence"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          button="LEARN MORE"
        />
        <div className="border-r-2 border-grayDark"></div>
        <AboutCard
          src={Logo3}
          title="Artificial Intelligence"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          button="LEARN MORE"
        />
      </div>
    </div>
  );
}
