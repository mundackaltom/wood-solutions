import "../src/app/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
import Navbar from "../components/Navbar";
import TopTicker from "../components/TopTicker";
import Footer from "../components/Footer";

export const metadata = {
  title: "Wood Solutions",
  description:
    "Independent Technical, Commercial and Strategic Expertise Across the Wood Value Chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-neutral-800 font-sans">
        <Navbar />
        <TopTicker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
