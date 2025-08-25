import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-transparent py-3">
      <Container>
        <div className="rounded-full border border-slate-200 bg-white/95 shadow-sm px-3 sm:px-5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
            <span className="font-semibold text-lg sm:text-xl">Influencely</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#">Home</a>
            <a className="hover:text-indigo-600" href="#">About Us</a>
            <div className="relative group">
              <button className="inline-flex items-center gap-1 hover:text-indigo-600">Our Services
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-44">
                <a href="#" className="block px-3 py-2 rounded hover:bg-slate-50">Our Services</a>
                <a href="#" className="block px-3 py-2 rounded hover:bg-slate-50">Service Detail</a>
              </div>
            </div>
            <div className="relative group">
              <button className="inline-flex items-center gap-1 hover:text-indigo-600">Blog
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <div className="relative group">
              <button className="inline-flex items-center gap-1 hover:text-indigo-600">Pages
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <a className="hover:text-indigo-600" href="#">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden sm:inline-flex">Get Started</Button>
            <details className="md:hidden relative">
              <summary className="list-none p-2 rounded-full border border-slate-200 inline-flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2">
                <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Home</a>
                <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">About Us</a>
                <details>
                  <summary className="px-3 py-2 rounded cursor-pointer hover:bg-slate-50">Our Services</summary>
                  <div className="pl-3">
                    <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Our Services</a>
                    <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Service Detail</a>
                  </div>
                </details>
                <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Blog</a>
                <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Pages</a>
                <a className="block px-3 py-2 rounded hover:bg-slate-50" href="#">Contact Us</a>
                <Button className="mt-2 w-full">Get Started</Button>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  )
}


