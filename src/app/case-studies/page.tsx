"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export default function CaseStudiesPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark">
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">Our Work</span>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Case <span className="text-brand-accent">Studies</span></h1>
                        <p className="text-lg text-white/70">Real projects, real impact. Explore how Agrivision4u is transforming climate-agriculture outcomes across India.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...caseStudies, ...caseStudies].map((cs, i) => (
                            <motion.div
                                key={`${cs.slug}-${i}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                            >
                                <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 flex flex-col justify-end">
                                    <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full mb-auto">{cs.vertical}</span>
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
                                        Read Full Case Study <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
