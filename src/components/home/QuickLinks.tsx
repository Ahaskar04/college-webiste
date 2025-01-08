import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  Phone,
} from 'lucide-react';

const quickLinks = [
  {
    title: 'Admissions',
    icon: GraduationCap,
    href: '/academics/admissions',
    description: 'Start your journey with us',
  },
  {
    title: 'Academics',
    icon: BookOpen,
    href: '/academics/courses',
    description: 'Explore our programs',
  },
  {
    title: 'About Us',
    icon: Users,
    href: '/about/history',
    description: 'Learn our story',
  },
  {
    title: 'Facilities',
    icon: Building2,
    href: '/facilities/library',
    description: 'World-class infrastructure',
  },
  {
    title: 'Contact',
    icon: Phone,
    href: '/contact',
    description: 'Get in touch',
  },
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <link.icon className="h-12 w-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600 text-center">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;