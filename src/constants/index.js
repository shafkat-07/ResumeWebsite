import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable applications. Through my 4 years in college, I have honed my skills in crucial software development skills such as object-oriented design, algorithms, and Artificial Intelligence. My internship experiences have have further enhanced my abilities in front-end technologies like React and Angular, as well as back-end technologies like ASP.NET, Flask, MySQL, and PostgreSQL. My goal is to leverage my knowledge to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a recent graduate from Michigan State University, where I earned my B.S. in Computer Science with a 3.77 GPA. My passion lies in creating innovative computer applications, web development, and exploring the rapidly evolving field of artificial intelligence. Throughout my academic journey, I have developed a strong foundation in problem-solving and a curiosity for building efficient, user-friendly solutions. I am always eager to learn new technologies and thrive in environments where collaboration and creative thinking lead to impactful results.`;

export const EXPERIENCES = [
  {
    year: "September 2023 - December 2023",
    role: "Capstone Experience",
    company: "United Airlines",
    description: `Planned workflow by managing product development through clear communication with clients to deliver functional 
software to meet client targets. Developed a new API using Flask library and finetuned the LaMini-T5 AI model using Python’s LangChain and PyTorch 
libraries to automate audits. Employed AWS EC2 for computing, S3 buckets for asset storage, and DynamoDB for database management, demonstrating 
proficiency in distributed, multi-tiered systems. Reduced auditing time from 6 hours to 15 minutes by leveraging AI, resulting in estimated annual savings of $7000 in human 
resources. `,
    technologies: ["Javascript", "React.js", "Flask", "AWS DynamoDB", "AWS S3", "AWS EC2"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Software Engineer Intern",
    company: "Rocket Mortgage",
    description: ` Created a loan generator tool to streamline internal application testing, ensuring efficient and scalable software solutions. 
 Mastered company development processes and code base, to create ASP.NET REST API to communicate with existing 
internal services for loan data. 
 Worked with a team of engineers to aggregate all collected data into a usable test loan reducing testing time by 97%. Applied Agile software development practices to analyze business requirements and outline proposed solutions. `,
    technologies: ["Angular", "ASP.NET", "AWS", "Terraform"],
  },
  {
    year: "May 2022 - August 2022",
    role: "Software Engineer Intern",
    company: "Rocket Mortgage",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "ASP.NET", "AWS Lambda", "PostgreSQL", "Angular"],
  },
  {
    year: "September 2021 - April 2024",
    role: "Teaching Assistant",
    company: "Michigan State University",
    description: ` Collaborated with a team to design and develop a full-stack web application to track underwriter accuracy, rapidly mastering 
new technologies through continuous mentorship. 
 Spearheaded the development of an API using ASP.NET, ensuring accurate calculations and created efficient PostgreSQL 
queries for optimal response times. 
 Utilized object-oriented design concepts and common design patterns to develop robust and scalable systems. 
 Implemented best practices to improve team coding culture related to quality and security. `,
    technologies: ["C++", "Python", "OOP"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "187 Cascade Blvd, Lansing, MI 48912 ",
  phoneNo: "+1 517 449 2949 ",
  email: "kabirmd@msu.edu",
};
