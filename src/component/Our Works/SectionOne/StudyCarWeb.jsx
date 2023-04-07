import React from "react";

export default function StudyCarWeb({ title, para, list, para2, img }) {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8 pb-10 ">
      <div className="col-span-1 space-y-5 ">
        <h1 className="xl:text-[37px] lg:text-[25px] sm:text-[20px] font-medium leading-snug">
          {title}
        </h1>
        <p className=" xl:text-[20px] lg:text-[16px] sm:text-[14px] font-light leading-normal">
          {para}
        </p>
        <ul className="marker:text-yellow xl:text-[20px] lg:text-[16px] sm:text-[14px] text-xl font-light list-disc space-y-4 list-inside">
          {list.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <p className="text-xl font-light xl:text-[20px] lg:text-[16px] sm:text-[14px]  leading-normal">
          {para2}
        </p>
      </div>
      <div className="col-span-2   overflow-hidden ml-auto">
        <img src={img} className="rounded-3xl mx-auto" />
      </div>
    </div>
  );
}
