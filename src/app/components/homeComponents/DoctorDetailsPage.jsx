"use client";
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Briefcase, Clock, Phone, Award, Calendar, ArrowLeft, Stethoscope, CheckCircle, DollarSign } from 'lucide-react';
import Swal from 'sweetalert2';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import axiosInstance from '../sharedComponents/AxiosInstance/AxiosInstance';
import { doctorsData } from '@/data/doctors';
import ProtectedRoute from '../sharedComponents/ProtectedRoute/ProtectedRoute';



const DoctorDetailsPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState(null);
    const doctor = useMemo(() => doctorsData.find((doc) => doc.id === id) || null, [id]);

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
    }, []);

    const handleBookAppointment = () => {
        if (!user) {
            Swal.fire({
                title: 'Login Required',
                text: 'Please login to book an appointment',
                icon: 'warning',
                confirmButtonText: 'Login',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                background: '#0a0a0a',
                color: '#fff',
                confirmButtonColor: '#f97316',
                cancelButtonColor: '#374151',
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/auth/login');
                }
            });
            return;
        }

        Swal.fire({
            title: `<h2 class="text-white text-xl font-bold">Book Appointment</h2>`,
            html: `
                <div class="space-y-4 text-left">
                    <div>
                        <label class="block text-gray-300 text-sm font-medium mb-1.5">Doctor Name</label>
                        <input id="swal-doctor-name" value="${doctor.name}" readonly class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-not-allowed opacity-60" />
                    </div>
                    <div>
                        <label class="block text-gray-300 text-sm font-medium mb-1.5">Email Address</label>
                        <input id="swal-email" value="${user.email}" readonly class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-not-allowed opacity-60" />
                    </div>
                    <div>
                        <label class="block text-gray-300 text-sm font-medium mb-1.5">Patient Name <span class="text-red-500">*</span></label>
                        <input id="swal-patient-name" type="text" placeholder="Enter patient name" class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 transition-all" />
                    </div>
                    <div>
                        <label class="block text-gray-300 text-sm font-medium mb-1.5">Gender <span class="text-red-500">*</span></label>
                        <select id="swal-gender" class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all">
                            <option value="" class="bg-gray-900">Select Gender</option>
                            <option value="Male" class="bg-gray-900">Male</option>
                            <option value="Female" class="bg-gray-900">Female</option>
                            <option value="Other" class="bg-gray-900">Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-gray-300 text-sm font-medium mb-1.5">Phone Number <span class="text-red-500">*</span></label>
                        <input id="swal-phone" type="tel" placeholder="01XXXXXXXXX" class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 transition-all" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-gray-300 text-sm font-medium mb-1.5">Appointment Date <span class="text-red-500">*</span></label>
                            <input id="swal-date" type="date" class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all" />
                        </div>
                        <div>
                            <label class="block text-gray-300 text-sm font-medium mb-1.5">Time <span class="text-red-500">*</span></label>
                            <select id="swal-time" class="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all">
                                <option value="" class="bg-gray-900">Select Time</option>
                                ${doctor.availability.map(time => `<option value="${time}" class="bg-gray-900">${time}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: `<span class="flex items-center gap-2"><i data-lucide="calendar"></i> Confirm Booking</span>`,
            cancelButtonText: 'Cancel',
            background: '#0a0a0a',
            color: '#fff',
            customClass: {
                popup: 'rounded-2xl border border-white/10 shadow-2xl shadow-orange-500/10',
                confirmButton: 'px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25',
                cancelButton: 'px-6 py-3 bg-white/5 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300',
            },
            preConfirm: () => {
                const patientName = document.getElementById('swal-patient-name').value.trim();
                const gender = document.getElementById('swal-gender').value;
                const phone = document.getElementById('swal-phone').value.trim();
                const appointmentDate = document.getElementById('swal-date').value;
                const appointmentTime = document.getElementById('swal-time').value;

                if (!patientName) {
                    Swal.showValidationMessage('Please enter patient name');
                    return false;
                }
                if (!gender) {
                    Swal.showValidationMessage('Please select gender');
                    return false;
                }
                if (!phone) {
                    Swal.showValidationMessage('Please enter phone number');
                    return false;
                }
                if (!/^01[0-9]{9}$/.test(phone)) {
                    Swal.showValidationMessage('Please enter a valid phone number');
                    return false;
                }
                if (!appointmentDate) {
                    Swal.showValidationMessage('Please select appointment date');
                    return false;
                }
                if (!appointmentTime) {
                    Swal.showValidationMessage('Please select appointment time');
                    return false;
                }

                return {
                    userEmail: user.email,
                    doctorName: doctor.name,
                    doctorId: doctor.id,
                    patientName,
                    gender,
                    phone,
                    appointmentDate,
                    appointmentTime,
                    status: 'Pending',
                    fee: doctor.fee,
                    hospital: doctor.hospital,
                };
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosInstance.post('/appointments', result.value);
                    if (response.data.success) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Appointment booked successfully!',
                            icon: 'success',
                            background: '#0a0a0a',
                            color: '#fff',
                            confirmButtonColor: '#f97316',
                            customClass: {
                                popup: 'rounded-2xl border border-white/10',
                            }
                        });
                        toast.success('Appointment booked successfully!');
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error.response?.data?.message || 'Failed to book appointment',
                        icon: 'error',
                        background: '#0a0a0a',
                        color: '#fff',
                        confirmButtonColor: '#f97316',
                        customClass: {
                            popup: 'rounded-2xl border border-white/10',
                        }
                    });
                    toast.error('Failed to book appointment');
                }
            }
        });
    };

    if (!doctor) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <Stethoscope size={60} className="text-gray-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Doctor Not Found</h2>
                    <p className="text-gray-400 mb-6">The doctor you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/doctors" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all">
                        <ArrowLeft size={18} />
                        Back to Doctors
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-black">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

                    <Link href="/doctors" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back to Doctors</span>
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-medium mb-3">
                                            {doctor.specialty}
                                        </span>
                                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{doctor.name}</h1>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                                <span className="text-white font-bold">{doctor.rating}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">({doctor.totalReviews} reviews)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        <DollarSign size={20} className="text-orange-500" />
                                        Consultation Fee
                                    </h3>
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-orange-500">৳{doctor.fee}</p>
                                        <p className="text-gray-400 text-sm mt-1">per consultation</p>
                                    </div>
                                    <button
                                        onClick={handleBookAppointment}
                                        className="w-full px-6 py-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                                    >
                                        Book Appointment
                                    </button>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        <Calendar size={20} className="text-orange-500" />
                                        Availability
                                    </h3>
                                    <div className="space-y-2">
                                        {doctor.availability.map((slot, index) => (
                                            <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
                                                <Clock size={16} className="text-orange-500 shrink-0" />
                                                <span className="text-gray-300 text-sm">{slot}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">

                            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Award size={22} className="text-orange-500" />
                                    About Doctor
                                </h2>
                                <p className="text-gray-400 leading-relaxed">{doctor.description}</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                            <Briefcase size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Experience</p>
                                            <p className="text-white font-semibold">{doctor.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                            <MapPin size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Location</p>
                                            <p className="text-white font-semibold">{doctor.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                            <Phone size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Hospital</p>
                                            <p className="text-white font-semibold">{doctor.hospital}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                            <Star size={20} className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Rating</p>
                                            <p className="text-white font-semibold">{doctor.rating}/5.0 ({doctor.totalReviews} Reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <CheckCircle size={22} className="text-orange-500" />
                                    Why Choose {doctor.name.split(' ').slice(-1)[0]}?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        `${doctor.experience} of medical experience`,
                                        `Expert in ${doctor.specialty}`,
                                        `Practicing at ${doctor.hospital}`,
                                        'Patient-centered care approach',
                                        'Modern treatment techniques',
                                        'High patient satisfaction rate',
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle size={14} className="text-green-500" />
                                            </div>
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DoctorDetailsPage;
