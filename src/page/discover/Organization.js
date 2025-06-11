import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'

const Organization = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update mobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Organization structure data
    const orgData = [
        {
            id: "1",
            name: "General Body",
            description: "Members of the society meets at least once in a year",
            children: ["2"]
        },
        {
            id: "2",
            name: "Managing committee",
            description: "Members of the society elect 15 managing committee members",
            children: ["3"]
        },
        {
            id: "3",
            name: "President",
            description: "",
            children: ["4", "5"]
        },
        {
            id: "4",
            name: "Village Committees",
            description: "",
            children: ["6"]
        },
        {
            id: "5",
            name: "General Manager",
            description: "",
            children: ["7"]
        },
        {
            id: "6",
            name: "Members",
            description: "",
            children: []
        },
        {
            id: "7",
            name: "Employees",
            description: "",
            children: []
        }
    ];

    // Static organization chart card component
    const OrgCard = ({ name, description }) => (
        <div className="bg-gradient-to-br from-white/60 to-[#F0EBE0]/60 
                      backdrop-blur-sm rounded-lg p-4 shadow-lg text-center
                      border-2 border-[#C8AD7F]/30 h-full w-full
                      transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-lg md:text-xl font-bold text-[#4A3F35] mb-1">
                {name}
            </h3>
            {description && (
                <p className="text-xs md:text-sm text-[#8B7355]">
                    {description}
                </p>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] pt-20 md:pt-28">
            <Helmet>
                <title>Organizational Structure - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Explore our democratic organizational structure from General Body to Village Committees. Learn how 15 elected committee members and professional management ensure efficient cooperative governance."
                />
                <meta
                    name="keywords"
                    content="cooperative structure, general body, managing committee, village committees, democratic governance, rural organization"
                />
                <meta 
                    property="og:title" 
                    content="Organizational Structure - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Discover how our democratic organizational structure empowers farmers through effective cooperative governance and management." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mulkanoor Cooperative Society",
                        "description": "Democratic cooperative society with structured governance",
                        "member": {
                            "@type": "OrganizationRole",
                            "roleName": "General Body",
                            "description": "Members meet annually for democratic decision-making",
                            "subOrganization": {
                                "@type": "Organization",
                                "name": "Managing Committee",
                                "numberOfEmployees": "15",
                                "description": "Elected committee members",
                                "member": [
                                    {
                                        "@type": "OrganizationRole",
                                        "roleName": "President",
                                        "subOrganization": [
                                            {
                                                "@type": "Organization",
                                                "name": "Village Committees",
                                                "description": "Local governance units"
                                            },
                                            {
                                                "@type": "Organization",
                                                "name": "General Manager",
                                                "description": "Professional management"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "foundingDate": "1956",
                        "award": [
                            {
                                "@type": "Award",
                                "name": "Best Cooperative Management",
                                "description": "Recognition for democratic governance excellence"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <motion.div
                className="text-center mb-8 md:mb-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 text-[#4A3F35] relative">
                    <span className="inline-block cursor-default bg-gradient-to-r from-[#8B7355] to-[#C8AD7F] bg-clip-text text-transparent">
                        Organizational Structure
                    </span>
                </h1>
                <p className="text-lg cursor-default md:text-xl text-[#8B7355]">
                    The backbone of our cooperative success
                </p>
            </motion.div>

            <motion.div
                className="container mx-auto px-2 md:px-4 mb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Static Organization Chart */}
                <div className="bg-gradient-to-br from-white/60 to-[#F0EBE0]/60 
                             backdrop-blur-sm rounded-lg md:rounded-xl p-6 md:p-8 
                             shadow-xl border-2 border-[#C8AD7F]/30 overflow-x-auto">

                    {/* Level 1 */}
                    <div className="flex justify-center mb-8 md:mb-10">
                        <div className="w-full max-w-xs">
                            <OrgCard
                                name={orgData[0].name}
                                description={orgData[0].description}
                            />
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="w-px h-8 bg-[#C8AD7F] mx-auto -mt-8 mb-0"></div>

                    {/* Level 2 */}
                    <div className="flex justify-center mb-8 md:mb-10">
                        <div className="w-full max-w-xs">
                            <OrgCard
                                name={orgData[1].name}
                                description={orgData[1].description}
                            />
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="w-px h-8 bg-[#C8AD7F] mx-auto -mt-8 mb-0"></div>

                    {/* Level 3 */}
                    <div className="flex justify-center mb-8 md:mb-10">
                        <div className="w-full max-w-xs">
                            <OrgCard
                                name={orgData[2].name}
                                description={orgData[2].description}
                            />
                        </div>
                    </div>

                    {/* Connector Lines for split */}
                    <div className="relative h-8 -mt-8 mb-0">
                        <div className="absolute left-1/2 w-1/2 border-l-2 border-t-2 border-[#C8AD7F] h-full"></div>
                        <div className="absolute right-1/2 w-1/2 border-r-2 border-t-2 border-[#C8AD7F] h-full"></div>
                    </div>

                    {/* Level 4 - Split into two columns */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
                        <div>
                            <OrgCard
                                name={orgData[3].name}
                                description={orgData[3].description}
                            />
                        </div>
                        <div>
                            <OrgCard
                                name={orgData[4].name}
                                description={orgData[4].description}
                            />
                        </div>
                    </div>

                    {/* Connector Lines for last level */}
                    <div className="relative h-8 -mt-8 mb-0">
                        <div className="absolute left-1/4 h-full border-l-2 border-[#C8AD7F]"></div>
                        <div className="absolute right-1/4 h-full border-l-2 border-[#C8AD7F]"></div>
                    </div>

                    {/* Level 5 */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        <div>
                            <OrgCard
                                name={orgData[5].name}
                                description={orgData[5].description}
                            />
                        </div>
                        <div>
                            <OrgCard
                                name={orgData[6].name}
                                description={orgData[6].description}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="bg-gradient-to-br from-[#C8AD7F]/20 to-white/20 backdrop-blur-sm 
                              rounded-lg md:rounded-xl p-4 md:p-8 shadow-xl"
                    style={{ border: '2px solid rgba(200, 173, 127, 0.3)' }}>
                    <h2 className="text-xl cursor-default md:text-2xl font-bold mb-3 md:mb-4 text-[#4A3F35]">Our Structure</h2>
                    <p className="text-sm cursor-default md:text-base text-[#8B7355] leading-relaxed">
                        Our organizational structure ensures efficient operations and clear
                        communication channels that benefit our cooperative members. The General Body
                        comprises all society members who meet annually to elect the Managing Committee.
                        The President oversees both Village Committees and the General Manager, who in
                        turn supervise Members and Employees respectively. This structure promotes
                        democratic decision-making while maintaining operational effectiveness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Organization;