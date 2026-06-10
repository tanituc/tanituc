import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './WalkingCat.module.css';

// ─── Sprite sheet layout ─────────────────────────────────────────────────────
// sprite_cat_gray.png: 824×303px, 4 frames horizontally
//  each frame: 206×303px  (ratio ≈ 0.68 — NOT square!)
//
//  ┌──────────┬──────────┬──────────┬──────────┐
//  │  walk_0  │  sit_0   │  sit_1   │  walk_1  │
//  └──────────┴──────────┴──────────┴──────────┘
//     col 0      col 1      col 2      col 3
//
//  Walking : frames [0, 3]
//  Idle    : frames [1, 2]
// ─────────────────────────────────────────────────────────────────────────────

const SPRITE_SRC     = '/sprite_cat_gray.png';
const SPRITE_NAT_W   = 824;
const SPRITE_NAT_H   = 303;
const TOTAL_FRAMES   = 4;
const FRAME_NAT_W    = SPRITE_NAT_W / TOTAL_FRAMES; // 206px

// Render height fixed; frame width preserves natural aspect ratio
// 96 × (206/303) ≈ 65px per frame | sheet width ≈ 260px
const CAT_RENDER_H   = 96;
const FRAME_RENDER_W = Math.round(CAT_RENDER_H * (FRAME_NAT_W / SPRITE_NAT_H));
const SHEET_RENDER_W = FRAME_RENDER_W * TOTAL_FRAMES;

const WALK_FRAMES   = [0, 3]; // step L → step R
const SIT_FRAMES    = [1, 2]; // sit breathe
const WALK_INTERVAL = 260;    // ms per frame
const SIT_INTERVAL  = 700;    // ms per frame (relaxed)
const WALK_SPEED    = 0.42;   // px per ms

