import React from 'react';
import img1 from '../assets/cost.svg';
import img2 from '../assets/optimization.svg';
import img3 from '../assets/Scalability.svg';
import img4 from '../assets/Innovation.svg';
import img5 from '../assets/TAT.svg';
import img6 from '../assets/Flexible.svg';
import banner from '../assets/ClientView.png';


const features = [
    {
        img: img1,
        title: 'Cost',
        desc: 'Reduced capital (CAPEX) and operational expenses (OPEX), enabling more cost-efficient and scalable delivery of business services across the organization.'
    },
    {
        img: img2,
        title: 'Optimization',
        desc: 'Improved overall quality of the app development process and enhanced optimization across multiple technology and process stacks.'
    },
    {
        img: img3,
        title: 'Scalability',
        desc: 'Enabled greater flexibility to seamlessly scale operations without the need for any significant upfront investment in costly IT infrastructure or hardware resources.'
    },
    {
        img: img4,
        title: 'Innovation',
        desc: 'Introduced innovative new business models and expanded digital collaboration opportunities to drive sustained business growth.'
    },
    {
        img: img5,
        title: 'Turnaround Time (TAT)',
        desc: 'Significant reduction in delivery time directly contributes to a lower turnaround time (TAT), enhancing overall operational efficiency and customer satisfaction.'
    },
    {
        img: img6,
        title: 'Flexibility at Your Fingertips',
        desc: "Access your data and tools from anywhere, on any device whether you're at the office, home, or traveling, stay connected and productive."
    }
];

function ClientView() {
    return (
        <div className="py-12 px-4 mt-[3rem] lg:mt-[-1.9rem] ">
            {/* <div className="text-3xl font-medium text-center w-full md:w-[70%] mx-auto mb-4">
                So, what makes <span className="font-bold">Cloud popular</span>
            </div>

            <div className="text-lg text-center text-gray-600 w-full md:w-[70%] mx-auto mb-10">
                Cloud is popular for its flexibility, cost savings, easy scalability, and remote access —
                helping businesses work smarter and grow faster.
            </div> */}

            <div
                className="bg-cover bg-center bg-no-repeat py-16 px-4 text-center"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="text-3xl font-medium w-full md:w-[70%] mx-auto mb-4">
                    So, what makes <span className="font-bold">Cloud popular</span>
                </div>

                <div className="text-lg w-full md:w-[68%] mx-auto">
                    Cloud is popular for its flexibility, cost savings, easy scalability, and remote access —
                    helping businesses work smarter and grow faster.
                </div>
            </div>


            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[80%] mx-auto">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl py-6 px-8 shadow-sm border border-gray-200 flex flex-col items-start text-left min-h-[250px] hover:shadow-md transition"
                    >
                        <img src={item.img} alt={`feature-${index}`} className="w-12 h-12 mb-4" />
                        <h4 className="font-semibold  mb-2 text-black">{item.title}</h4>
                        <p className="text-sm text-[#555555]">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientView;
