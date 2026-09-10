import founderPhoto from "./assets/founder.png";
import laptop from "./assets/project/Laptop.png";
import whatsapp from "./assets/covers/whatsapp.png";
import kessler from "./assets/covers/kessler.jpg";
import travel from "./assets/project/travel.png";
import sales from "./assets/powerBI/sales.png";
import dashboard from "./assets/powerBI/dashboard.png";
import motor from "./assets/covers/motor.png";
import elevator from "./assets/project/2.png";
import cpu from "./assets/covers/cpu.png";
import employee from "./assets/project/employee.png";
import navsystem from "./assets/covers/nav.png";
import snowRobot from "./assets/covers/snow-robot.png";
import researchViewer from "./assets/covers/research-viewer.png";
import sqlChatbot from "./assets/covers/sql-chatbot.png";
import scraper from "./assets/covers/scraper.png";
import obdii from "./assets/covers/obd-ii.png";
import ising from "./assets/research/Ising.PNG";
export { getCaseStudy, caseStudies } from "./caseStudies";
export type { CaseBlock, CaseStudy } from "./caseStudies";

export const profile = {
  name: "Aryan Rusia",
  title: "Computer Engineer · Founder · Builder",
  roles: [
    "Freelance Engineer",
    "Co-founder, SnowBotics",
    "Machine Learning",
    "Web Developer",
  ],
  email: "aryanrusia8@gmail.com",
  resume: "/resume.pdf",
  resumeLive: "https://online-cv-aryan.netlify.app/",
  photo: founderPhoto,
  location: "Lucknow, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/aryan-rusia-82a761170/",
    github: "https://github.com/Aryan-Rusia-2",
    instagram: "https://www.instagram.com/_aryan_rusia_/",
    facebook: "https://www.facebook.com/aryan.rusia.75",
    upwork: "https://www.upwork.com/freelancers/~013a9ef828a555a66e",
  },
  about: [
    "Hello — I’m Aryan, from Lucknow, India. I completed a BSc in Computer Engineering with a specialization in Nanotechnology at the University of Alberta (2020–2025, GPA 3.6/4.0). I like building things that actually work in the real world: models, code, data, and infrastructure that have to come together cleanly.",
    "My work sits at the intersection of AI, software, and systems — computer vision, autonomous navigation, AI agents, and natural-language tools backed by structured databases. I care about correctness and long-term maintainability more than a flashy demo.",
    "I co-founded SnowBotics (Dec 2022 – Apr 2025), leading perception and navigation for an autonomous snow-clearing robot. At VK Tech I shipped full-stack systems. Under Dr. Jie Han I ran Monte Carlo studies on ionic devices. Since January 2025 I have been freelancing on Upwork — chatbots over SQL, archival data pipelines, desktop research tools.",
    "If you want to talk computer vision, backend systems, or embedded software, I am easy to reach.",
  ],
};

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type ProjectCategory = "hardware" | "ai" | "software" | "research";

export type ProjectCard = {
  id: string;
  title: string;
  category: ProjectCategory;
  extraCategories?: ProjectCategory[];
  image: string;
  href: string;
  external?: boolean;
  blurb: string;
  tags: string[];
  year?: string;
  featured?: boolean;
};

