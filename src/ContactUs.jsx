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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="label" htmlFor="user_name">
          Name
        </label>
        <input
          className="input"
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
        <label className="label" htmlFor="user_email">
          Email
        </label>
        <input
          className="input"
          type="text"
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
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          className="input"
          id="message"
          name="message"
          rows="4"
          autoComplete="off"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button
        className={`button-base ${
          isFormValid ? "button-enabled" : "button-disabled"
        }`}
        type="submit"
        disabled={!isFormValid}
      >
        Send
      </button>
    </form>
  );
};
