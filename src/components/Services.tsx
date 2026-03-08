import React from 'react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h1>

      <div className="space-y-16">
        {/* 1. Core Medical Consultations & Specialized Care */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Medical Consultations"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Medical Consultations & Specialized Care</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">General & Specialist Consultations</h3>
                <p className="text-gray-700">Expert physicians available for a wide range of specialties, ensuring personalized and thorough healthcare for every patient.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Healthcare Certifications for Companies</h3>
                <p className="text-gray-700">Comprehensive pre-employment screenings, annual staff medical check-ups, and corporate health certifications to ensure a healthy workforce.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Geriatrics (Elder Care)</h3>
                <p className="text-gray-700">Specialized medical services tailored to the unique needs of senior citizens, focusing on mobility, cognitive health, and chronic disease management.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">24/7 Emergency Care</h3>
                <p className="text-gray-700">A fully equipped emergency unit ready to handle urgent medical needs at any hour of the day or night.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Family Health: Pediatrics & Maternity */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1457342813143-a1ae27448a82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Maternal and Child Care"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Family & Reproductive Health</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Antenatal & Postnatal Care</h3>
                <p className="text-gray-700">Comprehensive support for expectant mothers, from early pregnancy through delivery and postpartum recovery, ensuring the safety of both mother and child.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Child Care (Pediatrics)</h3>
                <p className="text-gray-400 italic mb-2">"Dedicated to the little ones."</p>
                <p className="text-gray-700">Specialized pediatric care including immunizations, developmental tracking, and treatment of childhood illnesses in a friendly environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Surgical & Home Services */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
            alt="Surgical Services"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Surgical Excellence & Home Care</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Surgeries</h3>
                <p className="text-gray-700">Our state-of-the-art theaters handle both minor and major surgical procedures with a focus on minimally invasive techniques and rapid recovery.</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-2">Home Care Services</h3>
                <p className="text-gray-700">Bringing excellence to your doorstep. We provide professional nursing, doctor visits, and post-operative care in the comfort of your own home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Diagnostics: Laboratory & Imaging */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Diagnostic Services"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Advanced Diagnostics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Laboratory Services</h3>
                <p className="text-gray-700 mb-4">Our fully automated lab provides fast and accurate results for biochemistry, hematology, microbiology, and specialized pathology tests.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Imaging (Scans, ECG, X-rays)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>MRI & CT:</strong> High-resolution internal imaging.</li>
                  <li><strong>Ultrasound:</strong> Safe prenatal and organ diagnostics.</li>
                  <li><strong>X-ray & ECG:</strong> Precise heart and bone assessments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Physical Wellness: Physiotherapy & Fitness */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540111970170-b1c4d4fbadaa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wellness and Fitness"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Physiotherapy, Fitness & Rehabilitation</h2>
            <p className="text-gray-700 mb-6">
              We believe in a holistic approach to healing that goes beyond medication. Our rehabilitation wing focuses on restoring function and promoting long-term health.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Physiotherapy</h3>
                <p className="text-gray-700">Manual therapy, electrotherapy, and customized exercise programs to treat sports injuries, stroke recovery, and chronic pain.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Fitness & Outdoor Gym</h3>
                <p className="text-gray-700">Access to professional-grade equipment and guided fitness sessions to boost cardiovascular health and physical strength during and after recovery.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-xl font-semibold text-gray-800 mt-12 bg-blue-50 py-8 rounded-xl border border-blue-100">
          Golden Hands Medical Centre—because your health deserves excellence, compassion, and innovation.
        </div>
      </div>
    </div>
  );
}