import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          {" "}
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            <strong>YourDoc</strong> is a modern digital healthcare platform
            designed to simplify the process of finding trusted doctors, booking
            appointments, and managing your health. Our goal is to bridge the
            gap between patients and healthcare providers using smart,
            user-friendly technology.
          </p>
          <p>
            Whether you're scheduling a consultation, reviewing a doctor's
            background, or looking for specialists nearby, YourDoc brings it all
            to your fingertips. No long wait times, no paperwork hassles — just
            seamless care when you need it.
          </p>

          <p>
            We work with a wide network of certified doctors across various
            specialties to ensure quality care. All our listed doctors go
            through a strict verification process to maintain trust and
            transparency.
          </p>

          <p>
            <strong className="text-gray-800">Our Vision:</strong> At YourDoc,
            we envision a world where healthcare is not a privilege, but a
            seamless part of everyday life. We are committed to building a
            future where every individual has instant access to quality medical
            care — regardless of time, place, or circumstance. Through
            innovation, empathy, and technology, we aim to create a healthier,
            more connected world — one appointment at a time.
          </p>

          <p>
            Your health is personal — and so is our approach. With YourDoc, you
            can:
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Quick and easy appointment booking designed to save your time.</p>
        </div>

        <div className="border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Find and book nearby trusted doctors with just a few clicks.</p>
        </div>

        <div className="border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Get health tips, reminders, and doctor suggestions made just for
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
