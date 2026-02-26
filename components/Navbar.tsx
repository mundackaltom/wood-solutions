"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Fondamento } from "next/font/google";
import { Amaranth } from "next/font/google";

const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleLinkClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand Section */}
        <Link href="/" className="flex items-center gap-3 h-full">
          {/* Logo Container */}
          <div className="flex items-center h-full overflow-hidden">
            <Image
              src="/images/LogoFinalBG.png"
              alt="Wood Solutions Logo"
              width={80} // Increased width
              height={80} // Increased height
              className="max-h-[56px] w-auto object-contain" // Further increased max height for better visibility
              priority
            />
          </div>

          {/* Brand Text */}
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg text-green-800">
              Wood Solutions
            </span>
            <span className="font-amaranth text-xs text-gray-700">
              Your Wood Technology Partner
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-700">
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={servicesRef}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="hover:text-green-700 focus:outline-none"
            >
              Services
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 transform transition-all duration-200 ease-out ${
                isServicesOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                href="/services/technical-advisory"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Technical Advisory & Quality Evaluation
              </Link>
              <Link
                href="/services/sourcing-imports"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Sourcing & Imports
              </Link>
              <Link
                href="/services/construction-architecture"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Construction & Architecture
              </Link>
              <Link
                href="/services/training-certification"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Training, Certification & Compliance
              </Link>
              <Link
                href="/services/market-insights"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Market Insights & Brand Consultancy
              </Link>
            </div>
          </div>
          <Link href="/expertise" className="hover:text-green-700">
            Expertise
          </Link>
          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-green-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Request Consultation
        </Link>

        <button
          className="md:hidden text-green-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40">
          <nav className="flex flex-col items-center py-4 space-y-4 font-medium">
            <Link
              href="/"
              className="hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-green-700 focus:outline-none"
              >
                Services
              </button>
              <div
                className={`mt-2 bg-white shadow-lg rounded-md py-2 w-full transform transition-all duration-200 ease-out ${
                  isServicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services/technical-advisory"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Technical Advisory & Quality Evaluation
                </Link>
                <Link
                  href="/services/sourcing-imports"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Sourcing & Imports
                </Link>
                <Link
                  href="/services/construction-architecture"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Construction & Architecture
                </Link>
                <Link
                  href="/services/training-certification"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Training, Certification & Compliance
                </Link>
                <Link
                  href="/services/market-insights"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Market Insights & Brand Consultancy
                </Link>
              </div>
            </div>
            <Link
              href="/expertise"
              className="hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-green-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
