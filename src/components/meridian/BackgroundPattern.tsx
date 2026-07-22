export function BackgroundPattern() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <svg
        className="absolute h-full w-full opacity-[0.35] dark:opacity-[0.18]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Top-right globe/meridian motif */}
        <g stroke="#0B2545" strokeWidth="1" fill="none">
          <circle cx="1180" cy="60" r="260" />
          <ellipse cx="1180" cy="60" rx="90" ry="260" />
          <ellipse cx="1180" cy="60" rx="180" ry="260" />
          <line x1="920" y1="60" x2="1440" y2="60" />
        </g>

        {/* Bottom-left echo, smaller */}
        <g stroke="#B08D2B" strokeWidth="1" fill="none" opacity="0.8">
          <circle cx="120" cy="860" r="180" />
          <ellipse cx="120" cy="860" rx="60" ry="180" />
          <ellipse cx="120" cy="860" rx="120" ry="180" />
        </g>
      </svg>
    </div>
  );
}
