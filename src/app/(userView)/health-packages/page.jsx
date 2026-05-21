import React from 'react';
import Link from 'next/link';
import { Heart, Stethoscope, Activity, Shield, CheckCircle, ArrowRight, Star, Users, Clock, Phone } from 'lucide-react';

export const metadata = {
    title: 'Health Packages | docAppoint - Affordable Healthcare Plans',
    description: 'Explore our comprehensive health packages designed for individuals and families. Includes regular checkups, specialist consultations, and diagnostic tests at affordable prices in Bangladesh.',
    keywords: 'health packages, medical packages, health checkup, diagnostic tests, healthcare plans, doctor consultation package, family health, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'Health Packages | docAppoint - Affordable Healthcare Plans',
        description: 'Affordable health packages with comprehensive medical services in Bangladesh.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const HealthPackages = () => {
    const packages = [
        {
            id: 1,
            name: 'Basic Health Checkup',
            icon: Stethoscope,
            price: 1500,
            originalPrice: 2500,
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            badge: 'Popular',
            features: [
                'General Physician Consultation',
                'Complete Blood Count (CBC)',
                'Blood Sugar Test',
                'Urine Routine Analysis',
                'Blood Pressure Check',
                'BMI Assessment',
            ],
            duration: '1 Day',
            validFor: '30 Days',
        },
        {
            id: 2,
            name: 'Family Health Plan',
            icon: Heart,
            price: 5000,
            originalPrice: 8000,
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
            badge: 'Best Value',
            features: [
                '2 Adult + 2 Children Coverage',
                'Annual Health Checkup (4 persons)',
                'Dental Checkup',
                'Eye Examination',
                'Nutritionist Consultation',
                'Vaccination Schedule',
                '24/7 Telemedicine Support',
            ],
            duration: 'Yearly',
            validFor: '365 Days',
        },
        {
            id: 3,
            name: 'Cardiac Care Package',
            icon: Activity,
            price: 3500,
            originalPrice: 5000,
            color: 'from-red-500/20 to-red-600/5',
            borderColor: 'border-red-500/20',
            iconBg: 'bg-red-500/10',
            iconColor: 'text-red-400',
            badge: 'Specialized',
            features: [
                'Cardiologist Consultation',
                'ECG Test',
                'Echocardiogram',
                'Lipid Profile',
                'Cardiac Risk Assessment',
                'Diet & Lifestyle Counseling',
            ],
            duration: '2 Days',
            validFor: '60 Days',
        },
        {
            id: 4,
            name: 'Women\'s Wellness',
            icon: Shield,
            price: 2500,
            originalPrice: 4000,
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            badge: 'Exclusive',
            features: [
                'Gynecologist Consultation',
                'Pap Smear Test',
                'Breast Examination',
                'Thyroid Profile',
                'Calcium & Vitamin D Test',
                'Anemia Screening',
            ],
            duration: '1 Day',
            validFor: '60 Days',
        },
        {
            id: 5,
            name: 'Diabetes Care Plan',
            icon: Activity,
            price: 2000,
            originalPrice: 3500,
            color: 'from-yellow-500/20 to-yellow-600/5',
            borderColor: 'border-yellow-500/20',
            iconBg: 'bg-yellow-500/10',
            iconColor: 'text-yellow-400',
            features: [
                'Endocrinologist Consultation',
                'HbA1c Test',
                'Fasting & Post-Meal Sugar',
                'Kidney Function Test',
                'Eye Screening',
                'Foot Examination',
            ],
            duration: '1 Day',
            validFor: '60 Days',
        },
        {
            id: 6,
            name: 'Senior Citizen Package',
            icon: Users,
            price: 4000,
            originalPrice: 6000,
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
            badge: '60+ Only',
            features: [
                'Geriatric Specialist Consultation',
                'Complete Health Checkup',
                'Bone Density Test',
                'Vision & Hearing Test',
                'Prostate Screening (Male)',
                'Arthritis Assessment',
                'Memory Screening',
            ],
            duration: '2 Days',
            validFor: '90 Days',
        },
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <Heart size={16} className="text-orange-500 fill-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Health Packages</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Affordable <span className="text-orange-500">Health Plans</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Choose from our comprehensive health packages designed by expert doctors.
                        Regular checkups at discounted prices to keep you and your family healthy.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {packages.map((pkg) => {
                        const Icon = pkg.icon;
                        return (
                            <div
                                key={pkg.id}
                                className={`relative group rounded-2xl bg-linear-to-br ${pkg.color} border ${pkg.borderColor} backdrop-blur-sm overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                            >
                                {/* Badge */}
                                {pkg.badge && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/25">
                                            {pkg.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="p-6 sm:p-8">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl ${pkg.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={26} className={pkg.iconColor} />
                                    </div>

                                    {/* Name & Price */}
                                    <h3 className="text-white font-bold text-xl mb-3">{pkg.name}</h3>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-3xl font-bold text-white">৳{pkg.price}</span>
                                        <span className="text-gray-500 line-through text-sm">৳{pkg.originalPrice}</span>
                                        <span className="text-green-400 text-xs font-medium">
                                            {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                                        </span>
                                    </div>

                                    {/* Duration Info */}
                                    <div className="flex items-center gap-4 mb-5 text-xs text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} className="text-orange-500" />
                                            {pkg.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Shield size={14} className="text-orange-500" />
                                            Valid: {pkg.validFor}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3 mb-6">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={`/doctors?package=${pkg.id}`}
                                        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group/btn"
                                    >
                                        Book Package
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Why Choose */}
                <div className="mt-16 sm:mt-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Why Choose Our <span className="text-orange-500">Packages?</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Star, title: 'Top Hospitals', desc: 'Partnered with 50+ leading hospitals' },
                            { icon: Shield, title: 'Verified Tests', desc: 'All tests done in NABL certified labs' },
                            { icon: Clock, title: 'Fast Reports', desc: 'Digital reports within 24 hours' },
                            { icon: Phone, title: '24/7 Support', desc: 'Round-the-clock customer service' },
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon size={22} className="text-orange-500" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-16 sm:mt-20">
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                        <div className="relative">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Need a Custom Health Package?
                            </h2>
                            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                                Contact us for personalized health plans tailored to your specific needs.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-orange-500/50 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300 group"
                            >
                                Contact Us
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthPackages;