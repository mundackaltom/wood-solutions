export default function ServiceHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="w-full bg-gradient-to-b from-green-800 to-green-700 text-white py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-left">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-4xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}