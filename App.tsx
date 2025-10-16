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

  const handleNavigateToService = useCallback((pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHomeAndScroll = useCallback((sectionId: string) => {
    if (currentPage !== 'main') {
      // **FIXED**: By setting the page to 'main' and then using a 'setTimeout'
      // with a delay of 0, we push the scroll command to the end of the
      // execution queue. This gives React time to render the main page
      // before we try to scroll, completely avoiding the race condition.
      setCurrentPage('main');
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    } else {
      // If we are already on the main page, scroll immediately.
      const element = document.getElementById(sectionId.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const goHome = useCallback(() => {
    setCurrentPage('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const servicePageData = SERVICE_CATEGORIES_DATA.find(cat => cat.id === currentPage);

  // **REMOVED**: The previous, complex useEffect hooks for scrolling have been
  // removed as they were the source of the timing issue.

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
          // Fallback to main page for any invalid page ID
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