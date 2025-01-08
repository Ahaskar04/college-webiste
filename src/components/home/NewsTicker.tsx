import React from 'react';
import { ChevronRight } from 'lucide-react';

const updates = [
  "Admissions open for 2025-26 academic year",
  "Student Credit Card facility of Govt of Bihar available",
  "Top Polytechnic and MBA Colleges in Bihar",
  "100% Placement Guarantee",
];

const NewsTicker = () => {
  return (
    <div className="bg-blue-800 text-white py-2 px-4">
      <div className="container mx-auto flex">
        {/* Static label in its own isolated container */}
        <div className="flex-none z-10 bg-blue-800 pr-4">
          <span className="font-semibold whitespace-nowrap">Latest Updates:</span>
        </div>
        
        {/* Ticker container with proper isolation */}
        <div className="flex-1 relative overflow-hidden">
          <div className="flex items-center space-x-8 animate-marquee absolute">
            {updates.map((update, index) => (
              <div key={index} className="flex items-center whitespace-nowrap">
                <ChevronRight className="h-4 w-4 mr-2" />
                <span>{update}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
