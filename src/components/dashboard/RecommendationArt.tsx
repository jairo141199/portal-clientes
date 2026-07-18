export function ProtectionArt() {
  return (
    <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="protectionBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#protectionBg)" />
      <circle cx="40" cy="20" r="70" fill="#ffffff" opacity="0.12" />
      <circle cx="370" cy="150" r="50" fill="#ffffff" opacity="0.12" />
      <g transform="translate(200 80)">
        <path
          d="M0 -38 L34 -24 V8 C34 32 18 46 0 54 C-18 46 -34 32 -34 8 V-24 Z"
          fill="#ffffff"
          opacity="0.95"
        />
        <path
          d="M-14 0 L-4 10 L16 -12"
          fill="none"
          stroke="#F97316"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function GrowthArt() {
  return (
    <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="growthBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#0A1F44" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#growthBg)" />
      <circle cx="360" cy="10" r="60" fill="#ffffff" opacity="0.1" />
      <g opacity="0.9">
        <rect x="150" y="98" width="26" height="38" rx="4" fill="#ffffff" opacity="0.55" />
        <rect x="188" y="80" width="26" height="56" rx="4" fill="#ffffff" opacity="0.7" />
        <rect x="226" y="58" width="26" height="78" rx="4" fill="#ffffff" opacity="0.85" />
        <rect x="264" y="34" width="26" height="102" rx="4" fill="#ffffff" />
      </g>
      <path
        d="M148 100 L190 66 L228 84 L288 28"
        fill="none"
        stroke="#FACC15"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M270 28 L288 28 L288 46" fill="none" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="110" r="14" fill="#FACC15" opacity="0.9" />
      <circle cx="112" cy="128" r="9" fill="#FACC15" opacity="0.6" />
    </svg>
  );
}

export function AdvisoryArt() {
  return (
    <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="advisoryBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="400" height="160" fill="url(#advisoryBg)" />
      <circle cx="30" cy="140" r="60" fill="#ffffff" opacity="0.1" />
      <g transform="translate(160 24)">
        <rect x="0" y="6" width="90" height="90" rx="10" fill="#ffffff" opacity="0.95" />
        <rect x="0" y="6" width="90" height="22" rx="10" fill="#0A1F44" opacity="0.85" />
        <circle cx="20" cy="17" r="4" fill="#ffffff" />
        <circle cx="70" cy="17" r="4" fill="#ffffff" />
        <rect x="14" y="42" width="16" height="16" rx="3" fill="#FACC15" />
        <rect x="37" y="42" width="16" height="16" rx="3" fill="#E5E7EB" />
        <rect x="60" y="42" width="16" height="16" rx="3" fill="#E5E7EB" />
        <rect x="14" y="64" width="16" height="16" rx="3" fill="#E5E7EB" />
        <rect x="37" y="64" width="16" height="16" rx="3" fill="#E5E7EB" />
        <rect x="60" y="64" width="16" height="16" rx="3" fill="#F97316" />
      </g>
      <circle cx="280" cy="112" r="26" fill="#ffffff" opacity="0.95" />
      <path
        d="M280 100 V112 L289 120"
        fill="none"
        stroke="#0A1F44"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
