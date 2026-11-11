interface OrbitScriptLogoProps {
  className?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

export function OrbitScriptLogo({
  className = "",
  color = "currentColor",
  width = "100%",
  height = "auto",
}: OrbitScriptLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1100 280"
      fill="none"
      width={width}
      height={height}
      className={`select-none ${className}`}
      aria-label="orbit."
    >
      <g fill={color} stroke={color}>
        {/* 'o' - Bold rounded cursive loop with entry and exit flourish */}
        <path
          d="M 120 180 C 70 180 35 140 35 95 C 35 50 75 15 130 15 C 185 15 220 52 220 95 C 220 142 178 180 120 180 Z M 125 52 C 95 52 75 72 75 97 C 75 122 95 142 125 142 C 155 142 178 122 178 97 C 178 72 155 52 125 52 Z"
          fillRule="evenodd"
        />
        <path
          d="M 170 60 C 195 55 220 70 235 90"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />

        {/* 'r' - Flowing brush stroke */}
        <path
          d="M 235 90 C 255 120 270 175 270 178 M 250 110 C 270 70 310 60 345 75 C 355 80 360 92 360 105 C 360 115 352 125 340 125 C 325 125 315 110 305 110 C 295 110 285 125 285 178"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 'b' - Tall ascending cursive loop with rounded belly */}
        <path
          d="M 370 178 L 415 28 C 420 15 435 5 450 10 C 465 15 465 30 455 55 L 420 178 C 420 178 440 180 470 170 C 505 158 525 125 525 95 C 525 65 495 55 465 65"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 'i' - Crisp upright stem with circular dot */}
        <path
          d="M 545 75 L 545 178 M 545 178 C 555 178 575 175 595 160"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="545" cy="30" r="18" />

        {/* 't' - Ascending stem with dynamic crossbar */}
        <path
          d="M 645 25 L 645 155 C 645 175 660 180 680 178 C 695 176 710 168 720 158"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 605 75 L 705 75"
          strokeWidth="26"
          strokeLinecap="round"
          fill="none"
        />

        {/* Period '.' - Solid expressive ink dot */}
        <circle cx="765" cy="165" r="20" />
      </g>
    </svg>
  );
}

