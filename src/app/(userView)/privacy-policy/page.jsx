import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Calendar, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | docAppoint - Your Data Protection',
    description: 'Read docAppoint privacy policy. Learn how we collect, use, and protect your personal and medical information when you use our doctor appointment booking platform.',
    keywords: 'privacy policy, data protection, medical data privacy, personal information, healthcare privacy, Bangladesh, docAppoint',
    robots: 'index, follow',
    openGraph: {
        title: 'Privacy Policy | docAppoint',
        description: 'How we protect your personal and medical data at docAppoint.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: FileText,
            title: 'Information We Collect',
            content: `When you use docAppoint, we collect the following types of information:
            <br/><br/>
            <strong>Personal Information:</strong> Name, email address, phone number, date of birth, and gender that you provide when creating an account or booking an appointment.
            <br/><br/>
            <strong>Medical Information:</strong> Doctor consultation details, appointment history, prescriptions, and any medical notes you choose to share.
            <br/><br/>
            <strong>Technical Information:</strong> IP address, browser type, device information, and usage patterns when you access our platform.`,
        },
        {
            icon: Lock,
            title: 'How We Use Your Data',
            content: `We use your information for the following purposes:
            <br/><br/>
            • To process and manage your doctor appointments and bookings.
            <br/>• To send appointment confirmations, reminders, and follow-up notifications.
            <br/>• To improve our platform and provide better healthcare services.
            <br/>• To communicate important updates about our services.
            <br/>• To comply with legal obligations and prevent fraud.
            <br/><br/>
            We <strong>do not</strong> sell your personal or medical data to third parties.`,
        },
        {
            icon: Shield,
            title: 'Data Security',
            content: `We implement industry-standard security measures to protect your data:
            <br/><br/>
            • <strong>Encryption:</strong> All data is encrypted using SSL/TLS protocols during transmission and AES-256 encryption at rest.
            <br/>• <strong>Access Control:</strong> Only authorized personnel have access to personal data, and access is strictly monitored.
            <br/>• <strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments.
            <br/>• <strong>Secure Servers:</strong> Our data is stored on secure servers located in Bangladesh.
            <br/><br/>
            While we strive to protect your information, no method of electronic storage is 100% secure.`,
        },
        {
            icon: Eye,
            title: 'Data Sharing & Disclosure',
            content: `We may share your information in the following circumstances:
            <br/><br/>
            • <strong>With Doctors:</strong> Your basic information (name, age, gender) is shared with the doctor you book an appointment with.
            <br/>• <strong>Service Providers:</strong> Third-party services that help us operate (email service, hosting, analytics).
            <br/>• <strong>Legal Requirements:</strong> When required by law, court order, or government regulation.
            <br/>• <strong>With Your Consent:</strong> We may share information for purposes not listed here with your explicit consent.`,
        },
        {
            icon: Calendar,
            title: 'Data Retention',
            content: `We retain your information for as long as necessary:
            <br/><br/>
            • <strong>Account Information:</strong> Retained until you delete your account or request removal.
            <br/>• <strong>Appointment Records:</strong> Retained for 7 years as required by medical record regulations.
            <br/>• <strong>Technical Data:</strong> Retained for up to 2 years for analytics purposes.
            <br/><br/>
            You can request deletion of your data at any time by contacting our support team.`,
        },
        {
            icon: Shield,
            title: 'Your Rights',
            content: `Under applicable data protection laws, you have the following rights:
            <br/><br/>
            • <strong>Access:</strong> Request a copy of your personal data we hold.
            <br/>• <strong>Rectification:</strong> Correct any inaccurate or incomplete information.
            <br/>• <strong>Erasure:</strong> Request deletion of your personal data.
            <br/>• <strong>Portability:</strong> Receive your data in a structured, machine-readable format.
            <br/>• <strong>Objection:</strong> Object to processing of your data in certain circumstances.
            <br/><br/>
            To exercise these rights, contact us at <strong>privacy@docappoint.com</strong>.`,
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
                        <Shield size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Privacy <span className="text-orange-500">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Last updated: May 20, 2026
                    </p>
                </div>

                {/* Intro */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                    <p className="text-gray-400 leading-relaxed">
                        At <strong className="text-white">docAppoint</strong>, we take your privacy seriously. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your information when you use our platform.
                        By using docAppoint, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                                        <Icon size={20} className="text-orange-500" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                                </div>
                                <div
                                    className="text-gray-400 text-sm leading-relaxed space-y-2"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Cookies Section */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <FileText size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Cookies Policy</h2>
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience on our platform.
                        </p>
                        <p><strong className="text-white">Essential Cookies:</strong> Required for the platform to function properly (authentication, security).</p>
                        <p><strong className="text-white">Analytics Cookies:</strong> Help us understand how you use the platform so we can improve it.</p>
                        <p><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences for future visits.</p>
                        <p>You can control cookie preferences through your browser settings. Disabling cookies may affect platform functionality.</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <Shield size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Contact Our Privacy Team</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or want to exercise your data rights,
                        please contact our Data Protection Officer:
                    </p>
                    <div className="space-y-2 text-sm">
                        <p className="text-gray-300">
                            <strong className="text-white">Email:</strong> privacy@docappoint.com
                        </p>
                        <p className="text-gray-300">
                            <strong className="text-white">Phone:</strong> +880 1700-000000
                        </p>
                        <p className="text-gray-300">
                            <strong className="text-white">Address:</strong> House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Link
                        href="/terms-of-service"
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-1"
                    >
                        ← Terms of Service
                    </Link>
                    <Link
                        href="/help-center"
                        className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium flex items-center gap-1 group"
                    >
                        Visit Help Center
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;