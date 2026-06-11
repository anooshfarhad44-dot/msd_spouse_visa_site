import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family and Spouse Visa Solicitors in Manchester | MSD Solicitors",
  description:
    "MSD Solicitors provide UK spouse family visa, entry clearance and immigration application support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} h-full`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-[#182d32] overflow-x-hidden"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
