type Props = {
  title: string
  imageUrl: string
  description?: string
  className?: string
}

export default function ServiceCard({ title, imageUrl, description = '', className = '' }: Props) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-slate-200 ${className}`.trim()}>
      <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-3 rounded-2xl ring-1 ring-white/20" />
      </div>
      <div className="relative z-10 h-full w-full p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow">{title}</h3>
        {description && (
          <p className="mt-2 max-w-sm text-slate-200/90 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{description}</p>
        )}
      </div>
    </div>
  )
}


