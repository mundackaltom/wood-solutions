"use client";

import Image from "next/image";
import { Fondamento } from "next/font/google";

const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative min-h-[91vh] flex items-center justify-center text-center overflow-hidden">
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
        <h1 className={`${fondamento.className} text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-left`}>
          WOOD SOLUTIONS
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 text-center leading-relaxed">
          Integrating Sustainable, Innovative and Futuristic Wood Solutions<br />
          across the wood value chain
        </p>

        {/* Removed CTA Section */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white text-2xl animate-bounce">↓</div>
    </section>
  );
}