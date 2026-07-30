import chatAppImage from "../images/projects/chat-app.png";
import projectSubmit from "../images/projects/project-submit.png";
import projectSubmit2 from "../images/projects/project-submit-2.png";

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Real-Time Chat App",
    category: "Web Development",
    featured: true,
    description:
      "A full-stack real-time messaging platform that enables users to communicate instantly through private chats. Features secure JWT authentication, real-time messaging with Socket.io, online user status, profile image uploads, and a responsive modern interface for seamless communication.",
    metrics: [
      "Real-Time Messaging",
      "JWT Authentication",
      "Online User Presence",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: chatAppImage,
    githubUrl: "https://github.com/mrwebmonkey/Chatty",
    liveUrl: "https://chatty-flame.vercel.app",
    accent: "prism",
  },
  {
    id: 2,
    number: "02",
    title: "Project Submitter",
    category: "Education Platform",
    featured: true,
    description:
      "A full-stack project management platform where teachers create batches using unique join codes, students submit projects with media, GitHub repositories, live demos, and tech stacks, and teachers review, approve, or reject submissions through a dedicated dashboard.",
    metrics: [
      "Role-Based Authentication",
      "Batch Management",
      "Project Review System",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
    ],
    image: projectSubmit2,
    githubUrl: "GITHUB_REPOSITORY",
    liveUrl: "LIVE_DEMO",
    accent: "education",
  },
];
