import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.1 }
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Directly check if the element is intersecting
      if (entry.isIntersecting) {
        setIsInView(true);
        // Disconnect the observer once it has done its job
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    // The cleanup function handles component unmounting correctly
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
};