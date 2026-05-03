import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiSpringboot,
  SiPostman,
  SiGooglecloud,
  SiTypescript,
  SiFigma,
  SiNpm,
  SiNextdotjs,
} from "react-icons/si";

export const personalInfo = {
  name: "Asad Raiyan",
  title: "Frontend Developer",
  email: "adsadraiyan001@gmail.com",
  linkedin: "https://www.linkedin.com/in/asad-raiyan",
  github: "https://github.com/asadraiyan",
  resumeLink: "",
  bio: "Innovative Frontend Developer crafting seamless and high-performance web experiences. With 4+ years of experience in React.js, Next.js and modern JavaScript ecosystems, I specialize in building scalable, user-centric interfaces. I thrive in collaborative environments, translating complex ideas into intuitive digital solutions while maintaining a strong focus on performance, usability, and clean code.",
  shortBio: "I build things for the web.",
};

export const projects = [
  {
    title: "MovieFlix",
    tech: ["React JS"],
    description: [
      <>
        Design & Developed{" "}
        <span className="text-text-primary font-medium">
          a feature-rich movie application
        </span>{" "}
        using React.js, enabling users to search, browse, and discover movies seamlessly.
      </>,
      <>
        Integrated the{" "}
        <span className="text-text-primary font-medium">
          TMDB API
        </span>{" "}
        to display detailed movie information including ratings, reviews, and recommendations, with advanced filtering and sorting options for a personalized experience.
      </>,
    ],
    githubLink: "https://github.com/asadraiyan/Movieflix",
    liveLink: "https://movieflix-beta-black.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/moviflix.png",
  },
  {
    title: "Annihilators",
    tech: ["React.js, Node.js, Express.js, MongoDB"],
    description: [
      <>
        Developed{" "}
        <span className="text-text-primary font-medium">
          Annihilators, a full-stack MERN cricket application
        </span>{" "}
        enabling users to explore detailed player statistics and cricket-related data.
      </>,
      <>
        Implemented features such as{" "}
        <span className="text-text-primary font-medium">
          team selection, user profiles, and dynamic data rendering
        </span>{" "}
        to provide a comprehensive and interactive cricket management experience.
      </>,
    ],
    githubLink: "https://github.com/Annihilators-lucknow",
    liveLink: "https://beta-annihilators.netlify.app/",
    category: "Frontend",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "cricket.png",
  },
  {
    title: "Unique Collection",
    tech: ["React.js"],
    description: [
      <>
        Built a{" "}
        <span className="text-text-primary font-medium">
          scalable e-commerce web application
        </span>{" "}
        using React.js, enabling users to browse and purchase products across categories like clothing, jewellery, and electronics.
      </>,
      <>
        Implemented core features including{" "}
        <span className="text-text-primary font-medium">
          add-to-cart functionality, secure checkout, and payment integration
        </span>
        , along with dynamic product listings, filtering, and a fully responsive UI for a seamless shopping experience.
      </>,
    ],
    githubLink: "https://github.com/asadraiyan/E-Mart",
    liveLink: "https://unique-collection.netlify.app/",
    category: "Frontend",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "unique.png",
  },

];

export const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "NPM", icon: <SiNpm /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },
  ],
  coreCompetencies: [
    "Frontend Architecture (React.js)",
    "JavaScript (ES6+) & TypeScript",
    "Reusable Component Design",
    "State Management (Redux, Context API)",
    "Performance Optimization & Lazy Loading",
    "API Integration & Error Handling",
    "Responsive & Mobile-First Design",
    "Code Quality, Testing & Best Practices",
    "Git, CI/CD & Version Control",
    "Agile Development & Team Collaboration",
  ],
};

export const experience = [
  {
    role: "Software Developer",
    organization: "Quarks Technosoft (Noida)",
    duration: "October 2024 – Present",
    points: [
      "Contributed to frontend development for Livemint (CRIF & Credilio) and Hindustan Times, building scalable React.js/Next.js UIs with reusable components",
      " Developed modular JavaScript SDKs (Login & Voucher) for cross-platform integration across HT, Live Hindustan, and Livemint",
      "Built a Vendor Management System dashboard from scratch using React.js, TypeScript, Redux Toolkit, and MUI",
      "Implemented Admin & Vendor modules covering onboarding, SOW/PO, invoices, and resource management",
      "Conducted code reviews and mentored juniors to maintain code quality and best practices",
    ],
  },
  {
    role: "Frontend Developer",
    organization: "Swagg Technologies (Remote)",
    duration: "March 2022 – October 2024",
    points: [
      "Developed and maintained an e-commerce dashboard using React.js, delivering real-time insights with responsive UI and effi cient state management",
      "Collaborated with cross-functional teams to build features, optimize performance, and ensure scalability and reliability",
      "Actively participated in design and code reviews to maintain high-quality, requirement-aligned code",
      "Translated Figma designs into functional React.js components with pixel-perfect accuracy",
      "Diagnosed and resolved bugs effi ciently, improving application stability and performance",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  instagram: {
    url: "https://www.instagram.com/asad.raiyan/?igshid=ZDdkNTZiNTM%3D",
    icon: <FaInstagram size={24} />,
  },
  facebook: {
    url: "https://m.facebook.com/asad.raiyan?mibextid=ZbWKwL",
    icon: <FaFacebook size={24} />,
  },
  twitter: {
    url: "https://twitter.com/raiyan_asad?t=vzNMJaOErNJDbeT5XjOR4A&s=09",
    icon: <FaXTwitter size={24} />,
  },
  email: {
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email || "asadraiyan001@gmail.com"}`,
    icon: <FaEnvelope size={24} />,
  },
};
