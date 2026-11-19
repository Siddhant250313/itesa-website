import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Calendar,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CyberCard from "@/components/CyberCard";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  event_date: string;
  location?: string;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "Date TBD";

  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (dateString: string) => {
  if (!dateString) return "Time TBD";

  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const EventsPreview = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  /* =========================================
     FETCH EVENTS
     ========================================= */

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("status", "upcoming")
          .order("event_date", { ascending: true })
          .limit(3);

        if (error) throw error;

        setEvents(data || []);
      } catch (err: any) {
        console.error("Error fetching events:", err);
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  /* =========================================
     SCROLL ANIMATIONS
     ========================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
         toggleActions: "play none none none",
         once: true,
        },
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 80,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);
    requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});

    return () => {
      ctx.revert();
    };
  }, [loading, events]);

  /* =========================================
     LOADING CARD
     ========================================= */

  const SkeletonCard = () => (
    <div
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#080b10]/80
        backdrop-blur-md
      "
    >
      <div className="relative aspect-[16/10] bg-white/[0.03] overflow-hidden">
        <div className="absolute inset-0 cyber-loading-shimmer" />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
          <div className="h-3 w-3 rounded-full bg-cyan-400/30 animate-pulse" />
        </div>

        <div className="h-6 w-3/4 rounded bg-white/10 animate-pulse" />

        <div className="space-y-2 mt-4">
          <div className="h-3 w-full rounded bg-white/[0.07] animate-pulse" />
          <div className="h-3 w-5/6 rounded bg-white/[0.07] animate-pulse" />
        </div>

        <div className="mt-6 space-y-3">
          <div className="h-3 w-2/3 rounded bg-white/[0.06] animate-pulse" />
          <div className="h-3 w-1/2 rounded bg-white/[0.06] animate-pulse" />
        </div>

        <div className="mt-6 h-3 w-28 rounded bg-white/[0.06] animate-pulse" />
      </div>
    </div>
  );

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
      {/* Background atmosphere */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.06),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.04),transparent_30%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-px
          h-full
          bg-gradient-to-b
          from-cyan-400/20
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* =========================================
            SECTION HEADER
            ========================================= */}

        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              mb-6
              font-mono
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-cyan-400/70
            "
          >
            <span className="h-px w-8 bg-cyan-400/30" />

            <span>EVENT_PROTOCOL</span>

            <span className="h-px w-8 bg-cyan-400/30" />
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-white
            "
          >
            Upcoming{" "}
            <span className="text-cyan-400">
              Events
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              leading-relaxed
              text-white/45
            "
          >
            Workshops, competitions, technical sessions and
            experiences engineered by ITESA.
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-3
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-white/25
            "
          >
            <span className="text-emerald-400">
              ●
            </span>

            SYSTEM_READY

            <span className="text-white/10">
              //
            </span>

            EVENT_STREAM_ACTIVE
          </div>
        </div>

        {/* =========================================
            EVENTS
            ========================================= */}

        <div
          ref={cardsRef}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-7
            mb-14
          "
        >
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : error || events.length === 0 ? (

            /* =====================================
               EMPTY STATE
               ===================================== */

            <div className="col-span-full py-16">
              <div
                className="
                  max-w-2xl
                  mx-auto
                  text-center
                  rounded-xl
                  border
                  border-white/10
                  bg-[#080b10]/70
                  backdrop-blur-md
                  p-10
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    mb-6
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/5
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Calendar className="w-7 h-7 text-cyan-400" />
                </div>

                <div
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-400/60
                    mb-3
                  "
                >
                  EVENT_DATABASE
                </div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                  "
                >
                  Events Coming Soon
                </h3>

                <p
                  className="
                    mt-4
                    text-base
                    leading-relaxed
                    text-white/40
                  "
                >
                  Something exciting is being prepared.
                  Stay connected for upcoming ITESA events,
                  workshops and competitions.
                </p>

                <div
                  className="
                    mt-6
                    font-mono
                    text-[10px]
                    text-emerald-400/60
                    tracking-wider
                  "
                >
                  STATUS: WAITING_FOR_EVENT_DATA...
                </div>
              </div>
            </div>

          ) : (

            /* =====================================
               ACTUAL EVENTS
               ===================================== */

            events.map((event, index) => (
              <CyberCard
                key={event.id}
                label={`EVENT_${String(index + 1).padStart(2, "0")}`}
                title={event.title}
                description={event.description}
                image={
                  event.image_url || "/placeholder-image.jpg"
                }
                status="UPCOMING"
                href="/events"
              >
                <div className="space-y-3">

                  {/* Date */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      font-mono
                      text-xs
                      text-white/40
                    "
                  >
                    <Calendar
                      className="w-4 h-4 text-cyan-400"
                    />

                    <span>
                      {formatDate(event.event_date)}
                    </span>
                  </div>

                  {/* Time */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      font-mono
                      text-xs
                      text-white/40
                    "
                  >
                    <Clock
                      className="w-4 h-4 text-cyan-400"
                    />

                    <span>
                      {formatTime(event.event_date)}
                    </span>
                  </div>

                  {/* Location */}

                  {event.location && (
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        font-mono
                        text-xs
                        text-white/40
                      "
                    >
                      <MapPin
                        className="w-4 h-4 text-emerald-400"
                      />

                      <span>
                        {event.location}
                      </span>
                    </div>
                  )}

                  <div
                    className="
                      pt-3
                      border-t
                      border-white/[0.06]
                      flex
                      items-center
                      justify-between
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-wider
                    "
                  >
                    <span className="text-white/25">
                      ACCESS_EVENT
                    </span>

                    <ArrowRight
                      className="
                        w-4
                        h-4
                        text-cyan-400
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                </div>
              </CyberCard>
            ))
          )}
        </div>

        {/* =========================================
            VIEW ALL EVENTS
            ========================================= */}

        <div
          ref={buttonRef}
          className="flex justify-center"
        >
          <Link to="/events">
            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                h-12
                px-7
                rounded-md
                border
                border-cyan-400/25
                bg-cyan-400/[0.04]
                text-cyan-300
                font-mono
                text-xs
                uppercase
                tracking-wider
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-400/[0.08]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              View All Events

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EventsPreview;