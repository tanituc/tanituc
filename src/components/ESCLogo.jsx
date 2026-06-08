import React from 'react';

export default function ESCLogo({ height = 36, ...props }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
      {...props}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="esc-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="esc-grad-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        {/* Glow Filter */}
        <filter id="esc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Logo Icon: Stylized Terminal Bracket & Monogram */}
      <g transform="translate(4, 2)">
        {/* Left Bracket < */}
        <path
          d="M 12 8 L 4 18 L 12 28"
          stroke="url(#esc-grad-primary)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Diagonal Slash / */}
        <path
          d="M 20 6 L 14 30"
          stroke="#f8fafc"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#esc-glow)"
        />

        {/* Right Bracket > */}
        <path
          d="M 22 8 L 30 18 L 22 28"
          stroke="url(#esc-grad-primary)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Logo Text: ESC */}
      <text
        x="44"
        y="22"
        fill="#f8fafc"
        fontFamily="var(--font-sans)"
        fontSize="21"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        ESC
      </text>

      {/* Subtext: C# & .NET */}
      <text
        x="45"
        y="33"
        fill="url(#esc-grad-accent)"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.18em"
      >
        C# & .NET
      </text>
    </svg>
  );
}
