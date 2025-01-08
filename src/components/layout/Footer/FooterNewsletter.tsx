import React, { useState } from 'react';
import { Send } from 'lucide-react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="w-full lg:w-1/4">
      <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded bg-blue-900/50 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Subscribe
          <Send className="w-4 h-4 ml-2" />
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;