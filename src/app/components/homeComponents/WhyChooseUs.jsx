"use client";
import React from 'react';
import { Shield, Clock, Star, Users, ThumbsUp, } from 'lucide-react';


export const WhyChooseUs = () => {
    const features = [
        {
            icon: Clock,
            title: "24/7 Availability",
            description: "Book appointments anytime, anywhere. Our platform is always open for your healthcare needs.",
            color: "from-blue-500/20 to-blue-600/5",
            iconColor: "text-blue-400",
            borderColor: "border-blue-500/20",
        },
        {
            icon: Shield,
            title: "Verified Doctors",
            description: "All doctors are thoroughly vetted and verified with valid medical licenses and credentials.",
            color: "from-green-500/20 to-green-600/5",
            iconColor: "text-green-400",
            borderColor: "border-green-500/20",
        },
        {
            icon: Star,
            title: "Top-Rated Specialists",
            description: "Access highly rated doctors with proven track records and thousands of satisfied patients.",
            color: "from-yellow-500/20 to-yellow-600/5",
            iconColor: "text-yellow-400",
            borderColor: "border-yellow-500/20",
        },
        {
            icon: Users,
            title: "50,000+ Patients",
            description: "Join our growing community of patients who trust docAppoint for their healthcare journey.",
            color: "from-purple-500/20 to-purple-600/5",
            iconColor: "text-purple-400",
            borderColor: "border-purple-500/20",
        },
    ];

    return (
        <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <ThumbsUp size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Why Choose Us</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why Patients <span className="text-orange-500">Trust Us</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        We combine cutting-edge technology with exceptional healthcare to deliver the best patient experience.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-6 rounded-2xl bg-linear-to-br ${feature.color} border ${feature.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-default`}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                                    <Icon size={24} className={feature.iconColor} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        {[
                            { value: "99.9%", label: "Uptime" },
                            { value: "4.8/5", label: "Average Rating" },
                            { value: "24/7", label: "Customer Support" },
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <p className="text-3xl sm:text-4xl font-bold text-orange-500">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};