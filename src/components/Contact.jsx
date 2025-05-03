"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add sending logic here
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-lightgrey via-white to-white dark:from-[#331958]  dark:to-[#111827]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl p-8 bg-white shadow-lg rounded-xl dark:bg-[#331958]"
      >
       
        <h2 className="mt-10 mb-10 text-4xl font-semibold text-center">
        Contact <span className="header-gradient">Me</span>
          </h2>
        

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Your Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Contact Number</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact*"
              value={formData.contact}
              onChange={handleChange}
              required
              className="p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <label className="mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex justify-start mt-8">
          <button
            type="submit"
            className="px-6 py-2 text-white transition-opacity rounded-md bg-gradient-to-r from-[#573BD6] to-purple-500 hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
