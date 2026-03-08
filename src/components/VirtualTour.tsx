import React, { useState } from 'react';

const tourLocations = [
  { 
    id: 1, 
    name: 'Reception', 
    image: 'https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?q=80&w=387&auto=format&fit=crop',
    details: 'The central hub for patient registration, appointment scheduling, and initial triage. This is where medical records are managed and insurance verification occurs.'
  },
  { 
    id: 2, 
    name: 'Male Ward', 
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
    details: 'Dedicated inpatient care for male patients. Services include post-operative recovery, medication administration, and 24/7 nursing observation.'
  },
  { 
    id: 3, 
    name: 'Female Ward', 
    image: 'https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?q=80&w=870&auto=format&fit=crop',
    details: 'Specialized inpatient facility for female patients, providing maternal care, general surgery recovery, and specialized internal medicine treatments.'
  },
  { 
    id: 4, 
    name: "Doctor's Office", 
    image: 'https://lh3.googleusercontent.com/rd-gg-dl/AOI_d__W_qEPWzuiZILZGUhzWhJREc4Sgv24zPteStSEZqEiMCePGm8I99DeT11o8E_v_qvSXAEy5I4sHGnqQw7MOR7rq7UwNFlE5oQac4Clwwhirel2KH14jHg9Yqwhi-X4F6qfV85ZgzwfRGD6eq2ZC9SExaLjfzF7UnyixN_O86vj1-iLNGi1cAM71wrwzrpdg2AOlF0XwC9PK9JVYU_TYypdmLbxs734OwahdW6mPIi35DiTJ1Dp_3N4rzH4xz4kwK_UsTTwSiFzRleVB88ljwjfpsgUTG2RQ6xvqQlgULFWwRBgdorevYx-SX812kaEITXuXxkEowta0SVUTrFjLI7aC-ub9jzNsv5x7Dnvf1tPxfbfXiMJGaj_xaH_0se-5mCMcgwN-hAhJy3-dT_zXObEP_52vi9-7WwPTS2diAlKs-YJOhiwTjjL9X4ElZtFdg1Xs4UZNT99osFTBbMKQ0MRQ9d2D9B2HQ0z4gDIPbmc2x7ov1iGTwEXWAdYX7g0FE7RiO-60C3PuTw5vBM6UtnmBsrwGE2lw8NIYAWucK2un8RWTo1YCNp9c3bdPOM07jZvNrNgeoNk8uANg2ut2qX566PY3spDn7r6tr5ak-FxqMF0j8wkS13j-lOMdz7UKaVzBK4mLcqP_6_RYbJ5Ijnd3Z1E9b-nAmasUNhVryYU_IvlRHqu5NDEkbcYhPf_Pg6W1Uj53w7Do-YDZtiNkyJ_FGEpZVn4ecWrLhBgpQIg2_HctykHbQo3kIZ9fX37SXbKgbUVhwMObhJbfbeh91RPrLaC6Re4U7fIIs-Vacb9FMpuhJotEGwElefTHsxJzBf3iDQvxt1a7aG-P5KnXczp46rEMS5eJhCOxhGBmB7BV9jFkadW8vefZ-x0C_m-plCajBELJhzmV2d9Ja1n5TMrsLBOUn6SjepJrYWvNZp0CCZiO2MoGEkMbyw5MukYjAuLB4fWS1G8a9x5rMYXb-F87fhIcggPN7PJ0tr4ox2Eihkq4efG1b-t3-gck4Z4wxvIipBsZ7wCjjG7cxve8s_Tn2FT_7wJMS1siZFMb5DMlgvkYnMX6_KL5mm2k_Ez-oR9AjW21f76a7p8crHL6A87PUNSODE16jewek5TYc8RjYNPZM3DZqPP9pFVQqpLKg2x3Bd5LBdsXhov8txdaF2oY29AmQfkeoI94TFNtxgOMwRjyvpzsg4AkPOWNxQXRMafrCj0qJ3EajBJrstq13xf6jPXIgz-82BmdwTDB6yHTZLqnvMPAMxEa61klXuw412ARrPooD2q99WFCIQegFIOLzbOgi6w8s-GUwao4lB2mv5AS9Yl2ucNFg0XUNrc9Q=s1600-rj',
    details: 'Private consultation rooms where Dr. Gladys Unegbu and our specialists perform physical exams, discuss diagnoses, and create personalized treatment plans.'
  },
  { 
    id: 5, 
    name: 'Scan Area', 
    image: 'https://images.unsplash.com/photo-1691935071222-c008a4ccc2ca?q=80&w=387&auto=format&fit=crop',
    details: 'Equipped with advanced diagnostic imaging technology including X-rays, MRI, and Ultrasound to help visualize internal structures for accurate diagnosis.'
  },
  { 
    id: 6, 
    name: 'Outdoor Gym', 
    image:'https://images.unsplash.com/photo-1637907380004-827e30fa7d72?q=80&w=387&auto=format&fit=crop',
    details: 'A specialized rehabilitation zone used for physiotherapy, mobility training, and cardiovascular exercises in a fresh-air environment.'
  },
  { 
    id: 7, 
    name: 'Mini Waiting Area', 
    image: 'https://images.unsplash.com/photo-1771574204208-b47e2d863bc5?q=80&w=435&auto=format&fit=crop',
    details: 'A quiet, comfortable space for family members and patients awaiting results or short-term procedures.'
  },
  { 
    id: 8, 
    name: 'Surgery Theater', 
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg',
    details: 'A sterile, high-tech environment for major and minor operative procedures, ranging from emergency surgeries to elective specialized treatments.'
  },
  { 
    id: 9, 
    name: 'Entrance', 
    image: 'https://lh3.googleusercontent.com/rd-gg-dl/AOI_d_8LjEo7qFiq1Sw4OvRPBGHvV5re2KA2bPSpT2qq6sodjDtMOVFm59akPLTFHBWqFNlgob45U62hPoCAJoOZAiQ8kU-9UlI-cK7pL1DC1SrzO6z2dIeo1z8VOj41xQyVYnt16bHEuojVOO7qYWQuP4RNH-V9Uzn0qYAVqKq-oujK5lTXIZsebt0SIjn_729a47Den_2LybcHxS_gPnU4V31N-wyL5WZnZcbRh-eU4HMse-z5kEj5MxM2kGhXgqgXNFNQGPiy62si231ZlGhtbCbMA6K1OwmzcE2A3oatdIOVr0upzYMSnAoSlnm2ImKva-m85x4dSEOnKH2i2QQzGoHudpYImtvl-8YqbtAF9jyNVaR5nLrA-gNJIIR3wFegGSNKz-m6xy0UBS1ueQ5wscToVzApamavr70yQRBJcugu5tsOGfpqUEIedSgYB4b_bBBKNv9yRjvjNBZzJbivLXwHPNNxV8zZUnqmto99GRijJWHcXQTid4-TeFwF5ob3HtT05e0WKHnxYHpK8Vk2xaT1vxlDI7EJ3VJmudIijBp9iewz4BNTQWko-D2CLb7ciLGOevna7pJfQ-j7XwmysBO7PlZtnASzg7Pun_pezLQV_1NJo0AJOOTdm7EM3GWXuyn2CxQ3SLFIT9jaNReGGf-S7Ms5-1IkbiNhnqlkLcLB12jtVXx-4m1jWIGtjlY-iWjoXebpEvhMiMMsYy_DBHKYqFKp9Ix-ywA7giozDHTAGsR73FA8IdlrdpJcjRQi0bMHuWu6oVGGiFiMDG3rzwsWyg8-Ro4xJsE06VZ3yJN7jssWjGAy_2tstUavj9PGHVhxG5OcoAXAHmNxg5HZrqAnqk44Uwg0G72PCAeLalmyTJXA_AseQtnS4GV4Zlj1Lc_llbrb88MaYU9zPBWls8r7egrGDvlJTWaPurNjMo96anEpKSQwl4LBMVh7n4mYe1XumLOY9vrjBme3CpWemkjPCfhlJ1gi-HIxtVYXOy73xk9QKacLHSYmgw_E6g98JWYXKzlwfAbpOh8jsvm67kkQbUWqs9d3D6vK-pkbbZ2zO6ywwcbSxwNnGgc6Xa7XLOe5jBmXCJHuOHcpoEL0_UqMgzA7HblJoCF0wiBgxjf-oFKGAYemPEf_zLOM_nxTLW08d9_fDdzimsBVYpOGHk7iPtAdrYloIlYL6QcThS-vQ_Q1gqWb1Ekfo0jnwqTcIEe6qcG-5yK570FY88sVyTzepSOUQGFabHVBregLYOZf0qIrgl7NYGpaDjGeIsjT01KnyalHxmxgbLVytsHqMBaic0ZTptlBMzJyIpYLs9V0hW5BvVLmVDsRImN8VA4x=s1600-rj',
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