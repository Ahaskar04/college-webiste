import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActiveDropdown(name);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const navigation = [
    {
      name: 'About Us',
      href: '/about/history',
      submenu: [
        { name: 'History', href: '/about/history' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        // { name: 'Administration', href: '/about/administration' },
        // { name: 'Faculty', href: '/about/faculty' },
      ],
    },
    {
      name: 'Academics',
      href: '/academics/courses',
      submenu: [
        { name: 'Courses', href: '/academics/courses' },
        { name: 'Admissions', href: '/academics/admissions' },
        // { name: 'Fee Structure', href: '/academics/fees' },
        { name: 'Academic Calendar', href: '/academics/calendar' },
        { name: 'Holiday Calendar', href: '/academics/holidays' },
      ],
    },
    {
      name: 'Facilities',
      href: '/facilities/library',
      submenu: [
        { name: 'Library', href: '/facilities/library' },
        { name: 'Laboratories', href: '/facilities/labs' },
        { name: 'Canteen', href: '/facilities/canteen' },
      ],
    },
    { 
      // name: 'Achievements',
      href: '/achievements'
    },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-800">Arjun College</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-800 flex items-center"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute z-50 w-48 bg-white shadow-lg rounded-md mt-2">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-md"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;