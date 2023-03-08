import React from "react";
import heroImg from "../assets/hero-img.png";
function Hero() {
  return (
    <div className="max-w-[550px] mx-auto p-6">
      <img src={heroImg} className="object-cover object-center" />
      <h1 className="text-2xl font-bold mt-8">Online Experiences</h1>
      <p className="text-lg max-w-sm mt-4 mb-12">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
