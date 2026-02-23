import ServicePageLayout from "../../../components/ServicePageLayout";

export default function SourcingImportsPage() {
  return (
    <ServicePageLayout
      title="Sourcing & Imports"
      positioningStatement="Global sourcing expertise for sustainable wood supply"
      description="We help you navigate the complexities of sourcing and importing wood products, ensuring quality, compliance, and sustainability."
      offerings={[
        { icon: <span>🌍</span>, title: "Global Sourcing", description: "Access to trusted suppliers worldwide." },
        { icon: <span>📦</span>, title: "Supply Chain Management", description: "Streamlined logistics and operations." },
        { icon: <span>✅</span>, title: "Compliance Assurance", description: "Adherence to international trade regulations." },
      ]}
      targetAudiences={[
        "Importers & Traders",
        "Manufacturers",
        "Retailers",
        "Construction Companies",
      ]}
      processSteps={[
        { step: "Understand Requirements", description: "Identify sourcing needs and goals." },
        { step: "Supplier Vetting", description: "Evaluate and select reliable suppliers." },
        { step: "Logistics Planning", description: "Optimize supply chain operations." },
        { step: "Ongoing Support", description: "Ensure continuous quality and compliance." },
      ]}
      outcomes={[
        "Reliable supply chains",
        "Cost-effective sourcing",
        "Sustainable practices",
      ]}
      caseStudy={{
        title: "Case Study: Streamlining Wood Imports",
        description: "Discover how we optimized the supply chain for a major importer, reducing costs and improving efficiency.",
        link: "/case-studies/wood-imports",
      }}
      faqs={[
        { question: "What is sourcing and imports advisory?", answer: "It involves expert guidance on sourcing and importing wood products." },
        { question: "How do you ensure compliance?", answer: "We work with trusted suppliers and adhere to international standards." },
      ]}
    />
  );
}
