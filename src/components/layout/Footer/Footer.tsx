import React from 'react';
import FooterInfo from './FooterInfo';
import FooterQuickLinks from './FooterQuickLinks';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-8 mb-8">
          <FooterInfo />
          <FooterQuickLinks />
          <FooterContact />
          <FooterNewsletter />
        </div>
        <hr className="border-blue-700 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-200">
            © {currentYear} Arjun College. All rights reserved.
          </p>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;