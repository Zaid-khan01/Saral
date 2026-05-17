import React from "react";
import { motion } from "framer-motion";

import {
  Clock3,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Check,
  BellRing,
} from "lucide-react";

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

const benefits = [
  {
    icon: <Clock3 size={22} className="text-amber-600" />,
    title: "Save Time",
    description:
      "No more standing in physical lines for hours. Users can track everything remotely.",
  },

  {
    icon: <Users size={22} className="text-indigo-600" />,
    title: "Reduce Crowd Chaos",
    description:
      "Organized digital queues improve discipline and eliminate unnecessary crowding.",
  },

  {
    icon: <BellRing size={22} className="text-emerald-600" />,
    title: "Instant Updates",
    description:
      "Real-time notifications ensure users never miss their turn.",
  },

  {
    icon: <ShieldCheck size={22} className="text-rose-500" />,
    title: "Transparent System",
    description:
      "Every token movement is visible live, increasing trust and fairness.",
  },
];

const stats = [
  {
    value: "72%",
    label: "Reduced Waiting",
  },

  {
    value: "98%",
    label: "Queue Accuracy",
  },

  {
    value: "24/7",
    label: "Live Monitoring",
  },
];

const BenefitsSection = () => {
  return (
    <motion.section
      id="benefits"
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

            <Sparkles
              size={16}
              className="text-amber-500"
            />

            <p className="
              text-sm
              font-medium
              text-slate-700
            ">
              Why Saral Works
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
            Built To Remove

            <br />

            <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              Waiting Frustration.
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
            Saral transforms traditional waiting systems
            into organized, transparent, and stress-free
            digital experiences for both users and organizations.
          </p>

        </motion.div>

        {/* Main Layout */}
        <div className="
          mt-24
          grid
          lg:grid-cols-2
          gap-10
          items-center
        ">

          {/* LEFT SIDE */}
          <motion.div
            variants={cardVariant}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/70
              bg-white/75
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(15,23,42,0.06)]
              p-10
            "
          >

            {/* Glow */}
            <div className="
              absolute
              top-0
              right-0
              w-[260px]
              h-[260px]
              rounded-full
              bg-gradient-to-br
              from-amber-100
              to-orange-100
              opacity-40
              blur-3xl
            " />

            <div className="relative">

              {/* Top */}
              <div className="
                flex
                items-start
                justify-between
                gap-6
              ">

                <div>

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-amber-50
                    flex
                    items-center
                    justify-center
                    mb-6
                  ">

                    <TrendingUp
                      size={26}
                      className="text-amber-600"
                    />

                  </div>

                  <h3 className="
                    text-4xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    leading-tight
                  ">
                    Better Experience.
                    <br />
                    Better Efficiency.
                  </h3>

                </div>

                {/* Arrow */}
                <div className="
                  flex
                  items-center
                  justify-center
                  min-w-[58px]
                  h-[58px]
                  rounded-2xl
                  bg-slate-900
                  text-white
                  shadow-lg
                ">

                  <ArrowUpRight size={22} />

                </div>

              </div>

              {/* Description */}
              <p className="
                mt-8
                text-lg
                leading-8
                text-slate-600
              ">
                Saral minimizes physical crowding,
                improves service transparency,
                and gives users complete visibility
                into queue movement from anywhere.
              </p>

              {/* Benefits List */}
              <div className="
                mt-10
                flex
                flex-col
                gap-4
              ">

                {[
                  "Live queue tracking from any device",
                  "Smart token notifications",
                  "Faster service management",
                  "Reduced crowd congestion",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-amber-100
                      bg-[#fffdf7]
                      px-5
                      py-4
                    "
                  >

                    <div className="
                      min-w-[38px]
                      h-[38px]
                      rounded-xl
                      bg-amber-100
                      flex
                      items-center
                      justify-center
                    ">

                      <Check
                        size={18}
                        className="text-amber-700"
                      />

                    </div>

                    <p className="
                      text-slate-700
                      font-medium
                    ">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              {/* Bottom Stats */}
              <div className="
                mt-10
                grid
                grid-cols-3
                gap-4
              ">

                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-amber-100
                      bg-white/70
                      backdrop-blur-xl
                      p-5
                    "
                  >

                    {/* Glow */}
                    <div className="
                      absolute
                      top-[-30px]
                      right-[-30px]
                      w-[80px]
                      h-[80px]
                      rounded-full
                      bg-amber-100
                      opacity-40
                      blur-2xl
                    " />

                    <div className="relative">

                      <h4 className="
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

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            className="
              grid
              sm:grid-cols-2
              gap-6
            "
          >

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/70
                  bg-white/75
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(15,23,42,0.05)]
                  p-8
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
                  bg-gradient-to-br
                  from-amber-50
                  via-transparent
                  to-orange-50
                " />

                <div className="relative">

                  {/* Icon */}
                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-amber-50
                    flex
                    items-center
                    justify-center
                  ">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="
                    mt-6
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-slate-900
                    leading-tight
                  ">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="
                    mt-4
                    text-slate-600
                    leading-7
                  ">
                    {benefit.description}
                  </p>

                  {/* Bottom */}
                  <div className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  ">

                    <p className="
                      text-sm
                      font-medium
                      text-slate-500
                    ">
                      User Benefit
                    </p>

                    <div className="
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      transition-all
                      duration-300
                      group-hover:bg-slate-900
                      group-hover:text-white
                    ">

                      <ArrowUpRight
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-[2px]
                          group-hover:translate-x-[2px]
                        "
                      />

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default BenefitsSection;