const header = {
  // all the properties are optional - can be left empty or deleted

  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Davud",
  role: "Frontend Developer",
  description:
    "I am software developer from Serbia. Right now I'm focused on Frontend technologies, working with Javascript, React.js, Redux toolkit as state management, Responsive web design with Material UI and Bootstrap CSS frameworks. Also i have strong knowledge in working with API's. I am a fast learner and always want to learn new technologies and new things from more experienced developers.",

  resume: "Resume",
  social: {
    linkedin: "https://www.linkedin.com/in/davud-čarovac-973095286/",
    github: "https://github.com/davudxD",
  },
};

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Youtube clone with the same options for watching videos,  browsing content, sorting content, searching videos as on real Youtube. Fetching data from RapidAPI the world's largest API hub. ",
    stack: ["React", "Material UI"],
    sourceCode: "https://github.com/davudxD/Youtube-clone",
    livePreview: "https://github.com",
  },
  {
    name: "Football App",
    description:
      "The latest news from world of football, match overview, live results, overview of  results of all leagues in the world, top 5 leagues, player statistics, standings. Fetching data from multiple sources. ",
    stack: ["React", "Redux tk"],
    sourceCode: "https://github.com",
    livePreview:
      "https://drive.google.com/file/d/1MqZ0PRXzWEZl8No9Ugc6im3miHMTfd5Z/view",
  },
  {
    name: "Ladybug",
    description:
      "CURRENTLY UNDER DEVELOPMENT Ladybug is a social media web application I built to practise Redux and Firebase. Features include CRUD functionality, posts, user authentication, likes, comments and server-side rendering.",
    stack: ["React", "Redux tk", "Material UI", "Firebase"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux toolkit",
  "Material UI",
  "Git",
  "Firebase",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "carovacdavud6@mail.com",
};

export { header, about, projects, skills, contact };
