import ServicePageLayout from "../../../components/ServicePageLayout";

export default function ConstructionArchitecturePage() {
  return (
    <ServicePageLayout
      title="Construction & Architecture"
      positioningStatement="Innovative solutions for sustainable building practices"
      description="Our expertise in construction and architecture ensures that your projects meet the highest standards of sustainability and innovation."
      offerings={[
        { icon: <span>🏗</span>, title: "Design Consultation", description: "Expert advice on sustainable building designs." },
        { icon: <span>📐</span>, title: "Structural Analysis", description: "Detailed evaluation of architectural plans." },
        { icon: <span>🌱</span>, title: "Sustainability Solutions", description: "Eco-friendly building practices and materials." },
      ]}
      targetAudiences={[
        "Architects",
        "Builders",
        "Developers",
        "Urban Planners",
      ]}
      processSteps={[
        { step: "Understand Project Goals", description: "Collaborate to define project objectives." },
        { step: "Design Review", description: "Analyze and optimize architectural designs." },
        { step: "Implementation Support", description: "Assist in executing sustainable practices." },
        { step: "Post-Project Evaluation", description: "Ensure long-term success and compliance." },
      ]}
      outcomes={[
        "Sustainable designs",
        "Improved project efficiency",
        "Enhanced environmental impact",
      ]}
      caseStudy={{
        title: "Case Study: Sustainable Urban Development",
        description: "Learn how we supported a major urban development project with sustainable solutions.",
        link: "/case-studies/sustainable-urban-development",
      }}
      faqs={[
        { question: "What is construction and architecture advisory?", answer: "It involves expert guidance on sustainable building practices and designs." },
        { question: "Who can benefit from this service?", answer: "Architects, builders, and urban planners." },
      ]}
    />
  );
}
