import ServicePageLayout from "../../../components/ServicePageLayout";
import { FaBuilding, FaDraftingCompass, FaRulerCombined, FaFire, FaTools, FaSearch, FaClipboardCheck } from "react-icons/fa";

export default function ConstructionArchitecturePage() {
  return (
    <ServicePageLayout
      title="Construction & Architecture"
      positioningStatement="Engineering Timber into Sustainable, High-Performance Built Forms"
      description="We provide expert consultancy for construction and architectural projects, specializing in sustainable and high-performance timber structures. Our team ensures that your projects are designed and executed to the highest standards."
      offerings={[
        {
          icon: <FaBuilding size={32} />, 
          title: "Mass Timber Structures",
          description: "Design and consultancy for wood houses, eco-resorts, and large-scale timber buildings."
        },
        {
          icon: <FaDraftingCompass size={32} />, 
          title: "Wood Frame Construction",
          description: "Expert guidance on wood frame construction techniques and best practices."
        },
        {
          icon: <FaRulerCombined size={32} />, 
          title: "Timber Detailing",
          description: "Design assistance for gazebos, decks, facades, and intricate timber details."
        },
        {
          icon: <FaTools size={32} />, 
          title: "Material Selection",
          description: "Support for material selection, fabrication supervision, and installation audits."
        },
        {
          icon: <FaFire size={32} />, 
          title: "Fire-Rated Systems",
          description: "Consultancy for fire-rated door systems and structural safety."
        },
      ]}
      targetAudiences={[
        "Manufacturers",
        "Builders",
        "Developers",
        "Architects",
        "Institutions",
      ]}
      processSteps={[
        { step: "1. Project Scoping", description: "Understanding your construction and architectural needs.", icon: <FaSearch size={24} /> },
        { step: "2. Design Consultation", description: "Providing expert design assistance and material recommendations.", icon: <FaDraftingCompass size={24} /> },
        { step: "3. Quality Assurance", description: "Ensuring compliance with safety and performance standards.", icon: <FaClipboardCheck size={24} /> },
        { step: "4. Implementation Support", description: "Overseeing fabrication and installation processes.", icon: <FaTools size={24} /> },
      ]}
      outcomes={[
        "Sustainable and eco-friendly construction solutions",
        "Enhanced structural performance and safety",
        "Compliance with building codes and regulations",
        "Innovative and aesthetically pleasing designs",
        "Improved project efficiency and cost-effectiveness",
      ]}
      caseStudy={{
        title: "Designing an Eco-Resort with Mass Timber",
        description: "Our team collaborated with architects to design and construct an eco-resort using sustainable mass timber. The project achieved LEED Gold certification and set a benchmark for eco-friendly construction.",
        link: "/case-studies/eco-resort-design",
      }}
      faqs={[
        {
          question: "What types of projects do you support?",
          answer: "We support a wide range of projects, including residential, commercial, and institutional buildings."
        },
        {
          question: "Do you provide material selection guidance?",
          answer: "Yes, we assist in selecting the best materials for your specific project needs."
        },
        {
          question: "Can you help with fire safety compliance?",
          answer: "Absolutely. We provide consultancy for fire-rated systems and structural safety."
        },
        {
          question: "Do you work with international projects?",
          answer: "Yes, we have experience working on projects across the globe."
        },
        {
          question: "What is mass timber construction?",
          answer: "Mass timber construction uses engineered wood products to create sustainable and high-performance buildings."
        },
      ]}
    />
  );
}
