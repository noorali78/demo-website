import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Minimalist Urban Apartment",
      category: "residential",
      image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A sleek urban retreat focusing on clean lines and functional spaces."
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      category: "residential",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A high-end residential project blending contemporary design with timeless elegance."
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "commercial",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A sophisticated welcome area designed to make a lasting first impression."
    },
    {
      id: 4,
      title: "Modern Restaurant Interior",
      category: "commercial",
      image: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A vibrant dining space that balances aesthetics with practical considerations."
    },
    {
      id: 5,
      title: "Executive Office Suite",
      category: "commercial",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A professional environment designed to inspire productivity and showcase success."
    },
    {
      id: 6,
      title: "Contemporary Villa",
      category: "residential",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A harmonious blend of indoor and outdoor living spaces for a coastal retreat."
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-5">OUR PORTFOLIO</h2>
          <div className="w-16 h-px bg-white mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-zinc-400">
            Explore our diverse collection of projects showcasing our expertise in
            creating stunning, functional spaces across various styles and contexts.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 md:space-x-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-zinc-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <a href="#" className="inline-block px-4 py-2 border border-white text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};