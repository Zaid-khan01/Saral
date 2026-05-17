import React from "react";
import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Activity,
    Building2,
    ShieldCheck,
} from "lucide-react";

const mainImage =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778989417/ss1_xceje7.webp";

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
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
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

const imageVariant = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const HeroSection = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={container}
            className="
        relative
        overflow-hidden
        pt-36
        pb-24
      "
        >

            {/* Background Glow */}
            <div className="
        absolute
        top-[-100px]
        left-[-100px]
        w-[400px]
        h-[400px]
        bg-indigo-200
        opacity-30
        blur-3xl
        rounded-full
      " />

            <div className="
  absolute
  top-[-100px]
  left-[-100px]
  w-[400px]
  h-[400px]
bg-amber-200
  opacity-30
  blur-3xl
  rounded-full
" />

            {/* Container */}
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        variants={container}
                        className="relative z-10"
                    >

                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/90
                backdrop-blur-xl
                border
                border-slate-200
                shadow-sm
                mb-8
              "
                        >

                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>

                            <p className="text-sm font-medium text-slate-700">
                                India's Smart Digital Queue Platform
                            </p>

                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            className="
    text-5xl
    sm:text-6xl
    lg:text-7xl
    font-bold
    leading-[1.05]
    tracking-tight
    text-slate-900
  "
                        >
                            Skip the{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                                Queue.
                            </span>

                            <br />

                            Not Your{" "}
                            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                                Time.
                            </span>
                        </motion.h1>
                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="
    mt-8
    text-lg
    leading-8
    text-slate-600
    max-w-xl
  "
                        >
                            Saral helps hospitals, ration shops, banks,
                            and government offices manage queues digitally
                            with live tracking, token booking, and real-time updates.
                        </motion.p>


                        {/* Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-wrap gap-4"
                        >

                            {/* Get Started */}
                            <button
                                className="
      group
      relative
      overflow-hidden
      px-7
      py-4
      rounded-2xl
      bg-slate-900
      text-white
      font-medium
      transition-all
      duration-300
      flex
      items-center
      gap-2
      shadow-lg
      shadow-slate-200
      hover:shadow-2xl
      hover:-translate-y-1
    "
                            >

                                {/* subtle hover glow */}
                                <div className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/10
      to-transparent
      opacity-0
      group-hover:opacity-100
      transition
      duration-300
    " />

                                <span className="relative z-10">
                                    Get Started
                                </span>

                                <ArrowUpRight
                                    size={18}
                                    className="
        relative
        z-10
        transition-transform
        duration-300
        group-hover:-translate-y-1
        group-hover:translate-x-1
      "
                                />
                            </button>


                            {/* Watch Demo */}
                            <button
                                className="
      group
      px-7
      py-4
      rounded-2xl
      bg-white/80
      backdrop-blur-xl
      border
      border-slate-200
      text-slate-700
      font-medium
      transition-all
      duration-300
      hover:bg-slate-900
      hover:text-white
      hover:border-slate-900
      hover:-translate-y-1
      hover:shadow-xl
    "
                            >
                                <span className="transition duration-300">
                                    Watch Demo
                                </span>
                            </button>

                        </motion.div>
                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            className="
    mt-16
    grid
    grid-cols-1
    sm:grid-cols-3
    gap-10
    max-w-3xl
  "
                        >
                            {[
                                {
                                    icon: (
                                        <Activity className="text-indigo-600" size={22} />
                                    ),
                                    value: "10K+",
                                    label: "Tokens Managed",
                                },
                                {
                                    icon: (
                                        <Building2 className="text-cyan-600" size={22} />
                                    ),
                                    value: "250+",
                                    label: "Organizations",
                                },
                                {
                                    icon: (
                                        <ShieldCheck className="text-emerald-600" size={22} />
                                    ),
                                    value: "98%",
                                    label: "Reduced Chaos",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
        relative
        group
        flex
        items-center
        gap-4
        cursor-default
      "
                                >
                                    {/* subtle vertical divider */}
                                    {index !== 0 && (
                                        <div className="hidden sm:block absolute left-[-20px] top-1/2 -translate-y-1/2 h-10 w-[1px] bg-slate-200" />
                                    )}

                                    {/* icon (no box, just floating) */}
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </div>

                                    {/* text */}
                                    <div>
                                        <h3 className="
          text-3xl
          font-semibold
          tracking-tight
          text-slate-900
        ">
                                            {item.value}
                                        </h3>

                                        <p className="
          text-sm
          text-slate-500
          mt-1
        ">
                                            {item.label}
                                        </p>
                                    </div>

                                    {/* hover glow effect */}
                                    <div className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-300
        bg-gradient-to-r
        from-yellow-200 via-amber-200 to-orange-100
        blur-2xl
        rounded-2xl
        -z-10
      " />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        variants={imageVariant}
                        className="
              relative
              h-[620px]
              flex
              items-center
              justify-center
            "
                    >

                        <div className="
  absolute
  bottom-[-120px]
  right-[-120px]
  w-[400px]
  h-[400px]
  bg-yellow-100
  opacity-30
  blur-3xl
  rounded-full
" />

                        {/* Floating Images */}
                        {[
                            {
                                image: hospitalImage,
                                className: "top-5 left-0",
                            },

                            {
                                image: bankImage,
                                className: "top-12 right-2",
                            },

                            {
                                image: rationImage,
                                className: "bottom-16 left-6",
                            },

                            {
                                image: trackingImage,
                                className: "bottom-4 right-0",
                            },
                        ].map((item, index) => (
                            <motion.img
                                key={index}
                                src={item.image}
                                alt=""
                                className={`
                  absolute
                  ${item.className}
                  w-44
                  h-44
                  object-cover
                  rounded-3xl
                  border
                  border-white/70
                  shadow-[0_20px_40px_rgba(15,23,42,0.12)]
                  backdrop-blur-xl
                  z-10
                `}
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "easeInOut",
                                    delay: index * 0.3,
                                }}
                            />
                        ))}

                        {/* Main Center Image */}
                        <motion.img
                            src={mainImage}
                            alt="Saral Platform"
                            className="
                relative
                z-20
                w-[250px]
                h-[250px]
                lg:w-[350px]
                lg:h-[280px]
                object-cover
                rounded-[36px]
                border
                border-white/80
                shadow-[0_30px_60px_rgba(15,23,42,0.18)]
              "
                            animate={{
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 7,
                                ease: "easeInOut",
                            }}
                        />

                    </motion.div>

                </div>

            </div>

        </motion.section>
    );
};

export default HeroSection;