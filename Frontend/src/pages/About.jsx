import React from 'react';

const About = () => {
  const features = [
    {
      title: 'Expert Mentors',
      icon: '👨‍🏫',
      desc: 'Experienced faculty guiding each step of your journey.'
    },
    {
      title: 'Doubt Sessions',
      icon: '💬',
      desc: 'Dedicated doubt clearance and concept reinforcement.'
    },
    {
      title: 'Smart Classrooms',
      icon: '🖥️',
      desc: 'Modern tools and digital resources for better learning.'
    },
    {
      title: 'Weekly Tests',
      icon: '📝',
      desc: 'Regular assessments to track your progress.'
    },
    {
      title: 'Personal Mentorship',
      icon: '🤝',
      desc: 'We ensure every student gets the attention they deserve.'
    },
    {
      title: 'Result-Oriented',
      icon: '🎯',
      desc: 'Focus on delivering outcomes that matter.'
    }
  ];

  const stats = [
    { number: '2000+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Faculty' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 translate-x-full animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8 border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Excellence in Education
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Bright Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                Coaching Institute
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transforming dreams into reality through dedicated learning and mentorship
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Foundation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Built on strong principles that guide our every action
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:rotate-6 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                To build a community of inspired learners empowered with knowledge and character, striving
                for academic excellence and lifelong success.
              </p>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:rotate-6 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-purple-600">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                To deliver quality education through innovative pedagogy, personalized mentorship, and a
                supportive environment that enables every student to reach their full potential.
              </p>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Bright Future Coaching Institute, we go beyond just teaching. We prepare you for life.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of successful students who chose excellence. Your journey to success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;