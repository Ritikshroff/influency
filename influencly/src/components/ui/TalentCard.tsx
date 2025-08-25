type Props = {
  name: string
  role: string
  imageUrl: string
  showSocial?: boolean
}

export default function TalentCard({ name, role, imageUrl, showSocial }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      <img src={imageUrl} alt={name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-3 rounded-2xl ring-1 ring-white/25" />

      {/* Hover footer info */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between">
          <div className="backdrop-blur-sm bg-black/40 rounded-2xl px-4 py-3 text-white w-max transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-white/90">{role}</div>
          </div>
          <button className="h-12 w-12 rounded-full bg-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        {showSocial && (
          <div className="mt-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {['in','ig','t','x'].map((k) => (
              <span key={k} className="h-9 w-9 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/></svg>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


