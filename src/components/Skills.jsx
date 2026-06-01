import { motion } from 'framer-motion';
import {
  FiServer,
  FiLayers,
  FiCloud,
  FiDatabase,
  FiMonitor,
  FiUsers,
} from 'react-icons/fi';
import { skills } from '../data/cvData';
import styles from './Skills.module.css';

const categoryIcons = {
  Backend: FiServer,
  Architecture: FiLayers,
  'Cloud & DevOps': FiCloud,
  Databases: FiDatabase,
  Frontend: FiMonitor,
  Methodologies: FiUsers,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className="section-label">EXPERTISE</p>
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map((skill) => {
            const Icon = categoryIcons[skill.category] || FiServer;
            return (
              <motion.div
                key={skill.category}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.cardIcon}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{skill.category}</h3>
                <div className={styles.chips}>
                  {skill.items.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
