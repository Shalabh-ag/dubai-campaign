import React from 'react';
import heroBG from '../assets/heroBG.png';
import Contact from './Contact';

const Hero = () => {
  return (
      <div
   
      className="w-full bg-cover bg-no-repeat bg-center max-h-screen pt-[120px] pb-16 px-4 lg:px-0"
      style={{ backgroundImage: `url(${heroBG})` }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center lg:mt-[4rem]">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Save <span className="text-blue-600">25%</span> of your Cloud costs with <br />
          <span className="text-blue-600 my-[4rem]">Meridian</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Optimize your cloud spend with smart strategies and expert guidance from Meridian Solution.
          Unlock savings without compromising performance
        </p>
        <Contact/>
      </div>
    </div>
  );
};

export default Hero;
