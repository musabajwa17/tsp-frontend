import React, { useState } from 'react';
import { Home, Search, ShoppingCart, User, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, ChevronRight, X } from 'lucide-react';
const OutdoorActivities = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <p className="text-teal-600 text-sm font-bold mb-3 tracking-wide">LUXURY HOTEL</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 leading-tight">
                            We Provide Outdoor Activities To All Visitors
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-base">
                            Your Freyland vacation extends far beyond the property with a multitude of outdoor and land-based outdoor sports for visitors to enjoy.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64s-1.73-.37-2.18-.64c-.37-.23-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zM2 17c1.11 0 1.73-.37 2.18-.64.37-.22.6-.36 1.15-.36.56 0 .78.13 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.22.6-.36 1.15-.36.56 0 .78.13 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.22.6-.36 1.15-.36.56 0 .78.13 1.15.36.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.22-.6.36-1.15.36-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.22-.6.36-1.15.36-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.22-.6.36-1.15.36v2zM19.97 6h-6.94L8.5 3H2v11h3.97l4.53 3h6.94c1.66 0 3.03-1.34 3.03-3V9c0-1.66-1.37-3-3.03-3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1.5 text-base">The Best Swimming Pool</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Swimming pool with a wooden cliff for relaxation</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1.5 text-base">The Best Stationary Bike</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Enjoy biking and riding outdoor for better health</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-0.5 bg-teal-600"></div>
                            <p className="text-gray-600 text-sm">Explore our 150+ Luxury rooms with best facility.</p>
                        </div>

                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-md font-semibold flex items-center gap-2 transition-colors">
                            Discover More
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
                                alt="Luxury fireplace"
                                className="rounded-xl h-72 sm:h-80 lg:h-96 object-cover w-full shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80"
                                alt="Hotel amenity"
                                className="rounded-xl h-72 sm:h-80 lg:h-96 object-cover w-full mt-8 shadow-lg"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-6 rounded-xl text-center w-56 shadow-2xl">
                            <div className="text-4xl mb-2">🍽️</div>
                            <h4 className="font-bold mb-2 text-lg">Best Restaurants</h4>
                            <p className="text-xs text-gray-300 leading-relaxed">Delight in a dining out with very best experience in our spot</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutdoorActivities;
