// import images
import Hero_person from "./src/assets/images/Hero/person.png";
import emaillogo from "./src/assets/images/Hero/email.png";
import linkdin from "./src/assets/images/Hero/linkdinlogo.png";
import github from "./src/assets/images/Hero/githublogo.png";
import medium from "./src/assets/images/Hero/medium.png";

import html from "./src/assets/images/Skills/html.png";
import css from "./src/assets/images/Skills/css.png";
import javascript from "./src/assets/images/Skills/js.png";
import figma from "./src/assets/images/Skills/figma.png";
import ps from "./src/assets/images/Skills/ps.png";
import reactjs from "./src/assets/images/Skills/react.png";
import nodejs from "./src/assets/images/Skills/node.png";
import python from "./src/assets/images/Skills/python.png";
import java from "./src/assets/images/Skills/java.png";
import springboot from "./src/assets/images/Skills/springboot.png";
import reactnative from "./src/assets/images/Skills/reactnative.png";
import flutter from "./src/assets/images/Skills/flutter.png";

import services_logo1 from "./src/assets/images/Projects/ikon.png";
import services_logo2 from "./src/assets/images/Projects/laundry.png";
import services_logo4 from "./src/assets/images/Projects/beverage.png";
import services_logo5 from "./src/assets/images/Projects/buyswift.png";
import services_logo6 from "./src/assets/images/Projects/github_analyzer.png";
import services_logo3 from "./src/assets/images/Projects/qa_automation.png";

import blog from "./src/assets/images/Testimonials/blog.png";

// icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  FaServer,
  FaDatabase,
  FaChartBar,
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaJenkins,
  FaCode,
  FaCogs,
  FaCloud,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiTensorflow,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiBootstrap,
  SiExpress,
  SiDart,
  SiArduino,
  SiCplusplus,
} from "react-icons/si";

