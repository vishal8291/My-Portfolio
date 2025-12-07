import React from "react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Brand and Socials */}
        <div className="flex-1">
          <div className="font-logo text-3xl font-bold mb-2">Portfolio</div>
          <div className="mb-8 text-slate-200 leading-normal">
            A passionate student developer creating innovative solutions and building amazing digital experiences. Always learning, always growing.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/vishal8291" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="bg-blue-950 p-2 rounded-full hover:bg-blue-800">
              <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vishal-tiwari-158a5216b" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="bg-blue-950 p-2 rounded-full hover:bg-blue-800">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://x.com/vishalT200?t=xJN8mGI91CVjsU8tk6X0Eg&s=09" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="bg-blue-950 p-2 rounded-full hover:bg-blue-800">
              <img src="/x.svg" alt="X (Twitter)" className="w-6 h-6" />
            </a>
            
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline text-slate-200">About</Link></li>
            <li><Link href="/projects" className="hover:underline text-slate-200">Projects</Link></li>
            <li><Link href="/skills" className="hover:underline text-slate-200">Skills</Link></li>
            <li><Link href="/contact" className="hover:underline text-slate-200">Contact</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex-1">
          <h3 className="font-semibold text-xl mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="flex items-center gap-2">
              {/* Mail icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="M4 4l8 8 8-8" />
              </svg>
              <a href="mailto:vishaltiwari101999@gmail.com" className="hover:underline">vishaltiwari101999@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
  {/* Phone icon */}
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.52 1.7L8.91 10.09a16 16 0 0 0 5 5l1.67-1.09a2 2 0 0 1 1.7-.52l3 .5A2 2 0 0 1 22 16.92z" />
  </svg>
  +91 8291569470
</li>

            <li className="flex items-center gap-2">
              {/* Location icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <rcle cx="12" cy="9" r="2.5"/>
              </svg>
              Mumbai, India
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
