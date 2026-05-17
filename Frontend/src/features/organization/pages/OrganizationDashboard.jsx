import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Ticket,
    Bell,
    Settings,
    ChevronRight,
    Menu,
    X,
    Search,
    MapPin,
    Clock3,
    TrendingUp,
    Activity,
    Sparkles,
    MoreHorizontal,
    ArrowUpRight,
    ShieldCheck,
    CircleDashed,
    CalendarDays,
    UserRound,
    Wifi,
    AlertTriangle,
} from "lucide-react";

import logo from "../../../assets/logos/Saral-logo.png";
import QueueManagementPanel from "../components/QueueManagementPanel";
import TokenControlPanel from "../components/TokenControlPanel";
import AnalyticsPanel from "../components/AnalyticsPanel";
import NotificationPanel from "../components/NotificationPanel";
import SettingsPanel from "../components/SettingsPanel";

const sidebarItems = [
    {
        title: "Overview",
        icon: <LayoutDashboard size={18} />,
    },

    {
        title: "Queue Management",
        icon: <Users size={18} />,
    },

    {
        title: "Token Control",
        icon: <Ticket size={18} />,
    },

    {
        title: "Analytics",
        icon: <TrendingUp size={18} />,
    },

    {
        title: "Notifications",
        icon: <Bell size={18} />,
    },

    {
        title: "Settings",
        icon: <Settings size={18} />,
    },
];

const stats = [
    {
        title: "Active Queue",
        value: "128",
        subtitle: "People waiting",
    },

    {
        title: "Today's Tokens",
        value: "542",
        subtitle: "Generated today",
    },

    {
        title: "Avg. Wait",
        value: "12m",
        subtitle: "Current estimate",
    },

    {
        title: "Queue Health",
        value: "94%",
        subtitle: "Operational score",
    },
];

