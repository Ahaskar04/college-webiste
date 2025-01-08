import React from 'react';
import AdminCard from './components/AdminCard';

const administrators = [
  {
    name: 'Dr. Robert Wilson',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    qualifications: 'Ph.D. in Educational Leadership',
    experience: '25+ years in Educational Administration',
  },
  {
    name: 'Dr. Emily Thompson',
    role: 'Vice Chairman',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    qualifications: 'Ph.D. in Higher Education Management',
    experience: '20+ years in Academic Leadership',
  },
  // Add more administrators as needed
];

const Administration = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Administration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {administrators.map((admin) => (
            <AdminCard key={admin.name} {...admin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Administration;