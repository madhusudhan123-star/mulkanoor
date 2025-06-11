import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner from '../../assets/milestones/banner.jpg';
import year1956 from '../../assets/milestones/1956.jpg';
import year1957 from '../../assets/milestones/1956-57.jpg';
import year1958 from '../../assets/milestones/1958-59.jpg';
import year1959 from '../../assets/milestones/1959-60.jpg';
import year1960 from '../../assets/milestones/1960-61.jpg';
import year1961 from '../../assets/milestones/1961-62.jpg';
import year1962 from '../../assets/milestones/1961-62_two.jpg';
import year1963 from '../../assets/milestones/1963-64.jpg';
import year1965 from '../../assets/milestones/1965-66.jpg';
import year1966 from '../../assets/milestones/1965-66_two.jpg';
import year1967 from '../../assets/milestones/1965-66_three.jpg';
import year1968 from '../../assets/milestones/1968-69.jpg';
import year1969 from '../../assets/milestones/1968-69_two.jpg';
import year1970 from '../../assets/milestones/1971-72.jpg';
import year1971 from '../../assets/milestones/1972-73.jpg';
import year1972 from '../../assets/milestones/1973-74.jpg';
import year1973 from '../../assets/milestones/1974-75.jpg';
import year1974 from '../../assets/milestones/1974-75_three.jpg';
import year1975 from '../../assets/milestones/1974-75_two.jpg';
import year1976 from '../../assets/milestones/1975-76.jpg';
import year1977 from '../../assets/milestones/1976-77.jpg';
import year1978 from '../../assets/milestones/1976-77_two.jpg';
import year1979 from '../../assets/milestones/1976-77_three.jpg';
import year1980 from '../../assets/milestones/1975-76.jpg';
import year1981 from '../../assets/milestones/1976-77.jpg';
import year1982 from '../../assets/milestones/1976-77_two.jpg';
import year1983 from '../../assets/milestones/1976-77_three.jpg';
import year1984 from '../../assets/milestones/1977-78.jpg';
import year1985 from '../../assets/milestones/1978-79.jpg';
import year1986 from '../../assets/milestones/1980-81.jpg';
import year1987 from '../../assets/milestones/1980-81_two.jpg';
import year1988 from '../../assets/milestones/1981-82.jpg';
import year1989 from '../../assets/milestones/1981-82_two.jpg';
import year1990 from '../../assets/milestones/1981-82_three.jpg';
import year1991 from '../../assets/milestones/1983-84.jpg';
import year1992 from '../../assets/milestones/1983-84_two.jpg';
import year1993 from '../../assets/milestones/1984-85.jpg';
import year1994 from '../../assets/milestones/1988-89.jpg';
import year1995 from '../../assets/milestones/1988-89_two.jpg';
import year1996 from '../../assets/milestones/1989-90.jpg';
import year1997 from '../../assets/milestones/1992-93.JPG';
import year1998 from '../../assets/milestones/1995-96.jpg';
import year1999 from '../../assets/milestones/2000-2003.JPG';
import year2000 from '../../assets/milestones/2002-03.JPG';
import year2001 from '../../assets/milestones/2002-03_two.JPG';
import year2002 from '../../assets/milestones/2002-03_three.JPG';
import year2003 from '../../assets/milestones/2002-03_four.JPG';
import year2004 from '../../assets/milestones/2003-2004.JPG';
import year2005 from '../../assets/milestones/2005-06.JPG';
import year2006 from '../../assets/milestones/2006-07.jpg';
import year2007 from '../../assets/milestones/2006-07_two.JPG';
import year2008 from '../../assets/milestones/2013-14.jpg';
import year2009 from '../../assets/milestones/2013-14_two.jpg';
import year2010 from '../../assets/milestones/2014-15.jpg';
import year2011 from '../../assets/milestones/2014-15_two.JPG';
import year2012 from '../../assets/milestones/2015-16.JPG';
import year2013 from '../../assets/milestones/2015-16_Two.JPG';
import year2014 from '../../assets/milestones/2016-17.JPG';
import year2015 from '../../assets/milestones/2016-17_three.JPG';
import year2016 from '../../assets/milestones/2016-17_two.JPG';
import year2017 from '../../assets/milestones/2018-19.JPG';
import year2018 from '../../assets/milestones/2018-19_two.JPG';
import year2019 from '../../assets/milestones/2019-20.JPG';
import year2020 from '../../assets/milestones/2019-20_two.JPG';
import year2021 from '../../assets/milestones/2019-20_three.JPG';
import { Helmet } from 'react-helmet'



