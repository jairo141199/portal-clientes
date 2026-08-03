interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#0A1F44" />
      <rect x="9" y="12" width="14" height="5" rx="2.5" fill="#FACC15" />
      <rect x="9" y="18.5" width="19" height="5" rx="2.5" fill="#F97316" />
      <rect x="9" y="25" width="23" height="5" rx="2.5" fill="#8B5CF6" />
    </svg>
  );
}
