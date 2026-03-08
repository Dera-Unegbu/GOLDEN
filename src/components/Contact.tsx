import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* Blue Call Button */}
            <a 
              href="tel:+2348036746384"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
            >
              <Phone size={20} />
              Call +2348036746384
            </a>

            {/* Green WhatsApp Button */}
            <a 
              href="https://wa.me/2348084915273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.810194247695!2d6.972376132411153!3d4.8635787023807735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d18823569301%3A0xddd86608deefdd7b!2sGOLDEN%20HANDS%20MEDICAL%20CENTER!5e0!3m2!1sen!2sng!4v1749066778823!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Golden Hands Medical Centre Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}