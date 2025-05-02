import React, { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa6";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize EmailJS
emailjs.init("mgviUASULF4APklVm"); // Replace with your actual public key

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_g6hz06n", "template_7mlwxcd", form)
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-lg mx-auto px-6">
        <div className="z-10 w-full flex justify-center">
          <h2 className="glass-heading-project text-3xl md:text-4xl font-bold text-center text-[#00f6ff] mb-12 bounce-element">
            Get In Touch
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1F2937]/50 backdrop-blur-md p-8 rounded-xl border border-cyan-300/30 shadow-lg hover:shadow-[0_0_30px_#ffffff] transition-all duration-300"
        >
          {/* Name Field */}
          <div className="flex items-center gap-3 border border-cyan-300/30 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 bg-[#1F2937]/30">
            <UserIcon className="w-5 h-5 text-cyan-400" />
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-gray-400 text-white"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-3 border border-cyan-300/30 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 bg-[#1F2937]/30">
            <EnvelopeIcon className="w-5 h-5 text-cyan-400" />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-gray-400 text-white"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start gap-3 border border-cyan-300/30 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 bg-[#1F2937]/30">
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-cyan-400 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-gray-400 text-white resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_#00f6ff]"
          >
            <span>Send Message</span>
            <FaArrowRight />
          </button>
        </form>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </section>
  );
};

export default Contact;
