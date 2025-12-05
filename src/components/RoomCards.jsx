import React from 'react';
import { useFetchHotels } from '../hooks/useFetchHostels';
import RoomCard from './ui/RoomCard';
const App = () => {
    const { data: hotels, loading, error } = useFetchHotels();
    console.log(hotels);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#218f6b] font-sans py-16 px-4 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    <p className="mt-4 text-white">Loading hotels...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#218f6b] font-sans py-16 px-4 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-red-200">Error: {error}</p>
                </div>
            </div>
        );
    }
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
                    {hotels.map((room) => (
                        <RoomCard
                            key={room._id}
                            title={room.name}
                            price={room.price}
                            description={room.description}
                            imageSrc={room.images}
                            bath={room.bath}
                            bed={room.beds}
                            guest={room.guest}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default App;