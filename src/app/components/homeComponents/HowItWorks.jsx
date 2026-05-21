import { Award, CalendarCheck, CheckCircle, ChevronRight, HeadphonesIcon, Heart, Phone, Search, Shield } from "lucide-react";
import Link from "next/link";

export const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            icon: Search,
            title: "Find Your Doctor",
            description: "Browse through our verified doctors by specialty, location, or hospital. Compare ratings and reviews.",
            color: "from-orange-500 to-orange-600",
        },
        {
            step: "02",
            icon: CalendarCheck,
            title: "Book Appointment",
            description: "Choose your preferred time slot and book instantly. Receive immediate confirmation via email.",
            color: "from-orange-500 to-orange-600",
        },
        {
            step: "03",
            icon: CheckCircle,
            title: "Visit & Get Cured",
            description: "Visit the doctor at the scheduled time. Access your prescription and follow-up details online.",
            color: "from-orange-500 to-orange-600",
        },
    ];

    return (
        <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-100 h-100 bg-orange-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                        <Award size={16} className="text-orange-500" />
                        <span className="text-orange-400 text-sm font-medium">Simple Process</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        How It <span className="text-orange-500">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Booking a doctor appointment has never been easier. Follow these three simple steps.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative group">
                                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:bg-white/8 text-center">
                                    <div className="absolute -top-4 left-6 px-4 py-1.5 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25">
                                        {step.step}
                                    </div>

                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={28} className="text-orange-500" />
                                    </div>

                                    <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: HeadphonesIcon, title: "24/7 Support", description: "Round-the-clock customer service" },
                        { icon: Shield, title: "Secure & Safe", description: "Your data is encrypted and protected" },
                        { icon: Heart, title: "Patient First", description: "Your health is our top priority" },
                        { icon: Phone, title: "Easy Contact", description: "Direct line to your doctors" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                                <item.icon size={18} className="text-orange-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 group"
                    >
                        Start Booking Now
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};