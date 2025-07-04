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
    },
    {
        title: "Farmers",
        content: "Members are facilitated with credit, input supply and marketing for hassle free farming.",
        image: card2,
    },
    {
        title: "Enriching",
        content: "Increasing farmer’s income, enabling dignified living, and creating better livelihood opportunities for farming communities.",
        image: card3,

    },
    {
        title: "Communities",
        content: `So we prosper with trust, innovation and dedication being our core - from farms to future.`,
        image: card4,
    }
];

const Card = ({ title, content, image, url, className = '', isHovered, onHover }) => (
    <div
        className={`
            /* Mobile Design (Enhanced) */
            w-full sm:min-w-[280px] h-[70vh] sm:h-[75vh] 
            md:min-w-[200px] md:h-[70vh] flex-1 
            bg-black/50 md:bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 
            rounded-xl md:rounded-lg shadow-lg md:shadow-none
            transition-all duration-700 ease-out
            transform hover:shadow-2xl border border-white/10 md:border-none
            ${isHovered ? 'md:flex-grow-[3] scale-[1.02] md:scale-105 shadow-2xl' : 'md:flex-grow-[1] scale-100'}
            ${!isHovered && onHover ? 'md:flex-grow-[0.7] md:scale-95' : ''}
            ${className}
            hover:bg-black/60 active:scale-95 md:active:scale-100
            bg-cover bg-center bg-no-repeat
            relative overflow-hidden
        `}
        style={{
            backgroundImage: `url(${image})`
        }} 
        onMouseEnter={() => onHover(true)} 
        onMouseLeave={() => onHover(false)}
        onTouchStart={() => onHover(true)}
        onTouchEnd={() => onHover(false)}>
        {/* Desktop: Simple overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/40 hover:bg-black/60 transition-colors duration-700 rounded-lg"></div>
        
        {/* Mobile: Gradient overlay */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 
                        hover:from-black/90 hover:via-black/50 hover:to-black/30 
                        transition-all duration-700 rounded-xl"></div>
        
        {/* Desktop Content Layout */}
        <div className="hidden md:block relative z-10">
            <h1 className='text-xl md:text-2xl lg:text-4xl mb-3 md:mb-4 lg:mb-10 transition-transform duration-500 text-white cursor-pointer'>
                {title}
            </h1>
            <div className={`
                transition-all duration-700 ease-in-out transform
                ${isHovered
                    ? 'opacity-100 max-h-[1000px] translate-y-0'
                    : 'md:opacity-0 md:max-h-0 md:translate-y-10 md:overflow-hidden opacity-100 max-h-full'
                }
            `}>
                <p className={`
                    text-start cursor-pointer text-white
                    transition-all duration-500
                    ${title === 'rooted in trust and collaboration'
                        ? 'text-xs md:text-sm'
                        : 'text-sm md:text-lg lg:text-2xl'}
                    leading-relaxed
                `}>
                    {content}
                </p>
            </div>
        </div>

        {/* Mobile Content Layout */}
        <div className="md:hidden relative z-10 h-full flex flex-col justify-between py-10">
            {/* Title */}
            <div className="flex-shrink-0">
                <h2 className='text-xl sm:text-2xl font-bold text-white mb-2 
                              transition-all duration-500 drop-shadow-lg leading-tight'>
                    {title}
                </h2>
            </div>
            
            {/* Content */}
            <div className={`
                flex-grow flex items-end
                transition-all duration-700 ease-in-out transform
                ${isHovered
                    ? 'opacity-100 max-h-[400px] translate-y-0' 
                    : 'opacity-80 sm:opacity-60 max-h-[80px] sm:max-h-[100px] overflow-hidden'
                }
            `}>
                <div className="w-full">
                    <p className='text-white text-sm sm:text-base
                                leading-relaxed drop-shadow-md
                                transition-all duration-500'>
                        {content}
                    </p>
                    
                    {/* Call to action - only visible when hovered */}
                    <div className={`
                        mt-3 transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}>
                        <span className="inline-flex items-center text-yellow-400 font-medium text-sm
                                       hover:text-yellow-300 transition-colors">
                        </span>
                    </div>
                </div>
            </div>
        </div>
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
        <div className="relative z-10 px-3 sm:px-4 md:px-2 lg:px-4 py-6 md:py-4 
                        min-h-[120vh] sm:min-h-[110vh] md:min-h-screen h-auto 
                        pb-20 sm:pb-24 md:pb-0 lg:pb-20 xl:pb-24 
                        flex justify-center md:justify-start items-center md:items-start overflow-x-hidden">
            <div className="container mx-auto flex items-center flex-col text-center max-w-7xl">
                {/* Main Title */}
                <div className="mb-8 md:mb-6 lg:mb-8">
                    <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl 
                                 cursor-default text-black font-bold 
                                 px-2 sm:px-4 leading-tight text-center
                                 drop-shadow-sm'>
                        <span className="text-black">
                            Elevating Lives Together
                        </span>
                        <br className="hidden sm:block md:hidden lg:block" />
                        <span className="block sm:inline md:inline sm:ml-2 md:ml-1">
                            From Cooperation to Prosperity
                        </span>
                    </h1>
                </div>

                {/* Cards Container */}
                <div className='flex flex-col md:flex-row items-stretch justify-center md:justify-between 
                              gap-4 sm:gap-5 md:gap-2 lg:gap-4 w-full max-w-6xl mb-12 sm:mb-16 md:mb-0'>
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
                                transition-all duration-500
                                ${hoveredIndex !== null && hoveredIndex !== index ? 'md:opacity-75' : 'opacity-100 scale-100'}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
