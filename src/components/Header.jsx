import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

// The main component is exported as App for single-file React structure
export default function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        { name: 'Home', hasDropdown: true, link: '#' },
        { name: 'Pages', hasDropdown: true, link: '#' },
        { name: 'Rooms & Suites', hasDropdown: true, link: '#' },
        { name: 'Services', hasDropdown: true, link: '#' },
        { name: 'Blog', hasDropdown: true, link: '#' },
        { name: 'Contact', hasDropdown: false, link: '#' }
    ];

    // Function to handle the click and toggle the desktop dropdown
    const handleDropdownClick = (e, index) => {
        // Prevent the link from navigating if it has a dropdown
        if (navItems[index].hasDropdown) {
            e.preventDefault();
            setOpenDropdown(openDropdown === index ? null : index);
        }
    };

    // Tailwind classes:
    // Dark Charcoal Background: bg-neutral-800
    // Gold/Khaki Button: bg-amber-400
    // Teal Accent: text-emerald-500

    return (
        <header className="relative z-50 shadow-xl font-sans">
            <div className="flex items-stretch bg-neutral-800 h-20">

                {/* 1. Logo Section - White Background with Diagonal Cut */}
                <div
                    className="bg-white px-8 py-4 flex items-center justify-center min-w-[280px] h-full"
                    style={{
                        // Maintain the diagonal cut style
                        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                    }}
                >
                    <a href="#" className="flex items-center gap-2">
                        {/* Custom Logo Icon mimicking the image's stylized house/star */}
                        <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5L8 20V45H42V20L25 5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                            <path d="M21 30V45H29V30H21Z" fill="currentColor" />
                            <path d="M25 6L25 1L30 6H20L25 6Z" fill="currentColor" />
                        </svg>
                        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Fixyland</span>
                    </a>
                </div>

                {/* 2. Navigation and Actions Section - Dark Background */}
                <div className="flex-1 flex items-center justify-between px-6 lg:px-1">

                    {/* Desktop Navigation - Click-based Dropdowns */}
                    <nav className="hidden lg:flex items-center mx-auto space-x-7">
                        {navItems.map((item, index) => (
                            // The wrapper div is just for relative positioning
                            <div
                                key={index}
                                className="relative h-full flex items-center"
                            >
                                <a
                                    href={item.link}
                                    onClick={(e) => handleDropdownClick(e, index)} // Use onClick for toggling dropdown
                                    className="flex items-center gap-1 text-white hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wider h-full leading-none cursor-pointer"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 ml-1 text-gray-400 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : 'rotate-0'}`} />}
                                </a>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && openDropdown === index && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in-down">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors">
                                            Option 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors">
                                            Option 2
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors">
                                            Option 3
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4 h-full">

                        {/* Search Icon Button - Dark circular background, matching image */}
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/80 transition-colors">
                            <Search className="w-5 h-5 text-white" />
                        </button>

                        {/* Utility Menu Button - Dark circular background, matching image */}
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/80 transition-colors">
                            <Menu className="w-5 h-5 text-white" />
                        </button>

                        {/* Book Your Stay Button - Gold/Khaki color, matching image */}
                        <a href="#" className="bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold px-6 py-3 rounded-md transition-colors flex items-center gap-2 text-sm whitespace-nowrap h-full max-h-[56px]">
                            Book Your Stay
                            {/* Small arrow icon */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button Section */}
                    <div className="lg:hidden flex items-center gap-3 ml-auto h-full">
                        {/* Mobile Search Button - Styled like desktop button */}
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/80 transition-colors">
                            <Search className="w-5 h-5 text-white" />
                        </button>

                        {/* Mobile Toggle (Hamburger/X) Button - Styled like desktop utility button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-700/80 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Already click-based) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-neutral-800 border-t border-neutral-700 absolute w-full shadow-2xl animate-fade-in">
                    <nav className="px-4 py-4 space-y-1">
                        {navItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <button
                                    onClick={() => item.hasDropdown ? setOpenDropdown(openDropdown === index ? null : index) : setIsMobileMenuOpen(false)}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-neutral-700 rounded-lg font-medium flex items-center justify-between transition-colors"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === index ? 'rotate-180' : 'rotate-0'}`} />}
                                </button>
                                {/* Simple nested mobile dropdown placeholder */}
                                {item.hasDropdown && openDropdown === index && (
                                    <div className="pl-8 py-1 space-y-1 bg-neutral-700/50 rounded-b-lg">
                                        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white text-sm">Sub-Option 1</a>
                                        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white text-sm">Sub-Option 2</a>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        <div className="pt-4">
                            {/* Book Your Stay Button - Styled like desktop button */}
                            <a href="#" className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm">
                                Book Your Stay
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            )}

            {/* Simple CSS for the dropdown animation */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                    transform: translateY(0);
                }
            `}</style>

        </header>
    );
}