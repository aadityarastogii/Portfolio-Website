import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    gemai,
    WanderLust,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "projects",
    //   title: "Projects",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Database Developer",
      icon: mobile,
    },
    {
      title: "API Developer",
      icon: backend,
    },
    {
      title: "Authentication & Security",
      icon: creator,
    },
    {
      title: "Data Structures & Algorithms",
      icon: creator,
    },
    {
      title: "Version Control",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  

  
  const projects = [
    {
      name: "WanderLust",
      description:
       ["Developed a dynamic, feature-rich web application inspired by Airbnb, utilizing the MERN stack",
        "Implemented secure user authentication using Passport.js, ensuring a safe and seamless login experience.",
        "Integrated Cloudinary for efficient image uploading and management, enhancing user experience.",
        "Utilized MongoDB for structured and scalable data storage, optimizing performance and retrieval speed.",
        "Designed an intuitive property browsing and booking system, allowing users to explore and reserve accommodations effortlessly."],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: WanderLust,
      source_code_link: "https://github.com/aadityarastogii/WanderLust",
    },
    {
      name: "Gem Ai",
      description:
        ["Developed an AI-powered chatbot using the MERN stack, enabling intelligent and dynamic conversations.",
        "Integrated Gemini API Flash 1.5, enhancing conversational capabilities with advanced AI-driven responses.",
        "Implemented secure user authentication via Clerk, ensuring a seamless and protected login experience.",
        "Incorporated ImageKit for efficient image uploading and management, improving user interactions.",
        "Designed a responsive and visually appealing UI using React.js and Tailwind CSS, enhancing user experience.",
        "Built RESTful APIs with Node.js and Express.js, ensuring smooth data flow and communication.",
        "Utilized MongoDB and Mongoose for structured data management and optimized database performance."],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: gemai,
      source_code_link: "https://github.com/aadityarastogii/Gem-AI",
    },
   
  ];
  
  export { services, technologies, projects };