"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/constants";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
    return (
        <section className="section-padding">
            <div className="container-max">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="pill-tag mb-4 inline-block">Case Studies</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Our <em className="italic">Impact</em>
                        </h2>
                    </motion.div>
                    <div className="flex items-center gap-3">
                        <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="arrow-circle-dark w-12 h-12"><ArrowRight className="w-5 h-5" /></button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {caseStudies.map((cs, i) => (
                        <motion.div key={cs.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <Link href={`/case-studies/${cs.slug}`} className="service-image-card block h-[340px]">
                                <Image src={cs.image} alt={cs.title} fill className="object-cover" />
                                <div className="overlay" />
                                <span className="absolute top-4 left-4 z-10 pill-tag text-[10px]">{cs.vertical}</span>
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cs.title}</h3>
                                    <div className="flex gap-4">
                                        {Object.entries(cs.metrics).slice(0, 2).map(([k, v]) => (
                                            <div key={k}>
                                                <p className="text-lg font-data font-bold text-white">{v}</p>
                                                <p className="text-[10px] text-white/50 uppercase">{k}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
