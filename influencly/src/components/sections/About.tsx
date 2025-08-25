import Container from "../ui/Container";

export default function About() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        {/* Top CTA only */}
        <div className="flex items-center justify-end">
          <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-2 text-white text-sm font-medium">More About Us</a>
        </div>
        {/* Big heading spanning the section */}
        <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl">Pioneering the Future of Talent and Influence Together</h2>

        {/* Content row */}
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <img className="rounded-[26px] w-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format&fit=crop" alt="Office"/>
          <div>
            <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class nullam nam egestas convallis integer penatibus lobortis. Varius magna semper primis ut auctor justo lacus dictum morbi. Mauris luctus scelerisque velit pulvinar ligula sed dolor integer. Et blandit tortor curae vitae quis ipsum non.</p>
            <blockquote className="mt-5 pl-4 border-l-4 border-indigo-500 italic text-slate-800">“Leo enim hendrerit dolor enim hac augue. Senectus ullamcorper mollis posuere fringilla sit velit. Nisl velit etiam per mus cursus suscipit habitasse vivamus viverra.”</blockquote>
            <ul className="mt-6 space-y-3 text-slate-800">
              <li className="flex items-center gap-3"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg></span> Montes class leo maecena</li>
              <li className="flex items-center gap-3"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg></span> Aenean in varius ante nibh</li>
              <li className="flex items-center gap-3"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg></span> Volutpat porta neque primis</li>
              <li className="flex items-center gap-3"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg></span> Etiam sit amet cursus arcu</li>
            </ul>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white px-8 py-8 text-center">
                <div className="text-5xl font-extrabold">12+</div>
                <div className="mt-2 text-sm opacity-90">Years of Experience</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white px-8 py-8 text-center">
                <div className="text-5xl font-extrabold">270+</div>
                <div className="mt-2 text-sm opacity-90">Creative Talents</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


