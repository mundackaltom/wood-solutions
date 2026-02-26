"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive discussion to understand your specific requirements and challenges.",
  },
  {
    number: "02",
    title: "Technical Assessment",
    description: "Our experts conduct detailed analysis using advanced methodologies and industry best practices.",
  },
  {
    number: "03",
    title: "Strategic Recommendation",
    description: "We deliver actionable insights and strategic recommendations tailored to your objectives.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description: "Ongoing guidance and support to ensure successful implementation of our recommendations.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 bg-gray-50 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our proven four-step process ensures comprehensive and effective solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-700 text-white text-lg font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-16 h-1 bg-green-700 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}