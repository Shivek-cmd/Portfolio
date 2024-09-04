import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 year of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Redux, Node.js, MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Quiz-App",
    image: project1,
    description:
      "A full-stack quiz builder app with user authentication for creating, sharing, and managing quizzes. It supports anonymous quiz-taking, includes timers, analytics, and impression tracking, and ensures secure passwords and robust error handling.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Express.js"],
    deployLink: "https://quizz-app-beta-sandy.vercel.app/",
  },
  {
    title: "Job Finder",
    image: project2,
    description:
      "A job listing platform with skill-based filters, user authentication, and secure job management. Includes APIs for listing, retrieving, and editing jobs, with JWT-based authentication, robust error handling, and modular CSS design.",
    technologies: ["React", "Tailwind-CSS", "Node.js", "MongoDB", "Express.js"],
    deployLink: "https://job-finder-rho-nine.vercel.app/",
  },
  {
    title: "NoteHub",
    image: project3,
    description:
      "A React-based note-taking app with features for creating and managing note groups. Utilizes localStorage for saving data and includes a mobile-responsive design for optimal viewing.",
    technologies: ["HTML", "CSS", "Javasript", "React"],
    deployLink: "https://shivek-cmd.github.io/Notes-taking-app/",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    deployLink: "https://shivek-cmd.github.io/Notes-taking-app/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
