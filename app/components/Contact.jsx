import { assets } from "../../public/assets";
import React, { useState } from "react";
import useThemeManager from "./themeManager";


const Contact = () => {
  const [result, setResult] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const theme = useThemeManager();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

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
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-[#1e1e1e]"
    >
      <h2 className="text-center text-5xl font-outfit">Get In Touch</h2>
      
      <div className="flex justify-center items-start gap-6">
        <form onSubmit={onSubmit} className="w-full md:w-1/3">
          <div className="grid gap-6 mt-10 mb-8 text-gray-500 dark:text-gray-500 w-full">
            <input
              type="text"
              placeholder="Name"
              required
              className="flex-1 p-4 text-lg outline-none border border-gray-400 rounded-md bg-white"
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 p-4 text-lg outline-none border border-gray-400 rounded-md bg-white"
              name="email"
            />
            <textarea
              rows="6"
              placeholder="Message"
              required
              className="w-full p-4 text-lg outline-none border border-gray-400 rounded-md bg-white mb-6"
              name="message"
            />
          </div>
          
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white dark:bg-white dark:text-black dark:hover:bg-gray-300 rounded-full mx-auto hover:bg-black duration-500 font-mono"
          >
            Submit{" "}
            <img
              src={theme === "dark" ? assets.right_arrow : assets.right_arrow_white}
              alt=""
              className="w-4"
            />
          </button>

          <p className="mt-4 font-mono">{result}</p>
        </form>

        <div className="pt-10 hidden md:block">
          <img
            src={assets.maggie}
            alt="dog"
            className="sm:w-70 rounded-3xl border"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
