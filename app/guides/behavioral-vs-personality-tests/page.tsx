import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title:
    "Behavioral Measurement vs. Personality & Psychometric Tests",
  description:
    "Personality and psychometric tests measure who someone says they are — their traits. Behavioral measurement scores what they actually do. Here's the difference between all three, and which one fits which decision.",
  alternates: { canonical: "/guides/behavioral-vs-personality-tests" },
};

// Three instruments, three columns. The point is the category difference, not
// a ranking — psychometrics are rigorous; they just answer a different question.
const COLS = [
  {
    label: "Personality test",
    tone: "red" as const,
    rows: [
      "Self-reported",
      "Casual — often unnormed",
      "Describes traits / working style",
      "One moment in time",
      "Easy to answer aspirationally",
    ],
  },
  {
    label: "Psychometric instrument",
    tone: "amber" as const,
    rows: [
      "Self-reported, but standardized & normed",
      "Rigorous, validated scales (e.g. Big Five, Hogan, PI)",
      "Measures stable latent traits",
      "A disposition, not this week's behavior",
      "Answers “who is this person, broadly?”",
    ],
  },
  {
    label: "Behavioral measurement (CQ)",
    tone: "green" as const,
    rows: [
      "Observed action, not self-report",
      "40+ datapoints over ~six weeks",
      "Measures what they did, in role",
      "A read of behavior now — re-runnable",
      "Answers “will this person deliver here?”",
    ],
  },
];

// What to look for when you want a behavioral read, not a self-portrait.
const CHECKLIST = [
  "Score what people did, not what they say they are like — pull evidence from real work, not a questionnaire.",
  "Collect many datapoints over weeks, so one good day or one bad day cannot swing the result.",
  "Watch behavior under genuine demand — a stretch task, a deadline, an ambiguous problem — where a rehearsed answer won't hold.",
  "Separate the three behaviors that matter for delivery: Initiative, Follow-Through, and Learnability.",
  "Re-run the read on a cadence to catch drift, rather than treating one assessment as permanent truth.",
];

// FAQ — the format AI answer engines extract and cite. Faithful to the article:
// three distinct instruments; CQ is behavioral measurement, a different category.
const FAQ = [
  {
    q: "What is the difference between a behavioral assessment and a personality test?",
    a: "A personality test is self-reported — it asks people to describe their own traits, so it captures who someone thinks (or wants you to think) they are. A behavioral assessment scores what a person actually does under real conditions, over time. One is a paper exam about driving; the other is the test drive.",
  },
  {
    q: "What is a psychometric test, and how is it different from a casual personality test?",
    a: "A psychometric test is a standardized, normed, and validated instrument for measuring stable psychological traits — think the Big Five, Hogan, or the Predictive Index. It is far more rigorous than a pop-quiz personality test: it is built and validated by psychologists, scored against population norms, and checked for reliability. But it is still fundamentally a self-report about a person's broad disposition — who they tend to be — rather than a record of what they did in a specific role.",
  },
  {
    q: "Is the Commitment Quotient a psychometric or personality test?",
    a: "No. CQ is behavioral measurement, a different category. A psychometric or personality test measures stable internal traits from self-report; CQ measures observed commitment behavior — what a person actually does in a work context, over time. It is not a claim about who someone is, it does not slot people into fixed types, and it is not a replacement for a validated psychometric. It answers a different question.",
  },
  {
    q: "Is behavioral measurement better than a psychometric like the Predictive Index?",
    a: "It is not better — it is a different instrument for a different question. A psychometric like the Predictive Index gives you a rigorous read on someone's stable dispositions, useful for understanding working styles and team fit. Behavioral measurement gives you a read on whether this person is delivering, in this role, right now. Comparing them head-to-head is apples to oranges; many teams use a psychometric to understand a person and a behavioral read to see what they actually do.",
  },
  {
    q: "Why look at behavior rather than a trait score for a delivery decision?",
    a: "Delivery is an outcome of action taken under real pressure — deadlines, ambiguity, work nobody assigned. When you observe that action directly, you are looking at the same category of thing you care about. A trait label sits one step removed from action and is easy to answer aspirationally on a form. For a high-stakes call about whether someone will deliver, a direct read of behavior is the more relevant signal.",
  },
  {
    q: "Can you game a behavioral assessment?",
    a: "It is far harder than shaping a self-report. On any questionnaire — casual or psychometric — you are choosing answers. Under a real deadline or a genuinely ambiguous problem, sustaining behavior you do not have, over dozens of datapoints across weeks, is close to impossible.",
  },
  {
    q: "Are personality and psychometric tests useless for hiring?",
    a: "Not at all. A good psychometric can help you understand working styles, spark honest conversation, and think about team composition. The mistake is treating a self-report about traits as a prediction of delivery. For that specific question — will this person do the work when it is hard — you want observed behavior, which is what CQ measures.",
  },
  {
    q: "How does Prove measure behavior instead of personality?",
    a: "Prove scores three behaviors — Initiative, Follow-Through, and Learnability — from real work over roughly six weeks, aggregating 40+ datapoints into the Commitment Quotient. Because the signal comes from what people did under real demand, it is hard to fake and can be re-run to catch drift.",
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

// DefinedTerm schema — definitional content is disproportionately citable.
const termsJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Behavioral measurement vs. self-report assessment",
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      name: "Behavioral measurement",
      description:
        "A method of assessing a person from observed action — what they actually do, scored against a defined set of behaviors and gathered over time — rather than from self-reported traits. The Commitment Quotient (CQ) is a behavioral measurement.",
    },
    {
      "@type": "DefinedTerm",
      name: "Psychometric test",
      description:
        "A standardized, normed, and validated self-report instrument for measuring stable psychological traits (e.g. the Big Five, Hogan, the Predictive Index). It measures a person's broad disposition, not their behavior in a specific role.",
    },
    {
      "@type": "DefinedTerm",
      name: "Personality test",
      description:
        "A self-report questionnaire that asks a person to describe their own traits or working style. Unlike a psychometric instrument it may be casual and unnormed, and unlike behavioral measurement it captures self-image rather than observed action.",
    },
  ],
};

export default function BehavioralVsPersonalityGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Behavioral vs. personality & psychometric"
        eyebrow="How it works"
        title="Behavioral measurement vs. personality and psychometric tests."
      >
        They get lumped together, but they are three different instruments
        answering three different questions. Two ask people to describe
        themselves. One watches what they actually do.
      </PageHero>

      <ArticleMeta
        headline="Behavioral measurement vs. personality and psychometric tests."
        description="Personality and psychometric tests measure who someone says they are; behavioral measurement scores what they actually do. The difference between all three — and which fits which decision."
        canonical="/guides/behavioral-vs-personality-tests"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "Behavioral vs. personality & psychometric",
            url: "/guides/behavioral-vs-personality-tests",
          },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A <strong className="text-paper">personality test</strong> is a
              casual self-report of traits. A{" "}
              <strong className="text-paper">psychometric instrument</strong> is a
              rigorous, validated self-report of stable traits &mdash; better built,
              but still about who someone <em>is</em>. Both describe disposition.{" "}
              <strong className="text-paper">Behavioral measurement</strong> &mdash;
              what CQ does &mdash; scores what a person actually <em>did</em>, in
              role, over time. Different question, different instrument. For a
              high-stakes call about who will deliver, you want the behavior.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Three instruments, three questions
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The confusion comes from lumping all three under &ldquo;assessments.&rdquo;
              They are not the same tool. A <strong>personality test</strong> is a
              self-report questionnaire &mdash; often casual, sometimes unnormed &mdash;
              that asks you to rate yourself against a list of traits and infers a
              profile from your answers.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A <strong>psychometric instrument</strong> is the rigorous end of
              self-report. Tools like the Big Five, Hogan, or the Predictive Index
              are built and validated by psychologists, scored against population
              norms, and checked for reliability. That rigor is real and worth
              respecting. But notice what it is rigorous <em>about</em>: a person&rsquo;s
              stable, broad dispositions &mdash; who they tend to be across situations.
              It is still, at bottom, a self-report about traits, captured at one
              point in time.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              <strong>Behavioral measurement</strong> starts from the opposite end.
              Instead of asking a person to describe themselves, it observes what
              they actually do &mdash; scored against a defined set of behaviors,
              gathered over time, under real demand. The unit is action, not
              self-image. That is the category CQ lives in: it scores{" "}
              <Link href="/guides/measure-commitment" className="font-semibold text-green underline-offset-2 hover:underline">
                Initiative, Follow-Through, and Learnability
              </Link>{" "}
              from real work, so the read reflects what someone did, not what they
              said about themselves.
            </p>
          </div>
        </Container>
      </Section>

      {/* CQ is not a psychometric — the category clarification */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Where psychometrics fit &mdash; and why CQ isn&rsquo;t one
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A validated psychometric is genuinely useful. If you want to
              understand someone&rsquo;s working style, think about how a team
              composes, or open an honest conversation about how a person operates,
              a good instrument earns its place. Those are real jobs, and a
              behavioral read does not replace them.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              But a psychometric answers &ldquo;who is this person, broadly?&rdquo;
              &mdash; not &ldquo;is this person delivering, in this role, right
              now?&rdquo; Those are different questions, and the second is the one
              that governs a promotion, a stretch assignment, or the keys to
              something that matters. That is why CQ is deliberately{" "}
              <em>not</em> a psychometric and not a personality test. It makes no
              claim about a person&rsquo;s fixed type or worth, and it is not a
              head-to-head replacement for the Predictive Index or Hogan. It is a
              different instrument for a different decision. CQ results may be used
              to identify coaching focus areas, allocate development investment,
              design team interventions, and support individual self-directed
              growth. CQ results may not be used, in whole or in part, as a factor
              in hiring, candidate screening, termination, demotion, discipline,
              compensation, or as a gate on promotion eligibility. A CQ result
              reflects observed behavior during a defined window and is valid for
              twelve months. Anyone assessed receives their own result and may
              request re-assessment at any time.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The practical version: use a psychometric to understand a person; use
              a behavioral read to see what they actually do. Many teams do both.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[980px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Side by side by side
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {COLS.map((c) => {
                const head =
                  c.tone === "green"
                    ? "text-green-soft"
                    : c.tone === "amber"
                      ? "text-signal-yellow"
                      : "text-signal-red";
                const dark = c.tone === "green";
                return (
                  <div
                    key={c.label}
                    className={`rounded-[16px] p-[26px] ${dark ? "bg-ink text-paper on-dark" : "border border-edge-light bg-white"}`}
                  >
                    <div className={`mb-3 font-display text-[14px] font-bold ${head}`}>
                      {c.label}
                    </div>
                    <ul
                      className={`m-0 list-disc pl-[18px] text-[14.5px] leading-[1.75] ${dark ? "text-[#B8B4A6]" : "text-[#615B4F]"}`}
                    >
                      {c.rows.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to run a behavioral read instead of a self-report
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Switching from a questionnaire to a behavioral read is mostly a change
              in what you collect and how long you collect it. In practice it comes
              down to a short checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHECKLIST.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Behavioral, personality &amp; psychometric: FAQ
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

      <CTASection title="Bet on the test drive, not the paper exam.">
        Book a call to see behavioral proof on your own team.
      </CTASection>

      <RelatedGuides current="/guides/behavioral-vs-personality-tests" />
      <Footer />
    </>
  );
}
