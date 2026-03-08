import React, { useState } from 'react';
import officeImg from 'https://github.com/Dera-Unegbu/GOLDEN/tree/blob/src/assets/docoffice.png';
import entranceImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/reception101.png';
import recepImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/recep.jpg';
import gymImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/gym.jpg';
import scanImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/scanarea.jpg';
import malewardImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/maleward.jpeg';
import femalewardImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/femaleward.jpg';
import waitingImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/waiting.jpg';
import surgeryImg from 'https://github.com/Dera-Unegbu/GOLDEN/blob/main/src/assets/theater.jpeg';

const tourLocations = [
  { 
    id: 1, 
    name: 'Reception', 
    image: recepImg,
    details: 'The central hub for patient registration, appointment scheduling, and initial triage. This is where medical records are managed and insurance verification occurs.'
  },
  { 
    id: 2, 
    name: 'Male Ward', 
    image: malewardImg,
    details: 'Dedicated inpatient care for male patients. Services include post-operative recovery, medication administration, and 24/7 nursing observation.'
  },
  { 
    id: 3, 
    name: 'Female Ward', 
    image: femalewardImg,
    details: 'Specialized inpatient facility for female patients, providing maternal care, general surgery recovery, and specialized internal medicine treatments.'
  },
  { 
    id: 4, 
    name: "Doctor's Office", 
    image: officeImg,
    details: 'Private consultation rooms where Dr. Gladys Unegbu and our specialists perform physical exams, discuss diagnoses, and create personalized treatment plans.'
  },
  { 
    id: 5, 
    name: 'Scan Area', 
    image: scanImg,
    details: 'Equipped with advanced diagnostic imaging technology including X-rays, MRI, and Ultrasound to help visualize internal structures for accurate diagnosis.'
  },
  { 
    id: 6, 
    name: 'Outdoor Gym', 
    image: gymImg,
    details: 'A specialized rehabilitation zone used for physiotherapy, mobility training, and cardiovascular exercises in a fresh-air environment.'
  },
  { 
    id: 7, 
    name: 'Mini Waiting Area', 
    image: waitingImg,
    details: 'A quiet, comfortable space for family members and patients awaiting results or short-term procedures.'
  },
  { 
    id: 8, 
    name: 'Surgery Theater', 
    image: surgeryImg,
    details: 'A sterile, high-tech environment for major and minor operative procedures, ranging from emergency surgeries to elective specialized treatments.'
  },
  { 
    id: 9, 
    name: 'Entrance', 
    image: entranceImg,
    details: 'The main access point featuring 24/7 security, an information desk, and emergency ambulance access for immediate critical care arrival.'
  }
];

export default function VirtualTour() {
  // State to track the currently selected location
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Virtual Tour</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourLocations.map((location) => (
          <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold">{location.name}</h3>
              <button 
                onClick={() => setSelectedLocation(location)}
                className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{selectedLocation.name} - Procedures & Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedLocation.details}
            </p>
            <button 
              onClick={() => setSelectedLocation(null)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}