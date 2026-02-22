"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Wood logs background"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-white">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-green-700/80 rounded-full text-sm font-semibold tracking-wide">
          INDEPENDENT WOOD ADVISORY
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
          WOOD SOLUTIONS
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Independent Technical, Commercial and Strategic Expertise Across the Wood
          Value Chain
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/contact"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Request Consultation
          </a>

          <a
            href="/services"
            className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-lg transition"
          >
            Explore Services
          </a>
        </div>

        {/* Trust Indicators */}
        <p className="text-sm text-gray-300 mb-4">
          Trusted by industry leaders worldwide
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
          <span>• Independent Advisory</span>
          <span>• Technical Excellence</span>
          <span>• Global Perspective</span>
          <span>• Science-Based Solutions</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white text-2xl animate-bounce">↓</div>
    </section>
  );
}