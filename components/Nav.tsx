import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { BrandMark } from "./ui";

/**
 * Sticky dark site header. `minimal` drops the nav links (used on focused
 * product pages like the Heatmap demo, mirroring the prototype).
 */
export default function Nav({ minimal = false }: { minimal?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2820] bg-ink/[.92] backdrop-blur-md on-dark">
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-[15px] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-paper">
          <BrandMark />
          <span className="font-display text-[19px] font-bold tracking-[-.01em]">
            Prove
          </span>
        </Link>

        {minimal ? (
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Book a call
          </a>
        ) : (
          <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2.5 text-sm font-semibold text-[#C9C5B8]">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-paper">
                {l.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[9px] bg-green px-5 py-2.5 text-white transition-colors hover:bg-green-700"
            >
              Book a call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
