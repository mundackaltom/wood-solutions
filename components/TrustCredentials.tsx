const credentials = [
  {
    title: "International Standards",
    description: "Certified experts in ISO, ASTM, and EN standards for wood products",
  },
  {
    title: "Industry Recognition",
    description: "Trusted by leading manufacturers and institutions worldwide",
  },
  {
    title: "Scientific Publications",
    description: "Published research in peer-reviewed journals and industry publications",
  },
  {
    title: "Global Network",
    description: "Extensive network of testing facilities and industry partnerships",
  },
];

export default function TrustCredentials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trust & Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized expertise backed by industry certifications and proven track record
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-700 rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {credential.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team brings decades of combined experience in wood science, engineering, 
            and international trade. We maintain active memberships in leading professional 
            organizations and continuously update our knowledge to reflect the latest industry developments.
          </p>
        </div>
      </div>
    </section>
  );
}