import React from "react";
import StudyCard from "./SectionThree/StudyCard";
import Pic1 from "../../assets/Home/StudyCard/Rectangle 7-1.png";
import Pic2 from "../../assets/Home/StudyCard/Rectangle 7.png";
import Pic3 from "../../assets/Home/StudyCard/Rectangle 8.png";
import Pic4 from "../../assets/Home/StudyCard/Rectangle 9.png";

export default function SectionThree() {
  return (
    <div className="bg-bg p-8 sm:bg-gradient-to-br sm:from-gray   sm:via-bg sm:to-gray sm:p-24">
      <div className=" text-white space-y-4 sm:space-y-8  ">
        <div className="sm:space-y-10 sm:w-6/12 space-y-8">
          <h1 className=" text-xl uppercase font-light sm:text-3xl ">
            <span className="border-b-2 border-yellow">our</span> work
          </h1>
          <div className="space-y-4 pr-20">
            <h1 className="font-bold text-2xl sm:text-5xl">
              Case Studies,{" "}
              <span className="text-yellow ">a selection of successful</span>{" "}
              projects.
            </h1>
            <p className="font-light sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <button className="uppercase ">
            {" "}
            <span className="border-b-2 border-yellow text-base sm:text-xl sm:font-medium">
              view al case study
            </span>
          </button>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 text-white sm:space-y-3">
        <StudyCard
          src={Pic1}
          title="Title goes here"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <StudyCard
          src={Pic2}
          title="Title goes here"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <StudyCard
          src={Pic3}
          title="Title goes here"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <StudyCard
          src={Pic4}
          title="Title goes here"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
    </div>
  );
}
