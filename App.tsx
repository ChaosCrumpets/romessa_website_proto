
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import { SERVICE_CATEGORIES_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  const handleNavigateToService = useCallback((pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHomeAndScroll = useCallback((sectionId: string) => {
    if (currentPage !== 'main') {
      setCurrentPage('main');
      // Set the section to scroll to after the main page renders.
      setScrollToSection(sectionId);
    } else {
      // Already on the main page, just scroll.
      const element = document.getElementById(sectionId.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const goHome = useCallback(() => {
    setCurrentPage('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const servicePageData = SERVICE_CATEGORIES_DATA.find(cat => cat.id === currentPage);

  useEffect(() => {
    // If we navigate back to the main page, ensure the URL hash is cleared.
    if (currentPage === 'main') {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }, [currentPage]);
  
  useEffect(() => {
    // This effect handles scrolling reliably after the main page has rendered.
    if (scrollToSection && currentPage === 'main') {
      const element = document.getElementById(scrollToSection.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset the scroll target after scrolling.
      setScrollToSection(null);
    }
  }, [scrollToSection, currentPage]);


  return (
    <div className="bg-pmu-bg text-pmu-text font-sans antialiased">
      <Header 
        onNavigateToService={handleNavigateToService}
        onGoHomeAndScroll={goHomeAndScroll}
        onGoHome={goHome}
      />
      <main>
        {currentPage === 'main' ? (
          <>
            <Hero />
            <Services />
            <Gallery />
            <FAQ />
            <Contact />
          </>
        ) : servicePageData ? (
          <ServicePage category={servicePageData} />
        ) : (
          // Fallback to main page if route is invalid
          <>
            <Hero />
            <Services />
            <Gallery />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;