export const content = {
  // ─── Navigation ───────────────────────────────────────────
  nav: [
    { link: "#home", label: "Home" },
    { link: "#about", label: "About" },
    { link: "#roles", label: "Roles" },
    { link: "#skills", label: "Skills" },
    { link: "#projects", label: "Projects" },
    { link: "#education", label: "Education" },
    { link: "#experience", label: "Experience" },
    { link: "#blogs", label: "Blogs" },
    { link: "#contact", label: "Contact" },
  ],

  // ─── Hero Section ─────────────────────────────────────────
  hero: {
    firstName: "Hansani",
    lastName: "Maleesha",
    typingTexts: [
      "Associate Software Engineer",
      "Full Stack Developer",
      "Backend Engineer",
      "Cloud Enthusiast",
    ],
    tagline:
      "Associate Software Engineer with hands-on experience in full-stack development, backend engineering, and automated testing.",
    image: Hero_person,
    btnText: "Get In Touch",
    resumeBtn: "Download CV",
    logos: [
      {
        name: "GitHub",
        url: "https://github.com/HansaniMaleesha",
        logo: github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hansani-maleesha/",
        logo: linkdin,
      },
      {
        name: "Medium",
        url: "https://medium.com/@maleesha0003",
        logo: medium,
      },
      {
        name: "Email",
        url: "mailto:hansanimaleeshamaduwanthi@gmail.com",
        logo: emaillogo,
      },
    ],
  },

  // ─── About Section ────────────────────────────────────────
  about: {
    title: "About Me",
    subtitle: "WHO I AM",
    text: "Associate Software Engineer with hands-on experience in full-stack development, backend engineering, and automated testing. Experienced in designing RESTful APIs, developing microservices-based applications, and implementing end-to-end test automation using technologies such as React, Node.js, Spring Boot, MySQL, and Cypress. Familiar with CI/CD pipelines, Docker, and Agile development practices, with a strong interest in scalable system design and backend development.",
    btnText: "Download Resume",
    stats: [
      { value: "8+", label: "Projects" },
      { value: "20+", label: "Technologies" },
      { value: "5+", label: "Blog Articles" },
    ],
  },

  // ─── Roles Section ────────────────────────────────────────
  roles: {
    title: "What I Do",
    subtitle: "AREAS OF EXPERTISE",
    items: [
      {
        icon: FaCode,
        title: "Full-Stack Development",
        description:
          "Designing and building scalable, maintainable web applications using React, Node.js, Next.js, and Spring Boot. Focused on clean architecture and performance.",
        color: "#00d4ff",
      },
      {
        icon: FaServer,
        title: "Backend Engineering",
        description:
          "Experienced in designing RESTful APIs, NestJS, Laravel, and microservices architecture. Proficient in database design with MySQL, PostgreSQL, and Firebase.",
        color: "#7b2ff7",
      },
      {
        icon: FaChartBar,
        title: "QA Automation",
        description:
          "Implementing end-to-end test automation using Cypress and Cucumber. Focused on identifying bugs and ensuring high-quality software through automated test suites.",
        color: "#f472b6",
      },
      {
        icon: FaCloud,
        title: "Cloud & DevOps",
        description:
          "Automating CI/CD pipelines with GitHub Actions and managing containerized deployments with Docker. Focused on reliability and scalable infrastructure.",
        color: "#fbbf24",
      },
    ],
  },

  // ─── Skills Section ───────────────────────────────────────
  skills: {
    title: "Skills",
    subtitle: "MY TECH STACK",
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "HTML", logo: html, level: 90 },
          { name: "CSS", logo: css, level: 85 },
          { name: "JavaScript", logo: javascript, level: 90 },
          { name: "React.js", logo: reactjs, level: 92 },
          { name: "Next.js", icon: FaCloud, level: 85 }, // Using FaCloud as placeholder if logo not available
          { name: "TypeScript", icon: SiTypescript, level: 88 },
          { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
          { name: "SASS", icon: SiSass, level: 80 },
        ],
      },
      {
        name: "Backend",
        skills: [
          { name: "Node.js", logo: nodejs, level: 88 },
          { name: "NestJS", icon: FaServer, level: 82 },
          { name: "Spring Boot", logo: springboot, level: 80 },
          { name: "Java", logo: java, level: 88 },
          { name: "Laravel", icon: FaCode, level: 78 },
          { name: "Express.js", icon: SiExpress, level: 85 },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "React Native", logo: reactnative, level: 82 },
          { name: "Flutter", logo: flutter, level: 85 },
          { name: "Dart", icon: SiDart, level: 80 },
        ],
      },
      {
        name: "QA & DevOps",
        skills: [
          { name: "Cypress", icon: FaCogs, level: 85 },
          { name: "Jest", icon: FaCogs, level: 80 },
          { name: "Docker", icon: FaDocker, level: 82 },
          { name: "CI-CD / Github Actions", icon: FaJenkins, level: 80 },
          { name: "AWS / Firebase", icon: FaAws, level: 75 },
          { name: "Postman / SonarQube", icon: FaCogs, level: 85 },
        ],
      },
      {
        name: "Data & Others",
        skills: [
          { name: "MySQL / MongoDB", icon: SiMysql, level: 88 },
          { name: "Apache Spark", icon: SiPandas, level: 75 },
          { name: "Python / Scikit-learn", logo: python, level: 82 },
          { name: "Figma / Visily", logo: figma, level: 85 },
          { name: "Git", icon: FaGitAlt, level: 92 },
        ],
      },
    ],
  },

  // ─── Projects Section ─────────────────────────────────────
  projects: {
    title: "Projects",
    subtitle: "RECENT WORK",
    items: [
      {
        title: "IKON Unified Project Workspace",
        year: "2024",
        tags: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
        description:
          "Developed a comprehensive project management system for Ikon Marketing Company to manage clients, tasks, and employee allocation. Improved system performance through database query optimization and implemented a notification system for team coordination.",
        logo: services_logo1,
      },
      {
        title: "BuySwift — Microservices Architecture",
        year: "2024",
        tags: ["React", "Spring Boot", "MySQL", "Docker"],
        description:
          "Developed a full-stack e-commerce platform using microservices architecture and RESTful APIs. Implemented product, order, cart, and admin services with secure API communication and scalable database design.",
        github: "https://github.com/HansaniMaleesha/BuySwift",
        logo: services_logo5,
      },
      {
        title: "Laundry Management System",
        year: "2023",
        tags: ["React", "Node.js", "MySQL", "Bootstrap"],
        description:
          "Full-stack web application designed for 'Dirty 2 Beauty Laundry' to streamline operations. Developed responsive UI components and integrated frontend with backend APIs, including form validation and interactive features.",
        github: "https://github.com/HansaniMaleesha/Laundry-Management-System",
        logo: services_logo2,
      },
      {
        title: "Sales Management System — QA Automation",
        year: "2024",
        tags: ["Cypress", "Cucumber", "JavaScript", "GitHub Actions"],
        description:
          "Developed end-to-end automated test cases for major system workflows using Cypress and Cucumber (BDD). Executed automated test suites, identified bugs, and integrated test scripts with GitHub for version control.",
        github: "https://github.com/HansaniMaleesha/Sales-Management-Test-suit",
        logo: services_logo3,
      },
      {
        title: "GitHub Portfolio Analyzer — Machine Learning",
        year: "2024",
        tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
        description:
          "Built a machine learning model to analyze GitHub user activity and repository data. Performed data preprocessing, feature extraction, and developer activity classification using the GitHub API.",
        github: "https://github.com/HansaniMaleesha/Portfolio-Strength-Analyzer",
        logo: services_logo6,
      },
      {
        title: "Automated Beverage Mixture",
        year: "2022–2023",
        tags: ["C", "Arduino", "Embedded Systems"],
        description:
          "Developed a microcontroller-based automated beverage dispensing system using C language and Atmel Studio. Implemented sensor-based input handling and automated control logic for precise mixing.",
        logo: services_logo4,
      },
    ],
  },

  // ─── Education Section ──────────────────────────────────
  education: {
    title: "Education",
    subtitle: "MY ACADEMIC BACKGROUND",
    items: [
      {
        title: "B.Sc. (Hons) in Information Technology",
        institution: "University of Moratuwa",
        period: "2022 – 2026",
        description:
          "Faculty of Information Technology. Maintaining a CGPA of 3.56. Specialized in software engineering, microservices, and system design. Maintained strong academic performance while actively contributing to university projects.",
      },
      {
        title: "G.C.E. Advanced Level",
        institution: "Southlands College - Galle",
        period: "2017 – 2020",
        description: "Studied Physical Science stream. Achieved excellent results: Combined Maths: A, Chemistry: A, Physics: B.",
      },
    ],
  },

  // ─── Experience Timeline ──────────────────────────────────
  experience: {
    title: "Experience",
    subtitle: "MY JOURNEY",
    items: [
      {
        type: "work",
        title: "Associate Software Engineer",
        company: "Sanmark Solutions Pvt Ltd",
        period: "Oct, 2025 – Present",
        description:
          "Developing and maintaining scalable web applications using React, Node.js, Next.js, NestJS, Flutter, and Laravel. Designing and integrating RESTful APIs and improving application performance. Working with HubSpot CMS and Odoo CRM for business solutions.",
        tags: ["Next.js", "NestJS", "Flutter", "Laravel", "Odoo"],
      },
      {
        type: "work",
        title: "Software Engineering Intern",
        company: "Sanmark Solutions Pvt Ltd",
        period: "Apr, 2025 – Oct, 2025",
        description:
          "Assisted in full-stack development and maintenance of web applications. Developed HubSpot CMS websites and created UI wireframes and prototypes using Figma and Visily.",
        tags: ["React", "HubSpot", "Figma", "Agile"],
      },
      {
        type: "work",
        title: "Part-Time Developer",
        company: "Ikon Marketing Company",
        period: "Oct, 2024 – Mar, 2025",
        description:
          "Developed and maintained web application features using React and Node.js. Assisted in database operations and API integration.",
        tags: ["React", "Node.js", "API Integration"],
      },
    ],
  },

  // ─── Blogs Section ────────────────────────────────────────
  blogs: {
    title: "My Blogs",
    subtitle: "LATEST ARTICLES",
    items: [
      {
        title:
          "Harnessing the Power of the useEffect Hook in Custom React Hooks for Data Fetching",
        img: blog,
        link: "https://medium.com/@maleesha0003/harnessing-the-power-of-the-useeffect-hook-in-custom-react-hooks-for-data-fetching-24c0275ffe1c",
        readTime: "5 min read",
      },
      {
        title: "Control Flow: Conditionals in Java",
        img: blog,
        link: "https://medium.com/@maleesha0003/control-flow-conditionals-in-java-57228d7ec115",
        readTime: "4 min read",
      },
      {
        title:
          "Basic Concepts: Data Types, Variables, and Operators in Java",
        img: blog,
        link: "https://medium.com/@maleesha0003/basic-concepts-data-types-variables-and-operators-4920d6ef2422",
        readTime: "4 min read",
      },
      {
        title:
          "Introduction to Programming with Java: A Beginner's Guide",
        img: blog,
        link: "https://medium.com/@maleesha0003/introduction-to-programming-with-java-a-beginners-guide-7f8dda361e15",
        readTime: "6 min read",
      },
    ],
  },

  // ─── Contact Section ──────────────────────────────────────
  contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    formSubtitle: "Have a project in mind? Let's work together.",
    social_media: [
      {
        text: "hansanimaleeshamaduwanthi@gmail.com",
        icon: GrMail,
        link: "mailto:hansanimaleeshamaduwanthi@gmail.com",
      },
      {
        text: "+94 762206760",
        icon: MdCall,
        link: "https://wa.me/94762206760",
      },
      {
        text: "Hansani Maleesha",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/hansani-maleesha/",
      },
      {
        text: "HansaniMaleesha",
        icon: BsGithub,
        link: "https://github.com/HansaniMaleesha",
      },
    ],
  },

  // ─── Footer ───────────────────────────────────────────────
  footer: {
    text: "Built with React, Three.js & ❤️",
    copyright: `© ${new Date().getFullYear()} Hansani Maleesha. All rights reserved.`,
  },
};
