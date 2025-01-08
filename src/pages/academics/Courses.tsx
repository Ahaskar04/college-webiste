import React from 'react';
import CourseCard from './components/CourseCard';
import poly from '../../Images/polytechnic.jpg';
import mba from '../../Images/mba.jpg';

const courses = [
  {
    name: 'Polytechnic',
    duration: '3 years',
    seats: 360,
    description: 'We offer Electrical, Mechanical, AI and Computer Application',
    image: poly,
  },
  {
    name: 'M.B.A',
    duration: '2 years',
    seats: 120,
    description: 'We offer marketing, Finance and Human Resource',
    image: mba,
  },
  // Add more courses
];

const Courses = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;