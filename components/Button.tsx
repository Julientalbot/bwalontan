import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200'
  
  const variantStyles = {
    primary: 'bg-green-700 text-white hover:bg-green-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}