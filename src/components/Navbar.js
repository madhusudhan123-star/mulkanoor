import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo1.jpg';
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
            title: 'Our Services',
            path: '#pillars',
            submenu: [
                { title: 'Credit Facility', path: '/pillars/winning' },
                { title: 'Agri Inputs', path: '/pillars/agri' },
                { title: 'Agri Extension Services', path: '/pillars/extension' },
                { title: 'Agriproduce Procurement', path: '/product' },
                { title: 'Processing Facilities', path: '/processing' },
                { title: 'Value Added Products', path: '/marketing' },
                { title: 'Consumer Services', path: '/consumer' },
                { title: 'Welfare Activities', path: '/pillars/Welfare' },


            ]
        },
        {
            title: 'Products',
            path: '#services',
            submenu: [
                { title: 'Paddy Seed', path: '/product/paddy' },
                { title: 'Rice', path: '/product/rice' },
                { title: 'Cotton', path: '/product/cotton' },
            ]
        },
       
        {
            title: 'Farmers Voice',
            path: '/farmer'
        },
        {
            title: 'Awards & Accolades',
            path: '/awards'
        },
        {
            title: 'Our Winning Formula',
            path: '/winning'
        },
        {
            title: 'Media Center',
            path: '#media',
            submenu: [
                { title: 'Press coverage', path: '/media/paper' },
                { title: 'Articles post', path: '/media/articles' },
                { title: 'Gallery', path: '/media/gallery' },
            ]
        },
        {
            title: 'Download',
            path: "/report",
            submenu: [
                { title: 'Annual report', path: '/report' },
                { title: 'PPT', path: 'https://docs.google.com/presentation/d/1r6JbbuliOwFaanVo5PGkBltpog3eI9n8/edit?usp=sharing&ouid=105287510170110408901&rtpof=true&sd=true' },
                { title: 'Society Videos', path: '/media/videos' },
            ]
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
            <nav className={`fixed w-full top-0 left-0 backdrop-blur-sm bg-green-600 border-b border-white/20 shadow-lg z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
                {/* Top section with logo, title and search */}
                <div className="flex justify-between items-center px-3 md:px-8 ">
                    {/* Left - Logo */}
                    <div className="flex items-center">
                        <a href='/'>
                            <img src={logo} alt="Logo" className="h-10 md:h-14 rounded-full w-auto" />
                        </a>
                    </div>                    {/* Center - Title */}
                    <div className="text-center flex-1 mx-2">
                        <h1 className="text-base sm:text-xl md:text-4xl font-bold text-white leading-tight">
                            <span className="block md:inline">Mulkanoor Cooperative</span>
                            <span className="block md:inline md:ml-1">Rural Credit & Marketing Society</span>
                        </h1>
                    </div>

                    {/* Right - Search and Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Social Icons - Hidden on mobile */}
                        <div className="hidden md:flex gap-4">
                            {socialLinks.map((social, index) => (
                                social.isButton ? (
                                    <button
                                        key={index}
                                        onClick={social.action}
                                        className={`text-white text-xl ${social.color} ${isOpen ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={isOpen}
                                    >
                                        {social.icon}
                                    </button>
                                ) : (
                                    <a key={index} href={social.url} className={`text-white text-xl ${social.color}`}>
                                        {social.icon}
                                    </a>
                                )
                            ))}
                        </div>
                        
                        {/* Menu Button - Only visible on mobile */}
                        <button className="text-base md:hidden text-white flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                            <span className='p-2 hover:bg-green-700 bg-green-700/70 text-base transition-all duration-300 
                                hover:scale-110 rounded-full backdrop-blur-lg flex items-center justify-center'>
                                {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Desktop Menu - Horizontal below title */}
                <div className="hidden md:block bg-green-700/80 backdrop-blur-sm border-t border-green-500/30">
                    <div className="container mx-auto px-8">
                        <div className="flex items-center justify-center">
                            <nav className="flex space-x-1">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="relative group">
                                        {item.submenu ? (
                                            <div className="relative">
                                                <button className="flex items-center gap-1 px-4 py-3 text-white hover:bg-green-600/50 rounded-lg transition-all duration-200 group">
                                                    <span className="text-sm font-medium">{item.title}</span>
                                                    <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
                                                </button>
                                                
                                                {/* Dropdown Menu */}
                                                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                                                    <div className="py-2">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.path}
                                                                className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors text-sm"
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
                                                className="block px-4 py-3 text-white hover:bg-green-600/50 rounded-lg transition-all duration-200 text-sm font-medium"
                                            >
                                                {item.title}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Search bar */}
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

            {/* Mobile menu - only for mobile */}
            <div className={`
                md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]
                transition-opacity duration-300 ease-in-out
                ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
                {/* Menu Container - modified to slide from right and cover half screen */}
                <div className={`
                    fixed top-0 right-0 bottom-0 w-full max-w-xs
                    bg-white shadow-lg overflow-y-auto z-[70]
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="flex flex-col h-full">
                        {/* Menu Header with close button */}
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="font-bold text-green-800">Menu</h2>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-green-800 hover:text-green-600"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>
                        
                        <div className="p-4 flex-1 overflow-y-auto">
                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="mb-4">
                                <div className="flex relative">
                                    <input
                                        ref={mobileSearchInputRef}
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        onKeyDown={handleKeyDown}
                                        onFocus={handleSearchFocus}
                                        className="w-full px-3 py-2 rounded-l-md border border-r-0 border-gray-300 focus:outline-none focus:border-green-500"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-3 rounded-r-md hover:bg-green-700 transition-colors"
                                    >
                                        <FaSearch />
                                    </button>
                                </div>
                                {showSuggestions && (
                                    <div
                                        ref={mobileSuggestionsRef}
                                        className="absolute left-0 right-0 bg-white rounded-md shadow-md z-[100] mt-1 border border-gray-200 max-h-72 overflow-y-auto"
                                    >
                                        {suggestions.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`px-3 py-2 cursor-pointer hover:bg-green-50 border-b border-gray-100 last:border-0 ${selectedSuggestion === index ? 'bg-green-100' : ''}`}
                                                onClick={() => handleSuggestionClick(item.path)}
                                            >
                                                <div className="font-medium text-gray-900">{item.title}</div>
                                                <div className="text-sm text-gray-600 truncate">{item.content}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </form>

                            {/* Simplified Menu Items */}
                            <nav className="space-y-1">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-100">
                                        {item.submenu ? (
                                            <>
                                                <button
                                                    className="w-full flex items-center justify-between py-2 px-1 text-green-800"
                                                    onClick={() => handleDropdownClick(index)}
                                                >
                                                    <span>{item.title}</span>
                                                    <FaChevronDown className={`transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                                </button>

                                                <div className={`overflow-hidden transition-all duration-200 ${activeDropdown === index ? 'max-h-72' : 'max-h-0'}`}>
                                                    <div className="ml-3 border-l border-gray-100 pl-2">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.path}
                                                                className="block py-1.5 text-sm text-green-700 hover:text-green-900"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <a
                                                href={item.path}
                                                className="block py-2 px-1 text-green-800 hover:text-green-600"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.title}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer - Optional */}
                        <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-500">
                            © {new Date().getFullYear()} Mulkanoor Cooperative
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