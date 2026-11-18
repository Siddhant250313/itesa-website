import React, { useState } from "react";

const NexDialogue = () => {
  const [showDialogue, setShowDialogue] = useState(false);

  return (
    <>
      {/* Clickable Nex dialogue trigger */}
      <button
        onClick={() => setShowDialogue((prev) => !prev)}
        className="
          absolute
          left-4 sm:left-8
          bottom-4 sm:bottom-6
          z-[50]
          w-[180px] h-[180px]
          sm:w-[220px] sm:h-[220px]
          pointer-events-auto
          cursor-pointer
          bg-transparent
          border-none
          outline-none
        "
        aria-label="Talk to Nex"
      />

      {/* Dialogue */}
      {showDialogue && (
        <div
          className="
            absolute
            left-[150px] sm:left-[185px]
            bottom-[145px] sm:bottom-[170px]
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
              w-[190px] sm:w-[220px]
              rounded-xl
              border border-cyan-400/30
              bg-black/80
              backdrop-blur-md
              px-4 py-3
              shadow-[0_0_25px_rgba(34,211,238,0.18)]
            "
          >
            {/* Online indicator */}
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="
                  w-1.5 h-1.5
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

            {/* Message */}
            <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-white/90">
              Hey, I am Nex 👋
              <br />

              <span className="text-cyan-300">
                Welcome to ITESA!
              </span>
            </p>

            {/* Bubble tail */}
            <div
              className="
                absolute
                -bottom-2
                left-7
                w-4 h-4
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
    </>
  );
};

export default NexDialogue;