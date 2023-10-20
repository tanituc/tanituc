import ProjectCard from "../ProjectCard";
import "./index.css";
function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del Proyecto 1.",
      link: "https://github.com/tu-usuario/proyecto1",
    },
    {
      title: "Proyecto 2",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 3",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 4",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 5",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 6",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 7",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 8",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    {
      title: "Proyecto 9",
      description: "Descripción del Proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2",
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            description={project.description}
            title={project.title}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
