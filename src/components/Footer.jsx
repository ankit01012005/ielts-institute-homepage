import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                IE
              </div>
              <span className="ml-3 text-xl font-bold">IELTS Excellence</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for IELTS success. Achieve your dreams with our expert guidance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Mock Tests</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Success Stories</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">IELTS Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Speaking Practice</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Writing Review</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Band Score Prediction</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-indigo-400" />
                <span>+91(628....008)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-indigo-400" />
                <span>info@ieltsexcellence.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-indigo-400" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IELTS Excellence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;