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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            What Makes Wood Solutions Unique
          </h2>
          <p className="
            mx-auto
            max-w-4xl
            lg:max-w-5xl
            px-6
            text-center
            text-base
            md:text-lg
            lg:text-xl
            leading-relaxed
            text-gray-700
            tracking-[0.01em]
            text-justify
          ">
            Backed by scientific expertise, decades of techno-commercial experience, and robust national and international collaborations, we are proud to be “Your Wood Technology Partner.” Our unique approach integrates Sustainable, Innovative, and Futuristic Wood Solutions into every aspect of your wood-related operations.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-6 hidden">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-3 bg-green-50 rounded-xl inline-block group-hover:bg-green-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-justify">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700 text-justify">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for mobile view */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 px-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="
                  min-w-[260px]
                  max-w-[280px]
                  flex-shrink-0
                  snap-start
                  group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col justify-between
                "
              >
                <div>
                  <div className="mb-6 p-3 bg-green-50 rounded-xl inline-block group-hover:bg-green-100 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-justify">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700 text-justify">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;