import Container from "../ui/Container";
import TestimonialCard from "../ui/TestimonialCard";
import RatingCard from "../ui/RatingCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-100/70">
      <Container className="py-16">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">Words From Those Who've Worked With Us</h2>
          <div className="hidden md:block max-w-xl text-slate-600">Sed ac suscipit tellus, a volutpat erat. Proin sit amet fermentum massa. Cras tincidunt cursus auctor.</div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
              name="Olivia Carter"
              title="Brand Manager at Shine Glow"
              quote="In venenatis elementum quam, et tempor nunc. Curabitur enim dolor, convallis at porta sed quisque rutrum eget nibh..."
            />
            <RatingCard />
          </div>

          <div className="space-y-6">
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
              name="Sophia Clarke"
              title="Social Media Influencer"
              quote="Suspendisse rhoncus metus tortor, quis augue fringilla eros tristique a. Vestibulum in mollis et neque eget."
            />
            <TestimonialCard
              avatar="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200&auto=format&fit=crop"
              name="Ethan Williams"
              title="Head of Marketing at AETHR"
              quote="Donec dictum diam tellus, ut dictum dolor sit felis eu. Pellentesque aliquet tellus a mauris pellentesque laoreet."
            />
          </div>

          {/* Video Card */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200">
            <div className="relative">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="video"/>
              <button className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <div className="p-6">
              <div className="font-semibold">Richard Torres</div>
              <div className="text-indigo-500 text-sm">CEO of Bright Corp</div>
              <p className="mt-3 text-slate-700">“Aliquam turpis nisl, gravida laoreet lorem faucibus, malesuada auctor quam.”</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


