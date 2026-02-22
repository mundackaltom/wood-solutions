import ServicePageLayout from "../../../components/ServicePageLayout";
import { FaGlobe, FaTruck, FaClipboardCheck, FaTree, FaWarehouse, FaSearch, FaCogs } from "react-icons/fa";

export default function SourcingImportsPage() {
  return (
    <ServicePageLayout
      title="Sourcing & Imports"
      positioningStatement="Ethical, Compliant and Technically Assured Global Wood Sourcing"
      description="We specialize in sourcing high-quality wood products from around the globe, ensuring ethical practices, compliance, and technical assurance. Our team works closely with trusted suppliers to meet your unique requirements."
      offerings={[
        {
          icon: <FaTree size={32} />, 
          title: "Exotic Hardwoods",
          description: "Premium hardwoods and veneers for high-end applications."
        },
        {
          icon: <FaWarehouse size={32} />, 
          title: "Engineered Wood Products",
          description: "GLT, CLT, LVL, and finger-jointed boards tailored to your needs."
        },
        {
          icon: <FaClipboardCheck size={32} />, 
          title: "Custom Dimensions",
          description: "Bespoke dimensions and finishing solutions for your projects."
        },
        {
          icon: <FaGlobe size={32} />, 
          title: "Supplier Evaluation",
          description: "Thorough due diligence to ensure ethical and quality sourcing."
        },
        {
          icon: <FaTruck size={32} />, 
          title: "Import Management",
          description: "Comprehensive support for regulatory compliance and logistics."
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
        { step: "1. Needs Assessment", description: "Understanding your sourcing requirements and specifications.", icon: <FaSearch size={24} /> },
        { step: "2. Supplier Vetting", description: "Evaluating and selecting the best suppliers for your needs.", icon: <FaCogs size={24} /> },
        { step: "3. Quality Assurance", description: "Ensuring all sourced materials meet quality and compliance standards.", icon: <FaClipboardCheck size={24} /> },
        { step: "4. Logistics Support", description: "Managing import processes and ensuring timely delivery.", icon: <FaTruck size={24} /> },
      ]}
      outcomes={[
        "Access to premium quality wood products",
        "Ethical and sustainable sourcing practices",
        "Streamlined import and logistics processes",
        "Compliance with international standards",
        "Enhanced project outcomes and client satisfaction",
      ]}
      caseStudy={{
        title: "Streamlining Sourcing for a Global Furniture Brand",
        description: "A global furniture brand faced challenges in sourcing high-quality wood products. Our team conducted supplier evaluations and implemented a robust sourcing strategy, resulting in a 20% reduction in costs and improved product quality.",
        link: "/case-studies/global-furniture-sourcing",
      }}
      faqs={[
        {
          question: "What types of wood products do you source?",
          answer: "We source a wide range of wood products, including exotic hardwoods, veneers, and engineered wood."
        },
        {
          question: "Do you ensure ethical sourcing?",
          answer: "Yes, we conduct thorough due diligence to ensure all suppliers adhere to ethical and sustainable practices."
        },
        {
          question: "Can you handle large-scale sourcing projects?",
          answer: "Absolutely. We have experience managing sourcing projects of all sizes, including large-scale operations."
        },
        {
          question: "What regions do you source from?",
          answer: "We source from trusted suppliers across the globe, including Asia, Europe, and the Americas."
        },
        {
          question: "Do you provide import compliance support?",
          answer: "Yes, we assist with all regulatory and compliance requirements for imports."
        },
      ]}
    />
  );
}
