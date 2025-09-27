// src/components/About.jsx
import React from "react";
import eventBg from "./imgVideos/about bg.jpg"; // adjust path if needed
import rohitImg from "./imgVideos/rohitImg.jpg";


export default function About() {
  return (
    <section
      id="about"
      className="relative text-white px-8 py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(88,28,135,0.7), rgba(190,24,93,0.7)), url(${eventBg})`,
      }}
    >
      <div className="relative h max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src={rohitImg}
            alt="Event Setup"
            className="rounded-2xl shadow-2xl border-4 border-yellow-400 object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-950 font-bold px-6 py-4 rounded-lg shadow-lg">
            6+ Years Experience
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
            About Us
          </h2>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            We are a premium event management company in India dedicated to
            creating unforgettable experiences. From weddings to corporate
            events, birthdays to concerts – we take care of every detail so
            you can enjoy your special day stress-free.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Customized Event Planning</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Luxury Décor & Professional Setup</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Trusted by 250+ Happy Clients</span>
            </li>
          </ul>

          {/* Learn More → Scroll to Contact */}
          <a
            href="#contact"
            className="inline-block   mt-9 px-8 py-3 bg-yellow-400 text-blue-950 font-semibold rounded-xl shadow-lg hover:bg-green-500 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
