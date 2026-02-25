import { Fondamento } from "next/font/google";
import Link from "next/link";

const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <>
      {/* CTA Bar Above Footer */}
      <section className="bg-green-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-0 text-center md:text-left">
            Ready to discuss your wood project or business challenge?
          </h2>
          <Link
            href="/contact"
            className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors duration-200"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className={`${fondamento.className} text-lg mb-3`}>Wood Solutions</h3>
            <p className="text-sm text-neutral-300 mb-4">
              Independent Expertise Across the Wood Value Chain
            </p>
            <div className="text-sm text-neutral-300">
              <p className="font-semibold text-white mb-1">Coverage</p>
              <p>Bangalore • India • Global Advisory</p>
              <p className="mt-2">Serving clients across India and international markets</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Overview */}
          <div>
            <h4 className="font-semibold mb-3">Services Overview</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/technical-advisory" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Technical Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/sourcing-imports" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Sourcing & Imports
                </Link>
              </li>
              <li>
                <Link href="/services/construction-architecture" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Construction & Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/training-certification" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Training & Certification
                </Link>
              </li>
              <li>
                <Link href="/services/market-insights" className="text-neutral-300 hover:text-green-400 transition-colors duration-200">
                  Market Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Section */}
          <div>
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a 
                  href="mailto:jimmyswoodsolutions@gmail.com" 
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  Email: jimmyswoodsolutions@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919400356060" 
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
                >
                  Phone: +91 9400356060
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/919400356060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                >
                  WhatsApp: Chat Now
                </a>
              </p>
              <div className="mt-3 pt-3 border-t border-neutral-700">
                <p className="text-neutral-400 text-xs">
                  <span className="font-semibold text-neutral-300">Office Hours:</span><br />
                  Mon–Fri, 9:00–18:00 IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 border-t border-neutral-700 text-sm text-neutral-400">
          © 2026 Wood Solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
}
