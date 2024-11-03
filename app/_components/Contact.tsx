"use client";
import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/sendEmail", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Success:", response.data);
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error details:", error.response?.data);
        alert(
          `Failed to send email: ${
            error.response?.data?.error || error.message
          }`
        );
      } else {
        console.error("Error:", error);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="py-24 bg-gray-200 rounded-xl my-16" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div className="flex items-center lg:mb-0 mb-10">
            <div>
              <h1 className="w-fit mx-auto md:mx-0 text-md px-4 py-1 border-[1px] border-gray-600 text-gray-800 font-semibold rounded-full">
                Switchfixx Electricals
              </h1>
              <h2 className="text-gray-800 font-manrope mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 mb-9 lg:text-left text-center">
                Need an Electrician??
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Phone"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                  placeholder="Message"
                ></textarea>
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-zinc-800 shadow transition-all duration-700 hover:bg-indigo-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div
            className="lg:max-w-xl hidden lg:flex w-full h-[600px] items-center justify-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://pagedone.io/asset/uploads/1696245837.png')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
