"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function ConsultationCTA() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 bg-green-800 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Partner with our experts to receive tailored strategies and expert advice
          for your business success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 px-8 py-4 md:px-12 md:py-5 rounded-lg font-semibold text-lg md:text-xl hover:bg-green-50 focus:bg-green-50 transition-colors duration-200 shadow-lg hover:shadow-xl min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-green-300"
          >
            Request a Consultation
          </Link>
          <a
            href="mailto:contact@woodsolutions.com"
            className="text-green-100 underline hover:text-green-200 transition-colors"
          >
            Or email us at contact@woodsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}