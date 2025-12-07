"use client";

import React from 'react';

const pdfIcon = "/pdf-icon.png"; // For PDFs in /public

const certifications = [
  {
    title: "Annual Extension Certificate",
    issuer: "Your University",
    date: "2024",
    description: "Annual Extension achievement.",
    fileUrl: "/Annual Extension.png",
    type: "image",
  },
  {
    title: "Deloit Training Certificate",
    issuer: "Deloitte",
    date: "2025",
    description: "Completed professional program by Deloitte.",
    fileUrl: "/Deloit.pdf",
    type: "pdf",
  },
  {
    title: "Disaster Management Certificate",
    issuer: "Your University",
    date: "2024",
    description: "Certification in disaster management program.",
    fileUrl: "/Disastermgmt.pdf",
    type: "pdf",
  },
  {
    title: "DLLE Udaan Certificate",
    issuer: "DLLE",
    date: "2024",
    description: "DLLE Udaan certificate (PDF format).",
    fileUrl: "/DLLEUdaan.pdf",
    type: "pdf",
  },
  {
    title: "IIRS Certificate",
    issuer: "IIRS",
    date: "2024",
    description: "Remote Sensing certificate program.",
    fileUrl: "/IIRS cerificate.pdf",
    type: "pdf",
  },
  {
    title: "IIT Participant Certificate",
    issuer: "IIT",
    date: "2023",
    description: "Participation in IIT program.",
    fileUrl: "/IIT.pdf",
    type: "pdf",
  },
  {
    title: "LiveMint Certification",
    issuer: "LiveMint",
    date: "2024",
    description: "Certification related to business and finance.",
    fileUrl: "/livemint.pdf",
    type: "pdf"
  },
  {
    title: "TCS Certification",
    issuer: "Tata Consultancy Services",
    date: "2023",
    description: "Completed training certificate from TCS.",
    fileUrl: "/TCS.pdf",
    type: "pdf",
  },
  {
    title: "TCS2 Certification",
    issuer: "Tata Consultancy Servicesc",
    date: "2023",
    description: "Additional certification details.",
    fileUrl: "/TCS2.pdf",
    type: "pdf",
  }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-5xl font-extrabold mb-14 text-center text-gray-900 drop-shadow-md">
        My Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certifications.map(({ title, issuer, date, description, fileUrl, type }, idx) => (
          <div
            key={idx}
            className="bg-white/80 p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 hover:scale-105 hover:bg-white transition-transform duration-300"
          >
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`View certificate for ${title}`}
              className="w-44 flex-shrink-0"
            >
              <img
                src={type === "image" ? fileUrl : pdfIcon}
                alt={`${title} certificate`}
                className="w-full h-auto rounded-xl drop-shadow-md"
              />
            </a>
            <div>
              <h2 className="text-2xl font-bold mb-1 text-blue-700">{title}</h2>
              <p className="italic text-gray-600 mb-2">{issuer} — {date}</p>
              <p className="text-gray-800 mb-4">{description}</p>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-pink-600 hover:text-white font-semibold transition"
              >
                View/Download Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
