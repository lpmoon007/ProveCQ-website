import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "CQ vs. Engagement Surveys: Why Feelings Don't Predict Delivery",
  description:
    "Engagement surveys measure how employees feel; the Commitment Quotient measures how they behave under pressure. Here's why high engagement scores can hide poor delivery — and what to measure instead to see where to focus development.",
  alternates: { canonical: "/guides/cq-vs-engagement-surveys" },
};

const SURVEY = [
  "Measures how people feel",
  "Self-reported and periodic",
  "Anonymous, team-level",
  "Great for culture & climate",
  "Doesn't predict individual delivery",
  "Can stay high while performance slips",
];

const CQ = [
  "Measures how people behave",
  "Observed over a six-week window",
  "Individual, development-focused",
  "Built to focus coaching & development",
  "Shows where to develop toward more scope",
  "Surfaces the say-do gap",
];

export default function CqVsEngagementSurveysGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › CQ vs. engagement surveys"
        eyebrow="Comparison"
        title="CQ vs. engagement surveys"
      >
        They answer different questions. One tells you how your team{" "}
        <em>feels</em>. The other shows you where each person{" "}
        <em>follows through</em>. You need both — but only one points to where to
        focus development.
      </PageHero>

      <ArticleMeta
        headline="CQ vs. engagement surveys"
        description="Engagement surveys measure how employees feel; the Commitment Quotient measures how they behave under pressure. Here's why high engagement scores can hide poor delivery — and what to measure instead to see where to focus development."
        canonical="/guides/cq-vs-engagement-surveys"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "CQ vs. engagement surveys",
            url: "/guides/cq-vs-engagement-surveys",
          },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[820px] rounded-[12px] border-l-4 border-green bg-paper-2 px-7 py-6">
            <Eyebrow>Short answer</Eyebrow>
            <p className="m-0 mt-2 text-[16.5px] leading-[1.6] text-[#2A261D]">
              Engagement surveys measure <strong>sentiment</strong> — how people
              feel about their work and environment. CQ measures{" "}
              <strong>behavior under pressure</strong> — Initiative, Follow-Through,
              and Learnability. Sentiment is worth tracking, but it doesn&rsquo;t
              tell you who follows through when it&rsquo;s hard. A team can score
              high on engagement and still miss deadlines and dodge ownership. A CQ
              result reflects observed behavior during a defined window and is valid
              for twelve months. Anyone assessed receives their own result and may
              request re-assessment at any time.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-edge-light bg-white p-7">
              <div className="mb-3 font-display text-[14px] font-bold tracking-[.05em] text-[#8A8474]">
                ENGAGEMENT SURVEY
              </div>
              <ul className="m-0 list-disc pl-[18px] text-[15px] leading-[1.75] text-[#575249]">
                {SURVEY.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] bg-ink p-7 text-paper on-dark">
              <div className="mb-3 font-display text-[14px] font-bold tracking-[.05em] text-green-soft">
                COMMITMENT QUOTIENT
              </div>
              <ul className="m-0 list-disc pl-[18px] text-[15px] leading-[1.75] text-[#B8B4A6]">
                {CQ.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-3.5 font-display text-[28px] font-bold tracking-[-.02em]">
              The &ldquo;engagement paradox&rdquo;
            </h2>
            <p className="mb-4 text-[17px] leading-[1.7] text-[#3A362C]">
              Global engagement has fallen for three straight years while the
              economy kept growing. If engagement scores captured what actually
              drives results, that gap couldn&rsquo;t persist. It can — because
              feeling engaged and behaving in ways that deliver are different
              things. Use engagement to improve your environment.{" "}
              <Link href="/guides/state-of-engagement" className="text-green">
                See the 2026 State of Engagement &rarr;
              </Link>
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-[#3A362C]">
              The point isn&rsquo;t to abandon engagement surveys. It&rsquo;s to
              stop asking a sentiment tool to answer a behavioral question.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection title="See where to focus your team's development.">
        See how a Prove cycle scores the behaviors behind follow-through &mdash; so
        you know where to coach and build over the next cycle.
      </CTASection>

      <RelatedGuides current="/guides/cq-vs-engagement-surveys" />
      <Footer />
    </>
  );
}
