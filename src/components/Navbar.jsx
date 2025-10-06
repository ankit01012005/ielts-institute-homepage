import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-screen bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              IE
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">IELTS Excellence</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer">Courses</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer">Contact</a>
            <Button size="sm">Book Free Trial</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer">Home</a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer">Courses</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer">Contact</a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">Book Free Trial</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;