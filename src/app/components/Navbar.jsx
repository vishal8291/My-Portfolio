// src/components/Navbar.jsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-10 py-4 bg-white/80 shadow-sm">
      <div className="text-3xl font-extrabold text-blue-700 font-mono ml-4">
        Portfolio
      </div>
      <nav>
        <ul className="flex space-x-7 mr-2 font-semibold text-md">
          <li>
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 transition">About</Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-blue-700 transition">Projects</Link>
          </li>
          <li>
            <Link href="/skills" className="text-gray-700 hover:text-blue-700 transition">Skills</Link>
          </li>
          <li>
            <Link href="/certifications" className="text-gray-700 hover:text-blue-700 transition">Certifications</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
