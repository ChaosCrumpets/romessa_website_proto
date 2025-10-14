import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useIntersectionObserver = <T extends HTMLElement,>(
  ref: RefObject<T>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.1 }
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Guard against state updates on unmounted components.
        if (!isMounted) {
          return;
        }

        // To make this absolutely robust, iterate over the entries.
        // This gracefully handles empty arrays and is the safest way to
        // process intersection events, permanently fixing the race condition.
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // The observer has done its job, so we disconnect it
                // to prevent the callback from firing again.
                observer.disconnect();
            }
        });
      },
      options
    );

    observer.observe(element);

    return () => {
      isMounted = false;
      // Disconnect the observer when the component unmounts.
      // This is safe to call even if already disconnected.
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
};
