"use client";
import { motion } from "framer-motion";
import { Database, FlaskConical, Scale, Users, Zap, Globe } from "lucide-react";

const features = [
    { icon: Database, title: "Data-Driven", desc: "Every recommendation backed by satellite analytics, AI models, and field-verified evidence" },
    { icon: FlaskConical, title: "Field-Proven", desc: "Methodologies tested across 18 states with government agencies, corporates, and international organizations" },
    { icon: Scale, title: "Policy-Aligned", desc: "Services designed around NDMA, FSSAI, SEBI BRSR, RBI CFRES, and international frameworks like TCFD" },
    { icon: Zap, title: "Tech-Enabled", desc: "Drones, GIS, AI/ML, IoT sensors, and satellite imagery integrated into every service vertical" },
    { icon: Users, title: "Stakeholder-Centric", desc: "Tailored solutions for government, corporate, NGO, and startup clients with flexible engagement models" },
    { icon: Globe, title: "Globally Connected", desc: "International methodology standards (Verra, Gold Standard, GCF) with deep local agricultural expertise" },
];

export default function WhySection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
                        Why <span className="text-brand-primary">Agrivision4u</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">A unique blend of scientific rigor, technological firepower, and field experience that sets us apart.</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group text-center p-8 rounded-2xl hover:bg-brand-light transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-brand-light group-hover:bg-brand-primary flex items-center justify-center transition-colors">
                                <f.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-brand-dark mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
