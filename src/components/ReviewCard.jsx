import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, role, rating, review, avatar }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${avatar} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {name[0]}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic">"{review}"</p>
    </div>
  );
};

export default ReviewCard;