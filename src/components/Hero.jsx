// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute md:h-full top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/src/components/imgVideos/Roh.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl  md:text-5xl lg:text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
          We Create Memorable Events
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow">
          Weddings • Corporate • Birthdays • Concerts
        </p>
        <button  className="px-8 py-3 bg-yellow-400 text-blue-950 font-semibold rounded-xl shadow-lg hover:bg-green-500 hover:text-white transition">
         <a href="#contact">Book Now</a> 
        </button>
      </div>
    </section>
  );
}
