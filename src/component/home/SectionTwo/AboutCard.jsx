import React from "react";

export default function AboutCard(props) {
  return (
    <div className="flex flex-col justify-center space-y-3 p-7 xl:px-28">
      <img
        src={props.src}
        className="w-24 h-24 mx-auto sm:mx-0 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      <h1 className="font-semibold text-2xl">{props.title}</h1>
      <p className="font-light">{props.desc}</p>
      <button className="">
        <span className="border-b-2 border-yellow">LEARN MORE</span>
      </button>
    </div>
  );
}
