import React, { JSX } from "react";
import Link from "next/link";

type ServicePageLayoutProps = {
  title: string;
  positioningStatement: string;
  description: string;
  offerings: { icon: JSX.Element; title: string; description: string }[];
  targetAudiences: string[];
  processSteps: { step: string; description: string; icon?: JSX.Element }[];
  outcomes: string[];
  caseStudy?: {
    title: string;
    description: string;
    link: string;
  };
  faqs?: { question: string; answer: string }[];
};

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  positioningStatement,
  description,
  offerings,
  targetAudiences,
  processSteps,
  outcomes,
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
        <p className="text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </section>

      {/* Key Offerings Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Key Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <div className="text-green-900 mb-4">{offering.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {offering.title}
              </h3>
              <p className="text-neutral-700">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audiences Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Who This Service Is For</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {targetAudiences.map((audience, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {audience}
            </li>
          ))}
        </ul>
      </section>

      {/* Our Approach Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="space-y-6">
          {processSteps.map((step, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-md"
            >
              {step.icon && <div className="text-green-900">{step.icon}</div>}
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.step}</h3>
                <p className="text-neutral-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcomes & Benefits Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Outcomes & Benefits</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((outcome, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
            >
              <span className="text-green-900">✔</span>
              <p className="text-neutral-700">{outcome}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-4">Case Study</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">{caseStudy.title}</h3>
            <p className="text-neutral-700 mb-4">{caseStudy.description}</p>
            <Link
              href={caseStudy.link}
              className="text-green-900 font-medium hover:underline"
            >
              Read More
            </Link>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
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
      )}

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