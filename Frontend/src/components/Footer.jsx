import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="text-lg">&copy; StayHub Private Limited</div>
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-blue-500">
              Privacy
            </a>
            <a href="/terms" className="hover:text-blue-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Your main content goes here */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
