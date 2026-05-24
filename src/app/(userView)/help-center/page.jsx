import HelpCenterClient from './HelpCenterClient';

export const metadata = {
    title: 'Help Center | docAppoint - Support & FAQs',
    description: 'Get help with docAppoint services. Find answers to common questions about doctor appointments, bookings, payments, and account management.',
    keywords: 'help center, support, FAQs, doctor appointment help, booking support, healthcare assistance, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'Help Center | docAppoint - Support & FAQs',
        description: 'Find answers and support for all your healthcare booking needs.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

export default function Page() {
    return <HelpCenterClient />;
}
