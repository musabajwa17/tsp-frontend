import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

// 1. Define colors
const PRIMARY_GREEN = "bg-[#2da77a]";
const ACCENT_YELLOW = "bg-[#eeca56]";

// 2. Custom SVG Icons (X and Behance) - Kept for visual accuracy
const XLogo = ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const BehanceLogo = ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 7h-7v2h7V7Zm-8.6 3.5c-1 0-1.7.2-2.3.6-.6.4-.9 1.1-.9 2.1h6.2c0-1.7-1.1-2.7-3-2.7Zm.1 6.8c1.3 0 2.2-.6 2.6-1.6l1.6.8c-.8 1.9-2.3 2.9-4.3 2.9-1.5 0-2.8-.5-3.6-1.4-.8-1-1.3-2.3-1.3-3.9s.4-2.9 1.3-3.8c.8-1 2-1.4 3.5-1.4 1.5 0 2.7.5 3.5 1.4.8.9 1.2 2.2 1.2 3.8v.5h-8.2c.1 1.2.4 2 1.1 2.5.6.4 1.4.6 2.6.6Zm-11.2-8.9h4.1c1.2 0 2.1.3 2.7.8.6.6.9 1.4.9 2.4 0 1.2-.5 2.1-1.3 2.6.9.4 1.6 1.3 1.6 2.7 0 11-.4 2.1-1.1 2.7-.8.7-1.8 1-3.1 1H2.3V8.4Zm3.9 4.3c.7 0 1.2-.1 1.5-.4.4-.3.5-.7.5-1.3 0-1.1-.8-1.7-2.3-1.7H4.9v3.4h1.3Zm.4 5.9c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.5 0-1.3-.8-2-2.4-2H4.9v4h1.7Z" />
    </svg>
);

// 3. Rounded Bullet Component
const RoundedBullet = () => (
    // Used rounded-full to make it a circle
    <span className={`${ACCENT_YELLOW} w-1.5 h-1.5 rounded-full inline-block mx-2`} />
);

const TopBar = () => (
    // Ensures single-line row and allows horizontal scroll on small screens
    <div className={`${PRIMARY_GREEN} text-white font-medium text-xs md:text-[13px] py-3 overflow-x-auto`}>

        {/* Main Flex Container: justify-between pushes left content to left and right content to right */}
        <div className="container mx-auto px-4 flex md:flex-row justify-between items-center w-full">

            {/* LEFT SIDE: Contact Text Fields (with dots) - Aligned to left */}
            <div className="mx-8 flex flex-wrap justify-center md:justify-start items-center whitespace-nowrap gap-1 mb-2 md:mb-0">
                {/* 1. Starting Orange Dot */}
                <span className={`${ACCENT_YELLOW} w-1.5 h-1.5 rounded-full inline-block mr-2`} />

                {/* 2. Text 1, Dot, Text 2, Dot, Text 3 */}
                <span>7631 Sabina Park, 115 Devon Isle, USA</span>
                <RoundedBullet />
                <a href="mailto:info@domain.com" className="hover:underline">info@domain.com</a>
                <RoundedBullet />
                <a href="tel:+19876543210" className="hover:underline">(+1) 987 654 3210</a>
            </div>

            {/* RIGHT SIDE: Social Icons - Aligned to right */}
            <div className="mx-5 flex flex-row items-center gap-4">
                <Facebook size={16} className="cursor-pointer hover:text-gray-200 transition-colors" />
                <XLogo size={14} className="cursor-pointer hover:text-gray-200 transition-colors" />
                <Instagram size={16} className="cursor-pointer hover:text-gray-200 transition-colors" />
                <BehanceLogo size={18} className="cursor-pointer hover:text-gray-200 transition-colors" />
            </div>

        </div>
    </div>
);

export default TopBar;