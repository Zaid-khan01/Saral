import React from "react";
import { motion } from "framer-motion";

import {
  Activity,
  BellRing,
  Clock3,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const trackingImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989441/ss5_tizd3a.webp";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const queueUsers = [
  {
    token: "A-24",
    status: "Now Serving",
    active: true,
  },

  {
    token: "A-25",
    status: "Next",
  },

  {
    token: "A-26",
    status: "Waiting",
  },

  {
    token: "A-27",
    status: "Waiting",
  },
];

const LiveDemoSection = () => {
  return (
    <motion.section
      id="live-demo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="
        relative
        py-20
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="
        absolute
        top-[10%]
        left-[-120px]
        w-[340px]
        h-[340px]
        bg-yellow-100
        opacity-20
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute
        bottom-[5%]
        right-[-120px]
        w-[340px]
        h-[340px]
        bg-amber-100
        opacity-20
        blur-3xl
        rounded-full
      " />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >

          {/* Badge */}
          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/80
            border
            border-amber-100
            shadow-sm
            mb-8
          ">

            <div className="
              w-2
              h-2
              rounded-full
              bg-emerald-500
              animate-pulse
            " />

            <p className="
              text-sm
              font-medium
              text-slate-700
            ">
              Live Queue Experience
            </p>

          </div>

          {/* Heading */}
          <h2 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            leading-[1.08]
            tracking-tight
            text-slate-900
          ">
            Experience Queue Tracking

            <br />

            <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              In Real-Time.
            </span>
          </h2>

          {/* Description */}
          <p className="
            mt-8
            text-lg
            leading-8
            text-slate-600
            max-w-3xl
            mx-auto
          ">
            From live token movement to instant notifications,
            Saral keeps users informed every second —
            eliminating uncertainty and physical waiting.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="
          mt-24
          grid
          lg:grid-cols-2
          gap-12
          items-center
        ">

          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            className="
              flex
              flex-col
              gap-6
            "
          >

            {/* Top Live Queue Card */}
            <motion.div
              variants={cardVariant}
              className="
                relative
                overflow-hidden
                rounded-[36px]
                bg-white/75
                backdrop-blur-2xl
                border
                border-white/70
                shadow-[0_25px_80px_rgba(15,23,42,0.06)]
                p-8
              "
            >

              {/* Header */}
              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="
                    text-sm
                    text-slate-500
                  ">
                    Current Queue
                  </p>

                  <h3 className="
                    mt-1
                    text-4xl
                    font-bold
                    tracking-tight
                    text-slate-900
                  ">
                    A-24
                  </h3>

                </div>

                <div className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-emerald-100
                  text-emerald-700
                  text-sm
                  font-medium
                ">

                  <div className="
                    w-2
                    h-2
                    rounded-full
                    bg-emerald-500
                    animate-pulse
                  " />

                  Live

                </div>

              </div>

              {/* Queue List */}
              <div className="mt-10 flex flex-col gap-4">

                {queueUsers.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300

                      ${
                        item.active
                          ? "bg-amber-50 border-amber-200"
                          : "bg-white border-slate-100"
                      }
                    `}
                  >

                    <div className="
                      flex
                      items-center
                      gap-4
                    ">

                      <div className={`
                        w-12
                        h-12
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        font-semibold

                        ${
                          item.active
                            ? "bg-amber-500 text-white"
                            : "bg-slate-100 text-slate-700"
                        }
                      `}>
                        {index + 1}
                      </div>

                      <div>

                        <h4 className="
                          text-xl
                          font-semibold
                          text-slate-900
                        ">
                          {item.token}
                        </h4>

                        <p className="
                          text-sm
                          text-slate-500
                        ">
                          {item.status}
                        </p>

                      </div>

                    </div>

                    {item.active && (
                      <CheckCircle2
                        size={22}
                        className="text-emerald-500"
                      />
                    )}

                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              variants={cardVariant}
              className="
                grid
                sm:grid-cols-3
                gap-5
              "
            >

              {[
                {
                  icon: <Clock3 size={20} />,
                  value: "12 Min",
                  label: "Average Wait",
                },

                {
                  icon: <Users size={20} />,
                  value: "120+",
                  label: "Live Visitors",
                },

                {
                  icon: <BellRing size={20} />,
                  value: "Instant",
                  label: "Notifications",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border
                    border-white/70
                    bg-white/75
                    backdrop-blur-xl
                    p-6
                    shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  "
                >

                  <div className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-amber-50
                    flex
                    items-center
                    justify-center
                    text-amber-600
                  ">
                    {item.icon}
                  </div>

                  <h4 className="
                    mt-5
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                  ">
                    {item.value}
                  </h4>

                  <p className="
                    mt-2
                    text-sm
                    text-slate-500
                  ">
                    {item.label}
                  </p>

                </div>
              ))}

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >

            {/* Glow */}
            <div className="
              absolute
              w-[450px]
              h-[450px]
              bg-gradient-to-r
              from-yellow-100
              via-amber-100
              to-orange-100
              opacity-30
              blur-3xl
              rounded-full
            " />

            {/* Main UI Card */}
            <div className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-white/80
              backdrop-blur-2xl
              border
              border-white/70
              shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            ">

              {/* Top Image */}
              <div className="
                relative
                h-[320px]
                overflow-hidden
              ">

                <img
                  src={trackingImage}
                  alt="Tracking"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/10
                  to-transparent
                " />

              </div>

              {/* Bottom Content */}
              <div className="p-8">

                {/* Live Tracking Box */}
                <div className="
                  rounded-[30px]
                  bg-[#fffdf7]
                  border
                  border-amber-100
                  p-7
                ">

                  {/* Header */}
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <div>

                      <p className="
                        text-sm
                        text-slate-500
                      ">
                        Your Token
                      </p>

                      <h3 className="
                        mt-1
                        text-5xl
                        font-bold
                        tracking-tight
                        text-slate-900
                      ">
                        A-31
                      </h3>

                    </div>

                    <div className="
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-2xl
                      bg-slate-900
                      text-white
                    ">

                      <ArrowUpRight size={20} />

                    </div>

                  </div>

                  {/* Queue Progress */}
                  <div className="mt-10">

                    <div className="
                      flex
                      items-center
                      justify-between
                      mb-3
                    ">

                      <p className="
                        text-sm
                        text-slate-500
                      ">
                        Queue Progress
                      </p>

                      <p className="
                        text-sm
                        font-medium
                        text-slate-700
                      ">
                        72%
                      </p>

                    </div>

                    <div className="
                      w-full
                      h-3
                      rounded-full
                      bg-amber-100
                      overflow-hidden
                    ">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        transition={{
                          duration: 1.6,
                          ease: "easeOut",
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-amber-500
                          to-orange-500
                        "
                      />

                    </div>

                  </div>

                  {/* Notification */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                    }}
                    className="
                      mt-8
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      bg-white
                      border
                      border-slate-100
                      p-5
                    "
                  >

                    <div className="
                      min-w-[48px]
                      h-[48px]
                      rounded-2xl
                      bg-emerald-100
                      flex
                      items-center
                      justify-center
                    ">

                      <BellRing
                        size={22}
                        className="text-emerald-600"
                      />

                    </div>

                    <div>

                      <h4 className="
                        text-lg
                        font-semibold
                        text-slate-900
                      ">
                        Your Turn Is Near
                      </h4>

                      <p className="
                        mt-1
                        text-slate-500
                        leading-7
                      ">
                        Please arrive within the next
                        10 minutes to avoid missing your token.
                      </p>

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default LiveDemoSection;