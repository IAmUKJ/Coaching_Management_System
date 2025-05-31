import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, User } from "lucide-react";

const ContactUs = () => {
  const handleCall = () => {
    window.location.href = 'tel:+918368885301';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:demoweb811@gmail.com';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918368885301', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Bright Future Coaching Institute. We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bright Future Coaching Institute<br />
                    Near XYZ Road<br />
                    Patna, Bihar - 800001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <button 
                    onClick={handleCall}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    +91 83688 85301
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <button 
                    onClick={handleEmail}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 break-all"
                  >
                    demoweb811@gmail.com
                  </button>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
                
                <button
                  onClick={handleEmail}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </button>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Operating Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Find Us Here</h2>
              </div>
              
              {/* Interactive Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57836.32214114226!2d85.09538686250002!3d25.614744300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f805016b%3A0xa9f9320ec3d30c7f!2sPatna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1642694826000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patna Location Map"
                ></iframe>
              </div>
              
              {/* Map Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">Location Details</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our coaching institute is located in the heart of Patna, Bihar. The area is well-connected by public transport and easily accessible from all parts of the city. Look for nearby landmarks to find us easily.
                </p>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Experienced and qualified faculty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Comprehensive study materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Regular mock tests and assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Personal attention to each student</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Proven track record of success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;