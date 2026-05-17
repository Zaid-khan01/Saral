import React from "react";
import { motion } from "framer-motion";

import {
    BellRing,
    QrCode,
    ShieldCheck,
    Activity,
    Smartphone,
    BarChart3,
    ArrowUpRight,
    Sparkles,
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

const features = [
    {
        icon: <QrCode size={22} className="text-amber-600" />,
        title: "QR Queue Access",
        description:
            "Users can instantly join queues by scanning QR codes without downloading complex apps.",
    },

    {
        icon: <BellRing size={22} className="text-orange-500" />,
        title: "Smart Notifications",
        description:
            "Real-time alerts keep users informed when their token is approaching.",
    },

    {
        icon: <Activity size={22} className="text-emerald-600" />,
        title: "Live Queue Tracking",
        description:
            "Track token movement, waiting time, and live queue activity transparently.",
    },

    {
        icon: <ShieldCheck size={22} className="text-indigo-600" />,
        title: "Secure Management",
        description:
            "Organizations get controlled access with safe and structured queue handling.",
    },

];

const FeaturesSection = () => {
    return (
        <motion.section
            id="features"
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

                        <Sparkles
                            size={16}
                            className="text-amber-500"
                        />

                        <p className="
              text-sm
              font-medium
              text-slate-700
            ">
                            Powerful Features
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
                        Everything Needed For

                        <br />

                        <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
                            Smart Queue Management.
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
                        Saral combines real-time tracking,
                        intelligent notifications, secure organization tools,
                        and analytics into one seamless platform.
                    </p>

                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={container}
                    className="
            mt-24
            grid
            lg:grid-cols-12
            gap-6
          "
                >

                    {/* BIG FEATURE CARD */}
                    <motion.div
                        variants={cardVariant}
                        className="
              relative
              overflow-hidden
              lg:col-span-7
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
              w-[280px]
              h-[280px]
              bg-gradient-to-br
              from-amber-100
              to-orange-100
              opacity-40
              blur-3xl
              rounded-full
            " />

                        {/* Top */}
                        <div className="
              relative
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
                                    <Activity
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
                                    Real-Time Queue Intelligence
                                </h3>

                                <p className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                  max-w-2xl
                ">
                                    Saral constantly updates queue movement,
                                    token positions, waiting time, and user flow
                                    with instant live synchronization.
                                </p>

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

                        {/* Unique Live Activity UI */}
                        <div className="
              relative
              mt-14
              rounded-[32px]
              border
              border-amber-100
              bg-[#fffdf7]
              overflow-hidden
              p-8
            ">

                            {/* Animated pulse lines */}
                            <div className="flex flex-col gap-5">

                                {[1, 2, 3, 4].map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                      flex
                      items-center
                      gap-4
                    "
                                    >

                                        {/* Pulse Dot */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.4, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                delay: index * 0.3,
                                            }}
                                            className="
                        w-3
                        h-3
                        rounded-full
                        bg-amber-500
                      "
                                        />

                                        {/* Animated Line */}
                                        <motion.div
                                            initial={{
                                                width: 0,
                                            }}
                                            whileInView={{
                                                width:
                                                    index === 0
                                                        ? "90%"
                                                        : index === 1
                                                            ? "75%"
                                                            : index === 2
                                                                ? "60%"
                                                                : "82%",
                                            }}
                                            transition={{
                                                duration: 1.4,
                                                delay: index * 0.15,
                                                ease: "easeOut",
                                            }}
                                            className="
                        h-[14px]
                        rounded-full
                        bg-gradient-to-r
                        from-amber-400
                        via-orange-400
                        to-orange-500
                      "
                                        />

                                    </div>
                                ))}

                            </div>

                            {/* Bottom */}
                            {/* Bottom */}
                            <div className="mt-12">

                                {/* Top Row */}
                                <div className="
    flex
    items-center
    justify-between
    gap-6
  ">

                                    <div>

                                        <p className="
        text-sm
        text-slate-500
      ">
                                            Queue Activity
                                        </p>

                                        <h4 className="
        mt-1
        text-3xl
        font-bold
        tracking-tight
        text-slate-900
      ">
                                            Live Synchronization
                                        </h4>

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

                                        Active

                                    </div>

                                </div>

                                {/* New Bottom Analytics */}
                                <div className="
    mt-10
    grid
    grid-cols-3
    gap-4
  ">

                                    {[
                                        {
                                            value: "2.4K",
                                            label: "Tokens",
                                        },

                                        {
                                            value: "98%",
                                            label: "Accuracy",
                                        },

                                        {
                                            value: "24/7",
                                            label: "Tracking",
                                        },
                                    ].map((item, index) => (
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

                                                <h5 className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
          ">
                                                    {item.value}
                                                </h5>

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

                        </div>

                    </motion.div>

                    {/* RIGHT GRID */}
                    <div className="
            lg:col-span-5
            grid
            sm:grid-cols-2
            gap-6
          ">

                        {features.map((feature, index) => (
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
                  p-7
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-amber-50
                    flex
                    items-center
                    justify-center
                  ">
                                        {feature.icon}
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
                                        {feature.title}
                                    </h3>

                                    {/* Desc */}
                                    <p className="
                    mt-4
                    text-slate-600
                    leading-7
                  ">
                                        {feature.description}
                                    </p>

                                    {/* Bottom */}
                                    <div className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  ">

                                        <div className="
                      text-sm
                      font-medium
                      text-slate-500
                    ">
                                            Smart Feature
                                        </div>

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

                    </div>

                </motion.div>

            </div>

        </motion.section>
    );
};

export default FeaturesSection;