import React from 'react';
import sideImage from '../assets/sideImage.png';

function Strategic() {
  return (
    <div className="py-16 px-4  bg-white">
      <div className="w-[100%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left ml-[2rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Your Strategic Cloud Partner <br /> in the Middle East
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            We offer comprehensive services that support every stage of the cloud lifecycle,
            from initial consultation to full operational management.
          </p>
          <a href="#hero">
            <button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-medium py-2 px-10 rounded-md transition">
              Let’s get started
            </button>
          </a>

        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={sideImage}
            alt="Strategic Cloud"
            className="w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Strategic;
