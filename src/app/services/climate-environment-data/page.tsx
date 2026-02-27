import ServicePageTemplate from "@/components/verticals/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Climate & Environment Data Services",
    description: "Commercial-grade climate and agricultural data products powered by satellite analytics, IoT sensors, and AI-driven decision support systems.",
};

export default function ClimateDataPage() {
    return (
        <ServicePageTemplate
            serviceId="climate-environment-data"
            methodology={["Data Scoping", "Multi-Source Integration", "Analytics & Modeling", "Product Delivery"]}
            techTools={["Google Earth Engine", "ERA5 Climate Data", "CHIRPS Rainfall", "SoilGrids", "NDVI/EVI Analysis", "Python GeoPandas", "PostGIS", "Mapbox GL", "IoT Sensors", "DSSAT", "AquaCrop", "Sentinel Hub"]}
            faqs={[
                { q: "What types of data products do you offer?", a: "We provide soil health maps, crop monitoring indices, agro-meteorological analysis, drone survey products (orthomosaics, DSMs), climate projections, hydrological assessments, and custom decision support dashboards." },
                { q: "What spatial resolution can your data products achieve?", a: "Our satellite products deliver 10m resolution (Sentinel-2), drone products achieve 2-5cm GSD, and climate data is available at 0.25° gridded resolution. Custom downscaling to block/district level is available." },
                { q: "Do you provide ongoing data subscriptions?", a: "Yes, we offer annual subscription plans for continuous monitoring data products, including seasonal crop health reports, weather anomaly alerts, and groundwater status updates." },
                { q: "Can you build custom Decision Support Systems?", a: "Absolutely. We develop custom DSS platforms for state agriculture departments and agribusinesses, integrating satellite data, weather forecasts, soil information, and AI-powered crop recommendations." },
                { q: "What data formats do you deliver in?", a: "We deliver in industry-standard formats: GeoTIFF, Shapefile, KMZ, CSV, and interactive web dashboards. API access is available for enterprise clients." },
            ]}
        />
    );
}
