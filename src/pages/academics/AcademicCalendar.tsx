import React from 'react';
import CalendarEvent from './components/CalendarEvent';

const academicEvents = [
  {
    month: 'July 2024',
    events: [
      { date: '1-15', event: 'Admission Process' },
      { date: '20', event: 'Orientation Program' },
      { date: '24', event: 'Classes Begin' },
    ],
  },
  // Add more months
];

const AcademicCalendar = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Academic Calendar 2024-25</h1>
        <div className="space-y-8">
          {academicEvents.map((month) => (
            <CalendarEvent key={month.month} {...month} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;