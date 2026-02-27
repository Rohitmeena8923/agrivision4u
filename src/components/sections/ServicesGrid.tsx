"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding">
            <div className="container-max">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="pill-tag mb-4 inline-block">Services Section</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            What We <em className="italic">Offer</em>
                        </h2>
                    </motion.div>
                    <div className="flex items-center gap-3">
                        <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="arrow-circle-dark w-12 h-12">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Service cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.slice(0, 4).map((service, i) => (
                        <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <Link href={service.href} className="service-image-card block">
                                <Image src={service.image} alt={service.shortTitle} fill className="object-cover" />
                                <div className="overlay" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                    <h3 className="text-lg font-bold text-white mb-1">{service.shortTitle}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{service.description.slice(0, 80)}.</p>
                                </div>
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Fifth service — wide card */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mt-5">
                    <Link href={services[4]?.href || "#"} className="relative block rounded-[20px] overflow-hidden h-[240px] group">
                        <Image src={services[4]?.image || "/images/hero-banner.png"} alt={services[4]?.shortTitle || "Service"} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 z-10 max-w-lg">
                            <h3 className="text-2xl font-bold text-white mb-2">{services[4]?.shortTitle}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{services[4]?.description}</p>
                        </div>
                        <div className="absolute bottom-6 right-6 z-10">
                            <span className="btn-pill text-sm">View Service <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span></span>
                        </div>
                    </Link>
                </motion.div>

                {/* See All button */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
                    <Link href="/#services" className="btn-pill-outline">
                        See All Services
                        <span className="arrow-circle-dark w-8 h-8"><ArrowUpRight className="w-4 h-4" /></span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
