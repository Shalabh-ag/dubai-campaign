import React from 'react';
import banner from '../assets/ClientView.png';
import CountUp from 'react-countup';


function Transformation() {
  return (
    <div className="py-12 mt-[17rem] ">
      <div
        className="bg-cover bg-center bg-no-repeat py-16 px-4 text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-3xl font-medium w-full md:w-[80%] mx-auto mb-4 text-center">
          Cloud Transformation for the <span className="font-bold">Middle East: Secure. Scalable. Strategic.</span>
        </div>

        <div className="text-lg w-full md:w-[57%] mx-auto text-center">
          Delivering enterprise-grade cloud solutions tailored to the unique regulatory, economic,
          and technological landscape of the MENA region.
        </div>

      </div>
      <div className="max-w-4xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-3 gap-[4rem] px-4">
        {[
          { value: 3500, label: 'Satisfied Clientele' },
          { value: 2000, label: 'Successful Cloud Implementation' },
          { value: 18000, label: 'Subscriptions' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F9FAFB] rounded-xl shadow-md py-13 px-4 flex flex-col items-center"
          >
            <h3 className="text-5xl font-bold text-gray-900">
              <CountUp end={item.value} duration={2} /> <span className='text-[#1154BA]'>+</span>
            </h3>
            <p className="text-gray-600 text-base mt-4 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transformation