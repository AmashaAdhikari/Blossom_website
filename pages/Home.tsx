
import React, { useState } from 'https://esm.sh/react@19.0.0';

interface HomeProps {
  onNavigateToPackages: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToPackages }) => {
  const [activeFeature, setActiveFeature] = useState<null | { label: string; details: string; features: string[] }>(null);

  const curriculumItems = [
    { 
      label: 'Education', 
      icon: 'fa-book-open', 
      color: 'bg-indigo-50', 
      text: 'Foundational learning through structured play.',
      details: 'Our educational facilities are designed to spark curiosity and foster a lifelong love for learning.',
      features: [
        'Interactive Smart Boards for visual learning',
        'Montessori-inspired learning materials',
        'Early Literacy & Numeracy programs',
        'Science & Nature exploration corner',
        'Creative Arts and Music studio'
      ]
    },
    { 
      label: 'Social Habits', 
      icon: 'fa-users', 
      color: 'bg-green-50', 
      text: 'Learning the value of sharing and teamwork.',
      details: 'We help children navigate social environments with confidence.',
      features: ['Conflict resolution', 'Group projects', 'Peer interaction', 'Table manners']
    },
    { 
      label: 'Hygiene', 
      icon: 'fa-hands-bubbles', 
      color: 'bg-cyan-50', 
      text: 'Encouraging clean habits for a healthy life.',
      details: 'Health and safety are our top priorities.',
      features: ['Guided handwashing', 'Personal grooming', 'Sanitized environment', 'Healthy eating habits']
    },
    { 
      label: 'Emotional Intelligence', 
      icon: 'fa-heart', 
      color: 'bg-pink-50', 
      text: 'Nurturing empathy and self-awareness.',
      details: 'Understanding feelings is the key to personal growth.',
      features: ['Empathy workshops', 'Mindfulness exercises', 'Identifying emotions', 'Confidence building']
    }
  ];

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[800px] flex items-center bg-blossom overflow-hidden select-none">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-20">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold mb-6 animate-slide-up">
                Premium Childcare in Colombo
              </span>
              
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-8xl md:text-9xl font-bold font-noto-condensed leading-none mb-2">
                  Blossom
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium tracking-wide opacity-95 uppercase">
                  Nurturing beyond care
                </h2>
              </div>

              <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Parents today need more than just childcare — they want a safe, caring place where their kids can grow and thrive. Our mission means we go beyond supervision to help every child learn, develop, and flourish.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button 
                  onClick={onNavigateToPackages}
                  className="px-10 py-4 bg-white text-blossom rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  Explore Our Care Packages
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-end items-center relative h-full">
              <div 
                onClick={onNavigateToPackages}
                className="relative group cursor-pointer z-30 transition-all duration-700 ease-in-out transform hover:scale-[1.03]"
              >
                <div className="rounded-[5rem] overflow-hidden border-[12px] border-white/40 shadow-2xl bg-white relative">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop" 
                    alt="Teacher and young child learning together at Blossom Daycare" 
                    className="w-[550px] h-[700px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blossom/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white text-blossom px-10 py-5 rounded-full font-bold shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 text-lg">
                      View Care Packages <i className="fas fa-arrow-right ml-2"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-lg p-8 rounded-[2.5rem] text-gray-800 shadow-2xl border border-white/50 group-hover:bottom-12 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-pastelBlue rounded-full flex items-center justify-center mr-4 text-blossom">
                        <i className="fas fa-graduation-cap text-xl"></i>
                      </div>
                      <p className="font-bold text-2xl text-gray-900">Expert Supervision</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Our certified educators build meaningful bonds with every child, fostering a love for learning from day one.
                    </p>
                    <div className="mt-4 flex items-center text-blossom font-bold">
                      <span>Click to see how we care</span>
                      <i className="fas fa-chevron-right ml-2"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-pastelBlue text-blossom font-bold mb-4">OUR CURRICULUM</div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Development Areas</h2>
          <p className="text-gray-500 mb-16 text-lg">Click on a card to learn more about our facilities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {curriculumItems.map((item, i) => (
               <button 
                key={i} 
                onClick={() => setActiveFeature(item)}
                className={`p-10 ${item.color} rounded-[3rem] transition-all hover:scale-105 duration-300 shadow-sm border border-gray-100 flex flex-col items-center group text-center w-full`}
               >
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blossom text-3xl mb-6 shadow-sm border border-gray-50 group-hover:bg-blossom group-hover:text-white transition-colors duration-300">
                   <i className={`fas ${item.icon}`}></i>
                 </div>
                 <h4 className="font-bold text-2xl text-gray-800 mb-3">{item.label}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.text}</p>
                 <span className="text-blossom text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {activeFeature && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[3rem] max-w-2xl w-full p-8 md:p-12 relative shadow-2xl animate-slide-up">
            <button 
              onClick={() => setActiveFeature(null)}
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-pastelBlue rounded-full flex items-center justify-center text-blossom text-2xl mr-6">
                <i className={`fas ${activeFeature.icon}`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{activeFeature.label} Facilities</h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {activeFeature.details}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeFeature.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-2xl">
                  <i className="fas fa-check-circle text-blossom mr-3"></i>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button 
                onClick={() => setActiveFeature(null)}
                className="w-full py-4 bg-blossom text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
