import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';

const WhyChooseSection = () => {
    const skills = [
        { name: 'Chief Hunter', percentage: 88 },
        { name: 'Design', percentage: 94 },
        { name: 'Swimming Coach', percentage: 83 }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="text-teal-600 text-sm font-bold mb-3 tracking-wide">OUR SKILLS</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 leading-tight">
                            Why Choose for us?
                        </h2>
                        <p className="text-gray-600 mb-10 leading-relaxed text-base">
                            We are committed to giving you the best service possible from the moment you arrive at resort. Our staff provides exceptional hospitality and luxury in every possible moment from check-out.
                        </p>

                        {skills.map((skill, index) => (
                            <div key={index} className="mb-7">
                                <div className="flex justify-between mb-2.5">
                                    <span className="font-semibold text-gray-800 text-base">{skill.name}</span>
                                    <span className="font-semibold text-gray-800 text-base">{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80"
                                alt="Beach resort"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80"
                                alt="Resort pool view"
                                className="absolute -top-8 -left-8 w-40 sm:w-56 h-40 sm:h-56 object-cover rounded-xl shadow-2xl border-8 border-white hidden sm:block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyChooseSection;    