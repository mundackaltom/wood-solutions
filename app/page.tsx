import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import ServicesOverview from "../components/ServicesOverview";
import ProcessSection from "../components/ProcessSection";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <ProcessSection />
    </div>
  );
}
