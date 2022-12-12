import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import data from "../components/projects.json";
const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = data;

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
