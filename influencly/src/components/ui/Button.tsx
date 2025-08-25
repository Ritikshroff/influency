import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
}

const base = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors';
const variants = {
  primary: 'text-white bg-gradient-to-r from-indigo-500 to-sky-400 hover:from-indigo-600 hover:to-sky-500',
  outline: 'border border-slate-300 hover:bg-slate-50'
} as const

export default function Button({ children, href = '#', variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`.trim()}>
      {children}
    </a>
  )
}


