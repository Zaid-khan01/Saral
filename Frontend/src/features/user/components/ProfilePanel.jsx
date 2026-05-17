import React, { useEffect, useState } from "react";
import API from "../../../services/api";

import {
    UserRound,
    ShieldCheck,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    BadgeCheck,
    Clock3,
    BellRing,
    Ticket,
    Activity,
    Sparkles,
    ChevronRight,
    Settings,
    ArrowUpRight,
    CircleCheckBig,
    TrendingUp,
} from "lucide-react";

const ProfilePanel = () => {

    const [user, setUser] = useState(null);

    const [stats, setStats] = useState([
        {
            title: "Tokens Booked",
            value: "0",
            icon: <Ticket size={22} />,
            bg: "from-cyan-500 to-blue-600",
        },

        {
            title: "Queues Tracked",
            value: "0",
            icon: <Activity size={22} />,
            bg: "from-violet-500 to-indigo-600",
        },

        {
            title: "Avg Wait Saved",
            value: "0h",
            icon: <Clock3 size={22} />,
            bg: "from-emerald-500 to-green-600",
        },

        {
            title: "Efficiency",
            value: "0%",
            icon: <TrendingUp size={22} />,
            bg: "from-orange-500 to-amber-500",
        },
    ]);

    const [activities, setActivities] = useState([]);

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            setUser(storedUser);
        }

        fetchProfileData();

    }, []);

    const fetchProfileData = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/users/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const profileData = response.data;

            setUser(profileData.user);

            // DYNAMIC STATS
            setStats([
                {
                    title: "Tokens Booked",
                    value: profileData.tokensBooked || "0",
                    icon: <Ticket size={22} />,
                    bg: "from-cyan-500 to-blue-600",
                },

                {
                    title: "Queues Tracked",
                    value: profileData.queuesTracked || "0",
                    icon: <Activity size={22} />,
                    bg: "from-violet-500 to-indigo-600",
                },

                {
                    title: "Avg Wait Saved",
                    value: profileData.waitSaved || "0h",
                    icon: <Clock3 size={22} />,
                    bg: "from-emerald-500 to-green-600",
                },

                {
                    title: "Efficiency",
                    value: profileData.efficiency || "0%",
                    icon: <TrendingUp size={22} />,
                    bg: "from-orange-500 to-amber-500",
                },
            ]);

            // DYNAMIC ACTIVITIES
            if (profileData.activities) {
                setActivities(profileData.activities);
            }

        } catch (error) {

            console.log(error);

        }
    };

    const formatDate = (dateString) => {

        if (!dateString) return "N/A";

        const date = new Date(dateString);

        return date.toLocaleDateString("en-IN", {
            month: "long",
            year: "numeric",
        });
    };

    if (!user) {

        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-xl font-semibold text-slate-700">
                    Loading Profile...
                </h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">

            {/* HERO PROFILE */}
            <div
                className="
          relative
          overflow-hidden
          rounded-[38px]
          bg-gradient-to-br
          from-slate-950
          via-indigo-950
          to-slate-900
          p-7
          text-white
        "
            >

                <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative z-10 grid xl:grid-cols-[320px_1fr] gap-8 items-center">

                    {/* PROFILE CARD */}
                    <div
                        className="
              rounded-[34px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              p-6
            "
                    >

                        <div className="flex flex-col items-center text-center">

                            {/* PROFILE AVATAR */}
                            <div
                                className="
                  w-28
                  h-28
                  rounded-[30px]
                  bg-gradient-to-br
                  from-cyan-400
                  to-violet-500
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  text-white
                  text-4xl
                  font-bold
                "
                            >

                                {user.fullName?.charAt(0).toUpperCase()}

                            </div>

                            <h2 className="mt-6 text-[32px] font-bold tracking-tight">
                                {user.fullName}
                            </h2>

                            <p className="mt-2 text-slate-300">
                                Smart Queue User
                            </p>

                            <div
                                className="
                  mt-5
                  px-4
                  py-2
                  rounded-2xl
                  bg-emerald-500/20
                  border
                  border-emerald-400/20
                  text-emerald-300
                  text-sm
                  font-medium
                  flex
                  items-center
                  gap-2
                "
                            >

                                <BadgeCheck size={16} />

                                Verified Account

                            </div>

                            <button
                                className="
                  mt-7
                  w-full
                  h-[52px]
                  rounded-2xl
                  bg-white
                  text-slate-900
                  font-medium
                  hover:scale-[1.02]
                  transition-all
                "
                            >
                                Edit Profile
                            </button>

                        </div>

                    </div>

                    {/* RIGHT INFO */}
                    <div>

                        <div className="flex items-center gap-2">

                            <Sparkles
                                size={16}
                                className="text-emerald-400"
                            />

                            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                User Profile Dashboard
                            </p>

                        </div>

                        <h1
                            className="
                mt-5
                text-[42px]
                md:text-[58px]
                font-bold
                leading-none
                tracking-tight
              "
                        >
                            Welcome Back,
                            <br />
                            {user.fullName}
                        </h1>

                        <p className="mt-6 max-w-[720px] text-slate-300 leading-relaxed">
                            Access your profile information, queue activity,
                            smart analytics, and personalized experience
                            settings from one intelligent dashboard.
                        </p>

                        {/* DETAILS */}
                        <div className="mt-10 grid md:grid-cols-2 gap-4">

                            {[
                                {
                                    icon: <Mail size={18} />,
                                    label: "Email",
                                    value: user.email || "N/A",
                                },

                                {
                                    icon: <Phone size={18} />,
                                    label: "Phone",
                                    value: user.phone || "Not Added",
                                },

                                {
                                    icon: <MapPin size={18} />,
                                    label: "Location",
                                    value: user.location || "India",
                                },

                                {
                                    icon: <CalendarDays size={18} />,
                                    label: "Joined",
                                    value: formatDate(user.createdAt),
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                  "
                                >

                                    <div className="flex items-center gap-3">

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
                                            {item.icon}
                                        </div>

                                        <div>

                                            <p className="text-xs text-slate-400">
                                                {item.label}
                                            </p>

                                            <h4 className="mt-1 text-sm font-medium break-all">
                                                {item.value}
                                            </h4>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* STATS */}
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5">

                {stats.map((item, index) => (
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
                ${item.bg}
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
                    ${item.bg}
                    text-white
                    flex
                    items-center
                    justify-center
                  `}
                                >

                                    {item.icon}

                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-emerald-600"
                                />

                            </div>

                            <h2 className="mt-5 text-[40px] font-bold leading-none tracking-tight text-slate-900">
                                {item.value}
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                {item.title}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

            {/* BOTTOM GRID */}
            <div className="grid xl:grid-cols-[1.2fr_420px] gap-6">

                {/* RECENT ACTIVITY */}
                <div
                    className="
            rounded-[34px]
            bg-white
            border
            border-slate-200
            p-6
          "
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-slate-500">
                                User Activity
                            </p>

                            <h2 className="mt-2 text-[32px] font-bold tracking-tight text-slate-900">
                                Recent Actions
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
                            Synced Live
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col gap-4">

                        {activities.length > 0 ? (
                            activities.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-[26px]
                    border
                    border-slate-100
                    p-5
                    hover:bg-slate-50
                    transition-all
                  "
                                >

                                    <div className="flex items-center justify-between">

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
                        "
                                            >

                                                <Activity size={22} />

                                            </div>

                                            <div>

                                                <h3 className="text-lg font-semibold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm text-slate-500">
                                                    {item.time}
                                                </p>

                                            </div>

                                        </div>

                                        <ChevronRight
                                            size={18}
                                            className="text-slate-400"
                                        />

                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-slate-500">
                                No Recent Activity
                            </div>
                        )}

                    </div>

                </div>

                {/* SETTINGS PANEL */}
                <div className="flex flex-col gap-6">

                    {/* ACCOUNT STATUS */}
                    <div
                        className="
              relative
              overflow-hidden
              rounded-[34px]
              bg-gradient-to-br
              from-violet-600
              to-indigo-700
              p-7
              text-white
            "
                    >

                        <div className="absolute bottom-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-white/10" />

                        <div className="relative z-10">

                            <div
                                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
                            >

                                <ShieldCheck size={26} />

                            </div>

                            <h2 className="mt-6 text-[38px] leading-tight font-bold">
                                Account
                                <br />
                                Protected
                            </h2>

                            <p className="mt-4 text-indigo-100 leading-relaxed">
                                Your profile and queue activities are secured
                                with encrypted real-time authentication systems.
                            </p>

                        </div>

                    </div>

                    {/* QUICK SETTINGS */}
                    <div
                        className="
              rounded-[34px]
              bg-white
              border
              border-slate-200
              p-6
            "
                    >

                        <h2 className="text-[28px] font-bold tracking-tight text-slate-900">
                            Quick Settings
                        </h2>

                        <div className="mt-7 flex flex-col gap-4">

                            {[
                                {
                                    title: "Notification Alerts",
                                    icon: <BellRing size={18} />,
                                },

                                {
                                    title: "Queue Preferences",
                                    icon: <Settings size={18} />,
                                },

                                {
                                    title: "Security & Privacy",
                                    icon: <ShieldCheck size={18} />,
                                },

                                {
                                    title: "Verification Status",
                                    icon: <CircleCheckBig size={18} />,
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
                    p-4
                    hover:bg-slate-50
                    transition-all
                    cursor-pointer
                  "
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                        w-11
                        h-11
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

                                        <p className="text-sm font-medium text-slate-700">
                                            {item.title}
                                        </p>

                                    </div>

                                    <ChevronRight
                                        size={18}
                                        className="text-slate-400"
                                    />

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProfilePanel;