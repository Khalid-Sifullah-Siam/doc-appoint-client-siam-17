"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronRight, ArrowRight, MessageCircle, Search, Calendar, CreditCard, UserCheck, Shield, Stethoscope, Phone, Mail, Clock } from 'lucide-react';

const Faqs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const faqCategories = [
        {
            icon: Calendar,
            title: 'Booking & Appointments',
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            questions: [
                {
                    q: 'How do I book an appointment?',
                    a: 'Browse our doctors page, select your preferred doctor, choose an available time slot, fill in your details, and confirm. You\'ll receive instant email confirmation.',
                },
                {
                    q: 'Can I book for someone else?',
                    a: 'Yes! During booking, enter the patient\'s name and details. Your account email will be used for confirmation, but the appointment will be under the patient\'s name.',
                },
                {
                    q: 'How far in advance can I book?',
                    a: 'You can book appointments up to 30 days in advance. Some doctors may have different availability windows.',
                },
                {
                    q: 'What if I need to reschedule?',
                    a: 'Go to your dashboard → My Bookings, find the appointment, and click Update. You can reschedule up to 2 hours before the appointment time.',
                },
                {
                    q: 'How do I cancel my appointment?',
                    a: 'Go to My Bookings, find the appointment, and click Delete. Cancellation is free if done at least 2 hours before the scheduled time.',
                },
            ],
        },
        {
            icon: CreditCard,
            title: 'Payments & Fees',
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
            questions: [
                {
                    q: 'How much does docAppoint cost?',
                    a: 'docAppoint is completely free for patients! You only pay the doctor\'s consultation fee. There are no hidden charges or platform fees.',
                },
                {
                    q: 'How do I pay for my appointment?',
                    a: 'Currently, payment is made directly at the hospital or clinic. We\'re working on adding online payment options soon.',
                },
                {
                    q: 'What if I can\'t afford the consultation fee?',
                    a: 'We have doctors at various price points. You can filter by fee on our doctors page to find affordable options starting from ৳500.',
                },
                {
                    q: 'Is there a refund policy?',
                    a: 'If you cancel before the appointment time, no charge applies. For prepaid appointments, refunds are processed within 5-7 business days.',
                },
            ],
        },
        {
            icon: UserCheck,
            title: 'Account & Profile',
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            questions: [
                {
                    q: 'How do I create an account?',
                    a: 'Click "Get Started" on the top right, fill in your name, email, and password. You can also sign up instantly with Google.',
                },
                {
                    q: 'I forgot my password. What now?',
                    a: 'On the login page, click "Forgot Password?" and enter your email. We\'ll send you a reset link.',
                },
                {
                    q: 'How do I update my profile picture?',
                    a: 'Go to Dashboard → My Profile, click "Update Profile", and enter a new photo URL. Your profile updates instantly.',
                },
                {
                    q: 'Can I delete my account?',
                    a: 'Yes, contact our support team at support@docappoint.com, and we\'ll process your account deletion within 48 hours.',
                },
            ],
        },
        {
            icon: Stethoscope,
            title: 'Doctors & Specialists',
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
            questions: [
                {
                    q: 'Are all doctors verified?',
                    a: 'Absolutely! Every doctor on docAppoint is verified with valid BMDC (Bangladesh Medical & Dental Council) registration and credentials.',
                },
                {
                    q: 'How are doctor ratings calculated?',
                    a: 'Ratings are based on actual patient reviews and feedback. Only patients who have completed appointments can leave reviews.',
                },
                {
                    q: 'Can I choose a specific doctor?',
                    a: 'Yes! You can browse all available doctors, filter by specialty, location, hospital, and fee to find the right doctor for you.',
                },
                {
                    q: 'What specialties are available?',
                    a: 'We have 20+ specialties including Cardiology, Neurology, Pediatrics, Gynecology, Dermatology, Orthopedics, ENT, Ophthalmology, Psychiatry, and more.',
                },
            ],
        },
        {
            icon: Shield,
            title: 'Privacy & Security',
            color: 'from-red-500/20 to-red-600/5',
            borderColor: 'border-red-500/20',
            iconBg: 'bg-red-500/10',
            iconColor: 'text-red-400',
            questions: [
                {
                    q: 'Is my medical information safe?',
                    a: 'Yes! We use AES-256 encryption and secure servers. Your medical data is never shared without your explicit consent.',
                },
                {
                    q: 'Who can see my appointment history?',
                    a: 'Only you can see your complete appointment history. Doctors can only see appointments booked with them.',
                },
                {
                    q: 'Do you sell my data?',
                    a: 'Never. We do not sell, rent, or share your personal or medical data with third parties for marketing purposes.',
                },
            ],
        },
        {
            icon: MessageCircle,
            title: 'Support & Help',
            color: 'from-yellow-500/20 to-yellow-600/5',
            borderColor: 'border-yellow-500/20',
            iconBg: 'bg-yellow-500/10',
            iconColor: 'text-yellow-400',
            questions: [
                {
                    q: 'How do I contact support?',
                    a: 'Email us at support@docappoint.com or call +880 1700-000000. We\'re available 24/7.',
                },
                {
                    q: 'What if the doctor is late?',
                    a: 'Doctors try their best to be on time. If delayed, the hospital staff will inform you. You can wait or reschedule without penalty.',
                },
                {
                    q: 'Do you have a mobile app?',
                    a: 'We\'re currently web-based but fully mobile-responsive. A dedicated mobile app is coming soon!',
                },
            ],
        },
    ];

    const filteredCategories = (() => {
        const query = searchTerm.trim().toLowerCase();
        return faqCategories
            .filter((category) => activeCategory === 'All' || category.title === activeCategory)
            .map((category) => ({
                ...category,
                questions: category.questions.filter((q) => !query || q.q.toLowerCase().includes(query) || q.a.toLowerCase().includes(query)),
            }))
            .filter((category) => category.questions.length > 0);
    })();

    return (
        <div className="min-h-screen theme-bg">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <HelpCircle size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">FAQs</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text mb-4">
                        Frequently Asked <span className="text-orange-500">Questions</span>
                    </h1>
                    <p className="theme-text-muted max-w-2xl mx-auto text-sm sm:text-base">
                        Quick answers to common questions about docAppoint services, bookings, and more.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
                    <div className="relative">
                        <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 theme-text-muted" />
                        <input
                            type="text"
                            placeholder="Search your question..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl theme-text placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all text-lg"
                        />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['All', ...faqCategories.map((c) => c.title)].map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs border ${activeCategory === cat ? 'bg-orange-500/20 border-orange-500/40 text-orange-400' : 'border-white/10 theme-text-muted'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Categories */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {filteredCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl bg-linear-to-br ${category.color} border ${category.borderColor} backdrop-blur-sm overflow-hidden`}
                            >
                                <div className="p-6 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center shrink-0`}>
                                            <Icon size={24} className={category.iconColor} />
                                        </div>
                                        <h2 className="text-xl font-bold theme-text">{category.title}</h2>
                                    </div>
                                </div>
                                <div className="divide-y divide-white/5">
                                    {category.questions.map((item, idx) => (
                                        <details key={idx} className="group">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                                                <span className="theme-text-muted text-sm font-medium pr-4">{item.q}</span>
                                                <ChevronRight size={16} className="theme-text-muted shrink-0 group-open:rotate-90 transition-transform duration-300" />
                                            </summary>
                                            <div className="px-5 pb-5">
                                                <p className="theme-text-muted text-sm leading-relaxed">{item.a}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Still Have Questions */}
                <div className="mt-16">
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                        <div className="relative">
                            <div className="text-center max-w-2xl mx-auto">
                                <h2 className="text-2xl sm:text-3xl font-bold theme-text mb-4">
                                    Still Have Questions?
                                </h2>
                                <p className="theme-text-muted mb-8">
                                    Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 theme-text font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group"
                                    >
                                        Contact Support
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/help-center"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 theme-text-muted font-semibold hover:bg-white/5 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                                    >
                                        Visit Help Center
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-10 grid sm:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                        <Mail size={24} className="text-orange-500 mx-auto mb-3" />
                        <h3 className="theme-text font-semibold text-sm mb-1">Email Us</h3>
                        <p className="theme-text-muted text-xs">support@docappoint.com</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                        <Phone size={24} className="text-orange-500 mx-auto mb-3" />
                        <h3 className="theme-text font-semibold text-sm mb-1">Call Us</h3>
                        <p className="theme-text-muted text-xs">+880 1700-000000</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-orange-500/20 transition-all duration-300">
                        <Clock size={24} className="text-orange-500 mx-auto mb-3" />
                        <h3 className="theme-text font-semibold text-sm mb-1">Support Hours</h3>
                        <p className="theme-text-muted text-xs">24/7 Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;

