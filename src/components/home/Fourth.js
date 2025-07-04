import React, { useState } from 'react'
import { motion } from 'framer-motion';
// Import all your images
import historyImage from '../../assets/home/faq1.jpg'
import missionImage from '../../assets/home/faq2.jpg'
import visionImage from '../../assets/home/faq3.jpg'
import valuesImage from '../../assets/home/faq4.png'
import valuesImage1 from '../../assets/home/faq5.png'
import valuesImage2 from '../../assets/home/faq6.jpg'
import valuesImage3 from '../../assets/home/faq7.png'
import valuesImae4 from '../../assets/home/faq8.jpg'


const Fourth = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardData = [
        {
            title: "Electrification of Villages & farms",
            content: "In the years following independence, the society played a crucial role in bringing electricity to villages and farms, lighting up rural communities and empowering farmers with better infrastructure for agriculture and daily life.",
            image: historyImage,
            // color: "from-green-500 to-green-700"
        },
        {
            title: " AKVR Junior & Degree College for students",
            content: "A Junior College was established in 2001-02, followed by a Degree College in 2003-04, both founded with the financial support of the society to promote higher education in the region.",
            image: missionImage,
            // color: "from-yellow-500 to-amber-600"
        },
        {
            title: "Health Checkup camps for Members",
            content: "The cooperative, in partnership with SLEH, provides free cataract surgeries, affordable eye care, and specialized health camps. It also promotes well-being through physiotherapy and yoga camps, ensuring better healthcare for members.",
            image: valuesImage1,
            // color: "from-blue-500 to-blue-700"
        },
        {
            title: "Animal Health Checkup Camps",
            content: "The society organizes Animal Health Camps in collaboration with the Animal Husbandry Department to provide essential veterinary care, vaccinations, and treatment for livestock, ensuring better health and productivity for farmers' animals.",
            image: valuesImage,
            // color: "from-purple-500 to-purple-700"
        },
        {
            title: "Constructed dam under NABARD Watershed program at Vangara Village",
            content: "The society has implemented three watershed programs with financial assistance of ₹2.62 crores from the National Bank for Agricultural and Rural Development (NABARD), covering an area of 283.70 hectares to support sustainable water management and agriculture.",
            image: valuesImae4,
            // color: "from-red-500 to-red-700"
        },
        {
            title: "RO plant setup for Drinking Water.",
            content: "The society collaborated with NGOs to ensure access to clean drinking water by installing RO plants in villages, improving the health and well-being of the community.",
            image: valuesImage2,
            // color: "from-indigo-500 to-indigo-700"
        },
        {
            title: "Tailoring & Computer Training for Women.",
            content: "AKVR Rural Development Society organized a free training program on tailoring and computer applications for women in the region, empowering them with skills for self-employment and financial independence.",
            image: valuesImage3,
            // color: "from-indigo-500 to-indigo-700"
        }
    ];

    // Card reveal animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="container mx-auto px-4 md:px-8">
            {/* Main Heading */}
            <h1 className="text-2xl cursor-default md:text-5xl text-center font-medium mb-5">
                Initiatives for Community
            </h1>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Card Image */}
                        <div className="relative h-56 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-50 z-10`}></div>
                            <img 
                                src={card.image} 
                                alt={card.title}
                                className="w-full h-full transition-transform duration-700 ease-out"
                                style={{
                                    transform: hoveredCard === index ? "scale(1.1)" : "scale(1)"
                                }}
                            />
                        </div>
                        
                        {/* Card Content */}
                        <div className="p-5 bg-white">
                            <h3 className="text-xl cursor-default font-bold mb-3">{card.title}</h3>
                            <div className="h-0.5 w-16 bg-yellow-400 mb-4"></div>
                            <p className="text-gray-700 cursor-default">{card.content}</p>
                        </div>
                        
                        {/* Bottom gradient bar */}
                        <div className={`h-1 cursor-pointer w-full bg-gradient-to-r ${card.color}`}></div>
                    </motion.div>
                ))}
            </div>
            
            {/* Optional View All Button */}
            {/* <div className="flex justify-center mt-10">
                <a 
                    href="/initiatives" 
                    className="inline-block px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors shadow-md hover:shadow-lg"
                >
                    View All Initiatives
                </a>
            </div> */}
        </div>
    )
}

export default Fourth