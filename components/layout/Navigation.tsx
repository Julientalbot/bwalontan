import Link from 'next/link'

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  navigation: NavigationItem[];
  className?: string;
}

export default function Navigation({ navigation, className = "" }: NavigationProps) {
  return (
    <ul className={`hidden md:flex space-x-6 ${className}`}>
      {navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="hover:text-green-600 transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}