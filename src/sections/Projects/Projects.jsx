import styles from "./ProjectsStyles.module.css";
import calculate from "../../assets/calculate.png";
import form from "../../assets/form.jpg";

import costSegrigate from "../../assets/cost-segrigate.jpg";
import snake from "../../assets/snakee.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={calculate}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Calculator"
          p="CalcMaster"
        />
        <ProjectCard
          src={snake}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Snake Game"
          p="Pixel Serpent"
        />
        <ProjectCard
          src={costSegrigate}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Cost Segrigation"
          p="Tax-saving strategy"
        />
        <ProjectCard
          src={form}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Form Validation"
          p="CheckMate Forms"
        />
      </div>
    </motion.section>
  );
}

export default Projects;
