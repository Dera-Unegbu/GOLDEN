import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import VirtualTour from './components/VirtualTour';
import Services from './components/Services';
import Contact from './components/Contact';
import Events from './components/Events';
import RecentEvents from './components/RecentEvents';
import hospitalImg from './assets/goldenbu.png';
import theaterImg from './assets/theater.jpeg';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={hospitalImg}
            alt="Hospital exterior"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to Golden Hands Medical Centre
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
              Providing exceptional healthcare with a personal touch
            </p>

            {/* Contact Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+2348084915273"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
              >
                <Phone size={20} />
                Call Us
              </a>
              <a
                href="https://wa.me/2348084915273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            <div className="mt-10">
              <a
                href="/booking"
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors inline-block"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <RecentEvents />

      {/* About Section */}
      <div className="relative mt-20">
        <div className="absolute inset-0">
          <img
            src={theaterImg}
            alt="Medical facility"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Golden Hands Medical Centre: Excellence in Care, 24/7
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              At Golden Hands Medical Centre, we are committed to providing round-the-clock healthcare services,
              ensuring patients receive timely and high-quality medical attention—any time of the day or night.
              Our team of skilled professionals is dedicated to delivering compassionate care while utilizing
              state-of-the-art equipment to enhance diagnostic accuracy and treatment effectiveness.
            </p>
            <p className="mt-4 text-xl text-white font-semibold">
              Located @ 129 Obiwali Rd, Rumuigbo, Port Harcourt 500102, Rivers State, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/tour" element={<VirtualTour />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;