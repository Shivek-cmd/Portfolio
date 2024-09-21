import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_t7fcs19",
        "template_a790m0c",
        form.current,
        "F9XiDfz4d9BPnJcfs"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Let's Connect
      </motion.h1>
      <div className="text-center tracking-tighter ">
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto space-y-4 "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 bg-neutral-900 outline-none text-white rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 bg-neutral-900 outline-none text-white rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-neutral-900 outline-none text-white rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-3 border text-neutral-300 font-bold rounded hover:bg-cyan-400"
          >
            Send
          </button>
        </motion.form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Contact;
