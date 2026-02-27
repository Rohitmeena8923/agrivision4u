export const siteConfig = {
    name: "Agrivision4u",
    description: "India's Premier Climate-Agriculture Consultancy — Disaster Management, Climate Data, Carbon Credits, Food Compliance & Agri Waste Solutions",
    url: "https://agrivision4u.com",
    email: "info@agrivision4u.com",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    address: "New Delhi, India",
};

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "Disaster Management", href: "/services/disaster-management", icon: "Shield", desc: "Post-disaster assessment, prediction & drone surveys" },
            { label: "Climate & Environment Data", href: "/services/climate-environment-data", icon: "Database", desc: "Custom data products, DSS & climate analytics" },
            { label: "Climate Finance & CSA", href: "/services/climate-finance-csa", icon: "TrendingUp", desc: "Carbon credits, green finance & CSA advisory" },
            { label: "Food Labelling & Licensing", href: "/services/food-labelling-licensing", icon: "FileCheck", desc: "FSSAI, export compliance & lab testing" },
            { label: "Agri Waste to Value", href: "/services/agri-waste-to-value", icon: "Recycle", desc: "Crop residue, bioenergy & composting solutions" },
        ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
];

export const services = [
    {
        id: "disaster-management",
        title: "Disaster Management Consultancy",
        shortTitle: "Disaster Management",
        description: "AI-powered disaster assessment, climate risk prediction, and drone-based rapid surveys for agricultural resilience.",
        icon: "Shield",
        color: "#E53935",
        href: "/services/disaster-management",
        subServices: [
            { title: "Post-Disaster Assessment", desc: "Satellite + drone + field-based impact and damage assessment using PDNA methodology" },
            { title: "Climate Risk Prediction", desc: "AI/ML models for flood, drought, and landslide forecasting using IMD, CWC, and ISRO data" },
            { title: "Scenario-Based Risk Analysis", desc: "TCFD-aligned climate risk assessment for banks, insurers, and corporates" },
            { title: "Drone-Based Crop Loss Survey", desc: "Rapid damage surveys with multispectral imaging for PMFBY crop insurance claims" },
        ],
        stats: { projects: "50+", states: "15", accuracy: "95%", hectares: "10,000+" },
    },
    {
        id: "climate-environment-data",
        title: "Climate & Environment Data Services",
        shortTitle: "Climate Data",
        description: "Commercial-grade climate and agricultural data products powered by satellite analytics and IoT sensor networks.",
        icon: "Database",
        color: "#0277BD",
        href: "/services/climate-environment-data",
        subServices: [
            { title: "Agricultural Data Products", desc: "Soil health maps, crop monitoring via NDVI/EVI, and agro-meteorological analysis" },
            { title: "Decision Support Systems", desc: "Custom AI-driven DSS for state agriculture departments and agribusinesses" },
            { title: "Drone Survey Data Products", desc: "High-resolution orthomosaics, DSMs, and canopy analysis for precision agriculture" },
            { title: "Climate & Hydrological Data", desc: "Downscaled climate projections, water balance studies, and groundwater mapping" },
        ],
        stats: { datasets: "200+", resolution: "10m", coverage: "Pan-India", clients: "30+" },
    },
    {
        id: "climate-finance-csa",
        title: "Climate Finance & CSA Advisory",
        shortTitle: "Climate Finance",
        description: "End-to-end carbon credit origination, green finance readiness, and climate-smart agriculture implementation advisory.",
        icon: "TrendingUp",
        color: "#F9A825",
        href: "/services/climate-finance-csa",
        subServices: [
            { title: "Carbon Credit Assessment", desc: "Soil carbon sequestration projects under Verra VM0042, Gold Standard, and India CCTS" },
            { title: "Climate Finance Readiness", desc: "GCF, Adaptation Fund, and NABARD project proposals with bankability studies" },
            { title: "ESG & BRSR Reporting", desc: "SEBI BRSR Core compliance, ESG assessments, and sustainability reporting" },
            { title: "CSA Implementation Advisory", desc: "Climate-smart agriculture practices advisory for productivity, resilience, and emission reduction" },
        ],
        stats: { credits: "50,000+", funded: "₹10Cr+", farmers: "5,000+", reports: "25+" },
    },
    {
        id: "food-labelling-licensing",
        title: "Food Labelling & Licensing Consultancy",
        shortTitle: "Food Compliance",
        description: "Comprehensive FSSAI compliance, export certification, and food safety consulting for businesses of all sizes.",
        icon: "FileCheck",
        color: "#5D4037",
        href: "/services/food-labelling-licensing",
        subServices: [
            { title: "FSSAI Licensing & Registration", desc: "Complete support for Basic, State, and Central FSSAI licenses via FoSCoS" },
            { title: "Formulation & Label Compliance", desc: "Product formulation review, labelling compliance, and nutritional analysis" },
            { title: "Export Compliance Advisory", desc: "EU, US FDA, UK FSA compliance and APEDA registration for food exporters" },
            { title: "Lab Testing & Documentation", desc: "NABL lab coordination, annual returns, and regulatory liaison services" },
        ],
        stats: { licenses: "500+", products: "1,000+", markets: "15+", approval: "99%" },
    },
    {
        id: "agri-waste-to-value",
        title: "Agri Waste to Value",
        shortTitle: "Waste Solutions",
        description: "Technology consulting for transforming 500+ MT of annual agricultural waste into bioenergy, compost, and value-added products.",
        icon: "Recycle",
        color: "#2E7D32",
        href: "/services/agri-waste-to-value",
        subServices: [
            { title: "Crop Residue Management", desc: "Technology selection, DPR preparation, and machinery subsidy facilitation" },
            { title: "Bioenergy Solutions", desc: "Biogas/CBG plant advisory under SATAT, biomass power, and 2G ethanol consulting" },
            { title: "Composting & Soil Amendments", desc: "Vermicomposting, in-vessel composting, and organic fertilizer production consulting" },
            { title: "Biomass Supply Chain", desc: "Aggregation models, logistics optimization, and corporate procurement linkages" },
        ],
        stats: { waste: "100K MT", plants: "15+", compost: "5,000 MT", savings: "₹5Cr+" },
    },
];

export const impactStats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 18, suffix: "", label: "States Covered" },
    { value: 50000, suffix: "+", label: "Hectares Assessed" },
    { value: 100000, suffix: "+", label: "Carbon Credits Assessed" },
];

export const testimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Director, Agriculture Department",
        org: "Government of Maharashtra",
        content: "Agrivision4u's disaster assessment during the 2024 floods was exemplary. Their drone + satellite analysis helped us expedite crop loss compensation to over 10,000 farmers within record time.",
        rating: 5,
    },
    {
        name: "Ananya Sharma",
        role: "Chief Sustainability Officer",
        org: "GreenField Agritech Pvt Ltd",
        content: "Their carbon credit advisory helped us implement soil carbon sequestration across 2,000 hectares. The MRV setup was scientific and the credit verification went smoothly with Verra.",
        rating: 5,
    },
    {
        name: "Vikram Patel",
        role: "Founder & CEO",
        org: "FreshBite Foods",
        content: "From FSSAI Central License to EU export compliance — Agrivision4u handled everything. Our product launch timeline shortened by 3 months thanks to their regulatory expertise.",
        rating: 5,
    },
];

export const caseStudies = [
    {
        slug: "maharashtra-flood-assessment",
        title: "Rapid Flood Damage Assessment in Maharashtra",
        vertical: "Disaster Management",
        excerpt: "Deployed satellite + drone surveys across 5 districts to assess crop loss from the 2024 monsoon floods, enabling ₹500 Cr in SDRF disbursement.",
        metrics: { area: "50,000 Ha", farmers: "10,000+", time: "15 Days", accuracy: "96%" },
    },
    {
        slug: "carbon-credit-rajasthan",
        title: "Soil Carbon Credit Project in Rajasthan",
        vertical: "Climate Finance",
        excerpt: "Designed and registered a Verra VM0042 carbon project covering 3,000 hectares of arid agricultural land, generating 15,000 tCO2e/year.",
        metrics: { hectares: "3,000 Ha", credits: "15,000 tCO2e", farmers: "1,200", revenue: "₹45L/yr" },
    },
    {
        slug: "fssai-food-startup",
        title: "Multi-Product FSSAI Compliance for D2C Brand",
        vertical: "Food Compliance",
        excerpt: "End-to-end FSSAI compliance for a D2C food brand launching 28 SKUs across 3 categories, including nutritional testing and export certification.",
        metrics: { skus: "28 Products", markets: "5 Countries", time: "45 Days", compliance: "100%" },
    },
];

export const blogPosts = [
    {
        slug: "india-carbon-credit-market-2026",
        title: "India's Carbon Credit Trading Scheme: What Agriculture Stakeholders Must Know in 2026",
        category: "Climate Finance",
        date: "February 20, 2026",
        readTime: "8 min",
        excerpt: "With CCTS compliance launching mid-2026, agricultural enterprises need to understand how the domestic carbon market will impact their operations and create new revenue streams.",
    },
    {
        slug: "drone-technology-crop-assessment",
        title: "How Drone Technology is Revolutionizing Crop Loss Assessment in India",
        category: "Disaster Management",
        date: "February 15, 2026",
        readTime: "6 min",
        excerpt: "From PMFBY claims to disaster response, multispectral drones are replacing traditional crop cutting experiments with faster, more accurate assessments.",
    },
    {
        slug: "fssai-changes-2026",
        title: "FSSAI Regulation Updates 2026: Key Changes Every Food Business Must Implement",
        category: "Food Compliance",
        date: "February 10, 2026",
        readTime: "5 min",
        excerpt: "A comprehensive guide to recent FSSAI amendments affecting labelling requirements, allergen declarations, and digital compliance workflows.",
    },
];
