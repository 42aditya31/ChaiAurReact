import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Our App
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            We created this platform with one simple goal — to help users take full control of their digital assets with ease, speed, and confidence.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Whether you're converting Bitcoin, managing tokens, or just keeping track of your balances, we make sure every feature is intuitive and reliable.
          </p>
          <p className="text-gray-600 text-lg">
            Security, simplicity, and design are at the core of what we do. Our mission is to make financial tools accessible to everyone — no complexity, just clarity.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/money-loss-concept-illustration_114360-19033.jpg?ga=GA1.1.1091950498.1744911877&semt=ais_hybrid&w=740"
            alt="About Illustration"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
