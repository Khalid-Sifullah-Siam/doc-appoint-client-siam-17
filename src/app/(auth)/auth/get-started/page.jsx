import Register from '@/app/components/sharedComponents/authComponents/getStartedPage/Register';
import React from 'react';

export const metadata = {
  title: 'Register | docAppoint - Create Your Account',
  description: 'Create your docAppoint account to book doctor appointments, manage your healthcare bookings, and connect with top-rated specialists across Bangladesh. Quick and easy registration.',
  keywords: 'register, sign up, create account, docAppoint, doctor appointment, healthcare, medical booking, Bangladesh',
  authors: [{ name: 'docAppoint' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Register | docAppoint - Create Your Account',
    description: 'Sign up for docAppoint and start booking appointments with the best doctors in Bangladesh. Fast, secure, and easy registration process.',
    type: 'website',
    url: 'https://docappoint.com/auth/get-started',
    siteName: 'docAppoint',
    locale: 'en_US',
  },
};

const GetStarted = () => {
    return (
        <div>
            <Register />
        </div>
    );
};

export default GetStarted;