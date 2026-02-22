import ServicePageLayout from "../../../components/ServicePageLayout";
import { FaTools, FaCogs, FaCheckCircle, FaSearch, FaClipboardCheck } from "react-icons/fa";

export default function TechnicalAdvisoryPage() {
  return (
    <ServicePageLayout
      title="Technical Advisory & Quality Evaluation"
      positioningStatement="Science-Driven Assurance for Wood Products and Systems"
      description="We provide comprehensive technical advisory services to ensure the quality and performance of wood products and systems. Our team of experts combines scientific rigor with practical experience to deliver tailored solutions for your unique challenges."
      offerings={[
        {
          icon: <FaTools size={32} />, 
          title: "Wood Quality Evaluation",
          description: "Comprehensive assessment of wood quality to ensure compliance with industry standards."
        },
        {
          icon: <FaCogs size={32} />, 
          title: "Prototype Development",
          description: "Development and testing of prototypes for engineered wood and furniture."
        },
        {
          icon: <FaClipboardCheck size={32} />, 
          title: "Performance Validation",
          description: "Testing and validation of wood products for structural applications."
        },
        {
          icon: <FaSearch size={32} />, 
          title: "Failure Analysis",
          description: "In-depth forensic assessment to identify and address product failures."
        },
        {
          icon: <FaCheckCircle size={32} />, 
          title: "Quality Control Audits",
          description: "Audits and recommendations to improve quality control processes."
        },
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
        { step: "1. Initial Consultation", description: "Understanding your unique challenges and requirements.", icon: <FaSearch size={24} /> },
        { step: "2. Technical Assessment", description: "Conducting a detailed evaluation of your wood products and systems.", icon: <FaCogs size={24} /> },
        { step: "3. Recommendations", description: "Providing actionable insights and solutions to address identified issues.", icon: <FaClipboardCheck size={24} /> },
        { step: "4. Implementation Support", description: "Assisting with the implementation of recommended solutions.", icon: <FaCheckCircle size={24} /> },
      ]}
      outcomes={[
        "Improved compliance with industry standards",
        "Reduced risk of product failures",
        "Enhanced product quality and performance",
        "Cost optimization through efficient processes",
        "Increased customer satisfaction and trust",
      ]}
      caseStudy={{
        title: "Improving Wood Quality for a Leading Furniture Manufacturer",
        description: "A leading furniture manufacturer faced challenges with wood quality consistency, leading to high rejection rates and increased costs. Our team conducted a comprehensive quality evaluation and implemented a robust quality control process, resulting in a 30% reduction in rejection rates and improved customer satisfaction.",
        link: "/case-studies/furniture-quality-improvement",
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
        {
          question: "How long does an engagement typically take?",
          answer: "The duration depends on the scope of the project, but we work efficiently to meet your timelines.",
        },
        {
          question: "Do you work internationally?",
          answer: "Yes, we provide services to clients across the globe, ensuring compliance with local and international standards.",
        },
      ]}
    />
  );
}
