import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import PhotoTestimonials from "../../components/PhotoTestimonials";
import coachImage from "../assets/coachprofile2.jpeg";

// Reusing the coach image from existing assets
const COACH_IMAGE_SRC = coachImage;

const WHATSAPP_LINK = "https://wa.me/919876543210"; // 🔴 TODO: Replace with valid link

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-slate-50 font-satoshi text-slate-900 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">

            {/* Navbar / Top items (Optional, keeping it clean for Thank You) */}

            {/* 🌟 HERO SECTION */}
            <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col md:flex-row gap-12 items-center justify-between">

                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000 pointer-events-none" />

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-xl z-10 text-center"
                >
                    {/* Header Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-700 mb-6 uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-amber-700" />
                        FitDad Fitness
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Thank You for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Joining Us!</span> 🙏
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Welcome to FitDad Fitness Online! 🎉 We're thrilled to have you on board.
                        You've just taken an incredible step towards a healthier, happier you.
                    </p>

                    {/* NOTE CARD */}
                    <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 relative overflow-hidden group hover:border-amber-200/50 transition-colors text-left">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500" />

                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            Note:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                                <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 font-bold text-xs">1</div>
                                <span>The meeting link has been sent to your email.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                                <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 font-bold text-xs">2</div>
                                <span>Our executive will call you and share details on WhatsApp before the consultation. Be ready at your scheduled time.</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA BUTTON */}
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 hover:shadow-green-300"
                    >
                        <MessageCircle className="w-6 h-6 fill-white" />
                        Join Our Whatsapp Group
                    </a>

                </motion.div>

                {/* RIGHT IMAGE (Card Style) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full max-w-lg relative z-10"
                >
                    <div className="relative aspect-[4/5] md:aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group">
                        {/* Decorative Logos Overlay (Mocking the screenshot structure) */}
                        <div className="absolute top-6 left-6 z-20 flex gap-4">
                            {/* Placeholders for ISSA/NASM logos */}
                            <span className="font-black text-slate-300 text-xl tracking-tighter">ISSA</span>
                        </div>

                        {/* Main Image */}
                        <img
                            src={COACH_IMAGE_SRC}
                            alt="Coach Kush"
                            className="w-full h-full object-cover object-[50%_20%] transform scale-100 md:scale-x-[-1] group-hover:scale-105 md:group-hover:scale-x-[-1] md:group-hover:scale-[1.05] transition-transform duration-700"
                        />

                        {/* Bottom Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 pt-24 text-center">
                            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-2">
                                <span className="text-white text-xs font-bold tracking-wide">- With Coach Kush</span>
                            </div>
                            <p className="text-slate-200 text-sm font-medium">Founder of FitDad Fitness</p>
                        </div>
                    </div>
                </motion.div>

            </section>

            {/* 📸 REAL RESULTS SECTION */}
            <section className="bg-white py-20 border-t border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                            See Real People Achieve <span className="text-red-600 italic font-serif">Real Results!</span>
                        </h2>
                    </div>

                    <PhotoTestimonials hideHeader={true} stunningGrid={true} />
                </div>
            </section>

        </div>
    );
}
