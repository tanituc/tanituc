import { motion } from 'framer-motion';
import { FiAward, FiNavigation } from 'react-icons/fi';
import { education, languages } from '../data/cvData';
import styles from './Education.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const langFlags = {
  Spanish: '🇦🇷',
  English: '🇬🇧',
};

const langDotCount = {
  Spanish: 5,
  English: 4,
};

const cardColors = [
  styles.cardPink,
  styles.cardGreen
];

function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column — Education */}
          <motion.div
            className={styles.column}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.columnHeader}>
              <p className="section-label">EDUCATION</p>
              <h2 className="section-heading">Academic Background</h2>
            </div>

            <div className={styles.eduCards}>
              {education.map((edu, index) => {
                const colorClass = cardColors[index % cardColors.length];
                return (
                  <div key={edu.degree} className={`${styles.eduCard} ${colorClass}`}>
                    <div className={styles.eduIcon}>
                      <FiAward />
                    </div>
                    <h3 className={styles.eduDegree}>{edu.degree}</h3>
                    <p className={styles.eduType}>{edu.type}</p>
                    <p className={styles.eduMeta}>
                      {edu.school} · {edu.period}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column — Languages & Relocation */}
          <motion.div
            className={styles.column}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.columnHeader}>
              <p className="section-label">LANGUAGES &amp; RELOCATION</p>
              <h2 className="section-heading">Communication</h2>
            </div>

            <div className={styles.langList}>
              {languages.map((lang) => {
                const totalDots = 5;
                const filled = langDotCount[lang.name] || 3;
                return (
                  <div key={lang.name} className={styles.langItem}>
                    <span className={styles.langFlag}>
                      {langFlags[lang.name] || '🌐'}
                    </span>
                    <div className={styles.langInfo}>
                      <p className={styles.langName}>{lang.name}</p>
                      <p className={styles.langLevel}>{lang.level}</p>
                      <div className={styles.langDots}>
                        {Array.from({ length: totalDots }).map((_, i) => (
                          <span
                            key={i}
                            className={`${styles.dot} ${i < filled ? styles.dotFilled : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.callout}>
              <FiNavigation className={styles.calloutIcon} />
              <p className={styles.calloutText}>
                Open to relocation — visited the Baltic &amp; Nordic region in 2025.
                Actively seeking opportunities in Estonia, Lithuania, Latvia,
                Finland, and Sweden. Visa sponsorship required · Available immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
