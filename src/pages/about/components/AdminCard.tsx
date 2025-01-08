import React from 'react';

interface AdminCardProps {
  name: string;
  role: string;
  image: string;
  qualifications: string;
  experience: string;
}

const AdminCard = ({ name, role, image, qualifications, experience }: AdminCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-w-3 aspect-h-4">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <div className="space-y-2 text-gray-600">
          <p><strong>Qualifications:</strong> {qualifications}</p>
          <p><strong>Experience:</strong> {experience}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;