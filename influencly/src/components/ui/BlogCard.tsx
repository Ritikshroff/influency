type Props = {
  title: string
  excerpt: string
  date: string
  imageUrl: string
}

export default function BlogCard({ title, excerpt, date, imageUrl }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl">
      <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-3 rounded-2xl ring-1 ring-white/25" />
      <div className="relative z-10 p-6 text-white flex flex-col justify-end h-[28rem]">
        <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        <div className="mt-3 flex items-center gap-2 text-white/90 text-sm">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>
          {date}
        </div>
        <p className="mt-3 text-white/90 line-clamp-3">{excerpt}</p>
        <div className="mt-5 flex items-center gap-2 text-indigo-300">
          <span>Read More</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>
    </article>
  )
}


