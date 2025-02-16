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



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs';
import { BiUser } from "react-icons/bi"; // Import new icon
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlinePermContactCalendar, MdOutlineArticle } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


export const content = {
  nav: [
    {
      link: "#home",
      icon: AiFillHome,
    },
    {
      link: "#about", // Link for the About Us section
      icon: BiUser, // New icon
    },
    {
      link: "#skills",
      icon: GiSkills,
    },
    {
      link: "#services",
      icon: FaProjectDiagram,
    },
    {
      link: "#blog",
      icon: MdOutlineArticle,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },

  ],
  hero: {
    title: "A Full Stack Developer",
    firstName: "Hansani",
    LastName: "Maleesha",
    btnText: "Hire Me",
    image: Hero_person,

    hero_content: [
      {
        text: "I am a dedicated Full Stack Developer and undergraduate at the University of Moratuwa, passionate about creating innovative and efficient web applications. ",
      },],
    logos: [
      {
        name: "GitHub",
        url: "https://github.com/HansaniMaleesha", // Replace with your GitHub URL
        logo: github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hansani-maleesha/", // Replace with your LinkedIn URL
        logo: linkdin,
      },
      {
        name: "Medium",
        url: "https://medium.com/@maleesha0003", // Replace with your Medium URL
        logo: medium,
      },
      {
        name: "Email",
        url: "mailto:hansanimaleeshamaduwanthi@gmail.com", // Replace with your email address
        logo: emaillogo,
      },
    ],

  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "Spring Boot",
        logo: springboot,
      },
      {
        name: "Flutter",
        logo: flutter,
      },
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Java",
        logo: java,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "Figma",
        logo: figma,
      },

      {
        name: "Adobe Photoshop",
        logo: ps,
      },
    ],
    // icon: MdArrowForward,
  },
  services: {
    title: "Projects",
    subtitle: "Most Recent Work",
    service_content: [
      {
        title: "IKON Unified Project Workspace (2023-2024)",
        para: "ReactJs, TypeScript, NodeJs, MySQL, Tailwind CSS",
        description: "Developed a comprehensive project management platform enabling teams to collaborate efficiently. Implemented task tracking, project categorization, and role-based access control to streamline project workflows. Integrated MySQL for data persistence and TypeScript for improved code maintainability. Used Tailwind for building responsive UI, ensuring a seamless user experience across devices. Enhanced team collaboration with features such as project timelines, task assignments, and real-time updates.",
        logo: services_logo1,
      },
      {
        title: "Laundry Management System (2023)",
        para: "ReactJs, NodeJs, MySQL, Bootstrap",
        description: "The Laundry Management System is a comprehensive web application designed to streamline and automate laundry operations for businesses. It is built using React.js for a responsive and dynamic front-end, Node.js for scalable server-side processing, and MySQL for robust data management. The system enables users to efficiently manage orders, track laundry status in real-time, and handle customer information through a user-friendly interface that works seamlessly across all devices. Key features include order status updates, invoice generation, and customer request management, all designed to enhance the operational workflow. By digitizing the entire laundry process, the app boosts operational efficiency and delivers an improved customer experience with streamlined communication and services.",
        github: "https://github.com/HansaniMaleesha/Laundry-Management-System",
        logo: services_logo2,
      },
      {
        title: "Blog App (2024)",
        para: " ReactJs, NodeJs, MySQL, SASS",
        description: "The Blog App is a full-stack web application designed to simplify the process of creating, sharing, and managing blog content. Built using React.js for the front-end, Node.js for the back-end, and MySQL for data management, it offers a seamless and responsive user experience across devices. Key features include secure JWT authentication, dynamic content creation with image uploads, and category-based post organization. The app also integrates React Router DOM 6.4 for smooth navigation and provides a commenting system to foster user engagement. With its intuitive design and robust functionality, the Blog App enhances the blogging experience for both authors and readers.",
        github: "https://github.com/HansaniMaleesha/Blog",
        logo: services_logo3,
      },
      {
        title: "BuySwift(2024) - Microservices Architecture",
        para: " ReactJs, Spring Boot, MySQL",
        description: (<>Developed a scalable and efficient Online Shopping Platform using a microservices architecture, ensuring modularity, maintainability, and high performance. The platform consisted of five core services, each deployed in Docker containers for seamless scalability and deployment.
          <ul>
            <li>Order Service – Managed order placement, tracking, and history.</li>
            <li>Product Service – Handled product catalog, categories, and details.</li>
            <li>Payment Service – Integrated secure payment processing with multiple gateways.</li>
            <li>Inventory Service – Monitored stock levels and updated availability in real time.</li>
            <li>User Service – Managed user authentication, profiles, and roles.</li>
          </ul>
        </>),
        github: "https://github.com/TradeEase",
        logo: services_logo5,
      },
      {
        title: "TravelX(2024)",
        para: " React Native",
        description: "Developed a simple React Native mobile app that fetches and displays real-time data from an API, ensuring a smooth and responsive user experience.",
        github: "https://github.com/HansaniMaleesha/TravelX",
        logo: services_logo6,
      },
      {
        title: "Joke App(2024)",
        para: " Flutter, Dart",
        description: "Developed a simple Flutter app that fetches and displays jokes from an API, providing a fun and engaging user experience with a smooth UI.",
        github: "https://github.com/HansaniMaleesha/JokeApp-mobile",
        logo: services_logo7,
      },
      {
        title: "Automated Beverage Mixture (2022-2023)",
        para: "C Language, Atmel Studio, Arduino IDE",
        description: "The Automated Beverage Mixture is an innovative cocktail machine designed to simplify and enhance the beverage mixing process. Equipped with user-friendly input systems, it allows users to select from a variety of cocktails and customize their drinks according to personal preferences. The machine features automated beverage containers that precisely measure and dispense the required ingredients, ensuring consistency and quality in every drink. Utilizing advanced mixing processes, the machine combines the ingredients seamlessly, producing perfectly blended cocktails in seconds. The integration of microcontrollers and sensors enhances the machine's functionality, allowing it to monitor ingredient levels and provide real-time feedback to users. This automated solution not only saves time and effort but also delivers a sophisticated cocktail experience for gatherings, parties, and events.",
        logo: services_logo4,
      },
    ],

  },
  Testimonials: {
    title: "My Blogs",
    subtitle: "Blogs",
    testimonials_content: [
      {
        review:
          "“Harnessing the Power of the`useEffect` Hook in Custom React Hooks for Data Fetching”",
        img: blog,
        link: "https://medium.com/@maleesha0003/harnessing-the-power-of-the-useeffect-hook-in-custom-react-hooks-for-data-fetching-24c0275ffe1c",

      },
      {
        review:
          "“Control Flow: Conditionals in Java”",
        img: blog,
        link: "https://medium.com/@maleesha0003/control-flow-conditionals-in-java-57228d7ec115",
      },
      {
        review:
          "“Basic Concepts: Data Types, Variables, and Operators in Java”",
        img: blog,
        link: "https://medium.com/@maleesha0003/basic-concepts-data-types-variables-and-operators-4920d6ef2422",
      },
      {
        review:
          "“Introduction to Programming with Java: A Beginner’s Guide”",
        img: blog,
        link: "https://medium.com/@maleesha0003/introduction-to-programming-with-java-a-beginners-guide-7f8dda361e15",
      },
    ],
  },
  About: {
    title: "About me.",
    subtitle: "About me",
    btnText: "Download Resume",
    about_content: [
      {

        text: "I am a 3rd-year undergraduate at the University of Moratuwa, Faculty of Information Technology. I thrive on solving challenges through logical and creative thinking, viewing each as an opportunity for growth. With a solid foundation in software development, I am passionate about continuous learning and self-improvement.I enjoy taking on complex problems, driven by a desire to contribute to impactful projects. Committed to delivering high-quality results, I aim to enhance my skills and make meaningful contributions to the IT field.",


      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hansanimaleeshamaduwanthi@gmail.com",
        icon: GrMail,
        link: "mailto:hansanimaleeshamaduwanthi@gmail.com",
      },
      {
        text: "+91 762202760",
        icon: MdCall,
        link: "https://wa.me/91762202760", // Replace with your phone number

      },
      {
        text: "Hansani Maleesha",
        icon: BsLinkedin, // Change to LinkedIn icon
        link: "https://www.linkedin.com/in/your-linkedin-profile/", // Replace with your LinkedIn profile link

      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
