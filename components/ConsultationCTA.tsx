import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section className="py-16 md:py-24 bg-green-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Need Independent Technical Guidance?
        </h2>
        <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Connect with our experts to discuss your wood consultancy requirements. 
          Get unbiased, science-based advice tailored to your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-green-700 px-8 py-4 md:px-12 md:py-5 rounded-lg font-semibold text-lg md:text-xl hover:bg-green-50 focus:bg-green-50 transition-colors duration-200 shadow-lg hover:shadow-xl min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}