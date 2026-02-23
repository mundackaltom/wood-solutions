import ServicePageLayout from "../../../components/ServicePageLayout";

export default function TechnicalAdvisoryPage() {
  return (
    <ServicePageLayout
      title="Technical Advisory & Quality Evaluation"
      positioningStatement="Science-driven assurance for wood products and systems"
      description="Our technical advisory services provide comprehensive evaluations and quality assurance for wood products, ensuring compliance with global standards and best practices."
      offerings={[
        { icon: <span>🌲</span>, title: "Material Testing", description: "In-depth analysis of wood properties and performance." },
        { icon: <span>🔍</span>, title: "Quality Assurance", description: "Ensuring compliance with international standards." },
        { icon: <span>📊</span>, title: "Technical Reports", description: "Detailed documentation and recommendations." },
      ]}
      targetAudiences={[
        "Manufacturers",
        "Importers & Traders",
        "Developers & Builders",
        "Architects & Engineers",
        "Research & Institutions",
      ]}
      processSteps={[
        { step: "Understand Needs", description: "Collaborate to identify key challenges and goals." },
        { step: "Conduct Analysis", description: "Perform technical and market evaluations." },
        { step: "Provide Recommendations", description: "Deliver actionable insights and strategies." },
        { step: "Support Implementation", description: "Assist in executing tailored solutions." },
      ]}
      outcomes={[
        "Enhanced product quality",
        "Improved compliance",
        "Increased market competitiveness",
      ]}
      caseStudy={{
        title: "Case Study: Improving Wood Durability Standards",
        description: "Learn how we helped a leading manufacturer enhance their product durability and meet international standards.",
        link: "/case-studies/wood-durability",
      }}
      faqs={[
        { question: "What is technical advisory?", answer: "It involves expert guidance on wood product quality and compliance." },
        { question: "Who can benefit from this service?", answer: "Manufacturers, builders, and researchers in the wood industry." },
      ]}
    />
  );
}
