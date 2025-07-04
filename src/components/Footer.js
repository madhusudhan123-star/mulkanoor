import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaL } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#98fb98] h-full text-[#005A32] py-6 md:py-8">
            <div className="container mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {/* Discover Us Links */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Discover</h3>
                        <ul className="space-y-1 text-sm md:text-base">
                            <li><Link to="/discover/story" className="hover:text-secondary transition-colors">Our Story</Link></li>
                            <li><Link to="/discover/mission" className="hover:text-secondary transition-colors">Mission & Vision</Link></li>
                            <li><Link to="/discover/leadership" className="hover:text-secondary transition-colors">Leadership</Link></li>
                            <li><Link to="/discover/milestones" className="hover:text-secondary transition-colors">Milestones</Link></li>
                            <li><Link to="/discover/endorsed" className="hover:text-secondary transition-colors">Endorsed by Esteemed Voices</Link></li>
                            <li><Link to="/discover/organization" className="hover:text-secondary transition-colors">Organization Structure</Link></li>
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Products</h3>
                        <ul className="space-y-1 text-sm md:text-base">
                            <li><Link to="/product/rice" className="hover:text-secondary transition-colors">Rice</Link></li>
                            <li><Link to="/product/paddy" className="hover:text-secondary transition-colors">Paddy</Link></li>
                            <li><Link to="/product/cotton" className="hover:text-secondary transition-colors">Cotton</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
                        <div className="space-y-1 text-sm md:text-base">
                            <p className="flex items-center gap-2">
                                <span>+91 944 080 0651</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>mcrcms1956@gmail.com
                                </span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-xs md:text-sm">
                                Mulkanoor Cooperative Rural Credit and Marketing Society Ltd., Mulkanoor Village, Bheemadevarapally Mandal, Hanumakonda District-505471
                                </span>
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block mt-2 px-4 py-1 bg-[#005A32] text-white rounded-full
                                    hover:bg-[#004525] transition-colors duration-300 text-xs md:text-sm"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-lg md:text-xl font-bold mb-2">Connect With Us</h3>
                        <div className="flex gap-4 text-lg md:text-xl">
                            <a href="https://www.facebook.com/profile.php?id=61566000885423" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaFacebook size={18} />
                            </a>
                            <a href="https://x.com/mulkanoorCoop" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://www.instagram.com/mulkanoor_coop/?hl=en" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://youtube.com/@mulkanoorcooperative_1?si=3eJSaFOmvCC9sSai" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaYoutube size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/mulkanoor-cooperative-society/posts/?feedView=all" className="hover:text-secondary transition-transform hover:scale-110">
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-4 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm">
                        <p>&copy; {new Date().getFullYear()} Mulkanoor Cooperative Society. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
