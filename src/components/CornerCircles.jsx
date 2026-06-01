export default function CornerCircles() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
      style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.1, pointerEvents: "none" }}>
      <circle cx="0" cy="120" r="80" stroke="#C1121F" strokeWidth="1.5" fill="none" />
      <circle cx="0" cy="120" r="50" stroke="#C1121F" strokeWidth="1" fill="none" />
      <circle cx="0" cy="120" r="25" stroke="#C1121F" strokeWidth="0.8" fill="none" />
    </svg>
  );
}