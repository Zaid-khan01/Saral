import React, { useEffect, useState } from "react";

import {
  Users,
  Clock3,
  Activity,
  Search,
  Bell,
  PauseCircle,
  PlayCircle,
  SkipForward,
  CheckCircle2,
  TimerReset,
  UserCheck,
  ArrowUpRight,
  Sparkles,
  CircleDashed,
  BarChart3,
} from "lucide-react";

const QueueManagementPanel = () => {

  const [queueOpen, setQueueOpen] = useState(true);

  const [tokens, setTokens] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [currentServing, setCurrentServing] =
    useState(null);

  // NEW
  const [selectedService, setSelectedService] =
    useState("");

  const activeOrganization = JSON.parse(
    localStorage.getItem("activeOrganization")
  );

  const organizationName =
    activeOrganization?.organizationName;

  // FETCH TOKENS
  const fetchTokens = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/tokens/organization/${organizationName}`
      );

      const data = await response.json();

      if (response.ok) {

        setTokens(data.tokens);

        // NEW
        if (
          data.tokens.length > 0 &&
          !selectedService
        ) {

          const waitingService = data.tokens.find(
            (token) => token.status === "Waiting"
          );

          if (waitingService) {
            setSelectedService(
              waitingService.serviceName
            );
          }
        }

        const servingToken = data.tokens.find(
          (token) =>
            token.status === "Serving" &&
            token.serviceName === selectedService
        );

        setCurrentServing(servingToken || null);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchTokens();

    const interval = setInterval(() => {
      fetchTokens();
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // CALL NEXT TOKEN
  const callNextToken = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/tokens/call-next",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            organizationName,
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

    }
  };

  // COMPLETE TOKEN
  const completeToken = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/api/tokens/complete/${id}`,
        {
          method: "PUT",
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  // PAUSE QUEUE
  const pauseQueue = async () => {

    try {

      await fetch(
        "http://localhost:5000/api/tokens/pause",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            organizationName,
            serviceName: selectedService,
          }),
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  // RESUME QUEUE
  const resumeQueue = async () => {

    try {

      await fetch(
        "http://localhost:5000/api/tokens/resume",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            organizationName,
            serviceName: selectedService,
          }),
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  // RESET QUEUE
  const resetQueue = async () => {

    try {

      await fetch(
        "http://localhost:5000/api/tokens/reset",
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            organizationName,
            serviceName: selectedService,
          }),
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  // SKIP TOKEN
  const skipToken = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/api/tokens/skip/${id}`,
        {
          method: "PUT",
        }
      );

      fetchTokens();

    } catch (error) {

      console.log(error);

    }
  };

  // FILTER TOKENS
  const filteredTokens = tokens.filter(
    (item) =>
      item.tokenNumber
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // STATS
  const waitingTokens = tokens.filter(
    (item) => item.status === "Waiting"
  );

  const completedTokens = tokens.filter(
    (item) => item.status === "Completed"
  );

  const uniqueServices = [
    ...new Set(
      tokens.map((item) => item.serviceName)
    ),
  ];


  return (
    <div className="flex flex-col gap-5">

      {/* HERO SECTION */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-slate-800
          p-7
          text-white
        "
      >

        <div
          className="
            absolute
            top-[-100px]
            right-[-60px]
            w-[260px]
            h-[260px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-40px]
            w-[240px]
            h-[240px]
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Real-Time Queue Operations
                </p>

              </div>

              <h2
                className="
                  mt-4
                  text-[38px]
                  leading-tight
                  font-bold
                  tracking-tight
                "
              >
                Smart Queue
                <br />
                Management Panel
              </h2>

              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate-300">
                Monitor live queues, control token flow,
                reduce waiting congestion and manage
                customer movement efficiently.
              </p>

              {/* ACTIONS */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <button
                  className="
                    h-[48px]
                    px-5
                    rounded-2xl
                    bg-white
                    text-slate-900
                    text-sm
                    font-semibold
                    flex
                    items-center
                    gap-2
                  "
                >

                  <Sparkles size={16} />

                  Optimize Queue

                </button>

                <button
                  className="
                    h-[48px]
                    px-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    text-sm
                    font-medium
                  "
                >
                  View Queue Analytics
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-4 min-w-[320px]">

              {[
                {
                  title: "Live Tokens",
                  value: waitingTokens.length,
                  color: "bg-cyan-500",
                  icon: <Users size={18} />,
                },

                {
                  title: "Serving",
                  value: currentServing
                    ? currentServing.tokenNumber
                    : "None",

                  color: "bg-amber-500",
                  icon: <Clock3 size={18} />,
                },

                {
                  title: "Completed",
                  value: completedTokens.length,
                  color: "bg-emerald-500",
                  icon: <Activity size={18} />,
                },

                {
                  title: "Alerts",
                  value: tokens.length,
                  color: "bg-rose-500",
                  icon: <Bell size={18} />,
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
                      className={`
                        w-11
                        h-11
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-white
                        ${item.color}
                      `}
                    >

                      {item.icon}

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-500"
                    />

                  </div>

                  <h3 className="mt-5 text-[34px] font-bold tracking-tight">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* MAIN PANEL */}
      <div
        className="
          rounded-[34px]
          bg-white
          border
          border-slate-200
          overflow-hidden
        "
      >

        {/* TOPBAR */}
        <div
          className="
            px-6
            py-5
            border-b
            border-slate-100
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-5
          "
        >

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-emerald-500" />

              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Live Monitoring
              </p>

            </div>

            <h2
              className="
                mt-2
                text-[26px]
                font-semibold
                tracking-tight
                text-slate-900
              "
            >
              Queue Operations Center
            </h2>

          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center gap-3">

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

              <Search
                size={16}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search tokens..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  w-[150px]
                "
              />

            </div>

            {/* STATUS */}
            <button
              onClick={() =>
                setQueueOpen(!queueOpen)
              }
              className={`
                h-[48px]
                px-5
                rounded-2xl
                text-sm
                font-semibold
                ${queueOpen
                  ? "bg-emerald-500 text-white"
                  : "bg-rose-500 text-white"
                }
              `}
            >

              {queueOpen
                ? "Queue Open"
                : "Queue Closed"}

            </button>

          </div>

        </div>

        {/* SERVICE SELECT */}
        <div className="px-6 pt-6">

          <select
            value={selectedService}
            onChange={(e) =>
              setSelectedService(e.target.value)
            }
            className="
      h-[48px]
      px-4
      rounded-2xl
      border
      border-slate-200
      bg-white
      text-sm
      font-medium
      outline-none
    "
          >

            {uniqueServices.map((service, index) => (

              <option
                key={index}
                value={service}
              >
                {service}
              </option>

            ))}

          </select>

        </div>
        {/* ACTIONS */}
        <div
          className="
            p-6
            grid
            sm:grid-cols-2
            xl:grid-cols-5
            gap-4
            border-b
            border-slate-100
          "
        >

          <button onClick={callNextToken}
            className="
              h-[110px]
              rounded-[28px]
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bg-emerald-50
              border
              border-emerald-100
              text-emerald-700
            "
          >

            <CheckCircle2 size={22} />

            <span className="text-sm font-semibold">
              Call Next
            </span>

          </button>

          <button onClick={pauseQueue}
            className="
              h-[110px]
              rounded-[28px]
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bg-amber-50
              border
              border-amber-100
              text-amber-700
            "
          >

            <PauseCircle size={22} />

            <span className="text-sm font-semibold">
              Pause Queue
            </span>

          </button>

          <button onClick={resumeQueue}
            className="
              h-[110px]
              rounded-[28px]
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bg-slate-900
              text-white
            "
          >

            <PlayCircle size={22} />

            <span className="text-sm font-semibold">
              Resume Queue
            </span>

          </button>

          <button
            className="
              h-[110px]
              rounded-[28px]
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bg-rose-50
              border
              border-rose-100
              text-rose-700
            "
          >

            <SkipForward size={22} />

            <span className="text-sm font-semibold">
              Skip Token
            </span>

          </button>

          <button onClick={resetQueue}
            className="
              h-[110px]
              rounded-[28px]
              flex
              flex-col
              items-center
              justify-center
              gap-3
              bg-blue-50
              border
              border-blue-100
              text-blue-700
            "
          >

            <TimerReset size={22} />

            <span className="text-sm font-semibold">
              Reset Queue
            </span>

          </button>

        </div>

        {/* TABLE */}
        <div className="p-6 overflow-x-auto">

          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full min-w-[820px]">

              <thead>

                <tr className="border-b border-slate-100">

                  {[
                    "Token",
                    "Customer",
                    "Status",
                    "Purpose",
                    "Created",
                    "Actions",
                  ].map((head, index) => (
                    <th
                      key={index}
                      className="
                        pb-4
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

                {filteredTokens.map((item) => (
                  <tr
                    key={item._id}
                    className="
                      border-b
                      border-slate-100
                      hover:bg-slate-50/80
                    "
                  >

                    {/* TOKEN */}
                    <td className="py-5">

                      <div
                        className="
                          w-fit
                          px-4
                          py-2.5
                          rounded-2xl
                          bg-slate-900
                          text-white
                          text-sm
                          font-semibold
                        "
                      >
                        {item.tokenNumber}
                      </div>

                    </td>

                    {/* USER */}
                    <td className="py-5">

                      <div className="flex items-center gap-3">

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

                          <UserCheck
                            size={18}
                            className="text-slate-700"
                          />

                        </div>

                        <div>

                          <h4 className="text-sm font-semibold text-slate-900">
                            {item.userName}
                          </h4>

                          <p className="text-xs text-slate-500">
                            {item.mobile}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* STATUS */}
                    <td className="py-5">

                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-semibold
                          ${item.status === "Serving"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            : item.status ===
                              "Completed"
                              ? "bg-blue-50 text-blue-700 border border-blue-100"
                              : "bg-amber-50 text-amber-700 border border-amber-100"
                          }
                        `}
                      >

                        <CircleDashed size={12} />

                        {item.status}

                      </span>

                    </td>

                    {/* PURPOSE */}
                    <td className="py-5 text-sm text-slate-500">
                      {item.purpose}
                    </td>

                    {/* CREATED */}
                    <td className="py-5 text-sm text-slate-500">
                      {new Date(
                        item.createdAt
                      ).toLocaleTimeString()}
                    </td>

                    {/* ACTIONS */}
                    <td className="py-5">

                      <div className="flex items-center gap-2">

                        {item.status !==
                          "Completed" && (
                            <button
                              onClick={() =>
                                completeToken(item._id)
                              }
                              className="
                              px-4
                              py-2.5
                              rounded-xl
                              bg-slate-900
                              text-white
                              text-xs
                              font-semibold
                            "
                            >
                              Complete
                            </button>
                          )}

                        {item.status ===
                          "Waiting" && (
                            <button
                              onClick={() =>
                                skipToken(item._id)
                              }
                              className="
                              px-4
                              py-2.5
                              rounded-xl
                              border
                              border-slate-200
                              text-xs
                              font-semibold
                            "
                            >
                              Skip
                            </button>
                          )}

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
};

export default QueueManagementPanel;