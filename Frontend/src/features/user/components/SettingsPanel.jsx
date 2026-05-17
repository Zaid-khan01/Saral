import React, { useState } from "react";

import {
    Bell,
    ShieldCheck,
    Smartphone,
    MoonStar,
    Globe,
    Lock,
    ChevronRight,
    Check,
    UserRound,
    Mail,
    Phone,
    MapPin,
    Sparkles,
} from "lucide-react";

const SettingToggle = ({ enabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
        relative
        w-[58px]
        h-[32px]
        rounded-full
        transition-all
        duration-300
        ${enabled ? "bg-slate-900" : "bg-slate-200"}
      `}
        >

            <div
                className={`
          absolute
          top-1
          w-6
          h-6
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${enabled ? "left-[28px]" : "left-1"}
        `}
            />

        </button>
    );
};

const SettingsPanel = () => {

    const [notifications, setNotifications] = useState(true);

    const [darkMode, setDarkMode] = useState(false);

    const [biometric, setBiometric] = useState(true);

    const [locationAccess, setLocationAccess] = useState(true);

    return (
        <div className="flex flex-col gap-6">

            {/* TOP HERO */}
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

                <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] rounded-full bg-violet-500/10 blur-3xl" />

                <div
                    className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        items-start
        justify-between
        gap-8
    "
                >

                    <div className="flex-1 min-w-0">

                        <div className="flex items-center gap-2">

                            <Sparkles size={16} className="text-emerald-400" />

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                Personal Preferences
                            </p>

                        </div>

                        <h1 className="mt-4 text-[42px] md:text-[56px] font-bold leading-none tracking-tight">
                            Account
                            <br />
                            Settings
                        </h1>

                        <p className="mt-6 max-w-[650px] text-slate-300 leading-relaxed">
                            Manage your notifications, privacy, preferences,
                            and personalize your Saral experience.
                        </p>

                    </div>

                    <div
                        className="
        w-full
        lg:w-[320px]
        shrink-0
              rounded-[30px]
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-6
            "
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
                            >

                                <UserRound size={30} />

                            </div>

                            <div>

                                <h2 className="text-xl font-semibold">
                                    Zaid Khan
                                </h2>

                                <p className="text-sm text-slate-300">
                                    Premium Account
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 flex items-center gap-2 text-emerald-300">

                            <Check size={18} />

                            Account Verified

                        </div>

                    </div>

                </div>

            </div>

            {/* GRID */}
            <div className="grid xl:grid-cols-[1.1fr_420px] gap-6">

                {/* LEFT */}
                <div className="flex flex-col gap-6">

                    {/* PROFILE INFO */}
                    <div
                        className="
              rounded-[32px]
              bg-white
              border
              border-slate-200
              p-6
            "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-500">
                                    Personal Information
                                </p>

                                <h2 className="mt-2 text-[28px] font-bold tracking-tight text-slate-900">
                                    Profile Details
                                </h2>

                            </div>

                            <button
                                className="
                  px-5
                  h-[46px]
                  rounded-2xl
                  bg-slate-900
                  text-white
                  text-sm
                  font-medium
                "
                            >
                                Edit Profile
                            </button>

                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-5">

                            {[
                                {
                                    icon: <Mail size={18} />,
                                    title: "Email Address",
                                    value: "zaidkhan@gmail.com",
                                },

                                {
                                    icon: <Phone size={18} />,
                                    title: "Phone Number",
                                    value: "+91 9876543210",
                                },

                                {
                                    icon: <MapPin size={18} />,
                                    title: "Location",
                                    value: "New Delhi, India",
                                },

                                {
                                    icon: <ShieldCheck size={18} />,
                                    title: "Account Status",
                                    value: "Verified User",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    p-5
                  "
                                >

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

                                    <p className="mt-5 text-sm text-slate-500">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-2 text-lg font-semibold text-slate-900 break-all">
                                        {item.value}
                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* SECURITY */}
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
                                Privacy & Protection
                            </p>

                            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-slate-900">
                                Security Settings
                            </h2>

                        </div>

                        <div className="mt-8 flex flex-col gap-4">

                            {[
                                "Change Password",
                                "Two-Factor Authentication",
                                "Manage Sessions",
                                "Privacy Controls",
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    className="
                    h-[68px]
                    px-5
                    rounded-2xl
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-between
                    hover:bg-slate-50
                    transition-all
                  "
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="
                        w-11
                        h-11
                        rounded-2xl
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                      "
                                        >

                                            <Lock size={18} />

                                        </div>

                                        <span className="font-medium text-slate-800">
                                            {item}
                                        </span>

                                    </div>

                                    <ChevronRight
                                        size={18}
                                        className="text-slate-400"
                                    />

                                </button>
                            ))}

                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-6">

                    {/* PREFERENCES */}
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
                                Experience Controls
                            </p>

                            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-slate-900">
                                Preferences
                            </h2>

                        </div>

                        <div className="mt-8 flex flex-col gap-5">

                            {[
                                {
                                    title: "Push Notifications",
                                    subtitle: "Receive queue alerts",
                                    icon: <Bell size={20} />,
                                    enabled: notifications,
                                    action: () =>
                                        setNotifications(!notifications),
                                },

                                {
                                    title: "Dark Mode",
                                    subtitle: "Enable dark appearance",
                                    icon: <MoonStar size={20} />,
                                    enabled: darkMode,
                                    action: () =>
                                        setDarkMode(!darkMode),
                                },

                                {
                                    title: "Biometric Login",
                                    subtitle: "Face/Fingerprint authentication",
                                    icon: <Smartphone size={20} />,
                                    enabled: biometric,
                                    action: () =>
                                        setBiometric(!biometric),
                                },

                                {
                                    title: "Location Access",
                                    subtitle: "Nearby queue recommendations",
                                    icon: <Globe size={20} />,
                                    enabled: locationAccess,
                                    action: () =>
                                        setLocationAccess(!locationAccess),
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    p-5
                    flex
                    items-center
                    justify-between
                    gap-4
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

                                            <h3 className="font-semibold text-slate-900">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-slate-500">
                                                {item.subtitle}
                                            </p>

                                        </div>

                                    </div>

                                    <SettingToggle
                                        enabled={item.enabled}
                                        onClick={item.action}
                                    />

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* AI STATUS */}
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
                                Smart System
                            </p>

                            <h2 className="mt-5 text-[38px] font-bold leading-tight">
                                AI Queue
                                <br />
                                Personalization
                            </h2>

                            <p className="mt-5 text-indigo-100 leading-relaxed">
                                Your dashboard is optimized using smart queue
                                behavior analysis and personalized predictions.
                            </p>

                            <button
                                className="
                  mt-7
                  h-[50px]
                  px-6
                  rounded-2xl
                  bg-white
                  text-slate-900
                  font-medium
                  hover:scale-[1.02]
                  transition-all
                "
                            >
                                Manage AI Settings
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SettingsPanel;