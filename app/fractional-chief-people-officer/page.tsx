import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/fractional-chief-people-officer";

const DESCRIPTION =
  "A fractional Chief People Officer builds the People function part-time. What it can't do on its own is tell you who will actually deliver — that's a measurement gap, not an org-design one. Here's the difference, and who answers which.";

export const metadata: Metadata = {
  title: "Fractional Chief People Officer: What It Fixes — and What It Can't",
  description: DESCRIPTION,
  keywords: [
    "fractional chief people officer",
    "fractional CPO",
    "part-time chief people officer",
    "fractional CHRO",
    "outsourced head of people",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Fractional Chief People Officer — what it fixes, and what it can't",
    description:
      "A fractional CPO builds the People function. It can't, by itself, tell you who will actually deliver. Here's who answers which.",
    url: CANONICAL,
    type: "article",
  },
};

const FAQ = [
  {
    q: "What is a fractional Chief People Officer?",
    a: "A fractional Chief People Officer (CPO) is an experienced People or HR executive who works part-time — leading talent, culture, compensation, org design, and HR operations for a company that isn't ready for, or doesn't need, a full-time CHRO. They build and run the People function; they don't, on their own, give you behavioral proof of which specific individuals will deliver under pressure.",
  },
  {
    q: "Can a fractional CPO tell you who will actually deliver?",
    a: "Rarely on its own. A fractional CPO installs the systems that should surface performance — reviews, comp bands, competency frameworks, engagement surveys. But those describe process and sentiment, not observed behavior over time. Knowing who takes initiative when no one's watching, who follows through when it's hard, and who grows under new demands is a behavioral read on specific people — a different instrument than the People function itself. The two are complementary, not the same job.",
  },
  {
    q: "How does Prove work alongside a fractional CPO or CHRO?",
    a: "Prove is the behavioral read a People leader brings in when the question is 'who is actually ready.' While the CPO owns the broader function, Prove measures Initiative, Follow-Through, and Learnability from real work over about six weeks and returns a per-person Commitment Quotient and a team heatmap. It makes the People leader's promotion and stretch-assignment calls rest on evidence instead of a hunch — which makes the People leader look good.",
  },
  {
    q: "Fractional CPO or behavioral measurement — which do we need first?",
    a: "If you need someone to build hiring, comp, and HR systems part-time, hire a fractional CPO. If those systems exist but you still can't tell who's ready to promote or trust with more, that's a measurement gap Prove fills. Many companies need both — often the systems first, then a behavioral read so the biggest people bets land on evidence.",
  },
  {
    q: "What if the problem is the leadership team, not individuals?",
    a: "Then it's a team-execution problem, not an individual-readiness one — a different layer. That's what the Flag Model from Be Legendary measures and rebuilds: whether a leadership team can commit, finish, and hold a standard together. Prove measures whether your people can deliver; the Flag Model measures whether your team can execute. Same founder, two layers of the same question.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fractional Chief People Officer",
      item: `${site.domain}${CANONICAL}`,
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fractional Chief People Officer: what it fixes, and what it can't",
  description: DESCRIPTION,
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  // Shared James Carter entity (@id matches Be Legendary's node).
  author: {
    "@type": "Person",
    "@id": "https://www.belegendary.org/#james",
    name: "James Carter",
    url: `${site.domain}/author/james-carter`,
  },
  publisher: { "@type": "Organization", name: "Prove", url: site.domain },
  mainEntityOfPage: `${site.domain}${CANONICAL}`,
};

const termJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Fractional Chief People Officer",
  description:
    "A part-time or fractional People/HR executive who leads talent, culture, compensation, org design, and HR operations for a company that does not need a full-time CHRO.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const COMPARE = [
  {
    attr: "What it builds",
    a: "The People function: hiring, comp, org design, culture, HR operations.",
    b: "Behavioral proof of who delivers: Initiative, Follow-Through, Learnability from real work.",
  },
  {
    attr: "Best when",
    a: "You need senior People leadership without a full-time CHRO.",
    b: "The systems are fine, but you still can't tell who's ready to promote or bet on.",
  },
  {
    attr: "The unit of work",
    a: "Systems and programs, company-wide.",
    b: "The observed behavior of specific individuals, over ~six weeks.",
  },
  {
    attr: "How it shows up",
    a: "Better processes, cleaner org, healthier HR metrics.",
    b: "A per-person CQ and a team heatmap — promote, coach, or develop-first.",
  },
];

export default function FractionalCPOPage() {
  return (
    <>
      {[breadcrumbJsonLd, articleJsonLd, termJsonLd, faqJsonLd].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <Nav />
      <PageHero
        crumb="Fractional Chief People Officer"
        eyebrow="For People leaders"
        title={
          <>
            Fractional Chief People Officer:{" "}
            <span className="text-green-soft">what it fixes, and what it can&rsquo;t.</span>
          </>
        }
      >
        A fractional CPO builds the People function without a full-time executive
        salary. What it can&rsquo;t do on its own is tell you who will actually
        deliver &mdash; because that&rsquo;s behavioral proof, not org design.
      </PageHero>

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A <strong className="text-paper">fractional Chief People Officer</strong>{" "}
              is a part-time People/HR executive who builds the People function
              &mdash; talent, culture, comp, org design. It&rsquo;s the right hire
              when you need that function led without a full-time CHRO. What it{" "}
              <em>can&rsquo;t</em> do, on its own, is give you a trustworthy read on{" "}
              <em>which specific people</em> will deliver when it&rsquo;s hard. That
              isn&rsquo;t a systems gap &mdash; it&rsquo;s a measurement one, and
              it&rsquo;s the gap Prove closes.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What a fractional CPO actually does
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
              A fractional Chief People Officer gives a growing company senior
              People leadership without a full-time executive salary. Typically that
              means building the machinery: hiring and onboarding, compensation and
              levelling, performance systems, org design, culture and engagement,
              and the HR operations that keep it all running. For a company that has
              outgrown an office manager but isn&rsquo;t ready for a full-time CHRO,
              it&rsquo;s often exactly the right move.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
              That work is real and valuable. But notice what it is:{" "}
              <strong className="text-content">systems and programs</strong>. It&rsquo;s
              the People <em>function</em> &mdash; the infrastructure the whole
              company runs on. It is not, and isn&rsquo;t designed to be, a
              behavioral read on the specific person you&rsquo;re about to promote
              or stretch.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The distinction that matters
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
              Here&rsquo;s where People leaders get stuck. The systems are good. Comp
              is fair, hiring is solid, the engagement scores are fine. And you still
              can&rsquo;t say, with confidence, which of two people is ready to run
              the bigger team &mdash; or whether the strong interviewer will still be
              strong six months in. Adding more systems doesn&rsquo;t answer it,
              because the question was never about systems.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
              Whether a specific person delivers is a <strong className="text-content">behavioral</strong>{" "}
              question &mdash; do they take initiative, follow through when it&rsquo;s
              hard, and adapt under new demands? A review cycle and a competency grid
              describe that in the abstract; they don&rsquo;t{" "}
              <Link href="/guides/behavioral-vs-personality-tests" className="font-semibold text-green underline-offset-2 hover:underline">
                measure the behavior itself
              </Link>{" "}
              over time. That&rsquo;s what a{" "}
              <Link href="/how-it-works" className="font-semibold text-green underline-offset-2 hover:underline">
                Prove cycle
              </Link>{" "}
              does: it scores real action across six weeks into a{" "}
              <Link href="/guides/measure-commitment" className="font-semibold text-green underline-offset-2 hover:underline">
                Commitment Quotient
              </Link>{" "}
              &mdash; a read of who actually delivers. CQ results may be used to
              identify coaching focus areas, allocate development investment, design
              team interventions, and support individual self-directed growth. CQ
              results may not be used, in whole or in part, as a factor in hiring,
              candidate screening, termination, demotion, discipline, compensation,
              or as a gate on promotion eligibility.
            </p>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Who answers which
            </h2>
            <div className="overflow-x-auto rounded-[16px] border border-edge-light bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b border-edge-light text-[12px] font-bold uppercase tracking-[.04em] text-content-faint">
                    <th className="p-4"></th>
                    <th className="p-4">A fractional CPO</th>
                    <th className="p-4 text-green">Prove (CQ)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.attr} className="border-t border-edge-light align-top">
                      <td className="p-4 font-bold text-content">{r.attr}</td>
                      <td className="p-4 text-[#615B4F]">{r.a}</td>
                      <td className="p-4 text-content">{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[13px] leading-[1.6] text-content-faint">
              A CQ result reflects observed behavior during a defined window and is
              valid for twelve months. Anyone assessed receives their own result and
              may request re-assessment at any time.
            </p>
          </div>
        </Container>
      </Section>

      {/* Companion measure — team layer (reinforces Be Legendary) */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[18px] border-l-4 border-green bg-white p-8 sm:p-10">
            <Eyebrow>And if it&rsquo;s the team, not the individual</Eyebrow>
            <p className="mt-3.5 mb-4 text-[17px] leading-[1.6] text-content-muted">
              Sometimes the individuals are fine and the{" "}
              <em>leadership team</em> is the bottleneck &mdash; it can&rsquo;t
              commit to a decision, finish what it starts, or hold each other to a
              standard. That&rsquo;s a different layer. Prove measures whether your
              people can deliver; its companion, the{" "}
              <a
                href="https://www.belegendary.org/flag-model/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green underline-offset-2 hover:underline"
              >
                Flag Model
              </a>{" "}
              from Be Legendary, measures whether your team can execute. Same
              founder; two layers of the same question.
            </p>
            <a
              href="https://www.belegendary.org/flag-model/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-bold text-green underline-offset-2 hover:underline"
            >
              See the Flag Model &rarr;
            </a>
          </div>
        </Container>
      </Section>

      {/* For the People leader */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[18px] bg-paper-2 p-8 sm:p-10">
            <Eyebrow>If the promotion calls land on you</Eyebrow>
            <p className="mt-3.5 mb-4 text-[17px] leading-[1.62] text-content">
              CHROs, Heads of People, and fractional CPOs are often the ones on the
              hook when a promotion goes sideways or a key hire vanishes when it gets
              hard. You keep owning the function; Prove gives you the one thing the
              function can&rsquo;t generate on its own &mdash; behavioral proof of who
              can carry more. When the right person gets the nod and delivers,
              it&rsquo;s your call that made it happen.
            </p>
            <p className="m-0 text-[15.5px] leading-[1.6] text-content-muted">
              Not sure whether you have a systems gap or a who-delivers gap?
              That&rsquo;s the first conversation &mdash; and we&rsquo;ll tell you
              honestly, even if the answer is a fractional CPO and not Prove.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Straight answers
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[14px] border border-edge-light bg-white px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-[17px] font-bold marker:content-none">
                    {f.q}
                  </summary>
                  <p className="m-0 mt-3 text-[15.5px] leading-[1.6] text-content-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Build the function. Then bet on proof.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we&rsquo;ll show you where a fractional CPO ends and
            behavioral proof begins &mdash; and which one you actually need next.
          </p>
          <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
            Book a call
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
