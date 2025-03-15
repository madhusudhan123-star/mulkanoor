import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner from '../../assets/milestones/banner.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1957 from '../../assets/milestones/1956-57.jpg';
// import year1958 from '../../assets/milestones/1958-59.jpg';
// import year1959 from '../../assets/milestones/1959-60.jpg';
// import year1960 from '../../assets/milestones/1960-61.jpg';
// import year1961 from '../../assets/milestones/1961-62.jpg';
// import year1962 from '../../assets/milestones/1961-62_two.jpg';
// import year1963 from '../../assets/milestones/1963-64.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';
// import year1956 from '../../assets/milestones/1956.jpg';



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

    // Update the scroll function
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const itemWidth = 250;
        const currentIndex = activeIndex;

        // Change to single step navigation
        const newIndex = direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : Math.min(timelineData.length - 1, currentIndex + 1);

        setActiveIndex(newIndex);

        // Precise scroll calculation
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
            year: "1956-57",
            title: "Formation of the Society",
            description: "Farmers registered the society with an initial membership of 373 and a share capital of ₹2,300.",
            image: "https://example.com/image1.jpg",
            achievements: [
                "Initial membership of 373",
                "Share capital of ₹2,300",
                "Established to support farmers financially"
            ],
            details: "A group of farmers came together to form the cooperative society, laying the foundation for future agricultural support."
        },
        {
            year: "1957-58",
            title: "Introduction of Short-Term Loans",
            description: "Short-term loans were disbursed for the first time to assist farmers in timely crop cultivation.",
            image: "https://example.com/image2.jpg",
            achievements: [
                "First-ever short-term loans for farmers",
                "Helped in timely crop cultivation"
            ],
            details: "This initiative marked the beginning of financial assistance to farmers, ensuring better productivity."
        },
        {
            year: "1958-59",
            title: "Electrification and Pump Set Sales",
            description: "With electrification, the cooperative started selling electric pump sets to aid agricultural development.",
            image: "https://example.com/image3.jpg",
            achievements: [
                "Electrification of the society's area",
                "Introduction of electric pump sets for farmers"
            ],
            details: "Providing electric pump sets revolutionized irrigation, enhancing crop yields."
        },
        {
            year: "1959-60",
            title: "Storage and Expansion",
            description: "First godown was built for fertilizers and produce, and sugar sales were introduced.",
            image: "https://example.com/image4.jpg",
            achievements: [
                "Construction of first fertilizer godown",
                "Initiation of sugar sales in the community"
            ],
            details: "Efficient inventory management and expansion into sugar sales strengthened the cooperative's role in the region."
        },
        {
            year: "1960-61",
            title: "Innovative Loan Disbursement",
            description: "Loans were disbursed in kind, and medium-term loans for pump sets were introduced.",
            image: "https://example.com/image5.jpg",
            achievements: [
                "Loans disbursed in kind before RBI recommendations",
                "First medium-term loans for pump sets"
            ],
            details: "Farmers benefited from receiving loans in kind, ensuring direct investment into farming essentials."
        },
        {
            year: "1961-62",
            title: "Introduction of Hybrid Seeds",
            description: "Hybrid maize seeds were introduced to improve agricultural productivity.",
            image: "https://example.com/image6.jpg",
            achievements: [
                "First introduction of hybrid maize seeds"
            ],
            details: "Farmers adopted hybrid maize, leading to better yield and quality crops."
        },
        {
            year: "1962-63",
            title: "Pledge Loan Scheme Introduced",
            description: "Pledge loans were introduced to support farmers financially.",
            image: "https://example.com/image7.jpg",
            achievements: [
                "Introduction of pledge loans"
            ],
            details: "This scheme helped farmers secure loans against stored produce."
        },
        {
            year: "1964-65",
            title: "Milestone in Member Deposits",
            description: "Member deposits surpassed ₹1.00 lakh, indicating financial stability.",
            image: "https://example.com/image8.jpg",
            achievements: [
                "Member deposits exceeded ₹1.00 lakh"
            ],
            details: "A significant financial milestone showcasing trust in the cooperative."
        },
        {
            year: "1965-66",
            title: "Expansion into Rice Milling and Crop Loans",
            description: "A rice mill was installed, and the crop loan system was introduced.",
            image: "https://example.com/image9.jpg",
            achievements: [
                "Installation of a rice mill",
                "Introduction of crop loan system as per RBI guidelines",
                "Promotion of high-yield crop varieties"
            ],
            details: "Linking credit with marketing improved farmer income and productivity."
        },
        {
            year: "1966-67",
            title: "Oil Mill Addition and Incentives",
            description: "An oil mill was added, and community prizes for 100% loan recovery were introduced.",
            image: "https://example.com/image10.jpg",
            achievements: [
                "Oil mill established for expanded processing",
                "Incentives introduced for villages with 100% loan recovery"
            ],
            details: "Encouraging prompt loan repayment and expanding agro-processing capabilities."
        },
        {
            year: "1967-68",
            title: "Staff Mobility Enhancement",
            description: "The first motorcycle was purchased to facilitate staff mobility.",
            image: "https://example.com/image11.jpg",
            achievements: [
                "Motorcycle purchase for staff transportation"
            ],
            details: "Improved efficiency and outreach for cooperative staff."
        },
        {
            year: "1968-69",
            title: "Irrigation and Non-Credit Loans",
            description: "A drilling machine was purchased, and SBH loans were availed for non-credit activities.",
            image: "https://example.com/image12.jpg",
            achievements: [
                "Drilling machine introduced to revitalize irrigation wells",
                "Non-credit loans availed from SBH"
            ],
            details: "Supporting farmers beyond credit services by improving irrigation infrastructure."
        },
        {
            year: "1969-70",
            title: "Transition to SBH Loans",
            description: "All credit and non-credit loans were transferred to SBH.",
            image: "https://example.com/image13.jpg",
            achievements: [
                "Loan services transitioned to SBH"
            ],
            details: "A major financial restructuring to enhance loan accessibility."
        },
        {
            year: "1956-57",
            title: "Formation of Cooperative Society",
            description: "Farmers registered the society with an initial membership of 373 and a share capital of ₹2,300.",
            achievements: [
                "Society officially registered",
                "373 initial members joined",
                "Initial capital of ₹2,300"
            ],
            details: "This marked the beginning of the cooperative movement to support farmers."
        },
        {
            year: "1957-58",
            title: "Introduction of Short-term Loans",
            description: "First short-term loans disbursed to help farmers cultivate crops effectively.",
            achievements: [
                "Loans enabled timely cultivation",
                "Improved financial support for farmers"
            ],
            details: "A major step in ensuring timely assistance to farmers."
        },
        {
            year: "1958-59",
            title: "Electrification and Pump Set Sales",
            description: "Started selling electric pump sets to aid agricultural development.",
            achievements: [
                "Electrification of the area",
                "Pump sets introduced to improve irrigation"
            ],
            details: "Electricity transformed farming practices, enabling higher efficiency."
        },
        {
            year: "1959-60",
            title: "First Godown and Sugar Sales",
            description: "Constructed first godown for fertilizers and produce; expanded into sugar sales.",
            achievements: [
                "Improved inventory management",
                "Expanded product offerings"
            ],
            details: "Storage facilities enhanced agricultural supply chain."
        },
        {
            year: "1970-71",
            title: "Area Development Schemes",
            description: "Schemes for irrigation, dairy, poultry, and tractors were submitted to ARDC.",
            achievements: [
                "Support for diverse agricultural activities",
                "Funding facilitated by SBH"
            ],
            details: "These initiatives supported mechanization and productivity improvements."
        },
        {
            year: "1971-72",
            title: "Agricultural Extension Services Strengthened",
            description: "An agricultural graduate was appointed to enhance farming techniques and modern tools adoption.",
            achievements: [
                "Promotion of new seeds and balanced fertilization",
                "Sale of sugar initiated"
            ],
            details: "Expert guidance improved farming efficiency and yields."
        },
        {
            year: "1972-73",
            title: "Expansion of Agro Services and Electrification",
            description: "Strengthened Agro Services with tractors, lathe machines, and accessories.",
            achievements: [
                "NCDC-supported mechanization",
                "All 14 villages electrified"
            ],
            details: "A significant step in modernizing rural agriculture."
        },
        {
            year: "1973-74",
            title: "Dairy and Poultry Development",
            description: "ARDC sanctioned schemes for dairy and poultry development.",
            achievements: [
                "Veterinary graduate appointed",
                "Feed mixing plant installed"
            ],
            details: "Livestock and poultry businesses received structured support."
        },
        {
            year: "1974-75",
            title: "Pipeline Loans and Marketing Expansion",
            description: "Pipeline loans introduced, and egg marketing centers established.",
            achievements: [
                "Six godowns sanctioned (3000 MT capacity)",
                "Full-fledged branch opened in Kothakonda"
            ],
            details: "Infrastructure growth supported agricultural expansion."
        },
        {
            year: "1975-76",
            title: "Modernization of Rice Mill",
            description: "Rice mill upgraded and pest-proofing introduced.",
            achievements: [
                "Additional agricultural graduate appointed",
                "Improved grain storage methods"
            ],
            details: "Enhanced efficiency in grain processing and storage."
        },
        {
            year: "1976-77",
            title: "Seed Processing Advancement",
            description: "Imported Petkus seed cleaner from East Germany.",
            achievements: [
                "New maize and jowar varieties introduced",
                "ARDC scheme for sheep rearing sanctioned"
            ],
            details: "Improved seed quality and livestock support."
        },
        {
            year: "1977-78",
            title: "Livestock and Farmer Support",
            description: "Breeding bulls introduced; subsidies secured for small farmers.",
            achievements: [
                "Weedicide adoption encouraged",
                "Financial support for disadvantaged farmers"
            ],
            details: "Comprehensive support for diverse farming activities."
        },
        {
            year: "1978-79",
            title: "Insurance and Electrification Support",
            description: "Became an agent for LIC and GIC; funded electrification projects.",
            achievements: [
                "Interest from deposits used for insurance premiums",
                "Rural Debentures worth ₹1,50,000 purchased"
            ],
            details: "Financial security and electrification support improved rural infrastructure."
        },
        {
            year: "1979-80",
            title: "Cement and Construction Expansion",
            description: "Became a cement stockist and expanded inventory with lime mixture.",
            achievements: [
                "Increased support for rural construction",
                "Diversified cooperative services"
            ],
            details: "Expanded cooperative services to new sectors."
        },
        {
            year: "1980-81",
            title: "Community Irrigation and Pump Dealership",
            description: "Secured advanced loans for community irrigation wells and obtained a dealership for diesel pumps from Indian Oil Corporation at Mulkanoor.",
            image: "https://example.com/image1980-81.jpg",
            achievements: [
                "Advanced loans for community irrigation wells",
                "Diesel pump dealership from Indian Oil Corporation"
            ],
            details: "Supporting small and marginal farmers with better irrigation facilities."
        },
        {
            year: "1981",
            title: "Infrastructure and Member Education Initiatives",
            description: "Organized Silver Jubilee Celebrations, installed a kerosene bunk, upgraded feed mixing plant, and initiated door-to-door delivery services.",
            image: "https://example.com/image1981.jpg",
            achievements: [
                "Silver Jubilee Celebrations",
                "New feed mixing plant",
                "Door-to-door delivery using a new van",
                "BBC documented cooperative activities"
            ],
            details: "Expanded operations with new infrastructure and educational programs."
        },
        {
            year: "1982-83",
            title: "Cluster Loans and Village Development",
            description: "Sanctioned loans for weaker sections, provided drinking water facilities, and built warehouses in Bheemadevarapally and Ratnagiri villages.",
            image: "https://example.com/image1982-83.jpg",
            achievements: [
                "Loans for weaker sections and artisans",
                "Drinking water facilities in four villages",
                "Warehouses constructed in Bheemadevarapally and Ratnagiri"
            ],
            details: "Focused on supporting weaker sections and improving village infrastructure."
        },
        {
            year: "1983-84",
            title: "Agricultural Development",
            description: "Provided long-term loans for citrus and mango orchards and purchased a second Petkus seed cleaner.",
            image: "https://example.com/image1983-84.jpg",
            achievements: [
                "Loans for citrus and mango orchards",
                "Second Petkus seed cleaner purchased"
            ],
            details: "Promoting long-term agricultural sustainability."
        },
        {
            year: "1984-85",
            title: "Parboiled Rice Mill and Infrastructure Expansion",
            description: "Installed a parboiled rice mill, a second poultry feed mixing plant, and a kerosene bunk in Kothakonda Village.",
            image: "https://example.com/image1984-85.jpg",
            achievements: [
                "New parboiled rice mill installed",
                "Second poultry feed mixing plant",
                "Kerosene bunk at Kothakonda Village"
            ],
            details: "Enhanced agricultural processing capabilities."
        },
        {
            year: "1985-86",
            title: "Godown Protection and Sericulture Loans",
            description: "Constructed compound walls around godowns and provided loans for sericulture activities.",
            image: "https://example.com/image1985-86.jpg",
            achievements: [
                "Compound walls for cooperative godowns",
                "Loans for sericulture activities"
            ],
            details: "Improving infrastructure security and diversifying income opportunities."
        },
        {
            year: "1987-88",
            title: "Generator Installation and Welfare Schemes",
            description: "Purchased a 125 KVA generator for the parboiled rice mill and introduced welfare schemes for members.",
            image: "https://example.com/image1987-88.jpg",
            achievements: [
                "125 KVA generator installed",
                "Welfare schemes including funeral expenses and merit scholarships"
            ],
            details: "Strengthening industrial capacity and social welfare initiatives."
        },
        {
            year: "1988-89",
            title: "Community Welfare Initiatives",
            description: "Organized an eye camp for members and provided television sets to villages that cleared 100% loans.",
            image: "https://example.com/image1988-89.jpg",
            achievements: [
                "Eye camp for members",
                "Television sets for villages with 100% loan clearance"
            ],
            details: "Encouraging health and financial responsibility in the community."
        },
        {
            year: "1989-90",
            title: "Founder Recognition and Market Expansion",
            description: "Unveiled a statue of the founder president and initiated citrus fruit marketing.",
            image: "https://example.com/image1989-90.jpg",
            achievements: [
                "Statue of founder president installed",
                "Citrus fruit marketing initiated",
                "Sales counter opened at Bheemadevarapally"
            ],
            details: "Honoring leadership while expanding market operations."
        },
        {
            year: "1990-91",
            title: "Financial and Insurance Innovations",
            description: "Changed financial year cycle and introduced Janatha Accidental Insurance Policy for members.",
            image: "https://example.com/image1990-91.jpg",
            achievements: [
                "Financial year changed to April-March",
                "Janatha Accidental Insurance Policy introduced",
                "Insurance coverage for agricultural pumpsets"
            ],
            details: "Improving financial management and risk coverage for members."
        },
        {
            year: "1992-93",
            title: "Drip Irrigation and Storage Expansion",
            description: "Introduced the drip irrigation system, received an award from Peddireddy Thimmareddy Farm Foundation, and constructed two godowns.",
            image: "https://example.com/image1992-93.jpg",
            achievements: [
                "Drip irrigation system introduced",
                "Award from Peddireddy Thimmareddy Farm Foundation",
                "Godowns at Errabelly and Musthafapoor (1000 MT total capacity)"
            ],
            details: "Expanding irrigation facilities and storage infrastructure."
        },
        {
            year: "1993-94",
            title: "Fuel and Storage Expansion",
            description: "Added a petrol pump alongside the diesel pump and constructed multiple godowns.",
            image: "https://example.com/image1993-94.jpg",
            achievements: [
                "Petrol pump installed in Mulkanoor",
                "Godowns built in multiple villages (3000 MT total capacity)"
            ],
            details: "Enhancing fuel access and storage facilities."
        },
        {
            year: "1995-96",
            title: "Regulatory Transition and Cotton Processing",
            description: "Transitioned to A.P. Mutually Aided Cooperative Societies Act, conducted elections, and installed a cotton ginning plant.",
            image: "https://example.com/image1995-96.jpg",
            achievements: [
                "Transition to new cooperative act",
                "Managing Committee elections conducted",
                "Cotton ginning plant with 12 gins installed"
            ],
            details: "Adopting new regulatory frameworks while expanding cotton processing capabilities."
        },
        {
            year: "1996-97",
            title: "Infrastructure Expansion & Member Support",
            description: "Enhanced storage capacity and transportation while initiating member welfare programs.",
            image: "https://example.com/image1996-97.jpg",
            achievements: [
                "Constructed 1150 MT and 947 MT godowns at Kothapally/Gatlanarsingapoor",
                "Installed 20 MT weighbridge",
                "Converted lorry into oil tanker",
                "Provided transformer loans under OYT Scheme"
            ],
            details: "Laid foundation for agricultural storage and energy infrastructure development."
        },
        {
            year: "1997-98",
            title: "Modernization & Social Security",
            description: "Upgraded processing capabilities and introduced insurance coverage for members.",
            image: "https://example.com/image1997-98.jpg",
            achievements: [
                "Installed Binny Rice Mill (2 tons/hour capacity)",
                "Implemented Janatha Accidental Insurance Scheme",
                "Completed Mutharam godown"
            ],
            details: "Combined industrial modernization with comprehensive member protection."
        },
        {
            year: "1998-99",
            title: "Enhanced Insurance Coverage",
            description: "Introduced comprehensive group insurance for all members.",
            image: "https://example.com/image1998-99.jpg",
            achievements: [
                "Group Insurance Policy (₹5,000 coverage)",
                "Full premium borne by society"
            ],
            details: "Strengthened social security net for cooperative members."
        },
        {
            year: "1999-2000",
            title: "Multi-sector Development Push",
            description: "Diversified into sanitation, technology, and agricultural processing.",
            image: "https://example.com/image1999-2000.jpg",
            achievements: [
                "3rd seed processing plant at Kothapally",
                "Initiated computerization of operations",
                "Enhanced insurance coverage to ₹25,000",
                "Loans for wells, pumpsets, and toilets"
            ],
            details: "Comprehensive approach to rural development through multiple initiatives."
        },
        {
            year: "2000-01",
            title: "Educational & Storage Infrastructure",
            description: "Established educational institutions and expanded storage network.",
            image: "https://example.com/image2000-01.jpg",
            achievements: [
                "Founded AKV Reddy Rural Development Society",
                "Established Intermediate Junior College",
                "Constructed 6 village godowns"
            ],
            details: "Invested in both educational opportunities and agricultural infrastructure."
        },
        {
            year: "2001-02",
            title: "Sustainable Energy & Dairy Development",
            description: "Promoted renewable energy and women's empowerment initiatives.",
            image: "https://example.com/image2001-02.jpg",
            achievements: [
                "Loans for solar lanterns",
                "Modernized diesel bunk with IOC",
                "Established women's cooperative dairy",
                "Rainwater conservation systems"
            ],
            details: "Pioneered eco-friendly solutions and gender-focused economic programs."
        },
        {
            year: "2002-03",
            title: "Education & Youth Empowerment",
            description: "Expanded higher education access and dairy entrepreneurship.",
            image: "https://example.com/image2002-03.jpg",
            achievements: [
                "Established degree college",
                "Sanctioned 108 dairy units (₹1.08cr)",
                "Margin money support through STEPKAR"
            ],
            details: "Focused on youth development through education and livelihood programs."
        },
        {
            year: "2003-04",
            title: "Integrated Rural Development",
            description: "Implemented water management and agricultural modernization projects.",
            image: "https://example.com/image2003-04.jpg",
            achievements: [
                "Watershed program at Narahari Thanda",
                "Lift Irrigation survey in 14 villages",
                "BPCL LPG gas agency",
                "Micro-irrigation loans for 500 members"
            ],
            details: "Holistic approach to resource management and farmer support."
        },
        {
            year: "2004-05",
            title: "National Recognition & Modernization",
            description: "Received state honors while upgrading processing infrastructure.",
            image: "https://example.com/image2004-05.jpg",
            achievements: [
                "Modernized Satake rice mill with NCDC",
                "Best Cooperator award to A. Praveen Reddy"
            ],
            details: "Combined operational excellence with national-level recognition."
        },
        {
            year: "2005-06",
            title: "Digital Transformation & Capacity Building",
            description: "Embraced technology and enhanced farmer support systems.",
            image: "https://example.com/image2005-06.jpg",
            achievements: [
                "Launched society website",
                "Established Farmers Training Centre",
                "2500 MT seed storage godown",
                "Sahakarita Vibhushan Award"
            ],
            details: "Pioneered digital initiatives in cooperative management."
        },
        {
            year: "2006-07",
            title: "Jubilee Milestones & Healthcare",
            description: "Celebrated 50 years with infrastructure and health initiatives.",
            image: "https://example.com/image2006-07.jpg",
            achievements: [
                "ISO 1900:2001 Certification",
                "4170 MT additional storage",
                "Free cataract surgeries",
                "Soil Testing Laboratory"
            ],
            details: "Marked golden jubilee with quality certification and community health programs."
        },
        {
            year: "2007-08",
            title: "Logistics Expansion & Healthcare",
            description: "Enhanced transportation and community health services.",
            image: "https://example.com/image2007-08.jpg",
            achievements: [
                "600 MT additional storage",
                "2 new lorries purchased",
                "423 free cataract surgeries",
                "Land acquisition for expansion"
            ],
            details: "Strengthened both operational capacity and social welfare programs."
        },
        {
            year: "2008-09",
            title: "Cotton Processing Automation",
            description: "Modernized textile processing infrastructure.",
            image: "https://example.com/image2008-09.jpg",
            achievements: [
                "24-cotton ginning/pressing unit",
                "NCDC-assisted project"
            ],
            details: "Upgraded cotton processing capabilities through automation."
        },
        {
            year: "2009-10",
            title: "Leadership & Water Purification",
            description: "Achieved political recognition and addressed public health needs.",
            image: "https://example.com/image2009-10.jpg",
            achievements: [
                "President elected MLA & IFFCO Director",
                "Defluoride water plant installed",
                "Scholarships for professional courses"
            ],
            details: "Combined political success with essential public health infrastructure."
        },
        {
            year: "2010-11",
            title: "Infrastructure Development and Subsidy Support",
            description: "Received a 35 HP Eicher tractor and seed planter under subsidy, and constructed godowns at Rangaiahpally and Jaganathpoor.",
            image: "https://example.com/image2010-11.jpg",
            achievements: [
                "35 HP Eicher tractor and seed planter provided under subsidy",
                "Godowns constructed at Rangaiahpally and Jaganathpoor"
            ],
            details: "Enhanced agricultural infrastructure and resource availability for the society."
        },
        {
            year: "2011-12",
            title: "Expansion of Logistics and Ginning Capacity",
            description: "Purchased 3 lorries and installed 11 additional ginning machines with NCDC financial assistance.",
            image: "https://example.com/image2011-12.jpg",
            achievements: [
                "3 lorries purchased",
                "11 additional ginning machines installed"
            ],
            details: "Improved logistics and increased cotton ginning capacity."
        },
        {
            year: "2012-13",
            title: "Agricultural Mechanization and Solar Energy Loans",
            description: "Provided loans for advanced agricultural machinery and solar inverters with subsidies.",
            image: "https://example.com/image2012-13.jpg",
            achievements: [
                "Loans for power weeders, rotavators, and Taiwan sprayers",
                "Advanced loans for solar inverters"
            ],
            details: "Promoted modern farming techniques and renewable energy adoption."
        },
        {
            year: "2013-14",
            title: "Global Recognition and Sustainable Agriculture",
            description: "Delivered a keynote address at the World Agriculture Forum 2013 on the success story of MCRBMS.",
            image: "https://example.com/image2013-14.jpg",
            achievements: [
                "Keynote address at World Agriculture Forum 2013"
            ],
            details: "Highlighted the society's achievements in sustainable agriculture."
        },
        {
            year: "2014-15",
            title: "Solar Power and Cooperative Excellence",
            description: "Installed a rooftop solar power system, received the NCDC National Award, and conducted a health camp.",
            image: "https://example.com/image2014-15.jpg",
            achievements: [
                "7.5 Kwp rooftop solar power system installed",
                "NCDC National Award for Cooperative Excellence",
                "Health camp for spinal cord and disc problems conducted"
            ],
            details: "Advanced renewable energy adoption and community welfare initiatives."
        },
        {
            year: "2015-16",
            title: "Solar Power for Rice and Cotton Mills",
            description: "NCDC sanctioned a 500 Kwp solar power plant to support rice and cotton ginning mills.",
            image: "https://example.com/image2015-16.jpg",
            achievements: [
                "500 Kwp solar power plant sanctioned"
            ],
            details: "Enhanced energy efficiency for rice and cotton processing operations."
        },
        {
            year: "2016-17",
            title: "Seed Processing Plant Expansion",
            description: "NCDC sanctioned a 4 TPH paddy/maize seed processing plant at Ratnagiri.",
            image: "https://example.com/image2016-17.jpg",
            achievements: [
                "4 TPH seed processing plant sanctioned"
            ],
            details: "Increased capacity for seed processing to support agricultural productivity."
        },
        {
            year: "2017-18",
            title: "Rice Retail Outlets",
            description: "Opened Rice Retail Outlets to expand market reach.",
            image: "https://example.com/image2017-18.jpg",
            achievements: [
                "Rice Retail Outlets opened"
            ],
            details: "Improved market access for rice products."
        },
        {
            year: "2018-19",
            title: "Modernization and Storage Expansion",
            description: "Installed a modern raw rice mill, constructed godowns, and installed a weigh bridge.",
            image: "https://example.com/image2018-19.jpg",
            achievements: [
                "Modern Raw Rice Mill installed",
                "Godowns constructed at multiple locations",
                "60 Ton weigh bridge installed"
            ],
            details: "Enhanced storage and processing capabilities for rice production."
        },
        {
            year: "2019-20",
            title: "Social Welfare Initiative",
            description: "Introduced AKVR Old Age Pension for members.",
            image: "https://example.com/image2019-20.jpg",
            achievements: [
                "AKVR Old Age Pension introduced"
            ],
            details: "Provided financial support to elderly members of the society."
        },
        {
            year: "2020-21",
            title: "Modern Rice Mill Installation",
            description: "Installed a Modern Raw Rice Mill to improve processing efficiency.",
            image: "https://example.com/image2020-21.jpg",
            achievements: [
                "Modern Raw Rice Mill installed"
            ],
            details: "Upgraded rice processing infrastructure for better quality and efficiency."
        },
        {
            year: "2021-22",
            title: "Cotton Bales Godown Construction",
            description: "Initiated construction of a godown for cotton bales storage.",
            image: "https://example.com/image2021-22.jpg",
            achievements: [
                "Cotton Bales Godown construction started"
            ],
            details: "Expanded storage capacity for cotton products."
        },
        {
            year: "2022-23",
            title: "Technology Upgrade in Sorting",
            description: "Replaced the old Sortex machine with the latest technology.",
            image: "https://example.com/image2022-23.jpg",
            achievements: [
                "Latest Sortex machine installed"
            ],
            details: "Improved sorting efficiency and product quality."
        },
        {
            year: "2023-24",
            title: "Seed Processing Capacity Upgrade",
            description: "Upgraded seed processing machines from 15 TPH to 18 TPH.",
            image: "https://example.com/image2023-24.jpg",
            achievements: [
                "Seed processing capacity increased to 18 TPH"
            ],
            details: "Enhanced seed processing capabilities to meet growing demand."
        }
    ];

    // Update the onClick handler in the timeline items
    const handleItemClick = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            const itemWidth = 250;
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
        <div className="min-h-screen pt-20 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
            {/* Hero Section */}
            <motion.div
                className="h-[40vh] relative flex items-center justify-center bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}  // Fix: Wrap banner in url()
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Journey of Growth</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Seven decades of empowering farmers and building communities through cooperative excellence
                    </p>
                </div>
            </motion.div>

            {/* Timeline Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="relative">
                    {isScrollable && (
                        <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                            <button
                                onClick={() => scroll('left')}
                                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                                backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowBack className="text-3xl" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                                backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowForward className="text-3xl" />
                            </button>
                        </div>
                    )}

                    {/* Timeline Items Container */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto relative scroll-smooth"
                        style={{
                            ...scrollContainerStyles,
                            WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        <div className="flex items-center gap-6 md:gap-12 px-4 md:px-8 py-4">
                            <div className="absolute top-[45px] md:top-[55px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`
                                        relative flex-shrink-0 flex flex-col items-center cursor-pointer
                                        ${activeIndex === index ? 'scale-110 z-10' : 'scale-100'}
                                        ${activeIndex > index ? 'opacity-50' : 'opacity-100'}
                                        transition-all duration-300 ease-in-out
                                        min-w-[200px]
                                    `}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        const container = scrollContainerRef.current;
                                        if (container) {
                                            const itemWidth = 250;
                                            const scrollPosition = Math.max(
                                                0,
                                                (itemWidth * index) - (container.clientWidth / 2) + (itemWidth / 2)
                                            );
                                            container.scrollTo({
                                                left: scrollPosition,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={`
                                        w-14 h-14 md:w-20 md:h-20 rounded-full 
                                        flex items-center justify-center
                                        ${activeIndex === index
                                            ? 'bg-white/30 shadow-lg shadow-white/20'
                                            : activeIndex > index
                                                ? 'bg-white/20'
                                                : 'bg-white/10'}
                                        transition-all duration-300
                                    `}>
                                        <span className={`
                                            text-xl md:text-2xl font-bold
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
                                        mt-4 text-sm md:text-base font-medium text-center w-32
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

                    {/* Enhanced Detailed Content Section */}
                    {activeIndex !== null && (
                        <motion.div
                            className="mt-16 max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold">
                                            {timelineData[activeIndex].title}
                                        </h2>
                                        <p className="text-lg text-gray-300">
                                            {timelineData[activeIndex].description}
                                        </p>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">Key Achievements</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {timelineData[activeIndex].achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                        <p className="text-sm md:text-base">{achievement}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base text-gray-400 italic">
                                            {timelineData[activeIndex].details}
                                        </p>
                                    </div>
                                    <div className="relative h-[400px] rounded-xl overflow-hidden group">
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