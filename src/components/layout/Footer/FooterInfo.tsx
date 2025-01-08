import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterInfo = () => {
  return (
    <div className="w-full lg:w-1/4">
      <Link to="/" className="flex items-center space-x-2 mb-4">
        <GraduationCap className="w-8 h-8 text-white" />
        <span className="text-xl font-bold text-white">Arjun College</span>
      </Link>
      <p className="text-blue-200 mb-4">
        Empowering minds, shaping futures. Our institution is committed to
        excellence in education, fostering innovation, and nurturing tomorrow's
        leaders through quality education and holistic development.
      </p>
      <div className="space-x-4">
        <Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <span className="text-blue-200">•</span>
        <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default FooterInfo;