import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        { number: '300', suffix: '+', label: 'Luxury Rooms' },
        { number: '650', suffix: '+', label: 'Regular Guests' },
        { number: '80', suffix: '+', label: 'Team Member' },
        { number: '75', suffix: '+', label: 'Beaches' }
    ];

    return (
        <section className="bg-teal-600 py-14 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                                {stat.number}<span className="text-teal-300">{stat.suffix}</span>
                            </h3>
                            <p className="text-teal-50 text-sm sm:text-base font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default StatsSection;    