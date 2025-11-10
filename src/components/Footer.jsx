import MeridianLogo from '../assets/clogo.png';
// import YoutubeImage from '../assets/Youtube.png';
// import InstagramImage from '../assets/Instagram.png';
// import LinkedinImage from '../assets/Linkedin.png';
import SingaporeFlag from '../assets/Singapore.png';
import USAFlag from '../assets/USA.png';
import IndiaFlag from '../assets/India.png';
import UAEFlag from '../assets/UAE.png';
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className="flex flex-col py-[20px] px-[50px] bg-[#367CFF] text-white">
            <div className="flex flex-col gap-y-4 lg:flex-row items-center justify-center">
                <img src={MeridianLogo} className='w-[300px] object-contain' alt="Meridian Solutions Pvt Ltd Logo" />
                <div className="flex items-center gap-x-[10px]">
                    {/* <img className='cursor-pointer text-white' src={YoutubeImage} alt="Youtube Logo" /> */}
                    {/* <FaYoutube className='text-white h-12 w-12'/>
                    <FaInstagram className='text-white h-10 w-12'/>
                    <FaLinkedinIn className='text-white h-10 w-12'/> */}
                </div>
            </div>
            {/* <p className='mx-auto font-medium mt-5 text-sm'>HeadQuarter Gurugram, India</p> */}
            <div className='flex flex-col flex-wrap gap-y-5 md:flex-row mt-[40px] md:mt-[60px] justify-evenly px-[20px]'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-x-[15px] lg:gap-x-[20px]'>
                        <img className=" w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-contain" src={SingaporeFlag} alt="Singapore Flag" />
                        <p className=' text-[18px] lg:text-[24px] font-medium'>Singapore</p>
                    </div>
                    <p className='mt-2 text-center text-[12px]'>68 Circular Road #02-01<br/>Singapore (049422)</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-x-[15px] lg:gap-x-[20px]'>
                        <img className=" w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-contain" src={USAFlag} alt="USA Flag" />
                        <p className='text-[18px] lg:text-[24px] font-medium'>US</p>
                    </div>
                    <p className='mt-2 text-center text-[12px]'>LLC​1207 Delaware Ave #2193<br/>Wilmington, DE 19806</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-x-[15px] lg:gap-x-[20px]'>
                        <img className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-contain" src={IndiaFlag} alt="Indian Flag" />
                        <p className='text-[18px] lg:text-[24px] font-medium'>India</p>
                    </div>
                    <p className='mt-2 text-center text-[12px]'>Tower B, office no. 1103 & 1104,<br/>11th floor, Spaze IT Tech Park,<br/>Sohna Road, Gurugram, India</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-x-[15px] lg:gap-x-[20px]'>
                        <img className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-contain" src={UAEFlag} alt="UAE Flag" />
                        <p className='text-[18px] lg:text-[24px] font-medium'>UAE</p>
                    </div>
                    <p className='mt-2 text-center text-[12px]'>Unique World Business Centre,<br/>Al Karama, Dubai, UAE</p>
                </div>
            </div>
            <p className='mt-[80px] text-center font-semibold'>
                Meridian Solutions Pvt. Ltd. 2025. All rights reserved
            </p>
        </div>
    )
}

export default Footer;