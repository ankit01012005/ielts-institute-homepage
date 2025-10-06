import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;