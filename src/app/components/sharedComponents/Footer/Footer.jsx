import React from 'react';
import Link from 'next/link';
import { Stethoscope, Mail, Phone, MapPin, Heart,  } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Facebook', icon: FaFacebook, href: '#' },
        { name: 'X (Twitter)', icon: FaTwitter, href: '#' },
        { name: 'Instagram', icon: FaInstagram, href: '#' },
        { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    ];

    const footerLinks = {
        services: [
            { name: 'Find Doctors', href: '/doctors' },
            { name: 'Book Appointment', href: '/appointments' },
            { name: 'Health Packages', href: '/health-packages' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Careers', href: '/careers' },
        ],
        support: [
            { name: 'Help Center', href: '/help-center' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'FAQs', href: '/faqs' },
        ],
    };

    return (
        <footer className="relative bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                <Stethoscope className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                doc<span className="text-orange-500">Appoint</span>
                            </span>
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            Your trusted healthcare companion. Book appointments with top doctors instantly and manage your health journey seamlessly.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin size={16} className="text-orange-500 shrink-0" />
                                <span className="text-sm">Dhanmondi, Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail size={16} className="text-orange-500 shrink-0" />
                                <span className="text-sm">support@docappoint.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone size={16} className="text-orange-500 shrink-0" />
                                <span className="text-sm">+880 1700-000000</span>
                            </div>
                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        &copy; {currentYear} docAppoint.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookie" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;