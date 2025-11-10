import './App.css'
import ClientView from './components/ClientView'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Trends from './components/Trends'
import Vision from './components/Vision'
import FormBanner from './components/FormBanner'
import Offering from './components/Offering'
import Transformation from './components/Transformation'
import AIservices from './components/AIservices'
import Strategic from './components/Strategic'

const App = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, (window.innerWidth < 800) ? true : false]);
  const [toggle, setToggle] = useState(false);

  const handleWindowResize = () => {
    var mobile = false
    if (window.innerWidth <= 800) mobile = true;
    else setToggle(false);
    setWindowSize([window.innerWidth, mobile]);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className='overflow-hidden'>
        { windowSize[1] && <Sidebar mobile={windowSize[1]} toggle={toggle} setToggle={setToggle} /> }
        <Navbar windowSize={windowSize} setToggle={setToggle} />
        <Hero mobile={windowSize[1]} />
        <Transformation/>
        <Strategic/>
        <Trends/>
        <ClientView/>
        <Offering/>
        <AIservices/>
        <FAQ/>
        <Vision/>
        {/* <FormBanner mobile={windowSize[1]}/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