const Milestones = () => {
    console.log("hi1")
    console.log("hi2", banner)
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const scrollContainerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            checkScrollable();
        };

        const checkScrollable = () => {
            const container = scrollContainerRef.current;
            if (container) {
                setIsScrollable(container.scrollWidth > container.clientWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        checkScrollable();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Add this useEffect to handle scrolling when activeIndex changes
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const itemWidth = 250;
            const containerWidth = container.clientWidth;
            const currentScroll = container.scrollLeft;
            const activeItemPosition = itemWidth * activeIndex;
            const buffer = itemWidth; // Extra space to keep next items partially visible

            // Check if active item is too far to the right
            if (activeItemPosition > currentScroll + containerWidth - buffer) {
                container.scrollTo({
                    left: activeItemPosition - containerWidth + buffer,
                    behavior: 'smooth'
                });
            }
            // Check if active item is too far to the left
            else if (activeItemPosition < currentScroll + buffer) {
                container.scrollTo({
                    left: Math.max(0, activeItemPosition - buffer),
                    behavior: 'smooth'
                });
            }
        }
    }, [activeIndex]);

    // Update the scroll function for mobile responsiveness
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const itemWidth = isMobile ? 180 : 250; // Smaller items on mobile
        const currentIndex = activeIndex;

        const newIndex = direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : Math.min(timelineData.length - 1, currentIndex + 1);

        setActiveIndex(newIndex);

        const containerWidth = container.clientWidth;
        const scrollPosition = Math.max(
            0,
            Math.min(
                (itemWidth * newIndex) - (containerWidth / 2) + (itemWidth / 2),
                container.scrollWidth - containerWidth
            )
        );

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    const timelineData = [
        {
            year: "1956-1960",
            title: "Foundation & Early Growth",
            description: "Formation of the society with 373 members and ₹2,300 share capital. Introduced electrification and pump sets for agricultural development.",
            image: year1956,
            achievements: [
                "Society registered with 373 founding members",
                "Initial share capital of ₹2,300",
                "First electric pump sets introduced",
                "Started short-term loans for farmers",
                "Built first fertilizer godown"
            ],
            details: "The foundational years saw farmers uniting to create a cooperative that would transform agriculture in the region through collective effort and financial support."
        },
        {
            year: "1961-1965",
            title: "Innovation & Diversification",
            description: "Introduced hybrid seeds, pledge loans, and expanded into rice milling. Member deposits crossed ₹1 lakh milestone.",
            image: year1963,
            achievements: [
                "First hybrid maize seeds introduced",
                "Pledge loan scheme implemented",
                "Member deposits exceeded ₹1.00 lakh",
                "Rice mill installation began",
                "Crop loan system established"
            ],
            details: "This period marked significant agricultural innovation with the introduction of modern farming techniques and diversified financial services."
        },
        {
            year: "1966-1970",
            title: "Processing & Infrastructure",
            description: "Major expansion in agro-processing with rice and oil mills. Enhanced staff mobility and irrigation infrastructure development.",
            image: year1968,
            achievements: [
                "Rice mill and oil mill established",
                "100% loan recovery incentive program",
                "First motorcycle for staff mobility",
                "Drilling machine for irrigation wells",
                "Transition to SBH loan services"
            ],
            details: "Focused on building robust infrastructure for processing and expanding reach to better serve farming communities."
        },
        {
            year: "1971-1975",
            title: "Mechanization & Diversification",
            description: "Comprehensive agricultural mechanization with tractors, lathe machines, and expansion into dairy and poultry sectors.",
            image: year1972,
            achievements: [
                "Agricultural graduate appointed",
                "NCDC-supported mechanization program",
                "All 14 villages electrified",
                "Dairy and poultry development schemes",
                "Feed mixing plant installed",
                "Six godowns constructed (3000 MT capacity)"
            ],
            details: "Revolutionary period that brought modern machinery and livestock development to transform rural agriculture comprehensively."
        },
        {
            year: "1976-1980",
            title: "Technology & Welfare Expansion",
            description: "Advanced seed processing technology from Germany, livestock breeding, and expansion into insurance services.",
            image: year1977,
            achievements: [
                "Imported Petkus seed cleaner from East Germany",
                "New maize and jowar varieties introduced",
                "Sheep rearing and breeding bulls program",
                "LIC and GIC agency services",
                "Rural electrification funding support",
                "Cement stockist operations"
            ],
            details: "Period of technological advancement and welfare expansion, establishing the cooperative as a comprehensive rural development agency."
        },
        {
            year: "1981-1985",
            title: "Silver Jubilee & Infrastructure Boom",
            description: "25th anniversary celebrations with major infrastructure development including parboiled rice mill and expanded storage facilities.",
            image: year1984,
            achievements: [
                "Silver Jubilee celebrations conducted",
                "BBC documentation of cooperative activities",
                "Parboiled rice mill installation",
                "Community irrigation wells projects",
                "Warehouses in multiple villages",
                "Drinking water facilities for four villages"
            ],
            details: "Milestone period celebrating 25 years of success while significantly expanding infrastructure and community services."
        },
        {
            year: "1986-1990",
            title: "Modernization & Community Welfare",
            description: "Generator installation, welfare schemes introduction, and expansion into fruit marketing with community health initiatives.",
            image: year1989,
            achievements: [
                "125 KVA generator for rice mill",
                "Welfare schemes including funeral expenses",
                "Merit scholarships for members",
                "Eye camp and health services",
                "Citrus fruit marketing initiated",
                "Founder president statue unveiled"
            ],
            details: "Focus shifted to community welfare and health while expanding market operations and honoring leadership legacy."
        },
        {
            year: "1991-1995",
            title: "Financial Innovation & Storage Expansion",
            description: "Financial year restructuring, comprehensive insurance coverage, and advanced irrigation technology implementation.",
            image: year1995,
            achievements: [
                "Financial year changed to April-March",
                "Janatha Accidental Insurance Policy",
                "Drip irrigation system introduction",
                "Award from Peddireddy Thimmareddy Foundation",
                "Multiple godowns construction (4000+ MT capacity)",
                "Cotton ginning plant with 12 gins"
            ],
            details: "Period of financial restructuring and technological advancement in irrigation, significantly expanding storage and processing capabilities."
        },
        {
            year: "1996-2000",
            title: "Regulatory Transition & Modernization",
            description: "Transition to new cooperative act, computerization beginning, and comprehensive member insurance coverage.",
            image: year1999,
            achievements: [
                "Transition to A.P. Mutually Aided Cooperative Societies Act",
                "Binny Rice Mill installation (2 tons/hour)",
                "Computerization of operations initiated",
                "Group Insurance Policy (₹25,000 coverage)",
                "3rd seed processing plant at Kothapally",
                "Enhanced storage network across villages"
            ],
            details: "Major regulatory and technological transformation period, embracing modern governance and digital operations."
        },
        {
            year: "2001-2005",
            title: "Education & Sustainable Development",
            description: "Established educational institutions, promoted renewable energy, and received national recognition for cooperative excellence.",
            image: year2004,
            achievements: [
                "AKV Reddy Rural Development Society founded",
                "Intermediate Junior College established",
                "Degree college establishment",
                "Solar lanterns promotion",
                "Women's cooperative dairy development",
                "Best Cooperator award to A. Praveen Reddy"
            ],
            details: "Comprehensive rural development through education, sustainable energy, and women's empowerment initiatives."
        },
        {
            year: "2006-2010",
            title: "Golden Jubilee & Quality Certification",
            description: "50th anniversary celebrations with ISO certification, digital transformation, and enhanced healthcare services.",
            image: year2006,
            achievements: [
                "ISO 1900:2001 Certification achieved",
                "Society website launched",
                "Farmers Training Centre established",
                "Free cataract surgeries (423+ operations)",
                "Soil Testing Laboratory setup",
                "Defluoride water plant installation"
            ],
            details: "Golden jubilee marked by quality certification, digital presence, and significant community health contributions."
        },
        {
            year: "2011-2015",
            title: "Global Recognition & Solar Innovation",
            description: "World Agriculture Forum keynote, NCDC National Award, and pioneering solar power adoption in cooperative sector.",
            image: year2014,
            achievements: [
                "Keynote at World Agriculture Forum 2013",
                "NCDC National Award for Cooperative Excellence",
                "7.5 Kwp rooftop solar power system",
                "Enhanced ginning capacity (11 machines)",
                "Advanced agricultural machinery loans",
                "Health camps for specialized treatments"
            ],
            details: "Period of global recognition and leadership in sustainable energy adoption within the cooperative movement."
        },
        {
            year: "2016-2020",
            title: "Large-Scale Solar & Infrastructure",
            description: "Major solar power plant installation, modern rice mill setup, and expanded retail operations with elderly welfare programs.",
            image: year2019,
            achievements: [
                "500 Kwp solar power plant for mills",
                "4 TPH paddy/maize seed processing plant",
                "Rice Retail Outlets network",
                "Modern Raw Rice Mill installation",
                "60 Ton weigh bridge installation",
                "AKVR Old Age Pension scheme"
            ],
            details: "Large-scale infrastructure development with renewable energy focus and comprehensive elderly care programs."
        },
        {
            year: "2021-Present",
            title: "Modern Technology & Future Vision",
            description: "Latest sorting technology, enhanced processing capacity, and continued expansion of storage facilities for future growth.",
            image: year2021,
            achievements: [
                "Cotton Bales Godown construction",
                "Modern Raw Rice Mill upgrades",
                "Enhanced storage infrastructure",
                "Technology modernization programs"
            ],
            details: "Current focus on cutting-edge technology and infrastructure to meet future agricultural challenges and opportunities."
        }
    ];

    // Update the onClick handler for mobile responsiveness
    const handleItemClick = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            const itemWidth = isMobile ? 180 : 250;
            const containerWidth = container.clientWidth;
            const scrollPosition = Math.max(
                0,
                Math.min(
                    (itemWidth * index) - (containerWidth / 2) + (itemWidth / 2),
                    container.scrollWidth - containerWidth
                )
            );

            setActiveIndex(index);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    // Add this CSS class at the top of your component or in your styles file
    const scrollContainerStyles = {
        msOverflowStyle: 'none', // IE and Edge
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': { // Chrome, Safari and Opera
            display: 'none'
        }
    };

    return (
        <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
            <Helmet>
                <title>Journey & Milestones - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Explore Mulkanoor's 67-year journey from 1956 to 2023. From initial 373 members to modern agricultural facilities, discover our transformation into Asia's leading cooperative society."
                />
                <meta
                    name="keywords"
                    content="Mulkanoor history, cooperative milestones, agricultural development, rural transformation, cooperative achievements, farming innovation"
                />
                <meta 
                    property="og:title" 
                    content="Journey & Milestones - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Seven decades of empowering farmers and building communities through cooperative excellence. Discover our transformative journey since 1956." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mulkanoor Cooperative Society",
                        "foundingDate": "1956",
                        "description": "Pioneer cooperative society transforming rural agriculture",
                        "milestone": timelineData.map(milestone => ({
                            "@type": "Event",
                            "name": milestone.title,
                            "description": milestone.description,
                            "startDate": milestone.year.split('-')[0],
                            "location": {
                                "@type": "Place",
                                "name": "Mulkanoor, Telangana",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Mulkanoor",
                                    "addressRegion": "Telangana",
                                    "addressCountry": "IN"
                                }
                            },
                            "image": milestone.image,
                            "result": milestone.achievements
                        })),
                        "award": [
                            {
                                "@type": "Award",
                                "name": "NCDC National Award",
                                "description": "Recognition for Cooperative Excellence",
                                "date": "2014"
                            },
                            {
                                "@type": "Award",
                                "name": "Sahakarita Vibhushan",
                                "description": "Prestigious award for cooperative development",
                                "date": "2005"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            {/* Hero Section */}
            <motion.div
                className="h-[30vh] md:h-[40vh] relative flex items-center justify-center bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}  // Fix: Wrap banner in url()
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">Our Journey of Growth</h1>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-300">
                        Seven decades of empowering farmers and building communities through cooperative excellence
                    </p>
                </div>
            </motion.div>

            {/* Timeline Section */}
            <div className="container mx-auto px-2 md:px-4 py-8 md:py-16">
                <div className="relative">
                    {/* Navigation arrows - hidden on mobile, visible on desktop */}
                    {isScrollable && (
                        <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                            <button
                                onClick={() => scroll('left')}
                                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                                backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowBack className="text-2xl md:text-3xl" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                                backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowForward className="text-2xl md:text-3xl" />
                            </button>
                        </div>
                    )}

                    {/* Timeline Items Container - Mobile Responsive */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto relative scroll-smooth"
                        style={{
                            ...scrollContainerStyles,
                            WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        <div className="flex items-center gap-4 md:gap-6 lg:gap-12 px-2 md:px-4 lg:px-8 py-4">
                            <div className="absolute top-[35px] md:top-[45px] lg:top-[55px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`
                                        relative flex-shrink-0 flex flex-col items-center cursor-pointer
                                        ${activeIndex === index ? 'scale-105 md:scale-110 z-10' : 'scale-100'}
                                        ${activeIndex > index ? 'opacity-50' : 'opacity-100'}
                                        transition-all duration-300 ease-in-out
                                        min-w-[140px] md:min-w-[180px] lg:min-w-[200px]
                                    `}
                                    onClick={() => handleItemClick(index)}
                                    whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={`
                                        w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full 
                                        flex items-center cursor-pointer justify-center
                                        ${activeIndex === index
                                            ? 'bg-white/30 shadow-lg shadow-white/20'
                                            : activeIndex > index
                                                ? 'bg-white/20'
                                                : 'bg-white/10'}
                                        transition-all duration-300
                                    `}>
                                        <span className={`
                                            text-sm md:text-xl lg:text-2xl font-bold
                                            ${activeIndex === index
                                                ? 'text-white'
                                                : activeIndex > index
                                                    ? 'text-white/70'
                                                    : 'text-white/60'}
                                        `}>
                                            {item.year.split('-')[0]}
                                        </span>
                                    </div>
                                    <h3 className={`
                                        mt-2 md:mt-4 text-xs md:text-sm lg:text-base font-medium text-center 
                                        w-32 md:w-48 lg:w-64 leading-tight
                                        ${activeIndex === index
                                            ? 'text-white'
                                            : activeIndex > index
                                                ? 'text-white/70'
                                                : 'text-white/60'}
                                    `}>
                                        {item.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Detailed Content Section - Mobile Responsive */}
                    {activeIndex !== null && (
                        <motion.div
                            className="mt-8 md:mt-16 max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                                    <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-default font-bold leading-tight">
                                            {timelineData[activeIndex].title}
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg cursor-default text-gray-300 leading-relaxed">
                                            {timelineData[activeIndex].description}
                                        </p>
                                        <div className="space-y-3 md:space-y-4">
                                            <h3 className="text-lg md:text-xl cursor-default font-semibold">Key Achievements</h3>
                                            <div className="grid grid-cols-1 gap-3 md:gap-4">
                                                {timelineData[activeIndex].achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                                                        <p className="text-xs md:text-sm lg:text-base cursor-default leading-relaxed">{achievement}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs md:text-sm lg:text-base cursor-default text-gray-400 leading-relaxed">
                                            {timelineData[activeIndex].details}
                                        </p>
                                    </div>
                                    <div className="relative h-[250px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden group order-1 lg:order-2">
                                        <img
                                            src={timelineData[activeIndex].image}
                                            alt={timelineData[activeIndex].title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Milestones;