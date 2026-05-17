import React from "react";

import {
    TrendingUp,
    Users,
    Clock3,
    Activity,
    ArrowUpRight,
    Sparkles,
    CalendarDays,
    BellRing,
    Ticket,
    BarChart3,
    PieChart,
    ShieldCheck,
    ChevronRight,
    CircleDollarSign,
    CheckCircle2,
    TimerReset,
    Wifi,
    Brain,
} from "lucide-react";

const AnalyticsPanel = () => {
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
          to-blue-950
          p-7
          text-white
          border
          border-slate-800
        "
            >

                {/* BACKGROUND GLOW */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-[-80px] left-[-60px] w-[240px] h-[240px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative z-10">

                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

                        {/* LEFT */}
                        <div>

                            <div className="flex items-center gap-2">

                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Real-Time Analytics
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
                                Queue Intelligence Center
                            </h1>

                            <p className="mt-5 text-slate-300 max-w-[700px] leading-relaxed">
                                Monitor queue performance, token trends, wait time,
                                customer flow and real-time operational insights with
                                smart analytics powered by Saral AI systems.
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
                                        Queue Performance
                                    </p>

                                    <h2 className="mt-2 text-[64px] font-bold leading-none">
                                        94%
                                    </h2>

                                </div>

                                <div
                                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-cyan-500/20
                    flex
                    items-center
                    justify-center
                  "
                                >

                                    <TrendingUp size={28} className="text-cyan-300" />

                                </div>

                            </div>

                            <div className="mt-6 flex items-center gap-3">

                                <ArrowUpRight size={18} className="text-emerald-400" />

                                <span className="text-sm text-slate-300">
                                    +18% better than yesterday
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
                        title: "Total Visitors",
                        value: "4,582",
                        icon: <Users size={20} />,
                        color: "from-cyan-500 to-blue-500",
                    },

                    {
                        title: "Tokens Generated",
                        value: "1,284",
                        icon: <Ticket size={20} />,
                        color: "from-violet-500 to-indigo-500",
                    },

                    {
                        title: "Avg Wait Time",
                        value: "12m",
                        icon: <Clock3 size={20} />,
                        color: "from-amber-500 to-orange-500",
                    },

                    {
                        title: "Queue Efficiency",
                        value: "92%",
                        icon: <Activity size={20} />,
                        color: "from-emerald-500 to-green-500",
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
              hover:translate-y-[-2px]
              transition-all
              duration-300
            "
                    >

                        <div
                            className={`
                absolute
                top-[-30px]
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
            <div className="grid xl:grid-cols-[1.2fr_420px] gap-5">

                {/* LEFT */}
                <div className="flex flex-col gap-5">

                    {/* PERFORMANCE CHART */}
                    <div
                        className="
              rounded-[30px]
              bg-white
              border
              border-slate-200
              p-6
            "
                    >

                        <div className="flex items-center justify-between flex-wrap gap-4">

                            <div>

                                <p className="text-sm text-slate-500">
                                    Weekly Queue Analysis
                                </p>

                                <h2 className="mt-1 text-[28px] font-semibold tracking-tight text-slate-900">
                                    Visitor Traffic Overview
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
                  text-emerald-700
                  font-medium
                "
                            >
                                Live Analytics
                            </div>

                        </div>

                        {/* GRAPH */}
                        {/* GRAPH */}
                        <div className="mt-10">

                            {/* CHART AREA */}
                            <div
                                className="
      relative
      h-[320px]
      rounded-[28px]
      bg-gradient-to-b
      from-slate-50
      to-white
      border
      border-slate-100
      overflow-hidden
      px-6
      pt-8
      pb-5
    "
                            >

                                {/* GRID LINES */}
                                <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 pointer-events-none">

                                    {[1, 2, 3, 4, 5].map((_, index) => (
                                        <div
                                            key={index}
                                            className="border-t border-dashed border-slate-200"
                                        />
                                    ))}

                                </div>

                                {/* GLOW */}
                                <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-full bg-cyan-400/10 blur-3xl" />

                                {/* CHART BARS */}
                                <div className="relative z-10 flex items-end justify-between gap-4 h-full">

                                    {[
                                        {
                                            day: "Mon",
                                            value: 45,
                                            visitors: "1.2K",
                                        },

                                        {
                                            day: "Tue",
                                            value: 70,
                                            visitors: "2.4K",
                                        },

                                        {
                                            day: "Wed",
                                            value: 52,
                                            visitors: "1.8K",
                                        },

                                        {
                                            day: "Thu",
                                            value: 88,
                                            visitors: "3.9K",
                                        },

                                        {
                                            day: "Fri",
                                            value: 62,
                                            visitors: "2.7K",
                                        },

                                        {
                                            day: "Sat",
                                            value: 95,
                                            visitors: "4.4K",
                                        },

                                        {
                                            day: "Sun",
                                            value: 80,
                                            visitors: "3.6K",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="
            flex-1
            h-full
            flex
            flex-col
            justify-end
            items-center
            group
          "
                                        >

                                            {/* VALUE */}
                                            <div
                                                className="
              mb-3
              text-xs
              font-semibold
              text-slate-500
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
                                            >
                                                {item.visitors}
                                            </div>

                                            {/* BAR */}
                                            <div
                                                className="
              relative
              w-full
              max-w-[58px]
              rounded-t-[22px]
              bg-gradient-to-t
              from-slate-950
              via-blue-700
              to-cyan-400
              shadow-[0_20px_50px_rgba(14,165,233,0.25)]
              transition-all
              duration-500
              hover:scale-[1.03]
              hover:brightness-110
            "
                                                style={{
                                                    height: `${item.value}%`,
                                                    minHeight: "60px",
                                                }}
                                            >

                                                {/* INNER SHINE */}
                                                <div
                                                    className="
                absolute
                inset-x-0
                top-0
                h-[40%]
                bg-white/20
                rounded-t-[22px]
              "
                                                />

                                            </div>

                                            {/* DAY */}
                                            <span className="mt-4 text-xs font-medium text-slate-500">
                                                {item.day}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* FOOTER STATS */}
                            <div className="grid sm:grid-cols-3 gap-4 mt-5">

                                {[
                                    {
                                        title: "Peak Day",
                                        value: "Saturday",
                                    },

                                    {
                                        title: "Highest Traffic",
                                        value: "4.4K Visitors",
                                    },

                                    {
                                        title: "Growth Rate",
                                        value: "+18%",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
        "
                                    >

                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            {item.title}
                                        </p>

                                        <h4 className="mt-2 text-lg font-semibold text-slate-900">
                                            {item.value}
                                        </h4>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* DEPARTMENT ANALYTICS */}
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

                            <h2 className="text-[26px] font-semibold tracking-tight text-slate-900">
                                Department Performance
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Queue load distribution and operational efficiency
                            </p>

                        </div>

                        <div className="mt-8 space-y-7">

                            {[
                                {
                                    name: "General OPD",
                                    load: "92%",
                                    color: "bg-cyan-500",
                                },

                                {
                                    name: "Cardiology",
                                    load: "74%",
                                    color: "bg-violet-500",
                                },

                                {
                                    name: "Pediatrics",
                                    load: "68%",
                                    color: "bg-emerald-500",
                                },

                                {
                                    name: "Emergency",
                                    load: "96%",
                                    color: "bg-rose-500",
                                },
                            ].map((item, index) => (
                                <div key={index}>

                                    <div className="flex justify-between mb-3">

                                        <span className="text-sm font-medium text-slate-700">
                                            {item.name}
                                        </span>

                                        <span className="text-sm text-slate-500">
                                            {item.load}
                                        </span>

                                    </div>

                                    <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">

                                        <div
                                            className={`
                        h-full
                        rounded-full
                        ${item.color}
                      `}
                                            style={{
                                                width: item.load,
                                            }}
                                        />

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* SMART INSIGHTS */}
                    <div
                        className="
              rounded-[30px]
              bg-gradient-to-br
              from-slate-900
              via-slate-900
              to-violet-950
              text-white
              p-6
              overflow-hidden
              relative
            "
                    >

                        <div className="absolute right-[-40px] top-[-40px] w-[180px] h-[180px] rounded-full bg-violet-500/20 blur-3xl" />

                        <div className="relative z-10">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-slate-400">
                                        AI Queue Insights
                                    </p>

                                    <h2 className="mt-2 text-[28px] font-semibold tracking-tight">
                                        Predictive Intelligence
                                    </h2>

                                </div>

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

                                    <Brain size={26} className="text-violet-300" />

                                </div>

                            </div>

                            <div className="mt-8 grid md:grid-cols-2 gap-4">

                                {[
                                    "Rush expected between 4 PM - 6 PM",
                                    "Queue speed improved by 18%",
                                    "Emergency section overloaded",
                                    "Average waiting time reduced today",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-4
                    "
                                    >

                                        <div className="flex items-start gap-3">

                                            <ChevronRight size={16} className="text-violet-300 mt-1" />

                                            <p className="text-sm text-slate-200 leading-relaxed">
                                                {item}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-5">

                    {/* LIVE SCORE */}
                    <div
                        className="
              rounded-[30px]
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              text-white
              p-7
              overflow-hidden
              relative
            "
                    >

                        <div className="absolute right-[-40px] bottom-[-40px] w-[180px] h-[180px] rounded-full bg-white/10" />

                        <div className="relative z-10">

                            <p className="text-cyan-100 text-sm">
                                Operational Health
                            </p>

                            <h2 className="mt-4 text-[82px] leading-none font-bold">
                                94
                            </h2>

                            <div className="mt-5 flex items-center gap-3">

                                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />

                                <span className="text-sm text-cyan-100">
                                    Systems Running Smoothly
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* REALTIME ACTIVITY */}
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
                                    Real-Time Activity
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Live analytics feed
                                </p>

                            </div>

                            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">

                                <Wifi size={16} />

                                Live

                            </div>

                        </div>

                        <div className="mt-7 flex flex-col gap-4">

                            {[
                                "124 new visitors entered queue",
                                "Average wait reduced by 3 mins",
                                "Emergency queue spike detected",
                                "New peak traffic recorded",
                                "Auto notifications sent successfully",
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
                    <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-5">

                        {[
                            {
                                title: "Customer Satisfaction",
                                value: "96%",
                                icon: <CheckCircle2 size={22} />,
                                bg: "bg-emerald-50 border-emerald-100",
                                iconBg: "bg-emerald-100 text-emerald-700",
                            },

                            {
                                title: "Average Response Time",
                                value: "2.4s",
                                icon: <TimerReset size={22} />,
                                bg: "bg-violet-50 border-violet-100",
                                iconBg: "bg-violet-100 text-violet-700",
                            },

                            {
                                title: "Daily Revenue Impact",
                                value: "₹48K",
                                icon: <CircleDollarSign size={22} />,
                                bg: "bg-amber-50 border-amber-100",
                                iconBg: "bg-amber-100 text-amber-700",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`
                  rounded-[28px]
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

                                    <ArrowUpRight size={18} className="text-emerald-600" />

                                </div>

                                <h2 className="mt-5 text-[36px] leading-none font-bold tracking-tight text-slate-900">
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

        </div>
    );
};

export default AnalyticsPanel;