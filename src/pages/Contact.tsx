import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const contactInfo = {
  phone: '+91 9709999998',
  email: 'arjuncollege2018@gmail.com',
  address: 'NH 31, Naugachia, Bhagalpur, Bihar, 853204',
  whatsapp: '+91 9709999998',
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.252314875628!2d87.16112947547629!3d25.39636342360461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f03db7b02eba97%3A0xef267eed7d6bed40!2sArjun%20College%20of%20Education!5e0!3m2!1sen!2sin!4v1736328420161!5m2!1sen!2sin"  ,
  socialLinks: [
    { icon: Facebook, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://www.facebook.com/p/Arjun-College-Of-Education-Naugachia-100064327076019/', label: 'Twitter' },
  ],
};

const Contact = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-blue-600">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {contactInfo.socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={contactInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;