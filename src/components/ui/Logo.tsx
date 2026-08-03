interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="pc-logo-accent" x1="8" y1="0" x2="32" y2="0">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#0A1F44" />
      <path
        d="M13 29.5V18a7 7 0 0 1 14 0v11.5"
        fill="none"
        stroke="white"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path d="M9 30h22" stroke="url(#pc-logo-accent)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
