import { useEffect, useRef, useState } from 'react'

type Props = {
  label: string
  percent: number // 0-100
}

export default function AnimatedBar({ label, percent }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true)
        }
      })
    }, { threshold: 0.3 })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    // Animate from 0 to target
    const start = performance.now()
    const duration = 1200
    const frame = (t: number) => {
      const k = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - k, 3)
      setProgress(Math.round(percent * eased))
      if (k < 1) requestAnimationFrame(frame)
    }
    const r = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(r)
  }, [visible, percent])

  return (
    <div ref={ref} className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-white/90">
        <span>{label}</span>
        <span className="px-2 py-0.5 rounded-md bg-white/10 text-white">{progress}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}


