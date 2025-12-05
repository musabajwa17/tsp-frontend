import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

export default function FixylandHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        { name: 'Home', hasDropdown: true },
        { name: 'Pages', hasDropdown: true },
        { name: 'Rooms & Suites', hasDropdown: true },
        { name: 'Services', hasDropdown: true },
        { name: 'Blog', hasDropdown: true },
        { name: 'Contact', hasDropdown: false }
    ];

    return (
        <header className="relative z-50">
            <div className="flex items-center">
                {/* Logo Section - White Background with Curved Edge */}
                <div className="bg-white pl-8 pr-16 py-6 relative">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="8" fill="#10B981" opacity="0.1" />
                                <path d="M12 28V16L16 12L20 16V20L24 16L28 20V28" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="16" cy="22" r="1.5" fill="#10B981" />
                                <circle cx="24" cy="24" r="1.5" fill="#10B981" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Fixyland</span>
                    </div>
                    {/* Curved edge */}
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-white" style={{
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                    }}></div>
                </div>

                {/* Navigation Section - Dark Background */}
                <div className="flex-1 bg-gray-900 flex items-center justify-between px-8 py-6">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8 flex-1">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button className="flex items-center gap-1 text-white hover:text-yellow-400 font-medium transition-colors">
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </button>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && openDropdown === index && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Option 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Option 2
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Option 3
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                            <Search className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                            <Menu className="w-5 h-5 text-white" />
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                            Book Your Stay
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3 ml-auto">
                        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                            <Search className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-gray-900 border-t border-gray-800">
                    <nav className="px-4 py-4 space-y-1">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg font-medium flex items-center justify-between"
                            >
                                {item.name}
                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </button>
                        ))}
                        <div className="pt-4">
                            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Book Your Stay
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}