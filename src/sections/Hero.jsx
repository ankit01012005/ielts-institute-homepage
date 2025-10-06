import React from 'react';
import { Star, Award, BookOpen, Users } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              #1 IELTS Institute in the City
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Achieve Your Dream 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> IELTS Score</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Joined thousands of successful students who achieved Band 8+ with our proven methodology, expert trainers, and personalized learning approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="secondary" size="lg">View Success Stories</Button>
            </div>
            <div className="flex items-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">4.9/5</span> Rating
              </div>
              <div>
                <span className="font-semibold">5000+</span> Students Trained
              </div>
              <div>
                <span className="font-semibold">95%</span> Success Rate
              </div>
            </div>
          </div>
          
          {/* Image/Banner */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl p-8 shadow-2xl transform rotate-3">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">IELTS Band 9</h3>
                    <p className="text-gray-600 mb-4">Certified Excellence</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;