// src/components/Services.jsx
import React from "react";
import eventBg from "./imgVideos/serviceone.png"; // adjust path if needed


const services = [
  {
    title: "Event Planning",
    description: "We plan your events professionally from start to finish.",
    icon: "🎉",
  },
  {
    title: "Vendor Management",
    description: "Connect with the best vendors for your events.",
    icon: "🛍️",
  },
  {
    title: "Venue Booking",
    description: "Find and book the perfect venue for your event.",
    icon: "🏛️",
  },
  {
    title: "E-invites",
    description: "Send beautiful digital invitations effortlessly.",
    icon: "💌",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20  text-blue-950" style={{
            backgroundImage: ` url(${eventBg})`,
          }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
