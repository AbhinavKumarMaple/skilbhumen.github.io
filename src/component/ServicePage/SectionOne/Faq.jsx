import { useState } from "react";

export default function Faq({
  title,
  fullTitle,
  para,
  para2,
  list,
  index,
  img,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-2 focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center gap-6 ">
          <p className="bg-yellow rounded-full w-11 h-11 lg:w-28 lg:h-28 flex justify-center items-center text-bg font-bold text-[20px] lg:text-5xl">
            {index}.
          </p>
          <p className="text-2xl font-semibold sm:text-5xl">{title}</p>
        </div>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="border-grayDark border-b-2 pt-8 ml-20 sm:ml-36"></div>

      {isOpen && (
        <div className="space-y-6 pt-0 lg:pl-36 lg:grid lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-4 lg:min-h-screen">
          <img src={img} className=" object-contain w-auto  xl:h-screen" />
          <div className="sm:flex sm:flex-col sm:gap-8">
            <h1 className="font-bold w-72 sm:w-10/12 text-xl sm:text-4xl sm:font-medium">
              {fullTitle}
            </h1>
            <p className="text-gray-700 sm:text-2xl sm:font-light">
              {" "}
              <p className=" sm:text-[16px] xl:text-[20px] lg:text-[16px] font-light leading-normal">
                {para}
              </p>
              <ul className="marker:text-yellow p-4  xl:text-[20px] lg:text-[16px] sm:text-[16px] text-xl font-light list-disc space-y-4 list-inside">
                {list.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
              <p className="text-xl font-light xl:text-[20px] lg:text-[16px] sm:text-[16px]  leading-normal">
                {para2}
              </p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
