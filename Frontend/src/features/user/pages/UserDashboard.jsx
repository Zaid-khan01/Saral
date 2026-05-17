import React, { useState, useEffect, useRef } from "react";
import BookTokenPanel from "../components/BookTokenPanel";
import LiveTrackingPanel from "../components/LiveTrackingPanel";
import ProfilePanel from "../components/ProfilePanel";
import SettingsPanel from "../components/SettingsPanel";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logos/Saral-logo.png";

import {
    LayoutDashboard,
    Ticket,
    Bell,
    Settings,
    UserRound,
    MapPin,
    Clock3,
    Activity,
    Sparkles,
    ArrowUpRight,
    Menu,
    X,
    Search,
    ChevronRight,
    Wifi,
    Building2,
    TimerReset,
    ShieldCheck,
    CircleCheckBig,
    TrendingUp,
    Hospital,
    Landmark,
    Store,
    ScanLine,
} from "lucide-react";


const sidebarItems = [
    {
        title: "Overview",
        icon: <LayoutDashboard size={18} />,
    },

    {
        title: "Book Token",
        icon: <Ticket size={18} />,
    },

    {
        title: "Live Tracking",
        icon: <Activity size={18} />,
    },

    {
        title: "Profile",
        icon: <UserRound size={18} />,
    },

    {
        title: "Settings",
        icon: <Settings size={18} />,
    },
];