export const projects: ProjectCard[] = [
  {
    id: "snow-robot",
    title: "Autonomous Snow Clearing Robot",
    category: "hardware",
    extraCategories: ["ai"],
    image: snowRobot,
    href: "/projects/snow-robot",
    blurb: "Perception and navigation for SnowBotics — Jetson Nano, OpenCV, and sensor fusion on a working outdoor robot.",
    tags: ["OpenCV", "Jetson Nano", "TensorFlow"],
    year: "2022–2025",
    featured: true,
  },
  {
    id: "research-viewer",
    title: "Research Viewer",
    category: "software",
    image: researchViewer,
    href: "/projects/research-viewer",
    blurb: "Local-first desktop app for huge archival image collections — annotations, bookmarks, and offline research.",
    tags: ["Electron", "SQLite", "Desktop"],
    year: "2025",
    featured: true,
  },
  {
    id: "sql-chatbot",
    title: "SQL-Backed AI Chatbot",
    category: "ai",
    extraCategories: ["software"],
    image: sqlChatbot,
    href: "/projects/sql-chatbot",
    blurb: "Natural language to validated SQL across multiple databases, with image retrieval and conversational memory.",
    tags: ["LLMs", "SQL", "Python"],
    year: "2025",
    featured: true,
  },
  {
    id: "scraper",
    title: "Scalable Web Scraping Pipeline",
    category: "software",
    extraCategories: ["ai"],
    image: scraper,
    href: "/projects/scraper",
    blurb: "Production pipeline for ~770k Library of Congress images — resumable downloads, SQLite inventory, 15–20 TB scale.",
    tags: ["Python", "SQLite", "Pipelines"],
    year: "2025",
    featured: true,
  },
  {
    id: "obd-ii",
    title: "OBD-II Auto Dynamics System",
    category: "hardware",
    extraCategories: ["ai"],
    image: obdii,
    href: "/projects/obd-ii",
    blurb: "Rally-car telemetry with TinyML anomaly detection on ESP32-S3, BLE live view, and an AWS dashboard.",
    tags: ["TinyML", "ESP32", "OBD-II"],
    year: "2024",
  },
  {
    id: "kessler",
    title: "Kessler Game Controller",
    category: "ai",
    image: kessler,
    href: "/projects/kessler",
    blurb: "Fuzzy-logic controller for the Kessler game. Took 2nd place in a university competition.",
    tags: ["Fuzzy logic", "Python"],
    year: "2023",
  },
  {
    id: "cpu",
    title: "Custom 8-bit CPU",
    category: "hardware",
    image: cpu,
    href: "/projects/cpu",
    blurb: "Full 8-bit CPU in VHDL: mux, ALU, registers, FSM, custom JMPR/CSKIP, and an inventory program.",
    tags: ["VHDL", "Zybo Z7"],
    year: "2023",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Chat Analyzer",
    category: "ai",
    image: whatsapp,
    href: "/projects/whatsapp",
    blurb: "Live Streamlit dashboard for conversation stats, sentiment, and activity patterns.",
    tags: ["Streamlit", "NLP"],
    year: "2023",
  },
  {
    id: "elevator",
    title: "Elevator System — VHDL",
    category: "hardware",
    image: elevator,
    href: "/projects/elevator-project",
    blurb: "Four-floor elevator controller on Zybo Z7: FSMs, sequence detection, emergency wait.",
    tags: ["VHDL", "FPGA"],
    year: "2023",
  },
  {
    id: "motor",
    title: "Stepper Motor — Zybo Z7",
    category: "hardware",
    image: motor,
    href: "/projects/motor-project",
    blurb: "FreeRTOS stepper control on Zybo Z7 with a UART UI and a hardware emergency stop.",
    tags: ["FreeRTOS", "Embedded"],
    year: "2023",
  },
  {
    id: "laptop",
    title: "Laptop Price Predictor",
    category: "ai",
    image: laptop,
    href: "/projects/laptop-price-predictor",
    blurb: "Streamlit + scikit-learn app that predicts laptop prices from specs. Random Forest hit 88% accuracy.",
    tags: ["scikit-learn", "Streamlit"],
    year: "2023",
  },
  {
    id: "travel",
    title: "GPT-3.5 Travel Suggestion Bot",
    category: "ai",
    image: travel,
    href: "https://travel-suggestion-bot.streamlit.app/",
    external: true,
    blurb: "LLM travel planner on Streamlit — climate, budget, duration, and diet.",
    tags: ["OpenAI", "Streamlit"],
    year: "2024",
  },
  {
    id: "nav",
    title: "Edmonton Route Finder",
    category: "software",
    image: navsystem,
    href: "/projects/nav",
    blurb: "Campus and city route planner for Edmonton.",
    tags: ["Python", "Graphs"],
    year: "2022",
  },
  {
    id: "research",
    title: "Ionic Devices in the Ising Model",
    category: "research",
    image: ising,
    href: "/projects/research-intern",
    blurb: "Monte Carlo / Metropolis study of ionic devices. Nominated as HQP for the NSERC report.",
    tags: ["Monte Carlo", "Python"],
    year: "2023",
  },
  {
    id: "sales",
    title: "Product Sales — Power BI",
    category: "ai",
    extraCategories: ["software"],
    image: sales,
    href: "/#projects",
    blurb: "Sales performance dashboard covering trends, categories, and regional breakdowns.",
    tags: ["Power BI"],
    year: "2023",
  },
  {
    id: "superstore",
    title: "SuperStore Sales Dashboard",
    category: "ai",
    extraCategories: ["software"],
    image: dashboard,
    href: "/#projects",
    blurb: "End-to-end SuperStore analytics view for executives and ops.",
    tags: ["Power BI"],
    year: "2023",
  },
  {
    id: "employee",
    title: "Employee Management System",
    category: "software",
    image: employee,
    href: "https://employees-mangement-system.netlify.app/",
    external: true,
    blurb: "CRUD web app for employee records, deployed on Netlify.",
    tags: ["React", "CRUD"],
    year: "2022",
  },
];

