import React from "react";
import Stats from "./Stats";

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
              className="flex-shrink-0 min-w-[200px] p-4 bg-white rounded-lg shadow-lg md:w-[45%] xl:w-[30%]"
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
      <Stats />
    </div>
  );
};

export default Services;
