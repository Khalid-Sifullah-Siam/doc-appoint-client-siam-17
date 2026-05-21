"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Briefcase, Clock, ArrowRight, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { doctorsData } from '@/data/doctors';


const DoctorsPage = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 6;

    let displayDoctors = doctorsData;

    if (isHomePage) {
        displayDoctors = [...doctorsData]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
    }

    const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);
    const startIndex = (currentPage - 1) * doctorsPerPage;
    const paginatedDoctors = doctorsData.slice(startIndex, startIndex + doctorsPerPage);

    const finalDoctors = isHomePage ? displayDoctors : paginatedDoctors;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="relative bg-black py-12 sm:py-16 lg:py-20">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {!isHomePage && (
                    <div className="text-center mb-10 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                            <Stethoscope size={16} className="text-orange-500" />
                            <span className="text-orange-400 text-sm font-medium">Our Doctors</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                            Expert <span className="text-orange-500">Medical Professionals</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Connect with top-rated specialists from Bangladesh&apos;s leading hospitals. Quality healthcare starts with the right doctor.
                        </p>
                    </div>
                )}

                {isHomePage && (
                    <div className="text-center mb-10 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                            <Star size={16} className="text-orange-500 fill-orange-500" />
                            <span className="text-orange-400 text-sm font-medium">Top Rated</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                            Top Rated <span className="text-orange-500">Doctors</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Our highest-rated medical professionals trusted by thousands of patients across Bangladesh.
                        </p>
                    </div>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {finalDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white/8"
                        >
                            <div className="absolute top-3 right-3 z-10">
                                <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-xl border border-white/10">
                                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-white text-sm font-bold">{doctor.rating}</span>
                                    <span className="text-gray-400 text-xs">({doctor.totalReviews})</span>
                                </div>
                            </div>


                            <div className="relative h-56 sm:h-60 overflow-hidden">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-medium mb-2">
                                        {doctor.specialty}
                                    </span>
                                    <h3 className="text-white font-bold text-xl mb-1">{doctor.name}</h3>
                                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                                        <MapPin size={14} className="text-orange-500" />
                                        {doctor.hospital}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Briefcase size={16} className="text-orange-500 shrink-0" />
                                        <span>{doctor.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Clock size={16} className="text-orange-500 shrink-0" />
                                        <span className="truncate">{doctor.availability[0].split(' - ')[0]}</span>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {doctor.description}
                                </p>

                                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                    <div>
                                        <p className="text-orange-500 font-bold text-xl">৳{doctor.fee}</p>
                                        <p className="text-gray-500 text-xs">per consultation</p>
                                    </div>

                                    <Link
                                        href={`/doctor/${doctor.id}`}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group/link"
                                    >
                                        View Details
                                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!isHomePage && totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-xl font-medium text-sm transition-all duration-300 ${currentPage === page
                                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/30'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {isHomePage && (
                    <div className="text-center mt-10">
                        <Link
                            href="/doctors"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500/50 text-orange-400 font-semibold hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 group"
                        >
                            View All Doctors
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DoctorsPage;