// src/components/Contact.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import eventBg from "./imgVideos/about bg.jpg"; // adjust path if needed


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key","4275495a-3612-46e3-ac10-2c1b6e10abe4"); // replace with your actual key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
      console.log("Success", res);
    } else {
      alert("Something went wrong. Please try again.");
      console.log("Error", res);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-white"  style={{
                backgroundImage: `linear-gradient(rgba(88,28,135,0.7), rgba(190,24,93,0.7)), url(${eventBg})`,
              }}>
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-100  text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl  font-semibold ">Get in Touch</h3>
            <p className="">
              Call us at: <span className="font-medium text-white">+91 7517479399</span>
            </p>
            <p className="">
              Email us at: <span className="font-medium text-blue-700">sonawanerohit633@gmail.com</span>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/exotica_eventsss/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block  font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border  rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block  font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border  rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block  font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
