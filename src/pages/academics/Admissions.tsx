import React from 'react';
import { Calendar, FileText, CheckCircle } from 'lucide-react';

const admissionSteps = [
  {
    title: 'Online Application',
    description: 'Fill out the online application form with personal and academic details',
    icon: FileText,
  },
  {
    title: 'Document Verification',
    description: 'Submit required documents for verification',
    icon: CheckCircle,
  },
  {
    title: 'Entrance Test',
    description: 'Appear for the college entrance examination',
    icon: Calendar,
  },
];

const Admissions = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Admissions 2024-25</h1>
        
        {/* Notice Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Admission Notice</h2>
          <p className="text-gray-700 mb-4">
            Applications are now open for the academic year 2024-25. Last date to apply is March 31, 2024.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>

        {/* Admission Procedure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Admission Procedure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600 font-semibold">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Criteria</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span>Minimum 60% aggregate in 10+2 with Physics, Chemistry, and Mathematics</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span>Valid JEE Main/State Level Entrance Test Score</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span>Age should not exceed 21 years as of July 1, 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;