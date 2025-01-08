import React from 'react';
import { Calendar } from 'lucide-react';

const holidays = [
  {
    month: 'January 2024',
    dates: [
      { date: '1', occasion: "New Year's Day" },
      { date: '26', occasion: 'Republic Day' },
    ],
  },
  {
    month: 'August 2024',
    dates: [
      { date: '15', occasion: 'Independence Day' },
    ],
  },
  // Add more months and holidays
];

const HolidayCalendar = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Calendar className="w-8 h-8 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">Holiday Calendar 2024</h1>
        </div>

        <div className="space-y-8">
          {holidays.map((month) => (
            <div key={month.month} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white px-6 py-4">
                <h2 className="text-xl font-semibold">{month.month}</h2>
              </div>
              <div className="p-6">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-semibold text-gray-800 pb-4">Date</th>
                      <th className="text-left text-sm font-semibold text-gray-800 pb-4">Occasion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {month.dates.map((holiday) => (
                      <tr key={`${month.month}-${holiday.date}`}>
                        <td className="py-4 text-sm text-gray-700">{holiday.date}</td>
                        <td className="py-4 text-sm text-gray-700">{holiday.occasion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayCalendar;