import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl">We're here to answer any questions you may have.</p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">📍 Address</h2>
            <p>Achievers Coaching Centre, Near XYZ Road, Patna, Bihar - 800001</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📞 Phone</h2>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📧 Email</h2>
            <p>info@achieverscoaching.in</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
