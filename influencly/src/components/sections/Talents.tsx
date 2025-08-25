import Container from "../ui/Container";
import Button from "../ui/Button";
import TalentCard from "../ui/TalentCard";

export default function Talents() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">Meet the Creators Leading the Way in Influence</h2>
          </div>
          <Button className="self-start">More Talents</Button>
        </div>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Left CTA card */}
          <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(39,62,106,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.9),#0b1220_60%)] text-white p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Join our talent family now and let’s work together</h3>
              <p className="mt-3 text-white/90">Take control of your influence and unlock new opportunities. Apply today and let’s turn your influence into success.</p>
            </div>
            <div className="mt-6">
              <Button>Join Us Now</Button>
            </div>
          </div>

          <TalentCard
            name="Clarisa Anne"
            role="Model"
            imageUrl="https://images.unsplash.com/photo-1519336555923-59661f41bb86?q=80&w=1600&auto=format&fit=crop"
          />
          <TalentCard
            name="Jackson Dawn"
            role="Musician"
            imageUrl="https://images.unsplash.com/photo-1545579133-99bb5ab4d2a9?q=80&w=1600&auto=format&fit=crop"
            showSocial
          />
          <TalentCard
            name="Michelle"
            role="Beauty Vlogger"
            imageUrl="https://images.unsplash.com/photo-1611162616305-c69b3fa7f08a?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </Container>
    </section>
  )
}


