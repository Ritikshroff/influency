import Container from "../ui/Container";

export default function Partners() {
  // Auto-import any logo files that match the pattern; avoids build errors if some are missing/renamed
  const logos = Object.values(
    import.meta.glob("../../assets/Logo-*.png", { eager: true, as: "url" }) as Record<string, string>
  ) as string[]
  const loop = logos.concat(logos) // create seamless marquee loop
  return (
    <section className="bg-white">
      <Container className="py-12">
        <p className="text-center text-slate-700 text-sm sm:text-base">Our Partners in Success, The Brands Behind the <span className="text-indigo-600 font-semibold">Stars</span></p>
        {/* Smooth marquee animation on larger screens; static grid on mobile */}
        <div className="mt-8 hidden md:block overflow-hidden">
          <div className="flex items-center gap-16 opacity-90 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
            {loop.map((src, i) => (
              <img key={i} src={src} alt="brand" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"/>
            ))}
          </div>
        </div>
        <div className="md:hidden mt-6 grid grid-cols-2 gap-6 items-center opacity-90">
          {logos.map((src,i)=> (
            <img key={i} src={src} alt="brand" className="h-9 w-auto object-contain mx-auto grayscale"/>
          ))}
        </div>
      </Container>
    </section>
  )
}


