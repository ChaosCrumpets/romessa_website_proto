
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
    onNavigateToService: (pageId: string) => void;
    onGoHomeAndScroll: (sectionId: string) => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToService, onGoHomeAndScroll, onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // for mobile accordion

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    onGoHomeAndScroll(href);
    setIsMenuOpen(false);
  };
  
  const handleServiceLinkClick = (href: string) => {
    onNavigateToService(href);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pmu-bg/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={onGoHome} className="font-serif text-2xl font-bold text-pmu-text tracking-wider">
          Romessa PMU
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            link.subLinks ? (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button onClick={() => handleNavLinkClick(link.href)} className="text-pmu-text hover:text-pmu-accent-rose transition-colors duration-300 flex items-center">
                  {link.name}
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-pmu-bg rounded-lg shadow-xl transition-all duration-300 ease-in-out transform ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="py-2">
                    {link.subLinks.map(subLink => (
                      <button key={subLink.name} onClick={() => handleServiceLinkClick(subLink.href)} className="block w-full text-left px-4 py-2 text-pmu-text hover:bg-pmu-accent-rose/10 hover:text-pmu-accent-rose transition-colors duration-200">
                        {subLink.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button key={link.name} onClick={() => handleNavLinkClick(link.href)} className="text-pmu-text hover:text-pmu-accent-rose transition-colors duration-300">
                {link.name}
              </button>
            )
          ))}
          <a href="https://squareup.com/appointments/book/your-business" target="_blank" rel="noopener noreferrer" className="bg-pmu-accent-rose text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Book Now
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pmu-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-pmu-bg/95 pb-4">
          <nav className="flex flex-col items-center">
            {NAV_LINKS.map(link => (
              link.subLinks ? (
                <div key={link.name} className="w-full text-center">
                  <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-pmu-text hover:text-pmu-accent-rose transition-colors duration-300 text-lg py-2 w-full flex justify-center items-center">
                    {link.name}
                    <svg className={`w-4 h-4 ml-2 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden flex flex-col items-center bg-pmu-bg">
                      {link.subLinks.map(subLink => (
                        <button key={subLink.name} onClick={() => handleServiceLinkClick(subLink.href)} className="text-pmu-text/80 hover:text-pmu-accent-rose transition-colors duration-300 py-2">
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button key={link.name} onClick={() => handleNavLinkClick(link.href)} className="text-pmu-text hover:text-pmu-accent-rose transition-colors duration-300 text-lg py-2">
                  {link.name}
                </button>
              )
            ))}
            <a href="https://squareup.com/appointments/book/your-business" target="_blank" rel="noopener noreferrer" className="bg-pmu-accent-rose text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 mt-4">
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
