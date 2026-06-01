import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/cvData';
import styles from './DownloadCTA.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function DownloadCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.heading}>Ready to Connect?</h2>
        <p className={styles.subtext}>
          Download my CV or reach out directly
        </p>

        <div className={styles.buttons}>
          <a
            href={`/${personalInfo.cvFileName}`}
            download
            className={styles.btnPrimary}
          >
            <FiDownload />
            Download CV
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.btnGhost}
          >
            <FiMail />
            Send Email
          </a>
        </div>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinLink}
        >
          <FiLinkedin className={styles.linkedinIcon} />
          Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

export default DownloadCTA;
