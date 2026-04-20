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

import services_logo1 from "./src/assets/images/Services/ikon-logo.png";
import services_logo2 from "./src/assets/images/Services/D2B.png";
import services_logo3 from "./src/assets/images/Services/blog (2).png";
import services_logo4 from "./src/assets/images/Services/beverage.png";
import services_logo5 from "./src/assets/images/Services/BuySwift.jpg";
import services_logo6 from "./src/assets/images/Services/TravelX.jpg";
import services_logo7 from "./src/assets/images/Services/JokeApp.jpg";

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
    { link: "#experience", label: "Experience" },
    { link: "#blogs", label: "Blogs" },
    { link: "#contact", label: "Contact" },
  ],

  // ─── Hero Section ─────────────────────────────────────────
  hero: {
    firstName: "Hansani",
    lastName: "Maleesha",
    typingTexts: [
      "Software Engineer",
      "System Engineer",
      "Data Analyst",
      "DevOps Engineer",
      "Full Stack Developer",
    ],
    tagline:
      "Final year IT undergraduate at the University of Moratuwa, passionate about building scalable systems and data-driven solutions.",
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
    text: "I am a final-year undergraduate at the University of Moratuwa, Faculty of Information Technology. I thrive on solving challenges through logical and creative thinking, viewing each as an opportunity for growth. With a solid foundation in software development, system design, data analysis, and DevOps practices, I am passionate about continuous learning and self-improvement. I enjoy taking on complex problems, driven by a desire to contribute to impactful projects. Committed to delivering high-quality results, I aim to enhance my skills and make meaningful contributions to the IT field.",
    btnText: "Download Resume",
    stats: [
      { value: "7+", label: "Projects" },
      { value: "15+", label: "Technologies" },
      { value: "4+", label: "Blog Articles" },
    ],
  },

  // ─── Roles Section ────────────────────────────────────────
  roles: {
    title: "What I Do",
    subtitle: "AREAS OF EXPERTISE",
    items: [
      {
        icon: FaCode,
        title: "Software Engineer",
        description:
          "Design and build scalable, maintainable applications using modern frameworks and clean architecture patterns. Experienced in full-stack development with React, Spring Boot, and Node.js.",
        color: "#00d4ff",
      },
      {
        icon: FaServer,
        title: "System Engineer",
        description:
          "Configure, deploy, and maintain system infrastructure. Proficient in Linux administration, networking fundamentals, and containerized deployments with Docker and Kubernetes.",
        color: "#7b2ff7",
      },
      {
        icon: FaChartBar,
        title: "Data Analyst",
        description:
          "Transform raw data into actionable insights using Python, Pandas, and visualization tools. Experienced with SQL databases, statistical analysis, and machine learning fundamentals.",
        color: "#f472b6",
      },
      {
        icon: FaCogs,
        title: "DevOps Engineer",
        description:
          "Automate CI/CD pipelines, manage cloud infrastructure on AWS, and implement containerization strategies. Focused on reliability, scalability, and deployment efficiency.",
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
          { name: "JavaScript", logo: javascript, level: 85 },
          { name: "React.js", logo: reactjs, level: 88 },
          { name: "TypeScript", icon: SiTypescript, level: 75 },
          { name: "Tailwind CSS", icon: SiTailwindcss, level: 80 },
          { name: "SASS", icon: SiSass, level: 70 },
          { name: "Bootstrap", icon: SiBootstrap, level: 75 },
        ],
      },
      {
        name: "Backend",
        skills: [
          { name: "Node.js", logo: nodejs, level: 82 },
          { name: "Spring Boot", logo: springboot, level: 78 },
          { name: "Java", logo: java, level: 85 },
          { name: "Python", logo: python, level: 80 },
          { name: "Express.js", icon: SiExpress, level: 78 },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "React Native", logo: reactnative, level: 75 },
          { name: "Flutter", logo: flutter, level: 70 },
          { name: "Dart", icon: SiDart, level: 68 },
        ],
      },
      {
        name: "DevOps & Cloud",
        skills: [
          { name: "Docker", icon: FaDocker, level: 75 },
          { name: "Kubernetes", icon: SiKubernetes, level: 60 },
          { name: "AWS", icon: FaAws, level: 65 },
          { name: "Linux", icon: FaLinux, level: 78 },
          { name: "Git", icon: FaGitAlt, level: 85 },
          { name: "Jenkins / CI-CD", icon: FaJenkins, level: 65 },
        ],
      },
      {
        name: "Data & Analytics",
        skills: [
          { name: "MySQL", icon: SiMysql, level: 82 },
          { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
          { name: "MongoDB", icon: SiMongodb, level: 68 },
          { name: "Pandas", icon: SiPandas, level: 72 },
          { name: "TensorFlow", icon: SiTensorflow, level: 55 },
        ],
      },
      {
        name: "Design & Tools",
        skills: [
          { name: "Figma", logo: figma, level: 75 },
          { name: "Adobe Photoshop", logo: ps, level: 70 },
          { name: "C / C++", icon: SiCplusplus, level: 72 },
          { name: "Arduino", icon: SiArduino, level: 65 },
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
        year: "2023–2024",
        tags: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
        description:
          "Developed a comprehensive project management platform enabling teams to collaborate efficiently. Implemented task tracking, project categorization, and role-based access control to streamline project workflows. Integrated MySQL for data persistence and TypeScript for improved code maintainability. Used Tailwind for building responsive UI, ensuring a seamless user experience across devices. Enhanced team collaboration with features such as project timelines, task assignments, and real-time updates.",
        logo: services_logo1,
      },
      {
        title: "BuySwift — Microservices Architecture",
        year: "2024",
        tags: ["React", "Spring Boot", "MySQL", "Docker"],
        description:
          "Developed a scalable and efficient Online Shopping Platform using a microservices architecture, ensuring modularity, maintainability, and high performance. The platform consisted of five core services (Order, Product, Payment, Inventory, User), each deployed in Docker containers for seamless scalability and deployment.",
        github: "https://github.com/TradeEase",
        logo: services_logo5,
      },
      {
        title: "Laundry Management System",
        year: "2023",
        tags: ["React", "Node.js", "MySQL", "Bootstrap"],
        description:
          "Comprehensive web application designed to streamline and automate laundry operations for businesses. It enables users to efficiently manage orders, track laundry status in real-time, and handle customer information through a user-friendly interface. Key features include order status updates, invoice generation, and customer request management.",
        github:
          "https://github.com/HansaniMaleesha/Laundry-Management-System",
        logo: services_logo2,
      },
      {
        title: "Blog App",
        year: "2024",
        tags: ["React", "Node.js", "MySQL", "SASS"],
        description:
          "Full-stack web application designed to simplify the process of creating, sharing, and managing blog content. Key features include secure JWT authentication, dynamic content creation with image uploads, and category-based post organization. Integrated React Router DOM 6.4 for smooth navigation and provides a commenting system.",
        github: "https://github.com/HansaniMaleesha/Blog",
        logo: services_logo3,
      },
      {
        title: "TravelX",
        year: "2024",
        tags: ["React Native"],
        description:
          "Developed a React Native mobile app that fetches and displays real-time data from an API, ensuring a smooth and responsive user experience.",
        github: "https://github.com/HansaniMaleesha/TravelX",
        logo: services_logo6,
      },
      {
        title: "Joke App",
        year: "2024",
        tags: ["Flutter", "Dart"],
        description:
          "A fun Flutter app that fetches and displays jokes from an API, providing an engaging user experience with a smooth UI.",
        github: "https://github.com/HansaniMaleesha/JokeApp-mobile",
        logo: services_logo7,
      },
      {
        title: "Automated Beverage Mixture",
        year: "2022–2023",
        tags: ["C", "Arduino", "Embedded Systems"],
        description:
          "An innovative cocktail machine designed to simplify and enhance the beverage mixing process. Equipped with user-friendly input systems, it allows users to select from a variety of cocktails and customize their drinks. Utilized microcontrollers and sensors for automated dispensing and monitoring.",
        logo: services_logo4,
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
        company: "Tech Company",
        period: "2025 – Present",
        description:
          "Contributing to full-stack development of enterprise applications. Collaborating with cross-functional teams to deliver scalable solutions using React, Spring Boot, and cloud services.",
        tags: ["React", "Spring Boot", "AWS", "Docker"],
      },
      {
        type: "work",
        title: "Software Engineering Intern",
        company: "Software Company",
        period: "2024 – 2025",
        description:
          "Gained hands-on experience in agile development workflows, contributed to production codebases, and assisted in DevOps pipeline setup. Worked on frontend and backend modules using React and Node.js.",
        tags: ["React", "Node.js", "Git", "CI/CD"],
      },
      {
        type: "work",
        title: "Part-Time Developer",
        company: "Freelance / Contract",
        period: "2023 – 2024",
        description:
          "Developed web applications for small businesses and startups. Handled full project lifecycle from requirements gathering to deployment for multiple clients.",
        tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      },
      {
        type: "education",
        title: "B.Sc. (Hons) in Information Technology",
        company: "University of Moratuwa",
        period: "2021 – Present",
        description:
          "Faculty of Information Technology. Specialized in software engineering, database systems, networking, and data science. Maintained strong academic performance while actively contributing to university projects.",
        tags: ["Software Engineering", "Data Science", "Networking"],
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
        text: "+94 762202760",
        icon: MdCall,
        link: "https://wa.me/94762202760",
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
