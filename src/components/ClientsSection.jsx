import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const ClientsSection = () => {
    const clientLogos = [
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+1',
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+2',
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+3',
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+4',
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+5',
        'https://via.placeholder.com/120x120/e2e8f0/64748b?text=Client+6'
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-teal-600 text-sm font-bold mb-3 tracking-wide">OUR CLIENTS</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        We Have More Then 150+<br />Global Clients
                    </h2>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 sm:gap-12 items-center">
                    {clientLogos.map((logo, i) => (
                        <div key={i} className="flex justify-center opacity-40 hover:opacity-70 transition-opacity">
                            <img src={logo} alt={`Client ${i + 1}`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain grayscale" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ClientsSection;
