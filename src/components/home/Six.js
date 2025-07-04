import React from 'react'
import map from '../../assets//home/home_map.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaArrowRight } from 'react-icons/fa'

const Six = () => {
    // Social media platforms with their details
    const socialPlatforms = [
        {
            name: "Facebook",
            icon: <FaFacebook size={24} />,
            username: "@mulkanoorCoop",
            url: "https://www.facebook.com/profile.php?id=61566000885423",
            color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
        },
        {
            name: "Twitter",
            icon: <FaTwitter size={24} />,
            username: "@mulkanoorCoop",
            url: "https://x.com/mulkanoorCoop",
            color: "bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white",
        },
        {
            name: "Instagram",
            icon: <FaInstagram size={24} />,
            username: "@mulkanoor_coop",
            url: "https://www.instagram.com/mulkanoor_coop/?hl=en",
            color: "bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white",
        },
        {
            name: "YouTube",
            icon: <FaYoutube size={24} />,
            username: "@mulkanoorCoop",
            url: "https://www.youtube.com/@mulkanoorbank4307",
            color: "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white",
        },
    ];

    return (
        <div className="relative">
            {/* Map Section */}
            {/* <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
                <h2 className="text-2xl md:text-5xl font-medium text-center mb-8 md:mb-12">Our Coverage Area</h2>
                <div className="w-full">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={map}
                            alt="Coverage Map"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div> */}

            {/* Social Media Section */}
            <div className="bg-yellow-50/60">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl cursor-default md:text-5xl font-medium mb-4">Connect With Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join our growing community on social media for the latest updates,
                            farming tips, success stories, and exclusive content from Mulkanoor Cooperative.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                        {socialPlatforms.map((platform, index) => (
                            <a
                                key={index}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    ${platform.color} rounded-xl p-6 
                                    transition-all duration-300 transform hover:-translate-y-2
                                    flex flex-col items-center justify-between
                                    shadow-sm hover:shadow-xl
                                `}
                            >
                                <div className="flex items-center flex-col mb-4">
                                    <div className="mb-3">{platform.icon}</div>
                                    <h3 className="text-xl cursor-default font-bold mb-1">{platform.name}</h3>
                                    <p className="text-sm cursor-default opacity-75">{platform.username}</p>
                                </div>

                                {/* <div className="w-full pt-4 border-t border-current/20">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">{platform.followers}</span>
                                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div> */}
                            </a>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg text-center">
                        <h3 className="text-xl cursor-default md:text-2xl font-bold mb-4">Stay Updated with Mulkanoor Cooperative</h3>
                        <p className="text-gray-600 cursor-default mb-6 max-w-2xl mx-auto">
                            Follow us on social media to get updates on new initiatives, farming techniques,
                            success stories, and opportunities for farmers. Be part of our growing community!
                        </p>
                        <div className="flex gap-4 justify-center">
                            {socialPlatforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl hover:scale-125 transition-transform duration-300"
                                    style={{
                                        color: platform.color.includes('blue-600') ? '#2563eb' :
                                            platform.color.includes('sky-600') ? '#0284c7' :
                                                platform.color.includes('pink-600') ? '#db2777' :
                                                    '#1e40af'
                                    }}
                                >
                                    {platform.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Six