import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-accent font-medium
    rounded-full
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus-visible:ring-2 focus-visible:ring-canopy focus-visible:ring-offset-2
  `

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg'
  }

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-forest to-canopy
      text-cream
      shadow-lg shadow-forest/25
      hover:shadow-xl hover:shadow-forest/30
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-sand
      text-forest-deep
      hover:bg-sand/80
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    outline: `
      bg-transparent
      text-forest
      border-2 border-forest
      hover:bg-forest hover:text-cream
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      bg-white/10
      text-cream
      border border-white/30
      backdrop-blur-sm
      hover:bg-white/20
      hover:-translate-y-0.5
      active:translate-y-0
    `
  }

  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`group ${combinedStyles}`}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedStyles}`}
    >
      {content}
    </button>
  )
}

// Arrow icon component for convenience
export function ArrowRightIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
