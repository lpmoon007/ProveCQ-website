import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Identify High-Potential Employees | ProveCQ",
  description:
    "High potential is not the same as high performance. Learn how to identify high-potential employees using behavioral signals — initiative, applied grit, and learnability.",
};

const SIGNALS = [
  {
    n: "01",
    h: "Initiative beyond the role",
    b: "They solve problems that are not technically theirs to solve.",
  },
  {
    n: "02",
    h: "Grit on hard problems",
    b: "They stay with difficult work long enough to crack it.",
  },
  {
    n: "03",
    h: "Fast learnability",
    b: "They absorb new demands and level up without hand-holding.",
  },
];

const MISLEADS = [
  {
    h: "Performance is role-bound",
    b: <>Being great at today&rsquo;s job says little about capacity for a bigger one.</>,
  },
  {
    h: "Potential compounds",
    b: "Investing early in a high-learnability person pays back for years — if you can spot them.",
  },
];

export default function HighPotentialEmployeesPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › High-potential employees"
        eyebrow="Talent"
        title={<>How to identify high-potential employees.</>}
      >
        Your highest performer today is not always your highest potential for
        tomorrow. Potential is about the capacity to grow into bigger demands
        &mdash; and that shows up in behavior, not in this quarter&rsquo;s numbers.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              High-potential employees consistently show three behaviors: they
              take initiative beyond their role, they push through hard problems,
              and they learn fast when demands change. Spot those and you find the
              people worth investing in &mdash; before a competitor does.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The signals of real potential
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SIGNALS.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why performance alone misleads
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {MISLEADS.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Find your future leaders early.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove surfaces high-potential people on your
            team.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              See how Prove works &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
