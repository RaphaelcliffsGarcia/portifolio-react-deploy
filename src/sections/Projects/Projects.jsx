import styles from "./ProjectsStyles.module.css";
import academy from "../../assets/academy.png";
import jupter from "../../assets/jupter.png";
import bomberman from "../../assets/bomberman.png";
import pythondock from "../../assets/pythondock.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={academy}
          link="https://www.figma.com/proto/2UwiGFx0skqDv0SAWRRwAw/Projeto-Academy?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
          h3="Projeto Academy"
          p=" UX/UI Project"
        />
        <ProjectCard
          src={jupter}
          link="https://github.com/RaphaelcliffsGarcia/CursoAlura"
          h3="Python/Data Science"
          p="Jupyter com análises"
        />
        <ProjectCard
          src={bomberman}
          link="https://github.com/RaphaelcliffsGarcia/BomberMan"
          h3="Bomberman"
          p="Pygame Bomberman "
        />
        <ProjectCard
          src={pythondock}
          link="https://github.com/RaphaelcliffsGarcia/MVP"
          h3="Python Full Stack"
          p="FLASK App"
        />
      </div>
    </section>
  );
}

export default Projects;
