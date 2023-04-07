import React from "react";
import Faq from "./SectionOne/Faq";
import img from "../../assets/OurService/3.svg";

export default function SectionOne() {
  const points = [
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
  ];

  const Items = [
    {
      title: "Artificial Intelligence",
      fulltitle: `"Unlocking You - UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,
      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
   ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
   ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
    {
      title: "machine Learning",
      fulltitle: `"Unlocking You - UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,

      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
   ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,

      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
    {
      title: "Digital Designe Service",
      fulltitle: `"Unlocking You - UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,

      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,

      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-bg  to-gray sm:bg-gradient-to-tl text-white flex flex-col  text-left gap-8  p-8 sm:p-24 sm:pt-32 pt-32  ">
      <h1 className="text-lg uppercase font-light sm:text-3xl sm:pb-8">
        <span className="border-b-2 border-yellow">Our</span> Services
      </h1>
      <h1 className="font-bold text-2xl sm:text-5xl sm:pb-8 sm:w-3/6">
        We offer <span className="text-yellow">high-quality </span>
        services
      </h1>
      <div />
      {Items.map((e, index) => (
        <div key={index}>
          <Faq
            title={e.title}
            fullTitle={e.fulltitle}
            index={index + 1}
            img={img}
            para={e.para}
            para2={e.para2}
            list={e.list}
          >
            {e.para}
          </Faq>
        </div>
      ))}
    </div>
  );
}
