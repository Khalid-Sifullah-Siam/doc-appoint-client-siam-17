import FaqsClient from './FaqsClient';

export const metadata = {
    title: 'FAQs | docAppoint - Frequently Asked Questions',
    description: 'Find answers to frequently asked questions about doctor appointments, bookings, payments, accounts, and more on docAppoint healthcare platform in Bangladesh.',
    keywords: 'FAQs, frequently asked questions, doctor appointment help, booking questions, healthcare queries, docAppoint support, Bangladesh',
    robots: 'index, follow',
    openGraph: {
        title: 'FAQs | docAppoint - Frequently Asked Questions',
        description: 'Quick answers to common questions about our healthcare booking platform.',
        type: 'website',
        siteName: 'docAppoint',
    },
};

export default function Page() {
    return <FaqsClient />;
}
