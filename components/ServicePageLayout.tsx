import React, { JSX } from "react";
import Link from "next/link";
import ServiceHero from "./ServiceHero";

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
    <div>
      {/* Full-Width Service Hero Section */}
      <ServiceHero title={title} subtitle={positioningStatement} />

      {/* Constrained Page Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Service Overview Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {description}
          </p>
        </section>

        {/* Key Offerings Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Key Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <div className="text-green-900 mb-4 text-3xl">{offering.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audiences Section */}
        <section className="py-16 bg-gray-50 -mx-6 md:-mx-8 px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-8">Who This Service Is For</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetAudiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm text-center font-medium"
              >
                {audience}
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{step.step}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes & Benefits Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Outcomes & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg"
              >
                <span className="text-green-900 text-xl">✔</span>
                <p className="text-gray-700 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Section */}
        {caseStudy && (
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Case Study</h2>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4">{caseStudy.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{caseStudy.description}</p>
              <Link
                href={caseStudy.link}
                className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Read Case Study
              </Link>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServicePageLayout;