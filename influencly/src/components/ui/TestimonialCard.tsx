type Props = {
  avatar: string
  name: string
  title: string
  quote: string
  stars?: number
}

export default function TestimonialCard({ avatar, name, title, quote, stars = 5 }: Props) {
  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover"/>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-indigo-500">{title}</div>
        </div>
      </div>
      <p className="mt-4 text-slate-700 leading-relaxed">{quote}</p>
      <div className="mt-4 flex gap-1 text-indigo-500">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        ))}
      </div>
    </div>
  )
}


