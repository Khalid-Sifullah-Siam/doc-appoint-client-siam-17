"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, User, LogOut, ChevronDown, Calendar, LayoutDashboard, Stethoscope, Home, Info, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    const dropdownRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();

    const baseNavItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Doctors', path: '/doctors', icon: Stethoscope },
        { name: 'Appointments', path: '/appointments', icon: Calendar },
        { name: 'About', path: '/about', icon: Info },
    ];

    const navItems = user
        ? [...baseNavItems, { name: 'Dashboard', path: '/v1/dashboard', icon: LayoutDashboard }]
        : baseNavItems;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.user) setUser(data.user);
            } catch (error) {
                console.error('Session check failed:', error);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const tryFetch = async () => {
            setIsOpen(false);
            setIsDropdownOpen(false);
        }
        tryFetch();
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            setUser(null);
            setIsDropdownOpen(false);
            setIsOpen(false);
            toast.success('Logged out successfully!');
            router.push('/');
        } catch (error) {
            toast.error('Logout failed!');
        }
    };

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        document.documentElement.style.colorScheme = nextTheme;
    };

    return (
        <>
            <nav className={`w-full sticky top-0 z-50 transition-all duration-500 ${scrolled
                ? 'theme-surface backdrop-blur-2xl shadow-2xl shadow-orange-500/10 border-b border-white/10'
                : 'theme-surface backdrop-blur-xl border-b border-white/5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
                            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 group-hover:scale-105 transition-all duration-300">
                                <Stethoscope className="w-5 h-5 lg:w-6 lg:h-6 theme-text" />
                            </div>
                            <h1 className="text-xl lg:text-2xl font-bold theme-text">
                                doc<span className="text-orange-500">Appoint</span>
                            </h1>
                        </Link>

                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                                            : 'theme-text-muted hover:text-orange-400 hover:bg-white/5'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 rounded-xl border border-white/10 theme-text-muted hover:text-orange-400 hover:border-orange-500/40 transition-all flex items-center justify-center"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            {loading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-20 h-9 rounded-xl bg-white/5 animate-pulse"></div>
                                    <div className="w-24 h-9 rounded-xl bg-white/5 animate-pulse"></div>
                                </div>
                            ) : user ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 border ${isDropdownOpen
                                            ? 'bg-orange-500/10 border-orange-500/30'
                                            : 'border-white/10 hover:border-orange-500/30 hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500/50 shrink-0">
                                            {user.image ? (
                                                <Image
                                                    src={user.image}
                                                    alt={user.name || 'User'}
                                                    className="w-full h-full object-cover"
                                                    width={100}
                                                    height={100}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 theme-text flex items-center justify-center font-semibold text-sm">${(user.name?.charAt(0) || 'U').toUpperCase()}</div>`;
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 theme-text flex items-center justify-center font-semibold text-sm">
                                                    {(user.name?.charAt(0) || 'U').toUpperCase()}
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-left hidden xl:block">
                                            <p className="text-sm font-semibold theme-text leading-tight max-w-25 truncate">
                                                {user.name?.split(' ')[0] || 'User'}
                                            </p>
                                            <p className="text-xs theme-text-muted leading-tight">Patient</p>
                                        </div>

                                        <ChevronDown size={16} className={`theme-text-muted transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div className={`absolute right-0 mt-2 w-56 theme-surface backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 py-2 transition-all duration-200 origin-top-right ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                        }`}>
                                        <div className="px-4 py-3 border-b border-white/10">
                                            <p className="text-sm font-semibold theme-text truncate">{user.name || 'User'}</p>
                                            <p className="text-xs theme-text-muted truncate">{user.email}</p>
                                        </div>

                                        <div className="py-1">
                                            {[
                                                { icon: User, label: 'My Profile', path: '/v1/dashboard/profile' },
                                                { icon: Calendar, label: 'My Bookings', path: '/v1/dashboard/bookings' },
                                            ].map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.path}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 theme-text-muted hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200"
                                                >
                                                    <item.icon size={18} />
                                                    <span className="text-sm font-medium">{item.label}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="border-t border-white/10 pt-1">
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full transition-all duration-200"
                                            >
                                                <LogOut size={18} />
                                                <span className="text-sm font-medium">Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={"/auth/login"}
                                        className="px-5 py-2.5 rounded-xl border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 font-medium text-sm"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href={"/auth/get-started"}
                                        className="px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 theme-text hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-medium text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
                        >
                            <div className="relative w-5 h-5">
                                <span className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
                                    }`}></span>
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            <div
                className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] theme-surface backdrop-blur-3xl z-50 shadow-2xl shadow-orange-500/10 border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>

                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <div className="w-9 h-9 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                            <Stethoscope size={18} className="theme-text" />
                        </div>
                        <span className="text-lg font-bold theme-text">
                            doc<span className="text-orange-500">Appoint</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
                    >
                        <X size={20} className="theme-text-muted" />
                    </button>
                </div>

                {user && (
                    <div className="p-4 border-b border-white/10 bg-linear-to-r from-orange-500/5 to-transparent">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50 shrink-0">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || 'User'}
                                        className="w-full h-full object-cover"
                                        width={100}
                                        height={100}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<div class="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 theme-text flex items-center justify-center font-semibold text-lg">${(user.name?.charAt(0) || 'U').toUpperCase()}</div>`;
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 theme-text flex items-center justify-center font-semibold text-lg">
                                        {(user.name?.charAt(0) || 'U').toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold theme-text truncate">{user.name}</p>
                                <p className="text-xs theme-text-muted truncate">{user.email}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="p-4 space-y-1">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
                                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                    : 'theme-text-muted hover:text-orange-400 hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-white/10 space-y-3">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white/5 theme-text-muted font-medium hover:bg-orange-500/10 hover:text-orange-400 transition-all"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        <span className="text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                    {user ? (
                        <>
                            <Link
                                href="/dashboard/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white/5 theme-text-muted font-medium hover:bg-orange-500/10 hover:text-orange-400 transition-all"
                            >
                                <User size={20} />
                                <span className="text-sm">My Profile</span>
                            </Link>
                            <Link
                                href="/dashboard/bookings"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white/5 theme-text-muted font-medium hover:bg-orange-500/10 hover:text-orange-400 transition-all"
                            >
                                <Calendar size={20} />
                                <span className="text-sm">My Bookings</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-red-500/10 text-red-400 font-medium hover:bg-red-500/20 transition-all"
                            >
                                <LogOut size={20} />
                                <span className="text-sm">Logout</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href={"/auth/login"}
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-3 rounded-xl border border-orange-500/50 text-orange-400 font-medium text-center hover:bg-orange-500/10 transition-all"
                            >
                                Login
                            </Link>
                            <Link
                                href={"/auth/get-started"}
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 theme-text font-medium text-center hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;


