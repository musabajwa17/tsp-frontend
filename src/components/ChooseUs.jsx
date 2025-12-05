import React from 'react';
import SectionTitle from './ui/SectionTitle';
import ProgressBar from './ui/ProgressBar';
// --- Image Data ---
const IMAGES = {
    // Large main image (Resort view)
    whyChoose: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop",
    // Small overlay image (Patio/Bar area)
    whyChooseSmall: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop",
};


// --- Main Section Component ---

const WhyChooseSection = () => (
    <section className="py-24 bg-[#ffffff] font-sans">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content (Skills and Text) - Order 2 on mobile, 1 on desktop */}
            <div className="order-1 lg:order-1">
                {/* Section Title component */}
                <SectionTitle tag="Our Skills" title="Why Choose for us?" />

                {/* Description text */}
                <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                </p>

                {/* Progress Bars */}
                <div className="space-y-2 mr-20">
                    <ProgressBar label="Services" percentage={95} />
                    <ProgressBar label="Chef Master" percentage={85} />
                    <ProgressBar label="Design" percentage={92} />
                    <ProgressBar label="It Solution" percentage={98} />
                </div>
            </div>
            <div className="order-2 lg:order-2 relative h-[500px] lg:h-[550px] flex items-center justify-center overflow-visible">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full hidden lg:block -z-10 transform translate-x-1/4 -translate-y-1/4" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full">
                    {/* Main Image */}
                    <img
                        src={IMAGES.whyChoose}
                        alt="Resort View"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] rounded-3xl"
                        loading="lazy"
                        // Fallback in case image fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1000x500/047857/ffffff?text=Resort+View" }}
                    />
                </div>
                <div className="absolute bottom-6 left-4 md:bottom-10 md:-left-12 w-40 h-40 sm:w-48 sm:h-48 border-4 border-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 z-10">
                    <img
                        src={IMAGES.whyChooseSmall}
                        alt="Detail"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        // Fallback in case image fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/047857/ffffff?text=Detail" }}
                    />
                </div>
            </div>

        </div>
    </section>
);

export default WhyChooseSection;    