
import React from 'react';

interface LoginProps {
  type: 'login' | 'signup';
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ type, onBack }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-warmWhite p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-gray-400 hover:text-blossom transition-colors"
        >
          <i className="fas fa-arrow-left text-xl"></i>
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blossom rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3">
            <i className="fas fa-seedling text-white text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{type === 'login' ? 'Parent Portal' : 'Join Blossom'}</h2>
          <p className="text-gray-500 mt-2">{type === 'login' ? 'Access CCTV and daily updates' : 'Start your journey with us today'}</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {type === 'signup' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-4">First Name</label>
                <input type="text" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-blossom outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-4">Last Name</label>
                <input type="text" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-blossom outline-none" placeholder="Doe" />
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-4">Email Address</label>
            <input type="email" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-blossom outline-none" placeholder="name@email.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-4">Password</label>
            <input type="password" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-blossom outline-none" placeholder="••••••••" />
          </div>

          <button className="w-full py-4 bg-blossom text-white font-bold rounded-full hover:bg-opacity-90 shadow-xl transition-all mt-6 active:scale-95">
            {type === 'login' ? 'Login to Portal' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {type === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button className="text-blossom font-bold ml-1 hover:underline">
              {type === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button onClick={onBack} className="text-sm font-semibold text-gray-400 hover:text-gray-600 uppercase tracking-widest">
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
