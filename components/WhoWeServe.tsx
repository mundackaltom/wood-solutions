"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const clientTypes = [
	{
		title: "Manufacturers",
		description: "Quality improvement, process optimisation, testing, certification readiness and export compliance for wood products.",
	},
	{
		title: "Importers & Traders",
		description: "Supplier verification, inspection, documentation support and compliance guidance for reliable global sourcing.",
	},
	{
		title: "Developers",
		description: "Technical advisory for sustainable timber projects including material selection, performance and lifecycle guidance.",
	},
	{
		title: "Builders & Contractors",
		description: "Execution support for wood construction systems, installation quality and durability practices.",
	},
	{
		title: "Architects & Designers",
		description: "Specification guidance and innovative engineered wood solutions for reliable performance and design integrity.",
	},
	{
		title: "Institutions & Industry Bodies",
		description: "Training, research collaboration and technical knowledge support to strengthen industry capability.",
	},
];

export default function WhoWeServe() {
  const { ref, isVisible } = useIntersectionObserver();

	return (
		<section 
      ref={ref}
      className={`bg-gray-50 py-20 md:py-28 fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="mb-14 md:mb-20 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
						Who We Serve
					</h2>
					<p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
						Independent technical expertise across the entire wood value chain — from material science to construction and market strategy
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{clientTypes.map((client, idx) => (
						<div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-full">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{client.title}
							</h3>
							<p className="text-gray-700 leading-relaxed">
								{client.description}
							</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<p className="text-sm font-semibold text-green-700">
						Wood Solutions: "Your Wood Technology Partner" across material, project, compliance and market decisions.
					</p>
				</div>
			</div>
		</section>
	);
}