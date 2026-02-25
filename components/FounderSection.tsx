import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-14">

        {/* ===== TOP: PHOTO + NAME ===== */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* PHOTO */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
              <Image
                src="/images/jimmy.jpg"
                alt="Dr Jimmy Thomas"
                width={256}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* NAME + TITLE */}
          <div className="md:col-span-2">

            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900">
              Dr Jimmy Thomas
            </h2>

            <p className="mt-2 text-lg text-neutral-600 text-justify">
              Consulting Wood Technologist, Founder & Director
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed text-justify">
              One of India's most respected and pioneering professionals in the
              field of Wood Science and Technology, with over 27 years of
              experience across the entire wood value chain.
            </p>

          </div>
        </div>

        {/* ===== HIGHLIGHTS GRID ===== */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-neutral-50 p-5 rounded-lg">
            <h4 className="font-semibold text-neutral-900">
              Education
            </h4>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
              M.Sc. Wood Science & Technology (First Rank), FRI Dehradun • PhD,
              University of Canterbury, New Zealand • Executive Programme,
              IIM Calcutta
            </p>
          </div>

          <div className="bg-neutral-50 p-5 rounded-lg">
            <h4 className="font-semibold text-neutral-900">
              International Training
            </h4>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
              Forest Products Laboratory, Wisconsin (USA) • University of
              British Columbia, Vancouver (Canada)
            </p>
          </div>

          <div className="bg-neutral-50 p-5 rounded-lg">
            <h4 className="font-semibold text-neutral-900">
              Leadership Roles
            </h4>
            <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
              Former Assistant Director – Technical Services, Canadian Wood •
              Former Wood Technologist & Lab Manager, Rubber Board of India
            </p>
          </div>

        </div>

        {/* Founder Details + Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-start">

          {/* TEXT BLOCK */}
          <div className="lg:col-span-2 space-y-4 text-justify">
            <p>
              Dr Thomas served for 16 years as Wood Technologist & Laboratory Manager at the Central Wood Testing Laboratory
              of the Rubber Board, Government of India, and for over 9 years as Assistant Director – Technical Services with
              Canadian Wood, the Government of British Columbia's official wood promotion agency in India.
            </p>

            <p>
              He is the Vice President and a Fellow of the Indian Academy of Wood Science and an Advisor to the Government of Kerala.
            </p>

            <p>
              He is also a member of the Research Advisory Group at IWST Bangalore, the Board of Studies at FRI Deemed University,
              and has served on BIS committees contributing to the National Building Code.
            </p>

            <p>
              A strong advocate for science-driven industry development, Dr Thomas has authored over 10 peer-reviewed research papers,
              a book chapter, and numerous international conference papers.
            </p>

            <p className="font-semibold">
              He is an author, trainer, researcher and passionate ambassador for the future of sustainable wood use in India and beyond.
            </p>
          </div>

          {/* RIGHT-SIDE LOGO */}
          <div className="flex justify-center items-start lg:items-center h-full pt-6">
            <img
              src="/images/LogoFinalBG.png"
              alt="Wood Solutions Logo"
              className="w-44 h-auto opacity-95 translate-x-1"
            />
          </div>

        </div>

      </div>
    </section>
  );
}