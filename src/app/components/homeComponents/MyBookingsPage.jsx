"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Calendar, Clock,  Phone, User, Trash2, Edit, X, ChevronRight, Stethoscope,  } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import axiosInstance from '../sharedComponents/AxiosInstance/AxiosInstance';
import ProtectedRoute from '../sharedComponents/ProtectedRoute/ProtectedRoute';
import Loading from '@/app/loading';


const MyBookingsPage = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBooking, setEditingBooking] = useState(null);
    const [formData, setFormData] = useState({
        patientName: '',
        gender: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: '',
    });
    const [saving, setSaving] = useState(false);

    async function fetchBookings(email) {
        try {
            const response = await axiosInstance.get(`/appointments?userEmail=${email}`);
            if (response.data.success) {
                setBookings(response.data.data);
            }
        } catch (error) {
            console.error('Failed to fetch bookings:', error);
            toast.error('Failed to load bookings');
        }
    }

    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.user) {
                    setUser(data.user);
                    fetchBookings(data.user.email);
                }
            } catch (error) {
                console.error('Session check failed:', error);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const handleEdit = (booking) => {
        setEditingBooking(booking);
        setFormData({
            patientName: booking.patientName || '',
            gender: booking.gender || '',
            phone: booking.phone || '',
            appointmentDate: booking.appointmentDate || '',
            appointmentTime: booking.appointmentTime || '',
        });
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        if (!formData.patientName || !formData.gender || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
            toast.error('Please fill all required fields');
            return;
        }

        if (!/^01[0-9]{9}$/.test(formData.phone)) {
            toast.error('Please enter a valid phone number');
            return;
        }

        setSaving(true);
        try {
            const response = await axiosInstance.put(`/appointments/${editingBooking._id}`, formData);
            if (response.data.success) {
                setBookings(prev => 
                    prev.map(booking => 
                        booking._id === editingBooking._id ? { ...booking, ...formData } : booking
                    )
                );
                toast.success('Appointment updated successfully!');
                setShowModal(false);
                setEditingBooking(null);
            }
        } catch (error) {
            console.error('Failed to update booking:', error);
            toast.error(error.response?.data?.message || 'Failed to update appointment');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = (booking) => {
        Swal.fire({
            title: 'Delete Appointment?',
            html: `
                <div class="text-gray-300 text-sm space-y-2">
                    <p>Are you sure you want to delete this appointment?</p>
                    <div class="bg-white/5 rounded-xl p-4 mt-3">
                        <p class="text-white font-semibold">${booking.doctorName}</p>
                        <p class="text-gray-400 text-xs mt-1">${booking.appointmentDate} at ${booking.appointmentTime}</p>
                    </div>
                    <p class="text-red-400 text-xs mt-3">This action cannot be undone!</p>
                </div>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'Cancel',
            background: '#0a0a0a',
            color: '#fff',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#374151',
            customClass: {
                popup: 'rounded-2xl border border-white/10 shadow-2xl',
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosInstance.delete(`/appointments/${booking._id}`);
                    if (response.data.success) {
                        setBookings(prev => prev.filter(b => b._id !== booking._id));
                        toast.success('Appointment deleted successfully!');
                    }
                } catch (error) {
                    console.error('Failed to delete booking:', error);
                    toast.error(error.response?.data?.message || 'Failed to delete appointment');
                }
            }
        });
    };


    if (loading) {
        return (
            <ProtectedRoute>
                <Loading />
            </ProtectedRoute>
        );
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-black">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    
                    <div className="text-center mb-10 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                            <Calendar size={16} className="text-orange-500" />
                            <span className="text-orange-400 text-sm font-medium">My Appointments</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                            My <span className="text-orange-500">Bookings</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Manage and track all your doctor appointments in one place.
                        </p>
                    </div>

                    {bookings.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bookings.map((booking) => (
                                <div
                                    key={booking._id}
                                    className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 backdrop-blur-sm space-y-4"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                                                <Stethoscope size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight">{booking.doctorName}</h3>
                                                <p className="text-gray-500 text-xs">{booking.hospital}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                                            <User size={16} className="text-orange-500 shrink-0" />
                                            <span className="font-medium">{booking.patientName}</span>
                                            <span className="text-gray-600">|</span>
                                            <span>{booking.gender}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                                            <Calendar size={16} className="text-orange-500 shrink-0" />
                                            <span>{new Date(booking.appointmentDate).toLocaleDateString('en-US', { 
                                                weekday: 'short', 
                                                year: 'numeric', 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                                            <Clock size={16} className="text-orange-500 shrink-0" />
                                            <span>{booking.appointmentTime}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                                            <Phone size={16} className="text-orange-500 shrink-0" />
                                            <span>{booking.phone}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                                        <button
                                            onClick={() => handleEdit(booking)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 transition-all duration-300 text-sm font-medium"
                                        >
                                            <Edit size={16} />
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(booking)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-300 text-sm font-medium"
                                        >
                                            <Trash2 size={16} />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <Calendar size={60} className="text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">No Bookings Yet</h3>
                            <p className="text-gray-400 mb-6">You haven&apos;t booked any appointments yet.</p>
                            <Link
                                href="/appointments"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25"
                            >
                                Browse Doctors
                                <ChevronRight size={18} />
                            </Link>
                        </div>
                    )}
                </div>

                {/* Update Modal */}
                {showModal && editingBooking && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div 
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        ></div>

                        <div className="relative bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Edit size={20} className="text-orange-500" />
                                    Update Appointment
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} className="text-gray-400" />
                                </button>
                            </div>

                            <form onSubmit={handleUpdate} className="space-y-5">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Doctor Name</label>
                                    <input
                                        type="text"
                                        value={editingBooking.doctorName}
                                        readOnly
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-not-allowed opacity-60"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        value={editingBooking.userEmail}
                                        readOnly
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-not-allowed opacity-60"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Patient Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleInputChange}
                                        placeholder="Enter patient name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Gender <span className="text-red-500">*</span></label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                                    >
                                        <option value="" className="bg-gray-900">Select Gender</option>
                                        <option value="Male" className="bg-gray-900">Male</option>
                                        <option value="Female" className="bg-gray-900">Female</option>
                                        <option value="Other" className="bg-gray-900">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="01XXXXXXXXX"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-1.5">Appointment Date <span className="text-red-500">*</span></label>
                                        <input
                                            type="date"
                                            name="appointmentDate"
                                            value={formData.appointmentDate}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-1.5">Time <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="appointmentTime"
                                            value={formData.appointmentTime}
                                            onChange={handleInputChange}
                                            placeholder="10:30 AM"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="flex-1 px-4 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {saving ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            'Save Changes'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
};

export default MyBookingsPage;
