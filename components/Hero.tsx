"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Hero() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden w-full h-[91vh] min-h-[606px] flex items-center justify-center fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <Image
        src="/images/hero.jpg"
        alt="Stacked logs representing wood consultancy expertise"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/55" />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 md:px-8">
        <span className="mb-6 text-xs md:text-sm font-semibold tracking-widest uppercase text-green-300 bg-green-900/80 backdrop-blur-sm rounded-full px-6 py-2 border border-green-300/30">
          Independent Wood Advisory
        </span>
        
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight tracking-tight">
          WOOD SOLUTIONS
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl lg:text-2xl text-center mb-8 max-w-4xl font-medium leading-relaxed">
          Independent Technical, Commercial and Strategic Expertise Across the Wood Value Chain
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:justify-center mb-12">
          <Link
            href="/contact"
            className="min-h-[48px] px-8 py-3 bg-green-700 hover:bg-green-600 focus:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center text-lg outline-none focus-visible:ring-2 focus-visible:ring-green-300"
          >
            Request Consultation
          </Link>
          <Link
            href="/services"
            className="min-h-[48px] px-8 py-3 border-2 border-white bg-transparent hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 text-white font-semibold rounded-lg transition-all duration-200 text-center text-lg outline-none focus-visible:ring-2 focus-visible:ring-green-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-300 mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Independent Advisory
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Technical Excellence
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Global Perspective
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Science-Based Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}