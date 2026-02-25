"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import WhoWeServe from "../../components/WhoWeServe";
import TrustCredentials from "../../components/TrustCredentials";

function AboutHero() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-b from-green-800 to-green-700 text-white py-12 md:py-14 lg:py-16 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            About Wood Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
            Independent expertise serving the wood industry with integrity, objectivity, and unparalleled technical knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}

function CompanyStory() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-10 md:py-12 bg-white fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Wood Solutions operates as an independent, expert-led advisory platform serving the wood, construction, and materials ecosystem. Our work is guided by technical integrity, ethical practice, and a deep understanding of material performance, regulatory frameworks, and market realities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you require technical evaluation, sourcing support, construction advisory, training, or strategic market insight, Wood Solutions offers structured, reliable, and outcome-oriented engagement.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Founded on Principles</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Technical Integrity</h4>
                  <p className="text-gray-600">Science-based evaluation and evidence-driven recommendations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ethical Practice</h4>
                  <p className="text-gray-600">Transparent processes and honest, objective advice</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client Focus</h4>
                  <p className="text-gray-600">Solutions aligned with your specific objectives and constraints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndependenceStatement() {
  return null;
}

function CoreValues() {
  const { ref, isVisible } = useIntersectionObserver();

  const values = [
    {
      title: "Integrity",
      description: "Honest, transparent communication in every interaction. We provide candid assessments and straightforward recommendations."
    },
    {
      title: "Excellence",
      description: "Unwavering commitment to technical accuracy and professional standards. We deliver solutions that exceed expectations."
    },
    {
      title: "Innovation",
      description: "Forward-thinking approaches to traditional challenges. We help you stay ahead of industry developments and market changes."
    },
    {
      title: "Partnership",
      description: "Long-term relationships built on trust and mutual success. Your achievements are our achievements."
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-10 md:py-12 bg-white fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision and shape our approach to serving clients across the wood industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-green-200 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <WhoWeServe />
      <TrustCredentials />
    </div>
  );
}
