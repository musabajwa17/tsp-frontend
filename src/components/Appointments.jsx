import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import FormInput from './ui/FormInput';
import FormSelect from './ui/FormSelect';
import FormDate from './ui/FormDate';
import FormTextarea from './ui/FormTextarea';
import { useCreateBooking } from '../hooks/useCreateBooking';
import toast from 'react-hot-toast';

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

const Appointments = () => {
    const { createBooking, loading, error } = useCreateBooking();
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("=== Appointment Submitted ===");
        console.log("Form Data:", formData);
        console.log("============================");

        // Send POST request
        const response = await createBooking(formData);

        if (response) {
            toast.success("Booking created successfully!");
            // Reset form
            setFormData(initialFormState);
        } else {
            toast.error(error || "Failed to create booking");
        }
    };

    return (
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

            {/* Main Content Area */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Appointment Form */}
                    <div className="lg:col-span-2 p-6 sm:p-10 bg-white shadow-xl rounded-2xl">
                        {/* Error Display */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-600 text-sm font-medium">
                                    ⚠️ {error}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1: Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormInput
                                    label="First Name"
                                    id="firstName"
                                    placeholder="Ex. first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                                <FormInput
                                    label="Last Name"
                                    id="lastName"
                                    placeholder="Ex. last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    disabled={loading}
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
                                    disabled={loading}
                                />
                                <FormInput
                                    label="Phone Number"
                                    id="phone"
                                    type="tel"
                                    placeholder="Ex. (+1) 987 654 3210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={loading}
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
                                    disabled={loading}
                                />
                                <FormSelect
                                    label="Select Room"
                                    id="room"
                                    options={roomOptions}
                                    value={formData.room}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>

                            {/* Row 4: Date Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormDate
                                    label="Check In"
                                    id="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                                <FormDate
                                    label="Check Out"
                                    id="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    disabled={loading}
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
                                disabled={loading}
                            />

                            {/* Submit Button with Loading State */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full sm:w-auto mt-6 px-8 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2 ${loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#1f8f6a] hover:bg-teal-700'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Book Appointment</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Card */}
                    <div className="lg:col-span-1 overflow-hidden bg-white shadow-xl rounded-2xl">
                        <div className="flex flex-col bg-[#1f8f6a]">
                            <div className="p-8">
                                <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
                                        alt="A beautifully decorated hotel room."
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/F5C932/383D43?text=Image+Error" }}
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-1/3 h-1/2 bg-yellow-400 opacity-90"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="p-8 bg-[#1f8f6a] text-white rounded-b-2xl flex flex-col items-center text-center space-y-4">
                                <p className="text-3xl font-bold">
                                    (+1) 987 654 3210
                                </p>

                                <div className="text-center pt-2">
                                    <p className="text-sm font-light">
                                        Mon-Fri: 7:00 am - 9:00 pm
                                    </p>
                                    <p className="text-sm font-light mt-2">
                                        24/7 Service Available
                                    </p>
                                </div>

                                <button
                                    onClick={() => console.log('Call button clicked')}
                                    className="max-w-xs mt-3 px-6 py-3 bg-yellow-400 text-teal-900 font-bold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 flex items-center justify-center space-x-2"
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

export default Appointments;