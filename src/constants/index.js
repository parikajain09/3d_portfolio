import { techmahindra, cognizant } from "../assets/images";

import {
    contact,
    css,
    Java,
    aws,
    bootstrap,
    portfolio,
    linux,
    mysql,  
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript
} from "../assets/icons";


export const skills = [
     {
        imageUrl: Java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "scriptting",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
{
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Tech Mahindra",
        icon: techmahindra,
        iconBg: "#accbe1",
        date: "March 2024 - Present",
        points: [
            "Developed responsive React.js UI components for a Dubai-based luxury clothing e-commerce store, improving mobile responsiveness by 35%.",
            "Led security hardening and custom PHP backend features for a luxury watch brand’s Drupal site, reducing XSS vulnerabilities by 100% and enabling real-time inventory sync across 5 regions.",
            "Orchestrated CI/CD pipelines with Jenkins and AWS CodeDeploy, collaborating with senior devs to push zero-downtime updates across dev,staging, and production.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
           
        ],
    },
    
    
    {
        title: "Programmer Analyst Trainee",
        company_name: "Cognizant",
        icon: cognizant,
        iconBg: "#a2d2ff",
        date: "June 2023 - December 2023",
        points: [
            "Built 2 production-grade Java applications using Core Java, Multithreading, Collections Framework, and Exception Handling",
            "Participated in sprint planning and provided effort estimates using story points, improving team velocity by 15%",
            "Conducting debugging, testing, and documentation efforts, helping stabilize core application flows.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/parikajain09',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/parika-jain-abb5621b9',
    }
];

export const projects = [

      {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: '3D Portfolio',
        description: 'Developed a 3d interactive portfolio, showcasing my skills, projects, and social links with smooth animations and modern UI.',
        link: 'https://github.com/parikajain09/3d_portfolio',
    }
   
   
];

 