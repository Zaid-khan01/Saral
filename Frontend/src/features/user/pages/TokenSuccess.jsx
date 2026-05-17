import React from "react";

import {
    ArrowLeft,
    CircleCheckBig,
    Ticket,
    Clock3,
    Users,
    Bell,
    Sparkles,
    ArrowRight,
    Wifi,
    ShieldCheck,
    CalendarDays,
    MapPin,
    Activity,
    Download,
    QrCode,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const TokenSuccess = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const bookingData = location.state;

    const {
        userName,
        organizationName,
        organizationAddress,
        tokenNumber,
        peopleAhead,
        waitTime,
        bookingTime,
        serviceName,
    } = bookingData || {};

    React.useEffect(() => {

        if (bookingData) {

            localStorage.setItem(
                "bookedToken",
                JSON.stringify(bookingData)
            );

        }

    }, [bookingData]);

    return (
        <div className="min-h-screen bg-[#f6f8fc] p-5 lg:p-7">

            {/* TOP STATUS */}
            {/* TOP STATUS */}
            <div className="flex items-center justify-between flex-wrap gap-4">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                    h-[52px]
                    px-5
                    rounded-2xl
                    bg-white
                    border
                    border-slate-200
                    flex
                    items-center
                    gap-2
                    text-slate-700
                    hover:bg-slate-100
                    transition-all
                "
                    >

                        <ArrowLeft size={18} />

                        Back

                    </button>

                    <div className="flex items-center gap-3 text-emerald-600 font-medium">

                        <Wifi size={18} />

                        Live Queue Connected

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div
                    className="
                h-[50px]
                px-5
                rounded-2xl
                bg-white
                border
                border-slate-200
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-700
            "
                >

                    <ShieldCheck size={16} />

                    Smart Queue Protection Enabled

                </div>

            </div>

            {/* HERO SECTION */}
            <div
                className="
                        relative
                        overflow-hidden
                        mt-5
                        rounded-[40px]
                        bg-gradient-to-br
                        from-emerald-500
                        via-green-500
                        to-teal-600
                        p-7
                        lg:p-10
                        text-white
                    "
            >

                <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-white/10 blur-3xl" />

                <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] rounded-full bg-black/10 blur-3xl" />

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-10">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-2">

                            <Sparkles size={16} />

                            <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">
                                Queue Successfully Reserved
                            </p>

                        </div>

                        <h1 className="mt-5 text-[48px] md:text-[64px] leading-none font-bold tracking-tight">
                            Token
                            <br />
                            Confirmed
                        </h1>

                        <p className="mt-6 max-w-[680px] text-emerald-50 leading-relaxed">
                            Your digital queue token has been generated
                            successfully. You will receive live updates and
                            browser notifications before your turn arrives.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <div
                                className="
                                        h-[56px]
                                        px-5
                                        rounded-2xl
                                        bg-white/15
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        gap-2
                                    "
                            >

                                <Bell size={18} />

                                Notifications Enabled

                            </div>

                            <div
                                className="
                                        h-[56px]
                                        px-5
                                        rounded-2xl
                                        bg-white/15
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        gap-2
                                    "
                            >

                                <Activity size={18} />

                                Live Tracking Active

                            </div>

                        </div>

                    </div>

                    {/* TOKEN CARD */}
                    <div
                        className="
                                w-full
                                sm:w-[360px]
                                rounded-[34px]
                                bg-white/15
                                backdrop-blur-2xl
                                border
                                border-white/10
                                p-7
                            "
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-emerald-100">
                                Your Queue Token
                            </p>

                            <CircleCheckBig size={24} />

                        </div>

                        <h2 className="mt-6 text-[90px] leading-none font-bold tracking-tight">
                            {tokenNumber}
                        </h2>

                        <div className="mt-7 flex items-center justify-between">

                            <div>

                                <p className="text-xs text-emerald-100">
                                    Queue Position
                                </p>

                                <h4 className="mt-1 text-xl font-semibold">
                                    {peopleAhead} Ahead
                                </h4>

                            </div>

                            <div>

                                <p className="text-xs text-emerald-100">
                                    Estimated Wait
                                </p>

                                <h4 className="mt-1 text-xl font-semibold">
                                    {waitTime}
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* STATS */}
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 mt-5">

                {[
                    {
                        title: "Token Number",
                        value: tokenNumber,
                        icon: <Ticket size={22} />,
                    },

                    {
                        title: "People Ahead",
                        value: peopleAhead,
                        icon: <Users size={22} />,
                    },

                    {
                        title: "Estimated Wait",
                        value: waitTime,
                        icon: <Clock3 size={22} />,
                    },

                    {
                        title: "Notification",
                        value: "ON",
                        icon: <Bell size={22} />,
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="
                                relative
                                overflow-hidden
                                rounded-[32px]
                                bg-white
                                border
                                border-slate-200
                                p-6
                            "
                    >

                        <div className="relative z-10">

                            <div
                                className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-slate-900
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                    "
                            >

                                {item.icon}

                            </div>

                            <h2 className="mt-6 text-[42px] leading-none font-bold tracking-tight text-slate-900">
                                {item.value}
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                {item.title}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

            {/* MAIN GRID */}
            <div className="grid xl:grid-cols-[1fr_420px] gap-5 mt-5">

                {/* LEFT */}
                <div
                    className="
                            rounded-[36px]
                            bg-white
                            border
                            border-slate-200
                            p-6
                        "
                >

                    <div>

                        <p className="text-sm text-slate-500">
                            Queue Information
                        </p>

                        <h2 className="mt-2 text-[34px] font-bold tracking-tight text-slate-900">
                            Booking Details
                        </h2>

                    </div>

                    <div className="mt-8 flex flex-col gap-5">

                        {[
                            {
                                icon: <MapPin size={18} />,
                                title: "Organization",
                                value: organizationName,
                            },

                            {
                                icon: <CalendarDays size={18} />,
                                title: "Booking Date",
                                value: `Today • ${bookingTime}`,
                            },

                            {
                                icon: <Clock3 size={18} />,
                                title: "Estimated Call Time",
                                value: waitTime,
                            },

                            {
                                icon: <Bell size={18} />,
                                title: "Notification Status",
                                value: "Browser Alerts Enabled",
                            },

                            {
                                icon: <Users size={18} />,
                                title: "Booked By",
                                value: userName,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="
                                        rounded-[26px]
                                        border
                                        border-slate-200
                                        p-5
                                        flex
                                        items-center
                                        justify-between
                                        gap-5
                                        flex-wrap
                                    "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-slate-100
                                                flex
                                                items-center
                                                justify-center
                                                text-slate-700
                                            "
                                    >

                                        {item.icon}

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">
                                            {item.title}
                                        </p>

                                        <h4 className="mt-1 text-lg font-semibold text-slate-900">
                                            {item.value}
                                        </h4>

                                    </div>

                                </div>

                                <CircleCheckBig
                                    size={20}
                                    className="text-emerald-500"
                                />

                            </div>
                        ))}

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <button
                            onClick={() => {

                                localStorage.setItem(
                                    "dashboardTab",
                                    "Live Tracking"
                                );

                                navigate("/user/dashboard");
                            }}
                            className="
                                    h-[58px]
                                    px-6
                                    rounded-2xl
                                    bg-slate-900
                                    text-white
                                    font-medium
                                    flex
                                    items-center
                                    gap-2
                                    hover:bg-black
                                    transition-all
                                "
                        >

                            <Activity size={18} />

                            Track Live Queue

                            <ArrowRight size={18} />

                        </button>

                        <button
                            className="
                                    h-[58px]
                                    px-6
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    text-slate-700
                                    font-medium
                                    flex
                                    items-center
                                    gap-2
                                    hover:bg-slate-100
                                    transition-all
                                "
                        >

                            <Download size={18} />

                            Download Token

                        </button>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-5">

                    {/* QR CARD */}
                    <div
                        className="
                                rounded-[36px]
                                bg-white
                                border
                                border-slate-200
                                p-7
                                text-center
                            "
                    >

                        <div
                            className="
                                    w-24
                                    h-24
                                    rounded-[28px]
                                    bg-slate-900
                                    text-white
                                    mx-auto
                                    flex
                                    items-center
                                    justify-center
                                "
                        >

                            <QrCode size={46} />

                        </div>

                        <h2 className="mt-6 text-[30px] font-bold tracking-tight text-slate-900">
                            Smart Queue QR
                        </h2>

                        <p className="mt-3 text-slate-500 leading-relaxed">
                            Scan this QR code at the organization for
                            instant verification and live queue syncing.
                        </p>

                    </div>

                    {/* INFO */}
                    <div
                        className="
                                relative
                                overflow-hidden
                                rounded-[36px]
                                bg-gradient-to-br
                                from-slate-950
                                via-slate-900
                                to-indigo-950
                                p-7
                                text-white
                            "
                    >

                        <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-cyan-500/10 blur-3xl" />

                        <div className="relative z-10">

                            <p className="text-slate-400 text-sm">
                                Smart Reminder
                            </p>

                            <h2 className="mt-5 text-[38px] font-bold leading-tight">
                                Arrive 5 Minutes
                                <br />
                                Before Your Turn
                            </h2>

                            <div className="mt-7 flex items-center gap-2 text-emerald-300">

                                <Bell size={16} />

                                You will be notified automatically

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TokenSuccess;