import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const VideoSection = () => {
    return (
        <section className="bg-teal-600 py-24 sm:py-32 lg:py-40 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
            </div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <p className="text-white text-sm font-bold mb-3 tracking-wide">WELCOME TO FREYLAND</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 leading-tight">
                    Relax And Enjoy With Our<br />Hotel & Resort
                </h2>

                <div className="flex justify-center">
                    <button className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group">
                        <Play className="text-teal-600 fill-teal-600 ml-1 group-hover:scale-110 transition-transform" size={36} />
                    </button>
                </div>
            </div>
        </section>
    );
};
export default VideoSection;
