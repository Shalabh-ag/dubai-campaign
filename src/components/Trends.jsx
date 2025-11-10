import React from 'react';
import img1 from '../assets/industryCloud.svg';
import img2 from '../assets/passSass.svg';
import img3 from '../assets/lass.svg';
import img4 from '../assets/prem.svg';

const features = [
    {
        img: img1,
        title: 'SaaS-Industry Cloud',
    },
    {
        img: img2,
        title: 'PaaS → SaaS',
    },
    {
        img: img3,
        title: 'IaaS → PaaS',
    },
    {
        img: img4,
        title: 'On-Prem → Cloud',
    }
];

function Trends() {
    return (
        <div  className="py-10 px-4 mt-[4rem] lg:mt-[3rem] bg-white">
            {/* Heading */}
            <div className="text-3xl font-semibold text-center w-full md:w-[60%] mx-auto mb-10">
                Are you moving with the <span className="font-bold">trends?</span>
            </div>

            {/* Feature Grid */}
            <div  id="offers" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl space-y-6 mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col pt-8 items-center text-center border-r last:border-r-0 border-gray-200 px-4"
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-12 h-12 mb-4"
                        />
                        <div className="text-md font-semibold text-gray-700">
                            {feature.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trends;
