/**
 * Hero panel backdrop. The reference plays a looping video here (`.home-header__video`);
 * ORBIT uses a quiet orbit animation in the same slot. Drop a <video> in this component to swap it.
 */
const RINGS = [
  { r: 170, d: 38, c: "#F5693C", p: 9 },
  { r: 290, d: 62, c: "#82A0FF", p: 12 },
  { r: 420, d: 94, c: "#F0BEFA", p: 8 },
  { r: 560, d: 140, c: "#E6FAB9", p: 11 },
  { r: 720, d: 190, c: "#F0EBE6", p: 7 },
];

export function OrbitBackdrop() {
  return (
    <svg
      className="orbit-backdrop"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g transform="translate(800 400) rotate(-16) scale(1 0.46)">
        {RINGS.map((ring, i) => (
          <g key={ring.r} className="orbit-backdrop__ring" style={{ animationDuration: `${ring.d}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
            <circle r={ring.r} fill="none" stroke="#F0EBE6" strokeOpacity="0.13" strokeWidth="1.4" strokeDasharray={i % 2 ? "2 9" : undefined} />
            <circle cx={ring.r} r={ring.p} fill={ring.c} />
          </g>
        ))}
      </g>
      <circle cx="800" cy="400" r="34" fill="#F5693C" />
      <circle cx="800" cy="400" r="90" fill="#F5693C" fillOpacity="0.12" />
    </svg>
  );
}
