import "./index.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <li key={props.index}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </li>
    </div>
  );
}

export default ProjectCard;
