import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import ServicesOverview from "../components/ServicesOverview";
import WhoWeServe from "../components/WhoWeServe";
import ExpertiseHighlight from "../components/ExpertiseHighlight";
import ProcessSection from "../components/ProcessSection";
import TrustCredentials from "../components/TrustCredentials";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <WhoWeServe />
      <ExpertiseHighlight />
      <ProcessSection />
      <TrustCredentials />
    </div>
  );
}
