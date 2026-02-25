'use client';

export default function TopTicker() {
  const expertiseAreas = [
    "TECHNICAL",
    "SOURCING", 
    "CONSTRUCTION",
    "COMPLIANCE",
    "TRAINING",
    "MARKET STRATEGY"
  ];

  // Duplicate content for seamless looping
  const duplicatedContent = [...expertiseAreas, ...expertiseAreas];

  return (
    <div className="w-full bg-green-800 text-white py-2 overflow-hidden mt-20">
      <div className="flex animate-marquee">
        {duplicatedContent.map((area, index) => (
          <span
            key={index}
            className="flex-shrink-0 uppercase tracking-wide font-medium text-sm px-8 whitespace-nowrap"
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
            justify-content: center;
          }
          .animate-marquee span {
            display: inline-block;
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}