import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Stethoscope, MessageSquare, HelpCircle, FileText } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | docAppoint - Get in Touch',
    description: 'Have questions about doctor appointments, health packages, or our services? Contact docAppoint support team. We are available 24/7 to help you with your healthcare needs.',
    keywords: 'contact docAppoint, healthcare support, doctor booking help, medical appointment support, Bangladesh healthcare contact, customer service',
    robots: 'index, follow',
    openGraph: {
        title: 'Contact Us | docAppoint - Get in Touch',
        description: 'Get in touch with docAppoint for any healthcare booking queries. 24/7 customer support available.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: 'Our Location',
            details: ['House 12, Road 5', 'Dhanmondi, Dhaka 1205', 'Bangladesh'],
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
        },
        {
            icon: Phone,
            title: 'Phone Number',
            details: ['+880 1700-000000', '+880 1800-000000'],
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
        },
        {
            icon: Mail,
            title: 'Email Address',
            details: ['support@docappoint.com', 'info@docappoint.com'],
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
        },
        {
            icon: Clock,
            title: 'Working Hours',
            details: ['24/7 Customer Support', 'Sat-Thu: 8AM - 10PM', 'Friday: 10AM - 6PM'],
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
        },
    ];

    const faqs = [
        {
            icon: HelpCircle,
            question: 'How do I book an appointment?',
            answer: 'Simply browse our doctors page, choose your preferred doctor, select a time slot, and confirm your booking. You\'ll receive an instant confirmation.',
        },
        {
            icon: MessageSquare,
            question: 'Can I cancel or reschedule?',
            answer: 'Yes, you can easily cancel or reschedule your appointment from your dashboard up to 2 hours before the scheduled time.',
        },
        {
            icon: FileText,
            question: 'Is my medical information safe?',
            answer: 'Absolutely. We use end-to-end encryption and follow strict data protection guidelines. Your medical data is never shared without your consent.',
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
                        <MessageSquare size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Get in Touch</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Contact <span className="text-orange-500">Us</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Have questions or need help? We&apos;re here for you. Reach out to our support team anytime.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Send size={20} className="text-orange-500" />
                                Send Us a Message
                            </h2>
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-1.5">Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Subject <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="What is this about?"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        rows={5}
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 group"
                                >
                                    <Send size={18} />
                                    Send Message
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl bg-linear-to-br ${info.color} border ${info.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                                >
                                    <div className={`w-10 h-10 rounded-xl ${info.iconBg} flex items-center justify-center mb-4`}>
                                        <Icon size={20} className={info.iconColor} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-3">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            );
                        })}

                        {/* Quick Help */}
                        <div className="p-6 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                    <Stethoscope size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Need Urgent Help?</h3>
                                    <p className="text-gray-400 text-xs">We&apos;re available 24/7</p>
                                </div>
                            </div>
                            <Link
                                href="/doctors"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-all"
                            >
                                Book Appointment Now
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 sm:mt-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Frequently Asked <span className="text-orange-500">Questions</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            Quick answers to common questions about our services.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faqs.map((faq, index) => {
                            const Icon = faq.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                                        <Icon size={20} className="text-orange-500" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-16 sm:mt-20">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                        <MapPin size={40} className="text-orange-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-white mb-2">Visit Our Office</h2>
                        <p className="text-gray-400 text-sm mb-6">
                            House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh
                        </p>
                        <div className="h-64 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">Map Integration Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;