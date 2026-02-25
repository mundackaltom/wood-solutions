'use client';

export default function CapabilityStrip() {
  const expertiseAreas = [
    "TECHNICAL",
    "SOURCING",
    "CONSTRUCTION",
    "COMPLIANCE",
    "TRAINING",
    "MARKET STRATEGY",
  ];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {/* ORIGINAL ITEMS */}
        {expertiseAreas.map((area, index) => (
          <span key={`original-${index}`}>
            {area}
          </span>
        ))}
        
        {/* DUPLICATE — REQUIRED FOR SEAMLESS LOOP */}
        {expertiseAreas.map((area, index) => (
          <span key={`duplicate-${index}`}>
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}