import DoctorsPage from '@/app/components/homeComponents/DoctorsPage';
import React from 'react';

export const metadata = {
  title: 'Our Doctors | docAppoint - Expert Medical Professionals',
  description: 'Meet our team of highly qualified and experienced doctors across various specialties. Browse cardiologists, neurologists, pediatricians, and more from top hospitals in Dhaka, Bangladesh.',
  keywords: 'doctors, medical professionals, specialists, cardiologist, neurologist, pediatrician, dermatologist, orthopedic, gynecologist, ENT, ophthalmologist, psychiatrist, Dhaka doctors, Bangladesh',
  robots: 'index, follow',
  openGraph: {
    title: 'Our Doctors | docAppoint - Expert Medical Professionals',
    description: 'Browse our team of expert doctors across multiple specialties from leading hospitals in Bangladesh.',
    type: 'website',
    siteName: 'docAppoint',
  },
};

const Doctors = () => {
    return (
        <div>
            <DoctorsPage />
        </div>
    );
};

export default Doctors;