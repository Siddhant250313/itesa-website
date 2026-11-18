import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const events = [
  {
    id: "01",
    title: "TECHNOVA",
    type: "TECH FEST",
    date: "COMING SOON",
    location: "DYPCOE • AKURDI",
    description:
      "A technology-driven event bringing students together through innovation, problem solving and emerging technologies.",
  },
  {
    id: "02",
    title: "CODE WAR",
    type: "CODING",
    date: "COMING SOON",
    location: "DYPCOE • AKURDI",
    description:
      "Competitive programming challenges designed to test logic, algorithms and development skills.",
  },
  {
    id: "03",
    title: "AI HORIZON",
    type: "AI / ML",
    date: "COMING SOON",
    location: "DYPCOE • AKURDI",
    description:
      "Explore artificial intelligence, machine learning and the technologies shaping the future.",
  },
  {
    id: "04",
    title: "CYBER SHIELD",
    type: "CYBERSECURITY",
    date: "COMING SOON",
    location: "DYPCOE • AKURDI",
    description:
      "A cybersecurity-focused experience covering security, ethical hacking and digital defence.",
  },
];

const Events = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030508] text-white">

      {/* =================================================
          HOME PAGE CYBER BACKGROUND
          ================================================= */}
      <CyberBackground />

      {/* =================================================
          NAVBAR
          ================================================= */}
      <Navbar />

      {/* =================================================
          PAGE CONTENT
          ================================================= */}
      <section className="relative z-20 pt-36 pb-24 px-6">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-black/30 backdrop-blur-md font-mono text-xs text-cyan-300 mb-8">

              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              EVENTS_DATABASE // ONLINE

            </div>

            <div className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-cyan-400/70 mb-4">
              INFORMATION TECHNOLOGY
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              EVENTS
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-white/50 text-base sm:text-lg">
              Discover workshops, competitions, technical sessions and
              experiences powered by ITESA.
            </p>

          </div>

          {/* TERMINAL */}
          <div className="max-w-3xl mx-auto mb-14 font-mono text-xs sm:text-sm text-white/35 border-l border-cyan-400/30 pl-4">

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              scanning_event_database...
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              events_found:{" "}
              <span className="text-emerald-400">
                {events.length}
              </span>
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              registration_status:{" "}
              <span className="text-emerald-400">
                ACTIVE
              </span>
            </div>

          </div>

          {/* EVENTS */}
          <div className="grid md:grid-cols-2 gap-6">

            {events.map((event) => (

              <div
                key={event.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  backdrop-blur-md
                  p-7
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/[0.03]
                  hover:-translate-y-1
                "
              >

                <div className="absolute top-5 right-6 font-mono text-4xl font-bold text-white/[0.04]">
                  {event.id}
                </div>

                <div className="flex items-center justify-between mb-7">

                  <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400 uppercase">
                    {event.type}
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    UPCOMING
                  </span>

                </div>

                <h2 className="text-3xl font-black tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h2>

                <p className="text-white/45 leading-relaxed text-sm mb-7">
                  {event.description}
                </p>

                <div className="space-y-3 border-t border-white/10 pt-5">

                  <div className="flex items-center gap-3 text-white/40 text-xs font-mono">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-3 text-white/40 text-xs font-mono">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    {event.location}
                  </div>

                </div>

                <button className="mt-7 flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300">
                  VIEW EVENT
                  <ArrowUpRight className="h-4 w-4" />
                </button>

              </div>

            ))}

          </div>

          <div className="mt-16 flex justify-center">

            <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider text-white/20">
              <Terminal className="h-4 w-4 text-cyan-400/50" />
              ITESA_EVENTS_CORE // 0x7F
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
};

export default Events;