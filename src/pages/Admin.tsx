import {
  Activity,
  Calendar,
  Users,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Settings,
  LogOut,
  Database,
  UserPlus,
  Plus,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import CyberBackground from "@/components/CyberBackground";

const Admin = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030508] text-white">

      {/* =================================================
          CYBER BACKGROUND
          ================================================= */}

      <CyberBackground />


      {/* =================================================
          NAVBAR
          ================================================= */}

      <Navbar />


      {/* =================================================
          ADMIN CONTENT
          ================================================= */}

      <section className="relative z-20 pt-32 pb-20 px-6">

        <div className="max-w-7xl mx-auto">


          {/* =================================================
              HEADER
              ================================================= */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">

            <div>

              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-4">

                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                ADMIN_CORE // ONLINE

              </div>

              <div className="font-mono text-xs tracking-[0.35em] text-cyan-400/60 mb-3">
                INFORMATION TECHNOLOGY
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                CONTROL CENTER
              </h1>

              <p className="mt-3 text-white/40 text-sm">
                Manage ITESA events, members and communications.
              </p>

            </div>


            {/* STATUS */}

            <div
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-lg
                border
                border-emerald-400/20
                bg-emerald-400/[0.03]
                font-mono
                text-xs
              "
            >

              <ShieldCheck className="h-4 w-4 text-emerald-400" />

              <div>

                <div className="text-white/40 text-[9px]">
                  SYSTEM_STATUS
                </div>

                <div className="text-emerald-400">
                  FULL_ACCESS

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              TERMINAL
              ================================================= */}

          <div className="border-l border-cyan-400/30 pl-4 mb-10 font-mono text-[10px] text-white/25">

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              loading_admin_core...
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              database_connection:{" "}
              <span className="text-emerald-400">
                ACTIVE
              </span>
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              security_protocol:{" "}
              <span className="text-emerald-400">
                ENABLED
              </span>
            </div>

          </div>


          {/* =================================================
              STAT CARDS
              ================================================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">


            {/* MEMBERS */}

            <div className="group border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-cyan-400/30 transition-all">

              <div className="flex items-center justify-between">

                <Users className="h-5 w-5 text-cyan-400" />

                <span className="font-mono text-[9px] text-white/20">
                  01
                </span>

              </div>

              <div className="mt-6 font-mono text-3xl font-bold">
                100+
              </div>

              <div className="mt-1 text-xs text-white/35">
                ACTIVE MEMBERS
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />

            </div>


            {/* EVENTS */}

            <div className="group border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-emerald-400/30 transition-all">

              <div className="flex items-center justify-between">

                <Calendar className="h-5 w-5 text-emerald-400" />

                <span className="font-mono text-[9px] text-white/20">
                  02
                </span>

              </div>

              <div className="mt-6 font-mono text-3xl font-bold">
                50+
              </div>

              <div className="mt-1 text-xs text-white/35">
                EVENTS
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />

            </div>


            {/* MESSAGES */}

            <div className="group border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-cyan-400/30 transition-all">

              <div className="flex items-center justify-between">

                <MessageSquare className="h-5 w-5 text-cyan-400" />

                <span className="font-mono text-[9px] text-white/20">
                  03
                </span>

              </div>

              <div className="mt-6 font-mono text-3xl font-bold">
                12
              </div>

              <div className="mt-1 text-xs text-white/35">
                NEW MESSAGES
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />

            </div>


            {/* SYSTEM */}

            <div className="group border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-emerald-400/30 transition-all">

              <div className="flex items-center justify-between">

                <Activity className="h-5 w-5 text-emerald-400" />

                <span className="font-mono text-[9px] text-white/20">
                  04
                </span>

              </div>

              <div className="mt-6 font-mono text-3xl font-bold text-emerald-400">
                100%
              </div>

              <div className="mt-1 text-xs text-white/35">
                SYSTEM HEALTH
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />

            </div>

          </div>


          {/* =================================================
              MANAGEMENT GRID
              ================================================= */}

          <div className="grid lg:grid-cols-3 gap-6">


            {/* EVENTS */}

            <div className="lg:col-span-2 border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-7">

              <div className="flex items-center justify-between mb-7">

                <div>

                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">

                    <Calendar className="h-4 w-4" />

                    EVENT_MANAGER

                  </div>

                  <h2 className="mt-2 text-xl font-bold">
                    Event Operations
                  </h2>

                </div>


                <button
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-md
                    bg-cyan-400
                    text-black
                    font-mono
                    text-xs
                    font-semibold
                    hover:bg-cyan-300
                    transition-all
                  "
                >

                  <Plus className="h-4 w-4" />

                  NEW EVENT

                </button>

              </div>


              {/* EVENT ROWS */}

              <div className="space-y-3">

                {[
                  "TECHNOVA",
                  "CODE WAR",
                  "AI HORIZON",
                  "CYBER SHIELD",
                ].map((event, index) => (

                  <div
                    key={event}
                    className="
                      flex
                      items-center
                      justify-between
                      p-4
                      rounded-lg
                      border
                      border-white/5
                      bg-white/[0.02]
                      hover:border-cyan-400/20
                      transition-all
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="font-mono text-[10px] text-white/20">
                        0{index + 1}
                      </div>

                      <div>

                        <div className="font-semibold text-sm">
                          {event}
                        </div>

                        <div className="font-mono text-[9px] text-white/25 mt-1">
                          UPCOMING
                        </div>

                      </div>

                    </div>

                    <ArrowUpRight className="h-4 w-4 text-white/20" />

                  </div>

                ))}

              </div>

            </div>


            {/* QUICK ACTIONS */}

            <div className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-7">

              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-2">

                <Terminal className="h-4 w-4" />

                QUICK_ACTIONS

              </div>

              <h2 className="text-xl font-bold mb-7">
                System Controls
              </h2>


              <div className="space-y-3">


                <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition-all text-left">

                  <UserPlus className="h-4 w-4 text-cyan-400" />

                  <div>

                    <div className="text-sm font-semibold">
                      Manage Members
                    </div>

                    <div className="text-[9px] font-mono text-white/25 mt-1">
                      USER_DATABASE
                    </div>

                  </div>

                </button>


                <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-emerald-400/30 hover:bg-emerald-400/[0.03] transition-all text-left">

                  <Database className="h-4 w-4 text-emerald-400" />

                  <div>

                    <div className="text-sm font-semibold">
                      Database
                    </div>

                    <div className="text-[9px] font-mono text-white/25 mt-1">
                      SYSTEM_DATA
                    </div>

                  </div>

                </button>


                <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition-all text-left">

                  <Settings className="h-4 w-4 text-cyan-400" />

                  <div>

                    <div className="text-sm font-semibold">
                      Settings
                    </div>

                    <div className="text-[9px] font-mono text-white/25 mt-1">
                      SYSTEM_CONFIG
                    </div>

                  </div>

                </button>


                <button
                  onClick={() => window.location.href = "/login"}
                  className="w-full flex items-center gap-3 p-4 rounded-lg border border-red-400/10 bg-red-400/[0.02] hover:border-red-400/30 transition-all text-left"
                >

                  <LogOut className="h-4 w-4 text-red-400" />

                  <div>

                    <div className="text-sm font-semibold">
                      Terminate Session
                    </div>

                    <div className="text-[9px] font-mono text-white/25 mt-1">
                      LOGOUT
                    </div>

                  </div>

                </button>

              </div>

            </div>

          </div>


          {/* =================================================
              SYSTEM FOOTER
              ================================================= */}

          <div className="mt-10 border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">

            <div className="font-mono text-[9px] tracking-wider text-white/15">
              ITESA_ADMIN_CORE // 0x7F // CONTROL_LAYER
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] text-emerald-400">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

              SYSTEM_OPERATIONAL

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Admin;