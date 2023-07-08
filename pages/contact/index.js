import React from "react";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-10 min-h-screen">
      <SectionHeader
        span="contact"
        h1="Let's chat about your dreams"
        p="You can reach us anytime at karimscoding@gmail.com"
      />

      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full md:w-[35rem] mx-auto"
        >
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              className="outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
              type="text"
              id="name"
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              className="outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
              type="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Message
            </label>
            <textarea
              type="textarea"
              className="h-52 outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="py-4 rounded-lg bg-primary text-white hover:bg-secondary duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
