"use client";

import { FaGlobe, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  {
    icon: <FaLightbulb className="text-green-700 text-3xl" />,
    title: 'Independent Advice',
    description: 'Unbiased recommendations with no trading conflicts. Pure technical and commercial expertise focused solely on your success.',
  },
  {
    icon: <FaTools className="text-green-700 text-3xl" />,
    title: 'Technical Excellence',
    description: 'Science-based evaluation using advanced methodologies. Decades of hands-on experience in wood technology and engineering.',
  },
  {
    icon: <FaChartLine className="text-green-700 text-3xl" />,
    title: 'Commercial Insight',
    description: 'Strategic market intelligence and regulatory expertise. Deep understanding of supply chains and industry dynamics.',
  },
  {
    icon: <FaGlobe className="text-green-700 text-3xl" />,
    title: 'Global Perspective',
    description: 'International standards knowledge and cross-border expertise. Extensive network across global wood markets.',
  },
];

export default function ValueProposition() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-20 md:py-28 bg-white fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Choose Wood Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of independent expertise delivering unmatched value across 
            the entire wood industry value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">30+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Independent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}