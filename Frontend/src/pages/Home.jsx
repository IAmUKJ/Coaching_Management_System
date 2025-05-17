import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from '../assets/image.png';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Bright Future Coaching Institute
            </h1>
            <p className="text-lg mb-8">
              Empowering students to achieve academic excellence with expert faculty, personalized mentorship, and proven results.
            </p>
            <a
              href="#admission"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Enroll Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={image} alt="Hero" className="w-full drop-shadow-xl rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: 'Expert Faculty',
                desc: 'Learn from IITians, NITians & subject specialists with years of experience.',
              },
              {
                title: 'Interactive Learning',
                desc: 'Doubt-solving sessions, live quizzes, and engaging classes.',
              },
              {
                title: 'Personalized Mentoring',
                desc: 'One-on-one mentorship and performance tracking for every student.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transform transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Students Say</h2>
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            interval={5000}
            showThumbs={false}
            showStatus={false}
          >
            {[
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
            ].map((t, idx) => (
              <div key={idx} className="p-6">
                <p className="italic text-gray-700 text-lg mb-4">"{t.quote}"</p>
                <h4 className="text-blue-600 font-semibold text-xl">{t.name}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Admissions Open for 2025</h2>
        <p className="mb-8 text-lg">Secure your seat in our top programs before it's too late!</p>
        <a
          href="#admission"
          className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-3 px-8 rounded-full shadow transition duration-300"
        >
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        <p>&copy; 2025 Bright Future Coaching Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}
