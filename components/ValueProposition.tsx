const pillars = [
  {
    title: "Independent",
    description: "Unbiased advice with no product trading conflicts. We provide objective analysis focused solely on your success.",
  },
  {
    title: "Scientific",
    description: "Evidence-based technical evaluation using advanced testing methodologies and industry-leading expertise.",
  },
  {
    title: "Strategic",
    description: "Deep market and regulatory insight to guide your commercial decisions and competitive positioning.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Wood Solutions?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three core principles that set us apart in the wood consultancy industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-700 rounded"></div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}