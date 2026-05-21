import React from 'react';
import { Stethoscope } from 'lucide-react';

const Loading = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

            <div className="relative z-10 text-center">

                {/* Animated Logo */}
                <div className="relative mb-8 inline-block">
                    {/* Outer Ring */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-orange-500/20 animate-spin-slow"></div>

                    {/* Middle Ring */}
                    <div className="absolute top-2 left-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-orange-500/30 animate-spin-slow animation-delay-500"></div>

                    {/* Inner Ring */}
                    <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-orange-500/40 animate-spin-slow animation-delay-1000"></div>

                    {/* Center Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse">
                            <Stethoscope size={22} className="text-white sm:w-6 sm:h-6" />
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        doc<span className="text-orange-500">Appoint</span>
                    </h2>

                    {/* Animated Dots */}
                    <div className="flex items-center justify-center gap-1.5">
                        <span className="text-gray-400 text-sm sm:text-base font-medium">Loading</span>
                        <span className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce animation-delay-0"></span>
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce animation-delay-200"></span>
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce animation-delay-400"></span>
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-48 sm:w-56 h-1 bg-white/5 rounded-full mx-auto overflow-hidden">
                        <div className="h-full bg-linear-to-r from-orange-500 to-orange-600 rounded-full animate-loading-bar"></div>
                    </div>
                </div>

                {/* Bottom Text */}
                <p className="text-gray-600 text-xs mt-8">
                    Preparing your healthcare experience...
                </p>
            </div>
        </div>
    );
};

export default Loading;