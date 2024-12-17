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
  tripguide,
  threejs,
} from "../assets";
import ssintek from '../assets/ssintek.jpg';
import dorustree from '../assets/Dorustree.png';
import genome from '../assets/genome.jpg';
import fitclub from '../assets/fitclub.jpg';
import cineflix from "../assets/cineflix.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  
];

const experiences = [
  {
    title: "Senior Front end developer ",
    company_name: "SSINTEK(Solarsys Innovations pvt,ltd),Trichy.",
    icon: ssintek,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developed and maintained client-facing web applications for TELSTRA, Australia’s leading technology and telecommunications company.",
            "Gained hands-on experience with Single-SPA micro-frontend architecture and other related technologies",
            "Led and facilitated knowledge-sharing sessions and directly interacted with clients to gather requirements and provide technical solutions.",
            "Designed and implemented responsive webpages using Tailwind CSS and integrated ABLE and AEM components",
            "Worked within an Agile development environment, collaborating closely with cross functional teams to ensure project success."
    ],
  },
  {
    title: "Junior Front end developer",
    company_name: "Dorustree company,Trichy.",
    icon: dorustree,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Trained in modern front-end technologies, focusing on React.js and Node.js.",
      "Contributed as a backup resource on several client projects, developing dynamic and interactive webpages.",
      "Gained experience in delivering web solutions that met client requirements . and industry standards."
    ],
  },
  {
    title: "Software Programmer Intern",
    company_name: "Genome Internationals,Chennai.",
    icon: genome,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Acquired foundational skills in React Js, Java, HTML, CSS, and MySQL.",
      "Participated in workshops and hands-on training sessions to strengthen understanding of basic programming and web development principles.",
      "Contributed to the development of basic web applications and database management tasks."
    ],
  },
];


const testimonials = [
  {
    title: 'Frontend',
    skills:[
        {skill:"HTML5",percentage:"90%"},
        {skill:"CSS (Sass/SCSS/Bootstrap/Tailwind CSS)",percentage:"90%"},
        {skill:"Javascript (ES6)",percentage:"80%"},
        {skill:"React.js (Redux/Hooks/Routes)",percentage:"85%"},
    ],
  },
  {
    title: 'Backend',
    skills:[
        {skill:"SQL", percentage:"70%"},
        {skill:"Node.js",percentage:"70%"},
        {skill:"Express.js",percentage:"60%"},
    ],
  },
  {
    title: 'Tools',
    skills:[
        {skill:"Git & Github",percentage:"85%"},
        {skill:"Postman",percentage:"82%"},
        {skill:"Visual Studio Code",percentage:"90%"},
        {skill:"Webpack",percentage:"80%"},
        {skill:"Responsive Design",percentage:"80%"},
    ],
  },
  {
    title: 'Soft Skills',
    skills:[
        {skill:"Problem-solving",percentage:"80%"},
        {skill:"Collaboration",percentage:"75%"},
        {skill:"Adaptability",percentage:"80%"},
        {skill:"Leadership Quality",percentage:"85%"},
    ],
  },
];
const projects = [
  {
    name: "Fit Club",
    description:
      "Web-based platform that allows users to connect directly to the gym trainers and clarify their fitness related doubts, providing a convenient and efficient solution for their needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:fitclub,
    source_code_link: "https://github.com/Dhineshthiru/fitclub-responsive",
  },
  {
    name: "Cine Flix",
    description:
      "Web application that enables users to search movies or series according to their requirements and it gives access the users who claimed their special membership to play selected movies",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "flexbox",
        color: "pink-text-gradient",
      },
      {
        name: "responsiveness",
        color: "green-text-gradient",
      },
    ],
    image: cineflix,
    source_code_link: "https://github.com/Dhineshthiru/CINEFLIX-WEBSITE.git",
  },
  {
    name: "Trip Advisor",
    description:
      "A comprehensive travel platform that helps users plan their trips by booking flights, hotels, and rental cars. It also provides recommendations, reviews, and insights for popular destinations, making travel planning easier and more informed..!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dhineshthiru/bookingapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
