import React from "react";

export default function Para({ title1, title2, para, fullpara }) {
  return (
    <div className="space-y-4">
      <h1 className=" text-xl  font-semibold sm:text-5xl sm:font-bold">
        {title1} <span className="text-yellow">{title2}</span>
      </h1>
      <p className=" sm:hidden font-light">{para}</p>
      <div className=" sm:py-8">
        <p className=" hidden sm:block font-light text-xl text-center">
          {fullpara}
        </p>
      </div>
    </div>
  );
}
