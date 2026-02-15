import React from 'react';
import { COMPANY_INFO } from '../constants';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: 'location_on',
            title: 'Shine Electronics',
            content: COMPANY_INFO.address,
            link: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`,
        },
        {
            icon: 'mail',
            title: 'Email Us',
            content: COMPANY_INFO.email,
            link: `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}`,
        },
        {
            icon: 'call',
            title: 'Call Us',
            content: COMPANY_INFO.phone,
            link: `tel:${COMPANY_INFO.phone}`,
        },
    ];

    return (
        <section className="py-20 sm:py-24 relative overflow-hidden" id="contact">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-brand-deep/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-sm font-bold text-brand-glow-mid tracking-[0.2em] uppercase text-glow">
                        Get in Touch
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4">
                        Let's Power Your Project
                    </h3>
                    <p className="text-text-secondary mt-4 font-light">
                        Need custom specifications or bulk orders? Contact us directly.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="glass-panel p-8 sm:p-12 lg:p-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <a
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-deep/40 group-hover:scale-110 transition-all border border-transparent group-hover:border-brand-glow-mid/30 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-3xl text-brand-glow-mid group-hover:text-brand-glow-light">
                                        {method.icon}
                                    </span>
                                </a>
                                <p className="text-text-primary font-bold mb-2 text-sm sm:text-base">
                                    {method.title}
                                </p>
                                <a
                                    href={method.link}
                                    className="text-text-secondary text-sm hover:text-brand-glow-light transition-colors break-words group-hover:underline underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {method.content}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="my-10 border-t border-white/5"></div>

                    <div className="grid sm:grid-cols-1 gap-6 sm:gap-8">
                        <div className="text-center">
                            <h4 className="text-text-primary font-bold mb-3 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-brand-glow-mid">schedule</span>
                                Business Hours
                            </h4>
                            <div className="text-text-secondary text-sm space-y-1 font-light">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 2:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-text-secondary/60 font-mono">
                    <p>Response time: Within 24 hours • Free technical consultation available</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;