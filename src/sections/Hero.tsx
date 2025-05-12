import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 400);
    }
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white py-24"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 opacity-0 transform translate-y-8"
          style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
        >
          ELEGANCE IN EVERY DETAIL
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 opacity-0 transform translate-y-8"
          style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
        >
          Transforming spaces with a perfect balance of form and function. 
          We create bespoke interiors that reflect your personality and elevate your lifestyle.
        </p>
        
        <a 
          href="#services" 
          className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          Discover Our Services
        </a>
      </div>
      
      <a 
        href="#services"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};