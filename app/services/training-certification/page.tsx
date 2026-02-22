import ServicePageLayout from "../../../components/ServicePageLayout";
import { FaCertificate, FaChalkboardTeacher, FaClipboardCheck, FaUniversity, FaGavel, FaTools, FaSearch } from "react-icons/fa";

export default function TrainingCertificationPage() {
  return (
    <ServicePageLayout
      title="Training, Certification & Compliance"
      positioningStatement="Building Capability, Compliance and Technical Confidence"
      description="We offer specialized training, certification, and compliance services to help organizations meet industry standards and build technical expertise. Our programs are designed to empower your team and ensure regulatory compliance."
      offerings={[
        {
          icon: <FaCertificate size={32} />, 
          title: "Certification Consultancy",
          description: "Guidance on FSC, PEFC, and PRAMAN certifications."
        },
        {
          icon: <FaGavel size={32} />, 
          title: "Compliance Support",
          description: "EUDR compliance and due diligence advisory."
        },
        {
          icon: <FaChalkboardTeacher size={32} />, 
          title: "Technical Training",
          description: "Seminars, workshops, and training modules for your team."
        },
        {
          icon: <FaUniversity size={32} />, 
          title: "Expert Sessions",
          description: "Panel discussions and expert-led sessions on industry topics."
        },
        {
          icon: <FaTools size={32} />, 
          title: "Preservation Advisory",
          description: "Consultancy on preservation plants and seasoning kilns."
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
        { step: "1. Needs Analysis", description: "Identifying your training and certification requirements.", icon: <FaSearch size={24} /> },
        { step: "2. Program Design", description: "Developing tailored training and certification programs.", icon: <FaChalkboardTeacher size={24} /> },
        { step: "3. Implementation", description: "Delivering training and guiding through certification processes.", icon: <FaClipboardCheck size={24} /> },
        { step: "4. Ongoing Support", description: "Providing continuous support for compliance and updates.", icon: <FaTools size={24} /> },
      ]}
      outcomes={[
        "Enhanced team expertise and skills",
        "Achieved industry certifications",
        "Improved compliance with regulations",
        "Increased operational efficiency",
        "Strengthened market reputation",
      ]}
      caseStudy={{
        title: "Achieving FSC Certification for a Leading Manufacturer",
        description: "We guided a leading manufacturer through the FSC certification process, providing training and compliance support. The company successfully achieved certification, enhancing its market credibility and access to new markets.",
        link: "/case-studies/fsc-certification-success",
      }}
      faqs={[
        {
          question: "What certifications do you support?",
          answer: "We support FSC, PEFC, PRAMAN, and other industry certifications."
        },
        {
          question: "Do you offer on-site training?",
          answer: "Yes, we provide both on-site and virtual training options."
        },
        {
          question: "Can you help with compliance audits?",
          answer: "Absolutely. We assist with compliance audits and provide actionable recommendations."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries, including manufacturing, construction, and architecture."
        },
        {
          question: "How long do training programs last?",
          answer: "The duration depends on the program, ranging from one-day workshops to multi-week courses."
        },
      ]}
    />
  );
}
