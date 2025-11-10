import { IoCloseSharp } from "react-icons/io5";

const Sidebar = ({ mobile, toggle, setToggle }) => {
  const sidebarStyle = {
    width: '300px',
    height: '100vh',
    zIndex: "99",
    position: mobile ? "absolute" : "",
    transform: mobile ? (toggle ? "translateX(0px)" : "translateX(-300px)") : "none",
    padding: '20px 0 10px 0',
    transition: 'transform 0.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
  };

  const handleNavigate= (section) => {
    location.href="#" + section;
    setToggle(false);
  }

  return (
    <>
        {toggle && <div className="absolute bg-black/20 w-screen h-screen" />}
        <div className="flex flex-col items-center shadow-2xl bg-white text-black" style={sidebarStyle}> 
            <IoCloseSharp onClick={() => setToggle(false)} className="text-[24px] self-end mr-5" />
            <div className="flex flex-col items-center mt-16 font-semibold">
                <p onClick={() => handleNavigate("actualdos")} className='mt-5 border-b-2 border-transparent active:border-black'>What we offer</p>
                <p onClick={() => handleNavigate("hero")} className='mt-5 border-b-2 border-transparent active:border-black'>Talk to us</p>
                <p onClick={() => handleNavigate("faq")} className="mt-5 border-b-2 border-transparent active:border-black">FAQs</p>
            </div>
        </div>  
    </>
  );
};

export default Sidebar;