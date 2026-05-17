import React from "react";

import {
  Settings,
  ShieldCheck,
  BellRing,
  UserRound,
  Lock,
  Globe,
  Smartphone,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Wifi,
  MoonStar,
  Database,
  KeyRound,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const settingsSections = [
  {
    title: "Organization Profile",
    desc: "Manage hospital and queue information",
    icon: <UserRound size={20} />,
  },

  {
    title: "Notification Preferences",
    desc: "Control alerts and push notifications",
    icon: <BellRing size={20} />,
  },

  {
    title: "Security & Access",
    desc: "Authentication and role permissions",
    icon: <ShieldCheck size={20} />,
  },

  {
    title: "Queue Automation",
    desc: "AI automation and smart scheduling",
    icon: <Sparkles size={20} />,
  },

  {
    title: "API & Integrations",
    desc: "Connect external systems and services",
    icon: <Database size={20} />,
  },
];

const SettingsPanel = () => {
  return (
    <div className="flex flex-col gap-5">

      {/* HERO */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-indigo-950
          p-7
          text-white
          border
          border-slate-800
        "
      >

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10">

          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  System Configuration
                </p>

              </div>

              <h1
                className="
                  mt-3
                  text-[36px]
                  md:text-[46px]
                  leading-none
                  font-bold
                  tracking-tight
                "
              >
                Smart Settings Center
              </h1>

              <p className="mt-5 text-slate-300 max-w-[700px] leading-relaxed">
                Configure organization preferences, queue automation,
                notifications, security permissions and intelligent
                operational settings for your Saral ecosystem.
              </p>

            </div>

            {/* RIGHT CARD */}
            <div
              className="
                w-full
xl:w-[320px]
xl:min-w-[320px]
                rounded-[30px]
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-300">
                    System Health
                  </p>

                  <h2 className="mt-2 text-[64px] font-bold leading-none">
                    99%
                  </h2>

                </div>

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-indigo-500/20
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Settings size={28} className="text-indigo-300" />

                </div>

              </div>

              <div className="mt-6 flex items-center gap-3">

                <ArrowUpRight size={18} className="text-emerald-400" />

                <span className="text-sm text-slate-300">
                  All systems configured properly
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SETTINGS GRID */}
      <div className="grid xl:grid-cols-[1.2fr_420px] gap-5">

        {/* LEFT */}
        <div className="flex flex-col gap-5">

          {/* SETTINGS CARDS */}
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

              <h2 className="text-[28px] font-semibold tracking-tight text-slate-900">
                Platform Settings
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Configure and customize your organization workspace
              </p>

            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">

              {settingsSections.map((item, index) => (
                <button
                  key={index}
                  className="
                    rounded-[24px]
                    border
                    border-slate-200
                    p-5
                    text-left
                    hover:bg-slate-50
                    transition-all
                    group
                  "
                >

                  <div className="flex items-start justify-between">

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

                    <ChevronRight
                      size={18}
                      className="
                        text-slate-400
                        group-hover:translate-x-1
                        transition-all
                      "
                    />

                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>

                </button>
              ))}

            </div>

          </div>

          {/* SECURITY */}
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

                <h2 className="text-[26px] font-semibold tracking-tight text-slate-900">
                  Security Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Authentication and protection systems
                </p>

              </div>

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                "
              >

                <ShieldCheck size={22} className="text-emerald-700" />

              </div>

            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">

              {[
                {
                  title: "2FA Enabled",
                  icon: <Lock size={20} />,
                },

                {
                  title: "API Protected",
                  icon: <KeyRound size={20} />,
                },

                {
                  title: "Realtime Sync",
                  icon: <Wifi size={20} />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    p-5
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-white
                      flex
                      items-center
                      justify-center
                      text-slate-700
                    "
                  >

                    {item.icon}

                  </div>

                  <h3 className="mt-4 text-sm font-medium text-slate-800">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-emerald-600 text-sm">

                    <CheckCircle2 size={15} />

                    Active

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* LIVE STATUS */}
          <div
            className="
              rounded-[30px]
              bg-gradient-to-br
              from-indigo-500
              to-blue-600
              text-white
              p-7
              overflow-hidden
              relative
            "
          >

            <div className="absolute right-[-50px] bottom-[-50px] w-[180px] h-[180px] rounded-full bg-white/10" />

            <div className="relative z-10">

              <p className="text-indigo-100 text-sm">
                System Mode
              </p>

              <h2 className="mt-4 text-[74px] leading-none font-bold">
                Auto
              </h2>

              <div className="mt-5 flex items-center gap-3">

                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />

                <span className="text-sm text-indigo-100">
                  Smart automation enabled
                </span>

              </div>

            </div>

          </div>

          {/* QUICK SETTINGS */}
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

              <h2 className="text-[24px] font-semibold tracking-tight text-slate-900">
                Quick Controls
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Frequently used configurations
              </p>

            </div>

            <div className="mt-6 flex flex-col gap-4">

              {[
                {
                  title: "Dark Mode",
                  icon: <MoonStar size={18} />,
                },

                {
                  title: "Mobile Notifications",
                  icon: <Smartphone size={18} />,
                },

                {
                  title: "Live Queue Monitoring",
                  icon: <Activity size={18} />,
                },

                {
                  title: "Global Queue Access",
                  icon: <Globe size={18} />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-slate-100
                    p-4
                    flex
                    items-center
                    justify-between
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

                  <div
                    className="
                      w-12
                      h-7
                      rounded-full
                      bg-emerald-500
                      relative
                    "
                  >

                    <div
                      className="
                        absolute
                        top-1
                        right-1
                        w-5
                        h-5
                        rounded-full
                        bg-white
                      "
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SettingsPanel;