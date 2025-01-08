import React from 'react';

interface Event {
  date: string;
  event: string;
}

interface CalendarEventProps {
  month: string;
  events: Event[];
}

const CalendarEvent = ({ month, events }: CalendarEventProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-800 text-white px-6 py-4">
        <h3 className="text-xl font-semibold">{month}</h3>
      </div>
      <div className="p-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-semibold text-gray-800 pb-4">Date</th>
              <th className="text-left text-sm font-semibold text-gray-800 pb-4">Event</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.date}>
                <td className="py-4 text-sm text-gray-700">{event.date}</td>
                <td className="py-4 text-sm text-gray-700">{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarEvent;