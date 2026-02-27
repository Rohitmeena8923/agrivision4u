import ServicePageTemplate from "@/components/verticals/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disaster Management Consultancy",
    description: "AI-powered disaster assessment, climate risk prediction, and drone-based rapid surveys for agricultural resilience across India. NDMA-aligned methodologies.",
};

export default function DisasterManagementPage() {
    return (
        <ServicePageTemplate
            serviceId="disaster-management"
            methodology={["Rapid Assessment", "Data Collection", "Impact Analysis", "Action Report"]}
            techTools={["Sentinel-2 SAR", "Google Earth Engine", "DJI Matrice", "QGIS", "Python ML", "IMD Data", "CWC Analytics", "BHUVAN Portal", "LiDAR", "Multispectral Imaging", "PDNA Framework", "TCFD"]}
            faqs={[
                { q: "How quickly can you deploy for post-disaster assessment?", a: "We can initiate satellite-based rapid assessment within 24 hours and deploy drone teams within 72 hours for ground verification. Our field teams are pre-positioned in disaster-prone states." },
                { q: "What accuracy do your drone-based crop loss surveys achieve?", a: "Our multispectral drone surveys achieve 95%+ accuracy in crop damage classification, validated against ground-truth data. This exceeds traditional Crop Cutting Experiment accuracy." },
                { q: "Do you work with government agencies?", a: "Yes, we are empaneled with multiple state disaster management authorities and work regularly with NDMA, SDMAs, and district administrations for disaster assessment and planning." },
                { q: "What areas do your climate risk prediction models cover?", a: "Our models cover floods, droughts, landslides, and cyclone impacts across all Indian states. We use IMD, CWC, ISRO, and NASA data sources for comprehensive predictions." },
                { q: "Is your work aligned with PMFBY crop insurance requirements?", a: "Yes, our drone-based surveys are specifically designed to meet PMFBY evidence requirements for crop loss claims, working with insurance companies and state agriculture departments." },
            ]}
        />
    );
}
