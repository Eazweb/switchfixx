import { CheckCheckIcon, CircleCheckBigIcon, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="rounded-2xl  bg-[#eceeed] px-[10%] md:px-[15%] pt-32 ">
      <div className="flex flex-col justify-center text-center items-center space-y-8">
        <h1 className="text-md px-4 py-1 border-[1px] border-gray-600 text-gray-800 font-semibold rounded-full">
          Switchfixx Electricals
        </h1>
        <h1 className="text-zinc-700 text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight md:leading-normal lg:leading-[1.2] xl:leading-[1.2]">
          Lighting Up Your Life,
          <br className="hidden lg:inline" /> One Bulb at a Time
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Expert electrical solutions for your home and business. From
          installations to repairs, we bring safety, efficiency, and brilliance
          to every project.
        </p>
        <div className="flex gap-5">
          <a href="#about">
            <button className="px-8 py-3 text-sm bg-[#f1ca4b] text-black font-semibold rounded-full">
              Explore
            </button>
          </a>
          <a href="#contact">
            <button className="px-5 py-3 text-sm bg-zinc-900 text-white font-semibold rounded-full">
              Contact Us
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center font-semibold text-md gap-8 mt-16 py-8  border-t-[2px] border-zinc-400 ">
        <div className="flex gap-2 items-center">
          <CircleCheckBigIcon />
          <p className="text-zinc-600">Professional Service</p>
        </div>
        <div className="flex gap-2 items-center">
          <Users />
          <p className="text-zinc-600">Experienced Team</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckCheckIcon />
          <p className="text-zinc-600">Positive Reviews</p>
        </div>
      </div>
      <Image
        src="/human.png"
        width={500}
        height={500}
        alt=""
        className=" mt-10 mx-auto"
      />
    </div>
  );
};

export default Hero;