const OrganizationDashboard = () => {
    const [active, setActive] = useState("Overview");
    const [mobileSidebar, setMobileSidebar] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [active]);

    return (
        <div className="min-h-screen bg-[#f5f7fb] flex">

            {/* SIDEBAR */}
            <aside
                className={`
      fixed
      top-0
      left-0
      z-50
      h-screen
      w-[285px]
      overflow-y-auto sidebar-scroll
      bg-white/95
      backdrop-blur-xl
      border-r
      border-slate-200/70
      transition-all
      duration-300
      flex
      flex-col
      ${mobileSidebar
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
    `}
            >

                {/* TOP */}
                <div
                    className="
            h-[76px]
            px-5
            border-b
            border-slate-100
            flex
            items-center
            justify-between
          "
                >

                    <div className="flex items-center gap-2">

                        <Link to="/" className="flex items-center gap-2">
                            <div
                                className="
            w-15
            h-15
            rounded-2xl
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

                                <h2 className="text-[17px] font-semibold text-slate-900">
                                    Saral
                                </h2>

                                <p className="text-xs text-slate-500">
                                    Organization Console
                                </p>

                            </div>
                        </Link>

                    </div>

                    <button
                        onClick={() => setMobileSidebar(false)}
                        className="lg:hidden"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* ORGANIZATION CARD */}
                <div className="px-4 pt-5">

                    <div
                        className="
              rounded-[28px]
              bg-gradient-to-br
              from-slate-900
              via-slate-800
              to-slate-900
              p-5
              text-white
              overflow-hidden
              relative
            "
                    >

                        <div
                            className="
                absolute
                top-[-40px]
                right-[-40px]
                w-[140px]
                h-[140px]
                rounded-full
                bg-white/5
              "
                        />

                        <div className="relative z-10">

                            <div className="flex items-start justify-between">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                        Organization
                                    </p>

                                    <h3 className="mt-2 text-[18px] font-semibold">
                                        {
                                            JSON.parse(localStorage.getItem("organization"))
                                                ?.organizationName || "Organization"
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
                  bg-white/8
                  border
                  border-white/10
                  p-4
                "
                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-400">
                                            Queue Status
                                        </p>

                                        <h4 className="mt-1 text-sm font-medium">
                                            Running Smoothly
                                        </h4>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />

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
                <div className="flex-1 px-3 py-6 flex flex-col gap-1.5">

                    {sidebarItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(item.title)}
                            className={`
                w-full
                h-[56px]
                px-4
                rounded-2xl
                flex
                items-center
                justify-between
                transition-all
                duration-200
                ${active === item.title
                                    ? "bg-slate-900 text-white shadow-lg"
                                    : "text-slate-600 hover:bg-slate-100"
                                }
              `}
                        >

                            <div className="flex items-center gap-3">

                                {item.icon}

                                <span className="text-[14px] font-medium">
                                    {item.title}
                                </span>

                            </div>

                            <ChevronRight size={16} />

                        </button>
                    ))}

                </div>

                {/* BOTTOM */}
                <div className="p-4 border-t border-slate-100">

                    <div
                        className="
              rounded-2xl
              bg-slate-50
              border
              border-slate-200
              p-3
              flex
              items-center
              gap-3
            "
                    >

                        <div
                            className="
                w-11
                h-11
                rounded-2xl
                bg-slate-900
                text-white
                flex
                items-center
                justify-center
                font-semibold
              "
                        >
                            CK
                        </div>

                        <div className="flex-1">

                            <h4 className="text-sm font-semibold text-slate-900">
                                Dr. Karan
                            </h4>

                            <p className="text-xs text-slate-500">
                                Super Admin
                            </p>

                        </div>

                        <button>
                            <MoreHorizontal
                                size={18}
                                className="text-slate-400"
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
            <main className="flex-1 min-w-0 lg:ml-[285px]">

                {/* TOPBAR */}
                <header
                    className="
            sticky
            top-0
            z-30
            h-[76px]
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

                                <div className="w-2 h-2 rounded-full bg-emerald-500" />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Live Operations
                                </p>

                            </div>

                            <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-slate-900">
                                Queue Overview
                            </h1>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3">

                        {/* SEARCH */}
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
                                placeholder="Search queues, tokens..."
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

                            Open Tokens

                        </button>

                    </div>

                </header>

                {/* CONTENT */}
                <div className="p-5 lg:p-7">

                    {/* OVERVIEW */}
                    {active === "Overview" && (
                        <>

                            {/* STATS */}
                            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4">

                                {stats.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                      rounded-[28px]
                      bg-white
                      border
                      border-slate-200
                      p-5
                      relative
                      overflow-hidden
                    "
                                    >

                                        <div
                                            className="
                        absolute
                        right-[-20px]
                        top-[-20px]
                        w-[100px]
                        h-[100px]
                        rounded-full
                        bg-slate-100
                      "
                                        />

                                        <div className="relative z-10">

                                            <p className="text-sm text-slate-500">
                                                {item.title}
                                            </p>

                                            <h3 className="mt-3 text-[38px] leading-none font-bold tracking-tight text-slate-900">
                                                {item.value}
                                            </h3>

                                            <div className="mt-4 flex items-center justify-between">

                                                <p className="text-sm text-slate-500">
                                                    {item.subtitle}
                                                </p>

                                                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">

                                                    <ArrowUpRight size={15} />

                                                    12%

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* GRID */}
                            <div className="grid xl:grid-cols-[1.4fr_420px] gap-5 mt-5">

                                {/* LEFT */}
                                <div className="flex flex-col gap-5">

                                    {/* PERFORMANCE */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <p className="text-sm text-slate-500">
                                                    Queue Performance
                                                </p>

                                                <h2 className="mt-2 text-[28px] font-semibold tracking-tight text-slate-900">
                                                    Operations Running Smoothly
                                                </h2>

                                            </div>

                                            <div
                                                className="
                          px-4
                          py-2
                          rounded-full
                          bg-emerald-50
                          border
                          border-emerald-100
                          text-emerald-700
                          text-sm
                          font-medium
                        "
                                            >
                                                Live Queue
                                            </div>

                                        </div>

                                        <div className="mt-8 grid md:grid-cols-3 gap-5">

                                            {[
                                                {
                                                    title: "Queue Efficiency",
                                                    value: "92%",
                                                },

                                                {
                                                    title: "Satisfaction",
                                                    value: "96%",
                                                },

                                                {
                                                    title: "Completion Rate",
                                                    value: "88%",
                                                },
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="
                            rounded-2xl
                            bg-slate-50
                            border
                            border-slate-100
                            p-5
                          "
                                                >

                                                    <p className="text-sm text-slate-500">
                                                        {item.title}
                                                    </p>

                                                    <h3 className="mt-3 text-[36px] font-bold tracking-tight text-slate-900">
                                                        {item.value}
                                                    </h3>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    {/* TIMELINE */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <h2 className="text-[22px] font-semibold tracking-tight text-slate-900">
                                                    Live Queue Timeline
                                                </h2>

                                                <p className="mt-1 text-sm text-slate-500">
                                                    Real-time operational activities
                                                </p>

                                            </div>

                                            <div
                                                className="
                          flex
                          items-center
                          gap-2
                          text-emerald-600
                          text-sm
                          font-medium
                        "
                                            >

                                                <Wifi size={15} />

                                                Live

                                            </div>

                                        </div>

                                        <div className="mt-8 flex flex-col gap-6">

                                            {[
                                                {
                                                    title: "Token A-24 completed successfully",
                                                    time: "2 mins ago",
                                                },

                                                {
                                                    title: "Queue resumed by admin",
                                                    time: "5 mins ago",
                                                },

                                                {
                                                    title: "12 new tokens generated",
                                                    time: "8 mins ago",
                                                },

                                                {
                                                    title: "Average wait time reduced",
                                                    time: "15 mins ago",
                                                },
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-4"
                                                >

                                                    <div className="flex flex-col items-center">

                                                        <div className="w-3 h-3 rounded-full bg-slate-900" />

                                                        {index !== 3 && (
                                                            <div className="w-[1px] h-full bg-slate-200 mt-2" />
                                                        )}

                                                    </div>

                                                    <div className="pb-4">

                                                        <p className="text-sm font-medium text-slate-800">
                                                            {item.title}
                                                        </p>

                                                        <p className="mt-1 text-xs text-slate-400">
                                                            {item.time}
                                                        </p>

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    {/* DEPARTMENTS */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div>

                                            <h2 className="text-[22px] font-semibold tracking-tight text-slate-900">
                                                Department Status
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Queue load distribution
                                            </p>

                                        </div>

                                        <div className="mt-7 space-y-6">

                                            {[
                                                {
                                                    name: "General OPD",
                                                    load: "82%",
                                                },

                                                {
                                                    name: "Pediatrics",
                                                    load: "61%",
                                                },

                                                {
                                                    name: "Cardiology",
                                                    load: "47%",
                                                },

                                                {
                                                    name: "Emergency",
                                                    load: "95%",
                                                },
                                            ].map((item, index) => (
                                                <div key={index}>

                                                    <div className="flex justify-between mb-2">

                                                        <span className="text-sm font-medium text-slate-700">
                                                            {item.name}
                                                        </span>

                                                        <span className="text-sm text-slate-500">
                                                            {item.load}
                                                        </span>

                                                    </div>

                                                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">

                                                        <div
                                                            className="h-full rounded-full bg-slate-900"
                                                            style={{
                                                                width: item.load,
                                                            }}
                                                        />

                                                    </div>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col gap-5">

                                    {/* CURRENT TOKEN */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-gradient-to-br
                      from-slate-900
                      via-slate-800
                      to-slate-900
                      text-white
                      p-7
                      overflow-hidden
                      relative
                    "
                                    >

                                        <div
                                            className="
                        absolute
                        bottom-[-50px]
                        right-[-50px]
                        w-[180px]
                        h-[180px]
                        rounded-full
                        bg-white/5
                      "
                                        />

                                        <div className="relative z-10">

                                            <p className="text-sm text-slate-400">
                                                Current Serving Token
                                            </p>

                                            <h2 className="mt-5 text-[82px] leading-none font-bold tracking-tight">
                                                A-24
                                            </h2>

                                            <div className="mt-7 flex items-center gap-3">

                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />

                                                <span className="text-sm text-slate-300">
                                                    Queue Running Smoothly
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* WAIT */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-amber-50
                          flex
                          items-center
                          justify-center
                        "
                                            >

                                                <Clock3
                                                    size={22}
                                                    className="text-amber-600"
                                                />

                                            </div>

                                            <div>

                                                <p className="text-sm text-slate-500">
                                                    Average Wait Time
                                                </p>

                                                <h3 className="mt-1 text-[32px] font-bold tracking-tight text-slate-900">
                                                    12 Minutes
                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                    {/* LIVE FEED */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div>

                                            <h2 className="text-[22px] font-semibold tracking-tight text-slate-900">
                                                Live Token Feed
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Incoming queue activity
                                            </p>

                                        </div>

                                        <div className="mt-6 flex flex-col gap-4">

                                            {[
                                                "Token A-27 joined queue",
                                                "Token A-24 called",
                                                "Token A-21 completed",
                                                "Token A-28 generated",
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
                            px-4
                            py-4
                          "
                                                >

                                                    <div className="flex items-center gap-3">

                                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

                                                        <p className="text-sm text-slate-700">
                                                            {item}
                                                        </p>

                                                    </div>

                                                    <span className="text-xs text-slate-400">
                                                        Now
                                                    </span>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    {/* ALERTS */}
                                    <div
                                        className="
                      rounded-[30px]
                      bg-white
                      border
                      border-slate-200
                      p-6
                    "
                                    >

                                        <div className="flex items-center gap-3">

                                            <AlertTriangle
                                                size={18}
                                                className="text-amber-500"
                                            />

                                            <h2 className="text-[20px] font-semibold tracking-tight text-slate-900">
                                                Queue Alerts
                                            </h2>

                                        </div>

                                        <div className="mt-5 flex flex-col gap-4">

                                            <div
                                                className="
                          rounded-2xl
                          bg-amber-50
                          border
                          border-amber-100
                          p-4
                        "
                                            >

                                                <p className="text-sm font-medium text-amber-700">
                                                    Emergency queue reaching capacity
                                                </p>

                                            </div>

                                            <div
                                                className="
                          rounded-2xl
                          bg-blue-50
                          border
                          border-blue-100
                          p-4
                        "
                                            >

                                                <p className="text-sm font-medium text-blue-700">
                                                    Peak traffic expected at 4 PM
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </>
                    )}

                    {/* QUEUE MANAGEMENT */}
                    {active === "Queue Management" && (
                        <QueueManagementPanel />
                    )}

                    {/* TOKEN CONTROL */}
                    {active === "Token Control" && (
                        <TokenControlPanel />
                    )}

                    {active === "Analytics" && (
                        <AnalyticsPanel />
                    )}

                    {active === "Notifications" && (
                        <NotificationPanel />
                    )}

                    {active === "Settings" && (
                        <SettingsPanel />
                    )}

                </div>

            </main>

        </div>
    );
};

export default OrganizationDashboard;