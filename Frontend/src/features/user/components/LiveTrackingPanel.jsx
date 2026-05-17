import React, { useEffect, useState } from "react";
import {
    Radar, TimerReset, BellRing, MapPinned, ArrowUpRight, CircleCheckBig, Clock3, Activity, UserRound, ShieldCheck, Sparkles, Wifi,
} from "lucide-react";

const LiveTrackingPanel = () => {
    const [tokens, setTokens] = useState([]);

    const [currentServing, setCurrentServing] =
        useState(null);

    const [userToken, setUserToken] =
        useState(null);

    const [peopleAhead, setPeopleAhead] =
        useState(0);

    // USER TOKEN DETAILS
    const bookedToken = JSON.parse(
        localStorage.getItem("bookedToken")
    );

    const tokenNumber =
        bookedToken?.tokenNumber;

    const organizationName =
        bookedToken?.organizationName;

    const serviceName =
        bookedToken?.serviceName;


    console.log(bookedToken);
    console.log(serviceName);
    console.log(organizationName);
    console.log(tokenNumber);
    
    // FETCH TOKENS
    const fetchTrackingData = async () => {

        if (!organizationName || !serviceName) {
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:5000/api/tokens/organization/${organizationName}`
            );

            const data = await response.json();

            if (response.ok) {

                const serviceTokens = data.tokens.filter(
                    (item) =>
                        item.serviceName === serviceName
                );

                setTokens(serviceTokens);

                const serving = serviceTokens.find(
                    (item) =>
                        item.status?.trim().toLowerCase() ===
                        "serving"
                );

                setCurrentServing(serving);

                const myToken = serviceTokens.find(
                    (item) =>
                        item.tokenNumber === tokenNumber
                );

                setUserToken(myToken);

                if (myToken) {

                    const waitingBefore =
                        serviceTokens.filter(
                            (item) =>
                                item.status === "Waiting" &&
                                item.createdAt < myToken.createdAt
                        );

                    setPeopleAhead(waitingBefore.length);
                }
            }

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        fetchTrackingData();

        const interval = setInterval(() => {

            fetchTrackingData();

        }, 3000);

        return () =>
            clearInterval(interval);

    }, []);

    const trackingData = tokens
        .slice(-6)
        .reverse()
        .map((item) => {

            let color =
                "from-slate-500 to-slate-700";

            let bg = "bg-slate-50";

            let text = "text-slate-700";

            let statusText = item.status;

            if (
                item.status === "Completed"
            ) {

                color =
                    "from-emerald-500 to-green-500";

                bg = "bg-emerald-50";

                text = "text-emerald-700";
            }

            else if (
                item.status === "Serving"
            ) {

                color =
                    "from-orange-500 to-amber-500";

                bg = "bg-orange-50";

                text = "text-orange-700";

                statusText =
                    "Currently Serving";
            }

            else if (
                item.tokenNumber ===
                tokenNumber
            ) {

                color =
                    "from-violet-500 to-indigo-500";

                bg = "bg-violet-50";

                text = "text-violet-700";

                statusText = "Your Token";
            }

            return {
                token: item.tokenNumber,
                status: statusText,
                time: new Date(
                    item.createdAt
                ).toLocaleTimeString(),
                color,
                bg,
                text,
            };
        });


    return (
        <div className="flex flex-col gap-6">

            {/* TOP LIVE SECTION */}
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

                <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative z-10 grid xl:grid-cols-[1.2fr_420px] gap-8">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-2">

                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

                            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                Live Monitoring
                            </p>

                        </div>

                        <h1
                            className="
                mt-5
                text-[42px]
                md:text-[58px]
                leading-none
                font-bold
                tracking-tight
              "
                        >
                            Live Queue
                            <br />
                            Tracking Center
                        </h1>

                        <p className="mt-6 max-w-[680px] text-slate-300 leading-relaxed text-[15px]">
                            Monitor real-time token movement, smart AI predictions,
                            crowd density, and estimated waiting time with dynamic
                            queue analytics.
                        </p>

                        {/* STATS */}
                        <div className="mt-10 grid sm:grid-cols-3 gap-4">

                            {[
                                {
                                    title: "People Ahead",
                                    value: peopleAhead,
                                    icon: <UserRound size={18} />,
                                },

                                {
                                    title: "Wait Time",
                                    value: `${peopleAhead * 2}m`,
                                    icon: <Clock3 size={18} />,
                                },

                                {
                                    title: "Queue Health",
                                    value: "94%",
                                    icon: <ShieldCheck size={18} />,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                  "
                                >

                                    <div className="flex items-center justify-between">

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

                                        <ArrowUpRight
                                            size={18}
                                            className="text-emerald-400"
                                        />

                                    </div>

                                    <h2 className="mt-5 text-[34px] font-bold leading-none">
                                        {item.value}
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-300">
                                        {item.title}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
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

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-300">
                                    Current Active Token
                                </p>

                                <h2 className="mt-3 text-[78px] leading-none font-bold">
                                    {currentServing?.tokenNumber || "None"}
                                </h2>

                            </div>

                            <div
                                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-500/20
                  flex
                  items-center
                  justify-center
                "
                            >

                                <Radar size={26} className="text-emerald-300" />

                            </div>

                        </div>

                        {/* PROGRESS */}
                        <div className="mt-8">

                            <div className="flex justify-between text-sm text-slate-300 mb-3">

                                <span>Queue Progress</span>

                                <span>
                                    {peopleAhead === 0
                                        ? "100%"
                                        : `${Math.max(
                                            10,
                                            100 - peopleAhead * 10
                                        )}%`}
                                </span>

                            </div>

                            <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">

                                <div
                                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-emerald-400
                  "
                                    style={{
                                        width:
                                            peopleAhead === 0
                                                ? "100%"
                                                : `${Math.max(
                                                    10,
                                                    100 - peopleAhead * 10
                                                )}%`,
                                    }}
                                />

                            </div>

                        </div>

                        {/* DETAILS */}
                        <div className="mt-8 flex flex-col gap-4">

                            {[
                                {
                                    icon: <TimerReset size={18} />,
                                    title: "Estimated Time",
                                    value: `${peopleAhead * 2} Minutes`,
                                },

                                {
                                    icon: <BellRing size={18} />,
                                    title: "Smart Alert",
                                    value: "Notifications Active",
                                },

                                {
                                    icon: <MapPinned size={18} />,
                                    title: "Location",
                                    value: organizationName,
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
                    border-white/10
                    bg-white/5
                    px-4
                    py-4
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
                                                {item.title}
                                            </p>

                                            <h4 className="mt-1 text-sm font-medium">
                                                {item.value}
                                            </h4>

                                        </div>

                                    </div>

                                    <CircleCheckBig
                                        size={18}
                                        className="text-emerald-400"
                                    />

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* LIVE TRACKING TIMELINE */}
            <div className="grid xl:grid-cols-[1.2fr_380px] gap-6">

                {/* LEFT TIMELINE */}
                <div
                    className="
            rounded-[34px]
            bg-white
            border
            border-slate-200
            p-6
          "
                >

                    <div className="flex items-center justify-between flex-wrap gap-4">

                        <div>

                            <p className="text-sm text-slate-500">
                                Queue Timeline
                            </p>

                            <h2 className="mt-2 text-[32px] font-bold tracking-tight text-slate-900">
                                Live Token Movement
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
                flex
                items-center
                gap-2
              "
                        >

                            <Wifi size={15} />

                            Connected Live

                        </div>

                    </div>

                    <div className="mt-10 flex flex-col gap-5">

                        {trackingData.map((item, index) => (
                            <div
                                key={index}
                                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
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
                    right-[-30px]
                    w-[120px]
                    h-[120px]
                    rounded-full
                    blur-3xl
                    opacity-20
                    bg-gradient-to-br
                    ${item.color}
                  `}
                                />

                                <div className="relative z-10 flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <div
                                            className={`
                        w-16
                        h-16
                        rounded-[22px]
                        bg-gradient-to-br
                        ${item.color}
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-lg
                        shadow-lg
                      `}
                                        >
                                            {item.token}
                                        </div>

                                        <div>

                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {item.status}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                {item.time}
                                            </p>

                                        </div>

                                    </div>

                                    <div
                                        className={`
                      px-4
                      py-2
                      rounded-2xl
                      ${item.bg}
                      ${item.text}
                      text-sm
                      font-medium
                    `}
                                    >
                                        Live
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">

                    {/* AI STATUS */}
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

                        <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] rounded-full bg-white/10" />

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

                                <Sparkles size={26} />

                            </div>

                            <h2 className="mt-6 text-[38px] leading-tight font-bold">
                                AI Predicts
                                <br />
                                Your Turn Soon
                            </h2>

                            <p className="mt-4 text-indigo-100 leading-relaxed">
                                Based on live crowd analysis and queue speed,
                                your token will be called in approximately
                                12 minutes.
                            </p>

                        </div>

                    </div>

                    {/* SYSTEM STATUS */}
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
                            System Status
                        </h2>

                        <div className="mt-7 flex flex-col gap-4">

                            {[
                                "Queue speed stable",
                                "Low server latency",
                                "Notifications active",
                                "Live sync connected",
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
                  "
                                >

                                    <div className="flex items-center gap-3">

                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                                        <p className="text-sm text-slate-700">
                                            {item}
                                        </p>

                                    </div>

                                    <Activity
                                        size={16}
                                        className="text-emerald-500"
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

export default LiveTrackingPanel;