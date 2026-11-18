import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  Terminal,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import CyberBackground from "@/components/CyberBackground";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    /*
     * Connect your actual authentication logic here.
     *
     * Example:
     * await supabase.auth.signInWithPassword(...)
     */

    console.log("Login attempt:", {
      email,
      password,
    });
  };

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
          MAIN CONTENT
          ================================================= */}

      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-28 pb-20">

        <div className="w-full max-w-md">


          {/* =================================================
              SYSTEM STATUS
              ================================================= */}

          <div className="flex justify-center mb-7">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-emerald-400/20
                bg-black/30
                backdrop-blur-md
                font-mono
                text-xs
                text-emerald-300
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
                    bg-emerald-400
                    opacity-75
                    animate-ping
                  "
                />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

              </span>

              SECURE_SYSTEM // ONLINE

            </div>

          </div>


          {/* =================================================
              HEADER
              ================================================= */}

          <div className="text-center mb-8">

            <div className="font-mono text-xs tracking-[0.4em] text-cyan-400/70 mb-4">
              INFORMATION TECHNOLOGY
            </div>

            <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
              LOGIN
            </h1>

            <p className="mt-4 text-sm text-white/40">
              Authenticate to access the ITESA system.
            </p>

          </div>


          {/* =================================================
              TERMINAL
              ================================================= */}

          <div className="mb-6 border-l border-cyan-400/30 pl-4 font-mono text-[10px] text-white/30">

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              initializing_authentication...
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              encryption_layer:{" "}
              <span className="text-emerald-400">
                ACTIVE
              </span>
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              access_protocol:{" "}
              <span className="text-emerald-400">
                READY
              </span>
            </div>

          </div>


          {/* =================================================
              LOGIN CARD
              ================================================= */}

          <div
            className="
              relative
              border
              border-white/10
              bg-black/30
              backdrop-blur-xl
              rounded-2xl
              p-7
              sm:p-8
              shadow-[0_0_60px_rgba(0,0,0,0.35)]
            "
          >

            {/* TOP BAR */}

            <div className="flex items-center justify-between mb-7">

              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">

                <ShieldCheck className="h-4 w-4" />

                AUTHENTICATION

              </div>

              <div className="font-mono text-[9px] text-white/20">
                0x7F
              </div>

            </div>


            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >


              {/* =================================================
                  EMAIL
                  ================================================= */}

              <div>

                <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] text-white/35">
                  USER_IDENTIFIER
                </label>

                <div className="relative">

                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      h-4
                      w-4
                      text-cyan-400/60
                    "
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="
                      w-full
                      h-12
                      rounded-md
                      border
                      border-white/10
                      bg-white/[0.025]
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      focus:border-cyan-400/50
                      focus:ring-1
                      focus:ring-cyan-400/20
                      transition-all
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
                  ================================================= */}

              <div>

                <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] text-white/35">
                  ACCESS_KEY
                </label>

                <div className="relative">

                  <Lock
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      h-4
                      w-4
                      text-emerald-400/60
                    "
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="
                      w-full
                      h-12
                      rounded-md
                      border
                      border-white/10
                      bg-white/[0.025]
                      pl-11
                      pr-12
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      focus:border-emerald-400/50
                      focus:ring-1
                      focus:ring-emerald-400/20
                      transition-all
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-white/30
                      hover:text-white/70
                      transition-colors
                    "
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>

                </div>

              </div>


              {/* =================================================
                  LOGIN BUTTON
                  ================================================= */}

              <button
                type="submit"
                className="
                  group
                  w-full
                  h-12
                  rounded-md
                  bg-cyan-400
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-cyan-300
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
                  transition-all
                  duration-300
                "
              >

                AUTHENTICATE

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>


            {/* =================================================
                SECURITY STATUS
                ================================================= */}

            <div className="mt-7 pt-5 border-t border-white/10">

              <div className="flex items-center justify-between font-mono text-[9px]">

                <span className="text-white/20">
                  CONNECTION
                </span>

                <span className="flex items-center gap-2 text-emerald-400">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  ENCRYPTED

                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              REGISTER
              ================================================= */}

          <div className="mt-6 text-center font-mono text-xs text-white/30">

            Don't have an account?

            <Link
              to="/register"
              className="
                ml-2
                text-cyan-400
                hover:text-cyan-300
                transition-colors
              "
            >
              CREATE ACCESS
            </Link>

          </div>


          {/* SYSTEM FOOTER */}

          <div className="mt-10 flex justify-center">

            <div className="flex items-center gap-2 font-mono text-[9px] tracking-wider text-white/15">

              <Terminal className="h-3.5 w-3.5" />

              ITESA_AUTH_CORE // SECURE // 0x7F

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;