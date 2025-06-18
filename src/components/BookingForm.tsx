import React, { useState } from 'react';

export default function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify will handle the form submission automatically
    // Show success message after a brief delay to simulate processing
    setTimeout(() => {
      setSubmitStatus('success');
    }, 1000);
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h2>
              <p className="text-lg text-green-700">Your appointment request has been submitted successfully. We'll get back to you soon!</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Book an Appointment</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <input 
                type="hidden" 
                name="subject" 
                value="New lead from %{formName} (%{submissionId})" 
              />
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your appointment needs or any specific concerns..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Send Appointment Request
              </button>
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