import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const person1 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990308/one_ayp7v1.webp";

const person2 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990311/two_kuf9ox.webp";

const person3 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990310/three_b2zudg.webp";

const person4 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990307/four_z3sygk.webp";

const person5 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990307/five_p5zke6.webp";

const person6 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990308/six_sizwof.webp";

const person7 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990308/seven_ncltei.webp";

const person8 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990316/eight_gl1rv4.webp";

const person9 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990312/nine_gklf72.webp";

const person10 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990318/ten_pcolr7.webp";

const person11 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990314/eleven_lcivmz.webp";

const person12 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990317/twelve_jixhrn.webp";

const person13 =
  "https://res.cloudinary.com/dfyn2ilwv/image/upload/v1778990309/thirteen_dhxnzf.webp";

const testimonials = [
  {
    name: "Aarav Sharma",
    image: person1,
  },

  {
    name: "Priya Mehta",
    image: person2,
  },

  {
    name: "Rohan Verma",
    image: person3,
  },

  {
    name: "Neha Kapoor",
    image: person4,
  },

  {
    name: "Aditya Singh",
    image: person5,
  },

  {
    name: "Karan Gupta",
    image: person6,
  },

  {
    name: "Ananya Rao",
    image: person7,
  },

  {
    name: "Rahul Jain",
    image: person8,
  },

  {
    name: "Sneha Patel",
    image: person9,
  },

  {
    name: "Vivek Nair",
    image: person10,
  },

  {
    name: "Meera Joshi",
    image: person11,
  },

  {
    name: "Arjun Malhotra",
    image: person12,
  },
];

const successStories = [
  {
    name: "Aarav Sharma",
    image: person1,
    issue: "Long hospital waiting lines",
    solution:
      "Saral helped me track my queue live and reduced unnecessary waiting completely.",
  },

  {
    name: "Priya Mehta",
    image: person2,
    issue: "Bank crowd and token confusion",
    solution:
      "The live token updates made the whole banking experience smooth and stress-free.",
  },

  {
    name: "Rohan Verma",
    image: person3,
    issue: "Manual queue handling",
    solution:
      "Managing visitors became organized and efficient with Saral's dashboard system.",
  },

  {
    name: "Neha Kapoor",
    image: person4,
    issue: "Wasting hours in queues",
    solution:
      "I now arrive exactly when my token approaches instead of waiting physically.",
  },

  {
    name: "Aditya Singh",
    image: person5,
    issue: "Crowd management issues",
    solution:
      "Queue discipline improved massively after implementing Saral in our office.",
  },

  {
    name: "Ananya Rao",
    image: person7,
    issue: "Patient frustration in clinics",
    solution:
      "Patients remain calmer because they can monitor live queue activity remotely.",
  },
];

const testimonialImageBlocks = [
  { index: 1, class: "left-[5%] bottom-[0px] rotate-[-10deg] z-10" },
  { index: 2, class: "left-[15%] bottom-[60px] rotate-[-5deg] z-10" },
  { index: 3, class: "right-[15%] bottom-[60px] rotate-[5deg] z-10" },
  { index: 5, class: "right-[5%] bottom-[0px] rotate-[10deg] z-10" },

  { index: 0, class: "left-[5%] bottom-[120px] rotate-[-8deg] z-30" },
  { index: 4, class: "right-[5%] bottom-[120px] rotate-[8deg] z-30" },

  { index: 6, class: "left-[15%] bottom-[180px] rotate-[-5deg] z-30" },
  { index: 7, class: "right-[15%] bottom-[180px] rotate-[5deg] z-30" },

  { index: 8, class: "left-[25%] bottom-[130px] rotate-[-2deg] z-30" },
  { index: 10, class: "left-[35%] bottom-[180px] rotate-[0deg] z-30" },

  { index: 11, class: "left-[56%] bottom-[180px] rotate-[0deg] z-30" },
  { index: 9, class: "right-[25%] bottom-[130px] rotate-[2deg] z-30" },
];

