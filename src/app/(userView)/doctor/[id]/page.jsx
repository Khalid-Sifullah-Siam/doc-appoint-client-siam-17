import DoctorDetailsPage from '@/app/components/homeComponents/DoctorDetailsPage';
import React from 'react';

export async function generateMetadata({ params }) {
  return {
    title: `Doctor Details | docAppoint`,
    description: 'View complete doctor profile including experience, availability, consultation fee, patient reviews, and hospital details. Book your appointment instantly with top specialists.',
    keywords: 'doctor details, doctor profile, book appointment, doctor information, consultation fee, patient reviews, medical specialist, Bangladesh',
    robots: 'index, follow',
    openGraph: {
      title: 'Doctor Details | docAppoint',
      description: 'View detailed doctor profile and book your appointment instantly.',
      type: 'website',
      siteName: 'docAppoint',
    },
  };
}

const DoctorDetails = () => {
    return (
        <div>
            <DoctorDetailsPage />
        </div>
    );
};

export default DoctorDetails;