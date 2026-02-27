"use client";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Rocket, Globe } from "lucide-react";
import CtaSection from "@/components/sections/CtaSection";

const team = [
    { name: "Dr. Rohit Verma", role: "Founder & CEO", expertise: "Climate Science, Remote Sensing, 15+ years" },
    { name: "Priya Sharma", role: "Head of Disaster Management", expertise: "GIS, Hazard Analysis, NDMA consultant" },
    { name: "Arjun Mehta", role: "Climate Finance Lead", expertise: "Carbon Markets, ESG, Verra certified" },
    { name: "Dr. Kavita Nair", role: "Data Science Director", expertise: "ML/AI, Satellite Analytics, PhD IIT" },
    { name: "Suresh Reddy", role: "Food Compliance Head", expertise: "FSSAI, Export Regulations, 10+ years" },
    { name: "Anita Das", role: "Agri Waste Specialist", expertise: "Bioenergy, Composting, IARI trained" },
];

const values = [
    { icon: Target, title: "Scientific Rigor", desc: "Every recommendation backed by peer-reviewed methodologies and verified data" },
    { icon: Eye, title: "Transparency", desc: "Open communication, clear deliverables, and honest assessment of risks and opportunities" },
    { icon: Rocket, title: "Innovation", desc: "Leveraging cutting-edge technology — drones, AI, satellite analytics — for transformative solutions" },
    { icon: Globe, title: "Impact-Driven", desc: "Measuring success by tangible outcomes — hectares restored, credits generated, compliance achieved" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark overflow-hidden">
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">About Us</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Bridging <span className="text-brand-accent">Climate Science</span> & Agriculture
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">We are a team of climate scientists, agricultural experts, data analysts, and regulatory specialists united by a single mission — building India&apos;s agricultural resilience through science-based, technology-enabled solutions.</p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-brand-light rounded-2xl">
                            <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center mb-4">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">To empower agricultural stakeholders with science-based, technology-enabled consultancy services that build climate resilience, unlock green finance, ensure food safety, and transform agricultural waste into value — driving India&apos;s transition to a sustainable, climate-smart agricultural economy.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-brand-dark rounded-2xl">
                            <div className="w-14 h-14 rounded-xl bg-brand-accent flex items-center justify-center mb-4">
                                <Eye className="w-7 h-7 text-brand-dark" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-white/70 leading-relaxed">To become India&apos;s most trusted climate-agriculture intelligence platform — the first call for government agencies, agribusinesses, and development organizations when they need data-driven solutions for disaster resilience, climate analytics, and sustainable agriculture.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50/50">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">Our <span className="text-brand-primary">Values</span></h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-brand-light flex items-center justify-center">
                                    <v.icon className="w-7 h-7 text-brand-primary" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{v.title}</h3>
                                <p className="text-gray-500 text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Our Team</span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">
                            Meet the <span className="text-brand-primary">Experts</span>
                        </h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((m, i) => (
                            <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl font-display mb-4 group-hover:scale-110 transition-transform">
                                    {m.name.charAt(0)}
                                </div>
                                <h3 className="font-display font-bold text-lg text-brand-dark">{m.name}</h3>
                                <p className="text-brand-primary text-sm font-semibold mb-2">{m.role}</p>
                                <p className="text-gray-500 text-sm">{m.expertise}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="section-padding bg-brand-light/50">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-brand-dark">Certifications & <span className="text-brand-primary">Accreditations</span></h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["Verra Approved", "DGCA Licensed Drones", "ISO 14064 Competent", "FSSAI Registered", "NABARD Empaneled", "GIS Certified"].map((cert, i) => (
                            <motion.div key={cert} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-brand-primary/20 shadow-sm">
                                <Award className="w-4 h-4 text-brand-primary" />
                                <span className="text-sm font-semibold text-brand-dark">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
