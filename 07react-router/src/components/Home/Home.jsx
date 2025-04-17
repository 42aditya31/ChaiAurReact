import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 text-center relative">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
          Simplify Your Financial Life
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Manage, convert and analyze your digital assets with one beautifully designed app.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-6 py-3 bg-orange-700 text-white text-lg rounded-full shadow hover:bg-orange-800 transition-all duration-300"
          >
            <svg
              fill="white"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download Now
          </Link>
        </div>
        <img
          className="w-full max-w-3xl mx-auto mt-16"
          src="https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?t=st=1744911879~exp=1744915479~hmac=09798644ade0383a97d3a3d179168ba02fdb6011e7b5f198a06083136b6d16bf&w=996"
          alt="Hero Illustration"
        />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900">Why Choose Us?</h2>
        <p className="text-center text-gray-500 mt-2 mb-12 max-w-xl mx-auto">
          We bring performance, simplicity and clarity in one beautifully crafted platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Real-Time Conversion',
              desc: 'Always get the most accurate and latest rates — no surprises.',
              icon: '💱',
            },
            {
              title: 'User-Friendly Interface',
              desc: 'Clean design that keeps things simple and focused.',
              icon: '✨',
            },
            {
              title: 'Safe & Secure',
              desc: 'Built with encryption and user privacy in mind.',
              icon: '🔐',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-3/4 sm:w-2/5 rounded-xl shadow-md"
            src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?t=st=1744911970~exp=1744915570~hmac=fc42b84396200270484aca7f593c9591afa05d9c20a4593f71b3e6013fdebaf5&w=996"
            alt="Team Collaboration"
          />
          <h2 className="mt-10 text-3xl sm:text-4xl font-semibold text-gray-900">
            Built for Collaboration
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            Whether you're an individual or team, our platform is designed to keep everyone in sync and productive.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-orange-50 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900">
          Trusted by Thousands
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {[
            {
              name: 'Anjali M.',
              feedback:
                'Using this app daily! Super intuitive, love the design and speed. Highly recommend!',
            },
            {
              name: 'Kunal S.',
              feedback:
                'I manage all my exchanges here. Clean UI and reliable performance. It’s a 10/10.',
            },
          ].map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-700 italic">“{review.feedback}”</p>
              <div className="mt-4 font-semibold text-orange-700">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Ready to Experience the Future?
        </h2>
        <p className="text-gray-600 mt-4">Download and get started in under 2 minutes.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 bg-orange-700 text-white text-lg rounded-full hover:bg-orange-800 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
