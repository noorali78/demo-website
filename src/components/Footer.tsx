import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-6">XYZ  DESIGN</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Transforming spaces into timeless expressions of elegance and functionality.
              Our approach blends artistic vision with practical solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">SITEMAP</h3>
            <ul className="space-y-3 text-zinc-400">
              {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">CONTACT US</h3>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 shrink-0 mt-1" />
                <span>123 Design Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 shrink-0" />
                <span>contact@noirdesign.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NOIR DESIGN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};