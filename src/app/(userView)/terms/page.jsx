import React from 'react';
import Link from 'next/link';
import { FileText, Shield, AlertCircle, Users, CreditCard, Ban, Scale, ChevronRight, Calendar, Stethoscope, Phone } from 'lucide-react';

export const metadata = {
    title: 'Terms & Conditions | docAppoint - Service Agreement',
    description: 'Read docAppoint terms and conditions. Understand the rules, responsibilities, and guidelines for using our doctor appointment booking platform in Bangladesh.',
    keywords: 'terms and conditions, terms of service, service agreement, user agreement, docAppoint terms, healthcare booking rules, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'Terms & Conditions | docAppoint',
        description: 'Terms and conditions for using the docAppoint healthcare booking platform.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

const TermsAndConditions = () => {
    const sections = [
        {
            icon: FileText,
            title: 'Acceptance of Terms',
            content: `By accessing and using <strong class="text-white">docAppoint</strong> ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            <br/><br/>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform after changes constitutes acceptance of the modified terms.`,
        },
        {
            icon: Users,
            title: 'User Accounts & Responsibilities',
            content: `When you create an account with docAppoint, you agree to:
            <br/><br/>
            • Provide accurate, current, and complete registration information.
            <br/>• Maintain and update your account information promptly.
            <br/>• Keep your password confidential and secure.
            <br/>• Accept responsibility for all activities under your account.
            <br/>• Notify us immediately of any unauthorized account use.
            <br/><br/>
            You must be at least <strong class="text-white">18 years old</strong> to create an account. Accounts for minors must be created and managed by a parent or legal guardian.`,
        },
        {
            icon: Stethoscope,
            title: 'Medical Disclaimer',
            content: `<strong class="text-white">Important:</strong> docAppoint is a booking platform only. We do not provide medical advice, diagnosis, or treatment.
            <br/><br/>
            • The information on this platform is for general informational purposes only.
            <br/>• Doctor profiles and information are provided by the doctors themselves.
            <br/>• Always consult with a qualified healthcare professional for medical concerns.
            <br/>• In case of emergency, call 999 or visit the nearest hospital immediately.
            <br/><br/>
            docAppoint is not liable for any medical outcomes, misdiagnosis, or treatment received from doctors booked through our platform.`,
        },
        {
            icon: Calendar,
            title: 'Appointment Booking & Cancellation',
            content: `By booking an appointment through docAppoint, you agree to:
            <br/><br/>
            • <strong class="text-white">Show up on time:</strong> Arrive at least 10 minutes before your scheduled appointment.
            <br/>• <strong class="text-white">Cancellation:</strong> Cancel or reschedule at least 2 hours before the appointment time.
            <br/>• <strong class="text-white">No-show Policy:</strong> Repeated no-shows may result in account suspension.
            <br/>• <strong class="text-white">Fees:</strong> Consultation fees displayed are set by the doctors/hospitals.
            <br/><br/>
            docAppoint reserves the right to cancel appointments in case of doctor unavailability and will notify you promptly.`,
        },
        {
            icon: CreditCard,
            title: 'Payments & Refunds',
            content: `Our payment and refund policies are as follows:
            <br/><br/>
            • Consultation fees are determined solely by the doctors or their affiliated hospitals.
            <br/>• docAppoint does not charge any platform or service fee to patients.
            <br/>• Payments are processed securely through our payment partners.
            <br/>• Refund requests must be submitted within 24 hours of payment.
            <br/>• Refunds for missed appointments are subject to the doctor's discretion.
            <br/><br/>
            We are not responsible for any additional charges by your bank or payment provider.`,
        },
        {
            icon: Shield,
            title: 'Intellectual Property',
            content: `All content on the docAppoint platform is protected by copyright and intellectual property laws:
            <br/><br/>
            • The docAppoint name, logo, and branding are our trademarks.
            <br/>• Platform code, design, and functionality are proprietary.
            <br/>• Doctor profiles and images are used with permission.
            <br/>• You may not copy, reproduce, or distribute any platform content without permission.
            <br/><br/>
            User-generated content (reviews, ratings) grants us a non-exclusive license to display on the platform.`,
        },
        {
            icon: Ban,
            title: 'Prohibited Activities',
            content: `Users are strictly prohibited from:
            <br/><br/>
            • Using the platform for any illegal or unauthorized purpose.
            <br/>• Creating fake accounts or impersonating others.
            <br/>• Harassing, abusing, or harming doctors or other users.
            <br/>• Posting false, misleading, or defamatory reviews.
            <br/>• Attempting to hack, disrupt, or compromise platform security.
            <br/>• Scraping or extracting data without written permission.
            <br/>• Using automated bots or scripts to access the platform.
            <br/><br/>
            Violation may result in immediate account termination and legal action.`,
        },
        {
            icon: AlertCircle,
            title: 'Limitation of Liability',
            content: `To the fullest extent permitted by law:
            <br/><br/>
            • docAppoint is provided "as is" without warranties of any kind.
            <br/>• We are not liable for any direct, indirect, incidental, or consequential damages.
            <br/>• We do not guarantee uninterrupted or error-free service.
            <br/>• We are not responsible for the quality of medical services provided by doctors.
            <br/>• Our total liability is limited to the amount paid for the specific service.
            <br/><br/>
            This limitation applies to all claims regardless of legal theory.`,
        },
        {
            icon: Scale,
            title: 'Governing Law & Disputes',
            content: `These Terms and Conditions are governed by the laws of Bangladesh:
            <br/><br/>
            • Any disputes shall be resolved through arbitration in Dhaka, Bangladesh.
            <br/>• The arbitration shall be conducted in Bengali or English language.
            <br/>• The decision of the arbitrator shall be final and binding.
            <br/>• You waive any right to participate in a class action lawsuit.
            <br/><br/>
            For any legal inquiries, contact our legal team at <strong class="text-white">legal@docappoint.com</strong>.`,
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
                        <Scale size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Terms & <span className="text-orange-500">Conditions</span>
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
                            <h2 className="text-white font-bold text-lg mb-2">Please Read Carefully</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                These Terms and Conditions constitute a legally binding agreement between you and
                                <strong className="text-white"> docAppoint</strong>. By using our platform,
                                you acknowledge that you have read, understood, and agree to be bound by these terms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Terms Sections */}
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
                                    <h2 className="text-xl font-bold text-white">
                                        {index + 1}. {section.title}
                                    </h2>
                                </div>
                                <div
                                    className="text-gray-400 text-sm leading-relaxed space-y-2"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Termination Section */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                            <Ban size={20} className="text-red-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white">10. Account Termination</h2>
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                        <p>
                            We reserve the right to suspend or terminate your account at any time, without prior notice, if:
                        </p>
                        <p>• You violate these Terms and Conditions.</p>
                        <p>• You engage in fraudulent or illegal activities.</p>
                        <p>• Your account remains inactive for more than 12 months.</p>
                        <p>• We receive multiple complaints about your behavior.</p>
                        <p className="mt-3">
                            Upon termination, your right to use the platform ceases immediately. You may request account deletion
                            at any time by contacting our support team.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                            <Phone size={20} className="text-orange-500" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Questions About These Terms?</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        If you have any questions about these Terms and Conditions, please contact our legal team:
                    </p>
                    <div className="space-y-2 text-sm">
                        <p className="text-gray-300">
                            <strong className="text-white">Email:</strong> legal@docappoint.com
                        </p>
                        <p className="text-gray-300">
                            <strong className="text-white">Phone:</strong> +880 1700-000000
                        </p>
                        <p className="text-gray-300">
                            <strong className="text-white">Address:</strong> House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Acceptance */}
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <p className="text-gray-400 text-sm">
                        By using docAppoint, you acknowledge that you have read and agree to these
                        <strong className="text-white"> Terms and Conditions</strong> and our
                        <Link href="/privacy-policy" className="text-orange-500 hover:text-orange-400 transition-colors ml-1">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                {/* Navigation */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Link
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-1"
                    >
                        ← Privacy Policy
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

export default TermsAndConditions;