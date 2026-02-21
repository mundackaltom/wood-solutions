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
	return (
		<section className="bg-neutral-50 py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="mb-14 md:mb-20 text-center">
					<h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
						Who We Serve
					</h2>
					<p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
						Trusted by industry leaders across the wood value chain
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-16">
					{industries.map((industry, idx) => (
						<div
							key={idx}
							className="relative flex items-start md:items-center group"
						>
							<div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-green-700 rounded-full opacity-70" />
							<div className="md:pl-6 pl-0 flex-1">
								<div className="flex items-center mb-2">
									<span className="inline-block h-5 w-5 rounded-full bg-green-700 mr-3 opacity-80" />
									<h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
										{industry.title}
									</h3>
								</div>
								<div className="text-neutral-700 text-base md:text-lg leading-relaxed">
									{industry.description}
								</div>
							</div>
							<div className="md:hidden absolute left-0 top-0 h-5 w-1 bg-green-700 rounded-full opacity-70" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}