const UserDashboard = () => {
    const navigate = useNavigate();

    const [active, setActive] = useState(
        localStorage.getItem("dashboardTab") || "Overview"
    );

    const [organizations, setOrganizations] = useState([]);

    const [mobileSidebar, setMobileSidebar] = useState(false);

    const [progress, setProgress] = useState(62);

    const mainContentRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 92) return 62;
                return prev + 1;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        localStorage.removeItem("dashboardTab");

    }, []);

    useEffect(() => {

        const fetchOrganizations = async () => {

            try {

                // FROM BACKEND
                const response = await fetch(
                    "https://saral-hh7e.onrender.com/api/organizations"
                );

                const data = await response.json();

                if (response.ok) {

                    const formattedOrganizations =
                        data.organizations.map((org, index) => {

                            // ICON BASED ON TYPE
                            let icon = <Building2 size={20} />;

                            if (
                                org.type?.toLowerCase().includes("hospital")
                            ) {
                                icon = <Hospital size={20} />;
                            }

                            else if (
                                org.type?.toLowerCase().includes("government")
                            ) {
                                icon = <Landmark size={20} />;
                            }

                            else if (
                                org.type?.toLowerCase().includes("ration")
                            ) {
                                icon = <Store size={20} />;
                            }

                            // COLORS
                            const colors = [
                                "from-cyan-500 to-blue-600",
                                "from-violet-500 to-indigo-600",
                                "from-emerald-500 to-green-600",
                                "from-amber-500 to-orange-600",
                            ];

                            return {
                                ...org,
                                icon,
                                color:
                                    colors[index % colors.length],
                            };
                        });

                    setOrganizations(formattedOrganizations);
                }

            } catch (error) {

                console.log(error);

            }
        };

        fetchOrganizations();

    }, []);


    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: 0,
                behavior: "auto",
            });
        }
    }, [active]);

    return (
        <div className="min-h-screen bg-[#f6f8fc] flex overflow-hidden">

            {/* SIDEBAR */}
            <aside
                className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-[290px]
        bg-white/90
        backdrop-blur-2xl
        border-r
        border-slate-200/70
        transition-all
        duration-300
        flex
        flex-col
        overflow-hidden
        ${mobileSidebar
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
    `}
            >

                {/* FIXED LOGO */}
                <div
                    className="
            shrink-0
            h-[82px]
            px-5
            border-b
            border-slate-100
            flex
            items-center
            justify-between
            bg-white/95
            backdrop-blur-xl
        "
                >

                    <Link to="/" className="flex items-center gap-3">

                        <div
                            className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                "
                        >

                            <img
                                src={logo}
                                alt="Saral"
                                className="w-7 h-7 object-contain"
                            />

                        </div>

                        <div>

                            <h2 className="text-[18px] font-semibold text-slate-900">
                                Saral
                            </h2>

                            <p className="text-xs text-slate-500">
                                Smart Queue System
                            </p>

                        </div>

                    </Link>

                    <button
                        onClick={() => setMobileSidebar(false)}
                        className="lg:hidden"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* SCROLLABLE AREA */}
                <div
                    className="
            flex-1
            overflow-y-auto
            sidebar-scroll
        "
                >

                    {/* USER CARD */}
                    <div className="px-4 pt-5">

                        <div
                            className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    bg-gradient-to-br
                    from-slate-950
                    via-slate-900
                    to-indigo-950
                    p-5
                    text-white
                "
                        >

                            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] rounded-full bg-white/5" />

                            <div className="relative z-10">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                            Welcome Back
                                        </p>

                                        <h3 className="mt-2 text-[20px] font-semibold">
                                            {
                                                JSON.parse(localStorage.getItem("user"))
                                                    ?.fullName || "User"
                                            }
                                        </h3>

                                    </div>

                                    <div
                                        className="
                                w-11
                                h-11
                                rounded-2xl
                                bg-white/10
                                flex
                                items-center
                                justify-center
                            "
                                    >

                                        <ShieldCheck size={18} />

                                    </div>

                                </div>

                                <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">

                                    <MapPin size={14} />

                                    New Delhi, India

                                </div>

                                <div
                                    className="
                            mt-5
                            rounded-2xl
                            bg-white/10
                            border
                            border-white/10
                            p-4
                        "
                                >

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-xs text-slate-400">
                                                Active Queue
                                            </p>

                                            <h4 className="mt-1 text-sm font-medium">
                                                {
                                                    JSON.parse(localStorage.getItem("activeOrganization"))
                                                        ?.organizationName || "No Active Queue"
                                                }
                                            </h4>

                                        </div>

                                        <div className="flex items-center gap-2">

                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                                            <span className="text-xs text-emerald-300">
                                                Live
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* NAVIGATION */}
                    <div className="px-3 py-6">

                        <div className="flex flex-col gap-2">

                            {sidebarItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(item.title)}
                                    className={`
                            w-full
                            h-[58px]
                            px-4
                            rounded-2xl
                            flex
                            items-center
                            justify-between
                            transition-all
                            duration-300
                            group
                            ${active === item.title
                                            ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                                            : "text-slate-600 hover:bg-slate-100"
                                        }
                        `}
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className={`
                                    transition-all
                                    duration-300
                                    ${active === item.title
                                                    ? "text-white"
                                                    : "text-slate-500"
                                                }
                                `}
                                        >

                                            {item.icon}

                                        </div>

                                        <span className="text-[14px] font-medium">
                                            {item.title}
                                        </span>

                                    </div>

                                    <ChevronRight
                                        size={16}
                                        className="
                                opacity-60
                                group-hover:translate-x-1
                                transition-all
                            "
                                    />

                                </button>
                            ))}

                        </div>

                    </div>

                    {/* FIXED LOGOUT */}
                    <div
                        className="
            shrink-0
            p-4
            border-t
            border-slate-100
            bg-white/95
            backdrop-blur-xl
        "
                    >

                        <button
                            className="
                w-full
                h-[56px]
                rounded-2xl
                bg-red-50
                border
                border-red-100
                text-red-600
                flex
                items-center
                justify-between
                px-4
                hover:bg-red-100
                transition-all
                duration-300
                group
            "
                        >

                            <div className="flex items-center gap-3">

                                <UserRound size={18} />

                                <span className="text-[14px] font-medium">
                                    Logout
                                </span>

                            </div>

                            <ChevronRight
                                size={16}
                                className="
                    opacity-70
                    group-hover:translate-x-1
                    transition-all
                "
                            />

                        </button>

                    </div>

                </div>


            </aside>
            {/* OVERLAY */}
            {mobileSidebar && (
                <div
                    onClick={() => setMobileSidebar(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
            )}

            {/* MAIN */}
            <main
                ref={mainContentRef}
                className="flex-1 min-w-0 lg:ml-[285px] h-screen overflow-y-auto scrollbar-hide"
            >

                {/* TOPBAR */}
                <header
                    className="
        sticky
        top-0
        z-40
        h-[78px]
        bg-white/80
        backdrop-blur-xl
        border-b
        border-slate-200/70
        px-5
        lg:px-8
        flex
        items-center
        justify-between
    "
                >

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => setMobileSidebar(true)}
                            className="lg:hidden"
                        >
                            <Menu size={22} />
                        </button>

                        <div>

                            <div className="flex items-center gap-2">

                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Real-Time Queue
                                </p>

                            </div>

                            <h1 className="mt-1 text-[28px] font-bold tracking-tight text-slate-900">
                                User Dashboard
                            </h1>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3">

                        <div
                            className="
                hidden
                md:flex
                items-center
                gap-3
                w-[320px]
                h-[48px]
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
              "
                        >

                            <Search
                                size={16}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                placeholder="Search nearby organizations..."
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                "
                            />

                        </div>

                        <button
                            className="
                h-[48px]
                px-5
                rounded-2xl
                bg-slate-900
                text-white
                text-sm
                font-medium
                flex
                items-center
                gap-2
                hover:bg-black
                transition-all
              "
                        >

                            <Sparkles size={16} />

                            Book Queue

                        </button>

                    </div>

                </header>

                {/* CONTENT */}
                <div className="p-5 lg:p-7 flex flex-col gap-5">
                    {active === "Overview" && (
                        <>

                            {/* HERO */}
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

                                <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-cyan-500/20 blur-3xl" />

                                <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] rounded-full bg-violet-500/20 blur-3xl" />

                                <div
                                    className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        items-start
        justify-between
        gap-10
    "
                                >

                                    {/* LEFT */}
                                    <div className="flex-1 min-w-0">

                                        <div className="flex items-center gap-2">

                                            <Wifi size={15} className="text-emerald-400" />

                                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                                Live Queue Tracking
                                            </p>

                                        </div>

                                        <h1
                                            className="
                    mt-4
                    text-[42px]
                    md:text-[56px]
                    font-bold
                    leading-none
                    tracking-tight
                  "
                                        >
                                            Your Queue Is
                                            <br />
                                            Moving Smoothly
                                        </h1>

                                        <p className="mt-6 max-w-[680px] text-slate-300 leading-relaxed">
                                            Track your token in real-time, receive smart notifications,
                                            and avoid standing in long physical queues using Saral AI.
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-4">

                                            <button
                                                className="
                      h-[54px]
                      px-6
                      rounded-2xl
                      bg-white
                      text-slate-900
                      font-medium
                      flex
                      items-center
                      gap-2
                      hover:scale-[1.02]
                      transition-all
                    "
                                            >

                                                Track My Token

                                                <ArrowUpRight size={18} />

                                            </button>

                                            <button
                                                className="
                      h-[54px]
                      px-6
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-white
                      font-medium
                      hover:bg-white/10
                      transition-all
                    "
                                            >
                                                Explore Nearby
                                            </button>

                                        </div>

                                    </div>

                                    {/* RIGHT CARD */}
                                    <div
                                        className="
        w-full
        lg:w-[340px]
        shrink-0
                  rounded-[30px]
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-6
                "
                                    >

                                        <p className="text-sm text-slate-300">
                                            Current Active Token
                                        </p>

                                        <h2 className="mt-4 text-[72px] leading-none font-bold">
                                            A-31
                                        </h2>

                                        <div className="mt-6">

                                            <div className="flex justify-between text-sm mb-3 text-slate-300">

                                                <span>Queue Progress</span>

                                                <span>{progress}%</span>

                                            </div>

                                            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                                                <div
                                                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-emerald-400
                        transition-all
                        duration-300
                      "
                                                    style={{
                                                        width: `${progress}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                        <div className="mt-7 flex items-center justify-between">

                                            <div>

                                                <p className="text-xs text-slate-400">
                                                    Estimated Wait
                                                </p>

                                                <h4 className="mt-1 text-lg font-semibold">
                                                    12 Minutes
                                                </h4>

                                            </div>

                                            <div className="flex items-center gap-2 text-emerald-300">

                                                <CircleCheckBig size={18} />

                                                Live

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* STATS */}
                            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4">

                                {[
                                    {
                                        title: "Current Token",
                                        value: "A-31",
                                        icon: <Ticket size={20} />,
                                        color: "from-cyan-500 to-blue-600",
                                    },

                                    {
                                        title: "People Ahead",
                                        value: "07",
                                        icon: <UserRound size={20} />,
                                        color: "from-violet-500 to-indigo-600",
                                    },

                                    {
                                        title: "Estimated Wait",
                                        value: "12m",
                                        icon: <Clock3 size={20} />,
                                        color: "from-amber-500 to-orange-500",
                                    },

                                    {
                                        title: "Queue Health",
                                        value: "94%",
                                        icon: <TrendingUp size={20} />,
                                        color: "from-emerald-500 to-green-600",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-white
                  border
                  border-slate-200
                  p-5
                "
                                    >

                                        <div
                                            className={`
                    absolute
                    top-[-20px]
                    right-[-20px]
                    w-[120px]
                    h-[120px]
                    rounded-full
                    blur-3xl
                    opacity-20
                    bg-gradient-to-br
                    ${item.color}
                  `}
                                        />

                                        <div className="relative z-10">

                                            <div className="flex items-center justify-between">

                                                <div
                                                    className={`
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-br
                        ${item.color}
                        text-white
                        flex
                        items-center
                        justify-center
                      `}
                                                >

                                                    {item.icon}

                                                </div>

                                                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">

                                                    <ArrowUpRight size={15} />

                                                    12%

                                                </div>

                                            </div>

                                            <h2 className="mt-5 text-[38px] leading-none font-bold tracking-tight text-slate-900">
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

                            <div className="grid xl:grid-cols-[1.3fr_420px] gap-5">

                                {/* LEFT */}
                                <div className="flex flex-col gap-5">

                                    {/* LIVE TRACKING */}
                                    <div
                                        className="
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  p-6
                "
                                    >

                                        <div className="flex items-center justify-between flex-wrap gap-4">

                                            <div>

                                                <p className="text-sm text-slate-500">
                                                    Real-Time Tracking
                                                </p>

                                                <h2 className="mt-2 text-[30px] font-bold tracking-tight text-slate-900">
                                                    Queue Activity
                                                </h2>

                                            </div>

                                            <div
                                                className="
                      px-4
                      py-2
                      rounded-2xl
                      bg-emerald-50
                      border
                      border-emerald-100
                      text-sm
                      font-medium
                      text-emerald-700
                    "
                                            >
                                                AI Prediction Active
                                            </div>

                                        </div>

                                        <div className="mt-10 flex flex-col gap-8">

                                            {[
                                                {
                                                    token: "A-24",
                                                    status: "Completed",
                                                },

                                                {
                                                    token: "A-25",
                                                    status: "Completed",
                                                },

                                                {
                                                    token: "A-26",
                                                    status: "Serving",
                                                },

                                                {
                                                    token: "A-31",
                                                    status: "Your Token",
                                                },
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-slate-100
                        p-5
                      "
                                                >

                                                    <div className="flex items-center gap-4">

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
                            font-bold
                          "
                                                        >
                                                            {item.token}
                                                        </div>

                                                        <div>

                                                            <h4 className="text-lg font-semibold text-slate-900">
                                                                {item.status}
                                                            </h4>

                                                            <p className="mt-1 text-sm text-slate-500">
                                                                Live Queue Update
                                                            </p>

                                                        </div>

                                                    </div>

                                                    <div className="flex items-center gap-2 text-emerald-600">

                                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                                                        Live

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    {/* ORGANIZATIONS */}
                                    <div
                                        className="
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  p-6
                "
                                    >

                                        <div>

                                            <p className="text-sm text-slate-500">
                                                Nearby Organizations
                                            </p>

                                            <h2 className="mt-2 text-[30px] font-bold tracking-tight text-slate-900">
                                                Book New Queue
                                            </h2>

                                        </div>

                                        <div className="mt-8 grid md:grid-cols-2 gap-5">

                                            {organizations.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-slate-50
                        p-5
                        hover:translate-y-[-3px]
                        transition-all
                        duration-300
                      "
                                                >

                                                    <div
                                                        className={`
                          absolute
                          top-[-20px]
                          right-[-20px]
                          w-[120px]
                          h-[120px]
                          rounded-full
                          blur-3xl
                          opacity-20
                          bg-gradient-to-br
                          ${item.color}
                        `}
                                                    />

                                                    <div className="relative z-10">

                                                        <div className="flex items-center justify-between">

                                                            <div
                                                                className={`
                              w-12
                              h-12
                              rounded-2xl
                              bg-gradient-to-br
                              ${item.color}
                              text-white
                              flex
                              items-center
                              justify-center
                            `}
                                                            >

                                                                {item.icon}

                                                            </div>

                                                            <Building2
                                                                size={18}
                                                                className="text-slate-400"
                                                            />

                                                        </div>

                                                        <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                                            {item.organizationName}
                                                        </h3>

                                                        <p className="mt-1 text-sm text-slate-500">
                                                            {item.type}
                                                        </p>

                                                        <div className="mt-5 flex items-center justify-between text-sm">

                                                            <span className="text-slate-500">
                                                                Wait: {item.wait || "10 mins"}
                                                            </span>

                                                            <span className="text-emerald-600 font-medium">
                                                                {item.crowd || "Medium"}
                                                            </span>

                                                        </div>

                                                        <button
                                                            onClick={() => setActive("Book Token")}
                                                            className="
                            mt-6
                            w-full
                            h-[48px]
                            rounded-2xl
                            bg-slate-900
                            text-white
                            font-medium
                            hover:bg-black
                            transition-all
                          "
                                                        >
                                                            Book Token
                                                        </button>

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col gap-5">

                                    {/* SMART ALERT */}
                                    <div
                                        className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-gradient-to-br
                  from-indigo-500
                  to-violet-600
                  p-7
                  text-white
                "
                                    >

                                        <div className="absolute bottom-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-white/10" />

                                        <div className="relative z-10">

                                            <p className="text-indigo-100 text-sm">
                                                Smart Notification
                                            </p>

                                            <h2 className="mt-5 text-[42px] font-bold leading-tight">
                                                Your Turn
                                                <br />
                                                In 12 Minutes
                                            </h2>

                                            <div className="mt-7 flex items-center gap-3">

                                                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />

                                                <span className="text-indigo-100 text-sm">
                                                    AI Queue Prediction Enabled
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* QUICK STATUS */}
                                    <div
                                        className="
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  p-6
                "
                                    >

                                        <div>

                                            <h2 className="text-[26px] font-bold tracking-tight text-slate-900">
                                                Queue Insights
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Live operational status
                                            </p>

                                        </div>

                                        <div className="mt-7 flex flex-col gap-4">

                                            {[
                                                "Queue speed increased by 18%",
                                                "Hospital crowd currently medium",
                                                "Your token approaching soon",
                                                "Notifications are enabled",
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="
                        rounded-2xl
                        border
                        border-slate-100
                        p-4
                        hover:bg-slate-50
                        transition-all
                      "
                                                >

                                                    <div className="flex items-center gap-3">

                                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

                                                        <p className="text-sm text-slate-700">
                                                            {item}
                                                        </p>

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    {/* MINI CARDS */}
                                    <div className="grid gap-5">

                                        {[
                                            {
                                                title: "Queue Accuracy",
                                                value: "96%",
                                                icon: <TrendingUp size={22} />,
                                                bg: "bg-emerald-50 border-emerald-100",
                                                iconBg: "bg-emerald-100 text-emerald-700",
                                            },

                                            {
                                                title: "Average Response",
                                                value: "2.1s",
                                                icon: <TimerReset size={22} />,
                                                bg: "bg-violet-50 border-violet-100",
                                                iconBg: "bg-violet-100 text-violet-700",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className={`
                      rounded-[30px]
                      border
                      p-5
                      ${item.bg}
                    `}
                                            >

                                                <div className="flex items-center justify-between">

                                                    <div
                                                        className={`
                          w-12
                          h-12
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          ${item.iconBg}
                        `}
                                                    >

                                                        {item.icon}

                                                    </div>

                                                    <ArrowUpRight
                                                        size={18}
                                                        className="text-emerald-600"
                                                    />

                                                </div>

                                                <h2 className="mt-5 text-[38px] leading-none font-bold tracking-tight text-slate-900">
                                                    {item.value}
                                                </h2>

                                                <p className="mt-2 text-sm text-slate-600">
                                                    {item.title}
                                                </p>

                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </>
                    )}

                    {active === "Book Token" && (
                        <BookTokenPanel />
                    )}

                    {active === "Live Tracking" && (
                        <LiveTrackingPanel />
                    )}

                    {active === "Profile" && (
                        <ProfilePanel />
                    )}

                    {active === "Settings" && (
                        <SettingsPanel />
                    )}

                </div>

            </main>

        </div>
    );
};

export default UserDashboard;