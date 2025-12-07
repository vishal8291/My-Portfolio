"use client";

import React, { useState } from "react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/vishal8291",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vishal-tiwari-158a5216b",
    icon: "/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "#",
    icon: "/instagram.svg",
  },
  {
    name: "X",
    url: "https://x.com/vishalT200?t=xJN8mGI91CVjsU8tk6X0Eg&s=09",
    icon: "/x.svg",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);

  // Add this handler to update state from inputs
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Update this handleSubmit to send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit form");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-14 bg-linear-to-br from-blue-100 via-purple-200 to-pink-100 relative overflow-hidden">
      <div className="absolute top-8 right-8 flex gap-4 animate-pulse pointer-events-none">
        {socials.map((social, idx) => (
          <img
            key={idx}
            src={social.icon}
            alt={social.name}
            className="w-10 h-10 opacity-70"
            style={{
              animation: `float ${3 + idx}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <div className="max-w-2xl w-full bg-white/80 p-10 rounded-3xl shadow-2xl border-b-8 border-blue-400">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-700 drop-shadow-md">
          Let's Connect
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Looking for a friendly chat, feedback, collaborations, or opportunities?
          Drop a message below or reach out via social and email!
        </p>
        <div className="mb-8 space-y-3 text-center text-lg">
          <div>
            <span className="font-bold text-blue-700">Email: </span>
            <a
              href="mailto:vishaltiwari101999@gmail.com"
              className="text-blue-700 underline hover:text-pink-600 transition"
            >
              vishaltiwari101999@gmail.com
            </a>
          </div>
          <div>
            <span className="font-bold text-blue-700">Phone: </span>
            <a
              href="tel:+918291569470"
              className="text-blue-700 underline hover:text-pink-600 transition"
            >
              +91 8291569470
            </a>
          </div>
          <div>
            <span className="font-bold text-blue-700">Location: </span>
            <span>Mumbai, India</span>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="bg-blue-700 hover:bg-pink-600 p-2 rounded-full transition"
              >
                <img src={social.icon} alt={social.name} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-pink-500 transition bg-white"
              disabled={submitted}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-pink-500 transition bg-white"
              disabled={submitted}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-pink-500 transition bg-white"
              disabled={submitted}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className={`w-full py-3 rounded-full font-bold text-lg bg-blue-700 text-white transition ${
              submitted
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-pink-600 hover:scale-105"
            }`}
            disabled={submitted}
          >
            {submitted ? "Message Sent! 🚀" : "Send Message"}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes float {
          to {
            transform: translateY(-16px) scale(1.08);
          }
        }
      `}</style>
    </main>
  );
}
