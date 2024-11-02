import Image from "next/image";
import React from "react";
import Menubar from "./Header/Menubar";
import MobileMenu from "./Header/MobileMenu";
import { PhoneCallIcon } from "lucide-react";

const Header = () => {
  return (
    <div className=" flex justify-between items-center py-4">
      <Image src="/finallogo.png" width={80} height={80} alt="" />
      <div className=" gap-5 hidden lg:flex justify-center items-center">
        <a href="#service" className="text-md font-semibold text-zinc-800 px-5 py-2 hover:bg-gray-100 rounded-lg">Services</a>
        <a href="#about" className="text-md font-semibold text-zinc-800 px-5 py-2 hover:bg-gray-100 rounded-lg">About</a>
        <a href="#contact" className="text-md font-semibold text-zinc-800 px-5 py-2 hover:bg-gray-100 rounded-lg">Contact</a>
      </div>
      {/* <Menubar /> */}
      <div className="hidden">
        <MobileMenu />
      </div>
      <a href="tel:64211041646">
        <button className="bg-[#f1ca4b] px-5 py-3 rounded-full flex gap-4">
          <PhoneCallIcon />
          <h1 className="text-md font-semibold text-gray-800">Give a Call</h1>
        </button>
      </a>
    </div>
  );
};

export default Header;
