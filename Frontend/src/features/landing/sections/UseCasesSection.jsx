import React from "react";
import { motion } from "framer-motion";

import {
  Building2,
  Landmark,
  HeartPulse,
  BadgeHelp,
  ArrowUpRight,
  Activity,
} from "lucide-react";

const hospitalImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989417/ss2_d5ogak.webp";

const bankImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989419/ss3_ed6t8c.webp";

const rationImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989422/ss4_qdszvu.webp";

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

const useCases = [
  {
    title: "Hospitals & Clinics",
    description:
      "Reduce waiting room chaos with live patient token tracking and smart queue management.",
    image: hospitalImage,
    icon: <HeartPulse size={22} className="text-rose-500" />,
    stat: "68% Less Waiting",
    live: "24 Active Queues",
  },

  {
    title: "Banks & Financial Services",
    description:
      "Manage customer visits efficiently with transparent token systems and live notifications.",
    image: bankImage,
    icon: <Landmark size={22} className="text-indigo-600" />,
    stat: "12 Min Avg Wait",
    live: "1.2K Tokens Today",
  },

  {
    title: "Ration Shops",
    description:
      "Eliminate crowding and improve fairness with organized digital queue distribution.",
    image: rationImage,
    icon: <Building2 size={22} className="text-amber-600" />,
    stat: "98% Organized Flow",
    live: "Live Public Queue",
  },

  {
    title: "Government Offices",
    description:
      "Modernize citizen services with seamless token systems and real-time queue updates.",
    image: trackingImage,
    icon: <BadgeHelp size={22} className="text-emerald-600" />,
    stat: "Smart Public Access",
    live: "7K+ Daily Visitors",
  },
];

const UseCasesSection = () => {
  return (
    <motion.section
      id="use-cases"
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
              Built For Real-World Queues
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
            One Platform.

            <br />

            <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              Multiple Industries.
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
            Saral adapts seamlessly across hospitals,
            banks, ration shops, and government offices —
            delivering structured digital queue experiences
            everywhere.
          </p>

        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="
            mt-24
            grid
            lg:grid-cols-2
            gap-8
          "
        >

          {useCases.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/70
                bg-white/75
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(15,23,42,0.06)]
              "
            >

              {/* Image */}
              <div className="
                relative
                h-[300px]
                overflow-hidden
              ">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-black/10
                  to-transparent
                " />

                {/* Top Live Badge */}
                <div className="
                  absolute
                  top-5
                  left-5
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-sm
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
                    {item.live}
                  </p>

                </div>

                {/* Floating Stat */}
                <div className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-3xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/70
                  p-5
                  shadow-xl
                ">

                  <div className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  ">

                    <div className="
                      flex
                      items-center
                      gap-4
                    ">

                      <div className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-amber-50
                        flex
                        items-center
                        justify-center
                      ">
                        {item.icon}
                      </div>

                      <div>

                        <p className="
                          text-sm
                          text-slate-500
                        ">
                          Performance
                        </p>

                        <h4 className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-slate-900
                        ">
                          {item.stat}
                        </h4>

                      </div>

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

              </div>

              {/* Bottom Content */}
              <div className="p-8">

                {/* Top */}
                <div className="
                  flex
                  items-start
                  justify-between
                  gap-4
                ">

                  <div>

                    <h3 className="
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-slate-900
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-4
                      text-slate-600
                      leading-7
                    ">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Queue Simulation */}
                <div className="
                  mt-8
                  rounded-[28px]
                  bg-[#fffdf7]
                  border
                  border-amber-100
                  p-6
                ">

                  {/* Top */}
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
                        Queue Efficiency
                      </p>

                      <h4 className="
                        mt-1
                        text-3xl
                        font-bold
                        tracking-tight
                        text-slate-900
                      ">
                        92%
                      </h4>

                    </div>

                    <div className="
                      flex
                      items-center
                      gap-2
                      text-emerald-600
                      font-medium
                      text-sm
                    ">

                      <Activity size={16} />
                      Live Tracking

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
                      <span>Queue Optimization</span>
                      <span>Real-Time Active</span>
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
                        whileInView={{ width: "92%" }}
                        transition={{
                          duration: 1.5,
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

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </motion.section>
  );
};

export default UseCasesSection;