// ProtectedRoute.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Loading from '@/app/loading';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await authClient.getSession();
                if (data?.user) {
                    setUser(data.user);
                } else {
                    router.push(`/auth/login?redirect=${encodeURIComponent(pathname)}`);
                }
            } catch (error) {
                console.error('Session check failed:', error);
                router.push(`/auth/login?redirect=${encodeURIComponent(pathname)}`);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, [router, pathname]);

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;