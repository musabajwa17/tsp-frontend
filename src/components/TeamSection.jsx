// Team Section
import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const TeamSection = () => {
    const team = [
        { name: 'Michael Dean', role: 'Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
        { name: 'Arnold Taylor', role: 'Head Chief', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
        { name: 'Michael Dean', role: 'Photographer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
        { name: 'Michael Dean', role: 'Receptionist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-teal-600 text-sm font-bold mb-3 tracking-wide">POPULAR CHEFS</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Expert Staff Persons</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 right-4 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full cursor-pointer transition-colors shadow-lg">
                                    <Facebook size={18} />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-bold text-lg mb-1 text-gray-900">{member.name}</h3>
                                <p className="text-gray-500 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TeamSection; 