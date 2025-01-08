import React from 'react';
import principle from '../../../Images/principle.jpg';

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src={principle}
                alt="College Principal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Principal's Message</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                It gives me immense pleasure to welcome you to our college. As Principal, I am
                dedicated to maintaining the highest standards of academic excellence while
                nurturing the holistic development of our students.
              </p>
              <p>
                Our institution takes pride in its comprehensive approach to education, combining
                rigorous academic programs with extensive co-curricular activities. We believe in
                creating an environment that encourages curiosity, creativity, and critical
                thinking.
              </p>
              <p>
                With a team of dedicated faculty members and modern facilities, we strive to
                provide our students with the best possible educational experience, preparing them
                for successful careers and meaningful lives.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Dr. Santosh Kumar</h3>
              <p className="text-blue-600">Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;