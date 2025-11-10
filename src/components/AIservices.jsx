import React from 'react';
import edulearn from '../assets/edulearn.png';
import datadiscover from '../assets/datadiscover.png';
import mbot from '../assets/mbot.png';
import vision from '../assets/vision.png'; // Assuming another icon for VisionDetect.ai
import banner from '../assets/ClientView.png';

function AIservices() {
    // const platforms = [
    //     { img: edulearn, title: "EduLearn.AI" },
    //     { img: mbot, title: "Mbotpro" },
    //     { img: datadiscover, title: "DataDiscover.ai" },
    //     { img: vision, title: "VisionDetect.ai" }
    // ];

    return (
        <div className='mt-[6rem] px-4 text-center'>
            <div className="text-3xl font-semibold w-full md:w-[75%] mx-auto mb-4">
                Strategic AI Integration for Future-Ready Business Environments
            </div>

            <div className="text-lg text-gray-600 w-full md:w-[80%] mx-auto mb-8">
                Meridian Solutions leverages advanced artificial intelligence to architect secure, adaptive, and high-performance infrastructure environments aligned with the strategic objectives of modern enterprises.
            </div>

            {/* Platform Cards */}
            <div
                className="bg-cover bg-center bg-no-repeat py-16 px-4 text-center flex flex-wrap justify-center gap-6 "
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* {platforms.map((platform, idx) => (
                    <div key={idx} className="bg-[#F4F4F4] px-6 py-4 rounded-xl flex flex-col items-center w-[130px]">
                        <img src={platform.img} alt={platform.title} className="w-16 h-16 mb-2" />
                        <p className="text-sm text-gray-800">{platform.title}</p>
                    </div>
                ))} */}
                <div className='group flex flex-col gap-3 justify-center items-center'>
                    <div className="bg-[#F4F4F4] px-6 py-4 rounded-xl flex flex-col items-center w-[130px] transform transition-transform duration-300 group-hover:scale-105">
                        <img src={edulearn} alt="EduLearn.AI" className="w-16 h-16 " />
                    </div>
                    <p className="text-sm font-semibold text-[#717171]">EduLearn.AI</p>
                </div>


                <div className='group flex flex-col gap-3 justify-center items-center '>
                    <div className="bg-[#F4F4F4] px-6 py-2 rounded-xl flex flex-col items-center w-[130px] transform transition-transform duration-300 group-hover:scale-105">
                        <img src={mbot} alt="Mbotpro" className="w-16 h-20 " />
                    </div>
                    <p className="text-sm font-semibold text-[#717171]">Mbotpro</p>

                </div>
                <div className='group flex flex-col gap-3 justify-center items-center '>
                    <div className="bg-[#F4F4F4] px-6 py-4 rounded-xl flex flex-col items-center w-[120px] transform transition-transform duration-300 group-hover:scale-105">
                        <img src={datadiscover} alt="DataDiscover.ai" className="w-18 h-16 " />
                    </div>
                    <p className="text-sm font-semibold text-[#717171]">DataDiscover.ai</p>

                </div>
                <div className=' group  flex flex-col gap-3 justify-center items-center '>
                    <div className="bg-[#F4F4F4] px-6 py-4 rounded-xl flex flex-col items-center w-[130px] transform transition-transform duration-300 group-hover:scale-105"> 
                        <img src={vision} alt="VisionDetect.ai" className="w-20 h-16 " />
                    </div>
                    <p className="text-sm font-semibold text-[#717171]">VisionDetect.ai</p>

                </div>
            </div>

            {/* CTA Button */}


            <div className="w-full flex mx-auto justify-center  md:justify-center lg:justify-center md:mt-[1rem]">
                <a href="#hero">
                    <button className="text-base lg:text-lg px-[4rem] lg:px-[6rem] py-2 font-medium  bg-blue-600 text-white rounded-lg hover:cursor-pointer hover:bg-blue-700 transition">
                        Schedule Your Consultation
                    </button>
                </a>
            </div>
        </div>
    );
}

export default AIservices;
