import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CyberBackground from "@/components/CyberBackground";
import ThreeDTest from "@/components/3d/ThreeDTest";
import NexScene from "./3d/NexScene";
import NexVoice from "@/components/NexVoice";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Nex dialogue state
  const [showNexDialogue, setShowNexDialogue] = useState(false);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro.from(statusRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      });

      intro.from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.9,
        },
        "-=0.3"
      );

      intro.from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.7,
        },
        "-=0.3"
      );

      intro.from(
        statsRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );

      gsap.to(content, {
        y: -180,
        opacity: 0,
        scale: 0.96,
        ease: "none",

        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#030508]
      "
    >
      {/* =====================================================
          CYBER BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <CyberBackground />
      </div>

      {/* =====================================================
          3D SPHERE
      ====================================================== */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <ThreeDTest />
      </div>

      {/* =====================================================
          STATIC NEX
          LEFT BOTTOM
      ====================================================== */}
      <div
  onClick={() => setShowNexDialogue((prev) => !prev)}
  className="
    absolute
    left-2
    bottom-2
    z-[50]

    w-[105px]
    h-[105px]

    sm:left-8
    sm:bottom-6
    sm:w-[220px]
    sm:h-[220px]

    cursor-pointer
  "
  title="Talk to Nex"
>
  <NexScene />
</div>

      {/* =====================================================
          NEX DIALOGUE
      ====================================================== */}
      {showNexDialogue && (
        <div
          className="
            absolute

            left-[95px]
            bottom-[95px]

            sm:left-[190px]
            sm:bottom-[175px]

            z-[60]

            pointer-events-none

            animate-in
            fade-in
            slide-in-from-left-2
            duration-300
          "
        >
          <div
            className="
              relative

              w-[190px]
              sm:w-[220px]

              rounded-xl

              border
              border-cyan-400/30

              bg-black/80

              backdrop-blur-md

              px-4
              py-3

              shadow-[0_0_25px_rgba(34,211,238,0.18)]
            "
          >
            {/* ONLINE INDICATOR */}
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-cyan-400

                  shadow-[0_0_8px_#22d3ee]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.2em]
                  text-cyan-300
                  uppercase
                "
              >
                NEX • ONLINE
              </span>
            </div>

            {/* MESSAGE */}
            <p
              className="
                font-mono
                text-[11px]
                sm:text-xs
                leading-relaxed
                text-white/90
              "
            >
              Hey, I am Nex 👋
              <br />

              <span className="text-cyan-300">
                Welcome to ITESA!
              </span>
            </p>

            {/* SPEECH BUBBLE TAIL */}
            <div
              className="
                absolute
                -bottom-2
                left-7

                w-4
                h-4

                rotate-45

                bg-black/80

                border-r
                border-b
                border-cyan-400/30
              "
            />
          </div>
        </div>
      )}

      {/* =====================================================
          NEX VOICE
      ====================================================== */}
      <NexVoice />

      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}
      <div
        ref={contentRef}
        className="
          relative
          z-40

          w-full
          max-w-6xl

          mx-auto

          px-6
          sm:px-8
          lg:px-12

          pt-28
          pb-20
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          {/* =================================================
              STATUS
          ================================================= */}
          <div
            ref={statusRef}
            className="
              inline-flex
              items-center
              gap-3

              px-4
              py-2

              mb-8

              rounded-full

              border
              border-cyan-400/20

              bg-black/30

              backdrop-blur-md

              font-mono
              text-xs
              sm:text-sm

              text-cyan-300
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-cyan-400
                  opacity-75
                  animate-ping
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                "
              />
            </span>

            <span>SYSTEM INITIALIZED</span>

            <span className="text-white/30">
              |
            </span>

            <span className="text-emerald-400">
              ONLINE
            </span>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}
          <div
            ref={titleRef}
            className="relative z-50"
          >
            {/* ITESA */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl

                font-black

                tracking-tight
                leading-none
              "
            >
              <span
                className="
                  text-white

                  drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]
                "
              >
                ITESA
              </span>
            </h1>

            {/* =================================================
                FULL FORM
            ================================================= */}
            <div
              className="
                mt-4

                inline-flex
                items-center
                justify-center

                max-w-full

                px-5
                py-2

                rounded-md

                border
                border-cyan-400/30

                bg-cyan-400/[0.06]

                backdrop-blur-sm

                shadow-[0_0_25px_rgba(34,211,238,0.10)]
              "
            >
              <span
                className="
                  font-mono

                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  lg:text-base

                  font-semibold

                  tracking-[0.10em]

                  uppercase

                  text-cyan-300

                  drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]
                "
              >
                Information Technology Student Association
              </span>
            </div>

            {/* =================================================
                AI × CYBERSECURITY
            ================================================= */}
            <div
              className="
                mt-5

                flex
                items-center
                justify-center

                gap-4
              "
            >
              <span
                className="
                  font-mono

                  text-sm
                  sm:text-base
                  md:text-lg

                  font-bold

                  tracking-[0.25em]

                  uppercase

                  text-cyan-300

                  drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]
                "
              >
                AI
              </span>

              <span
                className="
                  text-lg
                  md:text-xl

                  font-light

                  text-white/50
                "
              >
                ×
              </span>

              <span
                className="
                  font-mono

                  text-sm
                  sm:text-base
                  md:text-lg

                  font-bold

                  tracking-[0.20em]

                  uppercase

                  text-emerald-300

                  drop-shadow-[0_0_12px_rgba(52,211,153,0.55)]
                "
              >
                Cybersecurity
              </span>
            </div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}
          <div
            ref={buttonsRef}
            className="
              relative
              z-50

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-4

              mt-10
            "
          >
            {/* ENTER ITESA */}
            <Link to="/events">
              <Button
                size="lg"
                className="
                  group

                  h-12
                  px-7

                  rounded-md

                  bg-cyan-400
                  text-black

                  font-semibold

                  hover:bg-cyan-300

                  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]

                  transition-all
                  duration-300
                "
              >
                ENTER ITESA

                <ArrowRight
                  className="
                    ml-2
                    h-5
                    w-5

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </Button>
            </Link>

            {/* EXPLORE EVENTS */}
            <Link to="/events">
              <Button
                variant="outline"
                size="lg"
                className="
                  h-12
                  px-7

                  rounded-md

                  border-white/15

                  bg-white/[0.03]

                  text-white/80

                  backdrop-blur-sm

                  hover:border-cyan-400/40

                  hover:bg-cyan-400/5

                  hover:text-cyan-300

                  transition-all
                  duration-300
                "
              >
                EXPLORE EVENTS
              </Button>
            </Link>
          </div>

          {/* =================================================
              STATS
          ================================================= */}
          <div
            ref={statsRef}
            className="
              relative
              z-50

              grid
              grid-cols-3

              max-w-2xl

              mx-auto

              mt-14

              border-y
              border-white/10
            "
          >
            {/* MEMBERS */}
            <div
              className="
                py-5

                border-r
                border-white/10
              "
            >
              <div
                className="
                  font-mono

                  text-xl
                  sm:text-2xl

                  font-bold

                  text-cyan-300
                "
              >
                100+
              </div>

              <div
                className="
                  mt-1

                  text-[10px]
                  sm:text-xs

                  uppercase

                  tracking-wider

                  text-white/35
                "
              >
                Members
              </div>
            </div>

            {/* EVENTS */}
            <div
              className="
                py-5

                border-r
                border-white/10
              "
            >
              <div
                className="
                  font-mono

                  text-xl
                  sm:text-2xl

                  font-bold

                  text-cyan-300
                "
              >
                50+
              </div>

              <div
                className="
                  mt-1

                  text-[10px]
                  sm:text-xs

                  uppercase

                  tracking-wider

                  text-white/35
                "
              >
                Events
              </div>
            </div>

            {/* YEARS */}
            <div className="py-5">
              <div
                className="
                  font-mono

                  text-xl
                  sm:text-2xl

                  font-bold

                  text-emerald-400
                "
              >
                10+
              </div>

              <div
                className="
                  mt-1

                  text-[10px]
                  sm:text-xs

                  uppercase

                  tracking-wider

                  text-white/35
                "
              >
                Years
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER STATUS
          ================================================= */}
          <div
            className="
              relative
              z-50

              mt-7

              font-mono

              text-[10px]
              sm:text-xs

              text-white/20

              tracking-wider
            "
          >
            CONNECTION_SECURE // ITESA_CORE // 0x7F
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-32

          bg-gradient-to-t
          from-[#030508]
          to-transparent

          z-[60]

          pointer-events-none
        "
      />

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <div
        className="
          absolute

          bottom-7
          left-1/2

          -translate-x-1/2

          z-[70]

          hidden
          sm:flex

          flex-col
          items-center

          gap-2

          text-[9px]

          font-mono

          tracking-[0.3em]

          text-white/25
        "
      >
        <span>SCROLL</span>

        <div
          className="
            w-px
            h-8

            bg-gradient-to-b
            from-cyan-400/60
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default HeroSection;