
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { Login } from './pages/Login';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('blossom_cookie_consent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('blossom_cookie_consent', 'true');
    setShowCookieConsent(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigateToPackages={() => setCurrentPage(Page.Packages)} />;
      case Page.Packages:
        return <Packages />;
      case Page.Login:
      case Page.SignUp:
        return <Login type={currentPage === Page.Login ? 'login' : 'signup'} onBack={() => setCurrentPage(Page.Home)} />;
      default:
        return <Home onNavigateToPackages={() => setCurrentPage(Page.Packages)} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-blossom shadow-2xl p-6 md:p-8 animate-bounce-in">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center text-left">
              <div className="hidden md:block bg-pastelBlue p-3 rounded-full mr-4 text-blossom">
                <i className="fas fa-cookie-bite text-2xl"></i>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                We use cookies to ensure you get the best experience on our website. By continuing, you agree to our 
                <a href="#" className="text-blossom underline ml-1 font-semibold">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex space-x-4 shrink-0 w-full md:w-auto">
              <button 
                onClick={handleAcceptCookies}
                className="flex-1 md:flex-none px-8 py-3 bg-blossom text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-md active:scale-95"
              >
                Accept Cookies
              </button>
              <button 
                onClick={() => setShowCookieConsent(false)}
                className="flex-1 md:flex-none px-8 py-3 text-gray-400 hover:text-gray-600 transition-all font-medium"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;
