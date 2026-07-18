export function BackgroundCurves() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <svg
        className="absolute h-full w-full opacity-70 dark:opacity-30"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="curveBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Esquina superior derecha */}
        <g filter="url(#curveBlur)" strokeLinecap="round" fill="none">
          <path
            d="M 900 -80 C 1050 60, 1120 160, 1220 220 C 1330 285, 1420 260, 1560 300"
            stroke="#FACC15"
            strokeWidth="22"
            opacity="0.75"
          />
          <path
            d="M 950 -100 C 1090 30, 1160 140, 1260 210 C 1360 280, 1450 300, 1600 360"
            stroke="#F97316"
            strokeWidth="26"
            opacity="0.65"
          />
        </g>

        {/* Esquina inferior izquierda */}
        <g filter="url(#curveBlur)" strokeLinecap="round" fill="none">
          <path
            d="M -160 620 C -20 560, 90 640, 210 700 C 330 760, 430 740, 560 780"
            stroke="#F97316"
            strokeWidth="26"
            opacity="0.6"
          />
          <path
            d="M -180 680 C -30 630, 80 700, 200 760 C 320 820, 420 800, 540 940"
            stroke="#FACC15"
            strokeWidth="22"
            opacity="0.7"
          />
        </g>

        <circle cx="430" cy="705" r="20" fill="#8B5CF6" opacity="0.55" filter="url(#curveBlur)" />
      </svg>
    </div>
  );
}
