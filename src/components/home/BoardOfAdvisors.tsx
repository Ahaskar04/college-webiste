import React from 'react';
import amartyaSenImage from '../../Images/Amartya_Sen_2017.jpg';
import janardanJhaImage from '../../Images/Dr.JanardanJha.png';
import snjhaImage from '../../Images/SN_Jha.jpg';
import amitabh from '../../Images/Amitabh.webp';


const advisors = [
  {
    name: 'Dr. Amartya Sen',
    position: 'Bharat Ratna Awardee',
    expertise: 'Eminent Economist and Philosopher, Nobel Laureate in Economics, and recipient of the highest Indian civilian award "Bharat Ratna".',
    image: amartyaSenImage,
  },
  {
    name: 'Dr. Janardan Jha',
    position: 'Director, BIT Sindari',
    expertise: 'Vice Chancellor of BIT Mesra, Director of the Science & Technology Department (Government of Bihar), and Pro Vice Chancellor of Manipal University, Karnataka.',
    image: janardanJhaImage,
  },
  {
    name: 'Amitabh Choudhary ',
    position: 'Ex. I.P.S.',
    expertise: 'Engineering Graduate from IIT, Kharagpur, former Additional Director General of Police, Govt. of Jharkhand. Currently He is secretary of B.C.C.I. (Board of Control for Cricket in India).',
    image: amitabh,
  },
  {
    name: 'Dr. SN Jha',
    position: 'Chief Justice, High Court of Jammu & Kashmir.', 
    expertise: 'Held esteemed positions as Chief Justice of High Court of Rajasthan and Chairman of Human Right Commission, Bihar.',
    image: snjhaImage,
  },
  
];

const BoardOfAdvisors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Board of Advisors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="image-container h-64">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover hover-zoom-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {advisor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{advisor.position}</p>
                <p className="text-gray-600 text-sm">{advisor.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfAdvisors;