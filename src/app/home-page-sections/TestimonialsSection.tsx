"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Sample testimonials data
const testimonials = [
  {
    name: "P Akshara",
    review: "Stitching service is Perfect.",
  },
  {
    name: "Varun Alluri",
    review:
      "Even though I gave last-minute orders and asked for last-minute changes... everything was done perfectly, tailored fit with runway looks.",
  },
  {
    name: "Rishitha Jyesta",
    review:
      "I'm extremely happy with Sireesha garu's work. She's very efficient in what she does. I made an immediate request with very little time, and she delivered it on the exact promised time. This is what a client expects!",
  },
  {
    name: "Dedeepya .J",
    review:
      "The stitching is flawless! I’m extremely pleased with the wedding blouses for my sister. Thank you for your excellent work!",
  },
];

// Use a single funny image for all testimonials
const funnyImage = "/home-screen-images/testimonial.png";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-4 tablet:px-10 laptop:px-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h2 className="text-2xl laptop:text-4xl font-bold text-center mb-6 text-white">
        What Our Customers Say
      </h2>

      {/* Testimonial Card */}
      <div className="flex justify-center items-center">
        <div className="max-w-lg w-full min-h-[250px] p-6 bg-white rounded-lg shadow-lg text-center transition-transform duration-500 ease-in-out hover:scale-105">
          <Image
            src={funnyImage}
            alt="Funny testimonial"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto rounded-full mb-4 animate-bounce"
          />
          <p className="text-lg text-gray-800 italic line-clamp-3">
            &ldquo;{testimonials[currentIndex].review}&rdquo;
          </p>
          <h4 className="text-lg font-bold mt-4 text-purple-700">
            {testimonials[currentIndex].name}
          </h4>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-purple-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;