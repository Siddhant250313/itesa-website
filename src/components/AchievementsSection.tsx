import {
  Trophy,
  Table2,
  Medal,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

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
    year: "2024–25",
  },
  {
    category: "TEAM_EXCELLENCE",
    icon: ShieldCheck,
    value: "05+",
    title: "Team Achievements",
    description:
      "Collective achievements through collaboration, participation and leadership.",
    year: "2024–25",
  },
];

const AchievementsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#030508] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(34,211,238,0.07),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(16,185,129,0.05),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-9 sm:mb-12">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60 sm:text-xs">
            <span className="h-px w-8 bg-cyan-400/40" />
            PERFORMANCE_MODULE
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                Beyond the <span className="text-cyan-400">Classroom</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
                Performance isn't limited to code. ITESA members compete,
                collaborate and represent the department across the campus.
              </p>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-wider text-white/25 md:text-right">
              ACHIEVEMENT_DATABASE
              <div className="mt-1 text-emerald-400/70">ACCESS_GRANTED</div>
            </div>
          </div>
        </div>

        {/* Compact overview panel */}
        <div className="mb-5 flex flex-col gap-3 rounded-xl border border-cyan-400/15 bg-[#080d13]/90 p-5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-4">
            <div className="font-mono text-4xl font-black leading-none text-cyan-400 sm:text-5xl">
              15+
            </div>
            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                Recorded Achievements
              </h3>
              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Highlights from ITESA's competitive and extracurricular journey.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-300/70 sm:self-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ITESA_ARCHIVE
          </div>
        </div>

        {/* Static achievement cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <article
                key={achievement.category}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#080b10]/90 p-5 transition-colors duration-300 hover:border-cyan-400/30 sm:min-h-[275px] sm:p-6"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r border-t border-white/10 transition-colors group-hover:border-cyan-400/30" />

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07]">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-white/30">
                    {achievement.year}
                  </span>
                </div>

                <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/50">
                  {`0${index + 1}`} // {achievement.category}
                </div>
                <div className="mt-2 font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {achievement.value}
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {achievement.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-white/40 sm:text-sm">
                  {achievement.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400/50">
                    ITESA_RECORD
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/25 transition-colors group-hover:text-cyan-400" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.07] pt-4 font-mono text-[9px] uppercase tracking-wider text-white/25 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>DATA_SOURCE // ITESA_ACHIEVEMENT_ARCHIVE</span>
          <span className="text-emerald-400/60">● ARCHIVE_DISPLAY_ACTIVE</span>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
