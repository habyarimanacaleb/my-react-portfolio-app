export type myWork = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

const myWorkData: myWork[] = [
    {
        id: 1,
        title: "Skills Challenge Website",
        description: "A Skill Challenge website showcasing my front-end development Skills.",
        technologies: ["HTML", "CSS","Taillwind" , "JavaScript", "React"],
        link: "https://umurava-skill-challenge.netlify.app/",
        image: "images/skill-challenge-image.jpg"
    },
    {
        id: 2,
        title: "Full-Stack Blog Website",
        description: "A blog platform built with a full-stack approach for Tourism.",
        technologies: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
        link: "https://kivu-grafter.netlify.app",
        image: "images/full-stuck-image.jpg"
    },

{
    id: 3,
    title: "Easy Renting App",
    description: "We can design and develop A fully functiona Renting application with real-time chat with your clients.",
    technologies: ["React Native", "React" , "NextJs" , "Redux"],
    link: "https://paccy-easy-renting-fn.netlify.app",
    image: "images/easy-renting-image.jpg"
},
{
    id: 4,
    title: "Ibirwa Kivu Bike tours",
    description: "We can design and develop A fully functiona bike tours application with real-time chat with your clients.",
    technologies: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
    link: "https://ibirwa-kivu-bike-tours.netlify.app",
    image: "images/ibirwa-kivu-bike-tours-image.jpg"
}
];

export default myWorkData;