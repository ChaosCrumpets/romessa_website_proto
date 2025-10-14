
import React from 'react';
import { SERVICES_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white/50 border border-pmu-accent-gold/20 rounded-lg p-8 text-center flex flex-col h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <h3 className="font-serif text-2xl font-semibold text-pmu-text mb-4">{service.title}</h3>
      <p className="text-pmu-text/80 mb-6 flex-grow">{service.description}</p>
      <p className="font-bold text-pmu-accent-rose text-lg">{service.price}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <AnimatedSection id="services" className="py-24 bg-pmu-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pmu-text">Our Services</h2>
          <div className="w-24 h-1 bg-pmu-accent-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
