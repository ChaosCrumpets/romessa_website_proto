
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-pmu-text text-pmu-bg/70 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Romessa PMU. All Rights Reserved.</p>
        <p className="text-sm mt-2">Website designed with care.</p>
      </div>
    </footer>
  );
};

export default Footer;
