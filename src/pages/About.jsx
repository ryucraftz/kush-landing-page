import React from 'react';
import { BadgeCheck, Users, Timer, Target, Globe2, Sparkles, User } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Us</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Meet Your Coach <span className="text-sky-700">Kush Rathor</span></h2>
                        <p className="text-gray-600 font-medium">Fitness Coach & Nutritionist</p>
                    </div>

                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-sky-600" />
                                    Our Expertise
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start gap-2"><span>•</span> ISSA Certified Coach</li>
                                    <li className="flex items-start gap-2"><span>•</span> 8+ Years Coaching Experience</li>
                                    <li className="flex items-start gap-2"><span>•</span> Specialised in Busy Dads & Parents</li>
                                </ul>
                            </div>
                            <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-sky-600" />
                                    Our Impact
                                </h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start gap-2"><span>•</span> 1200+ Transformations</li>
                                    <li className="flex items-start gap-2"><span>•</span> Clients across 8+ Countries</li>
                                    <li className="flex items-start gap-2"><span>•</span> Proven FitDad System</li>
                                </ul>
                            </div>
                        </div>

                        <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                            <p className="mb-4">
                                From Confusion to Clarity — <strong>I Didn’t Just Study Fitness, I Lived the Struggle.</strong>
                            </p>
                            <p>
                                In the corporate world, I kept seeing the same pattern — most people over 30 (especially parents) were struggling with weight, even after trying diets, workouts, and trainers.
                            </p>
                            <p>
                                The problem wasn’t knowledge. It was life: long hours, kids, travel, stress — and no structure or daily accountability.
                            </p>
                            <p>
                                That’s why I built the <strong>Fit Dad Program</strong> — simple nutrition, short realistic workouts, and daily check-ins that keep busy dads consistent even on bad days.
                            </p>
                            <p className="font-semibold text-gray-800 pt-2">
                                Because when structure + accountability are in place, results stop being accidental — they become inevitable.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
