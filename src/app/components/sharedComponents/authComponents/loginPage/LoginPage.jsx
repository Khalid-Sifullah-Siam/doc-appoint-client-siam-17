// LoginPage.jsx
"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get('redirect') || '/';
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        if (!formData.email) {
            setErrors({ email: 'Email is required' });
            setLoading(false);
            return;
        }
        if (!formData.password) {
            setErrors({ password: 'Password is required' });
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                callbackURL: redirectPath
            });

            if (error) {
                toast.error(error.message || 'Login failed! Please check your credentials.');
                setLoading(false);
                return;
            }

            if (data) {
                toast.success('Login successful! Welcome back.');
                router.push(redirectPath);
            }
        } catch (err) {
            toast.error('Something went wrong!');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

const handleGoogleLogin = async () => {
    setLoading(true);
    
    try {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: redirectPath,
        });

        if (error) {
            toast.error(error.message || 'Google login failed!');
            setLoading(false);
            return;
        }


        if (data) {
            toast.success('Successfully logged in with Google!');
            router.push(redirectPath);
        }
    } catch (err) {
        console.error('Google login error:', err);
        toast.error('Something went wrong!');
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-black">

            {/* Main Container */}
            <div className="w-full max-w-md relative z-10">
                
                {/* Glass Card */}
                <div className="backdrop-blur-xl rounded-3xl shadow-2xl border p-6 sm:p-8 lg:p-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                    }}>

                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="inline-block p-3 sm:p-4 bg-orange-500/20 rounded-full mb-3 sm:mb-4 border border-orange-500/30">
                            <FaSignInAlt className="text-2xl sm:text-3xl text-orange-500" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                            Login to manage your appointments
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">

                        {/* Email Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaEnvelope className="text-xs sm:text-sm text-orange-500" />
                                Email Address
                            </label>
                            <div className={`relative group rounded-xl transition-all duration-300 ${
                                focusedField === 'email' ? 'ring-2 ring-orange-500/50' : ''
                            } ${errors.email ? 'ring-2 ring-red-500/50' : ''}`}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300 text-sm sm:text-base
                                    focus:bg-white/10 focus:border-orange-500/50"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaLock className="text-xs sm:text-sm text-orange-500" />
                                Password
                            </label>
                            <div className={`relative group rounded-xl transition-all duration-300 ${
                                focusedField === 'password' ? 'ring-2 ring-orange-500/50' : ''
                            } ${errors.password ? 'ring-2 ring-red-500/50' : ''}`}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300 text-sm sm:text-base pr-10
                                    focus:bg-white/10 focus:border-orange-500/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link 
                                href="/auth/forgot-password" 
                                className="text-orange-400 hover:text-orange-300 text-xs sm:text-sm transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative overflow-hidden group bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base shadow-orange-500/25"
                        >
                            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></span>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Logging in...
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5 sm:my-6">
                        <div className="flex-1 h-px bg-white/10"></div>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">OR</p>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 font-medium disabled:opacity-50 shadow-lg text-sm sm:text-base"
                    >
                        <FcGoogle size={20} className="sm:w-6 sm:h-6" />
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-gray-400 text-xs sm:text-sm mt-5 sm:mt-6">
                        Don&apos;t have an account?{' '}
                        <Link
                            href={"/auth/get-started"}
                            className="text-orange-500 hover:text-orange-400 font-semibold hover:underline underline-offset-2 transition-all"
                        >
                            Register
                        </Link>
                    </p>
                </div>

                {/* Bottom Text */}
                <p className="text-center text-gray-600 text-xs mt-4 sm:mt-6">
                    Secure login powered by Better Auth
                </p>
            </div>
        </div>
    );
};

export default LoginPage;