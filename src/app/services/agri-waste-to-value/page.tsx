import ServicePageTemplate from "@/components/verticals/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agri Waste to Value",
    description: "Technology consulting for transforming agricultural waste into bioenergy, compost, and value-added products. SATAT, GOBARdhan, and CRM scheme advisory.",
};

export default function AgriWastePage() {
    return (
        <ServicePageTemplate
            serviceId="agri-waste-to-value"
            methodology={["Waste Assessment", "Technology Selection", "DPR & Feasibility", "Implementation Support"]}
            techTools={["SATAT Scheme", "GOBARdhan", "Happy Seeder", "PUSA Decomposer", "CBG Technology", "Pelletization", "Pyrolysis", "Vermicomposting", "Biomass Mapping", "Supply Chain GIS", "FCO Compliance", "2G Ethanol"]}
            faqs={[
                { q: "What types of agricultural waste can you help valorize?", a: "We cover all major crop residues (rice straw, wheat straw, sugarcane bagasse, cotton stalks), livestock waste (cattle dung, poultry litter), and fruit/vegetable processing waste. We select the optimal technology based on waste type, volume, and local market conditions." },
                { q: "Can you help access machinery subsidies for residue management?", a: "Yes, we assist in accessing 50-80% subsidy on CRM machinery through state agriculture departments, including Happy Seeder, balers, shredders, and other equipment under the CRM scheme." },
                { q: "What is the SATAT scheme and how can it benefit us?", a: "SATAT (Sustainable Alternative Towards Affordable Transportation) targets 5,000 CBG plants in India. We help prepare DPRs, secure financing, manage compliance, and establish biomass supply chains for CBG plant setup at ₹46-54/kg procurement price." },
                { q: "How much revenue can a biogas/CBG plant generate?", a: "A typical 5 tonnes/day CBG plant can generate ₹8-12 Cr annual revenue with 20-30% margins. We provide detailed techno-economic feasibility studies as part of our advisory." },
                { q: "Do you help with composting projects?", a: "Yes, we provide end-to-end consulting for windrow, in-vessel, and vermicomposting projects, including technology selection, FCO compliance, organic certification, and market linkage for finished compost products." },
            ]}
        />
    );
}
