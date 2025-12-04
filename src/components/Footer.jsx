// Footer
import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 sm:pt-20 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 bg-teal-600 rounded-sm flex items-center justify-center">
                                <Home className="text-white" size={20} />
                            </div>
                            <span className="text-2xl font-bold text-white">Freyland</span>
                        </div>
                        <p className="text-sm mb-6 leading-relaxed text-gray-400">
                            Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-teal-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-base">EXPLORE</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block">About Hotel</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block">Our Gallery</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block">Rooms & Suites</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block">News & Blog</a></li>
                            <li><a href="#" className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-base">CONTACT</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-teal-600" />
                                <span className="leading-relaxed">1247 Rowe Street, No Suburban, LA 9826, United States</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0 text-teal-600" />
                                <span>+01 (707) 563-0126</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0 text-teal-600" />
                                <span>info@example.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-base">NEWSLETTER</h3>
                        <p className="text-sm mb-5 text-gray-400">Sign up to receive the best offers</p>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-4 py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-600 text-sm text-white placeholder-gray-500"
                            />
                            <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-md text-white transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <label className="flex items-start gap-2.5 text-xs cursor-pointer">
                            <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-gray-800 text-teal-600 focus:ring-teal-600" />
                            <span className="text-gray-400">I agree to all terms and policies</span>
                        </label>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                    <p className="text-gray-400 text-center sm:text-left">© Copyright 2024 Freyland. All Right Reserved.</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <a href="#" className="hover:text-teal-600 transition-colors text-center">Terms and Conditions</a>
                        <a href="#" className="hover:text-teal-600 transition-colors text-center">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  