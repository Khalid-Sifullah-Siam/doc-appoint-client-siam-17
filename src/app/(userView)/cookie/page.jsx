import React from 'react';
import Link from 'next/link';
import { Cookie, Shield, Settings, FileText, AlertCircle, ChevronRight, Clock, Database, Lock, Eye } from 'lucide-react';

export const metadata = {
    title: 'Cookie Policy | docAppoint - How We Use Cookies',
    description: 'Learn about how docAppoint uses cookies and similar technologies to enhance your experience. Understand cookie types, purposes, and how to manage your preferences.',
    keywords: 'cookie policy, cookies, tracking technologies, browser cookies, data privacy, docAppoint, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'Cookie Policy | docAppoint',
        description: 'How we use cookies to improve your healthcare booking experience.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const Cookies = () => {
    const cookieTypes = [
        {
            icon: Shield,
            title: 'Essential Cookies',
            color: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            description: 'These cookies are necessary for the platform to function properly. They enable core features like authentication, security, and session management.',
            examples: [
                'Session cookies for keeping you logged in',
                'Security tokens to prevent fraud',
                'Load balancing cookies',
            ],
        },
        {
            icon: Eye,
            title: 'Analytics Cookies',
            color: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/20',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400',
            description: 'These cookies help us understand how visitors interact with our platform. We use this data to improve user experience and platform performance.',
            examples: [
                'Page visit statistics',
                'Time spent on pages',
                'Feature usage patterns',
            ],
        },
        {
            icon: Settings,
            title: 'Preference Cookies',
            color: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            description: 'These cookies remember your settings and preferences to provide a more personalized experience during future visits.',
            examples: [
                'Language preferences',
                'Theme settings (light/dark)',
                'Recently viewed doctors',
            ],
        },
        {
            icon: Database,
            title: 'Third-Party Cookies',
            color: 'from-orange-500/20 to-orange-600/5',
            borderColor: 'border-orange-500/20',
            iconBg: 'bg-orange-500/10',
            iconColor: 'text-orange-400',
            description: 'Some cookies are set by third-party services we use, such as Google Analytics and social media integrations.',
            examples: [
                'Google Analytics tracking',
                'Social media share buttons',
                'Payment gateway sessions',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-black">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <Cookie size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Cookie <span className="text-orange-500">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Last updated: May 20, 2026
                    </p>
                </div>

                {/* Intro */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                    <div className="flex items-start gap-3">
                        <AlertCircle size={20} className="text-orange-500 shrink-0 mt-1" />
                        <div>
                            <h2 className="text-white font-bold text-lg mb-2">What Are Cookies?</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Cookies are small text files stored on your device when you visit a website. They help the website
                                remember your preferences, keep you logged in, and provide a better browsing experience.
                                This policy explains how <strong className="text-white">docAppoint</strong> uses cookies and
                                similar tracking technologies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cookie Types */}
                <div className="space-y-6 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                    {cookieTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <div
                                key={index}
                                className={`p-6 sm:p-8 rounded-2xl bg-linear-to-br ${type.color} border ${type.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${type.iconBg} flex items-center justify-center shrink-0`}>
                                        <Icon size={24} className={type.iconColor} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {type.description}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-500 text-xs font-medium uppercase">Examples:</p>
                                    {type.examples.map((example, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Cookie size={12} className="text-orange-500 shrink-0" />
                                            <span>{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* How to Manage */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:border-orange-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <Settings size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">How to Manage Cookies</h2>
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                        <p>
                            You can control and manage cookies in several ways. Please note that disabling certain cookies
                            may affect your experience on our platform.
                        </p>

                        <div className="space-y-3 mt-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="text-white font-semibold text-sm mb-2">Browser Settings</h3>
                                <p>
                                    All major browsers allow you to block or delete cookies through their settings.
                                    Here are quick links for popular browsers:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-2 mt-2">
                                    {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map((browser, idx) => (
                                        <span key={idx} className="text-orange-400 text-xs">• {browser}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="text-white font-semibold text-sm mb-2">Our Cookie Banner</h3>
                                <p>
                                    When you first visit docAppoint, you&apos;ll see a cookie consent banner.
                                    You can accept all cookies or customize your preferences at any time.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="text-white font-semibold text-sm mb-2">Opt-Out Tools</h3>
                                <p>
                                    For analytics cookies, you can opt out using Google Analytics Opt-out Browser Add-on
                                    and other industry-standard tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cookie Duration */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:border-orange-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <Clock size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Cookie Duration</h2>
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                        <p>Cookies can remain on your device for different periods depending on their type:</p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-3">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="text-white font-semibold text-sm mb-1">Session Cookies</h3>
                                <p className="text-xs">Temporary cookies that are deleted when you close your browser. Used for login sessions and form submissions.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="text-white font-semibold text-sm mb-1">Persistent Cookies</h3>
                                <p className="text-xs">Remain on your device for a set period (days to years). Used for preferences, analytics, and authentication.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Updates */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:border-orange-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <FileText size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Updates to This Policy</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We may update this Cookie Policy from time to time to reflect changes in technology,
                        law, or our business operations. We will notify you of any material changes by posting
                        the new policy on this page and updating the &quot;Last updated&quot; date.
                    </p>
                </div>

                {/* Contact */}
                <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <Lock size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Questions About Cookies?</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        If you have questions about our use of cookies, please contact our privacy team:
                    </p>
                    <div className="space-y-2 text-sm">
                        <p className="text-gray-300">
                            <strong className="text-white">Email:</strong> privacy@docappoint.com
                        </p>
                        <p className="text-gray-300">
                            <strong className="text-white">Phone:</strong> +880 1700-000000
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Link
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-1"
                    >
                        ← Privacy Policy
                    </Link>
                    <Link
                        href="/terms-and-conditions"
                        className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium flex items-center gap-1 group"
                    >
                        Terms & Conditions
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cookies;