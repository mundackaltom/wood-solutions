import ServicePageLayout from "../../../components/ServicePageLayout";

export default function TrainingCertificationPage() {
  return (
    <ServicePageLayout
      title="Training, Certification & Compliance"
      positioningStatement="Empowering professionals with industry-leading knowledge"
      description="Our training and certification programs are designed to equip professionals with the skills and knowledge needed to excel in the wood industry."
      offerings={[
        { icon: <span>🎓</span>, title: "Professional Training", description: "Comprehensive courses for industry professionals." },
        { icon: <span>📜</span>, title: "Certification Programs", description: "Recognized certifications for career advancement." },
        { icon: <span>✅</span>, title: "Compliance Support", description: "Guidance on meeting industry standards." },
      ]}
      targetAudiences={[
        "Industry Professionals",
        "Compliance Officers",
        "Training Coordinators",
        "Educational Institutions",
      ]}
      processSteps={[
        { step: "Identify Training Needs", description: "Assess skill gaps and requirements." },
        { step: "Develop Curriculum", description: "Create tailored training programs." },
        { step: "Deliver Training", description: "Provide engaging and effective sessions." },
        { step: "Evaluate Outcomes", description: "Measure success and provide feedback." },
      ]}
      outcomes={[
        "Enhanced professional skills",
        "Recognized certifications",
        "Improved compliance capabilities",
      ]}
      caseStudy={{
        title: "Case Study: Certification Success",
        description: "Discover how our certification program helped professionals achieve industry recognition.",
        link: "/case-studies/certification-success",
      }}
      faqs={[
        { question: "What training programs do you offer?", answer: "We offer a range of professional training and certification programs." },
        { question: "Who can benefit from these programs?", answer: "Industry professionals and educational institutions." },
      ]}
    />
  );
}
