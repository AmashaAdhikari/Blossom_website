
import React, { useState } from 'https://esm.sh/react@19.0.0';
import { Page } from '../types.ts';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>
              <div className="w-10 h-10 bg-blossom rounded-full flex items-center justify-center mr-3 shadow-lg">
                <i className="fas fa-seedling text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-blossom tracking-tight">Blossom</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage(Page.Home)} className={`font-medium ${currentPage === Page.Home ? 'text-blossom' : 'text-gray-600 hover:text-blossom'}`}>Home</button>
              <button onClick={() => setCurrentPage(Page.Packages)} className={`font-medium ${currentPage === Page.Packages ? 'text-blossom' : 'text-gray-600 hover:text-blossom'}`}>Care Packages</button>
              <button className="text-gray-600 hover:text-blossom font-medium">About</button>
              <button onClick={() => setCurrentPage(Page.Login)} className="px-5 py-2 text-blossom border border-blossom rounded-full hover:bg-blossom hover:text-white transition-all font-semibold">Login</button>
              <button onClick={() => setCurrentPage(Page.SignUp)} className="px-5 py-2 bg-blossom text-white rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-md">Sign Up</button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 focus:outline-none">
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-xl">
            <button onClick={() => {setCurrentPage(Page.Home); setMobileMenuOpen(false);}} className="block w-full text-left font-medium text-gray-700">Home</button>
            <button onClick={() => {setCurrentPage(Page.Packages); setMobileMenuOpen(false);}} className="block w-full text-left font-medium text-gray-700">Care Packages</button>
            <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-medium text-gray-700">About</button>
            <div className="pt-4 flex flex-col space-y-2">
              <button onClick={() => {setCurrentPage(Page.Login); setMobileMenuOpen(false);}} className="w-full py-2 text-center text-blossom border border-blossom rounded-full">Login</button>
              <button onClick={() => {setCurrentPage(Page.SignUp); setMobileMenuOpen(false);}} className="w-full py-2 text-center bg-blossom text-white rounded-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blossom rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-seedling text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold text-blossom">Blossom</span>
              </div>
              <p className="text-gray-500 mb-4 italic">"Nurturing Beyond Care"</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><i className="fas fa-map-marker-alt text-blossom mr-2"></i> Near Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
