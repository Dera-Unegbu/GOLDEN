import React, { useState } from 'react';

export default function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Let Netlify handle the form submission naturally
    setSubmitStatus('success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Book an Appointment</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <form name="contact" netlify>
              <input type="hidden" name="form-name" value="contact" />
              
              <p className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </label>
              </p>
              
              <p className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </label>
              </p>
              
              <p>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Appointment Request
                </button>
              </p>
            </form>
          </div>
        </div>

        {/* Image below the form */}
        <div className="mt-8">
          <img
            src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
            alt="Medical facility"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}