import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/hiring-scorecard";

const DESCRIPTION =
  "A free hiring scorecard for behavioral interviews. Rate candidates 1–5 on Initiative, Follow-Through, and Learnability with clear anchors — so you decide on evidence, not the last good impression.";

export const metadata: Metadata = {
  title: "The Hiring Scorecard: Score a Behavioral Interview",
  description: DESCRIPTION,
  keywords: [
    "hiring scorecard",
    "interview scorecard",
    "how to score an interview",
    "structured interview scoring",
    "candidate scorecard template",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Hiring Scorecard: Score a Behavioral Interview",
    description:
      "Rate candidates 1–5 on Initiative, Follow-Through, and Learnability with clear anchors — free.",
    url: CANONICAL,
    type: "article",
  },
};

type Anchor = { level: string; band: string; tone: "green" | "amber" | "red"; body: string };
type Trait = { name: string; ask: string; anchors: Anchor[] };

const TRAITS: Trait[] = [
  {
    name: "Initiative",
    ask: "Did they act without being told?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Specific examples of spotting a gap and moving on it; outcomes clearly tied to their action. “I noticed,” “I stepped in,” “took action.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Takes initiative in familiar situations or when nudged; one example, but thin on the outcome or the motivation behind it.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Waits for direction; “that wasn't my responsibility”; hesitates; can't produce a concrete example.",
      },
    ],
  },
  {
    name: "Follow-Through",
    ask: "Did they follow through when it got hard?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Owns mistakes fast without defensiveness; persisted through a real setback; sustained a long-game goal. “I own that,” “kept going,” “persevered.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Some persistence, but tied to reward or external push; owns the easy mistakes and softens the hard ones.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Blames others; gives up when challenged; needs an external push; nothing genuinely hard was seen through.",
      },
    ],
  },
  {
    name: "Learnability",
    ask: "Do they act on feedback?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Sought out learning on their own; incorporated hard feedback with a concrete change; changed their mind on evidence. “Taught myself,” “reflected,” “pivoted.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Learns when required; accepts feedback, but the change is modest or slow.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Defensive about feedback; “they misunderstood”; rigid; no recent self-directed learning.",
      },
    ],
  },
];

const TONE_CLASS: Record<Anchor["tone"], string> = {
  green: "border-l-[#1F8B57] bg-[#E7F3EC]",
  amber: "border-l-[#E0A73E] bg-[#FBF1DA]",
  red: "border-l-[#D0492E] bg-[#F7E4DE]",
};
const TONE_LABEL: Record<Anchor["tone"], string> = {
  green: "text-green",
  amber: "text-[#B07E1E]",
  red: "text-signal-red",
};

const READS = [
  { case: "They agree", rec: "Trust the read", note: "Your scores and your gut point the same way. Bring the specific examples to the debrief so the whole panel reacts to evidence, not impressions." },
  { case: "They disagree", rec: "Probe the gap", note: "Your scores and your instinct diverge. That gap is the signal — it's where charm inflates a weak answer, or where a quiet operator gets underrated. Dig into it in the next round." },
  { case: "Thin evidence", rec: "Get more signal", note: "You couldn't tie a rating to a concrete example. Ask for a work sample or another example before you lean on the interview at all." },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to score a behavioral interview",
  description:
    "Score a candidate on Initiative, Follow-Through, and Learnability from their behavioral interview answers to decide on evidence instead of impression.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Ask behavioral questions", text: "Ask for specific past examples across Initiative, Follow-Through, and Learnability." },
    { "@type": "HowToStep", position: 2, name: "Rate each signal 1–5", text: "Score each signal against the anchors, and write down the exact example behind the score." },
    { "@type": "HowToStep", position: 3, name: "Review the evidence together", text: "Read the three signal scores next to the examples you noted, so the read rests on what candidates actually said and did." },
    { "@type": "HowToStep", position: 4, name: "Check it against your gut", text: "Compare your scores to your overall impression. Where they disagree, probe that gap in the next round." },
    { "@type": "HowToStep", position: 5, name: "Bring the notes to the debrief", text: "Take the scored examples into the hiring conversation so the panel discusses evidence, not impressions." },
  ],
};

