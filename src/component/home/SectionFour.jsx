import React from "react";
import TeamProfile from "./SectionFour/TeamProfile";
import Team1 from "../../assets/Home/TeamCard/Rectangle 7.png";

export default function SectionFour() {
  return (
    <div className="text-white flex flex-col justify-center text-center bg-gray26 space-y-3 p-8 sm:h-screen sm:bg-gradient-to-tr sm:from-gray   sm:via-bg sm:to-gray">
      <h1 className="text-lg uppercase font-light sm:text-3xl sm:pb-8">
        <span className="border-b-2 border-yellow">about</span> us
      </h1>
      <h1 className="font-bold text-2xl sm:text-5xl sm:pb-8">
        Meet <span className="text-yellow">out team</span>
      </h1>
      <p className="font-light sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident,
      </p>
      <div className="grid grid-cols-2 m-auto sm:flex sm:flex-row">
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
        <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
      </div>
    </div>
  );
}
