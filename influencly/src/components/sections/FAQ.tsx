import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const tabs = [
  { key: 'general', label: 'General' },
  { key: 'talent', label: 'Talent-Specific' },
  { key: 'brand', label: 'Brand-Specific' },
]

const faqs = {
  general: [
    { q: 'What does your agency do?', a: 'We connect brands with the right creators, manage collaborations end‑to‑end, and provide strategy, production and reporting.' },
    { q: 'Who can join your talent roster?', a: 'Creators with consistent content, clear niche and professional communication are welcome to apply.' },
    { q: 'Do I need a certain number of followers to apply?', a: 'Follower count helps, but we prioritize quality, engagement and brand fit over raw numbers.' },
  ],
  talent: [
    { q: 'How do I apply?', a: 'Send us your portfolio and links to your socials via the contact form; our team will review within 5–7 days.' },
    { q: 'Do you take a commission?', a: 'Yes. We work on a transparent commission model that covers negotiation, contracts and payments.' },
    { q: 'Will you help with content and contracts?', a: 'Absolutely. We support briefs, rates, contracts, usage terms and post‑campaign payments.' },
  ],
  brand: [
    { q: 'How do partnerships work?', a: 'Share your goals and budget; we shortlist creators, manage outreach, production and approvals.' },
    { q: 'Can you work with tight timelines?', a: 'Yes. With our vetted roster, we can activate campaigns in days, not weeks.' },
    { q: 'Do you provide reporting?', a: 'Every campaign includes performance tracking and a post‑campaign report with insights.' },
  ],
} as const

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(q === 'What does your agency do?')
  return (
    <div className={`rounded-2xl border ${open ? 'border-indigo-200 bg-white' : 'border-slate-200 bg-white'} overflow-hidden`}>
      <button onClick={() => setOpen((v) => !v)} className="w-full px-5 py-4 flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <span className="h-8 w-8 rounded-full bg-slate-100 grid place-items-center">{open ? '−' : '+'}</span>
      </button>
      {open && a && (
        <div className="px-5 pb-5 text-slate-600 border-t border-slate-100">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [active, setActive] = useState<'general' | 'talent' | 'brand'>('general')
  return (
    <section className="bg-slate-100/70">
      <Container className="py-16">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">Common Questions About Our Agency & Services</h2>
          <div className="hidden md:block max-w-xl text-slate-600">Sed ac suscipit tellus, a volutpat erat. Proin sit amet fermentum massa. Cras tincidunt cursus auctor.</div>
        </div>

        <div className="mt-8 grid lg:grid-cols-4 gap-6 items-start">
          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((t) => (
              <button key={t.key} onClick={() => setActive(t.key as any)} className={`w-full rounded-2xl px-6 py-4 text-left font-medium ${active===t.key? 'bg-indigo-500 text-white' : 'bg-white'}`}>{t.label}</button>
            ))}
          </div>

          {/* Accordions */}
          <div className="lg:col-span-2 space-y-4">
            {faqs[active].map((f) => (
              <Accordion key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          {/* Right CTA card (only visible on lg) */}
          <div className="hidden lg:block lg:col-span-1 row-span-3">
            <div className="rounded-3xl overflow-hidden">
              <div className="relative">
                <img className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="help"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-2xl font-semibold">Need more info? <br/>Reach out now!</div>
                  <p className="mt-2 text-white/90">Didn’t find what you were looking for? Reach out to us—we're happy to help!</p>
                  <div className="mt-4">
                    <Button>Contact Us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


