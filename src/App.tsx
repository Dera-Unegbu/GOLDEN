import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import VirtualTour from './components/VirtualTour';
import Services from './components/Services';
import Contact from './components/Contact';

function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg"
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
            <p className="mt-4 text-xl text-white font-semibold">
              Call and Whatsapp @ +2348084915273 
            </p>
            <div className="mt-10">
              <a
                href="/booking"
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
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
              Located @ 127 Obiwali Rd, Rumuigbo, Port Harcourt 500102, Rivers State, Nigeria.
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;