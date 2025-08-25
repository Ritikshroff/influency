import Container from "../ui/Container";
import AnimatedBar from "../ui/AnimatedBar";

export default function WhyWorkWithUs() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(39,62,106,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.9),#0b1220_60%)]" />
      <Container className="py-16 text-white">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">Passionate About Growth and Committed to Success</h2>
          </div>
          <p className="hidden md:block max-w-sm text-white/80">Sed ac suscipit tellus, a volutpat erat. Proin sit amet fermentum massa. Cras tincidunt cursus auctor.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          {/* Left bullet points */}
          <div className="space-y-8">
            {[
              { title: 'Proven Track Record', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
              { title: 'Industry Connections', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
              { title: 'Personalized Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="h-9 w-9 rounded-lg bg-indigo-500/30 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle stats + bars */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 p-6 text-center">
                <div className="text-5xl font-extrabold">98%</div>
                <div className="mt-1 text-sm text-white/95">Satisfaction Rate</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 p-6 text-center">
                <div className="text-5xl font-extrabold">20K+</div>
                <div className="mt-1 text-sm text-white/95">Creative Talents</div>
              </div>
            </div>
            <AnimatedBar label="Campaign Success Rate" percent={97} />
            <AnimatedBar label="Social Media Growth Rate" percent={92} />
            <AnimatedBar label="Campaign Engagement Rate" percent={95} />
          </div>

          {/* Right image with play button */}
          <div className="relative overflow-hidden rounded-3xl">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop" alt="team" />
            <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
              <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}


