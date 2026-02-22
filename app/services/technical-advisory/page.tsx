import ServicePageLayout from "../../../components/ServicePageLayout";

export default function TechnicalAdvisoryPage() {
  return (
    <ServicePageLayout
      title="Technical Advisory & Quality Evaluation"
      positioningStatement="Science-Driven Assurance for Wood Products and Systems"
      description="We provide comprehensive technical advisory services to ensure the quality and performance of wood products and systems."
      offerings={[
        "Comprehensive wood quality evaluation and inspection",
        "Prototype development for engineered wood and furniture",
        "Testing and performance validation for structural applications",
        "Failure analysis and forensic assessment",
        "Quality control audits and improvement recommendations",
      ]}
      targetAudiences={[
        "Manufacturers",
        "Importers",
        "Builders",
        "Developers",
        "Architects",
        "Institutions",
      ]}
      processSteps={[
        "Initial Consultation",
        "Technical Assessment",
        "Recommendations",
        "Implementation Support",
      ]}
      differentiators={[
        "Independent expertise",
        "Scientific approach",
        "Global perspective",
        "Regulatory knowledge",
        "Practical experience",
      ]}
      caseStudy={{
        scenario: "A leading furniture manufacturer faced challenges with wood quality consistency.",
        challenge: "The manufacturer was experiencing high rejection rates due to inconsistent wood quality, leading to increased costs and delays.",
        solution: "Wood Solutions conducted a comprehensive quality evaluation and implemented a robust quality control process.",
        outcome: "The manufacturer achieved a 30% reduction in rejection rates and improved customer satisfaction.",
      }}
      faqs={[
        {
          question: "What types of wood products do you evaluate?",
          answer: "We evaluate a wide range of wood products, including engineered wood, furniture, and structural components.",
        },
        {
          question: "Do you provide on-site inspections?",
          answer: "Yes, we offer on-site inspections to assess wood quality and provide recommendations.",
        },
        {
          question: "Can you assist with compliance requirements?",
          answer: "Absolutely. We provide guidance on meeting regulatory and quality compliance standards.",
        },
      ]}
    />
  );
}
