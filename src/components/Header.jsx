import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: createPageUrl('Home'), label: 'Home' },
  { href: createPageUrl('TheChallenge'), label: 'The Challenge' },
  { href: createPageUrl('OurSolution'), label: 'Our Solution' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="group">
            <div className="flex flex-col transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/fd3f1a952_ARS360logo.png" 
                  alt="ARS360" 
                  className="h-12 w-auto object-contain brightness-0"
                />
                <span className={`text-[9px] -mt-1 tracking-tight opacity-80 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Associate Rewards System 360</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`group px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg'
                    : isScrolled ? 'bg-gray-100 text-gray-700 shadow-md hover:shadow-xl hover:bg-gray-200' : 'bg-white/10 text-white shadow-md hover:shadow-xl hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <span className="group-hover:text-shadow-sm">{link.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link to={createPageUrl('PilotProgram')} className="hidden md:block">
              <Button className="group px-6 py-3 text-sm font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-600 text-white rounded-full shadow-xl border-0 transform hover:scale-105 transition-all duration-300">
                Request Pilot Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'text-gray-700 bg-gray-100 hover:bg-gray-200' : 'text-white bg-white/10 hover:bg-white/20'}`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white pb-6 border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col items-center gap-4 px-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to={createPageUrl('PilotProgram')} className="w-full mt-4">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold"
              >
                Request Pilot Access
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}