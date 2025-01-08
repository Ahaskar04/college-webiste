import React from 'react';
import { Calendar } from 'lucide-react';
import e1 from '../Images/event1.jpeg';
import e2 from '../Images/students.jpeg';
import e3 from '../Images/event2.jpg';
import e4 from '../Images/event3.jpg';

const events = [
  {
    id: 1,
    name: 'Visionary Tribute',
    // date: 'March 15, 2024',
    description: 'Tribute to Manmohan Singh at Arjun College. ',
    image: e1,
  },
  {
    id: 2,
    name: 'Campaign for Education',
    // date: 'April 5-7, 2024',
    description: 'Campaign for Education at Arjun College. ',
    image: e2,
  },
  {
    id: 3,
    name: 'Independence Day Celebration',
    // date: 'April 20, 2024',
    description: 'Independence Day Celebration at Arjun College. ',
    image: e3,
  },
  {
    id: 4,
    name: 'Tree Plantation Drive',
    // date: 'May 1, 2024',
    description: 'The Forest Department planted 2,000 trees. ',
    image: e4,
  },
];

const Events = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Calendar className="w-8 h-8 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">Past Events</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {event.name}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;