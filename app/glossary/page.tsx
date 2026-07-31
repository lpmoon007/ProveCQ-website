import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";

export const metadata: Metadata = {
  alternates: { canonical: "/glossary" },
  title:
    "People-Decision Glossary — Commitment, Capacity, Retention Terms",
  description:
    "Plain-English definitions of the terms behind better people decisions: Commitment Quotient, its three dimensions (Initiative, Follow-Through, Learnability) and 9 sub-behaviors, capacity, regretted attrition, quiet quitting, quality of hire, GWC, and more.",
};

const GLOSSARY_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "ProveCQ People-Decision Glossary",
  "hasDefinedTerm": [
    {"@type":"DefinedTerm","name":"Commitment Quotient (CQ)","description":"A behavioral signal scoring Initiative, Follow-Through, and Learnability under pressure to indicate who is ready for more scope."},
    {"@type":"DefinedTerm","name":"Initiative","description":"How consistently someone acts without being prompted."},
    {"@type":"DefinedTerm","name":"Follow-Through","description":"How consistently someone completes what they committed to."},
    {"@type":"DefinedTerm","name":"Learnability","description":"How consistently someone acts on feedback."},
    {"@type":"DefinedTerm","name":"Capacity","description":"In people decisions, the current ability to take on scope — time, energy, and behavioral readiness — as opposed to a fixed trait."},
    {"@type":"DefinedTerm","name":"Regretted attrition","description":"Turnover among people the company wanted to keep; a truer retention signal than overall turnover."},
    {"@type":"DefinedTerm","name":"Quiet quitting","description":"Doing the minimum required and no more; disengagement that looks like retention but withholds discretionary effort."},
    {"@type":"DefinedTerm","name":"Span of control","description":"The number of direct reports a manager oversees; too wide a span degrades coaching and engagement."},
    {"@type":"DefinedTerm","name":"Quality of hire","description":"A measure of how well a new hire performs and stays, ideally assessed by behavior in the first 90 days."},
    {"@type":"DefinedTerm","name":"GWC (Gets it, Wants it, Capacity)","description":"An EOS framework for evaluating whether a person fits a seat; Capacity is the component Prove makes measurable."},
    {"@type":"DefinedTerm","name":"Proactive Start","description":"A sub-behavior of Initiative: starting on what needs doing before being asked or assigned, rather than waiting for direction."},
    {"@type":"DefinedTerm","name":"Closes the loop","description":"A sub-behavior of Initiative: carrying work all the way to done — especially the unglamorous last mile — not just starting strong."},
    {"@type":"DefinedTerm","name":"Resourcefulness","description":"A sub-behavior of Initiative: finding a way around obstacles with the access and tools at hand instead of stalling until the path is cleared."},
    {"@type":"DefinedTerm","name":"Resilience","description":"A sub-behavior of Follow-Through: recovering from setbacks and staying in the work after a failure rather than deflating or disengaging."},
    {"@type":"DefinedTerm","name":"Ownership","description":"A sub-behavior of Follow-Through: taking responsibility for outcomes — including the messy and shared ones — instead of assigning blame."},
    {"@type":"DefinedTerm","name":"Long-Game Drive","description":"A sub-behavior of Follow-Through: sustaining effort toward a payoff that isn't immediate, staying motivated when the reward is distant."},
    {"@type":"DefinedTerm","name":"Openness to Feedback","description":"A sub-behavior of Learnability: taking correction without defensiveness and acting on it, rather than protecting ego or track record."},
    {"@type":"DefinedTerm","name":"Self-Awareness","description":"A sub-behavior of Learnability: an accurate read of one's own strengths and gaps — the starting point for real improvement."},
    {"@type":"DefinedTerm","name":"Growth Orientation","description":"A sub-behavior of Learnability: actively seeking to get better without being pushed, treating skill as something built rather than fixed."}
  ]
}`;

/** The 9 CQ sub-behaviors, grouped under the three measured dimensions. */
const SUBTRAITS: {
  dim: string;
  question: string;
  href: string;
  items: { name: string; def: string }[];
}[] = [
  {
    dim: "Initiative",
    question: "Do they act without being told?",
    href: "/guides/the-science-behind-cq",
    items: [
      { name: "Proactive Start", def: "Starting on what needs doing before being asked or assigned — moving first instead of waiting for direction." },
      { name: "Closes the loop", def: "Carrying work all the way to done, especially the unglamorous last mile — not just starting strong." },
      { name: "Resourcefulness", def: "Finding a way around obstacles with the access and tools at hand, instead of stalling until someone clears the path." },
    ],
  },
  {
    dim: "Follow-Through",
    question: "Do they hold when it gets hard?",
    href: "/guides/the-science-behind-cq",
    items: [
      { name: "Resilience", def: "Recovering from setbacks and staying in the work after a failure, rather than deflating or checking out." },
      { name: "Ownership", def: "Taking responsibility for outcomes — including the messy and shared ones — instead of reaching for blame." },
      { name: "Long-Game Drive", def: "Sustaining effort toward a payoff that isn't immediate — staying motivated when the reward is still distant." },
    ],
  },
  {
    dim: "Learnability",
    question: "Do they evolve over time?",
    href: "/guides/the-science-behind-cq",
    items: [
      { name: "Openness to Feedback", def: "Taking correction without defensiveness and acting on it, rather than protecting ego or a track record." },
      { name: "Self-Awareness", def: "An accurate read of one's own strengths and gaps — the starting point for any real improvement." },
      { name: "Growth Orientation", def: "Actively seeking to get better without being pushed, treating skill as something built rather than fixed." },
    ],
  },
];

const TERMS: { term: ReactNode; def: ReactNode }[] = [
  {
    term: <>Commitment Quotient (CQ)</>,
    def: (
      <>
        A behavioral signal that scores Initiative, Follow-Through, and Learnability
        under pressure to indicate who&apos;s ready for more scope — measured from
        behavior, not self-report.
      </>
    ),
  },
  {
    term: <>Initiative</>,
    def: (
      <>
        How consistently someone acts without being prompted — spotting what needs
        doing and moving before being directed, especially when the situation is
        unclear.
      </>
    ),
  },
  {
    term: <>Follow-Through</>,
    def: (
      <>
        How consistently someone completes what they committed to — staying with a
        commitment when it gets hard. A behavior demonstrated in context, not a
        personality label.
      </>
    ),
  },
  {
    term: <>Learnability</>,
    def: (
      <>
        How consistently someone acts on feedback — the behavior observed when
        someone is given correction and asked to adjust.
      </>
    ),
  },
  {
    term: <>Capacity</>,
    def: (
      <>
        Current ability to take on scope — time, energy, and behavioral readiness
        — right now. A dynamic state, not a fixed trait, which is why it&apos;s
        better observed than assumed.
      </>
    ),
  },
  {
    term: <>GWC (Gets it, Wants it, Capacity)</>,
    def: (
      <>
        The EOS test for whether a person fits a seat. Capacity is the vaguest of
        the three — the component Prove makes measurable.{" "}
        <Link href="/for-eos/capacity">How Prove measures capacity &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Regretted attrition</>,
    def: (
      <>
        Turnover among the people you wanted to keep. A far truer retention signal
        than headline turnover, which lumps in departures you didn&apos;t mind.
      </>
    ),
  },
  {
    term: <>Quiet quitting</>,
    def: (
      <>
        Doing the minimum and no more — disengagement that looks like retention on
        a headcount report but withholds discretionary effort.{" "}
        <Link href="/guides/quiet-quitting">Spot quiet quitting early &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Span of control</>,
    def: (
      <>
        How many direct reports a manager oversees. Stretch it too wide and
        coaching, feedback, and engagement all degrade — a common scaling failure.
      </>
    ),
  },
  {
    term: <>Quality of hire</>,
    def: (
      <>
        How well a new hire performs and stays. Best assessed by behavior in the
        first 90 days, not by resume or interview impression.{" "}
        <Link href="/guides/first-90-days">Prove a hire in 90 days &rarr;</Link>
      </>
    ),
  },
  {
    term: <>The Peter Principle</>,
    def: (
      <>
        The tendency to promote people to the level of their incompetence —
        rewarding past performance with a role that needs different behavior.{" "}
        <Link href="/guides/failed-promotion">Why good people fail after promotion &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Engagement paradox</>,
    def: (
      <>
        The pattern of engagement scores falling while business performance holds —
        evidence that engagement and results were never the same thing.{" "}
        <Link href="/guides/state-of-engagement">The engagement paradox, explained &rarr;</Link>
      </>
    ),
  },
];

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: GLOSSARY_JSONLD }}
      />
      <Nav />
      <PageHero
        crumb="Glossary"
        eyebrow="Plain-English definitions"
        title={<>The people-decision glossary</>}
      >
        The language of betting on the right people — defined without the jargon.
      </PageHero>

      <Section tone="paper" className="!pb-10">
        <Container wide className="max-w-[1000px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TERMS.map((t, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-edge-light bg-white p-6"
              >
                <h2 className="m-0 mb-[7px] text-[18px] font-bold">{t.term}</h2>
                <p className="m-0 text-[14.5px] leading-[1.6] text-[#575249] [&_a]:text-green">
                  {t.def}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The 9 CQ sub-behaviors, grouped by dimension */}
      <Section tone="paper2">
        <Container wide className="max-w-[1000px]">
          <div className="mb-8 max-w-[680px]">
            <h2 className="m-0 mb-3 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
              The 9 CQ sub-behaviors
            </h2>
            <p className="m-0 text-[16px] leading-[1.65] text-content-muted">
              The Commitment Quotient score rests on three measured dimensions.
              Each breaks down into three observable behaviors — the specific
              things Prove watches for in real work, rather than a personality
              label.{" "}
              <Link href="/guides/the-science-behind-cq" className="font-semibold text-green">
                See the first-principles science behind them &rarr;
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SUBTRAITS.map((group) => (
              <div
                key={group.dim}
                className="flex flex-col rounded-[18px] border border-edge-light bg-white p-6"
              >
                <div className="mb-1 font-display text-[19px] font-bold tracking-[-.01em]">
                  {group.dim}
                </div>
                <div className="mb-4 text-[13px] font-semibold uppercase tracking-[.04em] text-green">
                  {group.question}
                </div>
                <dl className="m-0 flex flex-col gap-3.5">
                  {group.items.map((it) => (
                    <div key={it.name}>
                      <dt className="text-[15px] font-bold text-content">
                        {it.name}
                      </dt>
                      <dd className="m-0 mt-0.5 text-[13.5px] leading-[1.5] text-[#575249]">
                        {it.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-5 text-center">
        <Container wide className="max-w-[1000px]">
          <p className="mx-auto mb-8 max-w-[680px] text-[13.5px] leading-[1.6] text-content-faint">
            A CQ result reflects observed behavior during a defined window and is
            valid for twelve months. Anyone assessed receives their own result and
            may request re-assessment at any time.
          </p>
          <ButtonLink href="/guides" variant="dark">
            Explore the full guides library &rarr;
          </ButtonLink>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
