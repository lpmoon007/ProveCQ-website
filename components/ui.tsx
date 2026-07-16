import Link from "next/link";
import type { ReactNode } from "react";

/** Constrains content to the standard 1080px reading column. */
export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-shell" : "max-w-content"} ${className}`}
    >
      {children}
    </div>
  );
}

type SectionTone = "paper" | "paper2" | "ink" | "green";

const SECTION_BG: Record<SectionTone, string> = {
  paper: "bg-paper text-content",
  paper2: "bg-paper-2 text-content",
  ink: "bg-ink text-paper on-dark",
  green: "bg-green text-white on-dark",
};

/** A full-bleed page section with consistent vertical rhythm. */
export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${SECTION_BG[tone]} px-5 py-16 sm:px-8 sm:py-20 md:py-[84px] ${className}`}>
      {children}
    </section>
  );
}

/** Small uppercase kicker above a heading. */
export function Eyebrow({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "soft" | "green-soft";
}) {
  const color = tone === "green" ? "text-green" : "text-green-soft";
  return <span className={`eyebrow ${color}`}>{children}</span>;
}

type ButtonVariant = "primary" | "ghost-light" | "ghost-dark" | "on-green" | "dark";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-green text-white hover:bg-green-700",
  "ghost-light":
    "bg-transparent text-content border-[1.5px] border-edge-light hover:border-green",
  "ghost-dark":
    "bg-transparent text-paper border-[1.5px] border-[#3A3629] hover:border-green-soft",
  "on-green": "bg-white text-green hover:bg-paper",
  dark: "bg-ink text-white hover:bg-ink-2",
};

/** CTA button rendered as a link (internal via next/link, external via <a>). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center rounded-[11px] px-7 py-4 text-base font-bold transition-colors ${BUTTON_VARIANTS[variant]} ${className}`;
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** The 'P' brand mark used in nav + footer. */
export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[9px] bg-green font-display font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.53 }}
    >
      P
    </span>
  );
}
