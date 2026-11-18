import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CyberCardProps {
  label?: string;
  title: string;
  description?: string;
  image?: string;
  status?: string;
  href?: string;
  children?: React.ReactNode;
}

const CyberCard = ({
  label = "MODULE_01",
  title,
  description,
  image,
  status = "SYSTEM ACTIVE",
  href,
  children,
}: CyberCardProps) => {
  const CardContent = (
    <article
      className="
        cyber-card
        group
        relative
        h-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#080b10]/80
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_15px_50px_rgba(34,211,238,0.12)]
      "
    >
      {/* =========================================
          IMAGE
          ========================================= */}

      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
          />

          {/* Image overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#080b10]
              via-transparent
              to-transparent
              opacity-80
            "
          />

          {/* Scan line */}

          <div
            className="
              cyber-card-scan
              absolute
              left-0
              right-0
              h-px
              bg-cyan-400/60
              opacity-0
              shadow-[0_0_12px_rgba(34,211,238,0.8)]
              group-hover:opacity-100
            "
          />

        </div>
      )}

      {/* =========================================
          CARD CONTENT
          ========================================= */}

      <div className="relative p-5 sm:p-6">

        {/* Label */}

        <div
          className="
            mb-4
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

          <span>
            // {label}
          </span>

          <ArrowUpRight
            className="
              h-4
              w-4
              text-white/30
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-cyan-400
            "
          />

        </div>

        {/* Title */}

        <h3
          className="
            text-xl
            sm:text-2xl
            font-bold
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {title}
        </h3>

        {/* Description */}

        {description && (
          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-white/45
            "
          >
            {description}
          </p>
        )}

        {/* Custom content */}

        {children && (
          <div className="mt-5">
            {children}
          </div>
        )}

        {/* Bottom status */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            font-mono
            text-[10px]
            uppercase
            tracking-wider
            text-white/30
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_8px_rgba(52,211,153,0.8)]
            "
          />

          <span className="group-hover:text-emerald-400 transition-colors">
            {status}
          </span>

        </div>

      </div>

      {/* =========================================
          CORNER DECORATION
          ========================================= */}

      <div
        className="
          absolute
          right-0
          top-0
          h-10
          w-10
          border-r
          border-t
          border-cyan-400/0
          transition-colors
          duration-500
          group-hover:border-cyan-400/50
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-10
          w-10
          border-b
          border-l
          border-cyan-400/0
          transition-colors
          duration-500
          group-hover:border-cyan-400/50
        "
      />

    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block h-full"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default CyberCard;