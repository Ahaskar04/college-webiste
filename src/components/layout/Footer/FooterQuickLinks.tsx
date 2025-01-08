import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/academics/courses' },
  { name: 'Admissions', href: '/academics/admissions' },
  { name: 'Academic Calendar', href: '/academics/calendar' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Events', href: '/events' },
];

const FooterQuickLinks = () => {
  return (
    <div className="w-full lg:w-1/4">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {quickLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="text-blue-200 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;