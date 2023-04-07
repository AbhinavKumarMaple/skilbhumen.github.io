import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialLogo() {
  return (
    <div className="flex items-center space-x-2 justify-center">
      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaFacebookF
          size={38}
          className="text-bg bg-yellow rounded-full p-1 "
        />
      </div>
      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaTwitter size={38} className="text-bg bg-yellow rounded-full p-1" />
      </div>
      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaYoutube size={38} className="text-bg bg-yellow rounded-full p-1" />
      </div>
      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaInstagram size={38} className="text-bg bg-yellow rounded-full p-1" />
      </div>
    </div>
  );
}
