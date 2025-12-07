import React from 'react';

const projects = [
  {
    title: "Timeline-based Historical Webpage",
    description: "Designed and developed a responsive historical timeline webpage using HTML and CSS. Structured content with semantic tags, cards, and visual styling to ensure an intuitive user experience. Demonstrated teamwork and creative presentation of historical data.",
    githubUrl: "https://github.com/vishal8291/Timeline-based-Historical-Webpage"
  },
  {
    title: "ATM Management System",
    description: "Feature-rich ATM Management System implemented with secure transactions and user-friendly interface.",
    githubUrl: "https://github.com/vishal8291/Atm-Management-System"
  },
  {
    title: "Railway Announcement System",
    description: "Automated railway announcement system designed for efficient and clear communication of train schedules and delays.",
    githubUrl: "https://github.com/vishal8291/Railway-Announcement-System"
  }
];

const cardGradient = [
  "from-purple-400 to-blue-600",
  "from-green-400 to-teal-500",
  "from-pink-400 to-red-500"
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 p-10 md:p-20">
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
            className={`block p-6 rounded-3xl shadow-2xl bg-gradient-to-tr ${cardGradient[idx % cardGradient.length]} text-white transition-transform duration-300 hover:scale-105 hover:shadow-4xl`}
          >
            <h2 className="text-3xl font-semibold mb-3 drop-shadow-lg">{project.title}</h2>
            <p className="text-lg leading-relaxed mb-5 drop-shadow-sm">{project.description}</p>
            <p className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full font-semibold text-white hover:bg-opacity-40 transition duration-300">
              View on GitHub
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
