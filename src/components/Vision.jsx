import React from 'react';
import Avatargroup from '../assets/Avatargroup.png'

function Vision() {
  return (
    <div className="py-10 bg-[#F9FAFB] mt-[3rem] lg:mt-[4rem]">
      <div className='flex flex-col justify-center items-center'>
        <img src={Avatargroup} className='w-32 h-15'/>
      </div>
      <div className="text-3xl font-semibold text-center w-full md:w-[70%] px-2 mx-auto mt-8 mb-4">
        Still have questions?
      </div>
      <div className='w-full md:w-[60%] text-[#667085] mx-auto text-center text-lg px-2'>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      </div>
      <div className='flex justify-center items-center my-6'>
      <a href= "#hero">
        <button className='text-white bg-[#2684FC] cursor-pointer border-2 border-[#2684FC] px-7 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
          Get in touch
        </button>
        </a>
      </div>


      {/* <div className='flex justify-center items-center font-semibold gap-4 mt-[3rem] mx-2 text-center'>
        <img src={circletick} className='h-5 w-5 hidden md:block' />
        <p className='text-[#00AC47]'>Yes, we care about privacy. You’ll only hear from us if you want to.</p>
      </div> */}

      {/* <div className='relative mt-10'>
        <img src={banner} className='w-full py-10 h-[480px] lg:h-[550px] object-cover' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-1 border-[#B1B1B1] rounded-md px-1 py-2 md:py-[4rem] md:px-[5rem] w-[85%] lg:w-[70%] mx-auto'>
          <div className="text-2xl lg:text-3xl font-semibold text-center w-full md:w-[85%] mx-auto mb-14">
            PARTNER WITH MERIDIAN SOLUTIONS FOR A SEAMLESS <span className='text-[#2684FC]'>G</span><span className="text-[#F4B400]">W</span><span className="text-[#EA4335]">S</span> IMPLEMENTATION
          </div>
          <p className='font-semibold text-sm lg:text-base text-center'>Partner with Meridian Solutions and unlock the true potential of GWS. Our expert team will work closely with you to design, develop and implement tailored GWS Solutions that drive collaboration, streamline processes, and empower your organization’s productivity.</p>
        </div>
      </div> */}

      {/* <div className='flex justify-center items-center my-6 gap-4'>
      <a href= "#hero">
        <button className='text-white bg-[#2684FC] cursor-pointer border-2 border-[#2684FC] px-7 py-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          Connect with our Experts Now!
        </button>
        </a>
        <img src={right_arrow} className='hidden lg:block h-4 w-20'/>
      </div> */}

    </div>
  )
}

export default Vision