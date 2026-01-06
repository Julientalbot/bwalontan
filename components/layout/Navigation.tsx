'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  navigation: NavigationItem[];
  isScrolled?: boolean;
}

export default function Navigation({ navigation, isScrolled = false }: NavigationProps) {
  const pathname = usePathname()

  return (
    <ul className="hidden md:flex items-center gap-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href

        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`relative px-4 py-2 font-accent text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? isActive
                    ? 'text-forest-deep bg-sand/50'
                    : 'text-forest hover:text-forest-deep hover:bg-sand/30'
                  : isActive
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
              {isActive && (
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-colors duration-300 ${
                    isScrolled ? 'bg-canopy' : 'bg-white'
                  }`}
                />
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
