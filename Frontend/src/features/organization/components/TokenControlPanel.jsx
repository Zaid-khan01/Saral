import React, { useEffect, useState } from "react";

import {
  Ticket,
  User,
  Search,
  BellRing,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Plus,
  Sparkles,
  Clock3,
  ShieldCheck,
  ChevronRight,
  ScanLine,
  UserCheck,
  Smartphone,
  Wifi,
  Send,
} from "lucide-react";



const TokenControlPanel = () => {

  const [tokens, setTokens] = useState([]);

  const [currentToken, setCurrentToken] =
    useState(null);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  // NEW
  const [selectedService, setSelectedService] =
    useState("");

  const organization = JSON.parse(
    localStorage.getItem("organization")
  );

  const fetchTokens = async () => {

    try {

      const response = await fetch(
        `https://saral-hh7e.onrender.com/api/tokens/all?organizationName=${organization.name}`
      );

      const data = await response.json();

      setTokens(data);

      // NEW
      if (
        data.length > 0 &&
        !selectedService
      ) {
        setSelectedService(
          data[0].serviceName
        );
      }

      const serving = data.find(
        (item) => item.status === "Serving"
      );

      setCurrentToken(serving);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchTokens();

    const interval = setInterval(() => {
      fetchTokens();
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const handleCallNext = async () => {

    try {

      setLoading(true);

      const response = await fetch(
        "https://saral-hh7e.onrender.com/api/tokens/call-next",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            organizationName: organization.name,
            serviceName: selectedService,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        alert(data.message);
        return;

      }

      fetchTokens();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleSkipToken = async (
    tokenId
  ) => {

    try {

      await fetch(
        `https://saral-hh7e.onrender.com/api/tokens/skip/${tokenId}`,
        {
          method: "PUT",
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };


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
        <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="relative z-10">

          <div className="flex items-center justify-between flex-wrap gap-5">

            <div>

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Smart Token Control
                </p>

              </div>

              <h1
                className="
                  mt-3
                  text-[34px]
                  md:text-[42px]
                  leading-none
                  font-bold
                  tracking-tight
                "
              >
                Token Operations Center
              </h1>

              <p className="mt-4 text-slate-300 max-w-[620px]">
                Manage queue tokens, priority access, verification,
                live serving status and automated customer updates
                from one centralized control panel.
              </p>

            </div>

            {/* LIVE CARD */}
            <div
              className="
                w-full
                sm:w-[280px]
                rounded-[28px]
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-5
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-300">
                    Live Token
                  </p>

                  <h2 className="mt-2 text-[56px] font-bold leading-none">
                    {currentToken?.tokenNumber || "No Token"}
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

                  <Ticket size={26} className="text-emerald-300" />

                </div>

              </div>

              <div className="mt-5 flex items-center gap-3">

                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-sm text-slate-300">
                  {currentToken
                    ? "Currently Serving"
                    : "No Active Queue"}
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
            title: "Active Tokens",
            value: tokens.length,
            icon: <Ticket size={20} />,
            color: "from-indigo-500 to-violet-500",
          },

          {
            title: "Push Notifications Sent",
            value: "1.2K",
            icon: <BellRing size={20} />,
            color: "from-emerald-500 to-green-500",
          },

          {
            title: "Completed Today",
            value: tokens.filter(
              (item) => item.status === "Completed"
            ).length,
            icon: <CheckCircle2 size={20} />,
            color: "from-amber-500 to-orange-500",
          },

          {
            title: "Avg Processing",
            value: "4m",
            icon: <Clock3 size={20} />,
            color: "from-sky-500 to-cyan-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-5
              hover:translate-y-[-2px]
              transition-all
              duration-300
            "
          >

            <div
              className={`
                absolute
                top-0
                right-0
                w-24
                h-24
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

              <h2 className="mt-5 text-[34px] leading-none font-bold tracking-tight text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {item.title}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* ACTION SECTION */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-5">

        {/* LEFT */}
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

              <h2 className="text-[24px] font-semibold tracking-tight text-slate-900">
                Token Actions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Perform real-time token management operations
              </p>

            </div>

            {/* SEARCH */}
            <div
              className="
                h-[48px]
                px-4
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                flex
                items-center
                gap-3
              "
            >

              <Search size={16} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search token..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  w-[180px]
                "
              />

            </div>

          </div>

          {/* BUTTONS */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-7">

            {[
              {
                title: loading
                  ? "Calling..."
                  : "Call Next Token",
                icon: <Plus size={24} />,
                bg: "bg-slate-900 text-white",
              },

              {
                title: "Verify User",
                icon: <UserCheck size={24} />,
                bg: "bg-emerald-50 border border-emerald-100",
              },

              {
                title: "Scan QR",
                icon: <ScanLine size={24} />,
                bg: "bg-blue-50 border border-blue-100",
              },

              {
                title: "Recall Token",
                icon: <RotateCcw size={24} />,
                bg: "bg-amber-50 border border-amber-100",
              },

              {
                title: "Cancel Token",
                icon: <XCircle size={24} />,
                bg: "bg-rose-50 border border-rose-100",
              },

              {
                title: "Auto Notification System",
                icon: <Wifi size={24} />,
                bg: "bg-violet-50 border border-violet-100",
              },
            ].map((item, index) => (
              < button
                key={index}
                onClick={() => {
                  if (item.title.includes("Call")) {
                    handleCallNext();
                  }
                }}
                className={`
                  h-[115px]
                  rounded-[28px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  hover:translate-y-[-3px]
                  transition-all
                  duration-300
                  ${item.bg}
                `}
              >

                {item.icon}

                <span className="text-sm font-medium text-center px-2">
                  {item.title}
                </span>

              </button>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            rounded-[30px]
            border
            border-slate-200
            bg-white
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Queue AI Insights
              </p>

              <h3 className="mt-1 text-[24px] font-semibold tracking-tight text-slate-900">
                Smart Suggestions
              </h3>

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
              "High rush expected in next 20 mins",
              "Open one more counter for better flow",
              "Push notifications delivery rate is 98%",
              "Queue performance improved by 14% today",
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

                <div className="flex items-start gap-3">

                  <div className="mt-1">
                    <ChevronRight size={16} className="text-violet-500" />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* AUTOMATED NOTIFICATION STATUS */}
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

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Automated System
              </p>

            </div>

            <h2 className="mt-3 text-[28px] font-semibold tracking-tight text-slate-900">
              Live Push Notification Engine
            </h2>

            <p className="mt-2 text-sm text-slate-500 max-w-[700px]">
              Notifications are automatically sent by the Saral platform
              whenever token status changes, token gets called,
              wait time reduces or queue updates happen.
            </p>

          </div>

          <div
            className="
              px-5
              py-3
              rounded-2xl
              bg-emerald-50
              border
              border-emerald-100
              flex
              items-center
              gap-3
            "
          >

            <Send size={18} className="text-emerald-600" />

            <div>

              <p className="text-xs text-emerald-600">
                Notification System
              </p>

              <h4 className="text-sm font-semibold text-emerald-700">
                Running Smoothly
              </h4>

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-4 mt-8">

          {[
            {
              title: "Token Called Alerts",
              desc: "Users automatically receive alerts when their token is about to arrive.",
              icon: <BellRing size={22} />,
              bg: "bg-violet-50 border-violet-100",
              iconBg: "bg-violet-100 text-violet-700",
            },

            {
              title: "Live Queue Updates",
              desc: "Real-time push notifications update users about queue movement and delays.",
              icon: <Wifi size={22} />,
              bg: "bg-blue-50 border-blue-100",
              iconBg: "bg-blue-100 text-blue-700",
            },

            {
              title: "Device Notification Access",
              desc: "Users enable browser notifications once during token booking process.",
              icon: <Smartphone size={22} />,
              bg: "bg-emerald-50 border-emerald-100",
              iconBg: "bg-emerald-100 text-emerald-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                rounded-[26px]
                border
                p-5
                ${item.bg}
              `}
            >

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

              <h3 className="mt-5 text-[18px] font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* TABLE */}
      <div
        className="
          rounded-[30px]
          border
          border-slate-200
          bg-white
          overflow-hidden
        "
      >

        <div className="p-6 border-b border-slate-100">

          <h2 className="text-[24px] font-semibold tracking-tight text-slate-900">
            Live Token Monitoring
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Real-time token tracking and user status monitoring
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[760px]">

            <thead>

              <tr className="border-b border-slate-100">

                {[
                  "Token",
                  "Customer",
                  "Type",
                  "Status",
                  "Time",
                  "Actions",
                ].map((head, index) => (
                  <th
                    key={index}
                    className="
                      px-6
                      py-4
                      text-left
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-400
                      font-medium
                    "
                  >
                    {head}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              {tokens.map((item, index) => (
                <tr
                  key={index}
                  className="
                    border-b
                    border-slate-100
                    hover:bg-slate-50/70
                    transition-all
                  "
                >

                  <td className="px-6 py-5">

                    <div
                      className="
                        w-fit
                        px-4
                        py-2
                        rounded-xl
                        bg-slate-900
                        text-white
                        text-sm
                        font-semibold
                      "
                    >
                      {item.tokenNumber}
                    </div>

                  </td>

                  <td className="px-6 py-5">

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
                        "
                      >

                        <User size={18} className="text-slate-700" />

                      </div>

                      <div>

                        <h4 className="text-sm font-medium text-slate-900">
                          {item.userName}
                        </h4>

                        <p className="text-xs text-slate-500">
                          Registered User
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        ${item.type === "VIP"
                          ? "bg-violet-50 text-violet-700 border border-violet-100"
                          : item.type === "Priority"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }
                      `}
                    >
                      {item.type}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        ${item.status === "Serving"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"

                          : item.status === "Completed"
                            ? "bg-blue-50 text-blue-700 border border-blue-100"

                            : item.status === "Skipped"
                              ? "bg-rose-50 text-rose-700 border border-rose-100"

                              : "bg-slate-100 text-slate-700 border border-slate-200"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-sm text-slate-500">
                    {item.time}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => handleSkipToken(item._id)}
                        className="
    px-4
    py-2
    rounded-xl
    bg-rose-500
    text-white
    text-xs
    font-medium
    hover:bg-rose-600
    transition-all
  "
                      >
                        Skip
                      </button>

                      <button
                        className="
                          px-4
                          py-2
                          rounded-xl
                          border
                          border-slate-200
                          text-xs
                          font-medium
                          hover:bg-slate-100
                          transition-all
                        "
                      >
                        Details
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div >
  );
};

export default TokenControlPanel;