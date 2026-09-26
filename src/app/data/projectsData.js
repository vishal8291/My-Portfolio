// Every project here is real and every link was checked. Keep it that way:
// no invented metrics. "kind" says what the work was, honestly:
// Client (paid by someone else), Product (my own, earning), Studio (my own
// business), Personal (built to learn or to show).

const projects = [
  {
    title: 'CustomeAI',
    kind: 'Studio',
    year: 2026,
    category: 'Website',
    summary:
      'Site for my small-business studio. Enquiry form with an admin dashboard, email alerts, and automatic checks that post a test enquiry.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Resend', 'GitHub Actions'],
    liveUrl: 'https://customeai.tech',
    githubUrl: null, // private: business code
    image: '/images/projects/customai.jpg',
    featured: true,
  },
  {
    title: 'Paperbag',
    kind: 'Personal',
    year: 2025,
    category: 'Online store',
    summary:
      'Online store with catalogue, cart, Razorpay checkout, coupons, referrals, stock tracking, invoice export and an AI shopping assistant.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Docker'],
    liveUrl: 'https://frontend-delta-inky-96.vercel.app',
    githubUrl: null, // private: product code
    image: '/images/projects/paperbag.jpg',
    featured: true,
  },
  {
    title: 'PDFSolution',
    kind: 'Personal',
    year: 2025,
    category: 'Web app',
    summary: 'PDF tools in one place: merge, split, compress, convert and OCR.',
    tech: ['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Docker'],
    liveUrl: 'https://pdfsolution-seven.vercel.app',
    githubUrl: null, // private: product code
    image: '/images/projects/pdfsolution.jpg',
    featured: true,
  },
  {
    title: 'LexAgent',
    kind: 'Personal',
    year: 2025,
    category: 'AI',
    summary:
      'Reads legal documents for small businesses, pulls out the key clauses and flags risky ones, with a dashboard to upload and review.',
    tech: ['Python', 'FastAPI', 'React', 'MongoDB', 'Claude API'],
    liveUrl: 'https://lex-agent.vercel.app',
    githubUrl: null, // repo is private or gone: a link here would 404
    image: '/images/projects/lexagent.jpg',
    featured: true,
  },
  {
    title: 'HealthMap AI',
    kind: 'Personal',
    year: 2026,
    category: 'AI',
    summary:
      'Health portal with an AI symptom checker, a vitals and ECG dashboard, medication reminders and health reports.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'WebSockets'],
    liveUrl: null,
    githubUrl: null, // not published yet
    image: '/images/projects/healthmap.jpg',
    featured: true,
  },
]

// MAHAGRO is shown in its own client-work section on the homepage, not in the project grid.
export const clientProject = {
    title: 'MAHAGRO INDIA',
    kind: 'Client',
    year: 2026,
    category: 'Website',
    summary:
      'Booking website for a mushroom-farming training institute in Mumbai, in English and Marathi, with online payments and an admin panel.',
    tech: ['Vite', 'JavaScript', 'PHP 8', 'MySQL', 'Razorpay', 'Resend'],
    liveUrl: 'https://mahagroindia.com',
    githubUrl: null, // private: client code
    image: '/images/projects/mahagro.jpg',
    featured: true,
    caseStudy: {
      problem:
        'MAHAGRO runs a 2-day training course. Most students are more comfortable in Marathi, bookings came in over phone and WhatsApp, and nothing was recorded in one place.',
      built: [
        'A fast site in English and Marathi, switchable on every page',
        'Seat booking for the ₹999 deposit, with Razorpay ready and a WhatsApp/UPI route that always works',
        'An admin panel with every registration, message and review, plus CSV export',
        'An email to the owner for every booking and message, and a daily summary',
      ],
      now: [
        'Live at mahagroindia.com since September 2026',
        'Checked automatically around the clock',
        'Handed over with a written guide, source code and technical docs',
      ],
    },
  }

export default projects
