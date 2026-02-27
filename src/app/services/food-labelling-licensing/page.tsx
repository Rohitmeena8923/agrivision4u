import ServicePageTemplate from "@/components/verticals/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Food Labelling & Licensing Consultancy",
    description: "Comprehensive FSSAI compliance, export certification, formulation review, and food safety consulting for businesses of all sizes in India.",
};

export default function FoodCompliancePage() {
    return (
        <ServicePageTemplate
            serviceId="food-labelling-licensing"
            methodology={["Compliance Audit", "Gap Analysis", "Documentation & Filing", "License Secured"]}
            techTools={["FoSCoS Platform", "FSSAI Regulations 2011", "NABL Labs", "EU Novel Food", "US FDA 21 CFR", "APEDA Portal", "NPOP Organic", "NOP Certification", "Nutritional Analysis", "Allergen Testing", "HACCP Framework", "ISO 22000"]}
            faqs={[
                { q: "What types of FSSAI licenses do you handle?", a: "We handle all three tiers: Basic Registration (< ₹12L turnover), State License (₹12L-20Cr), and Central License (> ₹20Cr). We also manage modifications, renewals, and product approvals through the FoSCoS platform." },
                { q: "How long does FSSAI licensing take?", a: "Basic Registration: 7-15 days. State License: 30-60 days. Central License: 60-90 days. Our streamlined process and error-free documentation help achieve the fastest possible turnaround." },
                { q: "Can you help with food export compliance?", a: "Yes, we provide end-to-end export compliance for EU, USA, UK, and other markets, including IEC registration, APEDA certification, product-specific compliance, and international lab testing coordination." },
                { q: "Do you offer organic certification support?", a: "We guide businesses through NPOP (India), NOP (US market), and EU Organic certification processes, including audit preparation, documentation, and ongoing compliance management." },
                { q: "What about novel foods and nutraceuticals?", a: "We have specialized expertise in FSSAI's nutraceutical, health supplement, and novel food regulations. We guide product categorization, proprietary food applications, and compliance documentation." },
                { q: "How much does your food compliance service cost?", a: "Basic FSSAI registration assistance starts at ₹5,000. Complete compliance packages range from ₹15,000-5,00,000 depending on complexity. Annual compliance management subscriptions are available from ₹25,000/year." },
            ]}
        />
    );
}
