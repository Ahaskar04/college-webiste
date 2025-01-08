import React from 'react';
import FacultyCard from './components/FacultyCard';

const departments = [
  {
    name: 'Computer Science',
    faculty: [
      {
        name: 'Dr. John Smith',
        role: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
        specialization: 'Artificial Intelligence',
        qualifications: 'Ph.D. in Computer Science',
      },
      // Add more faculty members
    ],
  },
  // Add more departments
];

const Faculty = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Faculty</h1>
        {departments.map((dept) => (
          <div key={dept.name} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{dept.name} Department</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dept.faculty.map((member) => (
                <FacultyCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;