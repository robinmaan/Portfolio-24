import React from "react";
import { motion } from "framer-motion";
function ProjectCard({ src, link, h3, p }) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      href={link}
      target="_blank"
    >
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </motion.a>
  );
}

export default ProjectCard;
