import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Check } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up border border-stone-100">
                {/* Header Section with gradient */}
                <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-10 text-center relative overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg mb-6 animate-bounce-slow">
                            <Check className="h-10 w-10 text-rose-500" strokeWidth={3} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Booking Confirmed!</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Thanks for scheduling your call. <br className="hidden sm:block" />
                            A calendar invitation has been sent to your email.
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-8 bg-white">
                    <div className="space-y-4">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                            While you wait
                        </h2>

                        <a
                            href="https://www.instagram.com/fitnessbykush/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <Instagram className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-lg">Follow on Instagram</span>
                        </a>
                    </div>

                    <div className="pt-2 text-center">
                        <Link
                            to="/"
                            className="text-gray-500 hover:text-gray-900 font-medium transition-colors text-sm flex items-center justify-center gap-2 group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 30px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-5%); }
                    50% { transform: translateY(0); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ThankYou;
