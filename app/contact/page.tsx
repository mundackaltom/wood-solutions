"use client";

import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const serviceOptions = [
  "Technical Advisory & Quality Evaluation",
  "Sourcing & Imports",
  "Construction & Architecture", 
  "Training & Certification",
  "Market Insights & Brand Consultancy",
  "General Inquiry"
];

function ContactHero() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-b from-green-800 to-green-700 text-white py-12 md:py-14 lg:py-16 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-left">
          Let's Start a Conversation
        </h1>
        <p className="text-xl md:text-2xl text-green-100 max-w-4xl leading-relaxed text-left">
          Ready to explore how independent expertise can drive your business forward? We're here to listen, understand, and provide solutions.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const { ref, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      ref={ref}
      className={`py-20 md:py-28 bg-white fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight text-left">
              Request a Consultation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
                  <option value="">Select a service area</option>
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Tell us about your project, challenges, or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 focus-ring"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Other Ways to Connect
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-700">contact@woodsolutions.com</p>
                <p className="text-sm text-gray-600 mt-1">We typically respond within 24 hours</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Coverage</h4>
                <p className="text-gray-700 mb-2">
                  While based internationally, we serve clients across North America, Europe, Asia-Pacific, and emerging markets.
                </p>
                <p className="text-sm text-gray-600">
                  Time zone flexibility for global project coordination
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Confidentiality</h4>
                <p className="text-gray-700 text-sm">
                  All consultations are strictly confidential. We respect your privacy and protect sensitive business information with the highest standards of professional discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 bg-green-50 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          What Happens Next?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
            <h3 className="font-semibold text-gray-900 mb-2">We Listen</h3>
            <p className="text-sm text-gray-700">Initial consultation to understand your specific needs and objectives</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
            <h3 className="font-semibold text-gray-900 mb-2">We Assess</h3>
            <p className="text-sm text-gray-700">Detailed evaluation of technical requirements and commercial considerations</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
            <h3 className="font-semibold text-gray-900 mb-2">We Deliver</h3>
            <p className="text-sm text-gray-700">Actionable recommendations and ongoing support for implementation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactCTA />
    </div>
  );
}
