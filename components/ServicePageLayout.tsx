import React from "react";
import Link from "next/link";

type ServicePageLayoutProps = {
  title: string;
  positioningStatement: string;
  description: string;
  offerings: string[];
  targetAudiences: string[];
  processSteps: string[];
  differentiators: string[];
  caseStudy: {
    scenario: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  faqs: { question: string; answer: string }[];
};

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  positioningStatement,
  description,
  offerings,
  targetAudiences,
  processSteps,
  differentiators,
  caseStudy,
  faqs,
}) => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      {/* Service Hero Section */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6">{positioningStatement}</p>
        <p className="text-neutral-700 mb-6">{description}</p>
        <Link
          href="/contact"
          className="bg-green-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Request Consultation
        </Link>
      </section>

      {/* Service Overview Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
        <p className="text-neutral-700">{description}</p>
      </section>

      {/* Key Offerings Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Key Offerings</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6">
          {offerings.map((offering, index) => (
            <li key={index} className="text-neutral-700">
              {offering}
            </li>
          ))}
        </ul>
      </section>

      {/* Target Audiences Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Who This Service Is For</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {targetAudiences.map((audience, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
              {audience}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
        <ol className="list-decimal pl-6 space-y-4">
          {processSteps.map((step, index) => (
            <li key={index} className="text-neutral-700">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Wood Solutions</h2>
        <ul className="list-disc pl-6">
          {differentiators.map((point, index) => (
            <li key={index} className="text-neutral-700">
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Study Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Case Study</h2>
        <div className="space-y-4">
          <p className="font-semibold">Scenario:</p>
          <p className="text-neutral-700">{caseStudy.scenario}</p>
          <p className="font-semibold">Challenge:</p>
          <p className="text-neutral-700">{caseStudy.challenge}</p>
          <p className="font-semibold">Solution:</p>
          <p className="text-neutral-700">{caseStudy.solution}</p>
          <p className="font-semibold">Outcome:</p>
          <p className="text-neutral-700">{caseStudy.outcome}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <p className="font-semibold">{faq.question}</p>
              <p className="text-neutral-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 text-center bg-green-900 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="mb-6">
          Contact us today to discuss how we can help you achieve your goals.
        </p>
        <Link
          href="/contact"
          className="bg-white text-green-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Request a Technical Consultation
        </Link>
      </section>
    </div>
  );
};

export default ServicePageLayout;