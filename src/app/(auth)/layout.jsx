import React from 'react';
import Link from 'next/link';
import {  Activity, HeartPulse } from 'lucide-react';

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">

            {/* Logo Section */}
            <div className="relative z-10 pt-8">
                <Link href="/" className="flex items-start px-4 gap-3 group">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 group-hover:scale-105 transition-all duration-300">
                            <HeartPulse className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Activity className="w-3 h-3 text-orange-400" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-white leading-tight">
                            doc<span className="text-orange-500">Appoint</span>
                        </h1>
                        <p className="text-xs text-gray-500 -mt-0.5 tracking-wide">
                            Your Health, Our Priority
                        </p>
                    </div>
                </Link>
            </div>

            {/* Main Content */}
            <main className="">
                {children}
            </main>

            {/* Bottom Text */}
            <div className="relative z-10 pb-6">
                <p className="text-center text-gray-600 text-xs">
                    Secure authentication powered by Better Auth
                </p>
            </div>
        </div>
    );
}