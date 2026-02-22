"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const caseStudies = [
  {
    title: "Sustainable Timber Certification",
    client: "International Manufacturer",
    description: "Comprehensive quality assessment and certification process for sustainable timber products across 15 countries.",
    impact: "40% reduction in compliance issues",
    category: "Technical Advisory",
  },
  {
    title: "Cross-Border Supply Chain Optimization",
    client: "Global Importer",
    description: "Strategic sourcing guidance and regulatory compliance for timber imports from emerging markets.",
    impact: "$2M annual cost savings",
    category: "Sourcing & Imports",
  },
  {
    title: "Engineered Wood Standards Development",
    client: "Industry Association",
    description: "Technical leadership in developing new standards for cross-laminated timber in commercial construction.",
    impact: "Industry-wide standard adoption",
    category: "Technical Excellence",
  },
];

export default function CaseStudyPreview() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 md:py-28 bg-gray-50 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world impact across diverse projects and industries. See how our independent expertise drives measurable success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-full">
                  {study.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {study.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {study.description}
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{study.client}</span>
                  <span className="font-semibold text-green-700">{study.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-block bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 focus-ring"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}