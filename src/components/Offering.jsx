import React from 'react';
import PartnerImage from '../assets/partner.png';
import rightImage from '../assets/rightImage.png';
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'
import img5 from '../assets/img5.svg'
import img6 from '../assets/img6.svg'


const offerings = [
  'Infrastructure Azure',
  'Modern Work',
  'Data & AI Azure',
  'Business Application',
  'Digital & App Innovation Azure',
  'Security',
];

function Offering() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="flex-1">
          <img
            src={rightImage}
            alt="Cloud Partner"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* <h2 className="text-3xl font-medium w-full md:w-[70%] mx-auto mb-4">
            Offering and Partnerships
          </h2> */}
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Offering and Partnerships
          </div>

          <p className="text-gray-600 text-base mb-8 md:text-lg max-w-lg">
            Join our vast community of satisfied clients experiencing seamless cloud solutions and unparalleled support.
          </p>

          {/* Cards Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {offerings.map((title, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F5] rounded-xl shadow-sm px-4 py-3 flex flex-col items-center gap-2"
              >
                <img src={PartnerImage} alt="Microsoft Partner" className="w-28" />
                <p className="text-xs text-[#717171] text-center font-semibold ">{title}</p>
              </div>
            ))}
          </div> */}
          <div className='flex flex-col justify-center items-center gap-3'>
            <div className='flex items-center gap-3 '>
              <img src={img1}/>
              <img src={img2}/>
              <img src={img3}/>
            </div>
            <div className='flex items-center gap-3 '>
              <img src={img4}/>
              <img src={img5}/>
              <img src={img6}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offering;
