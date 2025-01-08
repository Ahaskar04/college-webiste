import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Vision & Mission</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 mb-6">
              To be a globally recognized institution of academic excellence, fostering
              innovation, research, and entrepreneurship while nurturing values and
              contributing to society's sustainable development.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Cultivating innovative thinking and research aptitude</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Developing global leaders with strong ethical values</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Creating sustainable solutions for societal challenges</span>
              </li>
            </ul>
          </div>

          {/* Mission Section */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Compass className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 mb-6">
              To provide quality education through innovative teaching methods, foster
              research and development, and create responsible professionals who contribute
              to society's advancement.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Delivering excellence in education through modern pedagogy</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Promoting research and innovation in emerging technologies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Building industry partnerships for practical exposure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span>Fostering entrepreneurship and leadership qualities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do',
              },
              {
                title: 'Innovation',
                description: 'Encouraging creative thinking and novel solutions',
              },
              {
                title: 'Integrity',
                description: 'Maintaining ethical standards and transparency',
              },
              {
                title: 'Inclusivity',
                description: 'Embracing diversity and equal opportunities',
              },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;