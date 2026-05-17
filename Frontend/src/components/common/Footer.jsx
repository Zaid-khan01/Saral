import React from "react";

import {
    ArrowUpRight,
    MapPin,
    Mail,
    Phone,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/Saral-logo.png";

const Footer = () => {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-slate-950
                text-white
                border-t
                border-white/10
            "
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute bottom-[-140px] right-[-140px] w-[340px] h-[340px] rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-8">

                {/* TOP SECTION */}
                <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-14">

                    {/* BRAND */}
                    <div>

                        <Link
                            to="/"
                            className="flex items-center gap-3"
                        >

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-white/5
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <img
                                    src={logo}
                                    alt="Saral"
                                    className="w-8 h-8 object-contain"
                                />

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold tracking-tight">
                                    Saral
                                </h2>

                                <p className="text-sm text-slate-400">
                                    Smart Queue Platform
                                </p>

                            </div>

                        </Link>

                        <p className="mt-5 text-slate-400 leading-relaxed max-w-md">
                            Saral helps users skip physical queues with
                            smart digital token booking, live queue tracking,
                            instant alerts and AI-powered wait predictions.
                        </p>

                        {/* BADGES */}
                        <div className="mt-8 flex flex-wrap gap-3">

                            <div
                                className="
                                    h-[46px]
                                    px-4
                                    rounded-2xl
                                    bg-white/5
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-300
                                "
                            >

                                <ShieldCheck
                                    size={16}
                                    className="text-emerald-400"
                                />

                                Secure Platform

                            </div>

                            <div
                                className="
                                    h-[46px]
                                    px-4
                                    rounded-2xl
                                    bg-white/5
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-300
                                "
                            >

                                <Sparkles
                                    size={16}
                                    className="text-cyan-400"
                                />

                                AI Queue Prediction

                            </div>

                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h3 className="text-lg font-semibold">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            {[
                                {
                                    name: "Problem",
                                    href: "#problem",
                                },

                                {
                                    name: "How It Works",
                                    href: "#how-it-works",
                                },

                                {
                                    name: "Use Cases",
                                    href: "#use-cases",
                                },

                                {
                                    name: "Features",
                                    href: "#features",
                                },

                                {
                                    name: "Benefits",
                                    href: "#benefits",
                                },

                                {
                                    name: "FAQ",
                                    href: "#faq",
                                },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="
                                        text-slate-400
                                        hover:text-white
                                        transition-all
                                        duration-200
                                        flex
                                        items-center
                                        gap-2
                                        group
                                    "
                                >

                                    <ArrowUpRight
                                        size={15}
                                        className="
                                            opacity-0
                                            -translate-x-1
                                            group-hover:opacity-100
                                            group-hover:translate-x-0
                                            transition-all
                                        "
                                    />

                                    {item.name}

                                </a>
                            ))}

                        </div>

                    </div>

                    {/* PLATFORM */}
                    <div>

                        <h3 className="text-lg font-semibold">
                            Platform
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <Link
                                to="/user/login"
                                className="text-slate-400 hover:text-white transition-all"
                            >
                                User Login
                            </Link>

                            <Link
                                to="/organization/login"
                                className="text-slate-400 hover:text-white transition-all"
                            >
                                Organization Login
                            </Link>

                            <Link
                                to="/organization/register"
                                className="text-slate-400 hover:text-white transition-all"
                            >
                                Register Organization
                            </Link>

                            <a
                                href="#live-demo"
                                className="text-slate-400 hover:text-white transition-all"
                            >
                                Live Demo
                            </a>

                            <a
                                href="#testimonials"
                                className="text-slate-400 hover:text-white transition-all"
                            >
                                Testimonials
                            </a>

                        </div>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <h3 className="text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="mt-6 flex flex-col gap-5">

                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <MapPin
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <div>

                                    <h4 className="font-medium">
                                        Location
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-400">
                                        New Delhi, India
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Mail
                                        size={18}
                                        className="text-violet-400"
                                    />

                                </div>

                                <div>

                                    <h4 className="font-medium">
                                        Email
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-400">
                                        support@saral.in
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Phone
                                        size={18}
                                        className="text-emerald-400"
                                    />

                                </div>

                                <div>

                                    <h4 className="font-medium">
                                        Phone
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-400">
                                        +91 98765 43210
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div
                    className="
                        mt-16
                        pt-7
                        border-t
                        border-white/10
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-5
                    "
                >

                    <p className="text-sm text-slate-500 text-center md:text-left">
                        © 2026 Saral. All rights reserved.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-3">

                        {[
                            {
                                icon: <FaGithub size={18} />,
                                link: "https://github.com/Zaid-khan01",
                            },

                            {
                                icon: <FaLinkedin size={18} />,
                                link: "https://www.linkedin.com/in/zaid-khan-1123abc/",
                            },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                w-11
                h-11
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-slate-300
                hover:bg-white
                hover:text-slate-900
                transition-all
                duration-300
            "
                            >

                                {item.icon}

                            </a>
                        ))}

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;