import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, } from 'lucide-react';

const DashboardHomePage = () => {

    const quickLinks = [
        { icon: Calendar, title: "My Bookings", description: "View and manage your appointments", href: "/v1/dashboard/bookings", color: "from-orange-500 to-orange-600" },
        { icon: User, title: "My Profile", description: "Update your personal information", href: "/v1/dashboard/profile", color: "from-orange-500 to-orange-600" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                <div className="relative">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Welcome to <span className="text-orange-500">Dashboard</span>
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base max-w-lg">
                        Manage your appointments, update your profile, and track your healthcare journey all in one place.
                    </p>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    {quickLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:bg-white/8"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon size={22} className="text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
                                    {link.title}
                                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500" />
                                </h3>
                                <p className="text-gray-400 text-sm">{link.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardHomePage;