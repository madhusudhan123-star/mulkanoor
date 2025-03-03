import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import searchData from '../data/searchData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const mobileSearchInputRef = useRef(null);
    const suggestionsRef = useRef(null);
    const mobileSuggestionsRef = useRef(null);

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickInSearchInput =
                (searchInputRef.current && searchInputRef.current.contains(event.target)) ||
                (mobileSearchInputRef.current && mobileSearchInputRef.current.contains(event.target));

            const isClickInSuggestions =
                (suggestionsRef.current && suggestionsRef.current.contains(event.target)) ||
                (mobileSuggestionsRef.current && mobileSuggestionsRef.current.contains(event.target));

            if (!isClickInSearchInput && !isClickInSuggestions) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle scroll direction detection for navbar hide/show
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

    // Hide search bar when menu is opened
    useEffect(() => {
        if (isOpen) {
            setShowSearch(false);
            setShowSuggestions(false);
        }
    }, [isOpen]);

    // Generate suggestions when search term changes - independent of navbar state
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const term = searchTerm.toLowerCase().trim();
        const filteredSuggestions = searchData
            .filter(item =>
                item.title.toLowerCase().includes(term) ||
                item.content.toLowerCase().includes(term)
            )
            .slice(0, 6); // Limit to 6 suggestions

        setSuggestions(filteredSuggestions);
        setShowSuggestions(filteredSuggestions.length > 0);
        setSelectedSuggestion(-1);
    }, [searchTerm]);

    // Menu items (unchanged)
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

    // Separate function to toggle search bar without side effects
    const toggleSearchBar = () => {
        // Don't toggle search if mobile menu is open
        if (isOpen) return;

        setShowSearch(!showSearch);
        // Clear search term and suggestions when toggling via icon
        if (!showSearch) {
            setSearchTerm('');
            setShowSuggestions(false);
            setSelectedSuggestion(-1);
        }
    };

    // Social links - updated to use the clean toggle function
    const socialLinks = [
        {
            icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=61566000885423', color: 'hover:text-blue-400'
        },
        { icon: <FaTwitter />, url: 'https://x.com/mulkanoorCoop', color: 'hover:text-sky-400' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/mulkanoor_coop/?hl=en', color: 'hover:text-pink-400' },
        {
            icon: <FaSearch />,
            action: toggleSearchBar, // Use the clean toggle function instead of inline
            color: 'hover:text-green-500',
            isButton: true
        },
    ];

    const handleDropdownClick = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setShowSearch(false);
            setSearchTerm('');
            setShowSuggestions(false);
            setIsOpen(false); // Close mobile menu if open
        }
    };

    const handleSuggestionClick = (path) => {
        navigate(path);
        resetSearchState();
    };

    // Reset all search related states
    const resetSearchState = () => {
        setSearchTerm('');
        setShowSuggestions(false);
        setShowSearch(false);
        setIsOpen(false); // Close mobile menu if open
    };

    const handleKeyDown = (e) => {
        // Handle keyboard navigation for suggestions
        if (showSuggestions) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedSuggestion(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : prev
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedSuggestion(prev => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
                e.preventDefault();
                handleSuggestionClick(suggestions[selectedSuggestion].path);
            } else if (e.key === 'Escape') {
                setShowSuggestions(false);
            }
        }
    };

    // Event handlers for search input focus
    const handleSearchFocus = () => {
        if (searchTerm.trim()) {
            setShowSuggestions(true);
        }
    };

    // Modified search change handler - only show suggestions when typing
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // Only auto-show search bar when typing, not manipulating suggestions
        if (!showSearch && e.target.value.trim()) {
            setShowSearch(true);
        }
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
                            social.isButton ? (
                                <button
                                    key={index}
                                    onClick={social.action}
                                    className={`text-gray-800 text-xl ${social.color} ${isOpen ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isOpen}
                                >
                                    {social.icon}
                                </button>
                            ) : (
                                <a key={index} href={social.url} className={`text-gray-800 text-xl ${social.color}`}>
                                    {social.icon}
                                </a>
                            )
                        ))}
                    </div>
                </div>

                {/* Search bar - made always accessible */}
                <div className={`
                    w-full bg-white/90 transition-all duration-300 overflow-visible relative
                    ${showSearch ? 'max-h-20 py-3 visible' : 'max-h-0 py-0 hidden'}
                `}>
                    <form onSubmit={handleSearch} className="container mx-auto px-4 flex">
                        <div className="relative w-full">
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                onFocus={handleSearchFocus}
                                className="w-full px-4 py-2 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-yellow-400"
                            />
                            {/* Suggestions dropdown - displayed over other content */}
                            {showSuggestions && (
                                <div
                                    ref={suggestionsRef}
                                    className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg z-[100] mt-1 border border-gray-200 max-h-80 overflow-y-auto"
                                >
                                    {suggestions.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`px-4 py-2 cursor-pointer hover:bg-yellow-50 border-b border-gray-100 last:border-0 ${selectedSuggestion === index ? 'bg-yellow-100' : ''
                                                }`}
                                            onClick={() => handleSuggestionClick(item.path)}
                                            onMouseEnter={() => setSelectedSuggestion(index)}
                                        >
                                            <div className="font-medium text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-600 truncate">{item.content}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors"
                        >
                            <FaSearch />
                        </button>
                    </form>
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
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="mb-6">
                            <div className="flex relative">
                                <div className="relative w-full">
                                    <input
                                        ref={mobileSearchInputRef}
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        onKeyDown={handleKeyDown}
                                        onFocus={handleSearchFocus}
                                        className="w-full px-4 py-3 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-yellow-400"
                                    />
                                    {showSuggestions && (
                                        <div
                                            ref={mobileSuggestionsRef}
                                            className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg z-[100] mt-1 border border-gray-200 max-h-60 overflow-y-auto"
                                        >
                                            {suggestions.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-yellow-50 border-b border-gray-100 last:border-0 ${selectedSuggestion === index ? 'bg-yellow-100' : ''
                                                        }`}
                                                    onClick={() => handleSuggestionClick(item.path)}
                                                >
                                                    <div className="font-medium text-gray-900">{item.title}</div>
                                                    <div className="text-sm text-gray-600 truncate">{item.content}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-400 text-black px-4 rounded-r-lg hover:bg-yellow-500 transition-colors"
                                >
                                    <FaSearch />
                                </button>
                            </div>
                        </form>

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
                            {socialLinks.filter(link => !link.isButton).map((social, index) => (
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

            {/* Global search trigger - fixed button always visible on mobile - updated to use clean toggle */}
            <div className="md:hidden fixed right-4 bottom-4 z-50">
                <button
                    onClick={toggleSearchBar}
                    className={`bg-yellow-400 text-black p-3 rounded-full shadow-lg transition-all ${isOpen ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500'
                        }`}
                    disabled={isOpen}
                >
                    <FaSearch size={18} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;