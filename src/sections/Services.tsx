import React from 'react';
import { PenTool, Home, Layout, Compass, Paintbrush, PieChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group p-8 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 ease-in-out">
    <div className="mb-5 text-gray-400 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <PenTool size={32} />,
      title: "Concept Development",
      description: "We transform ideas into cohesive design narratives that tell your unique story through carefully considered aesthetics and spatial arrangements."
    },
    {
      icon: <Home size={32} />,
      title: "Residential Design",
      description: "From urban apartments to expansive estates, we create living spaces that balance functionality with personalized style and comfort."
    },
    {
      icon: <Layout size={32} />,
      title: "Commercial Spaces",
      description: "We design productive and inspired commercial environments that embody your brand identity and enhance employee and client experiences."
    },
    {
      icon: <Compass size={32} />,
      title: "Space Planning",
      description: "Our meticulous spatial planning optimizes flow and functionality while creating harmonious, intuitive environments that enhance daily living."
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Custom Furnishings",
      description: "We design and source unique furnishings that perfectly complement your space, bringing originality and character to every project."
    },
    {
      icon: <PieChart size={32} />,
      title: "Project Management",
      description: "Our comprehensive oversight ensures your project is delivered on time and on budget, with attentive management of every detail."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-5">OUR SERVICES</h2>
          <div className="w-16 h-px bg-white mx-auto mb-5"></div>
          <p className="max-w-2xl mx-auto text-zinc-400">
            We offer comprehensive design solutions to transform your spaces with 
            elegance, functionality, and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};