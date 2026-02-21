const expertise = [
  {
    title: "Engineered Timber Systems",
    description: "Advanced knowledge of CLT, LVL, glulam, and other engineered wood products",
  },
  {
    title: "Compliance Frameworks",
    description: "Deep understanding of international standards, certifications, and regulatory requirements",
  },
  {
    title: "Testing & Evaluation",
    description: "Comprehensive testing methodologies for structural performance and quality assessment",
  },
  {
    title: "Wood Materials Science",
    description: "Fundamental research in wood chemistry, physics, and material properties",
  },
  {
    title: "Supply Chain Optimization",
    description: "Strategic sourcing and logistics expertise across global wood markets",
  },
  {
    title: "Sustainability Assessment",
    description: "Life cycle analysis and environmental impact evaluation of wood products",
  },
];

export default function ExpertiseHighlight() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep technical knowledge across key domains in wood science and industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-700 rounded"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}