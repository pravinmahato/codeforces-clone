import { useState } from 'react';
import { Link } from './Link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { href: '/home', label: 'HOME' },
  { href: '/top', label: 'TOP' },
  { href: '/catalog', label: 'CATALOG' },
  { href: '/contests', label: 'CONTESTS' },
  { href: '/gym', label: 'GYM' },
  { href: '/problemset', label: 'PROBLEMSET' },
  { href: '/groups', label: 'GROUPS' },
  { href: '/rating', label: 'RATING' },
  { href: '/edu', label: 'EDU' },
  { href: '/api', label: 'API' },
  { href: '/calendar', label: 'CALENDAR' },
  { href: '/help', label: 'HELP' },
  { href: '/rayan', label: 'RAYAN' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Logo, Language & Auth Links */}
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          <Link href="/" className="hover:opacity-90">
            <Logo />
          </Link>
          {/* Desktop Language & Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5 h-3" />
              <img src="https://flagcdn.com/w20/ru.png" alt="Russian" className="w-5 h-3" />
            </div>
            <div className="flex space-x-4">
              <Link href="/enter">Enter</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center space-x-6 h-10 text-sm border-b border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 font-medium py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow border-b border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:text-blue-600 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <Link href="/enter" className="block py-1">
                Enter
              </Link>
              <Link href="/register" className="block py-1">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
