import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import one from "../../assets/leadership/one.jpg";
import two from "../../assets/leadership/two.jpg";
import { Helmet } from 'react-helmet'

const SlidingPanel = ({ isOpen, onClose, leader }) => {
    return (
        <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed inset-0 bg-[#F5F5DC] overflow-y-auto transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-95 opacity-0'}`}>
                <div className="container mx-auto px-4 py-8 max-w-6xl relative">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full z-10 bg-white/80">
                        <IoClose size={24} />
                    </button>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="sticky top-8">
                                <img 
                                    src={leader?.image} 
                                    alt={leader?.name} 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold">{leader?.name}</h2>
                                    <p className="text-xl text-gray-600 mt-2">{leader?.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <div className="prose prose-lg max-w-none">
                                {leader?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LeaderCard = ({ leader, onClick }) => {
    const getExcerpt = (description) => {
        // Extract first paragraph text for preview
        const text = description.props.children.find(child => child?.type === 'p')?.props?.children || '';
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
    };

    return (
        <div
            className="bg-[#C8AD7F] shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
        >
            <div className="aspect-[4/3] relative" onClick={() => onClick(leader)}>
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">{leader.name}</h3>
                    <p className="text-white/90 text-lg">{leader.title}</p>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 line-clamp-3">
                    {getExcerpt(leader.description)}
                </p>
                <button 
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(leader);
                    }}
                >
                    Read More →
                </button>
            </div>
        </div>
    )
}

const Leadership = () => {
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const handleCardClick = (leader) => {
        setSelectedLeader(leader);
        setIsPanelOpen(true);
    };

    const handleClosePanel = () => {
        setIsPanelOpen(false);
        setTimeout(() => setSelectedLeader(null), 300); // Clear after animation
    };

    const leaders = [
        {
            title: "FOUNDER PRESIDENT",
            name: "Sri A.K. Vishwanatha Reddy",
            image: one,
            description: (
                <>
                    <h2 className="text-2xl font-bold mb-4">A Visionary Leader and Pioneer of Rural Development</h2>
                    <p className="mb-4">
                        Sri Aligireddy Kasi Vishwanatha Reddy was born in 1926 in Mulkanoor village, Bheemadevarapally Mandal, Karimnagar district, Telangana, India. After completing his early education in Warangal and higher studies at Osmania University, Hyderabad, he actively participated in the Indian Independence Movement and the struggle against the Nizam's rule. Recognized as a well-renowned personality, he dedicated his life post-independence to rural development and the welfare of the farmer community.
                    </p>
                    <p className="mb-6">
                        Understanding the dire poverty and challenges faced by rural farmers, Sri A.K. Vishwanatha Reddy mobilized them towards self-reliance and collective action. On July 27, 1956, he, along with a group of visionary farmers, founded the Mulkanoor Cooperative Rural Bank. Under his leadership as President for nearly 30 years, the cooperative grew from humble beginnings into a beacon of hope for rural India. His unwavering belief in the power of cooperation transformed the lives of countless farmers and established a legacy of empowerment and community progress.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Contributions to Cooperative and Agricultural Development</h3>
                    <p className="mb-4">Sri Reddy held various influential roles throughout his career, contributing significantly to the cooperative movement and agricultural development in Andhra Pradesh.</p>

                    <h4 className="font-bold mb-2">Cooperative Leadership:</h4>
                    <p className="mb-4">He served as Vice-President of the District Cooperative Central Bank and Director of the District Cooperative Marketing Society from 1959 to 1966. He was also an executive member of the Andhra Pradesh Cooperative Marketing Federation and guided the Land Mortgage Bank as a Director.</p>

                    <h4 className="font-bold mb-2">Advocacy for Farmers:</h4>
                    <p className="mb-4">He championed the establishment of a starch factory in Karimnagar to support maize growers and served as President of the Andhra Pradesh Farmers Maize Starch Cooperative Limited.</p>

                    <h4 className="font-bold mb-2">Pioneering Poultry Initiatives:</h4>
                    <p className="mb-4">Sri Reddy promoted poultry farming in the region, serving as a member of the Central Poultry Development Advisory Council, Government of India, and Vice-President of the Warangal Poultry Farmers Association.</p>

                    <h4 className="font-bold mb-2">Academic and Advisory Roles:</h4>
                    <p className="mb-4">Recognized for his expertise in agriculture, he was nominated as a member of the Andhra Pradesh Agricultural University Research Advisory Council and served on the State Seed Sub-Committee.</p>

                    <h4 className="font-bold mb-2">Community Leadership:</h4>
                    <p className="mb-4">He held several leadership positions, including Sarpanch of Bheemadevarapally Gram Panchayat for 20 years and President of the Panchayat Samithi, Bheemadevarapally Taluq (1981-86).</p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Recognition and Awards</h3>
                    <p className="mb-4">
                        Sri A.K. Vishwanatha Reddy’s visionary leadership and managerial excellence earned him widespread recognition. Notably, he was honored with the “Manager of the Year 1981” award by the Hyderabad Management Association, making him the only recipient from the cooperative sector to receive such an honor.
                        His tireless dedication and pioneering efforts in the cooperative movement have left an indelible mark, inspiring generations to follow his example of service, innovation, and leadership.
                    </p>
                </>
            )
        },
        {
            title: "PRESIDENT-CHAIRMAN",
            name: "Shri AligiReddy Praveen Reddy",
            image: two,
            description: (
                <>
                    <h2 className="text-2xl font-bold mb-4">An Inspirational Leader Upholding His Father's Legacy</h2>
                    <p className="mb-4">
                        Algireddy Praveen Reddy, born on June 28, 1958, in Mulkanoor, Telangana, has significantly contributed to rural development, public service, and cooperative governance. Inspired by his father, Late Shri A.K. Vishwanatha Reddy, a pioneer of the Mulkanoor Cooperative Society, he pursued a Bachelor of Agricultural Science and later a PGDM, equipping himself for a life of service.
                    </p>
                    <p className="mb-4">
                        As an MLA for the Husnabad Constituency (2009-2014) representing the Congress Party, he prioritized infrastructure, education, healthcare, and agriculture, implementing projects worth over ₹430 crores. His leadership saw the establishment of key facilities like RDO and Electricity Division Offices, extensive road networks, schools, and a ₹63-crore drinking water facility.
                    </p>
                    <p className="mb-6">
                        His efforts in education led to constructing model schools, polytechnic colleges, and degree colleges, empowering youth, especially girls.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-4">Key Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li>Transformed Mulkanoor Cooperative into Asia's second-largest cooperative rural bank</li>
                        <li>Promoted women's dairy cooperatives and watershed programs</li>
                        <li>Implemented micro-irrigation and market linkages</li>
                        <li>Empowered over 7,000 farmers and 20,000 women members</li>
                        <li>Represented India in international seminars</li>
                        <li>Received "Best Cooperator" and NCDC National Award for Cooperative Excellence</li>
                    </ul>

                    <p className="mb-4">
                        An advocate of participatory governance, he has actively supported Congress initiatives like Rahul Gandhi's Bharat Jodo Yatra and led programs addressing land and water challenges. His vision for rural development emphasizes self-reliance, sustainability, and inclusive growth.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className='bg-[#F5F5DC]'>
            <Helmet>
                <title>Leadership Legacy - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Meet the visionary leaders of Mulkanoor Cooperative Society - from founder Sri A.K. Vishwanatha Reddy to current Chairman Sri AligiReddy Praveen Reddy, who transformed rural development in Telangana."
                />
                <meta
                    name="keywords"
                    content="A.K. Vishwanatha Reddy, AligiReddy Praveen Reddy, Mulkanoor leadership, cooperative society founders, rural development pioneers"
                />
                <meta 
                    property="og:title" 
                    content="Leadership Legacy - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Discover the inspiring journey of our leaders who transformed Mulkanoor into Asia's second-largest cooperative rural bank." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mulkanoor Cooperative Society",
                        "foundingDate": "1956-07-27",
                        "founder": {
                            "@type": "Person",
                            "name": "Sri A.K. Vishwanatha Reddy",
                            "jobTitle": "Founder President",
                            "birthDate": "1926",
                            "description": "Pioneer of rural development and cooperative movement"
                        },
                        "leadership": [
                            {
                                "@type": "Person",
                                "name": "Shri AligiReddy Praveen Reddy",
                                "jobTitle": "President-Chairman",
                                "birthDate": "1958-06-28",
                                "description": "Current leader transforming rural development",
                                "hasCredential": [
                                    {
                                        "@type": "EducationalOccupationalCredential",
                                        "credentialCategory": "degree",
                                        "name": "Bachelor of Agricultural Science"
                                    },
                                    {
                                        "@type": "EducationalOccupationalCredential",
                                        "credentialCategory": "degree",
                                        "name": "PGDM"
                                    }
                                ]
                            }
                        ],
                        "award": [
                            {
                                "@type": "Award",
                                "name": "Manager of the Year 1981",
                                "description": "Awarded to Sri A.K. Vishwanatha Reddy by Hyderabad Management Association"
                            },
                            {
                                "@type": "Award",
                                "name": "NCDC National Award",
                                "description": "Cooperative Excellence Award received by Shri AligiReddy Praveen Reddy"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <div className="container mx-auto px-4 py-16 mt-16 md:mt-20">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl cursor-default font-bold mb-6">Our Leadership</h1>
                    <p className="text-gray-600 cursor-default">
                        Visionary leaders who have shaped the future of rural development and cooperation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {leaders.map((leader, index) => (
                        <LeaderCard
                            key={index}
                            leader={leader}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>

                <SlidingPanel
                    isOpen={isPanelOpen}
                    onClose={handleClosePanel}
                    leader={selectedLeader}
                />
            </div>
        </div>
    )
}

export default Leadership