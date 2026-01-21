
import React from 'https://esm.sh/react@19.0.0';

interface HomeProps {
  onNavigateToPackages: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToPackages }) => {
  return (
    <div className="animate-fade-in overflow-hidden">
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-blossom overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold mb-6 animate-slide-up">
                Premium Childcare in Colombo
              </span>
              
              <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-8xl md:text-9xl font-bold font-noto-condensed leading-none mb-2">
                  Blossom
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium tracking-wide opacity-90 uppercase">
                  Nurturing beyond care
                </h2>
              </div>

              <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Parents today need more than just childcare — they want a safe, caring place where their kids can grow and thrive.
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

            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/aistudio-community/media/main/daycare-classroom.jpg" 
                  alt="Blossom Classroom" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {['Language Skills', 'Social Habits', 'Hygiene', 'Emotional Intelligence'].map((label, i) => (
               <div key={i} className="p-8 bg-pastelBlue/20 rounded-3xl">
                 <h4 className="font-bold text-xl">{label}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};
