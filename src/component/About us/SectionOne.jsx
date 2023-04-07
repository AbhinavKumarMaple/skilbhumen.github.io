import React from "react";
import TeamProfile from "./SectionOne/TeamProfile";
import Team1 from "../../assets/AboutUs/Rectangle 7.png";

export default function SectionOne() {
  return (
    <div className="text-white flex flex-col  text-left gap-8  p-8  sm:p-24 sm:pt-32 pt-8  sm:h-screen bg-gradient-to-tr from-bg from-50% to-gray sm:bg-gradient-to-tl sm:from-bg sm:from-50% sm:to-gray">
      <h1 className="text-lg uppercase font-light sm:text-3xl sm:pb-8">
        <span className="border-b-2 border-yellow">about</span> us
      </h1>
      <h1 className="font-bold text-2xl sm:text-5xl sm:pb-8 sm:w-3/6">
        Meet <span className="text-yellow">out team. </span>
        Our unique Operating philosophy
      </h1>

      <div className="grid grid-cols-2 m-auto gap-7 sm:gap-20 sm:flex sm:flex-row ">
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
      </div>
      <p className="font-light sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident,
      </p>
    </div>
  );
}
