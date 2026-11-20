import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";
import { Users } from "lucide-react";

/* =========================================================
   ITESA TEAM
   2026–27
   ========================================================= */

const team = [
  /* ========================================================
     01 — PRESIDENT
     ======================================================== */

  {
    name: "Shambhuraj Mulik",
    role: "President",
    image: "/team/shambhuraj-mulik.jpeg",
  },

  /* ========================================================
     02 — VICE PRESIDENT
     ======================================================== */

  {
    name: "Deep Lambhade",
    role: "Vice President",
    image: "/team/deep-lambhade.jpg",
  },

  /* ========================================================
      TECHNICAL
     ======================================================== */

  {
    name: "Shrish Mhaske",
    role: "Technical Lead",
    image: "/team/shrish-mhaske.jpg",
  },

  {
    name: "Siddhant Pardeshi",
    role: "Technical Lead",
    image: "/team/siddhant-pardeshi.jpg",
  },

  {
    name: "Kartik Shivankar",
    role: "Technical Lead",
    image: "/team/kartik-shivankar.jpg",
  },

  /* ========================================================
     DESIGN
     ======================================================== */

  {
    name: "Shivraj Wankhede",
    role: "Design Lead",
    image: "/team/shivraj-wankhede.jpg",
  },

  {
    name: "Prem Dhavale",
    role: "Design Lead",
    image: "/team/prem-dhavale.jpeg",
  },

  {
    name: "Mugdha Mane",
    role: "Design Lead",
    image: "/team/mugdha-mane.jpeg",
  },

  /* ========================================================
     MEDIA
     ======================================================== */

  {
    name: "Aniket Chavan",
    role: "Media Lead",
    image: "/team/aniket-chavan.jpg",
  },

  {
    name: "Arvind Pawar",
    role: "Media Lead",
    image: "/team/arvind-pawar.jpg",
  },

  {
    name: "Om Pedhnekar",
    role: "Media Lead",
    image: "/team/om-pedhnekar.jpg",
  },

  /* ========================================================
     MANAGEMENT
     ======================================================== */

  {
    name: "Yash Suryawanshi",
    role: "Management Lead",
    image: "/team/yash-suryawanshi.jpg",
  },

  {
    name: "Shreya Patil",
    role: "Management Lead",
    image: "/team/shreya-patil.jpg",
  },

  /* ========================================================
     PR
     ======================================================== */

  {
    name: "Altaf Raja",
    role: "PR Lead",
    image: "/team/altaf-raja.jpg",
  },

  {
    name: "Rushiprasad Jadhav",
    role: "PR Lead",
    image: "/team/rushiprasad-jadhav.jpg",
  },

  /* ========================================================
     CULTURAL
     ======================================================== */

  {
    name: "Parth Pore",
    role: "Cultural Lead",
    image: "/team/parth-more.jpg",
  },

  {
    name: "Darshan Chaudhari",
    role: "Cultural Lead",
    image: "/team/darshan-chaudhari.jpg",
  },

  {
    name: "Samihan Acharya",
    role: "Cultural Lead",
    image: "/team/samihanacharya.jpeg",
  },

  /* ========================================================
     SPORTS
     ======================================================== */

  {
    name: "Sanket Rajgole",
    role: "Sports Lead",
    image: "/team/sanket-rajgole.jpg",
  },

  {
    name: "Harish Bhoyane",
    role: "Sports Lead",
    image: "/team/harish-bhoyane.jpg",
  },

  {
    name: "Soham Khilare",
    role: "Sports Lead",
    image: "/team/sohamkhilare.jpeg",
  },

  /* ========================================================
     DOCUMENTATION
     ======================================================== */

  {
    name: "Arya Nikam",
    role: "Documentation Lead",
    image: "/team/arya-nikam.jpeg",
  },
];

/* =========================================================
   OUR TEAM PAGE
   ========================================================= */

