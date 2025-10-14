
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img src="https://picsum.photos/seed/pmu-salon/1920/1080" alt="Clean and modern permanent makeup salon interior" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
            Artistry in Permanent Makeup
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-xl mx-auto drop-shadow-sm">
            Expertly crafted brows and lips for timeless beauty in Kitchener-Waterloo.
          </p>
          <a href="#contact" className="mt-8 inline-block bg-pmu-accent-rose text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Consultation
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
