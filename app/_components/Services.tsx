"use client"
import React from "react";
import Stats from "./Stats";
import { useFadeIn } from "./Fadein";

const services = [
  {
    image: "services/1.jpg",
    heading: "Electrical Installation",
    description:
      "Professional wiring, lighting, and electrical system installations for residential and commercial properties.",
  },
  {
    image: "services/2.jpg",
    heading: "Emergency Electrical Repairs",
    description:
      "24/7 response for power outages, faulty circuits, and urgent electrical repairs to keep your property safe.",
  },
  {
    image: "services/3.webp",
    heading: "Lighting Design & Installation",
    description:
      "Custom lighting solutions to enhance ambiance and safety in both indoor and outdoor spaces.",
  },
  {
    image: "/services/4.jpg",
    heading: "Smart Home Automation",
    description:
      "Integrate smart home technology for seamless control over lighting, security, and energy use.",
  },
  {
    image: "/services/5.jpg",
    heading: "Electrical Panel Upgrades",
    description:
      "Upgrade your electrical panel to handle modern energy demands and ensure home safety.",
  },
  {
    image: "/services/6.jpg",
    heading: "Energy Efficiency Solutions",
    description:
      "Implement energy-saving technologies to reduce costs and enhance sustainability.",
  },
];

const Services = () => {

  const fadeInRef = useFadeIn();

  return (
    <div  id="service" className="w-full my-10 bg-[#eceeed] py-10 px-5">
      <div className="flex flex-col space-y-6 mx-auto justify-center items-center max-w-[700px]">
        <h1 className="text-md px-4 py-1 my-3 border-[1px] border-gray-600 text-gray-800 font-semibold rounded-full">
          What We Offer
        </h1>
        <h1 className="text-center text-zinc-800 text-3xl md:text-4xl lg:text-5xl font-semibold">
          No Shocking Prices, Just Shocking Quality
        </h1>
      </div>
      <div className="overflow-x-auto py-10 my-5 md:my-10">
        <div className="flex flex-row md:flex-wrap justify-start md:justify-around gap-3 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] p-2 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform  transition-all duration-300 ease-in-out md:w-[45%] xl:w-[30%]"
            >
              <div  className="relative">
                <img
                  src={service.image}
                  alt={service.heading}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                {service.heading}
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed hidden md:flex">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Services;
