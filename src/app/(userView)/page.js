import Hero from "../components/homeComponents/Hero";
import DoctorsPage from "../components/homeComponents/DoctorsPage";
import { WhyChooseUs } from "../components/homeComponents/WhyChooseUs";
import { HowItWorks } from "../components/homeComponents/HowItWorks";

export const metadata = {
  title: 'docAppoint - Doctor Appointment Booking System | Bangladesh',
  description: 'Book doctor appointments instantly with docAppoint. Browse top-rated specialists, compare consultation fees, and manage your healthcare bookings easily. Trusted by 50,000+ patients across Bangladesh.',
  keywords: 'doctor appointment, book doctor, healthcare booking, medical appointment, online doctor booking, Bangladesh doctors, cardiologist, neurologist, pediatrician, Dhaka doctors, telemedicine, medical consultation',
  robots: 'index, follow',
  openGraph: {
    title: 'docAppoint - Smart Healthcare Booking Platform',
    description: 'Book appointments with the best doctors in Bangladesh. Quick, easy, and hassle-free healthcare at your fingertips.',
    type: 'website',
    url: 'https://docappoint.com',
    siteName: 'docAppoint',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://docappoint.com',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <DoctorsPage />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}