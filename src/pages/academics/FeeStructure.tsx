import React from 'react';
import FeeTable from './components/FeeTable';

const feeStructure = {
  btech: {
    name: 'B.Tech Programs',
    fees: [
      { particular: 'Tuition Fee', amount: 125000 },
      { particular: 'Development Fee', amount: 15000 },
      { particular: 'Laboratory Fee', amount: 10000 },
      { particular: 'Library Fee', amount: 5000 },
    ],
  },
  // Add more programs
};

const FeeStructure = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Fee Structure</h1>
        <div className="space-y-12">
          {Object.values(feeStructure).map((program) => (
            <div key={program.name}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{program.name}</h2>
              <FeeTable fees={program.fees} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;