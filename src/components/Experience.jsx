import { motion } from 'framer-motion';
import { experience } from '../data/cvData';
import styles from './Experience.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.span className={styles.label} variants={slideIn}>
          Career Path
        </motion.span>
        <motion.h2 className={styles.heading} variants={slideIn}>
          Professional Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <motion.div
              key={job.period}
              className={styles.entry}
              variants={slideIn}
            >
              <div
                className={`${styles.dot} ${job.current ? styles.dotCurrent : ''}`}
              />

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.title}>{job.title}</h3>
                  <span className={styles.period}>{job.period}</span>
                </div>

                <div className={styles.companyRow}>
                  <span className={styles.company}>{job.company}</span>
                  {(job.client || job.type) && (
                    <>
                      <span className={styles.separator}>·</span>
                      <span className={styles.client}>
                        {[job.client, job.type].filter(Boolean).join(' — ')}
                      </span>
                    </>
                  )}
                  {job.current && (
                    <span className={styles.badge}>
                      <span className={styles.badgeDot} />
                      Current
                    </span>
                  )}
                </div>

                <ul className={styles.bullets}>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {job.tech.map((tech) => (
                    <span key={tech} className={styles.pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
