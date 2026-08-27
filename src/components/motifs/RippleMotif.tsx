export default function RippleMotif({ className = "" }: { className?: string }) {
  const radii = [8, 18, 28, 38, 48];
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      {radii.map((r) => (
        <circle key={r} cx="60" cy="60" r={r} stroke="currentColor" strokeWidth="1.4" opacity={1 - r / 60} />
      ))}
    </svg>
  );
}
