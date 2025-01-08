import React from 'react';

interface CourseCardProps {
  name: string;
  duration: string;
  seats: number;
  description: string;
  image: string;
}

const CourseCard = ({ name, duration, seats, description, image }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Available Seats:</strong> {seats}</p>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;