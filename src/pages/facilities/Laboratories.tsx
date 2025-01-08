import React from 'react';
import FacilitySection from './components/FacilitySection';

const labs = [
  {
    title: 'Computer Science Lab',
    description: 'Advanced computing facility with latest hardware and software resources.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    features: [
      'High-end workstations',
      'Latest software tools',
      'Internet connectivity',
      'Project workspace',
    ],
    stats: [
      { label: 'Computers', value: '120' },
      { label: 'Software Tools', value: '50+' },
      { label: 'Capacity', value: '120 students' },
      { label: 'Lab Assistants', value: '4' },
    ],
  },
  // Add more labs
];

const Laboratories = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Laboratories</h1>
        <div className="space-y-16">
          {labs.map((lab) => (
            <FacilitySection key={lab.title} {...lab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laboratories;