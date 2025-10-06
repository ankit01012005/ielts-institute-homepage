import React from 'react';
import { Users, BookOpen, Globe, Award } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Learn from certified IELTS experts with 10+ years of experience and proven track records.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Materials",
      description: "Access to latest IELTS prep books, practice tests, and exclusive study materials.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Speaking Practice",
      description: "Daily one-on-one sessions with native speakers for authentic conversation practice.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      title: "AI Band Score Prediction",
      description: "Get real-time band score predictions using our advanced AI assessment system.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures you're fully prepared for every aspect of the IELTS exam
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;