const TestimonialsSection = () => {
  const [showStories, setShowStories] = useState(false);

  return (
    <section
      id="testimonials"
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

      <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center px-5 lg:px-8">

        {/* Heading */}
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
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
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
              Trusted Experiences
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
            Trusted By People

            <br />

            <span className="
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              Waiting Less. Living More.
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
            From hospitals to banks and public offices,
            Saral is transforming queue experiences
            through live tracking and smarter digital flow.
          </p>

        </motion.div>

        {/* Desktop Layout */}
        <div className="relative w-full h-[320px] mb-10 hidden sm:block mt-20">

          {testimonialImageBlocks.map(({ index, class: customClass }, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
              }}
              className={clsx(
                `
                  absolute
                  w-24
                  h-28
                  lg:w-28
                  lg:h-32
                  rounded-[22px]
                  overflow-hidden
                  shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                  border
                  border-white/80
                  bg-white
                `,
                customClass
              )}
            >

              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </motion.div>
          ))}

        </div>

        {/* Mobile Circle Layout */}
        <div className="
          relative
          sm:hidden
          w-[360px]
          h-[360px]
          rounded-full
          mx-auto
          mb-10
          mt-14
        ">

          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
          >

            {testimonials.map((testimonial, i) => {
              const angle =
                (i / testimonials.length) * 2 * Math.PI;

              const radius = 145;
              const center = 180;
              const size = 68;

              const x =
                Math.cos(angle) * radius +
                center -
                size / 2;

              const y =
                Math.sin(angle) * radius +
                center -
                size / 2;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="
                    absolute
                    w-16
                    h-16
                    rounded-full
                    overflow-hidden
                    shadow-md
                    border-2
                    border-white
                    bg-white
                  "
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                  }}
                >

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 60,
                      ease: "linear",
                    }}
                    className="w-full h-full"
                  >

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </motion.div>

                </motion.div>
              );
            })}

          </motion.div>

          {/* Center */}
          <div className="
            absolute
            top-1/2
            left-1/2
            w-[220px]
            transform
            -translate-x-1/2
            -translate-y-1/2
            text-center
            z-10
          ">

            <span className="
              text-xs
              uppercase
              text-gray-500
              tracking-wider
            ">
              Testimonials
            </span>

            <h2 className="
              text-base
              font-bold
              text-gray-900
              mt-1
              leading-tight
            ">
              Trusted by users
              <br />
              across India
            </h2>

            <button
              onClick={() => setShowStories(true)}
              className="
                mt-4
                px-4
                py-2
                bg-black
                text-white
                text-xs
                font-medium
                rounded-full
                hover:bg-gray-900
                transition
                inline-flex
                items-center
                gap-2
                group
              "
            >

              Read Stories

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />

            </button>

          </div>

        </div>

        {/* Desktop Text */}
        <div className="
          z-10
          text-center
          px-4
          mt-[-100px]
          hidden
          sm:block
        ">

          <span className="
            text-xs
            uppercase
            text-gray-500
            tracking-wider
          ">
            Testimonials
          </span>

          <h2 className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-gray-900
            mt-2
          ">
            Thousands trust Saral
            <br />
            for smarter queue experiences
          </h2>

          <p className="
            mt-4
            text-gray-600
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
            leading-7
          ">
            Learn why users and organizations
            rely on Saral to reduce waiting time,
            improve queue management,
            and create stress-free service experiences.
          </p>

          <button
            onClick={() => setShowStories(true)}
            className="
              group
              mt-7
              bg-black
              text-white
              px-7
              py-3
              rounded-full
              hover:bg-gray-900
              transition
              inline-flex
              items-center
              gap-2
            "
          >

            Read Success Stories

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />

          </button>

        </div>

        {/* Scroll Stories */}
        {showStories && (
          <div className="mt-16 overflow-hidden w-full">

            <motion.div
              className="
                flex
                gap-6
                w-fit
                px-6
                py-4
              "
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
            >

              {[...successStories, ...successStories].map(
                (story, idx) => (
                  <div
                    key={idx}
                    className="
                      min-w-[350px]
                      max-w-[350px]
                      rounded-[30px]
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-white/80
                      p-6
                      shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                    "
                  >

                    <div className="
                      w-16
                      h-16
                      mx-auto
                      rounded-2xl
                      overflow-hidden
                      mb-4
                    ">

                      <img
                        src={story.image}
                        alt={story.name}
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />

                    </div>

                    <h3 className="
                      text-xl
                      font-semibold
                      text-center
                      text-slate-900
                    ">
                      {story.name}
                    </h3>

                    <p className="
                      mt-2
                      text-sm
                      italic
                      text-center
                      text-slate-500
                    ">
                      "{story.issue}"
                    </p>

                    <p className="
                      text-sm
                      mt-4
                      text-center
                      text-slate-600
                      leading-7
                    ">
                      {story.solution}
                    </p>

                  </div>
                )
              )}

            </motion.div>

          </div>
        )}

      </div>

    </section>
  );
};

export default TestimonialsSection;