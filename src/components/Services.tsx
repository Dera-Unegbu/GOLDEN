import React from 'react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      <div className="space-y-16">
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
            alt="Emergency Care"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Comprehensive Medical Services</h2>
            <p className="text-gray-700 mb-4">24/7 Emergency Care – Our doors are always open, with a fully equipped emergency unit ready to handle urgent medical needs.</p>
            <p className="text-gray-700 mb-4">Specialized Consultations – Expert physicians available for a range of specialties, ensuring personalized and thorough healthcare.</p>
            <p className="text-gray-700">Inpatient & Outpatient Services – Comfortable wards and recovery spaces designed for effective healing.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4226883/pexels-photo-4226883.jpeg"
            alt="Diagnostic Imaging"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Advanced Diagnostic Imaging</h2>
            <p className="text-gray-700 mb-6">We employ cutting-edge technology for precise and efficient diagnostics, offering major types of scans, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>MRI Scans – Detailed imaging for neurological, musculoskeletal, and internal examinations.</li>
              <li>CT Scans – High-resolution imaging for detecting internal injuries and conditions.</li>
              <li>Ultrasound Scans – Safe and effective imaging, particularly for prenatal care and organ diagnostics.</li>
              <li>X-ray Services – Quick and accurate imaging for bone and joint assessments.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg"
            alt="Outdoor Gym"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Outdoor Gym & Wellness Facilities</h2>
            <p className="text-gray-700">
              Understanding the role of physical rehabilitation and wellness in recovery, our hospital features an Outdoor Gym, 
              designed to promote movement, strength-building, and relaxation. Patients recovering from surgeries or injuries 
              can utilize this space under professional guidance, ensuring a holistic approach to healing.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
            alt="Medical Equipment"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Cutting-Edge Equipment & Patient-Centered Comfort</h2>
            <p className="text-gray-700 mb-6">
              Golden Hands Medical Centre integrates modern medical technologies with a comfortable, patient-focused environment. 
              From precision surgical tools to advanced monitoring systems, our facilities ensure a seamless healthcare experience 
              that meets international standards.
            </p>
            <h3 className="text-xl font-bold mb-4">A Satisfying Experience for Patients & Families</h3>
            <p className="text-gray-700">
              We strive to create a welcoming, supportive atmosphere, ensuring both patients and their families feel at ease. 
              Our staff is trained to prioritize patient dignity and comfort, making every step of the healing process as smooth 
              as possible. Whether it's through personalized care, transparent communication, or world-class medical expertise, 
              we deliver healthcare that truly cares.
            </p>
          </div>
        </section>

        <div className="text-center text-xl font-semibold text-gray-800 mt-12">
          Golden Hands Medical Centre—because your health deserves excellence, compassion, and innovation.
        </div>
      </div>
    </div>
  );
}