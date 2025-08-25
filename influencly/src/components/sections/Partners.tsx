import Container from "../ui/Container";
import logocompny1 from "../../assets/Logo-51.png"
import logocompny2 from "../../assets/Logo-49.png"
import logocompny3 from "../../assets/Logo-47.png"
import logocompny4 from "../../assets/Logo-50.png"
import logocompny5 from "../../assets/Logo-40.png"
import logocompny6 from "../../assets/Logo-52.png"

export default function Partners() {
  return (
    <section className="bg-white">
      <Container className="py-12">
        <p className="text-center text-slate-700 text-sm sm:text-base">Our Partners in Success, The Brands Behind the <span className="text-indigo-600 font-semibold">Stars</span></p>
        {/* Smooth marquee animation on larger screens; static grid on mobile */}
        <div className="mt-8 hidden md:block overflow-hidden">
          <div className="flex items-center gap-16 opacity-90 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[logocompny1,logocompny2,logocompny3,logocompny4,logocompny5,logocompny6,logocompny1,logocompny2,logocompny3,logocompny4,logocompny5,logocompny6].map((src, i) => (
              <img key={i} src={src} alt="brand" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"/>
            ))}
          </div>
        </div>
        <div className="md:hidden mt-6 grid grid-cols-2 gap-6 items-center opacity-90">
          {[logocompny1,logocompny2,logocompny3,logocompny4,logocompny5,logocompny6].map((src,i)=> (
            <img key={i} src={src} alt="brand" className="h-9 w-auto object-contain mx-auto grayscale"/>
          ))}
        </div>
      </Container>
    </section>
  )
}


