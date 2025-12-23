import React, { useState, useEffect } from 'react';

const StickyBar = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => clearInterval(myInterval);
    }, [minutes, seconds]);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex items-center justify-between border-t border-gray-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6">
            
            {/* Left-aligned content */}
            <div className="flex flex-col items-start space-y-1 min-w-[120px]">
                <div className="text-red-600 text-2xl font-bold">
                    {minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                </div>
                <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-700">
                    <span className="font-extrabold">Limited Slots Only!</span>
                </div>
            </div>

            {/* Right-aligned content */}
            <div className="flex items-center flex-1 justify-end relative">
                <button className="bg-red-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-3xl shadow-lg overflow-hidden transition transform px-4 sm:px-6 py-2 sm:py-3 whitespace-normal text-center max-w-[200px] sm:max-w-[300px]">
                    Book Your 1:1 FitDad Transformation Call
                </button>
            </div>

        </div>
    );
};

export default StickyBar;
