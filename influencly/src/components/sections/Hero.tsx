import Button from "../ui/Button";
import Container from "../ui/Container";
import heroimg from "../../assets/joyful-multicultural-business-entrepreneurs-lookin-2024-11-14-16-09-13-utc.jpg"

export default function Hero() {
  return (
    <section className="bg-slate-100/70">
      <Container className="pt-10 md:pt-14 pb-8">
        {/* Top row: headline on left, copy + CTAs on right */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-[40px] sm:text-[56px] md:text-[68px] leading-[1.05] font-black tracking-tight">
              Transforming Talent
              <br/> into <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Influence</span>
            </h1>
          </div>
          <div className="md:pt-3">
            <p className="text-slate-600 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl aliquam ut consectetur maecenas eros. Efficitur consectetur sed mi lectus odio morbi.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <Button>Discover More</Button>
              <a href="#" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-indigo-600">
                Meet Our Talent
                <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
        {/* Full-width image under the text */}
        <div className="mt-8 md:mt-10 overflow-hidden rounded-[28px] shadow-sm">
          <img className="w-full object-cover" src={heroimg} alt="Hero group"/>
        </div>
      </Container>
    </section>
  )
}


