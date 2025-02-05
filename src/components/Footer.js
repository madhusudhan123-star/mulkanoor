import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#98fb98] h-full text-[#005A32]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us Links */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">Discover</h3>
                        <ul className="space-y-2 text-2xl">
                            <li><Link to="/discover/about" className="hover:text-secondary">About Us</Link></li>
                            <li><Link to="/discover/leadership" className="hover:text-secondary">Leadership</Link></li>
                            <li><Link to="/discover/history" className="hover:text-secondary">History</Link></li>
                            <li><Link to="/discover/awards" className="hover:text-secondary">Awards & Recognition</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-2xl">
                            <li><Link to="/services/banking" className="hover:text-secondary">Banking</Link></li>
                            <li><Link to="/services/dairy" className="hover:text-secondary">Dairy</Link></li>
                            <li><Link to="/services/agriculture" className="hover:text-secondary">Agriculture</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-2 text-2xl">
                            <p className="flex items-center">
                                <FaPhone className="mr-2" />
                                <span>+91 8733 269 224</span>
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <span>info@mulkanoor.com</span>
                            </p>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>Mulkanoor, Bheemadevarapally Mandal, Hanamkonda District, Telangana - 506 345</span>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className='dancing-script text-[8rem] md:text-[12rem] font-bold text-center bg-gradient-to-r from-[#8CC63F] to-[#005A32] bg-clip-text text-transparent'>Mulkanoor</h1>
                </div>

                <div className="border-t border-white/20 mt-8 pt-4 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Mulkanoor Cooperative Society. All rights reserved.</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <Link to="/privacy-policy" className="hover:text-secondary">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-secondary">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
