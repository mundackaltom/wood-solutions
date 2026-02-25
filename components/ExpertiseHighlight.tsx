const expertise = [
  {
    title: "Wood based Construction",
    description: "Expert consulting on building with wood (Sustainable Wood houses, eco-resorts, Wood frame construction and mass timber structures)",
  },
  {
    title: "Wood Anatomy & Material Properties",
    description: "Decades of experience in wood anatomy, identification, mechanical, physical and other material properties.",
  },
  {
    title: "Standards & Certifications",
    description: "Deep understanding of international standards, certifications, and regulatory requirements (ISO17025, FSC, PEFC, EUDR, QCO)",
  },
  {
    title: "Training & Skilling",
    description: "Provides structured training programmes, certification support and technical workshops to enhance your technical capacity and global competitiveness.",
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
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm h-full">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}