import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-16">
      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] p-10 w-full max-w-6xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">

        {/* Subtle animated border glow */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-30 blur-lg animate-pulse"></div>

        <h2 className="relative text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Get in Touch with <span className="text-white drop-shadow-md">Luxora</span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="text-white space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-red-400 mb-2">Contact Info</h3>
              <p className="text-gray-300 leading-relaxed">
                Have a question or need support? We're always happy to help you on your journey with Luxora’s premium electronics.
              </p>
            </div>

            <div className="space-y-3 text-gray-200">
              <p className="flex items-center gap-2">
                <span className="text-pink-400 text-xl">📍</span>
                <span>Nepal, Kathmandu City, BR 10001</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-400 text-xl">📧</span>
                <span>support@Luxora.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-pink-400 text-xl">📞</span>
                <span>+9779814336521</span>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-inner">
            <div>
              <label className="block text-white font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,0,120,0.5)] hover:scale-105 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
