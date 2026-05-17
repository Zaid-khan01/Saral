import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
    BellRing,
    Activity,
} from "lucide-react";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
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

const floatingCards = [
    {
        icon: <BellRing size={18} />,
        text: "Token #128 is now active",
        className: "top-10 left-0 lg:left-10",
    },

    {
        icon: <Activity size={18} />,
        text: "Live queue synchronized",
        className: "bottom-10 right-0 lg:right-10",
    },
];

const CTASection = () => {
    const navigate = useNavigate();
    return (
        <section
            id="cta"
            className="
        relative
        py-20
        overflow-hidden
      "
        >

            {/* Background Glow */}
            <div className="
        absolute
        top-[-120px]
        left-[-120px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-yellow-100
        opacity-30
        blur-3xl
      " />

            <div className="
        absolute
        bottom-[-120px]
        right-[-120px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-amber-100
        opacity-30
        blur-3xl
      " />

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/70
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            px-8
            sm:px-12
            lg:px-20
            py-20
          "
                >

                    {/* Gradient Overlay */}
                    <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-amber-50/60
            via-transparent
            to-orange-50/60
          " />

                    {/* Animated Line */}
                    <motion.div
                        initial={{
                            width: 0,
                        }}
                        whileInView={{
                            width: "100%",
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        className="
              absolute
              top-0
              left-0
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-amber-500
              to-transparent
            "
                    />

                    {/* Floating Mini Cards */}
                    {floatingCards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.6,
                            }}
                            className={`
                hidden
                lg:flex
                absolute
                ${item.className}
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                border
                border-white/70
                bg-white/80
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              `}
                        >

                            <div className="
                w-10
                h-10
                rounded-xl
                bg-amber-50
                flex
                items-center
                justify-center
                text-amber-600
              ">
                                {item.icon}
                            </div>

                            <p className="
                text-sm
                font-medium
                text-slate-700
              ">
                                {item.text}
                            </p>

                        </motion.div>
                    ))}

                    {/* Main Content */}
                    <div className="
            relative
            z-10
            max-w-4xl
            mx-auto
            text-center
          ">

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
                                Start Queue Transformation
                            </p>

                        </div>

                        {/* Heading */}
                        <h2 className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-[1.08]
              text-slate-900
            ">
                            Ready To Eliminate

                            <br />

                            <span className="
                bg-gradient-to-r
                from-amber-500
                to-orange-500
                bg-clip-text
                text-transparent
              ">
                                Long Waiting Lines?
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
                            Join hospitals, banks, clinics, and public service
                            organizations already using Saral to create
                            smoother and smarter queue experiences.
                        </p>

                        {/* Features */}
                        <div className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            ">

                            {[
                                "Real-Time Queue Tracking",
                                "Instant Notifications",
                                "Smart Token Management",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    flex
                    items-center
                    gap-2
                    text-slate-700
                  "
                                >

                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-500"
                                    />

                                    <span className="
                      text-sm
                      sm:text-base
                      font-medium
                    ">
                                        {item}
                                    </span>

                                </div>
                            ))}

                        </div>

                        {/* Buttons */}
                        <div className="
              mt-14
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            ">

                            {/* Primary */}
                            <button
                                onClick={() => navigate("/user/login")}
                                className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-2xl
                  bg-slate-900
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-black
                "
                            >

                                <span className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                ">
                                    Get Started

                                    <ArrowUpRight
                                        size={18}
                                        className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-[2px]
                      group-hover:translate-x-[2px]
                    "
                                    />
                                </span>

                                {/* Shine */}
                                <div className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  group-hover:translate-x-[120%]
                  transition-transform
                  duration-1000
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                " />

                            </button>

                            {/* Secondary */}
                            <button
                                className="
                  group
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/90
                  text-slate-700
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-slate-900
                  hover:text-white
                "
                            >

                                <span className="
                  flex
                  items-center
                  gap-3
                ">
                                    Book Demo

                                    <ArrowUpRight
                                        size={18}
                                        className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-[2px]
                      group-hover:translate-x-[2px]
                    "
                                    />
                                </span>

                            </button>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default CTASection;