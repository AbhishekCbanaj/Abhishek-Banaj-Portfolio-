import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Prompt Engineer",
    icon: mobile,
  },
  {
    title: "Social Media Manager",
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
    name: "python",
    icon: python,
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

const experiences = [

  {
    title: "Graphic Designer",
    company_name: "Mes College of Arts and Commerce , Goa",
    icon: shopify,
    iconBg: "#383E56",
    date: " November 2021 to April 2023",
    points: [
      "Worked at MES College of Zuarinagar as a graphic designer, responsible for creating various promotional materials such as flyers, posters, and brochures.",
      "Demonstrated proficiency in graphic design software and tools to develop visually appealing and effective designs.",
      "Collaborated closely with the marketing and communications team to understand project requirements, target audience, and desired messaging.",
      "Developed innovative and engaging designs that effectively communicated the college's brand and conveyed the intended message.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2022 - December 2022",
    points: [
      "Worked as a freelance developer, specializing in front-end projects for clients.",
      "Developed and implemented various features for client websites, focusing on enhancing user experience and functionality.",
      "Collaborated closely with clients to understand their requirements, goals, and desired outcomes for each project.",
      "Utilized expertise in front-end development languages (HTML, CSS, JavaScript) to create responsive and visually appealing interfaces.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "This is amazing weather app which uses open weather api and it can fetch the weather of your current location or any particular city. The UI of the app is completely responsive",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "AndroidStudio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AbhishekCbanaj",
  },
  {
    name: "Youtube-Clone",
    description:
      "It is an youtube clone.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "reduxjs",
        color: "pink-text-gradient",
      },
      {
        name: "front-end Develop",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AbhishekCbanaj",
  },
  {
    name: "Petsprism-website",
    description:
    "Developed PetsPrism, an innovative pets e-commerce website, offering a wide range of pet products and services for pet lovers in Goa."
    ,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "reduxjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AbhishekCbanaj",
  },
];

export { services, technologies, experiences, testimonials, projects };
