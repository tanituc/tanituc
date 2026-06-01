import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiNavigation, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../data/cvData';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated background mesh */}
      <div className={styles.meshBg} aria-hidden="true" />
      <div className={styles.noiseBg} aria-hidden="true" />

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Label */}
        <motion.p className={styles.label} variants={fadeUp}>
          {personalInfo.title}
        </motion.p>

        {/* Name */}
        <motion.h1 className={styles.name} variants={fadeUp}>
          {personalInfo.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p className={styles.subtitle} variants={fadeUp}>
          {personalInfo.subtitle}
        </motion.p>

        {/* Relocation badge */}
        <motion.div className={styles.badge} variants={fadeUp}>
          <FiNavigation size={14} />
          <span>{personalInfo.relocation}</span>
          <span className={styles.flags}>🇪🇪 🇱🇹 🇱🇻 🇫🇮 🇸🇪</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div className={styles.actions} variants={fadeUp}>
          <a
            href={`/${personalInfo.cvFileName}`}
            download
            className={styles.btnPrimary}
          >
            <FiDownload size={16} />
            <span>Download CV</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.btnSecondary}
          >
            <FiMail size={16} />
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
