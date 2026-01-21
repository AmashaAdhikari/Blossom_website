
import React from 'https://esm.sh/react@19.0.0';
import { CarePackage } from '../types.ts';

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
  }
];

export const Packages: React.FC = () => {
  return (
    <div className="bg-warmWhite py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Care Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packageData.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blossom mb-4">{pkg.name}</h3>
              <p className="text-gray-600 mb-6">{pkg.hours}</p>
              <button className="w-full py-4 bg-blossom text-white rounded-full font-bold">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
