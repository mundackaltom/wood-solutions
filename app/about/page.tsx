"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import WhoWeServe from "../../components/WhoWeServe";
import TrustCredentials from "../../components/TrustCredentials";
import FounderSection from "../../components/FounderSection";

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
              Our mission is to help you integrate Sustainable, Innovative and Futuristic Wood Solutions into every aspect of your wood-related operations — enabling informed decisions, stronger performance and long-term value creation across wood products and timber projects.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine deep technical expertise with practical industry insight to deliver solutions that are scientifically sound, commercially viable, and tailored to your needs. By aligning global best practices with local realities, we help organizations adopt advanced wood technologies with confidence, efficiency, and long-term sustainability.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To be the leading independent advisory platform that bridges the gap between cutting-edge wood science and real-world application, empowering organizations across the global wood value chain to achieve sustainable growth and operational excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where every wood-related decision is informed by scientific rigor, environmental responsibility, and commercial wisdom — creating lasting value for businesses, communities, and the planet.
            </p>
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
      <FounderSection />
      <CompanyStory />
      <CoreValues />
      <WhoWeServe />
      <TrustCredentials />
    </div>
  );
}
