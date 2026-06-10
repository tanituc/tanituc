import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiNavigation, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../data/cvData';
import styles from './Hero.module.css';
import CatSpawner from './CatSpawner';

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

export default function Hero({ isDark, onSpawnCat, catCount }) {
  return (
    <section className={styles.hero} id="hero">
      {/* Handdrawn style clouds background */}
      <div className={styles.cloudsBg} aria-hidden="true">
        {/* Cloud 1 */}
        <svg className={styles.cloud1} viewBox="0 0 100 60" fill="#f0e9e1" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 Q 15 25, 30 30 Q 40 15, 60 25 Q 75 15, 85 30 Q 95 35, 90 45 Q 85 55, 10 50 Z" />
        </svg>
        {/* Cloud 2 */}
        <svg className={styles.cloud2} viewBox="0 0 120 70" fill="#eedcd0" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 45 Q 20 30, 40 35 Q 50 15, 75 25 Q 90 15, 105 35 Q 115 40, 110 55 Q 100 65, 15 60 Z" />
        </svg>
        {/* Cloud 3 */}
        <svg className={styles.cloud3} viewBox="0 0 90 50" fill="#f4ece4" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 Q 15 15, 30 20 Q 40 5, 55 15 Q 70 5, 80 20 Q 88 25, 85 35 Q 80 45, 10 40 Z" />
        </svg>
      </div>

      <div className={styles.container}>
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
          </motion.div>

          {/* CTA buttons */}
          <motion.div className={styles.actions} variants={fadeUp}>
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <FiDownload size={16} />
              <span>View / Print CV</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.btnSecondary}
            >
              <FiMail size={16} />
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Cat spawner widget */}
          <motion.div variants={fadeUp} className={styles.catSpawnerWrapper}>
            <CatSpawner onSpawn={onSpawnCat} catCount={catCount} />
          </motion.div>
        </motion.div>

        {/* Right column - Illustration */}
        <motion.div
          className={styles.illustrationContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className={`${styles.sparkle} ${styles.sparkle1}`}>✨</div>
          <img
            src={isDark ? '/cat_coding_night.png' : '/cat_coding.png'}
            className={styles.illustration}
            alt="Cute cat coding C# on a tiny laptop"
          />
          <div className={`${styles.sparkle} ${styles.sparkle2}`}>⭐</div>
        </motion.div>
      </div>

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
