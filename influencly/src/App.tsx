import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Partners from './components/sections/Partners'
import About from './components/sections/About'
import WhatWeDo from './components/sections/WhatWeDo'
import WhyWorkWithUs from './components/sections/WhyWorkWithUs'
import Talents from './components/sections/Talents'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import LatestUpdates from './components/sections/LatestUpdates'

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <WhatWeDo />
      <WhyWorkWithUs />
      <Talents />
      <Testimonials />
      <FAQ />
      <LatestUpdates />
      <Footer />
    </div>
  )
}

export default App
