import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Link removed as requested
const WHATSAPP_LINK = "";

const ThankYouStickyBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border-t border-gray-100 z-[1000]"
                >
                    <div className="w-full max-w-7xl px-4 flex items-center justify-between gap-4">

                        {/* Left: Text */}
                        <div className="hidden sm:flex flex-col">
                            <span className="text-gray-900 font-bold text-lg">
                                Don't miss out!
                            </span>
                            <span className="text-gray-500 text-sm">
                                Join the community for updates.
                            </span>
                        </div>

                        {/* Right: CTA */}
                        <div className="flex-1 sm:flex-none">
                            {WHATSAPP_LINK ? (
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-full shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 hover:shadow-green-300 px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <MessageCircle className="w-6 h-6 fill-white" />
                                    <span>Join WhatsApp Group</span>
                                </a>
                            ) : (
                                <button
                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-full shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 hover:shadow-green-300 px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto opacity-50 cursor-not-allowed"
                                    disabled
                                >
                                    <MessageCircle className="w-6 h-6 fill-white" />
                                    <span>Join WhatsApp Group</span>
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThankYouStickyBar;
