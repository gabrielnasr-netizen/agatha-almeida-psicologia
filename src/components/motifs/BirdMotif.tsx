export default function BirdMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 40
           C 20 10, 34 10, 44 30
           C 50 18, 58 14, 60 24
           C 62 14, 70 18, 76 30
           C 86 10, 100 10, 116 40"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
