import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    from_name: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

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
          setFormData({ user_name: "", from_name: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    const { user_name, from_name, message } = formData;
    setIsFormValid(
      user_name.trim() !== "" &&
        from_name.trim() !== "" &&
        message.trim() !== ""
    );
  }, [formData]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value})
  }



  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label
          className="block text-lg pb-2 font-bold text-indigo-900 dark:text-indigo-600"
          htmlFor="user_name"
        >
          Name
        </label>
        <input
          className="w-3/4 p-2 rounded-md bg-white dark:bg-gray-700 caret-indigo-800 dark:caret-white focus:outline-none shadow-md shadow-slate-500 focus:shadow-lg focus:shadow-slate-400 dark:shadow-lg dark:shadow-gray-800 dark:focus:shadow-none transition duration-500"
          type="text"
          id="user_name"
          name="user_name"
          placeholder="type your name here"
          required
          autoComplete="off"
          value={formData.user_name}
          onChange={handleInputChange}
          autoCapitalize="on"
        />
      </div>
      <div>
        <label
          className="block text-lg pb-2 font-bold text-indigo-900 dark:text-indigo-600"
          htmlFor="user_email"
        >
          Email
        </label>
        <input
          className={`w-3/4 p-2 rounded-md bg-white dark:bg-gray-700 caret-indigo-800 dark:caret-white focus:outline-none shadow-md shadow-slate-500 focus:shadow-lg focus:shadow-slate-400 dark:shadow-lg dark:shadow-gray-800 dark:focus:shadow-none transition duration-500`}
          type="email"
          id="user_email"
          name="from_name"
          placeholder="Enter your email eg: satya@gmail.com"
          required
          autoComplete="off"
          value={formData.from_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label
          className="block text-lg pb-2 font-bold text-indigo-900 dark:text-indigo-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-3/4 p-2 rounded-md bg-white dark:bg-gray-700 caret-indigo-800 dark:caret-white focus:outline-none shadow-md shadow-slate-500 focus:shadow-lg focus:shadow-slate-400 dark:shadow-lg dark:shadow-gray-800 dark:focus:shadow-none transition duration-500"
          id="message"
          name="message"
          rows="4"
          autoComplete="off"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button
        className={`px-6 py-2 bg-gradient-to-br from-indigo-600 to-purple-950 text-white text-lg  font-bold rounded-full border-2 border-gray-700 transition-all duration-500 ease-linear ${isFormValid ? 'hover:bg-clip-text hover:bg-clip-content hover:bg-white hover:text-indigo-900 dark:hover:text-blue-50' : 'opacity-50 dark:opacity-70 dark:text-gray-400 cursor-not-allowed'}`}
        type="submit"
        disabled={!isFormValid}
      >
        Send
      </button>
    </form>
  );
};
