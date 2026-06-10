import { useState, useCallback, useRef } from 'react';
import styles from './CatSpawner.module.css';

export default function CatSpawner({ onSpawn, catCount = 0 }) {
  const [ripple, setRipple] = useState(false);
  const [popKey, setPopKey] = useState(null); // triggers the "+1 🐾" animation
  const popTimer = useRef(null);

  const handleClick = useCallback(() => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);

    // Trigger floating "+1 🐾" pop animation
    clearTimeout(popTimer.current);
    const key = Date.now();
    setPopKey(key);
    popTimer.current = setTimeout(() => setPopKey(null), 800);

    onSpawn?.();
  }, [onSpawn]);

  return (
    <div className={styles.wrapper}>
      <button
        id="spawn-cat-btn"
        className={`${styles.btn} ${ripple ? styles.ripple : ''}`}
        onClick={handleClick}
        aria-label="Summon a walking cat"
        title="Invoke a cat 🐱"
      >
        {/* Sprite: show the sitting frame (col 1 of 4) from sprite_cat_gray.png */}
        <div className={styles.catImgWrapper}>
          <div className={styles.catSprite} />
        </div>
        <span className={styles.label}>+1</span>
      </button>

      {/* Pop counter — fires on each click */}
      {popKey !== null && (
        <div className={styles.popCounter} key={popKey}>
          +1 🐾
        </div>
      )}

      {/* Live badge — reads real count from App so it decrements too */}
      {catCount > 0 && (
        <div className={styles.countBadge} title={`${catCount} gatos paseando`}>
          {catCount} 🐱
        </div>
      )}
    </div>
  );
}
