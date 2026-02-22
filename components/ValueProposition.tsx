import { FaShieldAlt, FaFlask, FaGlobe, FaChartLine } from "react-icons/fa";

const ValueProposition = () => {
  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-green-600" />,
      title: "Independent Advisory",
      description: "Unbiased expertise free from product sales or vendor relationships. Our recommendations are driven solely by your best interests."
    },
    {
      icon: <FaFlask className="w-8 h-8 text-green-600" />,
      title: "Science-Based Evaluation",
      description: "Rigorous testing methodologies and evidence-based analysis ensure reliable, repeatable results for critical decisions."
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-green-600" />,
      title: "Global Regulatory Expertise",
      description: "Deep understanding of international standards, certifications, and compliance requirements across diverse markets."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-green-600" />,
      title: "End-to-End Value Chain Insight",
      description: "Comprehensive perspective from forest to finished product, optimizing quality, cost, and performance at every stage."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            What Makes Wood Solutions Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our unique approach combines independence, scientific rigor, and deep industry knowledge to deliver exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6 p-3 bg-green-50 rounded-xl inline-block group-hover:bg-green-100 transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;