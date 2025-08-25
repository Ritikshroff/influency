export default function RatingCard() {
  return (
    <div className="rounded-3xl p-6 text-white bg-[radial-gradient(ellipse_at_top,rgba(39,62,106,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.9),#0b1220_60%)]">
      <div className="flex items-center gap-1 text-indigo-300">
        {Array.from({length:5}).map((_,i)=>(
          <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        ))}
      </div>
      <div className="mt-4 text-5xl font-extrabold">4.75/5 <span className="text-base align-middle ml-2 font-normal">Ratings</span></div>
      <div className="mt-2 text-sm text-white/90">Based on 2,730 reviews from our partners</div>
    </div>
  )
}


