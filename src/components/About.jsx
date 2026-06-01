import { motion } from 'framer-motion';
import { summary, highlights } from '../data/cvData';
import styles from './About.module.css';

const boldTerms = ['7+ years', 'enterprise-grade', 'cloud-native', '.NET 10', 'Baltic region'];

function highlightSummary(text) {
  const regex = new RegExp(`(${boldTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isBold = boldTerms.some(term => part.toLowerCase() === term.toLowerCase());
    return isBold ? <strong key={i}>{part}</strong> : part;
  });
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.span className={styles.label} variants={fadeUp}>
          About Me
        </motion.span>
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Professional Summary
        </motion.h2>
        <motion.p className={styles.summary} variants={fadeUp}>
          {highlightSummary(summary)}
        </motion.p>

        <motion.div
          className={styles.highlights}
          variants={containerVariants}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.cardValue}>{item.value}</div>
              <div className={styles.cardLabel}>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
