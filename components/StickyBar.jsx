import React from "react";



const StickyBar = () => {
  const handleBooking = () => {
    window.location.href = "https://fitnessbykush.zohobookings.com/#/4699272000000050054";
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex items-center justify-between border-t border-gray-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6">
      {/* Left: Pricing */}
      <div className="flex flex-col items-start min-w-[140px]">
        <div className="flex items-baseline gap-2">
          <span className="text-gray-500 text-lg sm:text-xl font-semibold line-through">
            ₹199
          </span>
          <span className="text-red-600 text-2xl sm:text-3xl font-extrabold">
            ₹9/-
          </span>
        </div>
        <div className="text-xs sm:text-sm font-semibold text-gray-600">
          Limited-time offer
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex items-center flex-1 justify-end relative">
        <button
          onClick={handleBooking}
          className="bg-red-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-3xl shadow-lg transition transform px-4 sm:px-6 py-2 sm:py-3 whitespace-normal text-center max-w-[200px] sm:max-w-[300px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed h-full"
        >
          Book Your 1:1 FitDad Transformation Call
        </button>
      </div>
    </div>
  );
};

export default StickyBar;
