import React from 'react';
import { Users, Bed, Bath, ArrowRight } from 'lucide-react'; // Using lucide-react for icons

// Data structure for the rooms
const roomData = [
    {
        id: 1,
        title: 'Deluxe Rooms',
        price: '$800 / Night',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        imageSrc: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg',
        stats: [
            { icon: Users, text: '2 Guests' },
            { icon: Bed, text: '2 Beds' },
            { icon: Bath, text: '1 Bath' },
        ],
    },
    {
        id: 2,
        title: 'Junior Rooms',
        price: '$400 / Night',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        imageSrc: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg',
        stats: [
            { icon: Users, text: '2 Guests' },
            { icon: Bed, text: '2 Beds' },
            { icon: Bath, text: '1 Bath' },
        ],
    },
    {
        id: 3,
        title: 'Family Rooms',
        price: '$600 / Night',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        imageSrc: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
        stats: [
            { icon: Users, text: '2 Guests' },
            { icon: Bed, text: '2 Beds' },
            { icon: Bath, text: '1 Bath' },
        ],
    },
];

/**
 * Individual Room Card Component
 * @param {object} props - Room data properties
 */
const RoomCard = ({ title, price, description, imageSrc, stats }) => {
    return (
        // The main card container, optimized for shadows and responsiveness
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-emerald-600/50">

            {/* Image Container with Price Tag */}
            <div className="relative h-64">
                {/* Placeholder Image */}
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                    // Fallback in case image fails to load (essential practice)
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/4c4c4c/white?text=Room+Image"; }}
                />

                {/* Price Tag Pill - absolute positioning to match the design */}
                <div className="absolute top-4 left-4 bg-[#218f6b] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    {price}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8">
                {/* Room Title - Large and prominent */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

                {/* Stats Row - Flex layout for icon and text pairs */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-gray-500">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center text-sm font-medium">
                            <stat.icon className="w-4 h-4 mr-1 text-emerald-600" />
                            <span>{stat.text}</span>
                        </div>
                    ))}
                </div>

                {/* Description Text */}
                <p className="text-black opacity-50 text-sm mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Read More Button - Matches the green theme and includes an icon */}
                <button className="flex items-center justify-center space-x-2 bg-[#218f6b] text-white font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-emerald-700">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

/**
 * Main Application Component containing the section header and card grid.
 */
const App = () => {
    return (
        // Main container with the green background (using a dark green shade for contrast)
        <div className="min-h-screen bg-[#218f6b] font-sans py-16 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-12 lg:mb-16">
                    {/* Subtitle / Pill style */}
                    <div className="inline-block bg-white text-[#218f6b] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-lg mb-3">
                        Our Best Rooms
                    </div>
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Luxury Rooms and Resort
                    </h1>
                </header>

                {/* Cards Grid - Responsive layout */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {roomData.map((room) => (
                        <RoomCard
                            key={room.id}
                            title={room.title}
                            price={room.price}
                            description={room.description}
                            imageSrc={room.imageSrc}
                            stats={room.stats}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default App;