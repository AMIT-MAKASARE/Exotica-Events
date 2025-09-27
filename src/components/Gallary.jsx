// src/components/Gallery.jsx
import React from "react";
import img1 from "./imgVideos/birthday.webp";
import img2 from "./imgVideos/meeting.webp";
import img3 from "./imgVideos/party.webp";
import img4 from "./imgVideos/festival.webp";
import img5 from "./imgVideos/corporate.webp";
import img6 from "./imgVideos/wedding.webp";
import eventBg from "./imgVideos/about bg.jpg"; // adjust path if needed


const images = [img1, img2, img3, img4,img5,img6];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black text-yellow-400"  style={{
            backgroundImage: `linear-gradient(rgba(88,28,135,0.7), rgba(190,24,93,0.7)), url(${eventBg})`,
          }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
