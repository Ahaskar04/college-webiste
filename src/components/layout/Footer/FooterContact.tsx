import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const contactInfo = {
  address: 'NH 31, Naugachia, Bhagalpur, Bihar, 853204',
  phone: '+91 9709999998',
  email: 'arjuncollege2018@gmail.com',
  whatsapp: '+91 9709999998',
};

const FooterContact = () => {
  return (
    <div className="w-full lg:w-1/4">
      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
          <span className="text-blue-200">{contactInfo.address}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-400" />
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-blue-200 hover:text-white transition-colors"
          >
            {contactInfo.phone}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-400" />
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-blue-200 hover:text-white transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;