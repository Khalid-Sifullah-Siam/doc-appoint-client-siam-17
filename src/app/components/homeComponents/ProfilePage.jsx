"use client";
import React, { useState, useEffect } from 'react';
import { User, Mail, Camera, Edit, X, Loader2, Shield, Calendar } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import ProtectedRoute from '../sharedComponents/ProtectedRoute/ProtectedRoute';
import Loading from '@/app/loading';
import Image from 'next/image';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
    });
    const [saving, setSaving] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.user) {
                    setUser(data.user);
                    setFormData({
                        name: data.user.name || '',
                        image: data.user.image || '',
                    });
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
                toast.error('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'image') setImageError(false);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            toast.error('Name is required');
            return;
        }

        setSaving(true);
        try {
            const { data, error } = await authClient.updateUser({
                name: formData.name.trim(),
                image: formData.image.trim() || undefined,
            });

            if (error) {
                toast.error(error.message || 'Failed to update profile');
                return;
            }

            if (data) {
                setUser(prev => ({ ...prev, ...data.user }));
                setShowModal(false);
                setImageError(false);
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            console.error('Failed to update profile:', error);
            toast.error('Something went wrong!');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <ProtectedRoute>
                <Loading />
            </ProtectedRoute>
        );
    }

    const joinedDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
        : 'N/A';

    return (
        <ProtectedRoute>
            <div className="space-y-6 sm:space-y-8">

                {/* Profile Header */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl"></div>

                    <div className="relative flex flex-col sm:flex-row items-center gap-6">
                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-orange-500/50 shadow-xl shadow-orange-500/20">
                                {user?.image && !imageError ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || 'User'}
                                        className="w-full h-full object-cover"
                                        width={100}
                                        height={100}
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                        <span className="text-3xl sm:text-4xl font-bold text-white">
                                            {(user?.name?.charAt(0) || 'U').toUpperCase()}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30"
                            >
                                <Camera size={14} />
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                {user?.name || 'User'}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start mb-3">
                                <Mail size={16} className="text-orange-500" />
                                <span className="text-sm">{user?.email || 'No email'}</span>
                            </div>
                            <div className="flex items-center gap-4 justify-center sm:justify-start">
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                                    <Calendar size={12} className="text-orange-500" />
                                    Joined {joinedDate}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                                    <Shield size={12} />
                                    Verified
                                </span>
                            </div>
                        </div>

                        {/* Edit Button (Desktop) */}
                        <button
                            onClick={() => setShowModal(true)}
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 transition-all duration-300 font-medium text-sm ml-auto"
                        >
                            <Edit size={16} />
                            Update Profile
                        </button>
                    </div>

                    {/* Edit Button (Mobile) */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="sm:hidden w-full mt-6 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 transition-all duration-300 font-medium"
                    >
                        <Edit size={16} />
                        Update Profile
                    </button>
                </div>

                {/* Profile Details Cards */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <User size={20} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Full Name</p>
                                <p className="text-white font-semibold">{user?.name || 'Not set'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Mail size={20} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Email Address</p>
                                <p className="text-white font-semibold text-sm truncate">{user?.email || 'Not set'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Shield size={20} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Account Status</p>
                                <p className="text-green-400 font-semibold text-sm">Active & Verified</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Calendar size={20} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Member Since</p>
                                <p className="text-white font-semibold text-sm">{joinedDate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Update Profile Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        ></div>

                        <div className="relative bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-in zoom-in-95 duration-200">

                            {/* Modal Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Edit size={20} className="text-orange-500" />
                                    Update Profile
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} className="text-gray-400" />
                                </button>
                            </div>

                            {/* Preview Image */}
                            <div className="flex justify-center mb-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-orange-500/50 shadow-lg">
                                        {formData.image && !imageError ? (
                                            <Image
                                                src={formData.image}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                                width={100}
                                                height={100}
                                                onError={() => setImageError(true)}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-white">
                                                    {(formData.name?.charAt(0) || 'U').toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    {formData.image && !imageError && (
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-black flex items-center justify-center">
                                            <Camera size={10} className="text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleUpdateProfile} className="space-y-5">

                                {/* Name Field */}
                                <div>
                                    <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-1.5">
                                        <User size={14} className="text-orange-500" />
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                                    />
                                </div>

                                {/* Photo URL Field */}
                                <div>
                                    <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-1.5">
                                        <Camera size={14} className="text-orange-500" />
                                        Photo URL
                                    </label>
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/your-photo.jpg"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-300"
                                    />
                                    {imageError && (
                                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                            <X size={12} />
                                            Invalid image URL. Please try another one.
                                        </p>
                                    )}
                                    <p className="text-gray-600 text-xs mt-1.5">
                                        Leave empty to keep current profile picture
                                    </p>
                                </div>

                                {/* Action Buttons */}
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
                                                <Loader2 size={18} className="animate-spin" />
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

export default ProfilePage;