import React from "react";
import Stats from "./Stats";


const services = [
  {
    image: "services/1.jpg",
    heading: "Service One",
    description: "Description of Service One.",
  },
  {
    image: "services/2.jpg",
    heading: "Service Two",
    description: "Description of Service Two.",
  },
  {
    image: "services/3.webp",
    heading: "Service Three",
    description: "Description of Service Three.",
  },
  {
    image: "/services/4.jpg",
    heading: "Service Four",
    description: "Description of Service Four.",
  },
  {
    image: "/services/5.jpg",
    heading: "Service Five",
    description: "Description of Service Five.",
  },
  {
    image: "/services/6.jpg",
    heading: "Service Six",
    description: "Description of Service Six.",
  },
];

const Services = () => {
  return (
    <div id="service" className="w-full my-10 bg-[#eceeed] py-10 px-5">
      <div className="flex flex-col space-y-6 mx-auto justify-center items-center max-w-[700px]">
        <h1 className="text-md px-4 py-1 my-3 border-[1px] border-gray-600 text-gray-800 font-semibold rounded-full">
          What We Offer
        </h1>
        <h1 className="text-center text-zinc-800 text-3xl md:text-4xl lg:text-5xl font-semibold">
          No Shocking Prices, Just Shocking Quality
        </h1>
      </div>
      <div className="overflow-x-auto py-10 my-10">
        <div className="flex flex-row md:flex-wrap justify-start md:justify-around gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[250px] p-4 bg-white rounded-lg shadow-lg md:w-[45%] xl:w-[30%]"
            >
              <img
                src={service.image}
                alt={service.heading}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-4 text-xl font-bold">{service.heading}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Stats/>
    </div>
  );
};

export default Services;
