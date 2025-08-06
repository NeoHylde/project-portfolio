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
      <h2 className="text-center text-5xl font-ovo">Get In Touch</h2>

      <div className="flex justify-center items-center pt-2 pb-2">
        <img
          src={assets.maggie}
          alt="user"
          className="w-60 rounded-3xl border"
        />
      </div>


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
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-black dark:text-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-black dark:text-white"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-black dark:text-white"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white dark:bg-white dark:text-black dark:hover:bg-gray-300 rounded-full mx-auto hover:bg-black duration-500 font-mono"
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
