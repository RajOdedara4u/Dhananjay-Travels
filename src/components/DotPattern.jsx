export default function DotPattern() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none"
      style={{ position: "absolute", top: 16, right: 16, opacity: 0.08, pointerEvents: "none" }}>
      {[0, 18, 36, 54, 72, 90, 108, 126].map(x =>
        [0, 18, 36, 54, 72, 90].map(y => (
          <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="1.8" fill="#C1121F" />
        ))
      )}
    </svg>
  );
}