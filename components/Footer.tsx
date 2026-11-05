
"use client";
import Link from "next/link";
import { useState } from "react";

import {
    Heart,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    HeartHandshake,
    ChevronDown,
} from "lucide-react";
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
} from "react-icons/fa";

const footerSections = [
    {
        title: "Explore",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Our Therapists", href: "/therapists" },
            { name: "Book a Session", href: "/booking" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Mental Wellness", href: "/wellness" },
            { name: "Self-care Guides", href: "/guides" },
            { name: "Articles & Blogs", href: "/blogs" },
            { name: "FAQs", href: "/faq" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Contact Us", href: "/contact" },
            { name: "Help Center", href: "/help" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
];

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    return (

        <footer className="bg-[#292b2d] text-white">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

                <div className="flex flex-col gap-8">

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                        <div className="flex flex-col gap-4">
                            <Link href="/" className="inline-flex items-center gap-2 w-fit">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                                    <HeartHandshake size={23} />
                                </div>

                                <span className="text-2xl font-bold tracking-tight">
                                    the<span className="text-[#F87171]">rapy.</span>
                                </span>
                            </Link>

                            <p className="max-w-sm text-sm leading-6 text-[#B8C7DA]">
                                Your mental well-being matters. We are here to help
                                you find balance, build resilience, and take a
                                positive step towards a healthier mind.
                            </p>

                            <div className="flex items-center gap-3">
                                {[
                                    { icon: FaInstagram, href: "#", label: "Instagram" },
                                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                                    { icon: FaFacebook, href: "#", label: "Facebook" },
                                ].map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#B8C7DA] transition-all duration-300 hover:border-[#F87171] hover:bg-[#F87171] hover:text-white"
                                    >
                                        <Icon size={17} />
                                    </a>
                                ))}
                            </div>
                        </div>



                        {footerSections.map((section) => {
                            const isOpen = openSection === section.title;

                            return (
                                <div
                                    key={section.title}
                                    className="flex flex-col gap-3 border-b border-white/10 pb-3 md:border-0 md:pb-0"
                                >
                                    <h3 className="hidden text-sm font-semibold tracking-wide text-white md:block">
                                        {section.title}
                                    </h3>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenSection(isOpen ? null : section.title)
                                        }
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between text-sm font-semibold text-white md:hidden"
                                    >
                                        {section.title}

                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <ul className="flex min-h-0 flex-col gap-3 overflow-hidden">
                                            {section.links.map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        className="group inline-flex items-center gap-1 text-sm text-[#B8C7DA] transition-colors hover:text-[#F87171]"
                                                    >
                                                        {link.name}

                                                        <ArrowUpRight
                                                            size={13}
                                                            className="opacity-0 transition-opacity group-hover:opacity-100"
                                                        />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}

                    </div>


                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

                        <div className="grid grid-cols-1 gap-5 rounded-xl border border-white/10 bg-white/[0.05] p-5 sm:grid-cols-3 lg:grid-cols-1">

                            <div className="flex items-center gap-3">
                                <Mail className="shrink-0 text-[#F87171]" size={19} />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-[#B8C7DA]">Email us</p>
                                    <p className="text-sm text-white">hello@therapy.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="shrink-0 text-[#F87171]" size={19} />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-[#B8C7DA]">Call us</p>
                                    <p className="text-sm text-white">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="shrink-0 text-[#F87171]" size={19} />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-[#B8C7DA]">Location</p>
                                    <p className="text-sm text-white">India</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#DBEAFE] px-5 py-6 text-center text-[#142D4E]">

                            <Heart className="fill-[#F87171] text-[#F87171]" size={24} />

                            <h3 className="text-xl font-semibold">
                                You deserve to feel better.
                            </h3>

                            <p className="max-w-lg text-sm leading-6 text-[#526782]">
                                Every step towards self-care is a step worth taking.
                                Let's make your mental well-being a priority.
                            </p>

                            <Link
                                href="/booking"
                                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1D4ED8]"
                            >
                                Start Your Journey
                                <ArrowUpRight size={16} />
                            </Link>



                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row">

                        <p className="text-xs text-[#B8C7DA]">
                            © 2026 TheRapy. All rights reserved.
                        </p>

                        <p className="text-xs text-[#B8C7DA]">
                            Made with
                            <Heart className="mx-1 inline fill-[#F87171] text-[#F87171]" size={12} />
                            for better mental health.
                        </p>

                    </div>

                </div>
            </div>
        </footer>

    );
};

export default Footer;
