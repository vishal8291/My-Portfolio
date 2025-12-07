import React from 'react';

const skillsData = {
  "Programming Languages": ["C", "C++", "Java (Core Java, Advanced Java)", "Python", "JavaScript"],
  "Web Development": ["HTML", "CSS", "PHP", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Databases & Backend": ["MySQL", "PL/SQL", "MongoDB", "JDBC (Java Database Connectivity)", "DBMS (Database Management Systems)"],
  "Tools & Platforms": ["Git", "GitHub", "NetBeans", "Meta Business Suite", "Notion"],
  "Concepts & Core Areas": ["Data Structures and Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Software Engineering (SDLC, Project Planning, Estimation)", "Advanced Web Development (.NET concepts, events, loops, etc.)", "Artificial Intelligence (Intelligent Agents, Search Algorithms)", "Android Programming", "Fire-fighting Robot (Arduino-based project)"],
  "Soft Skills": ["Communication skills", "Problem-solving", "Teamwork", "Time management", "Quick learning", "Interpersonal skills"]
};

const categoryColors = {
  "Programming Languages": "from-red-400 to-pink-500",
  "Web Development": "from-indigo-400 to-blue-600",
  "Databases & Backend": "from-green-400 to-teal-500",
  "Tools & Platforms": "from-yellow-400 to-orange-400",
  "Concepts & Core Areas": "from-purple-400 to-violet-600",
  "Soft Skills": "from-pink-300 to-rose-400"
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-16">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-wide drop-shadow-lg">
        My Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <section
            key={category}
            className={`bg-gradient-to-tr ${categoryColors[category]} rounded-3xl p-8 shadow-2xl hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-md">{category}</h2>
            <ul className="list-disc list-inside space-y-3 text-white text-lg font-medium">
              {skills.map((skill, idx) => (
                <li key={idx} className="hover:text-yellow-300 transition-colors duration-200 cursor-default">{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
