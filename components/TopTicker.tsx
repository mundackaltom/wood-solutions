'use client';

export default function TopTicker() {
  const items = [
    "TECHNICAL",
    "SOURCING",
    "CONSTRUCTION",
    "COMPLIANCE",
    "TRAINING",
    "MARKET STRATEGY",
  ];

  const ticker = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="sticky top-[88px] z-40 w-full overflow-hidden bg-green-900">
      <div className="whitespace-nowrap animate-marquee flex">
        {ticker.map((text, i) => (
          <span
            key={i}
            className="inline-block px-8 py-2 text-white text-sm font-semibold"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}