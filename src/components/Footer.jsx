import React from 'react';
import {
    Facebook, Twitter, Instagram, Linkedin, Check, Utensils, Send
} from 'lucide-react';

// Custom color variables for consistency, based on your design
const ACCENT_COLOR_LOGO = 'text-[#dcb156]'; // Your gold/yellow color
const ACCENT_COLOR_HOVER = 'hover:text-[#2da77a]'; // Your green/teal hover color

// A simple image pattern URL to match the subtle background grid in the original image.
const BG_PATTERN_URL = 'https://placehold.co/100x100/111/111?text=.' // Placeholder for a dark, subtle pattern

/**
 * A highly responsive and stylized footer component.
 * Grid spacing has been precisely adjusted to match the visual clustering 
 * and separation of the original image layout.
 * * MODIFICATION: Added 'text-center' and 'items-center' to specific elements 
 * in the mobile view (default, before the md breakpoint) to ensure centering.
 */
const Footer = React.memo(() => (
    <footer
        className="bg-[#111] text-gray-400 pt-20 pb-8 text-sm font-inter relative"
        style={{ backgroundImage: `url(${BG_PATTERN_URL})`, backgroundRepeat: 'repeat', backgroundOpacity: 0.1 }}
    >
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Main Footer Grid Section */}
            {/* On mobile (default), we don't need the complex grid, so content will stack. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-cols-[1.5fr_0.5fr_0.8fr_1.8fr] gap-12 lg:gap-20 mb-16">

                {/* 1. Brand and Social Links */}
                {/* Added text-center, modified ms- to mx-auto w-fit, and centered social icons */}
                <div className="flex flex-col text-center md:text-left mx-auto md:mx-0 w-full md:w-auto ms-3 md:ms-5 lg:ms-10">
                    {/* Logo/Brand Name: Centered on mobile */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-2xl font-extrabold text-white mb-6">
                        <div className="border border-white p-1 rounded-md transition-colors">
                            <Utensils size={20} className={ACCENT_COLOR_LOGO} />
                        </div>
                        <span>Fixyland</span>
                    </div>

                    {/* Description: Text-centered on mobile */}
                    <p className="mb-6 leading-relaxed">
                        Nam libero tempore cum soluta nobis eseligendi optio cumque nihille impedit quo minus maxime placeat facere.
                    </p>

                    {/* Social Icons: Centered on mobile */}
                    <div className="flex gap-3 mt-2 justify-center md:justify-start">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#"
                                className="bg-[#222] p-2 rounded-md transition-colors hover:bg-[#2da77a] hover:text-white"
                                aria-label={`Link to ${Icon.displayName || 'Social Media'}`}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Explore Links - Centered on mobile */}
                <div className='text-center md:text-left'>
                    <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Explore</h4>
                    {/* List items will naturally center within a text-center parent on mobile */}
                    <ul className="space-y-3">
                        {["About Hotel", "Pricing", "Hotel Staff", "Latest News", "Contact Us"].map((link, i) => (
                            <li key={i}>
                                <a href="#" className={`transition-colors ${ACCENT_COLOR_HOVER}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Contact Information - Centered on mobile */}
                <div className='text-center md:text-left'>
                    <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-4">
                        {/* Adjusted for line break visual spacing */}
                        <li className="mb-4">7631 Sabina Park, 115 Devon Isle, <br /> Louisiana, USA</li>
                        <li className="text-white text-xl font-semibold mt-2">
                            <a href="tel:+19876543210" className={ACCENT_COLOR_HOVER}>(+1) 987 654 3210</a>
                        </li>
                        <li>
                            <a href="mailto:info@domain.com" className={ACCENT_COLOR_HOVER}>info@domain.com</a>
                        </li>
                    </ul>
                </div>

                {/* 4. Newsletter Subscription - Centered on mobile */}
                {/* Removed horizontal centering classes since the padding and width should be full on mobile */}
                <div className=''>
                    {/* Dark Box Content is visually distinct, matching the image */}
                    <div className="bg-[#1e1e1e] p-8 rounded-xl shadow-2xl">
                        {/* Heading: Centered on mobile */}
                        <h4 className="text-white text-2xl font-extrabold mb-8 uppercase tracking-wider text-center md:text-left">Newsletter</h4>

                        {/* Email Input Field: Input itself is full width, but surrounding text doesn't need centering */}
                        <div className="relative mb-6">
                            <input
                                type="email"
                                placeholder="Ex. info@domain.com"
                                className="w-full bg-transparent border-b border-gray-700 pb-3 pt-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#2da77a] transition-colors pr-6"
                                aria-label="Email address for newsletter"
                            />
                            <Send size={18} className="absolute right-0 top-3 text-gray-500 pointer-events-none" />
                        </div>

                        {/* Terms Checkbox/Agreement: Centered on mobile */}
                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-6 justify-center md:justify-start">
                            {/* Adjusted size for checkbox to match image */}
                            <div className="w-4 h-4 rounded-full bg-gray-700/50 flex items-center justify-center border-2 border-gray-600 transition-all hover:bg-[#2da77a]/70 cursor-pointer">
                                <Check size={10} className="text-white" />
                            </div>
                            I agree to all terms and policies
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright and Policy Links - Centered on mobile (default) */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-xs text-center md:text-left">
                {/* Copyright: Centering on mobile happens via parent text-center and justify-center */}
                <div className=' ms-3 md:ms-5 lg:ms-10'>&copy; Copyright 2025 Fixyland. All Rights Reserved.</div>

                {/* Policy Links: Centering on mobile (default: flex-col, items-center) */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
));

export default Footer;