// src/components/Events.jsx
import React from "react";
import event1 from "./imgVideos/corporate.webp";
import event2 from "./imgVideos/wedding.webp";
import event3 from "./imgVideos/party.webp";
import eventBg from "./imgVideos/serviceone.png"; // adjust path if needed

const events = [
  {
    image: event1,
    title: "Corporate Meetup 2025",
    date: "Sep 25, 2025",
    description: "An engaging corporate meetup with industry leaders.",
  },
  {
    image: event2,
    title: "Wedding Expo",
    date: "Oct 10, 2025",
    description: "Explore the latest trends in wedding planning.",
  },
  {
    image: event3,
    title: "Birthday Bash",
    date: "Nov 5, 2025",
    description: "Fun-filled birthday celebration for kids and adults.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-blue-50 text-blue-950"  style={{
        backgroundImage: ` url(${eventBg})`,
      }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
