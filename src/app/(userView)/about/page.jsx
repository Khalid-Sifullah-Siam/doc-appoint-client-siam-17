import React from 'react';
import { Stethoscope, Heart, Shield, Users, Award, MapPin, Phone, Mail, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | docAppoint - Your Trusted Healthcare Partner',
    description: 'Learn about docAppoint - Bangladesh\'s leading doctor appointment booking platform. Our mission is to make healthcare accessible, affordable, and hassle-free for everyone.',
    keywords: 'about docAppoint, healthcare platform, doctor booking, medical appointment, Bangladesh healthcare, online doctor booking, trusted healthcare',
    robots: 'index, follow',
    openGraph: {
        title: 'About Us | docAppoint - Your Trusted Healthcare Partner',
        description: 'Discover how docAppoint is revolutionizing healthcare access in Bangladesh.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const About = () => {
    const stats = [
        { icon: Users, value: '50,000+', label: 'Happy Patients' },
        { icon: Stethoscope, value: '500+', label: 'Expert Doctors' },
        { icon: Shield, value: '100%', label: 'Verified' },
        { icon: Award, value: '4.8', label: 'Average Rating' },
    ];

    const team = [
        { name: 'Dr. Ayesha Rahman', role: 'Chief Medical Officer', specialty: 'Cardiologist' },
        { name: 'Kamal Hossain', role: 'CEO & Founder', specialty: 'Healthcare Tech' },
        { name: 'Fatema Begum', role: 'Head of Operations', specialty: 'Hospital Management' },
        { name: 'Tanvir Ahmed', role: 'Lead Developer', specialty: 'HealthTech Solutions' },
    ];

    const values = [
        { icon: Heart, title: 'Patient First', description: 'Every decision we make starts with patient well-being and satisfaction.' },
        { icon: Shield, title: 'Trust & Safety', description: 'All our doctors are verified, licensed, and background-checked.' },
        { icon: Star, title: 'Quality Care', description: 'We partner with only the best hospitals and clinics in Bangladesh.' },
        { icon: Clock, title: 'Accessibility', description: 'Healthcare should be accessible 24/7, not just during office hours.' },
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">

                {/* Hero Section */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                                <Heart size={16} className="text-orange-500 fill-orange-500" />
                                <span className="text-orange-400 text-sm font-medium">Our Mission</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Making Healthcare <span className="text-orange-500">Accessible</span> for Everyone
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                docAppoint was founded with a simple mission: to bridge the gap between patients and quality healthcare.
                                We believe everyone deserves easy access to the best doctors without waiting in long queues.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                                        <Icon size={28} className="text-orange-500 mx-auto mb-3" />
                                        <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-16 sm:py-20 bg-white/2 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                                    <Award size={16} className="text-orange-500" />
                                    <span className="text-orange-400 text-sm font-medium">Our Story</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    From a Simple Idea to <span className="text-orange-500">50,000+ Patients</span>
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed">
                                    <p>
                                        In 2020, we noticed a critical problem in Bangladesh&apos;s healthcare system: patients were spending hours
                                        waiting for appointments while doctors struggled with inefficient scheduling.
                                    </p>
                                    <p>
                                        What started as a small project in Dhaka has now grown into Bangladesh&apos;s most trusted doctor appointment
                                        platform. We&apos;ve partnered with 50+ leading hospitals and clinics across the country.
                                    </p>
                                    <p>
                                        Today, docAppoint serves over 50,000 patients, connecting them with 500+ verified doctors across
                                        20+ specialties. And we&apos;re just getting started.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { year: '2020', event: 'Founded in Dhaka' },
                                    { year: '2021', event: '500+ Doctors Joined' },
                                    { year: '2022', event: '10,000+ Patients Served' },
                                    { year: '2023', event: '50+ Partner Hospitals' },
                                ].map((milestone, index) => (
                                    <div key={index} className="p-5 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm">
                                        <p className="text-orange-500 font-bold text-2xl mb-1">{milestone.year}</p>
                                        <p className="text-gray-300 text-sm">{milestone.event}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Our <span className="text-orange-500">Values</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                These core values guide everything we do at docAppoint.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300 text-center group">
                                        <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon size={24} className="text-orange-500" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 sm:py-20 bg-white/2 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Meet Our <span className="text-orange-500">Leadership</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Dedicated professionals working to make healthcare better.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {team.map((member, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg shadow-orange-500/20">
                                        {member.name.charAt(0)}
                                    </div>
                                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                                    <p className="text-orange-400 text-sm font-medium">{member.role}</p>
                                    <p className="text-gray-500 text-xs mt-1">{member.specialty}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative p-8 sm:p-12 rounded-3xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                            <div className="relative text-center max-w-2xl mx-auto">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Join thousands of patients who trust docAppoint for their healthcare needs.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/doctors"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group"
                                    >
                                        Find a Doctor
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/auth/get-started"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid sm:grid-cols-3 gap-6 mt-12">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Location</p>
                                    <p className="text-white text-sm font-medium">Dhanmondi, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Email</p>
                                    <p className="text-white text-sm font-medium">support@docappoint.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Phone</p>
                                    <p className="text-white text-sm font-medium">+880 1700-000000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;