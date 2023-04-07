import React from "react";
import StudyCard from "./SectionOne/StudyCard";
import Pic1 from "../../assets/Home/StudyCard/Rectangle 7-1.png";
import Pic2 from "../../assets/Home/StudyCard/Rectangle 7.png";
import Pic3 from "../../assets/Home/StudyCard/Rectangle 8.png";
import Pic4 from "../../assets/Home/StudyCard/Rectangle 9.png";

import WebPic1 from "../../assets/OurWork/1 (1).png";
import WebPic2 from "../../assets/OurWork/1 (2).png";
import WebPic3 from "../../assets/OurWork/1 (3).png";
import StudyCarWeb from "./SectionOne/StudyCarWeb";

export default function SectionOne() {
  const items = [
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
  ];

  const title =
    ' Unlocking You - Ux heuristic 8 of 10: "Aesthetic and Minimalist Design",Applied to You';
  const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit`;

  const para2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit`;
  return (
    <div>
      <div className="sm:hidden  bg-gradient-to-tr from-bg from-50% to-gray sm:bg-gradient-to-tl text-white flex flex-col  text-left gap-8  p-8 pt-24  ">
        <h1 className="text-lg uppercase font-light sm:text-3xl sm:pb-8">
          <span className="border-b-2 border-yellow">Our</span> Works
        </h1>
        <h1 className="font-bold text-2xl sm:text-5xl sm:pb-8 sm:w-3/6">
          Case Studies,{" "}
          <span className="text-yellow">a selection of successful </span>
          projects.
        </h1>
        <div className="sm:hidden">
          <StudyCard
            src={Pic1}
            list={items}
            title="Title goes here"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <StudyCard
            src={Pic2}
            list={items}
            title="Title goes here"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <StudyCard
            src={Pic3}
            list={items}
            title="Title goes here"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <StudyCard
            src={Pic4}
            list={items}
            title="Title goes here"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
        </div>
      </div>
      <div className="hidden  text-white sm:block sm:p-16 sm:pt-24 xl:p-24 xl:pt-32 sm:bg-gradient-to-tl sm:from-bg sm:from-50% sm:to-gray">
        <div className="w-8/12 ">
          <h1 className="text-lg  uppercase font-light sm:text-3xl sm:pb-8">
            <span className="border-b-2 border-yellow">Our</span> Works
          </h1>
          <h1 className="font-bold tracking-wide leading-snug text-2xl sm:text-5xl sm:pb-8 sm:w-4/6">
            Case Studies,{" "}
            <span className="text-yellow">a selection of successful </span>
            projects.
          </h1>
        </div>
        <StudyCarWeb
          title={title}
          para={para}
          list={items}
          para2={para2}
          img={WebPic1}
        />
        <StudyCarWeb
          title={title}
          para={para}
          list={items}
          para2={para2}
          img={WebPic2}
        />

        <StudyCarWeb
          title={title}
          para={para}
          list={items}
          para2={para2}
          img={WebPic3}
          className="bg-gradient-"
        />
      </div>
    </div>
  );
}
