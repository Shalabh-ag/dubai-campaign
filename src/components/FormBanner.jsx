import React from 'react';
import formbanner from '../assets/formbanner.png';
import Contact from '../components/Contact';

const FormBanner = ({ mobile }) => {
    return (
        <div id="hero" className="flex flex-col lg:flex-row justify-between items-center bg-white py-10 lg:my-[4rem] ">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src={formbanner} alt="Form banner" className="rounded-xl shadow-md w-full max-w-md lg:max-w-full object-cover" />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Contact mobileMode={mobile} />
            </div>
        </div>
    );
};

export default FormBanner;
