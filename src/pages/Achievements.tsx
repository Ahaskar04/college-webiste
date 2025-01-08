import React from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    date: 'January 2024',
    title: 'Best Engineering College Award',
    description: 'Recognized as the Best Engineering College in the region by the Education Excellence Awards 2024.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    date: 'December 2023',
    title: 'Research Excellence',
    description: 'Our research team received a prestigious grant for innovative work in renewable energy.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    date: 'November 2023',
    title: 'NAAC A++ Grade',
    description: 'Achieved the highest NAAC accreditation grade for academic excellence and infrastructure.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    date: 'October 2023',
    title: '100% Placement Record',
    description: 'Achieved 100% placement for the fifth consecutive year with top companies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  },
];

const Achievements = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Trophy className="w-8 h-8 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">Our Achievements</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 mb-2">{achievement.date}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;