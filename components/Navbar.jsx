'use client'; // Must be the first line

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this instead of next/router
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // const { isDarkMode } = useDarkMode(); // Remove or implement your own dark mode logic

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActiveLink = (href) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-darkBg/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-colors duration-300 bg-sun-gradient text-white`}>
              RD
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-lightText">
              Ragovate Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
 <Link
  key={link.name}
  href={link.href}
  className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
    isActiveLink(link.href)
      ? 'bg-sun-50 dark:bg-moon-800 text-sun-500 dark:text-moonBlue-400'
      : 'text-gray-700 dark:text-lightText hover:bg-gray-50 dark:hover:bg-moon-800'
  }`}
  onClick={closeMobileMenu}
>
  {link.name}
</Link>
))}
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="pl-6 text-gray-700 dark:text-lightText hover:text-sun-500 "
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden fixed top-16 left-0 w-full z-40 transition-all duration-300 ${
    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
>
  <div className="bg-white dark:bg-darkBg shadow-lg border-t border-gray-200 dark:border-moon-700">
    <div className="container-custom py-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
            isActiveLink(link.href)
              ? 'bg-sun-50 dark:bg-moon-800 text-sun-500 dark:text-moonBlue-400'
              : 'text-gray-700 dark:text-lightText hover:bg-gray-50 dark:hover:bg-moon-800'
          }`}
          onClick={closeMobileMenu}
          style={{ cursor: 'pointer' }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
</div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden -z-10"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;