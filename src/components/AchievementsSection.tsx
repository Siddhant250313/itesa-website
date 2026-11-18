import { useLayoutEffect, useRef } from "react";
import {
  Trophy,
  Table2,
  Medal,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    category: "TABLE_TENNIS",
    icon: Table2,
    value: "03",
    title: "Championship Titles",
    description:
      "Consistent performance and competitive excellence across inter-college tournaments.",
    year: "2025",
  },
  {
    category: "GENERAL_CHAMPIONSHIP",
    icon: Trophy,
    value: "02",
    title: "GC Podium Finishes",
    description:
      "ITESA representing the department across multiple General Championship events.",
    year: "2025",
  },
  {
    category: "COMPETITIVE_PERFORMANCE",
    icon: Medal,
    value: "10+",
    title: "Recognitions",
    description:
      "Awards, positions and achievements earned through technical and extracurricular activities.",
    year: "2024-25",
  },
  {
    category: "TEAM_EXCELLENCE",
    icon: ShieldCheck,
    value: "05+",
    title: "Team Achievements",
    description:
      "Collective achievements through collaboration, participation and leadership.",
    year: "2024-25",
  },
];

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Statistics panel animation
      if (statsRef.current) {
        gsap.from(statsRef.current, {
          opacity: 0,
          x: -60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Achievement cards animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 50,
          scale: 0.96,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Progress bar animation
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          {
            width: "0%",
          },
          {
            width: "87%",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: progressRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Bottom status animation
      if (statusRef.current) {
        gsap.from(statusRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statusRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-24
        px-4
        sm:px-6
        lg:px-8
        bg-[#030508]
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_45%,rgba(34,211,238,0.06),transparent_28%),radial-gradient(circle_at_85%_50%,rgba(16,185,129,0.05),transparent_28%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div ref={headerRef} className="mb-14">
          <div
            className="
              flex
              items-center
              gap-3
              font-mono
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-cyan-400/60
            "
          >
            <span className="h-px w-8 bg-cyan-400/30" />
            PERFORMANCE_MODULE
          </div>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Beyond the{" "}
                <span className="text-cyan-400">Classroom</span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-white/40
                  sm:text-lg
                "
              >
                Performance isn't limited to code. ITESA members
                compete, collaborate and represent the department
                across the campus.
              </p>
            </div>

            <div
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                text-white/25
                md:text-right
              "
            >
              ACHIEVEMENT_DATABASE
              <br />
              <span className="text-emerald-400/60">
                ACCESS_GRANTED
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[0.75fr_1.25fr]
          "
        >

          {/* STATS PANEL */}
          <div
            ref={statsRef}
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#080b10]/80
              p-7
              backdrop-blur-md
              sm:p-8
            "
          >
            {/* Corner decorations */}
            <div
              className="
                absolute
                right-0
                top-0
                h-24
                w-24
                border-r
                border-t
                border-cyan-400/30
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                h-16
                w-16
                border-b
                border-l
                border-cyan-400/20
              "
            />

            {/* Panel header */}
            <div
              className="
                flex
                items-center
                justify-between
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              <span>// ITESA_STATS</span>

              <ShieldCheck className="h-4 w-4 text-emerald-400/70" />
            </div>

            {/* Main statistic */}
            <div className="mt-12">
              <div
                className="
                  font-mono
                  text-7xl
                  font-black
                  leading-none
                  tracking-tight
                  text-cyan-400
                  sm:text-8xl
                "
              >
                15+
              </div>

              <div className="mt-4 text-xl font-semibold text-white">
                Recorded Achievements
              </div>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-white/35
                "
              >
                Placeholder statistics representing ITESA's
                competitive and extracurricular performance.
              </p>
            </div>

            {/* Performance index */}
            <div className="mt-12">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-white/30
                "
              >
                <span>PERFORMANCE_INDEX</span>

                <span className="text-cyan-400">
                  87%
                </span>
              </div>

              <div
                className="
                  mt-3
                  h-1
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-white/[0.06]
                "
              >
                <div
                  ref={progressRef}
                  className="
                    h-full
                    w-0
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_rgba(34,211,238,0.6)]
                  "
                />
              </div>
            </div>

            {/* Status */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                text-emerald-400/60
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              SYSTEM_STATUS: TOP_PERFORMER
            </div>
          </div>

          {/* ACHIEVEMENT CARDS */}
          <div
            ref={cardsRef}
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >
            {achievements.map((achievement) => {
              const Icon = achievement.icon;

              return (
                <article
                  key={achievement.category}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#080b10]/80
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                    hover:shadow-[0_15px_45px_rgba(34,211,238,0.08)]
                  "
                >
                  {/* Top-right corner */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-12
                      w-12
                      border-r
                      border-t
                      border-white/5
                      transition-colors
                      group-hover:border-cyan-400/30
                    "
                  />

                  {/* Icon + year */}
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-cyan-400/15
                        bg-cyan-400/5
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          text-cyan-400
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    <span
                      className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-white/20
                      "
                    >
                      {achievement.year}
                    </span>
                  </div>

                  {/* Category */}
                  <div
                    className="
                      mt-7
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-cyan-400/50
                    "
                  >
                    // {achievement.category}
                  </div>

                  {/* Value */}
                  <div
                    className="
                      mt-3
                      font-mono
                      text-4xl
                      font-black
                      text-white
                    "
                  >
                    {achievement.value}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-2
                      text-lg
                      font-bold
                      text-white
                      transition-colors
                      group-hover:text-cyan-300
                    "
                  >
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-white/35
                    "
                  >
                    {achievement.description}
                  </p>

                  {/* Footer */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-wider
                        text-emerald-400/50
                      "
                    >
                      VERIFIED_RECORD
                    </span>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-cyan-400
                      "
                    />
                  </div>

                  {/* Bottom-left corner */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-8
                      w-8
                      border-b
                      border-l
                      border-white/5
                      transition-colors
                      group-hover:border-cyan-400/30
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATUS BAR */}
        <div
          ref={statusRef}
          className="
            mt-8
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-y
            border-white/[0.06]
            py-4
            font-mono
            text-[9px]
            uppercase
            tracking-wider
            text-white/20
            sm:flex-row
            sm:items-center
            sm:text-[10px]
          "
        >
          <span>
            DATA_SOURCE // ITESA_ACHIEVEMENT_ARCHIVE
          </span>

          <span className="text-emerald-400/50">
            ● ALL_SYSTEMS_OPERATIONAL
          </span>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;