export const personalInfo = {
  name: "Estanislao Sebastián Córdoba",
  title: "Senior Backend Developer",
  subtitle: ".NET & C#",
  location: "Tucumán, Argentina",
  email: "cordobaestanislaos@gmail.com",
  linkedin: "https://www.linkedin.com/in/estanislaocordoba/",
  github: "https://github.com/tanituc",
  relocation: "Open to relocation — Nordic & Baltic Region",
  visaNote: "Visa sponsorship required · Available immediately",
  cvFileName: "Estanislao_Cordoba_CV.pdf",
};

export const summary =
  "Senior Backend Developer with 7+ years of experience building enterprise-grade applications using C#, .NET, and SQL. Proven expertise in modernizing legacy systems (.NET Framework 4.8) to cloud-native architectures (.NET 10) with Docker, Azure, and microservices. Currently driving platform modernization at a leading U.S. insurance carrier, collaborating daily with international stakeholders in English. Actively seeking relocation to the Nordic & Baltic region after visiting Estonia, Lithuania, Latvia, Finland, and Sweden.";

export const highlights = [
  { value: "7+", label: "Years Experience" },
  { value: ".NET 10", label: "Latest Stack" },
  { value: "Azure", label: "Cloud Platform" },
  { value: "B2+", label: "English Level" },
];

export const experience = [
  {
    title: "Senior Backend Developer",
    company: "JBKnowledge",
    client: "Contractor for Safety National (U.S. Insurance Carrier)",
    type: "Remote from Argentina",
    period: "Feb 2023 — Present",
    current: true,
    bullets: [
      "Architect and maintain multiple backend applications supporting enterprise insurance operations, managing both legacy (.NET Framework 4.8) and modern (.NET 10) services",
      "Lead ongoing migration from monolithic legacy systems to cloud-native microservices using .NET 10, Docker containers, and Azure, following Clean Architecture principles",
      "Design and implement event-driven communication between microservices using messaging patterns (queues/topics), ensuring system decoupling and reliability",
      "Build and maintain CI/CD pipelines on Azure DevOps for automated build, test, and containerized deployments to Azure",
      "Participate in daily standups, sprint planning, and user story refinement directly with U.S.-based clients — all conducted in English",
      "Collaborate with cross-functional teams to define API contracts, review code, and ensure high-quality deliverables following Agile/Scrum methodology",
    ],
    tech: [
      "C#", ".NET 10", ".NET Framework 4.8", "Docker", "Azure",
      "Azure DevOps", "SQL Server", "REST APIs", "Microservices",
      "Clean Architecture", "Event-Driven",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "JBKnowledge / Integramedia",
    client: "Internal Projects",
    type: "Remote",
    period: "Dec 2021 — Jan 2023",
    current: false,
    bullets: [
      "Developed and maintained full-stack enterprise applications using C#/.NET backend and React frontend",
      "Optimized database queries and API performance, improving system responsiveness across platforms",
      "Implemented RESTful APIs consumed by multiple client applications with consistent data flow",
    ],
    tech: ["C#", ".NET", "SQL Server", "React", "JavaScript", "REST APIs", "Azure DevOps", "Git"],
  },
  {
    title: "Full Stack .NET & React Developer",
    company: "Ministry of Education, Tucumán",
    client: null,
    type: "Government Sector",
    period: "Apr 2021 — Nov 2021",
    current: false,
    bullets: [
      "Built full-stack applications integrating .NET backend with React UI for public education management",
      "Developed RESTful APIs serving platforms used across the provincial school network",
    ],
    tech: ["C#", ".NET", "React", "JavaScript", "SQL Server", "REST APIs"],
  },
  {
    title: "UI/UX Designer & React Developer",
    company: "elTucumano Newspaper",
    client: null,
    type: "Media Industry, Tucumán",
    period: "May 2019 — Jan 2020",
    current: false,
    bullets: [
      "Developed React frontend components and designed UI/UX mockups for a regional news platform",
      "Improved content delivery through responsive design, Material-UI integration, and performance optimization",
    ],
    tech: ["React", "JavaScript", "Material-UI", "HTML5", "CSS3", "Adobe XD"],
  },
];

export const skills = [
  {
    category: "Backend",
    items: ["C#", ".NET 10", ".NET Framework 4.8", "ASP.NET Core", "Entity Framework Core", "Node.js"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Clean Architecture", "Event-Driven", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Docker", "CI/CD Pipelines", "Azure DevOps", "Git", "GitHub", "GitLab"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "T-SQL", "Database Design", "Query Optimization"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Material-UI"],
  },
  {
    category: "Methodologies",
    items: ["Scrum/Agile", "Code Review", "User Story Refinement", "Sprint Planning"],
  },
];

export const education = [
  {
    degree: "Video Games & Virtual Simulations",
    type: "Technician Degree",
    school: "Tucumán, Argentina",
    period: "2017 — Present",
  },
  {
    degree: "Computer Programming",
    type: "Technician Degree (completed coursework)",
    school: "Tucumán, Argentina",
    period: "2016 — 2017",
  },
];

export const languages = [
  { name: "Spanish", level: "Native speaker" },
  { name: "English", level: "Professional working proficiency (B2+)" },
];
