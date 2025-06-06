import React from 'react';

const tourLocations = [
  { id: 1, name: 'Reception', image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg' },
  { id: 2, name: 'Male Ward', image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg' },
  { id: 3, name: 'Female Ward', image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg' },
  { id: 4, name: "Doctor's Office", image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg' },
  { id: 5, name: 'Scan Area', image: 'https://images.pexels.com/photos/4226883/pexels-photo-4226883.jpeg' },
  { id: 6, name: 'Outdoor Gym', image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg' },
  { id: 7, name: 'Mini Waiting Area', image: 'https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg' },
  { id: 8, name: 'Surgery Theater', image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg' },
  { id: 9, name: 'Entrance', image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg' }
];

export default function VirtualTour() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Virtual Tour</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourLocations.map((location) => (
          <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{location.name}</h3>
              <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}