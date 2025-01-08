import React from 'react';
import history from '../../Images/history.jpg';

const History = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our History</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src={history}
              alt="College Historical Building"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Established in 2018</h2>
            <p className="text-gray-600">
              Our institution was founded with a vision to provide quality education and create
              leaders who would shape the future of our nation. What started as a small
               college has now grown into a prestigious institution known for its
              academic excellence and innovation.
            </p>
            <p className="text-gray-600">
              Through the decades, we have continuously evolved, adapting to changing times
              while maintaining our core values of academic excellence, innovation, and
              character building.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2018 - Foundation</h3>
            <p className="text-gray-600">
              Established with just two departments and 100 students, our journey began with
              a commitment to excellence in B.Ed education.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Present Day</h3>
            <p className="text-gray-600">
              Today, we stand as a leading institution with over 2000 students, 40 faculty
              members, and numerous accolades in academic excellence and research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;