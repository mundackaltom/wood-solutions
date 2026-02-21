import Link from "next/link";

const services = [
  {
    title: "Technical Advisory & Quality Evaluation",
    description: "Comprehensive technical assessments and quality validation for wood materials and products.",
    href: "/services/technical-advisory",
  },
  {
    title: "Sourcing & Imports",
    description: "Strategic sourcing guidance and import compliance for international wood procurement.",
    href: "/services/sourcing-imports",
  },
  {
    title: "Construction & Architecture",
    description: "Specialized advisory for construction projects using engineered timber and wood systems.",
    href: "/services/construction-architecture",
  },
  {
    title: "Training & Certification",
    description: "Professional development programs and certification pathways for industry professionals.",
    href: "/services/training-certification",
  },
  {
    title: "Market Insights & Brand Consultancy",
    description: "Market intelligence and strategic brand positioning for wood industry companies.",
    href: "/services/market-insights",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the entire wood value chain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-gray-50 p-6 md:p-8 rounded-lg hover:shadow-lg hover:bg-white transition-all duration-200 border border-transparent hover:border-green-200"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <div className="w-6 h-6 bg-green-700 rounded"></div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-green-700 text-sm font-medium group-hover:text-green-800">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}