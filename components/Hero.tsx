export default function Hero() {
  return (
    <section className="h-[70vh] flex items-center justify-center bg-green-950 text-white text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          WOOD SOLUTIONS
        </h1>

        <p className="text-xl mb-6">
          Independent Technical, Commercial and Strategic Expertise
          Across the Wood Value Chain
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-900 px-6 py-3 rounded font-semibold">
            Request Consultation
          </button>

          <button className="border border-white px-6 py-3 rounded">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
