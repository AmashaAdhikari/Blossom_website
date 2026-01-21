
import React from 'https://esm.sh/react@19.0.0';

interface LoginProps {
  type: 'login' | 'signup';
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ type, onBack }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-warmWhite p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{type === 'login' ? 'Parent Portal' : 'Join Blossom'}</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="email" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full" placeholder="Email Address" />
          <input type="password" className="w-full px-6 py-4 bg-gray-50 border-0 rounded-full" placeholder="Password" />
          <button className="w-full py-4 bg-blossom text-white font-bold rounded-full">Continue</button>
        </form>
        <button onClick={onBack} className="mt-6 text-sm font-semibold text-gray-400">Back to Home</button>
      </div>
    </div>
  );
};
