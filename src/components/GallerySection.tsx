import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Camera, ScanLine } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    title: "TECHNICAL SESSION",
    category: "LEARNING",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "TEAM ITESA",
    category: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
  {
    id: 3,
    title: "TECH FEST",
    category: "EVENT",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
  {
    id: 4,
    title: "WORKSHOP",
    category: "DEVELOPMENT",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    size: "medium",
  },
  {
    id: 5,
    title: "COMPETITION",
    category: "COMPETITIVE",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    size: "medium",
  },
  {
    id: 6,
    title: "ITESA MOMENTS",
    category: "MEMORIES",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    size: "medium",
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* Header animation */

      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* Gallery animation */

      if (galleryRef.current) {
        gsap.from(galleryRef.current.children, {
          opacity: 0,
          y: 70,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* Footer animation */

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
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
        bg-[#030508]
        px-4
        py-24
        sm:px-6
        lg:px-8
      "
    >
      {/* Background atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.06),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.04),transparent_30%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================
            HEADER
            ========================================= */}

        <div
          ref={headerRef}
          className="
            mb-14
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-3
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-cyan-400/60
                sm:text-xs
              "
            >
              <Camera className="h-4 w-4" />

              VISUAL_ARCHIVE
            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              ITESA{" "}
              <span className="text-cyan-400">
                Moments
              </span>
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
              A visual archive of the people, events and
              experiences that make ITESA more than just a
              student association.
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
            ARCHIVE_STATUS
            <br />

            <span className="text-emerald-400/60">
              ● ONLINE
            </span>
          </div>
        </div>

        {/* =========================================
            GALLERY GRID
            ========================================= */}

        <div
          ref={galleryRef}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:auto-rows-[180px]
          "
        >
          {galleryItems.map((item) => {
            const isLarge = item.size === "large";
            const isSmall = item.size === "small";

            return (
              <article
                key={item.id}
                className={`
                  gallery-item
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#080b10]
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${isSmall ? "lg:col-span-1 lg:row-span-1" : ""}
                  ${!isLarge && !isSmall ? "lg:col-span-2 lg:row-span-2" : ""}
                `}
              >
                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                    opacity-80
                    transition-opacity
                    duration-500
                    group-hover:opacity-95
                  "
                />

                {/* Cyan hover tint */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-cyan-400/[0.03]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Scan line */}

                <div
                  className="
                    gallery-scan-line
                    absolute
                    left-0
                    right-0
                    h-px
                    bg-cyan-400/70
                    opacity-0
                    shadow-[0_0_15px_rgba(34,211,238,0.8)]
                    group-hover:opacity-100
                  "
                />

                {/* Top metadata */}

                <div
                  className="
                    absolute
                    left-4
                    right-4
                    top-4
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      rounded
                      border
                      border-white/10
                      bg-black/40
                      px-2
                      py-1
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-wider
                      text-white/50
                      backdrop-blur-md
                    "
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>

                  <ScanLine
                    className="
                      h-4
                      w-4
                      text-white/30
                      transition-colors
                      duration-300
                      group-hover:text-cyan-400
                    "
                  />
                </div>

                {/* Bottom content */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                  "
                >
                  <div
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-cyan-400/60
                    "
                  >
                    // {item.category}
                  </div>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-bold
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        shrink-0
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-cyan-400
                      "
                    />
                  </div>
                </div>

                {/* Corner decoration */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-10
                    w-10
                    border-r
                    border-t
                    border-white/10
                    transition-colors
                    duration-300
                    group-hover:border-cyan-400/40
                  "
                />

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
                    duration-300
                    group-hover:border-cyan-400/30
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =========================================
            FOOTER / CTA
            ========================================= */}

        <div
          ref={footerRef}
          className="
            mt-8
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-y
            border-white/[0.06]
            py-5
            sm:flex-row
            sm:items-center
          "
        >
          <div
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-wider
              text-white/20
              sm:text-[10px]
            "
          >
            ARCHIVE_INDEX // 0001—0006
          </div>

          <button
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-md
              border
              border-cyan-400/20
              bg-cyan-400/[0.03]
              px-5
              py-3
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/[0.07]
              hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]
            "
          >
            View Full Gallery

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;