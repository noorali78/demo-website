import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "XYZ  DESIGN transformed our outdated apartment into a sophisticated haven. Their attention to detail and understanding of our needs exceeded our expectations.",
      name: "Emily Johnson",
      title: "Residential Client",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "Working with NOIR DESIGN on our restaurant renovation was seamless. They created a space that perfectly captures our brand identity while maximizing functionality.",
      name: "Michael Chen",
      title: "Restaurant Owner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "The team's ability to blend aesthetic beauty with practical solutions is unmatched. Our office redesign has significantly improved our workflow and company culture.",
      name: "Sarah Williams",
      title: "CEO, Tech Startup",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-5">CLIENT TESTIMONIALS</h2>
          <div className="w-16 h-px bg-white mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-zinc-400">
            Hear what our clients have to say about their experience working with our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Quote size={60} className="opacity-30" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-white">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-lg mb-6 italic leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <div className="font-medium">{testimonials[currentIndex].name}</div>
                  <div className="text-zinc-400 text-sm">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-zinc-700 hover:border-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 border border-zinc-700 hover:border-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};