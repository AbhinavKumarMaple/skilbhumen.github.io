import React from "react";
import Contact from "./ContactUs/Contact";

export default function ContactUs() {
  return (
    <div className="text-white bg-bg text-left space-y-6 p-8  sm:p-24 sm:space-y-8  sm:bg-gradient-to-br sm:from-gray   sm:via-bg sm:to-gray pt-24 sm:pt-32">
      <h1 className="text-lg uppercase font-light sm:text-3xl">
        <span className="border-b-2 border-yellow">contact</span> us
      </h1>
      <h1 className="font-bold text-2xl w-5/6 sm:text-5xl sm:w-5/12 pb-8">
        Interested in <span className="text-yellow">working with us? </span>
        Contact us now!
      </h1>
      <Contact />
    </div>
  );
}
