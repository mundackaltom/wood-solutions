"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const services = [
	{
		title: "Technical Advisory & Quality Evaluation",
		description:
			"Comprehensive technical assessments, quality validation, and performance testing for wood materials and products. Our science-based approach ensures reliability and compliance.",
		features: [
			"Material Testing & Analysis",
			"Quality Assurance Programs",
			"Performance Evaluation",
			"Compliance Verification",
		],
		href: "/services/technical-advisory",
	},
	{
		title: "Sourcing & Imports",
		description:
			"Strategic sourcing guidance and import compliance for international wood procurement. Navigate complex regulations with confidence and optimize your supply chain.",
		features: [
			"Supply Chain Optimization",
			"Regulatory Compliance",
			"Vendor Assessment",
			"Risk Management",
		],
		href: "/services/sourcing-imports",
	},
	{
		title: "Construction & Architecture",
		description:
			"Specialised advisory for wood based projects using engineered wood and Mass Timber.",
		features: [
			"Design Support",
			"Structural Analysis",
			"Building Code Compliance",
			"Performance Optimization",
		],
		href: "/services/construction-architecture",
	},
	{
		title: "Training & Certification",
		description:
			"Supports the wood industry through training, certification, and technical workshops.",
		features: [
			"Industry Training Programs",
			"Certification Pathways",
			"Skills Development",
			"Continuing Education",
		],
		href: "/services/training-certification",
	},
	{
		title: "Market Insights & Brand Consultancy",
		description:
			"Provides market research and brand consultancy for wood-based industries.",
		features: [
			"Market Analysis",
			"Brand Strategy",
			"Competitive Intelligence",
			"Industry Trends",
		],
		href: "/services/market-insights",
	},
];

function ServiceHero() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`bg-gradient-to-b from-green-800 to-green-700 text-white py-12 md:py-14 lg:py-16 fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
					Our Services
				</h1>
				<p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
					Comprehensive and Strategic Expertise Across the Wood Value Chain.
					Independent advisory services designed to drive your business forward.
				</p>
			</div>
		</section>
	);
}

function ServicesPhilosophy() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-20 md:py-28 bg-white fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
					Our Approach
				</h2>
				<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
					Every engagement begins with understanding your unique challenges and
					objectives. Our independent status ensures unbiased recommendations
					focused solely on your success.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
					<div className="text-center">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<div className="w-6 h-6 bg-green-700 rounded-full"></div>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Independent
						</h3>
						<p className="text-gray-700">
							No trading conflicts, pure advisory focus
						</p>
					</div>
					<div className="text-center">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<div className="w-6 h-6 bg-green-700 rounded-full"></div>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Scientific
						</h3>
						<p className="text-gray-700">Evidence-based technical evaluation</p>
					</div>
					<div className="text-center">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<div className="w-6 h-6 bg-green-700 rounded-full"></div>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Strategic
						</h3>
						<p className="text-gray-700">
							Commercial insight and market intelligence
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function ServicesList() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-20 md:py-28 bg-gray-50 fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
						Service Categories
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto">
						Comprehensive solutions tailored to your specific needs across the wood
						industry value chain.
					</p>
				</div>

				<div className="space-y-12">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-lg p-8 md:p-12 shadow-sm"
						>
							<div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
								<div className="flex-1">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
										{service.title}
									</h3>
									<p className="text-lg text-gray-700 leading-relaxed mb-8">
										{service.description}
									</p>
									<div className="grid grid-cols-2 gap-4 mb-8">
										{service.features.map((feature, idx) => (
											<div key={idx} className="flex items-center">
												<div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
												<span className="text-gray-700">{feature}</span>
											</div>
										))}
									</div>
								</div>
								<div className="flex-shrink-0">
									<Link
										href={service.href}
										className="inline-block bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 focus-ring"
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ServicesCTA() {
	const { ref, isVisible } = useIntersectionObserver();

	return (
		<section
			ref={ref}
			className={`py-20 md:py-28 bg-green-800 text-white fade-in-up ${
				isVisible ? "is-visible" : ""
			}`}
		>
			<div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
					Ready to Get Started?
				</h2>
				<p className="text-xl text-green-100 mb-8 leading-relaxed">
					Connect with our experts to discuss your specific requirements and
					discover how our independent expertise can drive your success.
				</p>
				<Link
					href="/contact"
					className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 focus-ring"
				>
					Request Consultation
				</Link>
			</div>
		</section>
	);
}

export default function ServicesPage() {
	return (
		<div>
			<ServiceHero />
			<ServicesPhilosophy />
			<ServicesList />
			<ServicesCTA />
		</div>
	);
}
