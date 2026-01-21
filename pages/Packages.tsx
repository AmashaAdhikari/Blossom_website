
import React from 'react';
import { CarePackage } from '../types';

const packageData: CarePackage[] = [
  {
    id: '1',
    name: 'Half-Day Care',
    ageGroup: '18 months - 5 years',
    hours: '8:00 AM - 12:30 PM',
    activities: ['Breakfast & Snack', 'Social Play', 'Language Session'],
    features: ['Real-time Parent App Updates', 'CCTV Access', 'Development Tracking'],
    price: '$250/mo'
  },
  {
    id: '2',
    name: 'Full-Day Care',
    ageGroup: '6 months - 5 years',
    hours: '7:30 AM - 6:00 PM',
    activities: ['Full Meals & Snacks', 'Naps & Quiet Time', 'Multi-skill Curriculum'],
    features: ['All Half-Day Features', 'Daily Milestone Reports', 'Nap Monitoring'],
    price: '$450/mo'
  },
  {
    id: '3',
    name: 'Monthly Program',
    ageGroup: 'Flexible',
    hours: 'Custom Schedule',
    activities: ['Full Enrichment Program', 'Habit Building', 'Creative Arts'],
    features: ['Dedicated Caretaker', 'Priority Support', 'Monthly Progress Reviews'],
    price: 'Custom'
  }
];

export const Packages: React.FC = () => {
  return (
    <div className="bg-warmWhite py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Care Packages</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We offer flexible plans designed to fit your family's unique needs. Choose the care schedule that works best for you and your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packageData.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col group">
              <div className="bg-blossom p-8 text-white relative">
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="opacity-90">{pkg.ageGroup}</p>
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:opacity-20 transition-opacity">
                  <i className="fas fa-child"></i>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <div className="flex items-center text-gray-600 mb-6 text-sm">
                  <i className="fas fa-clock text-blossom mr-2"></i>
                  {pkg.hours}
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Included Activities:</h4>
                  <ul className="space-y-2">
                    {pkg.activities.map((act, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <i className="fas fa-check-circle text-blossom mt-1 mr-2 shrink-0"></i>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Care Features:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <i className="fas fa-star text-yellow-400 mt-1 mr-2 shrink-0"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.price && (
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    {pkg.price}
                  </div>
                )}
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button className="w-full py-4 bg-blossom text-white rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-1 active:scale-95">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-pastelBlue/50 rounded-[2rem] p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan is right?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our enrollment specialists can help you design a schedule that fits your commute and your child's needs.</p>
          <button className="px-10 py-4 border-2 border-blossom text-blossom rounded-full font-bold hover:bg-blossom hover:text-white transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
