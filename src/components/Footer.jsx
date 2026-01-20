import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#F5F5F7] text-[#1d1d1f] py-16 px-4 md:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Left Column - Contact Us */}
                <div>
                    <h2 className="text-sm font-bold tracking-wider uppercase mb-8">FITNESSBYKUSH.COM</h2>

                    <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                            <Mail size={18} />
                            <a href="mailto:fitnessbykush@gmail.com">fitnessbykush@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                            <Instagram size={18} />
                            <a href="https://www.instagram.com/fitnessbykush/" target="_blank" rel="noopener noreferrer">@fitnessbykush</a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Quick Links */}
                <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li><Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/cancellation" className="hover:text-black transition-colors">Cancellation Policy</Link></li>
                        <li><Link to="/refund" className="hover:text-black transition-colors">Refund Policy</Link></li>
                        <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-gray-400 text-sm space-y-2 mt-12 pt-8 border-t border-gray-200/50">
                <p>Mon — Sun, 10:00 AM — 10:00 PM</p>
                <p>© 2025 FitnessByKush.com. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
