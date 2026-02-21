const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive discussion to understand your specific requirements and challenges.",
  },
  {
    number: "02",
    title: "Technical Assessment",
    description: "Our experts conduct detailed analysis using advanced methodologies and industry best practices.",
  },
  {
    number: "03",
    title: "Strategic Recommendation",
    description: "We deliver actionable insights and strategic recommendations tailored to your objectives.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description: "Ongoing guidance and support to ensure successful implementation of our recommendations.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven four-step process ensures comprehensive and effective solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}