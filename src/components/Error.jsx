import React from 'react';

// The App component serves as the complete 404 page.
// The primary goal is to replicate the visual style of the provided image using Tailwind CSS and SVG.
const App = () => {
    // Custom colors derived from the image analysis
    const colors = {
        primaryBg: '#F8FAF9', // Very light mint background
        mainGreen: '#2E9267', // Button background, darkest trees
        secondaryGreen: '#4F9E77', // Medium trees
        tertiaryGreen: '#D4E7E4', // Farthest hills/clouds
        textDark: '#3A3F44', // Dark gray text and 404 number
    };

    // Inline SVG to recreate the stylized mountain and forest illustration
    const Illustration = () => (
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg mb-10 h-64 sm:h-80">
            <svg viewBox="0 0 800 350" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 1. Cloud/Sky Background Shape (Farthest Layer) */}
                <path
                    d="M10 250C10 250 150 100 400 100C650 100 790 250 790 250L790 350H10L10 250Z"
                    fill={colors.tertiaryGreen}
                />

                {/* 2. Stylized Mountains/Hills Outline (Middle Layer) */}
                <path
                    d="M0 350L150 200L250 250L400 180L600 250L800 150V350H0Z"
                    fill="none"
                    stroke={colors.secondaryGreen}
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    opacity="0.7"
                />

                {/* 3. Pine Trees and Bushes (Foreground) */}
                {/* Darker Green Trees */}
                {[
                    { x: 50, h: 80 }, { x: 180, h: 100 }, { x: 300, h: 90 },
                    { x: 550, h: 110 }, { x: 700, h: 70 }
                ].map((tree, index) => (
                    <polygon
                        key={`dark-${index}`}
                        points={`${tree.x},350 ${tree.x + 20},${350 - tree.h} ${tree.x - 20},${350 - tree.h} ${tree.x},350`}
                        fill={colors.mainGreen}
                        transform={`translate(0, -${Math.random() * 10})`} // Slight vertical variation
                    />
                ))}

                {/* Secondary Green Trees/Bushes */}
                {[
                    { x: 120, h: 60 }, { x: 250, h: 75 }, { x: 450, h: 85 },
                    { x: 650, h: 60 }, { x: 750, h: 90 }
                ].map((tree, index) => (
                    <polygon
                        key={`secondary-${index}`}
                        points={`${tree.x},350 ${tree.x + 20},${350 - tree.h} ${tree.x - 20},${350 - tree.h} ${tree.x},350`}
                        fill={colors.secondaryGreen}
                        transform={`translate(0, -${Math.random() * 5})`}
                    />
                ))}

                {/* Small Birds/Details */}
                <path d="M550 150 Q560 140 570 150 M580 160 Q590 150 600 160" stroke="#3B7B61" strokeWidth="2" fill="none" />
                <path d="M620 120 Q630 110 640 120 M650 130 Q660 120 670 130" stroke="#3B7B61" strokeWidth="2" fill="none" opacity="0.8" />

            </svg>

            {/* Overlaid "404" Text (Crisp and Centered) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className={`text-[120px] sm:text-[150px] md:text-[180px] lg:text-[200px] font-extrabold leading-none select-none`} style={{ color: colors.textDark, opacity: 0.9 }}>
                    404
                </p>
            </div>
        </div>
    );

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundColor: colors.primaryBg }}
        >
            <div className="text-center max-w-xl w-full">

                {/* 1. Illustration Area */}
                <Illustration />

                {/* 2. Heading */}
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: colors.textDark }}>
                    Ohh! Page Not Found
                </h1>

                {/* 3. Descriptive Text */}
                <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-sm mx-auto font-normal">
                    We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
                </p>

                {/* 4. Button */}
                <a
                    href="/" // Replace with actual home link logic if needed
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.03] text-white"
                    style={{ backgroundColor: colors.mainGreen, boxShadow: `0 4px 6px -1px ${colors.mainGreen}60` }}
                >
                    Back To Home
                    {/* Arrow Icon */}
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default App;