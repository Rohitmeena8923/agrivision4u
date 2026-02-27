import ServicePageTemplate from "@/components/verticals/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Climate Finance & CSA Advisory",
    description: "End-to-end carbon credit origination, green finance readiness, ESG reporting, and climate-smart agriculture implementation advisory.",
};

export default function ClimateFinancePage() {
    return (
        <ServicePageTemplate
            serviceId="climate-finance-csa"
            methodology={["Baseline Assessment", "Project Design", "Implementation Support", "MRV & Verification"]}
            techTools={["Verra VM0042", "Gold Standard", "CCTS Framework", "SEBI BRSR", "TCFD", "GCF Templates", "MRV Platforms", "Soil Carbon Sampling", "ESG Tools", "RBI CFRES", "GHG Protocol", "CDP Scoring"]}
            faqs={[
                { q: "How many carbon credits can agricultural land generate?", a: "Typically 0.5-1.5 tCO2e per hectare per year through improved soil carbon sequestration practices. A 1,000-hectare project can generate 500-1,500 credits annually, with current India voluntary market prices at ₹200-300/tCO2e." },
                { q: "What is the CCTS and how does it affect agricultural enterprises?", a: "The Carbon Credit Trading Scheme (2023) is India's domestic compliance carbon market managed by BEE. While initially covering 9 industrial sectors, agricultural carbon credits will trade via the voluntary offset mechanism launching mid-2026." },
                { q: "Can you help with SEBI BRSR reporting?", a: "Yes, we provide end-to-end BRSR Core compliance for listed companies, including sustainability metrics quantification, ESG performance assessment, and report preparation aligned with 2024 SEBI guidelines." },
                { q: "What green finance sources can you help access?", a: "We prepare proposals for GCF, Adaptation Fund, NABARD NCCF, bilateral climate funds (GIZ, DFID), and help structure bankability studies for climate-smart agricultural projects." },
                { q: "How long does a carbon credit project take from start to first credits?", a: "Typically 12-18 months from project inception to first verified credits: 3-4 months for design, 6-9 months baseline establishment, and 3-4 months for first verification cycle." },
            ]}
        />
    );
}
