import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
                    <h1 className="text-4xl font-bold text-gray-800">Let's Connect</h1>
                    <p className="mt-2 text-lg text-gray-600">We’d love to hear from you. Fill out the form to get started!</p>

                    <img
                        src="https://img.freepik.com/premium-vector/woman-with-headphones-microphone-with-computer_113065-137.jpg?ga=GA1.1.1091950498.1744911877&semt=ais_hybrid&w=740"
                        alt="Support"
                        className="mt-6 rounded-xl w-full object-cover h-64 shadow-sm"
                    />

                    <div className="mt-6 space-y-4 text-gray-700">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="ml-3">Acme Inc, Street, State, Postal Code</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="ml-3">+44 1234567890</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-3">info@acme.org</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white p-8 rounded-2xl shadow-md flex flex-col space-y-5">
                    <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                    <input
                        type="tel"
                        name="tel"
                        placeholder="Phone Number"
                        className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
