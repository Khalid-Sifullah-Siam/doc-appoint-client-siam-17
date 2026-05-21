"use client"
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Stethoscope, AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

            <div className="relative z-10 text-center px-4">


                {/* 404 Icon */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-linear-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/20 flex items-center justify-center">
                            <AlertTriangle size={60} className="text-orange-500 sm:w-20 sm:h-20" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                            <Stethoscope size={22} className="text-white sm:w-7 sm:h-7" />
                        </div>
                    </div>
                </div>

                {/* 404 Text */}
                <div className="mb-4">
                    <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-2">
                        4<span className="text-orange-500">0</span>4
                    </h1>
                </div>

                {/* Message */}
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 group"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Help Text */}
                <p className="text-gray-600 text-xs sm:text-sm mt-8">
                    If you think this is a mistake, please{' '}
                    <Link href="/about" className="text-orange-500 hover:text-orange-400 underline underline-offset-2 transition-colors">
                        contact us
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;