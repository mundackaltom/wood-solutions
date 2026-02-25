export default function DisclaimerPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* PAGE HEADING BAR — keep same style as other pages */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif">
            Disclaimer
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-8 leading-relaxed">
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">General Information</h2>
          <p>
            The information provided on this website by Wood Solutions is for general
            informational, educational and professional reference purposes only.
            While every effort is made to ensure accuracy and relevance, the content
            should not be considered a substitute for project-specific technical,
            legal, financial, or regulatory advice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Professional Advisory Scope</h2>
          <p>
            Wood Solutions offers independent techno-commercial consultancy based on
            available data, industry standards and professional judgement.
            Recommendations may vary depending on site conditions, material variability,
            regulatory changes and client requirements. Users are advised to seek
            project-specific consultation before making decisions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Third-Party Content & References
          </h2>
          <p>
            This website may reference, summarise, or link to external publications,
            standards, news articles and third-party resources. Such references are
            provided for informational purposes only. All trademarks, copyrights and
            intellectual property remain with their respective owners. Wood Solutions
            does not claim ownership of third-party content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">No Warranty</h2>
          <p>
            Wood Solutions makes no warranties, express or implied, regarding
            completeness, accuracy, reliability, or suitability of the information
            provided. Use of any information from this website is at the user's own risk.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
          <p>
            Wood Solutions shall not be liable for any direct, indirect, incidental,
            consequential, or project-related losses arising from the use of website
            content, guidance, or referenced materials.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Certification & Compliance Guidance
          </h2>
          <p>
            Information relating to standards, certifications (e.g., FSC, PEFC, EUDR,
            PRAMAN, QCO) and regulatory frameworks is indicative and subject to change
            by governing authorities. Final compliance responsibility rests with the
            user or organisation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All original text, graphics, frameworks and materials on this website are
            the intellectual property of Wood Solutions unless otherwise stated.
            Reproduction, distribution, or reuse without written permission is
            prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Updates</h2>
          <p>
            Wood Solutions reserves the right to modify website content, services and
            this disclaimer at any time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            For clarifications, permissions, or formal advisory engagement, please
            contact Wood Solutions directly.
          </p>
          <p className="mt-2 font-medium">
            Wood Solutions — Your Wood Technology Partner
          </p>
        </div>
      </section>
    </main>
  )
}