export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

const projectData: Project[] = [
    {
        id: 1,
        title: "Front-End Developer Portfolio",
        description: "A portfolio website showcasing my front-end development projects.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://example.com/frontend-portfolio",
        image: "images/frontend-portfolio-image.jpg"
    },
    {
        id: 2,
        title: "Full-Stack Developer Blog",
        description: "A blog platform built with a full-stack approach.",
        technologies: ["Node.js", "Express", "MongoDB", "React"],
        link: "https://kivu-grafter.netlify.app/full-stack-blog",
        image: "images/full-stuck-image.jpg"
    },

{
    id: 3,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with payment integration.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    link: "https://example.com/ecommerce-website",
    image: "images/ecommerce-website-image.jpg"
},
{
    id: 4,
    title: "Social Media App",
    description: "A social media application with real-time chat and notifications.",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://example.com/social-media-app",
    image: "images/social-media-app-image.jpg"
},
{
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to organize and prioritize your tasks.",
    technologies: ["Vue.js", "Vuex", "Node.js", "Express", "PostgreSQL"],
    link: "https://example.com/task-management-tool",
    image: "images/task-management-tool-image.jpg"
}
];

export default projectData;