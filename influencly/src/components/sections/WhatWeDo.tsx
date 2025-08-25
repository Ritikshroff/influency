import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";

export default function WhatWeDo() {
  return (
    <section className="bg-slate-100/70">
      <Container className="py-14">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">Tailored Solutions for Talent and Influence</h2>
          </div>
          <p className="hidden md:block max-w-sm text-slate-600">Sed ac suscipit tellus, a volutpat erat. Proin sit amet fermentum massa. Cras tincidunt cursus auctor.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            title="Talent Management"
            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop"
            description="Complete talent lifecycle support from discovery to growth."
            className="xl:col-span-1 md:col-span-2 h-80"
          />
          <ServiceCard
            title="Influencer Marketing"
            imageUrl="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1600&auto=format&fit=crop"
            description="Campaign strategy, creator sourcing, and performance optimization."
            className="h-80"
          />
          <ServiceCard
            title="Content Strategy"
            imageUrl="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop"
            description="Storytelling and formats that resonate with your audience."
            className="h-80"
          />
          <ServiceCard
            title="Brand Partnership"
            imageUrl="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
            description="Meaningful collaborations that create measurable impact."
            className="h-80"
          />
          {/* Gradient CTA card */}
          <div className="h-80 rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-400 p-6 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Ready to elevate your brand? Let's make it happen with us!</h3>
              <p className="mt-3 text-white/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="self-end h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


