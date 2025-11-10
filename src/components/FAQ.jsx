import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import minus from '../assets/minus-circle.png';
import plus from '../assets/plus-circle.png';


const faqs = [
  {
    question: "How can cloud-based sales tools help my business grow?",
    answer: "Our cloud solutions increase sales efficiency by providing real-time data access, reducing manual processes, and enhancing customer engagement. With intelligent automation and centralized systems, your team can close deals faster and make data-driven decisions."
  },
  {
    question: "Are your cloud solutions secure?",
    answer: "Security is our top priority. We follow industry best practices, including data encryption, identity management, and role-based access control, and leverage secure cloud environments like Google Cloud and Microsoft Azure."
  },
  {
    question: "What industries do you serve with your cloud sales solutions?",
    answer: "We serve a wide range of industries including IT & Services, Retail, Manufacturing, Real Estate, Finance, and Healthcare. Our solutions are scalable and flexible to meet the unique demands of any industry."
  },
  {
    question: "How do I get started with Meridian’s cloud solutions?",
    answer: "Simply contact our sales team or book a free consultation through our website. We’ll analyze your current setup and recommend a tailored roadmap to transform your sales process using cloud technology."
  }
  ];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="pb-10 px-4 mt-[6rem] lg:mt-[8rem]">
      <div className="text-3xl font-semibold text-center w-full md:w-[70%] mx-auto mb-4">
        Frequently asked questions
      </div>

      {/* Subheading */}
      <div className="text-lg text-center text-gray-600 w-full md:w-[80%] mx-auto mb-10">
        Meridian Solutions-Cloud Solutions
      </div>

      <div className="space-y-6 w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className=" pb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg font-md">{faq.question}</p>
              {openIndex === index ? (
                // <FaMinus className="text-[#00AC47] " />
                <img src={minus} className='h-[23px] w-[23px]'/>
              ) : (
                // <FaPlus className="text-black" />
                <img src={plus} className='h-[24.5px] w-[23px]'/>
              )}
            </div>
            {openIndex === index && (
              <div className="mt-2 text-[#667085] text-md rounded-lg transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;