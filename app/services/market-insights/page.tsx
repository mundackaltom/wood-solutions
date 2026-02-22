import ServicePageLayout from "../../../components/ServicePageLayout";
import { FaChartLine, FaLightbulb, FaUsers, FaClipboardCheck, FaBullhorn, FaSearch } from "react-icons/fa";

export default function MarketInsightsPage() {
  return (
    <ServicePageLayout
      title="Market Insights & Brand Consultancy"
      positioningStatement="Building Credible Brands Through Insight, Science and Strategy"
      description="We provide actionable market insights and strategic brand consultancy to help businesses build credibility and achieve sustainable growth. Our expertise ensures your brand stands out in a competitive market."
      offerings={[
        {
          icon: <FaChartLine size={32} />, 
          title: "Market Surveys",
          description: "Comprehensive market surveys and feasibility assessments."
        },
        {
          icon: <FaLightbulb size={32} />, 
          title: "Brand Review",
          description: "In-depth analysis and recommendations for brand improvement."
        },
        {
          icon: <FaUsers size={32} />, 
          title: "Consumer Studies",
          description: "Understanding consumer perceptions and preferences."
        },
        {
          icon: <FaClipboardCheck size={32} />, 
          title: "Expert Endorsements",
          description: "Benchmarking and endorsements to enhance brand credibility."
        },
        {
          icon: <FaBullhorn size={32} />, 
          title: "Strategic Advisory",
          description: "Guidance for successful product launches and market entry."
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
        { step: "1. Research & Analysis", description: "Conducting in-depth market research and analysis.", icon: <FaSearch size={24} /> },
        { step: "2. Strategy Development", description: "Creating tailored strategies for brand positioning and growth.", icon: <FaLightbulb size={24} /> },
        { step: "3. Implementation", description: "Executing strategies and monitoring progress.", icon: <FaClipboardCheck size={24} /> },
        { step: "4. Continuous Improvement", description: "Refining strategies based on market feedback.", icon: <FaChartLine size={24} /> },
      ]}
      outcomes={[
        "Enhanced brand credibility and market presence",
        "Data-driven decision-making",
        "Improved customer engagement and loyalty",
        "Successful product launches",
        "Sustainable business growth",
      ]}
      caseStudy={{
        title: "Rebranding a Leading Construction Firm",
        description: "We partnered with a leading construction firm to revamp their brand strategy. Through market research and strategic advisory, the firm achieved a 40% increase in brand recognition and a 25% growth in client acquisition.",
        link: "/case-studies/construction-brand-revamp",
      }}
      faqs={[
        {
          question: "What industries do you specialize in?",
          answer: "We specialize in construction, manufacturing, and architectural industries."
        },
        {
          question: "Do you provide global market insights?",
          answer: "Yes, we offer insights and strategies for both local and international markets."
        },
        {
          question: "Can you help with product launches?",
          answer: "Absolutely. We provide strategic advisory for successful product launches."
        },
        {
          question: "What is included in a brand review?",
          answer: "Our brand review includes an analysis of your current brand positioning, customer perception, and recommendations for improvement."
        },
        {
          question: "How do you conduct market surveys?",
          answer: "We use a combination of qualitative and quantitative research methods to gather actionable insights."
        },
      ]}
    />
  );
}
