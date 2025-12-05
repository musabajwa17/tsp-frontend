const ClientLogo = ({ children }) => (
    <div className="opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        {children}
    </div>
);

const ClientsSection = () => (
    <section className="py-16 md:py-20 bg-[#e9f0ec]">
        <div className="container mx-auto px-4 text-center">
            <span className="bg-white text-[#2da77a] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm mb-4 inline-block shadow-sm">
                Our Clients
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16 text-gray-800">
                We Have More Then 150+ <br /> Global Clients
            </h2>

            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
                {/* Row 1: 6 logos */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
                    {/* Logo 1: Sailboat with waves */}
                    <ClientLogo>
                        <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20 fill-current text-gray-500">
                            <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M25,50 Q20,45 25,40 Q30,35 35,40 Q40,45 35,50 Z" />
                            <path d="M45,50 Q50,45 55,50 Q60,55 55,60 Q50,65 45,60 Z" />
                            <polygon points="40,25 40,50 50,45 50,30" opacity="0.8" />
                            <line x1="40" y1="25" x2="40" y2="50" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </ClientLogo>

                    {/* Logo 2: Palm tree with sun/mountain */}
                    <ClientLogo>
                        <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20 fill-current text-gray-500">
                            <ellipse cx="40" cy="55" rx="35" ry="8" opacity="0.3" />
                            <path d="M30,40 Q35,30 40,35 Q45,30 50,40" />
                            <ellipse cx="35" cy="25" rx="8" ry="4" transform="rotate(-30 35 25)" />
                            <ellipse cx="45" cy="25" rx="8" ry="4" transform="rotate(30 45 25)" />
                            <ellipse cx="40" cy="20" rx="8" ry="4" />
                            <rect x="38" y="35" width="4" height="20" />
                        </svg>
                    </ClientLogo>

                    {/* Logo 3: Palm trees */}
                    <ClientLogo>
                        <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20 fill-current text-gray-500">
                            <ellipse cx="30" cy="20" rx="6" ry="3" transform="rotate(-40 30 20)" />
                            <ellipse cx="25" cy="25" rx="6" ry="3" transform="rotate(-20 25 25)" />
                            <ellipse cx="35" cy="25" rx="6" ry="3" transform="rotate(20 35 25)" />
                            <rect x="28" y="25" width="4" height="30" />

                            <ellipse cx="55" cy="25" rx="5" ry="2.5" transform="rotate(-40 55 25)" />
                            <ellipse cx="50" cy="30" rx="5" ry="2.5" transform="rotate(-20 50 30)" />
                            <ellipse cx="60" cy="30" rx="5" ry="2.5" transform="rotate(20 60 30)" />
                            <rect x="53" y="30" width="4" height="25" />

                            <ellipse cx="40" cy="60" rx="30" ry="5" opacity="0.3" />
                        </svg>
                    </ClientLogo>

                    {/* Logo 4: House with palm tree in circle */}
                    <ClientLogo>
                        <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20 fill-current text-gray-500">
                            <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2.5" fill="none" />
                            <polygon points="35,38 45,38 45,50 35,50" />
                            <polygon points="30,38 40,30 50,38" fill="none" stroke="currentColor" strokeWidth="2" />
                            <rect x="38" y="43" width="4" height="7" fill="#e9f0ec" />

                            <ellipse cx="55" cy="32" rx="5" ry="2" transform="rotate(-35 55 32)" />
                            <ellipse cx="52" cy="35" rx="5" ry="2" transform="rotate(-15 52 35)" />
                            <ellipse cx="58" cy="35" rx="5" ry="2" transform="rotate(15 58 35)" />
                            <rect x="54" y="35" width="2" height="15" />
                        </svg>
                    </ClientLogo>

                    {/* Logo 5: Beach hut with palm trees */}
                    <ClientLogo>
                        <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20 fill-current text-gray-500">
                            <ellipse cx="40" cy="60" rx="35" ry="6" opacity="0.3" />

                            <ellipse cx="25" cy="28" rx="5" ry="2.5" transform="rotate(-40 25 28)" />
                            <ellipse cx="22" cy="32" rx="5" ry="2.5" transform="rotate(-20 22 32)" />
                            <ellipse cx="28" cy="32" rx="5" ry="2.5" transform="rotate(20 28 32)" />
                            <rect x="23" y="32" width="2.5" height="20" />

                            <path d="M35,45 L32,52 L48,52 L45,45 Z" />
                            <ellipse cx="40" cy="45" rx="10" ry="5" />

                            <ellipse cx="55" cy="28" rx="5" ry="2.5" transform="rotate(40 55 28)" />
                            <ellipse cx="52" cy="32" rx="5" ry="2.5" transform="rotate(20 52 32)" />
                            <ellipse cx="58" cy="32" rx="5" ry="2.5" transform="rotate(-20 58 32)" />
                            <rect x="54.5" y="32" width="2.5" height="20" />
                        </svg>
                    </ClientLogo>

                    {/* Logo 6: Airplane with trail */}
                    <ClientLogo>
                        <svg viewBox="0 0 100 60" className="h-14 w-20 md:h-16 md:w-24 fill-current text-gray-500">
                            <circle cx="75" cy="30" r="18" opacity="0.2" />
                            <path d="M20,35 Q30,30 40,35" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
                            <path d="M25,40 Q35,35 45,40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />

                            <path d="M65,30 L75,28 L78,30 L75,32 L65,30 Z" />
                            <path d="M75,28 L80,25 L75,32 Z" opacity="0.7" />
                            <ellipse cx="76" cy="30" rx="2" ry="1.5" fill="#e9f0ec" />
                        </svg>
                    </ClientLogo>
                </div>
            </div>
        </div>
    </section>
);

export default ClientsSection;