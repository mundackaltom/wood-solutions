import Link from "next/link";

const services = [
	{
		title: "Technical Advisory & Quality Evaluation",
		description:
			"Comprehensive technical assessments and quality validation for wood materials and products.",
		href: "/services/technical-advisory",
	},
	{
		title: "Sourcing & Imports",
		description:
			"Strategic sourcing guidance and import compliance for international wood procurement.",
		href: "/services/sourcing-imports",
	},
	{
		title: "Construction & Architecture",
		description:
			"Specialised advisory for wood based projects using engineered wood and Mass Timber.",
		href: "/services/construction-architecture",
	},
	{
		title: "Training & Certification",
		description:
			"Supports the wood industry through training, certification, and technical workshops.",
		href: "/services/training-certification",
	},
	{
		title: "Market Insights & Brand Consultancy",
		description:
			"Provides market research and brand consultancy for wood-based industries.",
		href: "/services/market-insights",
	},
];

export default function ServicesOverview() {
	return (
		<section className="py-12 md:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8 md:mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
					Our Services
				</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Comprehensive and Strategic Expertise Across the Wood Value Chain
				</p>
			</div>

			{/* Mobile Carousel */}
			<div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
				<div className="flex gap-6 pl-6 pr-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-sm p-6 
                       flex flex-col h-full min-h-[260px] 
                       border border-gray-100 hover:shadow-md transition
                       flex-none w-[85vw] max-w-[320px] snap-start"
						>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed flex-grow">
								{service.description}
							</p>
							<Link
								href={service.href}
								className="text-green-700 font-medium mt-4 inline-flex items-center gap-2"
							>
								Learn more →
							</Link>
						</div>
					))}
				</div>
			</div>

			{/* Desktop Grid */}
			<div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-sm p-6 
                       flex flex-col h-full min-h-[260px] 
                       border border-gray-100 hover:shadow-md transition"
						>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed flex-grow">
								{service.description}
							</p>
							<Link
								href={service.href}
								className="text-green-700 font-medium mt-4 inline-flex items-center gap-2"
							>
								Learn more →
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}