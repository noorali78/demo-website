import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl md:text-2xl font-serif tracking-wider"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            XYZ DESIGN
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm tracking-wide">
              {['HOME', 'SERVICES', 'PORTFOLIO', 'TESTIMONIALS', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="relative py-2 overflow-hidden group"
                  >
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      {item}
                    </span>
                    <span className="absolute left-0 top-full transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
    
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 md:hidden">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-6">
              {['HOME', 'SERVICES', 'PORTFOLIO', 'TESTIMONIALS', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};