export type ExperienceJob = {
  id: string;
  role: string;
  company: string;
  dates: string;
  points: string[];
  type?: string;
  location?: string;
  href?: string;
  hrefLabel?: string;
  skills?: string[];
};

export const experience: ExperienceJob[] = [
  {
    id: "upwork",
    role: "Freelance Engineer",
    company: "Upwork",
    type: "Freelance",
    location: "Remote",
    dates: "Jan 2025 — Present",
    href: "https://www.upwork.com/freelancers/~013a9ef828a555a66e",
    hrefLabel: "View Upwork profile →",
    skills: ["React", "Python", "Computer Vision", "SQL", "LLMs"],
    points: [
      "Deliver end-to-end AI, computer vision, and software solutions for international clients.",
      "Built SQL-backed AI chatbots and multi-database data pipelines.",
      "Developed large-scale web scraping systems and dataset generation pipelines (800k+ images).",
      "Designed desktop applications for research and data exploration.",
      "Worked across computer vision, backend APIs, databases, and system integration.",
    ],
  },
  {
    id: "snowbotics",
    role: "Co-Founder",
    company: "SnowBotics",
    type: "Self-employed · On-site",
    location: "Edmonton, Alberta, Canada",
    dates: "Dec 2022 — Apr 2025 · 2 yrs 5 mos",
    skills: ["Robotics", "Machine Learning", "Computer Vision", "Python"],
    points: [
      "Guided SnowBotics' technological direction, elevating it to the top 20 startups in Edmonton.",
      "Drove revenue to $10,000, affirming market potential and achieving a high customer satisfaction rate.",
      "Pitched to over 20,000 people across 20+ events like Startup TNT, Collision, Alberta Catalyzer, and Alberta Innovates.",
      "Utilized computer vision and ultrasonic sensors, enriching data accuracy by 35% for environmental analysis.",
      "Integrated sensor fusion in robotic navigation, reducing collision incidents by 25% through Python-based algorithms.",
      "Engineered a snow robot with Jetson Nano; implemented TensorFlow's CNN, enhancing object detection accuracy by 30%.",
    ],
  },
  {
    id: "vktech",
    role: "Software Developer",
    company: "VK Tech",
    type: "Permanent part-time · Remote",
    location: "Edmonton, Alberta, Canada",
    dates: "May 2022 — Aug 2023 · 1 yr 4 mos",
    skills: ["React Native", "React.js", "Python", "Java"],
    points: [
      "Led Agile-Scrum full-stack projects, achieving a 28% rise in customer satisfaction with tailored solutions.",
      "Enhanced GUIs for control panels using Java/Python, leading to a 15% uptick in system throughput and user interactivity.",
      "Developed Python test scripts for automating regression of electrical systems, cutting down fault isolation time by 20%.",
      "Managed Git version control and JIRA sprint cycles, yielding a 36% boost in deployment efficiency and CI/CD compliance.",
      "Implemented RESTful APIs and microservices architecture, improving system scalability and reducing response time by 24%.",
      "Created React-based real-time system monitoring dashboards, increasing user engagement and analytics clarity.",
    ],
  },
  {
    id: "research",
    role: "Research Intern",
    company: "Professor Dr. Jie Han",
    type: "Internship · Remote",
    location: "Edmonton, Alberta, Canada",
    dates: "Jan 2023 — Apr 2023 · 4 mos",
    href: "/projects/research-intern",
    hrefLabel: "Read the research write-up →",
    skills: ["Python", "Statistical Data Analysis"],
    points: [
      "Conducted 20+ experiments applying Monte Carlo simulations to study Ionic Devices in the Ising model.",
      "Presented Monte Carlo simulation results at a university event, receiving 90% positive feedback.",
      "Explored electron tunneling and investigated migration probability, revealing crucial insights into Ionic Devices.",
      "Nominated as HQP (Highly Qualified Personnel) for an NSERC report by the professor for exceptional contributions.",
    ],
  },
  {
    id: "blueprint",
    role: "Software Developer",
    company: "U of A Blueprint",
    type: "Freelance",
    location: "Edmonton, Alberta, Canada",
    dates: "Sep 2022 — Dec 2022",
    points: [
      "Optimized performance and responsiveness for a student application platform.",
      "Built a JavaScript REST API that reduced response times by 40%.",
      "Used React Testing Library to keep the frontend reliable under change.",
      "Implemented Redux for structured application state.",
      "Cut FAQ-to-MongoDB query time by about 50%.",
    ],
  },
];

