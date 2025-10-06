import React from 'react';
import ReviewCard from '../components/ReviewCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      rating: 5,
      review: "I achieved Band 8.5 overall! The speaking practice sessions were incredibly helpful. The trainers understood exactly what I needed to improve.",
      avatar: "bg-gradient-to-br from-pink-400 to-red-500"
    },
    {
      name: "Ahmed Khan",
      role: "Software Engineer",
      rating: 5,
      review: "The AI band score prediction helped me track my progress. I went from Band 6 to Band 8 in just 2 months of structured learning.",
      avatar: "bg-gradient-to-br from-blue-400 to-indigo-500"
    },
    {
      name: "Maria Garcia",
      role: "Business Graduate",
      rating: 5,
      review: "Excellent teaching methodology and personalized attention. The mock tests were exactly like the real IELTS exam. Highly recommend!",
      avatar: "bg-gradient-to-br from-green-400 to-teal-500"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600">
            See what our successful students have to say about their IELTS journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;