const FAQ = [
  {
    q: "What is a hiring scorecard?",
    a: "A hiring scorecard is a simple, structured way to rate every candidate against the same defined criteria — here, Initiative, Follow-Through, and Learnability, each scored 1–5. It replaces a vague overall impression with evidence you can compare across candidates and across interviewers.",
  },
  {
    q: "Why use a scorecard instead of going with your gut?",
    a: "Unstructured interviews are where bias and false positives live — the confident talker scores high, the quiet operator gets underrated. A scorecard forces you to tie each rating to a specific example, which makes candidates comparable and surfaces the gap between polish and performance.",
  },
  {
    q: "How do you score a behavioral interview?",
    a: "Ask for a specific past example for each trait, rate it 1–5 against the anchors, and note the evidence. Then read your scores next to the examples and check them against your overall gut read. Where a score and your instinct disagree, that's exactly where to probe in the next round.",
  },
  {
    q: "Should a scorecard be the only thing you hire on?",
    a: "No. Use it alongside references, a real work sample, and — ideally — observed behavior in the first weeks. The scorecard sharpens the interview; it is a signal to guide better decisions, not a standalone gate or a legally validated assessment.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HiringScorecardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Hiring scorecard"
        eyebrow="Free resource · Hiring"
        title={<>Score the interview. Don&rsquo;t just &ldquo;feel&rdquo; it.</>}
      >
        The confident talker scores high in your head; the quiet operator gets
        underrated. A simple scorecard fixes that &mdash; rate every candidate
        1&ndash;5 on three concrete behaviors, so you capture evidence, not the
        last good impression. Free, no sign-up.
      </PageHero>

      <ArticleMeta
        headline="Score the interview. Don't just feel it."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Hiring scorecard", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            Pair this with the{" "}
            <Link href="/guides/behavioral-interview-questions" className="font-semibold text-green">
              behavioral interview questions
            </Link>{" "}
            &mdash; ask for a specific example, then score the answer against the
            anchors below. Rate each signal as you go, while the example is fresh.
          </p>
        </Container>
      </Section>

      {/* The scorecard */}
      {TRAITS.map((t) => (
        <Section key={t.name} tone="paper" className="!pt-0">
          <Container className="max-w-[900px]">
            <div className="rounded-[18px] border border-edge-light bg-white p-6 sm:p-7">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="m-0 font-display text-[22px] font-bold tracking-[-.01em]">
                  {t.name}
                </h2>
                <span className="text-[14px] font-semibold italic text-content-muted">
                  {t.ask} &nbsp;·&nbsp; Score 1&ndash;5
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {t.anchors.map((a) => (
                  <div
                    key={a.level}
                    className={`rounded-[12px] border-l-4 px-4 py-3 ${TONE_CLASS[a.tone]}`}
                  >
                    <div className={`mb-1 text-[12.5px] font-bold uppercase tracking-[.05em] ${TONE_LABEL[a.tone]}`}>
                      {a.level} &middot; {a.band}
                    </div>
                    <p className="m-0 text-[14px] leading-[1.5] text-[#3A362C]">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Decision logic */}
      <Section tone="paper2">
        <Container className="max-w-[820px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            Read the scores, then check them against your gut
          </h2>
          <p className="m-0 mb-6 text-[17px] leading-[1.7] text-content-muted">
            Lay the three signal scores next to the examples you wrote down. Then
            do the one step most interviewers skip: ask whether that read matches
            your overall impression. When they agree, trust it. When they
            don&rsquo;t,{" "}
            <strong>that disagreement is the most valuable signal in the room</strong>{" "}
            &mdash; it&rsquo;s where charm inflates a weak candidate, or where a
            quiet one is being underrated. The scorecard sharpens the
            conversation; it doesn&rsquo;t make the call for you.
          </p>
          <div className="flex flex-col gap-2.5">
            {READS.map((d) => (
              <div
                key={d.case}
                className="grid grid-cols-1 gap-1 rounded-[12px] border border-edge-light bg-white px-5 py-3.5 sm:grid-cols-[130px_140px_1fr] sm:items-baseline sm:gap-3"
              >
                <span className="font-display text-[16px] font-bold text-content">
                  {d.case}
                </span>
                <span className="text-[14px] font-bold text-green">{d.rec}</span>
                <span className="text-[14px] leading-[1.5] text-content-muted">
                  {d.note}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Responsible use */}
      <Section tone="paper">
        <Container className="max-w-[820px]">
          <div className="rounded-[16px] border-l-4 border-green bg-paper-2 px-6 py-5">
            <div className="eyebrow mb-2 text-green">A signal, not a gate</div>
            <p className="m-0 text-[15px] leading-[1.6] text-content-muted">
              The scorecard sharpens your interview &mdash; it doesn&rsquo;t
              replace references, a work sample, or the first 90 days. Use it to
              ask better questions and catch the gap between polish and
              performance, not to auto-reject anyone. It is directional, and it is
              not a legally validated assessment.{" "}
              <Link href="/ethics" className="font-semibold text-green">
                What CQ is &amp; isn&rsquo;t &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Hiring scorecard: FAQ
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
            The interview is a sample. Development is the work.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            A scorecard sharpens one hour in a room. Prove picks up after the
            hire &mdash; it follows the same three behaviors across real work, so
            you can see where to focus development and build one behavior at a time
            over a 42-day cycle.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/free-tools/certainty-diagnostic"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Take the free diagnostic &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/hiring-scorecard" />
      <Footer />
    </>
  );
}
