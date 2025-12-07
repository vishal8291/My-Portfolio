"use client";
import React from "react";

// Achievements & Recognition Component
function AchievementsRecognition() {
  const achievements = []; // Empty array, no content

  return (
    <section className="py-16 w-full bg-white">
      <h2 className="text-center text-4xl font-extrabold mb-2 text-gray-900">
        Achievements & Recognition
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        {/* Empty or placeholder text */}
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="flex items-center bg-white rounded-2xl shadow p-6 gap-4"
          >
            <div>{item.icon}</div>
            <div>
              <div className="font-bold text-xl text-gray-900 mb-1">{item.title}</div>
              <div className="text-gray-700">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// Timeline Component
function Timeline() {
  const journey = [
    {
      side: "right",
      icon: (
        <span className="bg-blue-100 rounded-full p-2 mr-2 text-blue-600">
          {/* Graduation hat */}
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2L1 7l11 5 9-4.09V13 M1 7v6.39c0 2.28 4.41 4.14 11 4.14s11-1.86 11-4.14" />
          </svg>
        </span>
      ),
      date: "2023-2026",
      title: "Information Technology Student",
      place: "Thakur College of Science and Commerce",
      description:
        "College started in 2023 and is ongoing through 2025. During this time, I began my degree focused on coding and learned various programming languages. I started building websites and worked on multiple academic projects. Additionally, I participated in several events and received many certificates for extracurricular activities. Throughout these years, I developed and completed various projects.",
    },
  ];

  return (
    <section className="w-full py-16">
      <h2 className="text-center text-4xl font-extrabold mb-2 text-gray-900">My Journey</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Key milestones in my educational and professional journey
      </p>
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 bg-blue-300 rounded-lg h-full -translate-x-1/2"></div>
        <div className="flex flex-col gap-12">
          {journey.map((item, idx) => (
            <div className="flex items-center w-full" key={idx}>
              {/* Left card */}
              {item.side === "left" ? (
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="bg-white rounded-xl shadow-md px-7 py-8 max-w-md flex-col">
                    <div className="flex items-center mb-2">
                      {item.icon}
                      <span className="font-medium text-blue-700">{item.date}</span>
                    </div>
                    <div className="font-bold text-xl mb-1">{item.title}</div>
                    <div className="font-medium text-blue-700 mb-2">{item.place}</div>
                    <div className="text-gray-700">{item.description}</div>
                  </div>
                </div>
              ) : (
                <div className="w-1/2"></div>
              )}
              {/* Dot on timeline */}
              <div className="relative z-10">
                <span className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></span>
              </div>
              {/* Right card */}
              {item.side === "right" ? (
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="bg-white rounded-xl shadow-md px-7 py-8 max-w-md flex-col">
                    <div className="flex items-center mb-2">
                      {item.icon}
                      <span className="font-medium text-blue-700">{item.date}</span>
                    </div>
                    <div className="font-bold text-xl mb-1">{item.title}</div>
                    <div className="font-medium text-blue-700 mb-2">{item.place}</div>
                    <div className="text-gray-700">{item.description}</div>
                  </div>
                </div>
              ) : (
                <div className="w-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Areas of Interest Component
function AreasOfInterest() {
  const interests = [
    {
      name: "Software Development",
      bg: "bg-purple-100",
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Code icon */}
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      name: "Web Development",
      bg: "bg-blue-100",
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Globe */}
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      name: "Database Management",
      bg: "bg-green-100",
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Database icon */}
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        </svg>
      ),
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      bg: "bg-yellow-100",
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Brain icon */}
          <path d="M19.07 4.93a9 9 0 1 0 0 14.14A9 9 0 0 0 19.07 4.93z" />
          <circle cx="7.5" cy="9.5" r="1.5" />
          <circle cx="16.5" cy="9.5" r="1.5" />
        </svg>
      ),
    },
    {
      name: "Software Engineering & Project Management",
      bg: "bg-pink-100",
      icon: (
        <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Gear/Settings icon */}
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3-3l-2.4-1.4" />
          <path d="M4.6 9a1.7 1.7 0 0 0-.3 3l2.4 1.4" />
          <path d="M12 2v1M12 21v1M4.22 4.22l.7.7M18.36 18.36l.7.7" />
        </svg>
      )
    },
    {
      name: "Game Development",
      bg: "bg-red-100",
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Game controller icon */}
          <rect x="2" y="7" width="20" height="10" rx="3" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
          <path d="M12 7v10M9 10h6" />
        </svg>
      ),
    },
    {
      name: "Entrepreneurship & Business Development",
      bg: "bg-indigo-100",
      icon: (
        <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {/* Briefcase icon */}
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold mb-2 text-gray-900">Areas of Interest</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Technologies and fields that excite me the most
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {interests.map((interest) => (
          <div
            key={interest.name}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-10 min-h-[225px] transition hover:shadow-lg"
          >
            <div className={`rounded-full p-5 mb-6 ${interest.bg}`}>
              {interest.icon}
            </div>
            <span className="text-xl font-semibold text-gray-900 text-center">
              {interest.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Main About Page ---
export default function AboutPage() {
  return (
    <main>
      {/* Gradient Intro Section */}
      <section className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400 py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-8">About Me</h1>
        <p className="text-lg md:text-2xl text-white text-center max-w-3xl mx-auto leading-relaxed">
          I'm Vishal Tiwari — a passionate Information Technology student who loves turning ideas into reality through code.<br />
          Here's my journey so far and what drives me every day.
        </p>
      </section>
      {/* My Story & Sidebar Section */}
      <section className="w-full min-h-[80vh] bg-gray-50 px-8 py-16 flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">
          {/* Main Content */}
          <div className="flex flex-col flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">My Story</h2>
            <p className="text-lg text-gray-800 mb-8">
              My journey into the world of technology began after the lockdown in 2022, when watching a movie sparked my curiosity to learn how technology works and how ideas can be brought to life through coding.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              I'm currently pursuing a Bachelor's degree in Information Technology at Thakur College of Science and Commerce. My studies have built a strong foundation in programming languages like C, C++, Java, Python, and web technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              I’m passionate about developing innovative projects, exploring data structures and algorithms, and continuously improving my skills in software development. I enjoy collaborating, learning from others, and solving real-world problems through logical thinking and creativity.
            </p>
            <p className="text-lg text-gray-800">
              When I'm not coding, I focus on business ideas like reselling and building my own clothing brand “Vistora.” I also enjoy exploring new technologies, managing my petrol pump, and working on ideas like creating a writing machine and a fire-fighting robot using Arduino.
            </p>
          </div>
          {/* Sidebar */}
          <div className="flex flex-col gap-10 flex-shrink-0 md:w-[400px] w-full">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-2xl shadow-md p-7">
              <h2 className="font-bold text-xl mb-5">Quick Facts</h2>
              <ul className="space-y-4 text-gray-800">
                <li className="flex gap-3 items-center">
                  <span>
                    {/* Location icon */}
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  Based in Borivali West, Mumbai, India
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    {/* Graduation hat icon */}
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2L1 7l11 5 9-4.09V13 M1 7v6.39c0 2.28 4.41 4.14 11 4.14s11-1.86 11-4.14" />
                    </svg>
                  </span>
                  B.Sc. in Information Technology @ Thakur College of Science and Commerce
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    {/* Experience icon */}
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 16h-1v-4h-1m1-4h-1V6a4 4 0 1 0 2 7.87" />
                    </svg>
                  </span>
                  Learning and building projects since 2023
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    {/* Diploma/certificate icon */}
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>
                  </span>
                  Expected Graduation: 2026
                </li>
              </ul>
            </div>
            {/* Current Focus Card */}
            <div className="bg-white rounded-2xl shadow-md p-7">
              <h2 className="font-bold text-xl mb-5">Current Focus</h2>
              <ul className="space-y-4 text-gray-800">
                <li className="flex gap-3 items-center">
                  <span>
                    {/* Arrow/right icon */}
                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 0 0-.707 1.707L14.586 10l-5.293 5.293A1 1 0 0 0 10 18a1 1 0 0 0 .707-1.707L7.414 10l5.293-5.293A1 1 0 0 0 10 3z" />
                    </svg>
                  </span>
                  Mastering Data Structures and Algorithms (DSA)
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 0 0-.707 1.707L14.586 10l-5.293 5.293A1 1 0 0 0 10 18a1 1 0 0 0 .707-1.707L7.414 10l5.293-5.293A1 1 0 0 0 10 3z" />
                    </svg>
                  </span>
                  Building real-world web applications
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 0 0-.707 1.707L14.586 10l-5.293 5.293A1 1 0 0 0 10 18a1 1 0 0 0 .707-1.707L7.414 10l5.293-5.293A1 1 0 0 0 10 3z" />
                    </svg>
                  </span>
                  Working on personal projects and business ideas
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 0 0-.707 1.707L14.586 10l-5.293 5.293A1 1 0 0 0 10 18a1 1 0 0 0 .707-1.707L7.414 10l5.293-5.293A1 1 0 0 0 10 3z" />
                    </svg>
                  </span>
                  Preparing for internships and freelancing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Journey */}
      <Timeline />
      {/* Areas of Interest */}
      <AreasOfInterest />
      {/* Achievements */}
      <AchievementsRecognition />

    </main>
  );
}
