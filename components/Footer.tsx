import Link from "next/link";
import { footerCols, site } from "@/lib/site";
import { BrandMark } from "./ui";

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  const cls = "text-[#8C877A] transition-colors hover:text-paper";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-2 px-5 pb-10 pt-[54px] text-[#8C877A] sm:px-8 on-dark">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-9 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5 text-paper">
            <BrandMark size={30} />
            <span className="font-display text-[17px] font-bold">Prove</span>
          </div>
          <p className="m-0 max-w-[280px] text-sm leading-relaxed">
            Behavioral proof of who will deliver — before you bet on them.
            Powered by the Commitment Quotient™. A Be Legendary company.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="mb-3 text-sm font-bold text-paper">{col.title}</div>
            <div className="flex flex-col gap-2 text-sm">
              {col.links.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[34px] max-w-content border-t border-[#221F17] pt-[22px] text-[13px] leading-relaxed text-[#605C51]">
        <p className="m-0 mb-3 max-w-[760px]">
          Prove and the Commitment Quotient (CQ) are from{" "}
          <a
            href="https://www.belegendary.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C877A] underline-offset-2 hover:text-paper hover:underline"
          >
            Be Legendary
          </a>
          , founded by James Carter, creator of the{" "}
          <a
            href="https://www.belegendary.org/flag-model/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C877A] underline-offset-2 hover:text-paper hover:underline"
          >
            Flag Model
          </a>
          . CQ measures whether your people can deliver; the Flag Model measures
          whether your team can execute. Prove is behavioral measurement — not the
          identity-verification service at prove.com.
        </p>
        ©2026 {site.legalName}. All rights reserved. Commitment Quotient™, Prove™
        and Better Every Day™ are trademarks of Be Legendary.
      </div>
    </footer>
  );
}
