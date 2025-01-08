import React from 'react';
import FacilitySection from './components/FacilitySection';

const libraryDetails = {
  title: 'Central Library',
  description: 'Our state-of-the-art library houses over 50,000 books, journals, and digital resources.',
  image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
  features: [
    'Digital catalog system',
    'E-journal subscriptions',
    'Reading halls',
    'Discussion rooms',
  ],
  stats: [
    { label: 'Books', value: '50,000+' },
    { label: 'Journals', value: '100+' },
    { label: 'Seating Capacity', value: '300' },
    { label: 'Operating Hours', value: '8 AM - 8 PM' },
  ],
};

const Library = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <FacilitySection {...libraryDetails} />
      </div>
    </div>
  );
};

export default Library;