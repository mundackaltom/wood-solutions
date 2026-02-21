export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Wood Solutions</h3>
          <p className="text-sm text-neutral-300">
            Independent Expertise Across the Wood Value Chain
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Technical Advisory</li>
            <li>Sourcing & Imports</li>
            <li>Construction & Architecture</li>
            <li>Training & Certification</li>
            <li>Market Insights</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: info@woodsolutions.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-neutral-700 text-sm">
        © 2026 Wood Solutions
      </div>
    </footer>
  );
}
