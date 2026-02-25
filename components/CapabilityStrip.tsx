export default function CapabilityStrip() {
  const items = [
    "TECHNICAL",
    "SOURCING",
    "CONSTRUCTION",
    "COMPLIANCE",
    "TRAINING",
    "MARKET STRATEGY",
  ];

  // Duplicate items for seamless loop
  const loopItems = [...items, ...items];

  return (
    <div className="cap-strip">
      <div className="cap-track">
        {loopItems.map((item, i) => (
          <span key={i} className="cap-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}