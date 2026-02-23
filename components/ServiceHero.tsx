export default function ServiceHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* Divider */}
        <div className="mt-10 w-24 h-1 bg-green-300 mx-auto rounded-full"></div>

        {/* Optional CTA Button */}
        <button className="mt-8 bg-white text-green-800 font-semibold px-6 py-3 rounded-md hover:bg-green-100 transition">
          Request Consultation
        </button>
      </div>
    </section>
  );
}