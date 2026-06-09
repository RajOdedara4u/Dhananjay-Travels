export default function DotGrid() {
  return (
    <svg className="z-10" width="44" height="30" viewBox="0 0 44 30" fill="none"
      style={{ position: "absolute", bottom: 0, left: 10, pointerEvents: "none", opacity: 0.12 }}>
      {[0, 10, 20, 30].map(x =>
        [0, 10, 20].map(y => (
          <circle key={`${x}-${y}`} cx={x + 4} cy={y + 4} r="1.5" fill="#C1121F"
                   />
        ))
      )}
    </svg>
  );
}