export default function WalkingCat({ onRemove }) {
  const [pos, setPos]             = useState({ x: null, y: null });
  const [walkIdx, setWalkIdx]     = useState(0);
  const [sitIdx, setSitIdx]       = useState(0);
  const [direction, setDirection] = useState(1); // 1=right, -1=left
  const [visible, setVisible]     = useState(true);
  const [phase, setPhase]         = useState('walk'); // walk|sitting-down|idle|standing-up
  const [idleEmoji, setIdleEmoji] = useState('💤');

  const animRef      = useRef(null);
  const walkTickRef  = useRef(null);
  const sitTickRef   = useRef(null);
  const lastTimeRef  = useRef(null);
  const posRef       = useRef({ x: null, y: null });
  const dirRef       = useRef(1);
  const idleTimerRef = useRef(null);
  const phaseRef     = useRef('walk');

  // ── Random Y lane ───────────────────────────────────────────────────────
  useEffect(() => {
    const maxY = window.innerHeight - CAT_RENDER_H - 20;
    const y    = Math.floor(Math.random() * (maxY - 80)) + 80;
    const x    = -FRAME_RENDER_W - 20;
    setPos({ x, y });
    posRef.current = { x, y };
  }, []);

  // ── Walk frame ticker ────────────────────────────────────────────────────
  useEffect(() => {
    walkTickRef.current = setInterval(() => {
      if (phaseRef.current === 'walk') {
        setWalkIdx((i) => (i + 1) % WALK_FRAMES.length);
      }
    }, WALK_INTERVAL);
    return () => clearInterval(walkTickRef.current);
  }, []);

  // ── Sit frame ticker ─────────────────────────────────────────────────────
  useEffect(() => {
    sitTickRef.current = setInterval(() => {
      if (phaseRef.current === 'idle') {
        setSitIdx((i) => (i + 1) % SIT_FRAMES.length);
      }
    }, SIT_INTERVAL);
    return () => clearInterval(sitTickRef.current);
  }, []);

  // ── Idle scheduler ───────────────────────────────────────────────────────
  const scheduleIdle = useCallback(() => {
    const delay = 5000 + Math.random() * 8000;
    idleTimerRef.current = setTimeout(() => {
      phaseRef.current = 'sitting-down';
      setPhase('sitting-down');
      setSitIdx(0);

      setTimeout(() => {
        phaseRef.current = 'idle';
        setPhase('idle');
        const emojis = ['💤', '😴', '😺', '✨', '🌟', '🐟'];
        setIdleEmoji(emojis[Math.floor(Math.random() * emojis.length)]);

        const idleDuration = 2500 + Math.random() * 3000;
        setTimeout(() => {
          phaseRef.current = 'standing-up';
          setPhase('standing-up');

          setTimeout(() => {
            phaseRef.current = 'walk';
            setPhase('walk');
            scheduleIdle();
          }, 380);
        }, idleDuration);
      }, 340);
    }, delay);
  }, []);

  useEffect(() => {
    scheduleIdle();
    return () => clearTimeout(idleTimerRef.current);
  }, [scheduleIdle]);

  // ── Movement loop ────────────────────────────────────────────────────────
  useEffect(() => {
    if (pos.x === null) return;

    const step = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min(timestamp - lastTimeRef.current, 64);
      lastTimeRef.current = timestamp;

      if (phaseRef.current === 'walk') {
        let newX = posRef.current.x + dirRef.current * WALK_SPEED * dt;
        const vw = window.innerWidth;

        if (newX > vw + 20) {
          dirRef.current = -1;
          setDirection(-1);
          newX = vw + 20;
        } else if (newX < -(FRAME_RENDER_W + 20)) {
          dirRef.current = 1;
          setDirection(1);
          newX = -(FRAME_RENDER_W + 20);
        }

        posRef.current.x = newX;
        setPos((p) => ({ ...p, x: newX }));
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [pos.x !== null]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = useCallback(() => {
    setVisible(false);
    setTimeout(() => onRemove?.(), 450);
  }, [onRemove]);

  if (!visible || pos.x === null) return null;

  const isIdle    = phase === 'idle' || phase === 'sitting-down' || phase === 'standing-up';
  const isWalking = phase === 'walk';

  // Pick sprite column
  const colIndex  = isIdle
    ? SIT_FRAMES[sitIdx]
    : WALK_FRAMES[walkIdx];
  const bgOffsetX = -(colIndex * FRAME_RENDER_W);

  const spriteStyle = {
    width:              FRAME_RENDER_W,
    height:             CAT_RENDER_H,
    backgroundImage:    `url(${SPRITE_SRC})`,
    backgroundSize:     `${SHEET_RENDER_W}px ${CAT_RENDER_H}px`,
    backgroundPosition: `${bgOffsetX}px 0px`,
    backgroundRepeat:   'no-repeat',
  };

  return (
    <div
      className={[
        styles.catWrapper,
        !visible                 ? styles.fadeOut     : '',
        isIdle                   ? styles.idleMode    : '',
        phase === 'sitting-down' ? styles.sittingDown : '',
        phase === 'standing-up'  ? styles.standingUp  : '',
      ].join(' ')}
      style={{
        left:      pos.x,
        top:       pos.y,
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)',
      }}
      onClick={handleClick}
      title="Click para ahuyentar al gato 🐾"
      role="button"
      aria-label="Gato decorativo caminando - click para quitar"
    >
      {/* Sprite: single div, background-position selects the frame */}
      <div
        className={`${styles.catSprite} ${isIdle ? styles.catSpriteIdle : ''}`}
        style={spriteStyle}
      />

      {/* Speech bubble while fully idle */}
      {phase === 'idle' && (
        <div
          className={styles.speechBubble}
          style={{ transform: direction === -1 ? 'scaleX(-1)' : 'none' }}
        >
          {idleEmoji}
        </div>
      )}

      {/* Paw prints while walking */}
      {isWalking && (
        <div className={styles.pawTrail}>
          <span className={styles.paw1}>🐾</span>
          <span className={styles.paw2}>🐾</span>
        </div>
      )}

      {/* Ground shadow */}
      <div className={`${styles.shadow} ${isIdle ? styles.shadowIdle : ''}`} />
    </div>
  );
}
