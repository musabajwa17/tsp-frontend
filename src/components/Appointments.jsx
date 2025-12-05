import React, { useState } from 'react';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

// Replaced with a high-quality, reliable hotel room image URL
// Mock data for dropdowns
const typeOptions = ['Standard Room', 'Deluxe Suite', 'Executive Apartment'];
const roomOptions = ['Room 101', 'Room 205', 'Penthouse A'];

// Define the initial empty state for the form
const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: '',
    room: '',
    checkIn: '',
    checkOut: '',
    message: '',
};

// Reusable Input Field Component
const FormInput = ({ label, id, type = 'text', placeholder, value, onChange, icon: Icon, className = '' }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full h-12 px-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
            />
            {Icon && (
                <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            )}
        </div>
    </div>
);

// Reusable Select Field Component (Dropdown)
const FormSelect = ({ label, id, options, value, onChange, className = '' }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                value={value}
                onChange={onChange}
                // text-gray-500 is used to match the placeholder color in the original image for the default 'Select Type' text
                className="w-full h-12 appearance-none px-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-500 transition duration-150 ease-in-out"
            >
                <option value="" disabled>Select {label.split(' ')[1]}</option>
                {options.map((option) => (
                    <option key={option} value={option} className="text-gray-800">{option}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
    </div>
);

// Reusable Date Field Component
const FormDate = ({ label, id, value, onChange, className = '' }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
            <input
                type="date"
                id={id}
                value={value}
                onChange={onChange}
                // Tailwind utility classes to style the native date input to match the design (hiding the default calendar icon)
                className="w-full h-12 appearance-none px-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-500 transition duration-150 ease-in-out [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
    </div>
);

// Reusable Textarea Component
const FormTextarea = ({ label, id, placeholder, value, onChange, className = '' }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <textarea
            id={id}
            placeholder={placeholder}
            rows="5"
            value={value}
            onChange={onChange}
            className="w-full p-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out resize-none"
        />
    </div>
);


const App = () => {
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. Console log the data as requested
        console.log('Appointment Submitted!');
        console.log('Form data:', formData);

        // 2. Clear the form fields by resetting state to the initial empty state
        setFormData(initialFormState);
        // In a real application, you would send this data to an API
    };

    return (
        // Outer container for the entire page section
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-inter">

            {/* Header Section */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-2">
                    STAY WITH US
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                    Make An Appointment
                </h1>
            </div>

            {/* Main Content Area: Form (Left) & Info Card (Right) */}
            {/* The main grid uses 3 columns on large screens */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> {/* items-start prevents the shorter card from stretching */}

                    {/* Appointment Form (2/3 width on desktop) */}
                    <div className="lg:col-span-2 p-6 sm:p-10 bg-white shadow-xl rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Row 1: Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormInput
                                    label="First Name"
                                    id="firstName"
                                    placeholder="Ex. first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label="Last Name"
                                    id="lastName"
                                    placeholder="Ex. last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 2: Contact Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormInput
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="Ex. info@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label="Phone Number"
                                    id="phone"
                                    type="tel"
                                    placeholder="Ex. (+1) 987 654 3210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 3: Select Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormSelect
                                    label="Select Type"
                                    id="type"
                                    options={typeOptions}
                                    value={formData.type}
                                    onChange={handleChange}
                                />
                                <FormSelect
                                    label="Select Room"
                                    id="room"
                                    options={roomOptions}
                                    value={formData.room}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 4: Date Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormDate
                                    label="Check In"
                                    id="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                />
                                <FormDate
                                    label="Check Out"
                                    id="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 5: Message Textarea */}
                            <FormTextarea
                                label="Message"
                                id="message"
                                placeholder="Ex. type message"
                                value={formData.message}
                                onChange={handleChange}
                                className="pt-4"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto mt-6 px-8 py-3 bg-[#1f8f6a] text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Book Appointment</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Card (1/3 width on desktop) */}
                    <div className="lg:col-span-1 overflow-hidden bg-white shadow-xl rounded-2xl">
                        <div className="flex flex-col bg-[#1f8f6a]">

                            {/* Image Container with Yellow/Gold Accent */}
                            {/* <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
                                    alt="A beautifully decorated hotel room."
                                    className="w-full h-55 object-cover object-center p-8 rounded-2xl"
                                    // Fallback for image loading error
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/F5C932/383D43?text=Image+Error" }}
                                />
                                <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-yellow-400 opacity-90 rounded-br-2xl"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)' }}>
                                </div>
                            </div> */}
                            <div className="p-8"> {/* Outer container defines the overall padding */}
                                <div className="relative w-full h-55 rounded-2xl overflow-hidden"> {/* Inner container for Image/Overlay */}
                                    <img
                                        src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
                                        alt="A beautifully decorated hotel room."
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/F5C932/383D43?text=Image+Error" }}
                                    />
                                    {/* The yellow curve is absolute, positioned relative to the rounded, inner container */}
                                    <div
                                        className="absolute top-0 left-0 w-1/3 h-1/2 bg-yellow-400 opacity-90"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)'
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>
                            {/* Text Content Area - Green Background */}
                            <div className="p-8 bg-[#1f8f6a] text-white rounded-b-2xl flex flex-col items-center text-center space-y-4">

                                {/* Phone Number */}
                                <p className="text-3xl font-bold">
                                    (+1) 987 654 3210
                                </p>

                                {/* Service Hours */}
                                <div className="text-center pt-2">
                                    <p className="text-sm font-light">
                                        Mon-Fri: 7:00 am - 9:00 pm
                                    </p>
                                    <p className="text-sm font-light mt-2">
                                        24/7 Service Available
                                    </p>
                                </div>

                                {/* Call Us Now Button */}
                                <button
                                    onClick={() => console.log('Call button clicked')}
                                    className=" max-w-xs mt-3 px-6 py-3 bg-yellow-400 text-teal-900 font-bold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Call Us Now</span>
                                    <ArrowRight className="w-5 h-5 text-teal-900" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;