"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export default function CaseStudiesSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Our Work</span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">
                            Featured <span className="text-brand-primary">Case Studies</span>
                        </h2>
                    </div>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
                        View All Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={cs.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 flex flex-col justify-end">
                                <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">{cs.vertical}</span>
                                <h3 className="text-white font-display font-bold text-lg leading-tight">{cs.title}</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cs.excerpt}</p>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {Object.entries(cs.metrics).map(([k, v]) => (
                                        <div key={k} className="bg-brand-light/50 rounded-lg p-2.5 text-center">
                                            <p className="text-brand-primary font-data font-bold text-sm">{v}</p>
                                            <p className="text-gray-400 text-xs capitalize">{k}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-3 transition-all">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
