import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">
      <Container className="py-12">
        {/* Top nav links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
          <div className="text-xl font-semibold">Influencely</div>
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-indigo-400">Home</a>
            <a href="#" className="hover:text-indigo-400">About Us</a>
            <a href="#" className="hover:text-indigo-400">Our Services</a>
            <a href="#" className="hover:text-indigo-400">Our Talents</a>
            <a href="#" className="hover:text-indigo-400">Contact Us</a>
          </nav>
        </div>

        <div className="my-6 h-px bg-white/10" />

        {/* Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-semibold">About Us</h4>
            <p className="mt-3 text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="mt-5 flex gap-3">
              <a className="h-10 w-10 rounded-lg bg-indigo-500/25 grid place-items-center" href="#" aria-label="facebook"><FaFacebookF /></a>
              <a className="h-10 w-10 rounded-lg bg-indigo-500/25 grid place-items-center" href="#" aria-label="instagram"><FaInstagram /></a>
              <a className="h-10 w-10 rounded-lg bg-indigo-500/25 grid place-items-center" href="#" aria-label="linkedin"><FaLinkedinIn /></a>
              <a className="h-10 w-10 rounded-lg bg-indigo-500/25 grid place-items-center" href="#" aria-label="youtube"><FaYoutube /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-3 text-white/90">
              {['Talent Management','Influencer Marketing','Content Creation & Strategy','Brand Partnership'].map((item)=> (
                <li key={item} className="flex items-center gap-2"><FaChevronRight className="text-indigo-400"/> {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-white/90">
              <li className="flex items-center gap-3"><FaPhoneAlt className="text-indigo-400"/> +012 345 6789</li>
              <li className="flex items-center gap-3"><FaEnvelope className="text-indigo-400"/> mail@influencely.net</li>
              <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-indigo-400"/> 219 City Star, Someplace, New York, 619027</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Newsletter</h4>
            <p className="mt-3 text-white/80">Sed vitae felis sit amet libero tempor ornare eros aliquam nibh tincidunt.</p>
            <div className="mt-4 flex gap-3">
              <input placeholder="Email" className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 outline-none"/>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-white/10" />
        <div className="py-6 text-center text-sm text-white/70">Influencely © {new Date().getFullYear()} All Rights Reserved</div>
      </Container>
    </footer>
  )
}


