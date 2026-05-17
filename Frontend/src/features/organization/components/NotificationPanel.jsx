import React from "react";

import {
  BellRing,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Wifi,
  Smartphone,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Activity,
  Send,
  Users,
  Ticket,
} from "lucide-react";

const notifications = [
  {
    title: "Token A-24 called successfully",
    time: "Just now",
    status: "success",
  },

  {
    title: "Push notification delivered to 128 users",
    time: "2 mins ago",
    status: "info",
  },

  {
    title: "Peak queue traffic detected",
    time: "6 mins ago",
    status: "warning",
  },

  {
    title: "Reminder notification sent automatically",
    time: "10 mins ago",
    status: "success",
  },

  {
    title: "2 users offline during token call",
    time: "15 mins ago",
    status: "warning",
  },
];

const NotificationPanel = () => {
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
          to-violet-950
          p-7
          text-white
          border
          border-slate-800
        "
      >

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative z-10">

          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Automated Notification System
                </p>

              </div>

              <h1
                className="
                  mt-3
                  text-[36px]
                  md:text-[44px]
                  leading-none
                  font-bold
                  tracking-tight
                "
              >
                Notification Intelligence Center
              </h1>

              <p className="mt-5 text-slate-300 max-w-[700px] leading-relaxed">
                Real-time automated queue notifications, token reminders,
                push delivery tracking and live communication analytics
                powered by Saral smart notification engine.
              </p>

            </div>

            {/* RIGHT CARD */}
            <div
              className="
                w-full
                sm:w-[320px]
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
                    Delivery Success
                  </p>

                  <h2 className="mt-2 text-[64px] font-bold leading-none">
                    98%
                  </h2>

                </div>

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-500/20
                    flex
                    items-center
                    justify-center
                  "
                >

                  <BellRing size={28} className="text-violet-300" />

                </div>

              </div>

              <div className="mt-6 flex items-center gap-3">

                <ArrowUpRight size={18} className="text-emerald-400" />

                <span className="text-sm text-slate-300">
                  Notifications operating smoothly
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4">

        {[
          {
            title: "Notifications Sent",
            value: "12.4K",
            icon: <Send size={20} />,
            color: "from-violet-500 to-fuchsia-500",
          },

          {
            title: "Push Delivered",
            value: "98%",
            icon: <CheckCircle2 size={20} />,
            color: "from-emerald-500 to-green-500",
          },

          {
            title: "Active Devices",
            value: "3,482",
            icon: <Smartphone size={20} />,
            color: "from-cyan-500 to-blue-500",
          },

          {
            title: "Live Queue Alerts",
            value: "28",
            icon: <Activity size={20} />,
            color: "from-amber-500 to-orange-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              relative
              overflow-hidden
              rounded-[28px]
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

                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              </div>

              <h2 className="mt-5 text-[36px] leading-none font-bold tracking-tight text-slate-900">
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
      <div className="grid xl:grid-cols-[1.1fr_420px] gap-5">

        {/* LEFT */}
        <div
          className="
            rounded-[30px]
            bg-white
            border
            border-slate-200
            overflow-hidden
          "
        >

          <div className="p-6 border-b border-slate-100">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-[28px] font-semibold tracking-tight text-slate-900">
                  Live Notification Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Real-time automated queue notification logs
                </p>

              </div>

              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">

                <Wifi size={16} />

                Live

              </div>

            </div>

          </div>

          <div className="p-6 flex flex-col gap-4">

            {notifications.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[24px]
                  border
                  border-slate-100
                  p-5
                  hover:bg-slate-50
                  transition-all
                "
              >

                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div
                    className={`
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      ${
                        item.status === "success"
                          ? "bg-emerald-50 text-emerald-600"
                          : item.status === "warning"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-blue-50 text-blue-600"
                      }
                    `}
                  >

                    {item.status === "success" ? (
                      <CheckCircle2 size={22} />
                    ) : item.status === "warning" ? (
                      <AlertTriangle size={22} />
                    ) : (
                      <BellRing size={22} />
                    )}

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <h3 className="text-sm font-medium text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">

                      <Clock3 size={13} />

                      {item.time}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* SYSTEM STATUS */}
          <div
            className="
              rounded-[30px]
              bg-gradient-to-br
              from-violet-500
              to-fuchsia-600
              text-white
              p-7
              overflow-hidden
              relative
            "
          >

            <div className="absolute right-[-50px] bottom-[-50px] w-[180px] h-[180px] rounded-full bg-white/10" />

            <div className="relative z-10">

              <p className="text-violet-100 text-sm">
                Notification Engine
              </p>

              <h2 className="mt-4 text-[76px] leading-none font-bold">
                Live
              </h2>

              <div className="mt-5 flex items-center gap-3">

                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />

                <span className="text-sm text-violet-100">
                  Auto push notifications active
                </span>

              </div>

            </div>

          </div>

          {/* AUTOMATION INSIGHTS */}
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

                <h2 className="text-[24px] font-semibold tracking-tight text-slate-900">
                  Automation Insights
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Smart communication analytics
                </p>

              </div>

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-violet-100
                  flex
                  items-center
                  justify-center
                "
              >

                <Sparkles size={22} className="text-violet-700" />

              </div>

            </div>

            <div className="mt-6 flex flex-col gap-4">

              {[
                "Most users respond within 2 minutes",
                "Reminder notifications improved attendance",
                "Peak engagement between 10 AM - 1 PM",
                "Push delivery success rate increased",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-slate-100
                    p-4
                  "
                >

                  <div className="flex items-start gap-3">

                    <ChevronRight size={16} className="text-violet-500 mt-1" />

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>

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

export default NotificationPanel;