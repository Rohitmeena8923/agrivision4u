"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Leaf, Shield, BarChart3, Cpu, Globe, Award } from "lucide-react";

const features = [
    { icon: Leaf, title: "Sustainable Approach", desc: "Eco-friendly methods designed for long-term environmental and economic benefits." },
    { icon: Shield, title: "Certified Expertise", desc: "NDMA, NABARD, and ISO accredited consulting team with 10+ years." },
    { icon: BarChart3, title: "Data-Driven Insights", desc: "Satellite, drone, and IoT-powered analytics for precision decision-making." },
    { icon: Cpu, title: "Technology Integration", desc: "AI-powered crop assessment, automated climate monitoring, and smart reporting." },
    { icon: Globe, title: "Pan-India Coverage", desc: "Projects across 18 states with localized climate data and regional expertise." },
    { icon: Award, title: "Proven Track Record", desc: "500+ projects completed with measurable agricultural outcomes." },
];

export default function WhySection() {
    return (
        <section className="section-padding">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                    <span className="pill-tag mb-4 inline-block">Key Features</span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Why Choose <em className="italic">Agrivision4u?</em>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 items-start">
                    {/* Left — Image */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="relative rounded-[24px] overflow-hidden h-[500px]">
                        <Image src="/images/hero-banner.png" alt="Climate Agriculture" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                                    <Leaf className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-charcoal text-lg">10+ Years</p>
                                    <p className="text-sm text-muted">of climate-agriculture excellence</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Feature grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-6 border border-border hover:border-accent-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <f.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-bold text-charcoal mb-1.5">{f.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
