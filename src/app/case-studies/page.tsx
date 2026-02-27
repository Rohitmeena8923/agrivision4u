"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export default function CaseStudiesPage() {
    const allStudies = [...caseStudies, ...caseStudies];

    return (
        <>
            {/* Hero — Agrotive style */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">Our Work</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Case <em className="italic">Studies</em>
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto">Real-world impact stories from our climate-agriculture consultancy engagements across India.</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured case study */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-4 pb-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Link href={`/case-studies/${allStudies[0]?.slug}`} className="group grid lg:grid-cols-2 gap-0 bg-white rounded-[24px] overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                            <div className="relative h-[280px] lg:h-auto overflow-hidden">
                                <Image src={allStudies[0]?.image || ""} alt={allStudies[0]?.title || ""} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-5 left-5 pill-tag">{allStudies[0]?.vertical}</span>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3 leading-tight group-hover:text-primary transition-colors">{allStudies[0]?.title}</h2>
                                <p className="text-muted leading-relaxed mb-6">{allStudies[0]?.excerpt}</p>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {Object.entries(allStudies[0]?.metrics || {}).slice(0, 2).map(([k, v]) => (
                                        <div key={k} className="bg-cream rounded-xl p-4 text-center">
                                            <p className="text-xl font-data font-bold text-primary">{v}</p>
                                            <p className="text-xs text-muted capitalize mt-1">{k}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="inline-flex items-center gap-2 btn-pill w-fit text-sm">
                                    View Case Study <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* All case studies grid */}
            <section className="section-padding pt-6">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {allStudies.slice(1).map((cs, i) => (
                            <motion.div key={`${cs.slug}-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}>
                                <Link href={`/case-studies/${cs.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="relative h-52 overflow-hidden">
                                        <Image src={cs.image} alt={cs.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute top-4 left-4 pill-tag text-[10px]">{cs.vertical}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">{cs.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed line-clamp-2">{cs.excerpt}</p>
                                        <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-border">
                                            {Object.entries(cs.metrics).slice(0, 2).map(([k, v]) => (
                                                <div key={k}>
                                                    <p className="text-lg font-data font-bold text-primary">{v}</p>
                                                    <p className="text-xs text-muted capitalize">{k}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                            Read more <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
