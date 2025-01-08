import React from 'react';
import director from '../../../Images/director.jpeg';

const DirectorMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src={director}
                alt="College President"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">President's Message</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to our institution of excellence. As the Principal, I am proud to lead an
                institution that has consistently demonstrated its commitment to academic excellence
                and innovation in education.
              </p>
              <p>
                Our college stands as a beacon of quality education, where we not only impart
                knowledge but also foster critical thinking, creativity, and leadership skills
                among our students. Our state-of-the-art facilities, distinguished faculty, and
                innovative teaching methodologies create an environment conducive to learning and
                growth.
              </p>
              <p>
                We are committed to preparing our students for the challenges of tomorrow,
                equipping them with the skills and knowledge they need to succeed in their chosen
                fields and make meaningful contributions to society.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Neelam Devi</h3>
              <p className="text-blue-600">President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;