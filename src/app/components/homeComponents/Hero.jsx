"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Stethoscope, CalendarCheck, ShieldCheck, Star, ChevronLeft, ChevronRight, Award, Clock, MapPin } from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hoveredStat, setHoveredStat] = useState(null);

    const slides = [
        {
            title: "Your Health, Our Priority",
            subtitle: "Expert Medical Care",
            description: "Book appointments with the best doctors across Bangladesh. Quick, easy, and hassle-free healthcare at your fingertips.",
            cta: "Find Doctors",
            link: "/doctors",
            doctorImage: "https://images.unsplash.com/photo-1683348858658-7c6b0eff2a16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            doctorName: "Dr. Ayesha Rahman",
            specialty: "Cardiologist",
            hospital: "Labaid Cardiac Hospital",
        },
        {
            title: "Skip the Waiting Room",
            subtitle: "Instant Online Booking",
            description: "Schedule your visit in just a few clicks. Choose your preferred doctor, time slot, and manage everything online.",
            cta: "Book Now",
            link: "/appointments",
            doctorImage: "https://i.postimg.cc/ryDtnzgF/portrait-friendly-male-doctor-dressed-uniform.jpg",
            doctorName: "Dr. Kamal Hossain",
            specialty: "Neurologist",
            hospital: "Square Hospital",
        },
        {
            title: "Top-Rated Specialists",
            subtitle: "Trusted Healthcare Professionals",
            description: "Connect with highly experienced and verified doctors from Dhaka's leading hospitals and clinics.",
            cta: "View Doctors",
            link: "/doctors",
            doctorImage: "https://plus.unsplash.com/premium_photo-1673953510158-174d4060db8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            doctorName: "Dr. Fatema Begum",
            specialty: "Pediatrician",
            hospital: "United Hospital",
        },
    ];

    const stats = [
        { icon: Stethoscope, value: "500+", label: "Expert Doctors", color: "from-blue-500/20 to-blue-600/5", iconColor: "text-blue-400" },
        { icon: CalendarCheck, value: "50k+", label: "Appointments", color: "from-green-500/20 to-green-600/5", iconColor: "text-green-400" },
        { icon: ShieldCheck, value: "100%", label: "Verified", color: "from-purple-500/20 to-purple-600/5", iconColor: "text-purple-400" },
        { icon: Star, value: "4.8", label: "Rating", color: "from-yellow-500/20 to-yellow-600/5", iconColor: "text-yellow-400" },
    ];

    const goToSlide = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        goToSlide(next);
    }, [currentSlide, slides.length, goToSlide]);

    const prevSlide = useCallback(() => {
        const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(prev);
    }, [currentSlide, slides.length, goToSlide]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative bg-black overflow-hidden min-h-150 lg:min-h-175 flex items-center">
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        <div className="space-y-6 sm:space-y-8">
                            <div className="relative overflow-hidden">
                                <div
                                    className="transition-all duration-500 ease-in-out"
                                    style={{
                                        opacity: isTransitioning ? 0 : 1,
                                        transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                                    }}
                                >
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                                                {slides[currentSlide].subtitle}
                                            </span>
                                            <span className="hidden sm:inline-flex items-center gap-1 text-gray-500 text-sm">
                                                <Clock size={14} className="text-orange-500" />
                                                Available 24/7
                                            </span>
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                            {slides[currentSlide].title}
                                            <span className="block text-orange-500 text-xl sm:text-2xl mt-2 font-medium">
                                                {slides[currentSlide].doctorName}
                                            </span>
                                        </h1>
                                    </div>

                                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                                        {slides[currentSlide].description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                        <Link
                                            href={slides[currentSlide].link}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 group"
                                        >
                                            {slides[currentSlide].cta}
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>

                                        <Link
                                            href="/about"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                                {stats.map((stat, idx) => {
                                    const Icon = stat.icon;
                                    const isHovered = hoveredStat === idx;
                                    return (
                                        <div
                                            key={idx}
                                            onMouseEnter={() => setHoveredStat(idx)}
                                            onMouseLeave={() => setHoveredStat(null)}
                                            className={`relative text-center p-3 sm:p-4 rounded-xl border border-white/5 backdrop-blur-sm transition-all duration-300 cursor-default overflow-hidden ${isHovered ? 'scale-105 shadow-xl' : ''
                                                }`}
                                            style={{
                                                background: isHovered
                                                    ? `linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))`
                                                    : 'rgba(255,255,255,0.03)',
                                                borderColor: isHovered ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                                                <Icon size={20} className={`mx-auto mb-2 ${stat.iconColor}`} />
                                                <p className="text-white font-bold text-lg">{stat.value}</p>
                                                <p className="text-gray-500 text-xs">{stat.label}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex items-center gap-3 pt-4">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                            ? 'w-8 h-2 bg-orange-500 shadow-lg shadow-orange-500/50'
                                            : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="relative flex items-center justify-center">
                                <div className="relative w-95 h-120">
                                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-orange-600/5 rounded-3xl border border-white/10 backdrop-blur-sm"></div>

                                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-orange-500/10 group">
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>

                                        {slides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className="absolute inset-0 transition-all duration-700 ease-in-out"
                                                style={{
                                                    opacity: index === currentSlide ? 1 : 0,
                                                    transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
                                                }}
                                            >
                                                <Image
                                                    src={slide.doctorImage}
                                                    alt={slide.doctorName}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                />
                                            </div>
                                        ))}

                                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transition-all duration-500"
                                            style={{
                                                opacity: isTransitioning ? 0 : 1,
                                                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                                            }}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award size={16} className="text-orange-500" />
                                                <span className="text-orange-400 text-xs font-medium">Top Rated Doctor</span>
                                            </div>
                                            <h3 className="text-white font-bold text-xl mb-1">
                                                {slides[currentSlide].doctorName}
                                            </h3>
                                            <p className="text-orange-400 text-sm font-medium mb-1">
                                                {slides[currentSlide].specialty}
                                            </p>
                                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                                <MapPin size={12} className="text-orange-500" />
                                                {slides[currentSlide].hospital}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-center z-20 hover:border-orange-500/30 transition-all duration-300">
                                        <div className="text-center">
                                            <p className="text-orange-500 font-bold text-lg">10+</p>
                                            <p className="text-gray-400 text-[10px]">Years Exp</p>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 w-36 p-3 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl z-20 hover:border-orange-500/30 transition-all duration-300">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-orange-400 to-orange-600 border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                                                        {String.fromCharCode(64 + i + (currentSlide * 3))}
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-white text-xs font-medium">500+</p>
                                                <p className="text-gray-400 text-[10px]">Doctors</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-2 z-20">
                                        <button
                                            onClick={prevSlide}
                                            className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 hover:scale-110"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 hover:scale-110"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;