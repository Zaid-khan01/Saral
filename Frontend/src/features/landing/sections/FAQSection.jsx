import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Plus,
    Minus,
    Sparkles,
    HelpCircle,
} from "lucide-react";

const faqs = [
    {
        question: "Do users need to install an app to join a queue?",
        answer:
            "No. Users can instantly join queues using QR codes or direct links without installing any application.",
    },

    {
        question: "Can organizations manage multiple branches?",
        answer:
            "Yes. Saral supports multi-branch queue management with centralized analytics and real-time monitoring.",
    },

    {
        question: "Is queue tracking updated live?",
        answer:
            "Absolutely. Queue movement, token positions, and waiting times synchronize instantly in real-time.",
    },

    {
        question: "Does Saral support hospitals and government offices?",
        answer:
            "Yes. Saral is designed for hospitals, clinics, banks, ration shops, and public service organizations.",
    },

    {
        question: "How are users notified about their token?",
        answer:
            "Users receive smart notifications and live updates when their turn is approaching.",
    },

    {
        question: "Can staff manually control queue flow?",
        answer:
            "Yes. Staff and admins can pause, skip, call, or manage tokens directly from the dashboard.",
    },
];

const FAQSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section
            id="faq"
            className="
        relative
        py-20
        overflow-hidden
      "
        >

            {/* Glow */}
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

            <div className="max-w-5xl mx-auto px-5 lg:px-8">

                {/* Top */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="
            text-center
            max-w-3xl
            mx-auto
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
                            Frequently Asked Questions
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
                        Questions About

                        <br />

                        <span className="
                bg-gradient-to-r
                from-amber-500
                to-orange-500
                bg-clip-text
                text-transparent
              ">
                            Saral Platform.
                        </span>

                    </h2>

                    {/* Desc */}
                    <p className="
              mt-8
              text-lg
              leading-8
              text-slate-600
            ">
                        Everything you need to know about
                        smart queue management and how Saral works.
                    </p>

                </motion.div>

                {/* FAQ Cards */}
                <div className="mt-20 space-y-5">

                    {faqs.map((faq, index) => {
                        const isActive = active === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/70
                  bg-white/80
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(15,23,42,0.05)]
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
                    from-amber-50/50
                    via-transparent
                    to-orange-50/50
                  " />

                                <button
                                    onClick={() =>
                                        setActive(isActive ? null : index)
                                    }
                                    className="
                    relative
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    text-left
                    px-7
                    py-7
                  "
                                >

                                    {/* Left */}
                                    <div className="
                      flex
                      items-start
                      gap-5
                    ">

                                        {/* Icon */}
                                        <div className="
                        min-w-[52px]
                        h-[52px]
                        rounded-2xl
                        bg-amber-50
                        flex
                        items-center
                        justify-center
                      ">

                                            <HelpCircle
                                                size={22}
                                                className="text-amber-600"
                                            />

                                        </div>

                                        {/* Text */}
                                        <div>

                                            <h3 className="
                          text-xl
                          sm:text-2xl
                          font-semibold
                          tracking-tight
                          text-slate-900
                          leading-tight
                        ">
                                                {faq.question}
                                            </h3>

                                        </div>

                                    </div>

                                    {/* Toggle */}
                                    <div className={`
                      min-w-[52px]
                      h-[52px]
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${isActive
                                            ? "bg-slate-900 text-white"
                                            : "bg-white border border-slate-200 text-slate-700"
                                        }
                    `}>

                                        {isActive ? (
                                            <Minus size={20} />
                                        ) : (
                                            <Plus size={20} />
                                        )}

                                    </div>

                                </button>

                                {/* Answer */}
                                <AnimatePresence>

                                    {isActive && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="
                        px-7
                        pb-8
                        pl-[92px]
                      ">

                                                {/* Animated line */}
                                                <motion.div
                                                    initial={{
                                                        width: 0,
                                                    }}
                                                    animate={{
                                                        width: "100%",
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                    }}
                                                    className="
                            h-[1px]
                            bg-gradient-to-r
                            from-amber-300
                            via-orange-300
                            to-transparent
                            mb-6
                          "
                                                />

                                                <p className="
                          text-slate-600
                          leading-8
                          text-lg
                          max-w-3xl
                        ">
                                                    {faq.answer}
                                                </p>

                                            </div>

                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;