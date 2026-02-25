const credentials = [
	{
		title: "International Standards & Compliance",
		description:
			"Deep working knowledge of global wood and construction standards including ISO, ASTM, EN, BIS and certification frameworks such as FSC, PEFC, PRAMAN and EUDR.",
	},
	{
		title: "Industry Recognition & Implementation Experience",
		description:
			"Trusted by manufacturers, developers, architects, importers and institutions across the wood value chain for independent technical guidance.",
	},
	{
		title: "Scientific & Knowledge Leadership",
		description:
			"Strong foundation in wood science, material performance and applied research, with contributions to technical publications, industry platforms and knowledge dissemination.",
	},
	{
		title: "Global Academic & Industry Network",
		description:
			"Extensive network of universities, research laboratories, professional and certification bodies, manufacturers, designers and supply partners across international markets.",
	},
];

export default function TrustCredentials() {
	return (
		<section className="py-8 md:py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-center mb-6 md:mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Trust & Credentials
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Independent expertise grounded in science, standards and industry
						practice.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{credentials.map((credential, index) => (
						<div
							key={index}
							className="text-center p-6 bg-gray-50 rounded-lg"
						>
							<div className="flex justify-center mb-4">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<div className="w-6 h-6 bg-green-700 rounded"></div>
								</div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								{credential.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed text-justify">
								{credential.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}