import React from 'react';
import { Users, Bed, Bath, ArrowRight } from 'lucide-react'; // Using lucide-react for icons
const RoomCard = ({ title, price, description, imageSrc, bath, bed, guest }) => {
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
                    {/* {stats.map((stat, index) => (
                        <div key={index} className="flex items-center text-sm font-medium">
                            <stat.icon className="w-4 h-4 mr-1 text-emerald-600" />
                            <span>{stat.text}</span>
                        </div>
                    ))} */}
                    <div className="flex items-center text-sm font-medium">
                        <Users className="w-4 h-4 mr-1 text-emerald-600" />
                        <span>{guest}</span>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                        <Bed className="w-4 h-4 mr-1 text-emerald-600" />
                        <span>{bed}</span>
                    </div>
                    <div className="flex items-center text-sm font-medium">
                        <Bath className="w-4 h-4 mr-1 text-emerald-600" />
                        <span>{bath}</span>
                    </div>
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
export default RoomCard