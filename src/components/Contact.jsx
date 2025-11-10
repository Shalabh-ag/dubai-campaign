import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SyncLoader from "react-spinners/SyncLoader";
import toast from 'react-hot-toast';
import { postAPI } from '../callers/axiosUrls';

const Contact = ({ mobileMode }) => {
    const [sender, setSender] = useState(false);
    const [fullName, setFullName] = useState('');
    // const [selectedPlan, setSelectedPlan] = useState('Please select a plan');
    const [companyEmail, setCompanyEmail] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [mobile, setMobile] = useState('');
    const [licenses, setLicenses] = useState('');


    const recaptchaRef = useRef(null);

    const handleRecaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    function isValidMobileNumber(number) {
        const mobileRegex = /^\+?[1-9]\d{0,2}[-\s]?\d{6,14}$/;
        return mobileRegex.test(number);
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async () => {
        if (!fullName || !companyEmail || !mobile || !licenses) {
            toast("All required fields are not filled!", { icon: '⚠️' });
            return;
        }

        if (!isValidEmail(companyEmail)) {
            toast("Please provide a valid email address!", { icon: '⚠️' });
            return;
        }

        if (!isValidMobileNumber(mobile)) {
            toast("Please provide a valid phone number!", { icon: '⚠️' });
            return;
        }

        if (!captchaValue) {
            toast("Please verify the reCAPTCHA before submitting!", { icon: '⚠️' });
            return;
        }

        if (sender) return;
        else setSender(true);

        try {
            await postAPI('/send_email_jio', {
                full_name: fullName,
                company_email: companyEmail,
                mobile_number: mobile,
                // service_request: selectedPlan,
                number_of_licenses: licenses,
                captcha_token: captchaValue
            });

            toast.success("Request submitted successfully!");
            setFullName('');
            setCompanyEmail('');
            setMobile('');
            setLicenses('');
            // setSelectedPlan('Please select a plan');
            setCaptchaValue(null);
            setTimeout(() => {
                window.location.href = "https://onmeridian.com/thank-you/";
            }, 1000);
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setSender(false);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
                setCaptchaValue(null);
            }
        }
    };


    return (
        <>
            <div id="hero" className="w-full max-w-5xl mt-10 bg-white rounded-3xl shadow-xl p-6 md:p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800 mb-1 text-left">Name</label>
                        <input
                            disabled={sender}
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800 text-left mb-1">Company email ID</label>
                        <input
                            disabled={sender}
                            type="email"
                            value={companyEmail}
                            onChange={(e) => setCompanyEmail(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* <div className='mt-5 flex flex-col gap-y-[10px] w-10/12 lg:w-full'>
                    <p className='text-[14px] font-medium text-gray-800'>Phone Number</p>
                    <input disabled={sender} type="number" placeholder='+91 XXXXXXXXXX' onChange={(e) => setMobile(e.target.value)} value={mobile} className='border-1 border-[#D0D5DD] rounded-md text-[12px] lg:text-[16px] px-[25px] py-2 focus:outline-none' />
                </div> */}
                    <div className="flex flex-col">
                        <label className="text-sm fsont-medium text-gray-800 text-left mb-1">Phone Number</label>
                        <input
                            disabled={sender}
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <div className='flex-1'> */}

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800 text-left mb-1">Number of Licenses</label>
                        <input
                            disabled={sender}
                            type="number"
                            min={1}
                            value={licenses}
                            onChange={(e) => setLicenses(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
              {/* <div className="md:col-span-2 flex flex-col lg:flex-row items-start justify-center mt-2 gap-4 relative z-[10000]">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                            size={mobileMode ? "compact" : "normal"}
                        />
                    </div>  */}

                    <div className="md:col-span-2 w-full flex justify-center items-center">
                        <button
                            onClick={handleSubmit}
                            className="text-base mt-1 lg:text-lg px-16 py-2 font-medium cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            {sender ? (
                                <SyncLoader color="white" size={10} />
                            ) : (
                                'Get 20–50% off on all plans today!'
                            )}
                        </button>
                    </div>



                </div>
                <p className="text-[1rem] text-[#667085] mb-4 mt-4">
                    You can reach us anytime via <a href="mailto:hi@onmeridian.com" className="text-blue-600 font-medium">marketing@onmeridian.com</a>
                </p>
            </div>
        </>
    )
}

export default Contact;