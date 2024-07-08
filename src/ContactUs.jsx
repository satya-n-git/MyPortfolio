import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pzx2xto", "template_s9k66hl", form.current, {
        publicKey: "dGAW7RXrPAF8FlutL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-lg pb-2 font-bold text-indigo-900" htmlFor="user_name">
          Name
        </label>
        <input
          className="w-full p-2 rounded-md focus:outline-none shadow-sm focus:shadow-lg transition duration-500"
          type="text"
          id="user_name"
          name="user_name"
          placeholder="type your name here"
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-lg pb-2 font-bold text-indigo-900" htmlFor="user_email">
          Email
        </label>
        <input
          className="w-full p-2 rounded-md focus:outline-none shadow-sm focus:shadow-lg transition duration-500 "
          type="email"
          id="user_email"
          name="from_name"
          placeholder="Enter your email eg: satya@gmail.com"
          required
          autoComplete="off"
        />
      </div>
      <div>
        <label className="block text-lg pb-2 font-bold text-indigo-900" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full p-2 rounded-md focus:outline-none shadow-sm focus:shadow-lg transition duration-500"
          id="message"
          name="message"
          rows="4"
          autoComplete="off"
          
        ></textarea>
      </div>
      <button
        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-200 hover:text-indigo-900 transition duration-300"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
