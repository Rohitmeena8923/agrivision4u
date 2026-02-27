"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Database, TrendingUp, FileCheck, Recycle } from "lucide-react";
import { services } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Database, TrendingUp, FileCheck, Recycle };

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Our Expertise</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
                        Five Verticals.<br /><span className="text-brand-primary">One Integrated Platform.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">Comprehensive climate-agriculture consultancy covering every aspect of India&apos;s agricultural transformation.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = iconMap[service.icon] || Shield;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${i >= 3 ? "lg:col-span-1" : ""}`}
                            >
                                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full transition-all duration-300 group-hover:w-1.5" style={{ backgroundColor: service.color }} />
                                <div className="pl-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: `${service.color}15` }}>
                                        <Icon className="w-7 h-7" style={{ color: service.color }} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-brand-dark mb-2">{service.shortTitle}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <Link href={service.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
