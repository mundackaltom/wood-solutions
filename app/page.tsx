import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="pt-20">
      <Hero />

      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Wood Solutions?
        </h2>

        <p className="text-lg text-neutral-600">
          Science-led advisory services across wood materials,
          engineered timber, construction systems, and compliance frameworks.
        </p>
      </section>
    </div>
  );
}
