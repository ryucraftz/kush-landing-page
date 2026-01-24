import React from "react";
import { MessageCircle } from "lucide-react";

// TODO: Replace with actual WhatsApp Group Link
const WHATSAPP_LINK = "https://wa.me/919876543210";

const ThankYouStickyBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border-t border-gray-100 z-[1000] animate-slide-up">
            <div className="w-full max-w-7xl px-4 flex items-center justify-between gap-4">

                {/* Left: Text (Hidden on very small screens if needed, but useful context) */}
                <div className="hidden sm:flex flex-col">
                    <span className="text-gray-900 font-bold text-lg">
                        Don't miss out!
                    </span>
                    <span className="text-gray-500 text-sm">
                        Join the community for updates.
                    </span>
                </div>

                {/* Right: CTA */}
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-full shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 hover:shadow-green-300 px-6 py-3 flex items-center justify-center gap-2"
                >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>Join WhatsApp Group</span>
                </a>
            </div>

            <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default ThankYouStickyBar;
