
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Define observer options outside the component to ensure the object reference is stable.
// This prevents the IntersectionObserver from being re-created on every render,
// which improves performance and permanently resolves a subtle race condition.
const observerOptions = {
  threshold: 0.1,
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Pass the stable options object to the hook.
  const isInView = useIntersectionObserver(sectionRef, observerOptions);

  return (
    <section
      id={id}
      ref={sectionRef}
      // Apply a fade-in and slide-up animation when the section is in view.
      // The section starts invisible and slightly moved down, then transitions to visible and its original position.
      className={`${className} transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
