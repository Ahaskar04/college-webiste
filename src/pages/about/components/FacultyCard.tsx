import React from 'react';

interface FacultyCardProps {
  name: string;
  role: string;
  image: string;
  specialization: string;
  qualifications: string;
}

const FacultyCard = ({ name, role, image, specialization, qualifications }: FacultyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-w-3 aspect-h-4">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <div className="space-y-2 text-gray-600">
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Qualifications:</strong> {qualifications}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;