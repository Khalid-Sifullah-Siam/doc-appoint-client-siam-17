import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, GraduationCap, Coffee, Laptop, DollarSign, Search } from 'lucide-react';

export const metadata = {
  title: 'Careers | docAppoint - Join Our Team',
  description: 'Explore career opportunities at docAppoint. Join Bangladesh\'s leading healthcare booking platform and help us make healthcare accessible for everyone.',
  keywords: 'careers, jobs, healthcare jobs, tech jobs Bangladesh, docAppoint careers, medical tech jobs, Dhaka jobs, healthtech careers',
  robots: 'index, follow',
  openGraph: {
    title: 'Careers | docAppoint - Join Our Team',
    description: 'Build your career with docAppoint and shape the future of healthcare in Bangladesh.',
    type: 'website',
    siteName: 'docAppoint',
  },
};

const Careers = () => {
    const openings = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            salary: '৳80,000 - ৳120,000',
            icon: Laptop,
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            badge: 'Urgent',
        },
        {
            id: 2,
            title: 'Backend Developer (Node.js)',
            department: 'Engineering',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            salary: '৳70,000 - ৳100,000',
            icon: Laptop,
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            salary: '৳60,000 - ৳90,000',
            icon: Coffee,
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            badge: 'Remote',
        },
        {
            id: 4,
            title: 'Customer Support Specialist',
            department: 'Operations',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            salary: '৳30,000 - ৳45,000',
            icon: Users,
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
        },
        {
            id: 5,
            title: 'Digital Marketing Manager',
            department: 'Marketing',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            salary: '৳50,000 - ৳75,000',
            icon: Search,
            color: 'from-red-500/20 to-red-600/5',
            borderColor: 'border-red-500/20',
            iconBg: 'bg-red-500/10',
            iconColor: 'text-red-400',
        },
        {
            id: 6,
            title: 'Medical Content Writer',
            department: 'Content',
            location: 'Remote',
            type: 'Part-time',
            salary: '৳25,000 - ৳40,000',
            icon: GraduationCap,
            color: 'from-yellow-500/20 to-yellow-600/5',
            borderColor: 'border-yellow-500/20',
            iconBg: 'bg-yellow-500/10',
            iconColor: 'text-yellow-400',
            badge: 'New',
        },
    ];

    const benefits = [
        { icon: DollarSign, title: 'Competitive Salary', desc: 'Industry-leading compensation with annual reviews' },
        { icon: Heart, title: 'Health Insurance', desc: 'Full medical coverage for you and your family' },
        { icon: Coffee, title: 'Flexible Hours', desc: 'Work-life balance with flexible scheduling' },
        { icon: Laptop, title: 'Remote Options', desc: 'Work from anywhere with our remote-friendly policy' },
        { icon: GraduationCap, title: 'Learning Budget', desc: 'Annual budget for courses and conferences' },
        { icon: Users, title: 'Great Culture', desc: 'Inclusive, collaborative, and fun work environment' },
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
                        <Briefcase size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Join Our Team</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Build Your Career at <span className="text-orange-500">docAppoint</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Join Bangladesh&apos;s fastest-growing healthcare platform. We&apos;re on a mission to make quality healthcare accessible to everyone.
                    </p>
                </div>

                {/* Why Join Us */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300 text-center group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={22} className="text-orange-500" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm">{benefit.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Open Positions */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Open <span className="text-orange-500">Positions</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {openings.length} positions available
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {openings.map((job) => {
                            const Icon = job.icon;
                            return (
                                <div
                                    key={job.id}
                                    className={`relative group rounded-2xl bg-linear-to-br ${job.color} border ${job.borderColor} backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300`}
                                >
                                    {/* Badge */}
                                    {job.badge && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/25">
                                                {job.badge}
                                            </span>
                                        </div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl ${job.iconBg} flex items-center justify-center mb-4`}>
                                        <Icon size={22} className={job.iconColor} />
                                    </div>

                                    <h3 className="text-white font-bold text-lg mb-3">{job.title}</h3>

                                    <div className="space-y-2 mb-5">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Briefcase size={14} className={job.iconColor} />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <MapPin size={14} className={job.iconColor} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Clock size={14} className={job.iconColor} />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <DollarSign size={14} className={job.iconColor} />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/contact`}
                                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-all duration-300 group/btn"
                                    >
                                        Apply Now
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 sm:mt-20">
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                        <div className="relative">
                            <Users size={40} className="text-orange-500 mx-auto mb-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Don&apos;t See the Right Role?
                            </h2>
                            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                                We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group"
                            >
                                Send Resume
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;