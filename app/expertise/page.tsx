"use client";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import ExpertiseHighlight from "../../components/ExpertiseHighlight";

const technicalDomains = [
	{
		title: "Wood Materials & Technology",
		areas: [
			"Material characterization and properties",
			"Performance testing and validation",
			"Durability assessment and lifecycle analysis",
			"Quality control systems and protocols",
		],
	},
	{
		title: "Engineered Timber Systems",
		areas: [
			"Cross-laminated timber (CLT) evaluation",
			"Glued laminated timber (GLT) assessment",
			"Structural design optimization",
			"Connection and fastener systems",
		],
	},
	{
		title: "Regulatory & Compliance",
		areas: [
			"International building codes and standards",
			"Environmental regulations and certifications",
			"Import/export compliance requirements",
			"Product liability and risk management",
		],
	},
	{
		title: "Testing & Evaluation",
		areas: [
			"Mechanical and physical testing",
			"Fire performance evaluation",
			"Environmental impact assessment",
			"Third-party verification programs",
		],
	},
];

const industries = [
	{
		title: "Construction & Architecture",
		description:
			"Structural timber, building systems, and architectural applications",
	},
	{
		title: "Manufacturing",
		description: "Wood processing, engineered products, and quality assurance",
	},
	{
		title: "Import/Export",
		description:
			"International trade, compliance, and supply chain optimization",
	},
	{
		title: "Institutions",
		description:
			"Research organizations, educational facilities, and standards bodies",
	},
];

const methodologies = [
	{
		title: "Technical Assessment",
		description:
			"Systematic evaluation using industry-standard testing protocols and advanced analytical methods.",
	},
	{
		title: "Risk Analysis",
		description:
			"Comprehensive risk identification, assessment, and mitigation strategies for project success.",
	},
	{
		title: "Performance Optimization",
		description:
			"Data-driven approaches to improve material performance and system efficiency.",
	},
	{
		title: "Standards Alignment",
		description:
			"Ensuring compliance with international standards and best practices across all domains.",
	},
];

function ExpertiseHero() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`bg-gradient-to-b from-green-800 to-green-700 text-white py-12 md:py-14 lg:py-16 fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="max-w-4xl">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
						Technical Expertise
					</h1>
					<p className="text-xl md:text-2xl text-green-100 leading-relaxed">
						Deep domain knowledge across wood technology, engineering, and
						regulatory frameworks. Three decades of hands-on experience delivering
						solutions that work.
					</p>
				</div>
			</div>
		</section>
	);
}

function TechnicalDomains() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-10 md:py-12 bg-white fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-left mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
						Areas of Technical Expertise
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto">
						Comprehensive knowledge spanning the full spectrum of wood technology,
						from fundamental material science to advanced engineering applications.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{technicalDomains.map((domain, index) => (
						<div key={index} className="bg-gray-50 p-8 rounded-lg">
							<h3 className="text-xl font-bold text-gray-900 mb-6">
								{domain.title}
							</h3>
							<ul className="space-y-3">
								{domain.areas.map((area, idx) => (
									<li key={idx} className="flex items-start">
										<div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
										<span className="text-gray-700">{area}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function IndustriesServed() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-10 md:py-12 bg-gray-50 fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-left mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
						Industries We Serve
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto">
						Cross-sector expertise enabling us to understand unique challenges and
						deliver targeted solutions across diverse industry applications.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{industries.map((industry, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
						>
							<h3 className="text-lg font-bold text-gray-900 mb-3">
								{industry.title}
							</h3>
							<p className="text-gray-700 text-sm">
								{industry.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Methodologies() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-10 md:py-12 bg-white fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-left mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
						Our Approach
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto">
						Systematic methodologies ensuring consistent, reliable, and actionable
						results across all engagements.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{methodologies.map((methodology, index) => (
						<div
							key={index}
							className="border border-gray-200 p-8 rounded-lg hover:border-green-200 transition-colors duration-200"
						>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								{methodology.title}
							</h3>
							<p className="text-gray-700 leading-relaxed">
								{methodology.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ProfessionalApproach() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-10 md:py-12 bg-green-50 fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-4xl mx-auto px-4 md:px-8">
				<div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center tracking-tight">
						Professional Standards
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div>
							<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<div className="w-6 h-6 bg-green-700 rounded-full"></div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Evidence-Based
							</h3>
							<p className="text-gray-700 text-sm">
								All recommendations grounded in scientific data and proven
								methodologies
							</p>
						</div>
						<div>
							<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<div className="w-6 h-6 bg-green-700 rounded-full"></div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Objective Analysis
							</h3>
							<p className="text-gray-700 text-sm">
								Independent perspective free from commercial bias or conflicts of
								interest
							</p>
						</div>
						<div>
							<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<div className="w-6 h-6 bg-green-700 rounded-full"></div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Continuous Learning
							</h3>
							<p className="text-gray-700 text-sm">
								Staying current with emerging technologies and evolving industry
								standards
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function ExpertisePage() {
	return (
		<div>
			<ExpertiseHero />
			<ExpertiseHighlight />
			<TechnicalDomains />
			<IndustriesServed />
			<Methodologies />
			<ProfessionalApproach />
		</div>
	);
}
