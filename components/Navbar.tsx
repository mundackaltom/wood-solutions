"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-green-900">
          Wood Solutions
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-green-900 text-white px-4 py-2 rounded"
        >
          Request Consultation
        </Link>
      </div>
    </header>
  );
}
