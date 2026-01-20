import React from 'react';
import { Mail, Phone, Instagram, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-center text-gray-500 mb-12">We're here to help! Reach out to us through the following:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Email Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="mb-4 text-blue-500 bg-blue-50 p-4 rounded-full">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">fitnessbykush@gmail.com</p>
                    </div>

                    {/* Instagram Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="mb-4 text-blue-500 bg-blue-50 p-4 rounded-full">
                            <Instagram size={32} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                        <p className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">@fitnessbykush</p>
                    </div>

                    {/* Working Hours Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="mb-4 text-blue-500 bg-blue-50 p-4 rounded-full">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                        <p className="text-gray-500 text-sm">Monday — Sunday</p>
                        <p className="text-gray-900 font-medium mt-1">10:00 AM — 10:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
