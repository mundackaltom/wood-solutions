import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden w-full h-[91vh] min-h-[606px] flex items-center justify-center"
    >
      <Image
        src="/images/hero.jpg"
        alt="Stacked logs representing wood consultancy expertise"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 md:px-8">
        <span className="mb-4 text-xs md:text-sm font-semibold tracking-widest uppercase text-green-900 bg-white bg-opacity-80 rounded px-3 py-1">
          Independent Wood Advisory
        </span>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight drop-shadow-lg">
          WOOD SOLUTIONS
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl text-center mb-8 max-w-2xl font-medium drop-shadow">
          Independent Technical, Commercial and Strategic Expertise Across the Wood Value Chain
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-none md:justify-center">
          <Link
            href="/contact"
            className="flex-1 md:w-auto min-h-[44px] px-6 py-3 bg-white hover:bg-green-100 focus:bg-green-100 text-green-900 font-semibold rounded shadow transition-colors duration-150 text-center text-base md:text-lg outline-none focus-visible:ring-2 focus-visible:ring-green-300"
          >
            Request Consultation
          </Link>
          <Link
            href="/services"
            className="flex-1 md:w-auto min-h-[44px] px-6 py-3 border border-white bg-transparent hover:bg-green-100 focus:bg-green-100 text-white font-semibold rounded shadow transition-colors duration-150 text-center text-base md:text-lg outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}