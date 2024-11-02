import { CircleCheckBigIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:flex gap-10 my-14" id="about">
      <Image
        src="/about.jpg"
        width={800}
        height={800}
        alt=""
        className="w-[50%] rounded-xl hidden md:flex"
      />
      <div className=" flex flex-col space-y-6 px-5">
        <h1 className="text-md max-w-fit px-4 py-1 border-[1px] border-gray-600 text-gray-800 font-semibold rounded-full">
          About Switchfixx
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:leading-[1.2] max-w-md">
          Lighting Your Way to a Brighter Tomorrow
        </h1>

        <p className="text-md text-zinc-600">
          SwitchFixx is your trusted electrical services provider in New
          Plymouth and Taranaki, offering expert solutions for residential,
          commercial, and industrial projects. With a focus on safety, quality,
          and efficiency, our skilled team is dedicated to powering up Taranaki
          with service you can rely on.
        </p>
        <div className="flex flex-col space-y-4 max-w-[400px]">
          <div className="flex gap-4">
            <CircleCheckBigIcon color="#f2ca4c" className="mt-1" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-zinc-800">
                Authorised Experts
              </h1>
              <p className="text-zinc-500 text-md">
                We have an authorised team of professonal individuals
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <CircleCheckBigIcon color="#f2ca4c" className="mt-1" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-zinc-800">
                Skilled Technicians
              </h1>
              <p className="text-zinc-500 text-md">
                All your problems will be solved by highly skilled technicians,
                So you could rest assured
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
