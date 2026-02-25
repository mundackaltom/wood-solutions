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

  // Duplicate content for seamless loop
  const content = [...expertiseAreas, ...expertiseAreas];

  return (
    <section className="w-full bg-green-800 py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {content.map((area, index) => (
          <span
            key={index}
            className="flex-shrink-0 text-white text-sm md:text-base font-medium tracking-wider uppercase px-8 whitespace-nowrap"
          >
            {area}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}