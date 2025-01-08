import React from 'react';

interface Stat {
  label: string;
  value: string;
}

interface FacilitySectionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  stats: Stat[];
}

const FacilitySection = ({ title, description, image, features, stats }: FacilitySectionProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">{description}</p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitySection;