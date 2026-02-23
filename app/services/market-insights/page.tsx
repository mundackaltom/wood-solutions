import ServicePageLayout from "../../../components/ServicePageLayout";

export default function MarketInsightsPage() {
  return (
    <ServicePageLayout
      title="Market Insights & Consultancy"
      positioningStatement="Data-driven insights for strategic decision-making"
      description="Our market insights and consultancy services provide actionable intelligence to help you navigate the complexities of the wood industry."
      offerings={[
        { icon: <span>📈</span>, title: "Market Analysis", description: "In-depth research and trend analysis." },
        { icon: <span>🔍</span>, title: "Competitor Insights", description: "Understand your market position." },
        { icon: <span>📊</span>, title: "Strategic Recommendations", description: "Tailored strategies for growth." },
      ]}
      targetAudiences={[
        "Business Leaders",
        "Market Analysts",
        "Investors",
        "Policy Makers",
      ]}
      processSteps={[
        { step: "Define Objectives", description: "Understand your business goals." },
        { step: "Conduct Research", description: "Gather and analyze market data." },
        { step: "Develop Strategies", description: "Create actionable plans for success." },
        { step: "Implement Solutions", description: "Support execution and monitoring." },
      ]}
      outcomes={[
        "Informed decision-making",
        "Improved market positioning",
        "Sustainable growth",
      ]}
      caseStudy={{
        title: "Case Study: Market Expansion",
        description: "Learn how we helped a company expand into new markets with data-driven strategies.",
        link: "/case-studies/market-expansion",
      }}
      faqs={[
        { question: "What is market insights consultancy?", answer: "It involves providing data-driven insights and strategies for business growth." },
        { question: "Who can benefit from this service?", answer: "Business leaders, analysts, and investors." },
      ]}
    />
  );
}
