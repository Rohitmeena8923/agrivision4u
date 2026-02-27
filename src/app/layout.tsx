import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-data", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Agrivision4u — India's Premier Climate-Agriculture Consultancy", template: "%s | Agrivision4u" },
  description: "India's most trusted Climate-Agriculture Consultancy covering Disaster Management, Climate Data Services, Carbon Credit Advisory, Food Compliance & Agri Waste Solutions.",
  keywords: ["climate agriculture consultancy India", "disaster management consulting", "carbon credit advisory", "FSSAI consultancy", "agri waste management", "climate data services", "climate smart agriculture"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agrivision4u.com",
    siteName: "Agrivision4u",
    title: "Agrivision4u — India's Premier Climate-Agriculture Consultancy",
    description: "Disaster Management, Climate Data, Carbon Credits, Food Compliance & Agri Waste Solutions across 18+ Indian states.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
