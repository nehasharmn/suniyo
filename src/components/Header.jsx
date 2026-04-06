import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: createPageUrl('Home'), label: 'Home' },
  { href: '/Product', label: 'Product' },
  { href: '/TheOutcomes', label: 'Outcomes' },
  { href: '/Resources', label: 'Resources' },
  { href: '/Pricing', label: 'Pricing' },
  { href: '/FAQ', label: 'FAQ' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 py-2">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="group flex flex-col">
            <img
              src="https://media.base44.com/images/public/68ceff2e17a02290721df37f/e18c4d4d6_suniyo_logo_darker_only.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/Subscribe" className="hidden md:block">
              <Button className="px-5 py-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-sm border-0 transition-all duration-200">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg pb-6">
          <nav className="flex flex-col gap-1 px-6 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/Subscribe" className="mt-3">
              <Button onClick={() => setIsOpen(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full">
                Subscribe
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}