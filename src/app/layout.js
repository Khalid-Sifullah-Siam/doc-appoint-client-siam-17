import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'docAppoint - Doctor Appointment Booking System | Bangladesh',
  description: 'Book doctor appointments instantly with docAppoint. Browse top-rated specialists, compare consultation fees, and manage your healthcare bookings easily. Trusted by 50,000+ patients across Bangladesh.',
  keywords: 'doctor appointment, book doctor, healthcare booking, medical appointment, online doctor booking, Bangladesh doctors, cardiologist, neurologist, pediatrician, Dhaka doctors, medical consultation, docAppoint',
  authors: [{ name: 'docAppoint' }],
  creator: 'docAppoint',
  publisher: 'docAppoint',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://docappoint.com',
  },
  openGraph: {
    title: 'docAppoint - Smart Healthcare Booking Platform',
    description: 'Book appointments with the best doctors in Bangladesh. Quick, easy, and hassle-free healthcare at your fingertips.',
    type: 'website',
    url: 'https://docappoint.com',
    siteName: 'docAppoint',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}