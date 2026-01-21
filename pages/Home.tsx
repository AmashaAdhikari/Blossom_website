
import React from 'react';

interface HomeProps {
  onNavigateToPackages: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToPackages }) => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-blossom overflow-hidden">
        {/* Decorative Background Elements */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
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

              <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Parents today need more than just childcare — they want a safe, caring place where their kids can grow and thrive. Our mission means we go beyond supervision to help every child learn, develop, and flourish.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button 
                  onClick={onNavigateToPackages}
                  className="px-10 py-4 bg-white text-blossom rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  Explore Our Care Packages
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                  Take a Virtual Tour
                </button>
              </div>
            </div>

            {/* Visual Side Content */}
            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/aistudio-community/media/main/daycare-classroom.jpg" 
                  alt="Blossom Classroom" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback to provided image path or placeholder if local fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
              {/* Decorative shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/id/1/800/800" alt="Child learning" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pastelBlue rounded-3xl -z-10 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-blossom/20 rounded-3xl rotate-6 pointer-events-none"></div>
            </div>
            <div>
              <h2 className="text-blossom font-bold text-lg uppercase tracking-widest mb-4">Our Vision</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-snug">
                Where Growth and Play Go Hand in Hand
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Blossom was founded with a single goal: to provide world-class early childhood development that feels like home. We believe every child is a unique blossom that needs the right environment, nutrition, and emotional support to bloom.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our approach emphasizes trust, safety, and holistic growth, ensuring your child is not just watched, but nurtured in every sense of the word.
              </p>
              <div className="flex items-center space-x-4 text-blossom font-bold text-xl italic">
                <i className="fas fa-quote-left text-blossom opacity-30 text-4xl"></i>
                <span>Nurturing the future leaders of tomorrow.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Blossom Section */}
      <section className="py-24 bg-pastelBlue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Blossom?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Blossom blends modern technology with expert childcare to give parents complete peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="fa-video" 
              title="Live CCTV Access" 
              desc="Stay connected with your child through our dedicated parent app, offering real-time video feeds." 
            />
            <FeatureCard 
              icon="fa-calendar-check" 
              title="Daily Updates" 
              desc="Receive detailed logs on meals, naps, activities, and major developmental milestones every day." 
            />
            <FeatureCard 
              icon="fa-chart-line" 
              title="Progress Tracking" 
              desc="Comprehensive reports on your child's learning progress and social development." 
            />
            <FeatureCard 
              icon="fa-user-nurse" 
              title="Trained Staff" 
              desc="Our educators are certified professionals who genuinely love working with children." 
            />
            <FeatureCard 
              icon="fa-shield-heart" 
              title="Safe Environment" 
              desc="Secure premises conveniently located near Colombo with strict safety protocols." 
            />
            <FeatureCard 
              icon="fa-hand-holding-heart" 
              title="Holistic Curriculum" 
              desc="Focus on empathy, language, hygiene, and social skills for well-rounded growth." 
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs & Learning Approach</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            We offer age-appropriate activities focusing on learning through play, structure, and emotional care.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: 'fa-language', label: 'Language Skills', color: 'bg-orange-100 text-orange-500' },
            { icon: 'fa-users', label: 'Social Habits', color: 'bg-green-100 text-green-500' },
            { icon: 'fa-soap', label: 'Hygiene & Care', color: 'bg-blue-100 text-blue-500' },
            { icon: 'fa-heart', label: 'Emotional Intelligence', color: 'bg-pink-100 text-pink-500' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-3xl hover:bg-gray-50 transition-colors">
              <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="font-bold text-xl text-gray-800">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blossom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Give your child the best start in life</h2>
          <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto">
            Experience care that goes beyond supervision. Join the Blossom family today.
          </p>
          <button 
            onClick={onNavigateToPackages}
            className="px-12 py-5 bg-white text-blossom rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
          >
            View Our Care Packages
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group text-left border border-gray-100">
    <div className="w-14 h-14 bg-pastelBlue rounded-2xl flex items-center justify-center text-blossom text-2xl mb-6 group-hover:bg-blossom group-hover:text-white transition-colors">
      <i className={`fas ${icon}`}></i>
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);
