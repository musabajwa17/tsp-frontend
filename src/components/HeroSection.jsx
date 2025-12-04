import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] bg-cover bg-center" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80)'
        }}>
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="text-white max-w-3xl">
                    <p className="text-sm mb-3 flex items-center gap-2">
                        <span>Home</span>
                        <ChevronRight size={14} />
                        <span>About Us</span>
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">About Us</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
