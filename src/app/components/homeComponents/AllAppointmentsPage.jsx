"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, Star, MapPin, Briefcase, Clock, ArrowRight, Stethoscope, Calendar, Filter, ChevronDown } from 'lucide-react';
import { doctorsData } from '@/data/doctors';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import Loading from '@/app/loading';

const AllAppointmentsPage = () => {
    const router = useRouter();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('All');
    const [hospitalFilter, setHospitalFilter] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);

    const specialties = ['All', ...new Set(doctorsData.map(doc => doc.specialty))];
    const hospitals = ['All', ...new Set(doctorsData.map(doc => doc.hospital))];

    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.user) setUser(data.user);
            } catch (error) {
                console.error('Session check failed:', error);
            }
        };
        checkUser();

        const tryFetch = () => {

            setDoctors(doctorsData);
            setFilteredDoctors(doctorsData);
            setLoading(false);
        }
        tryFetch();
    }, []);

    useEffect(() => {
        let result = [...doctors];

        if (searchTerm) {
            result = result.filter(doc =>
                doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.hospital.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (specialtyFilter !== 'All') {
            result = result.filter(doc => doc.specialty === specialtyFilter);
        }
        if (hospitalFilter !== 'All') {
            result = result.filter(doc => doc.hospital === hospitalFilter);
        }

        
        switch (sortBy) {
            case 'fee_asc':
                result.sort((a, b) => a.fee - b.fee);
                break;
            case 'fee_desc':
                result.sort((a, b) => b.fee - a.fee);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'experience':
                result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
                break;
            default:
                break;
        }

        const tryFetch = () => {

            setFilteredDoctors(result);
        }
        tryFetch();
    }, [searchTerm, specialtyFilter, hospitalFilter, sortBy, doctors]);

    const handleViewDetails = (doctorId) => {
        if (!user) {
            toast.error('Please login to view doctor details');
            router.push(`/auth/login?redirect=${encodeURIComponent(`/doctors/${doctorId}`)}`);
        } else {
            router.push(`/doctors/${doctorId}`);
        }
    };

    const handleBookNow = (doctorId) => {
        if (!user) {
            toast.error('Please login to book appointment');
            router.push(`/auth/login?redirect=${encodeURIComponent(`/doctors/${doctorId}`)}`);
        } else {
            router.push(`/appointments/${doctorId}`);
        }
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <Calendar size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Available Appointments</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Book Your <span className="text-orange-500">Appointment</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Find and book appointments with the best doctors across Bangladesh. Quick, easy, and hassle-free.
                    </p>
                </div>

                {/* Search & Filter Section */}
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by doctor name, specialty or hospital..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border transition-all duration-300 sm:w-auto ${showFilters
                                ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-orange-500/30'
                                }`}
                        >
                            <Filter size={18} />
                            <span className="font-medium">Filters</span>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {showFilters && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Specialty</label>
                                <select
                                    value={specialtyFilter}
                                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                                >
                                    {specialties.map((specialty, index) => (
                                        <option key={index} value={specialty} className="bg-gray-900">
                                            {specialty}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Hospital</label>
                                <select
                                    value={hospitalFilter}
                                    onChange={(e) => setHospitalFilter(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                                >
                                    {hospitals.map((hospital, index) => (
                                        <option key={index} value={hospital} className="bg-gray-900">
                                            {hospital}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                                >
                                    <option value="default" className="bg-gray-900">Default</option>
                                    <option value="fee_asc" className="bg-gray-900">Fee: Low to High</option>
                                    <option value="fee_desc" className="bg-gray-900">Fee: High to Low</option>
                                    <option value="rating" className="bg-gray-900">Highest Rated</option>
                                    <option value="experience" className="bg-gray-900">Most Experienced</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-400 text-sm">
                        Showing <span className="text-white font-semibold">{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Doctors Grid */}
                {filteredDoctors.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredDoctors.map((doctor) => (
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

                                        <button
                                            onClick={() => handleBookNow(doctor.id)}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 group/btn"
                                        >
                                            View Details
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Stethoscope size={60} className="text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No Doctors Found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSpecialtyFilter('All');
                                setHospitalFilter('All');
                                setSortBy('default');
                            }}
                            className="mt-4 px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-medium hover:bg-orange-500/20 transition-all"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllAppointmentsPage;
