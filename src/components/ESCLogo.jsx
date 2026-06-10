import React from 'react';

export default function ESCLogo({ height = 36, ...props }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer', filter: 'url(#crayon-sketch)' }}
      {...props}
    >
      {/* Logo Icon: Hand-drawn Terminal Bracket & Monogram */}
      <g transform="translate(4, 2)">
        {/* Left Bracket < (drawn with slight wobble) */}
        <path
          d="M 11 8 C 8 12 5 15 3 18 C 5 21 8 24 11 28"
          stroke="#597c56"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Diagonal Slash / */}
        <path
          d="M 18 6 C 17 14 15 22 13 30"
          stroke="#c07c65"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right Bracket > */}
        <path
          d="M 20 8 C 23 12 26 15 28 18 C 26 21 23 24 20 28"
          stroke="#597c56"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Logo Text: ESC */}
      <text
        x="44"
        y="21"
        fill="#4a3f3b"
        fontFamily="var(--font-crayon)"
        fontSize="21"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        ESC
      </text>

      {/* Subtext: C# & .NET */}
      <text
        x="45"
        y="33"
        fill="#746762"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.1em"
      >
        C# & .NET
      </text>
    </svg>
  );
}
