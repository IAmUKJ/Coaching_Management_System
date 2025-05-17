import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Achievers Coaching Centre</h1>
          <p className="text-xl">
            Transforming dreams into reality through dedicated learning and mentorship.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-indigo-300 transition">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">🎯 Our Vision</h2>
          <p>
            To build a community of inspired learners empowered with knowledge and character, striving
            for academic excellence and lifelong success.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-purple-300 transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">🚀 Our Mission</h2>
          <p>
            To deliver quality education through innovative pedagogy, personalized mentorship, and a
            supportive environment that enables every student to reach their full potential.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            At Achievers Coaching Centre, we go beyond just teaching. We prepare you for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Expert Mentors', emoji: '👨‍🏫', desc: 'Experienced faculty guiding each step of your journey.' },
            { title: 'Doubt Sessions', emoji: '💬', desc: 'Dedicated doubt clearance and concept reinforcement.' },
            { title: 'Smart Classrooms', emoji: '🖥️', desc: 'Modern tools and digital resources for better learning.' },
            { title: 'Weekly Tests', emoji: '📝', desc: 'Regular assessments to track your progress.' },
            { title: 'Personal Mentorship', emoji: '🤝', desc: 'We ensure every student gets the attention they deserve.' },
            { title: 'Result-Oriented Approach', emoji: '🎯', desc: 'Focus on delivering outcomes that matter.' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg hover:bg-indigo-50 transition"
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
