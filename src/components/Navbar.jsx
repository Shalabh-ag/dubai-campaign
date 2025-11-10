// import Circles from '../assets/Circles.png';
// import Logo from '../assets/Logo.png';
import Logo from '../assets/meridian_logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ windowSize, setToggle }) => {
    return (
        <>
            {windowSize[1] ? (
                <div className="min-h-[50px] flex justify-end w-full px-5 bg-transparent absolute top-0 left-0 z-50">
                    <button className="text-black text-[20px]" onClick={() => setToggle(true)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            ) : (
                <div className="w-full flex justify-between items-center h-[100px] px-8 bg-transparent absolute top-0 left-0 z-50">
                    <img className="w-[220px] h-[70px] object-contain" src={Logo} alt="Company Logo" />
                    <div className="flex gap-x-14 items-center text-[18px] font-medium text-gray-900">
                        <a href="#offers"><p className="hover:-translate-y-1 hover:border-b-2 border-blue-600 transition">What we offer</p></a>
                        <a href="#hero"><p className="hover:-translate-y-1 hover:border-b-2 border-blue-600 transition">Talk to us</p></a>
                        <a href="#faq"><p className="hover:-translate-y-1 hover:border-b-2 border-blue-600 transition">FAQs</p></a>
                    </div>
                </div>
            )}
        </>
    );
};


export default Navbar;