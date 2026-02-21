import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import ServicesOverview from "../components/ServicesOverview";
import WhoWeServe from "../components/WhoWeServe";
import ExpertiseHighlight from "../components/ExpertiseHighlight";
import ProcessSection from "../components/ProcessSection";
import TrustCredentials from "../components/TrustCredentials";
import ConsultationCTA from "../components/ConsultationCTA";

export default function HomePage() {
  return (
    <div className="pt-20">
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <WhoWeServe />
      <ExpertiseHighlight />
      <ProcessSection />
      <TrustCredentials />
      <ConsultationCTA />
    </div>
  );
}
