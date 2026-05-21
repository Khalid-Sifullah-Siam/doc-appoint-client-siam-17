import AllAppointmentsPage from '@/app/components/homeComponents/AllAppointmentsPage';
import React from 'react';

export const metadata = {
  title: 'All Doctors & Appointments | docAppoint - Book Your Slot',
  description: 'Browse all available doctors and book your appointment instantly. Search by specialty, location, or hospital. Compare ratings, fees, and availability of top doctors across Bangladesh.',
  keywords: 'all doctors, book appointment, doctor list, medical specialists, healthcare booking, cardiologist, neurologist, pediatrician, Dhaka doctors, Bangladesh',
  robots: 'index, follow',
  openGraph: {
    title: 'All Doctors & Appointments | docAppoint',
    description: 'Find and book appointments with the best doctors in Bangladesh. Easy search, compare, and book.',
    type: 'website',
    siteName: 'docAppoint',
  },
};

const Appointments = () => {
    return (
        <div>
            <AllAppointmentsPage />
        </div>
    );
};

export default Appointments;