import React from "react";
import Logo1 from "../../assets/Home/Brand Logo/image 1.png";
import Logo2 from "../../assets/Home/Brand Logo/image 2.png";
import Logo3 from "../../assets/Home/Brand Logo/image 4.png";
import Logo4 from "../../assets/Home/Brand Logo/image 8.png";
import Logo5 from "../../assets/Home/Brand Logo/image 5.png";
import Logo6 from "../../assets/Home/Brand Logo/image 6.png";
import Logo7 from "../../assets/Home/Brand Logo/image 7.png";

import Creative from "../../assets/creative.svg";

export default function Brands() {
  const items = [
    { id: 1, name: "Clients", value: "100+" },
    { id: 2, name: "Projects", value: "100+" },
    { id: 3, name: "Companies", value: "100+" },
  ];
  return (
    <div className="py-4 w-auto">
      <div className="flex sm:hidden flex-row justify-around align-middle ">
        <img
          src={Logo1}
          className="object-contain m-auto w-20 h-20 text-yellow"
        />
        <img
          src={Logo2}
          className="object-contain m-auto w-20 h-20 text-yellow"
        />
        <img
          src={Logo3}
          className="object-contain m-auto w-20 h-20 text-yellow"
        />
        <img
          src={Logo4}
          className="object-contain m-auto w-20 h-20 text-yellow"
        />
      </div>
      <div className=" hidden sm:block px-16">
        <div className="flex flex-row justify-between flex-wrap space-x-16">
          <img src={Logo1} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo2} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo3} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo4} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo5} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo6} className="object-contain w-24 h-24 mx-4" />
          <img src={Logo7} className="object-contain w-24 h-24 mx-4" />
        </div>
      </div>
    </div>
  );
}
