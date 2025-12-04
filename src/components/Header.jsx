import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

// Header Component
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-teal-600 text-white text-xs py-2.5">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <span>Mon-Fri: 09:00 AM - 09:00 PM</span>
                        <span className="flex items-center gap-1.5">
                            <Mail size={13} />
                            info@example.com
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Phone size={13} />
                        +123 456 7890
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-teal-600 rounded-sm flex items-center justify-center">
                            <Home className="text-white" size={20} />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">Freyland</span>
                    </div>

                    <nav className="hidden lg:flex gap-8 text-gray-700 font-medium text-sm">
                        <a href="#" className="hover:text-teal-600 transition-colors">Home</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Pages</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Rooms & Suites</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Services</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Blog</a>
                        <a href="#" className="hover:text-teal-600 transition-colors">Contact</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors">
                            <Search size={20} className="text-gray-600" />
                        </button>
                        <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors">
                            <User size={20} className="text-gray-600" />
                        </button>
                        <button
                            className="p-2.5 hover:bg-gray-100 rounded-full lg:hidden transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu size={20} className="text-gray-600" />
                        </button>
                        <button className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t">
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Home</a>
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Pages</a>
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Rooms & Suites</a>
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Services</a>
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Blog</a>
                            <a href="#" className="text-gray-700 hover:text-teal-600 py-2">Contact</a>
                            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2.5 rounded-md font-semibold text-sm mt-2">
                                Book Now
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;  