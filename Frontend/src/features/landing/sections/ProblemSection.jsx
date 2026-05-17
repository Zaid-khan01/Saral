import React from "react";
import { motion } from "framer-motion";

import {
    Clock3,
    Users,
    AlertTriangle,
    ArrowUpRight,
} from "lucide-react";

const hospitalImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989417/ss2_d5ogak.webp";

const bankImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989419/ss3_ed6t8c.webp";

const rationImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989422/ss4_qdszvu.webp";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
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
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const problems = [
    {
        icon: <Clock3 size={24} className="text-amber-600" />,
        title: "Hours Lost Waiting",
        description:
            "People spend valuable time standing in long physical queues instead of focusing on work, family, or emergencies.",
        image: hospitalImage,
    },

    {
        icon: <Users size={24} className="text-orange-600" />,
        title: "Crowd & Confusion",
        description:
            "Hospitals, banks, and public offices become chaotic during rush hours with no structured queue visibility.",
        image: bankImage,
    },

    {
        icon: <AlertTriangle size={24} className="text-red-500" />,
        title: "No Transparency",
        description:
            "People never know their real waiting time, current token status, or whether the queue is moving efficiently.",
        image: rationImage,
    },
];

const ProblemSection = () => {
    return (
        <motion.section
            id="problem"
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
        top-0
        left-[-120px]
        w-[380px]
        h-[380px]
        bg-amber-100
        opacity-20
        blur-3xl
        rounded-full
      " />

            <div className="
        absolute
        bottom-0
        right-[-120px]
        w-[380px]
        h-[380px]
        bg-yellow-100
        opacity-20
        blur-3xl
        rounded-full
      " />

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                {/* Top Content */}
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
            bg-white/70
            backdrop-blur-xl
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
                            The Real Problem
                        </p>

                    </div>

                    {/* Heading */}
                    <h2 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            leading-[1.1]
            tracking-tight
            text-slate-900
          ">
                        Queues Shouldn't{" "}
                        <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
                            Control
                        </span>{" "}
                        People's Time.
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
                        Millions of people waste hours every week standing in
                        crowded lines at hospitals, banks, ration shops,
                        and government offices — without knowing when their turn
                        will actually come.
                    </p>

                </motion.div>

                {/* Problem Cards */}
                <motion.div
                    variants={container}
                    className="
            mt-24
            grid
            lg:grid-cols-3
            gap-8
          "
                >

                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariant}
                            className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white/70
                backdrop-blur-2xl
                border
                border-white/60
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                transition-all
                duration-500
              "
                        >

                            {/* Image */}
                            <div className="
                relative
                h-[240px]
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
                    duration-700
                    group-hover:scale-105
                  "
                                />

                                {/* Overlay */}
                                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/10
                  to-transparent
                " />

                                {/* Floating Icon */}
                                <div className="
                  absolute
                  top-5
                  left-5
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  shadow-lg
                ">
                                    {item.icon}
                                </div>

                            </div>

                            {/* Content */}
                            <div className="p-8">

                                <div className="
                  flex
                  items-start
                  justify-between
                  gap-4
                ">

                                    <div>
                                        <h3 className="
                      text-2xl
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
                                        <ArrowUpRight
                                            size={18}
                                            className="
                        transition-transform
                        duration-500
                        group-hover:-translate-y-[2px]
group-hover:translate-x-[2px]
                      "
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Hover Glow */}
                            <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-amber-100/40
                via-transparent
                to-orange-100/40
                blur-3xl
                -z-10
              " />

                        </motion.div>
                    ))}

                </motion.div>

            </div>

        </motion.section>
    );
};

export default ProblemSection;