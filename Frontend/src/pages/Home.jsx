import React, { useState, useEffect } from 'react';
import { GraduationCap, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
// Using your existing image import
import image from '../assets/image.png';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Anjali Verma',
      quote: 'The coaching and support I received helped me crack NEET in my first attempt!',
    },
    {
      name: 'Ravi Kumar',
      quote: 'Excellent faculty and study material. Highly recommended for JEE aspirants!',
    },
    {
      name: 'Megha Sharma',
      quote: 'Their test series and personal guidance boosted my confidence for board exams.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800">


      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden min-h-screen flex items-center pt-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full -translate-x-32 -translate-y-32 animate-bounce slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            {/* Success Badge */}
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Star className="h-4 w-4 mr-2" />
              Top Ranked Institute 2025
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
              Bright Future Coaching Institute
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">
              Empowering students to achieve academic excellence with expert faculty, personalized mentorship, and proven results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="courses"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Enroll Now
              </Link>

              <a
                href="/Bright_Future_Coaching_Brochure.pdf"
                download
                className="inline-block border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download Brochure
              </a>

            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-sm text-blue-200">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            
              
              <img src={image} alt="Hero" className="w-full drop-shadow-xl rounded-lg" />

            
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence in education with our comprehensive approach to learning
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Expert Faculty',
                desc: 'Learn from IITians, NITians & subject specialists with years of experience.',
                gradient: 'from-blue-500 to-cyan-500',
                delay: '0'
              },
              {
                title: 'Interactive Learning',
                desc: 'Doubt-solving sessions, live quizzes, and engaging classes.',
                gradient: 'from-purple-500 to-pink-500',
                delay: '200'
              },
              {
                title: 'Personalized Mentoring',
                desc: 'One-on-one mentorship and performance tracking for every student.',
                gradient: 'from-green-500 to-teal-500',
                delay: '400'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group border border-gray-100`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Students Say</span>
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-500">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <h4 className="text-2xl font-bold text-blue-600">
                {testimonials[currentTestimonial].name}
              </h4>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Admissions Open for 2025
          </h2>
          <p className="mb-8 text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Secure your seat in our top programs before it's too late! Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="courses"
              className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Apply Now - Limited Seats
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      
    </div>
  );
}