import { assets } from "../../public/assets";
import Image from "next/image";
import React, { useState } from "react";
import useThemeManager from "./themeManager";

const Contact = () => {
  const [result, setResult] = useState("");

  const theme = useThemeManager();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c1222ab1-2d3b-4597-895f-dbfc900692af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-gray-950"
    >
      <h4 className="text-center mb-2 text-lg font-ovo ">Connect with me</h4>

      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        If you have any questions, or just want to get into touch with me feel
        free to send a message here!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 ">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-3 outline-none border-[0.5px] broder-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white dark:bg-gray-300 dark:text-black dark:hover:bg-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit{" "}
          <img
            src={
              theme === "dark" ? assets.right_arrow : assets.right_arrow_white
            }
            alt=""
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
