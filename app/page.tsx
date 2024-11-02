import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import FAQSection from "./_components/Faq";
import Whychooseus from "./_components/WhyChooseus";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

const page = () => {
  return <div className="w-[90%] mx-auto max-w-[1600px] ">
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <FAQSection/>
    <Whychooseus/>
    <Contact/>
    <Footer/>
  </div>;
};

export default page;
