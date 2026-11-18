import { useEffect, useRef, useState } from "react";

const VOICE_PLAYED_KEY = "itesa_nex_voice_played";

const NexVoice = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const hasSpoken = useRef(false);

  const dialogue =
    "Hey there! Welcome to ITESA. I'm Nex, your digital companion. Ready to explore?";

  useEffect(() => {
    // Already played during this browser session
    if (sessionStorage.getItem(VOICE_PLAYED_KEY)) {
      return;
    }

    if (!("speechSynthesis" in window)) {
      return;
    }

    const speak = () => {
      if (hasSpoken.current) return;

      // Check one more time before speaking
      if (sessionStorage.getItem(VOICE_PLAYED_KEY)) {
        return;
      }

      hasSpoken.current = true;

      // Mark BEFORE speaking so it cannot trigger twice
      sessionStorage.setItem(VOICE_PLAYED_KEY, "true");

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(dialogue);

      /*
       * Female-style voice settings
       */
      utterance.rate = 0.92;
      utterance.pitch = 1.25;
      utterance.volume = 0.9;

      const voices = window.speechSynthesis.getVoices();

      /*
       * Try to find a female-sounding English voice.
       *
       * Browser voice names differ between Windows,
       * Chrome, Edge and operating systems.
       */
      const femaleVoice =
        voices.find((voice) =>
          /female|zira|samantha|aria|jenny|susan|hazel|sara/i.test(
            voice.name
          )
        ) ||
        voices.find(
          (voice) =>
            voice.lang.toLowerCase().startsWith("en") &&
            /google|microsoft/i.test(voice.name)
        ) ||
        voices.find((voice) =>
          voice.lang.toLowerCase().startsWith("en")
        );

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      /*
       * Show dialogue slightly before speaking.
       */
      setShowDialogue(true);

      window.speechSynthesis.speak(utterance);
    };

    /*
     * Chrome / Edge may block autoplay audio.
     *
     * First attempt automatically after page loads.
     */
    const timer = window.setTimeout(() => {
      speak();
    }, 1200);

    /*
     * If autoplay is blocked, first interaction
     * will trigger the voice.
     */
    const handleInteraction = () => {
      speak();

      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("pointerdown", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      clearTimeout(timer);

      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  /*
   * Hide the dialogue after the greeting finishes.
   */
  useEffect(() => {
    if (!showDialogue) return;

    const timer = setTimeout(() => {
      setShowDialogue(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, [showDialogue]);

  return (
    <div className="fixed left-[3.5rem] top-[8rem] z-[60] pointer-events-none">
      {showDialogue && (
        <div
          className="
            relative
            w-[280px]
            rounded-2xl
            border
            border-lime-300/30
            bg-black/75
            px-5
            py-4
            shadow-[0_0_30px_rgba(180,255,60,0.18)]
            backdrop-blur-xl
            animate-in
            fade-in
            slide-in-from-left-3
            duration-500
          "
        >
          {/* Cyber glow */}
          <div className="absolute inset-0 rounded-2xl bg-lime-300/[0.03]" />

          {/* Small Nex label */}
          <div className="relative mb-2 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_10px_#b8ff3d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-300">
              NEX • ONLINE
            </span>
          </div>

          {/* Dialogue */}
          <p className="relative text-sm leading-relaxed text-white/90">
            {dialogue}
          </p>

          {/* Little speech tail */}
          <div
            className="
              absolute
              -bottom-2
              left-8
              h-4
              w-4
              rotate-45
              border-r
              border-b
              border-lime-300/30
              bg-black/75
            "
          />
        </div>
      )}
    </div>
  );
};

export default NexVoice;