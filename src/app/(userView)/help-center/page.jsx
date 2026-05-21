import React from 'react';
import Link from 'next/link';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, ChevronRight, ArrowRight, FileText, Shield, CreditCard, UserCheck, Stethoscope, Calendar } from 'lucide-react';

export const metadata = {
    title: 'Help Center | docAppoint - Support & FAQs',
    description: 'Get help with docAppoint services. Find answers to common questions about doctor appointments, bookings, payments, and account management.',
    keywords: 'help center, support, FAQs, doctor appointment help, booking support, healthcare assistance, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'Help Center | docAppoint - Support & FAQs',
        description: 'Find answers and support for all your healthcare booking needs.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const HelpCenter = () => {
    const helpCategories = [
        {
            icon: Calendar,
            title: 'Booking & Appointments',
            description: 'Learn how to book, reschedule, or cancel appointments',
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            articles: [
                'How to book an appointment?',
                'How to reschedule my appointment?',
                'How to cancel my booking?',
                'What if doctor is unavailable?',
            ],
        },
        {
            icon: CreditCard,
            title: 'Payments & Fees',
            description: 'Information about consultation fees and payment methods',
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
            articles: [
                'What are the consultation fees?',
                'How to pay for appointment?',
                'Is there any refund policy?',
                'Do you accept insurance?',
            ],
        },
        {
            icon: UserCheck,
            title: 'Account & Profile',
            description: 'Manage your account settings and personal information',
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            articles: [
                'How to create an account?',
                'How to update my profile?',
                'How to change password?',
                'How to delete my account?',
            ],
        },
        {
            icon: Shield,
            title: 'Privacy & Security',
            description: 'How we protect your personal and medical information',
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
            articles: [
                'Is my medical data safe?',
                'Who can see my information?',
                'Data protection policy',
                'GDPR compliance',
            ],
        },
        {
            icon: Stethoscope,
            title: 'Doctors & Specialists',
            description: 'Information about our verified doctors and their credentials',
            color: 'from-red-500/20 to-red-600/5',
            borderColor: 'border-red-500/20',
            iconBg: 'bg-red-500/10',
            iconColor: 'text-red-400',
            articles: [
                'Are all doctors verified?',
                'How to choose a doctor?',
                'Doctor ratings explained',
                'Specialist vs General Physician',
            ],
        },
        {
            icon: FileText,
            title: 'Policies & Terms',
            description: 'Our terms of service and important policies',
            color: 'from-yellow-500/20 to-yellow-600/5',
            borderColor: 'border-yellow-500/20',
            iconBg: 'bg-yellow-500/10',
            iconColor: 'text-yellow-400',
            articles: [
                'Terms of Service',
                'Privacy Policy',
                'Cancellation Policy',
                'Cookie Policy',
            ],
        },
    ];

    const faqs = [
        {
            question: 'How do I book a doctor appointment?',
            answer: 'Simply browse our doctors page, select your preferred doctor, choose an available time slot, fill in your details, and confirm your booking. You\'ll receive instant confirmation via email.',
        },
        {
            question: 'Can I cancel or reschedule my appointment?',
            answer: 'Yes, you can cancel or reschedule your appointment from your dashboard up to 2 hours before the scheduled time. Go to My Bookings, find the appointment, and click Update or Delete.',
        },
        {
            question: 'How do I know if a doctor is available?',
            answer: 'Each doctor\'s profile shows their available time slots. You can select from the listed availability. If a slot is not shown, it means it\'s already booked.',
        },
        {
            question: 'Are the doctors on docAppoint verified?',
            answer: 'Absolutely! All doctors on our platform are verified with valid medical licenses and credentials. We conduct thorough background checks before listing any doctor.',
        },
        {
            question: 'How much does it cost to use docAppoint?',
            answer: 'docAppoint is completely free for patients. You only pay the doctor\'s consultation fee, which is clearly displayed on each doctor\'s profile. There are no hidden charges.',
        },
        {
            question: 'Is my medical information kept private?',
            answer: 'Yes, we take data privacy very seriously. All your information is encrypted and stored securely. We never share your medical data without your explicit consent.',
        },
    ];

    return (
        <div className="min-h-screen bg-black">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <HelpCircle size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Help Center</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        How Can We <span className="text-orange-500">Help You?</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Find answers to common questions and get support for all your healthcare booking needs.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
                    <div className="relative">
                        <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for help articles..."
                            className="w-full pl-14 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all text-lg"
                        />
                    </div>
                </div>

                {/* Help Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {helpCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className={`relative group rounded-2xl bg-linear-to-br ${category.color} border ${category.borderColor} backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={24} className={category.iconColor} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{category.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                                <ul className="space-y-2">
                                    {category.articles.slice(0, 3).map((article, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href="#"
                                                className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                                                {article}
                                            </Link>
                                        </li>
                                    ))}
                                    {category.articles.length > 3 && (
                                        <li>
                                            <Link
                                                href="#"
                                                className="text-orange-500 text-sm font-medium hover:text-orange-400 transition-colors flex items-center gap-1"
                                            >
                                                View all ({category.articles.length})
                                                <ChevronRight size={14} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* FAQs Section */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                            <MessageCircle size={16} className="text-orange-500" />
                            <span className="text-orange-400 text-sm font-medium">FAQs</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Frequently Asked <span className="text-orange-500">Questions</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-orange-500/20"
                            >
                                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none">
                                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                                    <ChevronRight size={18} className="text-gray-400 shrink-0 group-open:rotate-90 transition-transform duration-300" />
                                </summary>
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Still Need Help */}
                <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                            <BookOpen size={26} className="text-orange-500" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Documentation</h3>
                        <p className="text-gray-400 text-sm mb-4">Detailed guides and tutorials</p>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors group"
                        >
                            Browse Docs
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="p-6 rounded-2xl bg-linear-to-br from-green-500/10 to-green-600/5 border border-green-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                            <MessageCircle size={26} className="text-green-400" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Live Chat</h3>
                        <p className="text-gray-400 text-sm mb-4">Chat with our support team</p>
                        <button className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm font-medium transition-colors group">
                            Start Chat
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="p-6 rounded-2xl bg-linear-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                            <Phone size={26} className="text-purple-400" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                        <p className="text-gray-400 text-sm mb-4">+880 1700-000000</p>
                        <Link
                            href="tel:+8801700000000"
                            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors group"
                        >
                            Call Now
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;