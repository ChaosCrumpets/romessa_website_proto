
import React from 'react';
import type { ServiceCategory } from '../types';
import AnimatedSection from './AnimatedSection';

interface ServicePageProps {
  category: ServiceCategory;
}

const ServicePage: React.FC<ServicePageProps> = ({ category }) => {
  return (
    <div className="bg-pmu-bg min-h-screen pt-24 md:pt-32 pb-24">
      <AnimatedSection className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-pmu-text">{category.title}</h1>
          <div className="w-24 h-1 bg-pmu-accent-gold mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center text-pmu-text/80 mb-16">
          <p>{category.overview}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {category.images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`${category.title} example ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-pmu-text text-center mb-12">Service Menu</h2>
            <div className="space-y-8">
                {category.services.map((service, index) => (
                    <div key={index} className="bg-white/50 border border-pmu-accent-gold/20 rounded-lg p-8 shadow-sm">
                        <div className="flex justify-between items-start flex-col sm:flex-row">
                            <div className="mb-4 sm:mb-0 sm:mr-6">
                                <h3 className="font-serif text-2xl font-semibold text-pmu-text mb-2">{service.title}</h3>
                                <p className="text-pmu-text/80">{service.description}</p>
                            </div>
                            <p className="font-bold text-pmu-accent-rose text-lg whitespace-nowrap">{service.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center mt-16">
            <a href="https://squareup.com/appointments/book/your-business" target="_blank" rel="noopener noreferrer" className="inline-block bg-pmu-accent-rose text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your {category.title} Service
            </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicePage;
