import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Twitter' },
];

const FooterSocial = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/50 text-white hover:bg-blue-600 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;