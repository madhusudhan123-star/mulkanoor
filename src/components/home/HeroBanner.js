import React, { useState } from 'react';
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView';
import card1 from '../../assets/home/card1.jpg';
import card2 from '../../assets/home/card2.jpg';
import card3 from '../../assets/home/card3.JPG';
import card4 from '../../assets/home/card4.jpg';

const impactMetrics = {
    farmersEmpowered: '7600+',
    creditFacilitated: 'Rs 220 crores',
    landCultivated: '40,000+'
};

const cardData = [
    {
        title: "Empowering",
        content: "Celebrating 69+ years of services to farmers with dedication and trust.",
        image: card1,
        url: '/discover/story'
    },
    {
        title: "Farmers",
        content: "Members are facilitated with credit, input supply and marketing for hassle free farming.",
        image: card2,
        url: '/farmer'
    },
    {
        title: "Enriching",
        content: "Increasing farmer’s income, enabling dignified living, and creating better livelihood opportunities for farming communities.",
        image: card3,
        url: '/discover/mission'
    },
    {
        title: "Communities",
        content: `So we prosper with trust, innovation and dedication being our core - from farms to future.`,
        image: card4,
        url: '/cta'
    }
];

const Card = ({ title, content, image, url, className = '', isHovered, onHover }) => (
    <div
        className={`
            min-w-[200px] h-[70vh] flex-1 bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg 
            transition-all duration-700 ease-out
            transform hover:shadow-2xl
            ${isHovered ? 'md:flex-grow-[3] scale-105' : 'md:flex-grow-[1] scale-100'}
            ${!isHovered && onHover ? 'md:flex-grow-[0.7] scale-95' : ''}
            ${className}
            hover:bg-black/60
            bg-cover bg-center bg-no-repeat
            relative
            cursor-pointer
        `}
        style={{
            backgroundImage: `url(${image})`
        }}
        onMouseEnter={() => onHover(true)}
        onTouchStart={() => onHover(true)} // Add touch support
        onMouseLeave={() => onHover(false)}
        onTouchEnd={() => onHover(false)} // Add touch support
    >
        <a href={url}>

            <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-colors duration-700 rounded-lg"></div>
            <div className="relative cursor-pointer z-10">
                <h1 className='text-xl cursor-pointer md:text-2xl lg:text-4xl mb-3 md:mb-4 lg:mb-10 transition-transform duration-500'>{title}</h1>
                <div className={`
                transition-all duration-700 ease-in-out
                transform
                ${isHovered
                        ? 'opacity-100 max-h-[1000px] translate-y-0' // Increased max-height for mobile
                        : 'md:opacity-0 md:max-h-0 md:translate-y-10 md:overflow-hidden opacity-100 max-h-full'
                    }
            `}>
                    <p className={`
                    text-start cursor-pointer
                    transition-all duration-500
                    ${title === 'rooted in trust and collaboration'
                            ? 'text-xs md:text-sm'
                            : 'text-sm md:text-lg lg:text-2xl'}
                    leading-relaxed /* Better readability */
                `}>
                        {content}
                    </p>
                </div>
            </div>
        </a>
    </div>
);

const ScrollTriggeredCountUp = ({ end, ...props }) => {
    const [ref, isInView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={ref}>
            {isInView ? (
                <CountUp end={end} duration={2.5} {...props} />
            ) : (
                <span>{0}</span>
            )}
        </div>
    );
};

const StatCard = ({ number, suffix, prefix, label }) => (
    <div className='text-center p-6 rounded-xl '>
        <p className='text-sm md:text-base mt-2'>{label}</p>
    </div>
);

const HeroBanner = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative z-10 px-2 md:px-4 py-4 md:py-0 min-h-screen flex justify-start items-start overflow-x-hidden">
            <div className="container mx-auto flex items-center flex-col text-center">
                <h1 className='text-2xl cursor-default text-black md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-16 px-4'>
                    Elevating Lives Together: From Cooperation to Prosperity
                </h1>

                <div className='flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2 w-full'>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            isHovered={hoveredIndex === index}
                            onHover={(isHovered) => {
                                // On mobile, tapping a card will toggle it
                                if (window.innerWidth < 768) {
                                    setHoveredIndex(hoveredIndex === index ? null : index);
                                } else {
                                    setHoveredIndex(isHovered ? index : null);
                                }
                            }}
                            className={`
                                mb-4 md:mb-0 
                                ${hoveredIndex !== null && hoveredIndex !== index ? 'md:opacity-75' : ''}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