const OurTeam = () => {
  /*
   * Duplicate the team array.
   *
   * The first copy moves out while the second copy
   * enters, creating a continuous marquee effect.
   */

  const duplicatedTeam = [...team, ...team];

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030508]
        text-white
      "
    >
      {/* =====================================================
          CYBER BACKGROUND
          ===================================================== */}

      <CyberBackground />

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section
        className="
          relative
          z-20
          pt-36
          pb-24
        "
      >
        {/* ===================================================
            PAGE HEADER
            =================================================== */}

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            text-center
          "
        >
          {/* TEAM DATABASE BADGE */}

          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-400/20
              bg-black/30
              px-4
              py-2
              font-mono
              text-xs
              text-emerald-300
              backdrop-blur-md
            "
          >
            <Users className="h-3.5 w-3.5" />

            ITESA_CORE // TEAM_DATABASE
          </div>

          {/* CATEGORY */}

          <div
            className="
              mb-4
              font-mono
              text-xs
              uppercase
              tracking-[0.4em]
              text-cyan-400/70
              sm:text-sm
            "
          >
            INFORMATION TECHNOLOGY
          </div>

          {/* TITLE */}

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              sm:text-6xl
              md:text-7xl
            "
          >
            OUR TEAM
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              text-white/50
              sm:text-lg
            "
          >
            Meet the people behind the ideas, events,
            technology and community that make ITESA happen.
          </p>
        </div>

        {/* ===================================================
            TERMINAL STATUS
            =================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            px-6
          "
        >
          <div
            className="
              border-l
              border-emerald-400/30
              pl-4
              font-mono
              text-xs
              text-white/30
            "
          >
            {/* Loading */}

            <div>
              <span className="text-emerald-400">
                &gt;
              </span>{" "}
              loading_team_database...
            </div>

            {/* Count */}

            <div>
              <span className="text-cyan-400">
                &gt;
              </span>{" "}
              leads_detected:{" "}
              <span className="text-emerald-400">
                {team.length}
              </span>
            </div>

            {/* Term */}

            <div>
              <span className="text-cyan-400">
                &gt;
              </span>{" "}
              leadership_term:{" "}
              <span className="text-emerald-400">
                2026-27
              </span>
            </div>

            {/* Status */}

            <div>
              <span className="text-cyan-400">
                &gt;
              </span>{" "}
              system_status:{" "}
              <span className="text-emerald-400">
                ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOVING TEAM STRIP
            =================================================== */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
          "
        >
          {/* =================================================
              LEFT FADE
              ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-24
              bg-gradient-to-r
              from-[#030508]
              to-transparent
              sm:w-32
            "
          />

          {/* =================================================
              RIGHT FADE
              ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-24
              bg-gradient-to-l
              from-[#030508]
              to-transparent
              sm:w-32
            "
          />

          {/* =================================================
              MARQUEE
              ================================================= */}

          <div
            className="
              flex
              w-max
              gap-6
              animate-team-slide
              hover:[animation-play-state:paused]
            "
          >
            {duplicatedTeam.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="
                  group
                  relative
                  w-[260px]
                  flex-shrink-0
                  sm:w-[300px]
                "
              >
                {/* =========================================
                    PHOTO CARD
                    ========================================= */}

                <div
                  className="
                    relative
                    aspect-[3/4]
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#080b10]
                    backdrop-blur-md

                    transition-all
                    duration-500

                    group-hover:border-emerald-400/50
                    group-hover:shadow-[0_0_40px_rgba(57,255,20,0.12)]
                  "
                >
                  {/* PHOTO */}

                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-contain
                      object-center

                      grayscale
                      opacity-75

                      transition-all
                      duration-700

                      group-hover:scale-105
                      group-hover:grayscale-0
                      group-hover:opacity-100
                    "
                  />

                  {/* DARK GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#030508]
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* CYBER SCAN LINE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px

                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400/60
                      to-transparent

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  {/* TOP LEFT CORNER */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      h-3
                      w-3

                      border-l
                      border-t
                      border-cyan-400/50

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  {/* BOTTOM RIGHT CORNER */}

                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      h-3
                      w-3

                      border-b
                      border-r
                      border-emerald-400/50

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* =========================================
                    DESIGNATION + NAME
                    ========================================= */}

                <div
                  className="
                    mt-4
                    px-1
                    text-left
                  "
                >
                  {/* DESIGNATION */}

                  <div
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-emerald-400
                    "
                  >
                    {member.role}
                  </div>

                  {/* NAME */}

                  <h3
                    className="
                      mt-1
                      text-lg
                      font-bold
                      tracking-tight
                      text-white/90
                    "
                  >
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            SYSTEM STATUS
            =================================================== */}

        <div
          className="
            mx-auto
            mt-20
            max-w-6xl
            px-6
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              border-y
              border-white/10
              py-6
              sm:flex-row
            "
          >
            {/* LEFT */}

            <div
              className="
                font-mono
                text-[10px]
                tracking-wider
                text-white/20
              "
            >
              ITESA_CORE // HUMAN_LAYER
            </div>

            {/* CENTER */}

            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-xs
                text-emerald-400
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                "
              />

              {team.length} LEADS // ALL SYSTEMS ONLINE
            </div>

            {/* RIGHT */}

            <div
              className="
                font-mono
                text-[10px]
                tracking-wider
                text-white/20
              "
            >
              BUILD // LEARN // INNOVATE
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

      {/* =====================================================
          MARQUEE ANIMATION
          ===================================================== */}

      <style>{`
        @keyframes team-slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-team-slide {
          animation: team-slide 100s linear infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  );
};

export default OurTeam;