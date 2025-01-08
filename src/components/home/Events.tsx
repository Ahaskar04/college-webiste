import React from 'react';
import { Calendar } from 'lucide-react';
import e1 from '../../Images/event1.jpeg';
import e2 from '../../Images/students.jpeg';
import e3 from '../../Images/event2.jpg';
import e4 from '../../Images/event3.jpg';

const events = [
  {
    id: 1,
    title: 'Visionary Tribute',
    // date: 'January 2, 2025',
    description: 'Tribute to Manmohan Singh at Arjun College',
    image: e1,
  },
  {
    id: 2,
    title: 'Campaign for Education',
    // date: 'April 5-7, 2024',
    description: 'Campaign for Education at Arjun College',
    image: e2,
  },
  {
    id: 3,
    title: 'Independence Day Celebration',
    // date: 'January 2, 2025',
    description: 'Independence Day Celebration at Arjun College',
    image: e3,
  },
  {
    id: 4,
    title: 'Tree Plantation Drive',
    // date: 'May 1, 2024',
    description: 'The Forest Department planted 2,000 trees.',
    image: e4,
  },
];

const Events = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                {/* <div className="flex items-center text-white mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div> */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;