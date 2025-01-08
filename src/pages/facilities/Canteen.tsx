import React from 'react';
import FacilitySection from './components/FacilitySection';

const canteenDetails = {
  title: 'College Canteen',
  description: 'Modern cafeteria serving fresh, healthy meals in a comfortable environment.',
  image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200',
  features: [
    'Hygienic food preparation',
    'Multiple cuisine options',
    'Comfortable seating',
    'Outdoor dining area',
  ],
  stats: [
    { label: 'Seating Capacity', value: '200' },
    { label: 'Menu Items', value: '50+' },
    { label: 'Operating Hours', value: '8 AM - 6 PM' },
    { label: 'Staff Members', value: '15' },
  ],
};

const Canteen = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <FacilitySection {...canteenDetails} />
      </div>
    </div>
  );
};

export default Canteen;