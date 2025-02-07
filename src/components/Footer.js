import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#98fb98] h-full text-[#005A32] py-8 md:py-12">
            <div className="container mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* About Us Links */}
                    <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Discover</h3>
                        <ul className="space-y-3 text-base md:text-lg lg:text-2xl">
                            <li><Link to="/discover/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/discover/leadership" className="hover:text-secondary transition-colors">Leadership</Link></li>
                            <li><Link to="/discover/history" className="hover:text-secondary transition-colors">History</Link></li>
                            <li><Link to="/discover/awards" className="hover:text-secondary transition-colors">Awards & Recognition</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Services</h3>
                        <ul className="space-y-3 text-base md:text-lg lg:text-2xl">
                            <li><Link to="/services/banking" className="hover:text-secondary transition-colors">Banking</Link></li>
                            <li><Link to="/services/dairy" className="hover:text-secondary transition-colors">Dairy</Link></li>
                            <li><Link to="/services/agriculture" className="hover:text-secondary transition-colors">Agriculture</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-base md:text-lg lg:text-2xl">
                            <p className="flex items-center gap-2">
                                <FaPhone className="flex-shrink-0" />
                                <span>+91 8733 269 224</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="flex-shrink-0" />
                                <span>info@mulkanoor.com</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                                <span className="text-sm md:text-base">
                                    Mulkanoor, Bheemadevarapally Mandal,
                                    Hanamkonda District, Telangana - 506 345
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex gap-6 text-xl md:text-2xl">
                            <a href="#" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="mt-12 md:mt-16">
                    <h1 className='dancing-script text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] font-bold text-center 
                        bg-gradient-to-r from-[#8CC63F] to-[#005A32] bg-clip-text text-transparent'>
                        Mulkanoor
                    </h1>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
                        <p>&copy; {new Date().getFullYear()} Mulkanoor Cooperative Society. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
