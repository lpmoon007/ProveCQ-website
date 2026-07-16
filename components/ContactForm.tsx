"use client";

import { useState } from "react";

/**
 * "Send a note" form. Until the HubSpot CRM form integration lands (handoff §5:
 * "Forms POST to HubSpot CRM"), this composes a mailto to hello@provecq.com so
 * the control is functional rather than decorative. Swap the onSubmit handler
 * for a HubSpot Forms API POST when the portal/form IDs are provisioned.
 */
const FIELD =
  "w-full rounded-[10px] border border-edge-light bg-paper px-3.5 py-3 text-[15px] text-content outline-none transition-colors focus:border-green";

export default function ContactForm() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    company: "",
    decision: "",
  });

  function set(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Prove inquiry — ${form.first} ${form.last} (${form.company})`.trim(),
    );
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\nWork email: ${form.email}\nCompany · team size: ${form.company}\n\nThe people decision I'm facing:\n${form.decision}`,
    );
    window.location.href = `mailto:hello@provecq.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[18px] border border-edge-light bg-white p-7">
      <h2 className="mb-1.5 text-[20px] font-bold">Or send a note</h2>
      <p className="m-0 mb-5 text-[15px] leading-[1.5] text-content-muted">
        Tell us the decision you&rsquo;re facing and we&rsquo;ll come prepared.
      </p>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input className={FIELD} placeholder="First name" value={form.first} onChange={set("first")} required />
          <input className={FIELD} placeholder="Last name" value={form.last} onChange={set("last")} required />
        </div>
        <input className={FIELD} type="email" placeholder="Work email" value={form.email} onChange={set("email")} required />
        <input className={FIELD} placeholder="Company · team size" value={form.company} onChange={set("company")} />
        <textarea
          className={`${FIELD} resize-y`}
          rows={4}
          placeholder="The people decision you're facing"
          value={form.decision}
          onChange={set("decision")}
        />
        <button
          type="submit"
          className="mt-1 rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-ink-2"
        >
          Send
        </button>
      </div>
    </form>
  );
}
