export default function CapabilityStrip() {
  const items = [
    "TECHNICAL",
    "SOURCING",
    "CONSTRUCTION",
    "COMPLIANCE",
    "TRAINING",
    "MARKET STRATEGY",
  ];

  return (
    <div className="w-full overflow-hidden bg-green-800 text-white">
      <div className="ticker">
        <div className="ticker-track">
          {/* Repeat MANY times to guarantee coverage */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="ticker-group">
              {items.map((item, idx) => (
                <span key={idx} className="ticker-item">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}