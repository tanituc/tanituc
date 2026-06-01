import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/cvData';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© 2026 Estanislao Córdoba</p>
        <p className={styles.builtWith}>Built with React + Vite</p>
        <div className={styles.socials}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.socialLink}
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
