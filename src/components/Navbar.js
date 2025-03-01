import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            title: 'Home',
            path: '/'
            // Home no longer has submenu
        },
        {
            title: 'Discover Us',
            path: '#about',
            submenu: [
                { title: 'Our Story', path: '/discover/story' },
                { title: 'Mission & Vision', path: '/discover/mission' },
                { title: 'Leadership', path: '/discover/leadership' },
                { title: 'Milestones', path: '/discover/milestones' },
                { title: 'Endorsed by Esteemed Voices', path: '/discover/endorsed' },
                { title: 'Organization Structure', path: '/discover/organization' },
            ]
        },
        {
            title: 'Farmers Voice',
            path: '/farmer'
            // Home no longer has submenu
        },
        {
            title: 'Product',
            path: '#services',
            submenu: [
                { title: 'Rice', path: '/product/rice' },
                { title: 'Paddy', path: '/product/paddy' },
                { title: 'Cotton', path: '/product/cotton' },
            ]
        },
        {
            title: 'Our Pillars Of Success',
            path: '#pillars',
            submenu: [
                { title: 'Financial Services', path: '/pillars/winning' },
                { title: 'Agri Inputs', path: '/pillars/agri' },
                { title: 'Agri Extension Services', path: '/pillars/extension' },
                { title: 'Value-Added Services', path: '/pillars/values' },
                { title: 'Insurance Services & Pension', path: '/pillars/insurance' },
                { title: 'Welfare Services', path: '/pillars/Welfare' },
            ]
        },
        {
            title: 'Awards & Accolades',
            path: '/awards'
            // Home no longer has submenu
        },
        {
            title: 'Our Winning Formula',
            path: '/winning'
            // Home no longer has submenu
        }
    ];

    const socialLinks = [
        {
            icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61566000885423', color: 'hover:text-blue-400'
        },
        { icon: <FaTwitter />, url: 'https://x.com/mulkanoorCoop', color: 'hover:text-sky-400' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/mulkanoor_coop/?hl=en', color: 'hover:text-pink-400' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/mulkanoor-cooperative-society/posts/?feedView=all', color: 'hover:text-blue-500' },
    ];

    const handleDropdownClick = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="relative overflow-x-hidden">
            {/* Main Navbar */}
            <nav className={`fixed w-full top-0 left-0 backdrop-blur-sm bg-white/20 border-b border-white/20 shadow-lg z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="flex justify-between items-center px-3 md:px-8 py-2 md:py-4">
                    {/* Menu Button */}
                    <button
                        className="text-base md:text-xl text-black flex items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className='p-2 hover:text-white bg-[#F2EA02]/70 text-base transition-all duration-300 
                            hover:scale-110 rounded-full backdrop-blur-lg flex items-center justify-center'>
                            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                        </span>
                    </button>

                    {/* Center Logo - Smaller on mobile */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <a href='/'>
                            <img src={logo} alt="Logo" className="h-10 md:h-16 w-auto" />
                        </a>
                    </div>

                    {/* Social Icons - Hidden on mobile */}
                    <div className="hidden md:flex gap-4">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} className={`text-gray-800 text-xl ${social.color}`}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Full-screen mobile menu */}
            <div className={`
                fixed inset-0 bg-black/80 backdrop-blur-md z-40
                transition-opacity duration-300 ease-in-out
                ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
                {/* Menu Container */}
                <div className={`
                    fixed top-[60px] md:top-[76px] left-0 right-0 bottom-0
                    bg-white/95 overflow-y-auto
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-y-0' : '-translate-y-full'}
                `}>
                    <div className="container mx-auto px-4 py-6">
                        {/* Menu Items */}
                        <div className="space-y-2">
                            {menuItems.map((item, index) => (
                                <div key={index} className="rounded-lg overflow-hidden">
                                    {item.submenu ? (
                                        <div className="bg-white/50 rounded-lg">
                                            <button
                                                className="w-full flex items-center justify-between p-4 text-gray-800"
                                                onClick={() => handleDropdownClick(index)}
                                            >
                                                <span className="text-lg font-medium">{item.title}</span>
                                                <FaChevronDown className={`transition-transform duration-300 
                                                    ${activeDropdown === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            <div className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${activeDropdown === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                            `}>
                                                <div className="bg-white/30 px-4 pb-4">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.path}
                                                            className="block py-3 px-4 text-gray-600 hover:text-gray-900
                                                                hover:bg-white/50 rounded-lg transition-all duration-200"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.path}
                                            className="block p-4 text-lg font-medium text-gray-800 
                                                bg-white/50 hover:bg-white/70 transition-all duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Social Links */}
                        <div className="flex justify-center gap-6 mt-8 pb-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className={`text-gray-800 text-2xl ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;