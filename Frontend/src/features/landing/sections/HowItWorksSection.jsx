import React from "react";
import { motion } from "framer-motion";

import {
  QrCode,
  Ticket,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const hospitalImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989417/ss2_d5ogak.webp";

const trackingImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989441/ss5_tizd3a.webp";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
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

const stepVariant = {
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

const steps = [
  {
    icon: <QrCode size={26} className="text-amber-600" />,
    title: "Scan QR & Join",
    description:
      "Users simply scan the organization QR code and instantly join the digital queue from anywhere.",
  },

  {
    icon: <Ticket size={26} className="text-orange-500" />,
    title: "Get Smart Token",
    description:
      "Saral generates a live token with queue position, estimated waiting time, and real-time updates.",
  },

  {
    icon: <Smartphone size={26} className="text-slate-900" />,
    title: "Track Live Queue",
    description:
      "Users receive live queue movement notifications and arrive only when their turn is near.",
  },
];

const HowItWorksSection = () => {
  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
        w-[320px]
        h-[320px]
        bg-yellow-100
        opacity-20
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute
        bottom-[5%]
        right-[-120px]
        w-[320px]
        h-[320px]
        bg-amber-100
        opacity-20
        blur-3xl
        rounded-full
      " />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Top Heading */}
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

            <div className="w-2 h-2 rounded-full bg-amber-500" />

            <p className="
              text-sm
              font-medium
              text-slate-700
            ">
              How Saral Works
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
            Simple For{" "}
            <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              People.
            </span>

            <br />

            Powerful For Organizations.
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
            Saral transforms traditional waiting lines into
            a seamless digital queue experience with
            live tracking, instant tokens, and real-time updates.
          </p>

        </motion.div>

        {/* Main Layout */}
        <div className="
          mt-24
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">

          {/* LEFT SIDE */}
          <motion.div
            variants={container}
            className="
              relative
              flex
              flex-col
              gap-6
            "
          >

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariant}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/70
                  bg-white/70
                  backdrop-blur-xl
                  p-7
                  shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                "
              >

                {/* Hover Glow */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  bg-gradient-to-r
                  from-amber-50
                  via-transparent
                  to-orange-50
                " />

                <div className="
                  relative
                  flex
                  items-start
                  gap-5
                ">

                  {/* Step Number */}
                  <div className="
                    min-w-[52px]
                    h-[52px]
                    rounded-2xl
                    bg-slate-900
                    text-white
                    flex
                    items-center
                    justify-center
                    font-semibold
                    text-lg
                    shadow-lg
                  ">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Icon */}
                    <div className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-amber-50
                      flex
                      items-center
                      justify-center
                      mb-5
                    ">
                      {step.icon}
                    </div>

                    <h3 className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-slate-900
                    ">
                      {step.title}
                    </h3>

                    <p className="
                      mt-4
                      text-slate-600
                      leading-7
                    ">
                      {step.description}
                    </p>

                  </div>

                  {/* Arrow */}
                  <div className="
                    flex
                    items-center
                    justify-center
                    min-w-[48px]
                    h-[48px]
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    text-slate-700
                    transition-all
                    duration-300
                    group-hover:bg-slate-900
                    group-hover:text-white
                    shadow-sm
                  ">

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </motion.div>
            ))}

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
              w-[420px]
              h-[420px]
              bg-gradient-to-r
              from-yellow-100
              via-amber-100
              to-orange-100
              opacity-30
              blur-3xl
              rounded-full
            " />

            {/* Main Card */}
            <div className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/70
              bg-white/80
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(15,23,42,0.08)]
            ">

              {/* Top Image */}
              <div className="
                relative
                h-[280px]
                overflow-hidden
              ">

                <img
                  src={hospitalImage}
                  alt="Queue"
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
                  from-black/30
                  via-transparent
                  to-transparent
                " />

              </div>

              {/* Bottom Content */}
              <div className="p-8">

                {/* Live Queue UI */}
                <div className="
                  rounded-[28px]
                  bg-[#fffdf7]
                  border
                  border-amber-100
                  p-6
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
                        Current Token
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
                      px-4
                      py-2
                      rounded-full
                      bg-emerald-100
                      text-emerald-700
                      text-sm
                      font-medium
                    ">
                      Live
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-8">

                    <div className="
                      flex
                      items-center
                      justify-between
                      text-sm
                      text-slate-500
                      mb-3
                    ">
                      <span>Your Position</span>
                      <span>7 People Ahead</span>
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
                          duration: 1.4,
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

                  {/* Bottom Card */}
                  <div className="
                    mt-8
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white
                    border
                    border-slate-100
                    p-4
                  ">

                    <img
                      src={trackingImage}
                      alt="Tracking"
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        object-cover
                      "
                    />

                    <div>

                      <p className="
                        text-sm
                        text-slate-500
                      ">
                        Estimated Wait Time
                      </p>

                      <h4 className="
                        text-2xl
                        font-semibold
                        text-slate-900
                      ">
                        12 Minutes
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default HowItWorksSection;