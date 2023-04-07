import React from "react";

export default function TeamProfile({ src, title, post }) {
  return (
    <div className="space-y-2 sm:space-y-8 ">
      <img src={src} className="w-64 sm:w-72" />
      <h1 className="uppercase text-left font-medium sm:text-2xl">{title}</h1>
      <p className="font-light text-left sm:text-2xl">{post}</p>
    </div>
  );
}
