"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaImage, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least 1 uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain at least 1 lowercase letter');
        }
        return errors;
    };

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

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const passwordErrors = validatePassword(formData.password);
        if (passwordErrors.length > 0) {
            setErrors({ password: passwordErrors.join('. ') });
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await authClient.signUp.email({
                email: formData.email,
                password: formData.password,
                name: formData.name,
                image: formData.image || undefined,
                callbackURL: "/auth/login"
            });

            if (error) {
                toast.error(error.message || 'Registration failed!');
                setLoading(false);
                return;
            }

            if (data) {
                toast.success('Registration successful! Please login.');
                router.push('/auth/login');
            }
        } catch (err) {
            toast.error('Something went wrong!');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            setLoading(true);
            const { data, error } = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/"
            });

            if (error) {
                toast.error(error.message || 'Google signup failed!');
                return;
            }

            if (data) {
                toast.success('Successfully signed up with Google!');
                router.push('/');
            }
        } catch (err) {
            toast.error('Something went wrong!');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden"
            >

            {/* Main Container */}
            <div className="w-full max-w-md relative z-10">
                {/* Glass Card */}
                <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 lg:p-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                    }}>

                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                            Create Account
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">

                        {/* Name Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaUser className="text-xs sm:text-sm" />
                                Full Name
                            </label>
                            <div className={`relative group ${focusedField === 'name' ? 'ring-2 ring-white/50' : ''}`}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 outline-none transition-all duration-300 text-sm sm:text-base
                                    focus:bg-white/20 focus:border-white/40"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaEnvelope className="text-xs sm:text-sm" />
                                Email Address
                            </label>
                            <div className={`relative group ${focusedField === 'email' ? 'ring-2 ring-white/50' : ''}`}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 outline-none transition-all duration-300 text-sm sm:text-base
                                    focus:bg-white/20 focus:border-white/40"
                                />
                            </div>
                        </div>

                        {/* Photo URL Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaImage className="text-xs sm:text-sm" />
                                Photo URL
                            </label>
                            <div className={`relative group ${focusedField === 'image' ? 'ring-2 ring-white/50' : ''}`}>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('image')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter photo url (optional)"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 outline-none transition-all duration-300 text-sm sm:text-base
                                    focus:bg-white/20 focus:border-white/40"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                <FaLock className="text-xs sm:text-sm" />
                                Password
                            </label>
                            <div className={`relative group ${focusedField === 'password' ? 'ring-2 ring-white/50' : ''} ${errors.password ? 'ring-2 ring-red-400' : ''}`}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter password"
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 outline-none transition-all duration-300 text-sm sm:text-base pr-10
                                    focus:bg-white/20 focus:border-white/40"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-200 text-xs mt-1.5 flex items-center gap-1">
                                    <span className="inline-block w-1 h-1 bg-red-300 rounded-full"></span>
                                    {errors.password}
                                </p>
                            )}
                            <p className="text-white/50 text-xs mt-1.5">
                                Min 6 chars, 1 uppercase, 1 lowercase
                            </p>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative overflow-hidden group bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></span>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Registering...
                                    </>
                                ) : (
                                    'Register'
                                )}
                            </span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5 sm:my-6">
                        <div className="flex-1 h-px bg-white/30"></div>
                        <p className="text-white/70 text-xs sm:text-sm font-medium">OR</p>
                        <div className="flex-1 h-px bg-white/30"></div>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        onClick={handleGoogleSignUp}
                        disabled={loading}
                        className="w-full backdrop-blur-sm bg-white/15 border border-white/25 hover:bg-white/25 text-white py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 font-medium disabled:opacity-50 shadow-lg text-sm sm:text-base"
                    >
                        <FcGoogle size={20} className="sm:w-6 sm:h-6" />
                        Continue with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-white/80 text-xs sm:text-sm mt-5 sm:mt-6">
                        Already have an account?{' '}
                        <Link
                            href={"/auth/login"}
                            className="text-white font-semibold hover:underline underline-offset-2 transition-all"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Bottom Decorative Text */}
                <p className="text-center text-white/50 text-xs mt-4 sm:mt-6">
                    Secure registration powered by Better Auth
                </p>
            </div>
        </div>
    );
};

export default Register;