"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import ProjectsSection from './components/ProjectsSection';





//AboutMe
function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-10 px-8 py-20 bg-linear-to-r from-purple-200 via-pink-100 to-yellow-100 rounded-3xl shadow-2xl max-w-5xl mx-auto my-20 transition-all duration-500">
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold mb-8 text-purple-800 drop-shadow-md">About Me</h2>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed tracking-wide">
          I'm a passionate Information Technology student at Thakur College of Science and Commerce with a love for creating innovative digital solutions. With 2+ years of coding experience, I specialize in full-stack development and enjoy tackling complex problems.
        </p>
        {showMore && (
          <p className="mb-8 text-gray-700 text-lg leading-relaxed tracking-wide transition-opacity duration-700">
            Currently seeking internship opportunities where I can contribute to meaningful projects while continuing to learn and grow as a developer. I love exploring modern web technologies, collaborating on open-source projects, and sharpening my skills every day.
          </p>
        )}
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          {showMore ? "Show Less" : "Learn More About Me"}
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/photo.jpg"
          alt="Vishal Tiwari"
          width={360}
          height={320}
          className="rounded-3xl shadow-lg object-cover border-4 border-purple-300"
          priority
        />
      </div>
    </section>
  );
}


// Projects Section
function Projects() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-100 via-purple-50 to-pink-50 p-10 md:p-20">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-14 drop-shadow-lg">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-6 rounded-3xl shadow-2xl bg-linear-to-tr ${
              ["from-purple-400 to-blue-600", "from-green-400 to-teal-500", "from-pink-400 to-red-500"][idx % 3]
            } text-white transition-transform duration-300 hover:scale-105 hover:shadow-4xl`}
          >
            <h2 className="text-3xl font-semibold mb-3 drop-shadow-lg">{project.title}</h2>
            <p className="text-lg leading-relaxed mb-5 drop-shadow-sm">{project.description}</p>
            <p className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full font-semibold text-white hover:bg-opacity-40 transition duration-300">
              View on GitHub
            </p>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/projects" passHref>
          <button className="rounded-full bg-indigo-700 hover:bg-pink-600 text-white font-semibold py-3 px-12 shadow-lg transition transform hover:scale-105">
            View All Projects
          </button>
        </Link>
      </div>
    </main>
  );
}


// Hero/Intro Section
function HeroSection() {
  return (
    <section
      className="relative flex-1 flex flex-col items-center justify-center min-h-[80vh] w-full px-4"
      style={{
        backgroundImage: "url('/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/80 via-pink-700/60 to-yellow-400/40 z-0"></div>

      <div className="relative flex flex-col items-center justify-center py-24 w-full max-w-7xl z-10">
        <h1 className="text-white text-5xl sm:text-6xl font-bold drop-shadow-xl text-center">
          Hi, I'm <span className="text-yellow-300">Vishal Tiwari</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white text-center max-w-2xl shadow-md font-medium">
          Information Technology Student &amp; Full-Stack Developer passionate about creating innovative solutions that make a difference in the world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
          <Link href="/projects" passHref>
            <button className="bg-yellow-300 hover:bg-yellow-400 text-purple-900 font-semibold py-3 px-10 rounded-full shadow-lg transition duration-200 hover:scale-105">
              View My Projects
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-purple-900 font-semibold py-3 px-10 rounded-full transition duration-200 hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


//TechnicalSkills

function SkillsSection() {
  const skills = [
    { name: "C", percent: 90, icon: "/icons/c.svg" },
    { name: "C++", percent: 85, icon: "/icons/c++.svg" },
    { name: "OOPs", percent: 80, icon: "/icons/oops.png" },
    { name: "Core Java", percent: 80, icon: "/icons/java.svg" },
    { name: "Advance Java", percent: 75, icon: "/icons/java.svg" },
    { name: "React", percent: 85, icon: "/icons/react.svg" },
    { name: "Node.js", percent: 75, icon: "/icons/nodejs.svg" },
    { name: "HTML", percent: 90, icon: "/icons/html5.svg" },
    { name: "CSS", percent: 85, icon: "/icons/css3.svg" },
    { name: "JavaScript", percent: 80, icon: "/icons/javascript.svg" },
    { name: "Tailwind CSS", percent: 75, icon: "/icons/tailwind.svg" },
    { name: "Data Structure", percent: 85, icon: "/icons/algorithm.png" },
     { name: "Mongodb", percent: 85, icon: "/icons/mongodb.svg" },
      { name: "MYSQL", percent: 85, icon: "/icons/mysql.svg" },
       { name: "GitHub", percent: 85, icon: "/icons/github.svg" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-linear-to-br from-indigo-50 via-white to-pink-50 rounded-3xl shadow-lg">
      <h1 className="text-center text-4xl font-extrabold mb-8 text-indigo-900 drop-shadow-lg">
        Technical Skills
      </h1>
      <p className="text-center text-lg text-indigo-700 mb-12 max-w-3xl mx-auto">
        I am proficient in the following languages and technologies, demonstrated through projects and coursework.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map(({ name, percent, icon }) => (
          <div
            key={name}
            className="bg-white rounded-2xl shadow-md p-8 w-64 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mb-5">
              <Image
                src={icon}
                alt={`${name} icon`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-900">{name}</h3>
            <div className="w-full h-3 rounded bg-indigo-200">
              <div
                className="h-3 rounded bg-indigo-700 transition-all duration-700"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="mt-2 text-indigo-700 font-medium">{percent}% Proficiency</p>
          </div>
        ))}
      </div>
     <div className="flex justify-center mt-12">
    <Link href="/skills" passHref>
    <button className="rounded-full bg-indigo-700 hover:bg-pink-600 text-white font-semibold py-3 px-12 shadow-lg transition transform hover:scale-105">
      View All Skills
    </button>
  </Link>
  </div>
    </section>
  );
}

//LetsWorkTogether
function LetsWorkTogetherSection() {
  return (
    <section className="py-24 w-full bg-linear-to-tr from-blue-600 via-blue-500 to-blue-400 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-extrabold text-white text-center mb-4">
        Let's Work Together
      </h2>
      <p className="text-lg md:text-xl text-white text-center max-w-3xl mb-12 px-4">
        I'm always excited about new opportunities and interesting projects. Let's connect and create something amazing together!
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        {/* Contact Me button with Link */}
        <Link href="/contact" passHref>
          <button className="bg-white rounded-lg px-16 py-6 text-lg font-semibold border-2 border-white focus:outline-none transition shadow hover:bg-blue-50">
            Contact Me
          </button>
        </Link>
        {/* Download Resume button */}
        <a
          href="/resume.pdf"
          download
          className="bg-transparent border-2 border-white text-white rounded-lg px-16 py-6 text-lg font-semibold transition hover:bg-white hover:text-blue-700 focus:outline-none shadow text-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}







// Default Page Export
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection/>
      <LetsWorkTogetherSection/>
    </main>
  );
}