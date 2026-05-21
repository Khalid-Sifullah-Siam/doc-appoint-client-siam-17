import LoginPage from '@/app/components/sharedComponents/authComponents/loginPage/LoginPage';
import React from 'react';

export const metadata = {
  title: 'Login | docAppoint - Access Your Account',
  description: 'Login to your docAppoint account to manage your doctor appointments, view your bookings, update your profile, and connect with healthcare professionals across Bangladesh.',
  keywords: 'login, sign in, docAppoint, doctor appointment, healthcare, medical booking, patient portal, Bangladesh',
  robots: 'index, follow',
  openGraph: {
    title: 'Login | docAppoint - Access Your Account',
    description: 'Sign in to docAppoint and manage your healthcare appointments with ease.',
    type: 'website',
    siteName: 'docAppoint',
  },
};

const Login = () => {
    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default Login;