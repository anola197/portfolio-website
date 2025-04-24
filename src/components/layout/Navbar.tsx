// src/components/Navigation.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
// import { useTheme } from '../theme/ThemeProvider';

const navLinks = [
  // { href: '/', label: 'Home' },
  // { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience'},
  { href: '/contact', label: 'Contact' },
  { href: '/files/Aayushi_Resume_1.pdf', label: 'Resume' },
];

// Separate ThemeToggle to inline it (avoid the import issue)
// function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//       className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//       onClick={toggleTheme}
//     >
//       {theme === 'dark' ? (
//         <Sun className="h-5 w-5 text-yellow-400" />
//       ) : (
//         <Moon className="h-5 w-5 text-gray-600" />
//       )}
//     </button>
//   );
// }

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Add a client-side rendering check
  const [mounted, setMounted] = useState(false);

  // Only show theme toggle after component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // The theme toggle button that handles SSR gracefully
  // const themeToggleButton = mounted ? <ThemeToggle /> : null;

  return (
    <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-400 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Aayushi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            {/* {themeToggleButton} */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* {themeToggleButton} */}
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 text-base font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}