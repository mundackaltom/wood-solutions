"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const industries = [
	{
		title: "Manufacturers",
		description: "Quality assurance and technical optimization for wood products.",
	},
	{
		title: "Importers",
		description: "Compliance verification and supply chain guidance for global trade.",
	},
	{
		title: "Builders",
		description: "Engineered timber and wood systems for construction projects.",
	},
	{
		title: "Developers",
		description: "Sustainable wood solutions for property development.",
	},
	{
		title: "Architects",
		description: "Design and specification of wood materials and structures.",
	},
	{
		title: "Institutions",
		description: "Advancing wood science and technology in research and education.",
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
					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						Trusted by industry leaders across the wood value chain
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						{industries.slice(0, 3).map((industry, idx) => (
							<div key={idx} className="border-l-4 border-green-700 pl-6">
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									{industry.title}
								</h3>
								<p className="text-gray-600">{industry.description}</p>
							</div>
						))}
					</div>

					<div className="space-y-8">
						{industries.slice(3).map((industry, idx) => (
							<div key={idx} className="border-l-4 border-green-700 pl-6">
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									{industry.title}
								</h3>
								<p className="text-gray-600">{industry.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}