export const education = [
  {
    school: "University of Alberta",
    place: "Edmonton, AB",
    credential: "BSc in Computer Engineering Nanotechnology",
    focus: "Nanotechnology specialization",
    dates: "2020 – 2025",
    note: "GPA 3.6 / 4.0",
    featured: true,
  },
  {
    school: "Kamm Scholars School",
    place: "Bisalpur, UP",
    credential: "High School (Class 12th), Non-medical",
    dates: "Apr 2018 — Apr 2020",
    note: "96.2%",
  },
  {
    school: "DAV Public School",
    place: "Chamba, HP",
    credential: "Class 10",
    dates: "Apr 2016 — Jun 2017",
    note: "96.2%",
  },
];

export const skillGroups = [
  {
    title: "Core Languages",
    blurb: "What I write day to day.",
    items: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS", "VHDL"],
  },
  {
    title: "Computer Vision & AI",
    blurb: "Perception, models, and agents.",
    items: [
      "OpenCV",
      "TensorFlow",
      "CNNs",
      "TinyML",
      "Scikit-learn",
      "XGBoost",
      "NumPy",
      "Streamlit",
    ],
  },
  {
    title: "Frameworks & Runtimes",
    blurb: "Interfaces and the runtimes behind them.",
    items: ["React", "Electron", "Flask", "Tailwind CSS", "FreeRTOS", "Jupyter"],
  },
  {
    title: "Databases & Backend",
    blurb: "Structured data and the APIs that sit on it.",
    items: ["SQLite", "MySQL", "MongoDB", "REST APIs", "Power BI", "Tableau"],
  },
  {
    title: "DevOps & Cloud",
    blurb: "Build, ship, and keep it running.",
    items: ["Docker", "GitHub", "Jenkins", "AWS", "Adobe Premiere Pro"],
  },
];

export const awards = [
  {
    title: "Scholarships",
    items: [
      "University of Alberta Continuing International Award, 2022",
      "University of Alberta Continuing International Award, 2021",
      "University of Alberta Gold Standard Scholarship, 2020",
      "Faculty of Engineering Gold Standard Scholarship, 2020",
      "International Student Scholarship, 2020",
    ],
  },
  {
    title: "Karate",
    items: [
      "Black belt awarded 19 January 2018.",
      "Started at age 8 and trained consistently through adolescence.",
      "As a senior student, taught others when the instructor was away.",
    ],
  },
  {
    title: "Music",
    items: [
      "Level-A certificate in piano.",
      "Studied after school around ages 11–12.",
    ],
  },
  {
    title: "Certificates",
    items: [
      "Concepts in Safety Leadership for Engineering (WHMIS), March 2021",
      "Video editing training via Internshala",
    ],
  },
];
