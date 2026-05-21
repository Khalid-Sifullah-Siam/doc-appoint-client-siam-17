"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { User, Calendar, LogOut, LayoutDashboard, ChevronRight, Menu, Stethoscope } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

import Image from 'next/image';
import ProtectedRoute from '../components/sharedComponents/ProtectedRoute/ProtectedRoute';

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    const sidebarLinks = [
        {
            name: 'Dashboard',
            href: '/v1/dashboard',
            icon: LayoutDashboard,
        },
        {
            name: 'My Profile',
            href: '/v1/dashboard/profile',
            icon: User,
        },
        {
            name: 'My Bookings',
            href: '/v1/dashboard/bookings',
            icon: Calendar,
        },
    ];

    const isActive = (path) => {
        if (path === '/v1/dashboard') {
            return pathname === '/v1/dashboard';
        }
        return pathname.startsWith(path);
    };

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            setUser(null);
            toast.success('Logged out successfully!');
            router.push('/');
        } catch (error) {
            toast.error('Logout failed!');
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-black flex">

                {/* Mobile Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                {/* Sidebar */}
                <aside className={`fixed top-0 left-0 h-full w-72 bg-black/95 backdrop-blur-2xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                    <div className="flex flex-col h-full">

                        {/* Sidebar Header */}
                        <div className="p-6 border-b border-white/10">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                    <Stethoscope size={20} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">
                                        doc<span className="text-orange-500">Appoint</span>
                                    </h2>
                                    <p className="text-gray-500 text-xs">Dashboard</p>
                                </div>
                            </Link>
                        </div>

                        {/* User Info */}
                        {user && (
                            <div className="p-6 border-b border-white/10 bg-linear-to-r from-orange-500/5 to-transparent">
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
                                                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-semibold text-lg">${(user.name?.charAt(0) || 'U').toUpperCase()}</div>`;
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-linear-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-semibold text-lg">
                                                {(user.name?.charAt(0) || 'U').toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-semibold text-sm truncate">{user.name}</p>
                                        <p className="text-gray-500 text-xs truncate">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <nav className="flex-1 p-4 space-y-1">
                            {sidebarLinks.map((link, index) => {
                                const Icon = link.icon;
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${active
                                                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                                : 'text-gray-400 hover:text-orange-400 hover:bg-white/5'
                                            }`}
                                    >
                                        <Icon size={20} />
                                        <span className="text-sm">{link.name}</span>
                                        {active && (
                                            <ChevronRight size={16} className="ml-auto text-orange-500" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Logout Button */}
                        <div className="p-4 border-t border-white/10">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200 font-medium"
                            >
                                <LogOut size={20} />
                                <span className="text-sm">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0">

                    {/* Mobile Header */}
                    <header className="lg:hidden sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/10">
                        <div className="flex items-center justify-between px-4 h-16">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                    <Stethoscope size={16} className="text-white" />
                                </div>
                                <span className="text-white font-bold text-lg">
                                    doc<span className="text-orange-500">Appoint</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
                            >
                                <Menu size={22} className="text-white" />
                            </button>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 p-4 sm:p-6 lg:p-8">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-white capitalize">
                                {pathname.split('/').pop().replace(/-/g, ' ')}
                            </h1>
                        </div>
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}