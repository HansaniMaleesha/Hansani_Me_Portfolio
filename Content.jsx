// import images
import Hero_person from "./src/assets/images/Hero/person.png";
import emaillogo from "./src/assets/images/Hero/email.png";
import linkdin from "./src/assets/images/Hero/linkdinlogo.png";
import github from "./src/assets/images/Hero/githublogo.png";
import medium from "./src/assets/images/Hero/medium.png";

import figma from "./src/assets/images/Skills/figma.png";
import ps from "./src/assets/images/Skills/ps.png";
import reactjs from "./src/assets/images/Skills/react.png";
import nodejs from "./src/assets/images/Skills/node.png";
import python from "./src/assets/images/Skills/python.png";
import java from "./src/assets/images/Skills/java.png";

import services_logo1 from "./src/assets/images/Services/logo1.png";
import services_logo2 from "./src/assets/images/Services/logo2.png";
import services_logo3 from "./src/assets/images/Services/logo3.png";



import avatar1 from "./src/assets/images/Testimonials/avatar1.png";
import avatar2 from "./src/assets/images/Testimonials/avatar2.png";
import avatar3 from "./src/assets/images/Testimonials/avatar3.png";
import avatar4 from "./src/assets/images/Testimonials/avatar4.png";
import blog from "./src/assets/images/Testimonials/blog.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs';
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
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
    btnText: "Download Resume",
    image: Hero_person,
    
    hero_content: [
      {
        text: "I am an undergraduate in the Faculty of Information Technology at the University of Moratuwa. ",
      },],
      logos:[
        {
          name: "GitHub",
          url: "https://github.com/your-username", // Replace with your GitHub URL
          logo: github,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/your-linkedin-id", // Replace with your LinkedIn URL
          logo: linkdin,
        },
        {
          name: "Medium",
          url: "https://medium.com/@your-medium-id", // Replace with your Medium URL
          logo: medium,
        },
        {
          name: "Email",
          url: "mailto:your-email@example.com", // Replace with your email address
          logo: emaillogo,
        },
      ],
      
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Node js",
        logo: nodejs,
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
        des:"Developed a comprehensive project management platform enabling teams to collaborate efficiently. Implemented task tracking, project categorization, and role-based access control to streamline project workflows. Integrated MySQL for data persistence and TypeScript for improved code maintainability. Used Tailwind for building responsive UI, ensuring a seamless user experience across devices. Enhanced team collaboration with features such as project timelines, task assignments, and real-time updates.",
        logo: services_logo1,
      },
      {
        title: "Laundry Management System (2023)",
        para: "ReactJs, NodeJs, MySQL, Bootstrap",
        logo: services_logo2,
      },
      {
        title: "Blog App (2024)",
        para: " ReactJs, NodeJs, MySQL, SASS",
        logo: services_logo3,
      },
      {
        title: "Automated Beverage Mixture (2022-2023)",
        para: "C Language, Atmel Studio, Arduino IDE",
        logo: services_logo3,
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
        link:"https://medium.com/@maleesha0003/harnessing-the-power-of-the-useeffect-hook-in-custom-react-hooks-for-data-fetching-24c0275ffe1c",
        
      },
      {
        review:
          "“Control Flow: Conditionals in Java”",
        img: blog,
       link:"https://medium.com/@maleesha0003/control-flow-conditionals-in-java-57228d7ec115",
      },
      {
        review:
          "“Basic Concepts: Data Types, Variables, and Operators in Java”",
        img: blog,
       link:"https://medium.com/@maleesha0003/basic-concepts-data-types-variables-and-operators-4920d6ef2422",
      },
      {
        review:
          "“Introduction to Programming with Java: A Beginner’s Guide”",
        img: blog,
        link:"https://medium.com/@maleesha0003/introduction-to-programming-with-java-a-beginners-guide-7f8dda361e15",
      },
    ],
  },
  About: {
    title: "About me.",
    subtitle: "About me",
    about_content: [
      {
        
        text: "I thrive on solving challenges  through logical and creative thinking, viewing each as an opportunity for growth. With a solid foundation in software development, I am committed to continuously improving my skills and contributing to innovative projects in the IT field.",
        
        
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
