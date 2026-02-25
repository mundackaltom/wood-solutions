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
        src="/images/heronow.jpg"
        alt="Wood logs background"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-left px-6 text-white flex flex-col justify-end h-full absolute bottom-0 left-0">
        {/* Badge */}
        <div className="mb-6">
          <div className="inline-block px-6 py-3 bg-green-700/80 rounded-full text-lg font-semibold tracking-wide">
            INDEPENDENT WOOD ADVISORY
          </div>
        </div>

        {/* Heading */}
        <h1 className={`${fondamento.className} text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight text-left`}>
          WOOD SOLUTIONS
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-left">
          Integrating Sustainable, Innovative and Futuristic Wood Solutions<br />
          across the wood value chain
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white text-2xl animate-bounce flex justify-center w-full">↓</div>
    </section>
  );
}