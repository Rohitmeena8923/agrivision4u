"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ChevronDown, Shield, Database, TrendingUp, FileCheck, Recycle, CheckCircle } from "lucide-react";
import { services } from "@/lib/constants";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = { Shield, Database, TrendingUp, FileCheck, Recycle };

interface ServicePageProps {
    serviceId: string;
    methodology: string[];
    faqs: { q: string; a: string }[];
    techTools: string[];
}

export default function ServicePageTemplate({ serviceId, methodology, faqs, techTools }: ServicePageProps) {
    const service = services.find(s => s.id === serviceId)!;
    const Icon = iconMap[service.icon] || Shield;
    const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* Hero — Agrotive style: topo bg, centered text, no image */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted mb-6">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-charcoal font-medium">{service.shortTitle}</span>
                        </div>
                        <span className="pill-tag mb-6 inline-block">{service.shortTitle}</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
                            {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                            <em className="italic">{service.title.split(" ").slice(-1)}</em>
                        </h1>
                        <p className="text-lg text-muted mt-5 max-w-2xl mx-auto leading-relaxed">{service.description}</p>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            <Link href="/contact" className="btn-pill text-sm">
                                Book Consultation <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                            </Link>
                            <Link href="#methodology" className="btn-pill-outline text-sm">
                                Our Approach <span className="arrow-circle-dark w-7 h-7"><ArrowRight className="w-3.5 h-3.5" /></span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats — Rounded card */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-4 pb-6">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-primary rounded-[24px] px-8 sm:px-16 py-14">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {Object.entries(service.stats).map(([key, val], i) => (
                                <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <p className="text-3xl sm:text-4xl font-data font-bold text-white">{val}</p>
                                    <p className="text-white/50 text-sm mt-1 capitalize">{key}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Image Hero */}
            <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="container-max">
                    <div className="relative rounded-[24px] overflow-hidden h-[300px] sm:h-[400px]">
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section id="methodology" className="section-padding">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <span className="pill-tag mb-4 inline-block">Our Approach</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            How We <em className="italic">Work</em>
                        </h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {methodology.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center font-data font-bold text-white text-lg bg-primary">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h3 className="font-bold text-charcoal text-lg">{step}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Services */}
            <section className="section-padding pt-0">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <span className="pill-tag mb-4 inline-block">What We Offer</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Our <em className="italic">Sub-Services</em>
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {service.subServices.map((sub, i) => (
                            <motion.div key={sub.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-accent group-hover:bg-primary transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-charcoal mb-2">{sub.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">{sub.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Tools — pill tags like partners */}
            <section className="px-4 sm:px-6 lg:px-8 pb-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-white rounded-[24px] p-12 border border-border text-center">
                        <span className="pill-tag mb-4 inline-block">Technology Stack</span>
                        <h3 className="text-2xl font-bold text-charcoal mb-8">Tools & Technology</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techTools.map((tool, i) => (
                                <motion.span key={tool} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                                    className="px-6 py-2.5 rounded-full bg-cream border border-border text-sm font-medium text-slate hover:bg-accent hover:text-primary hover:border-accent transition-all cursor-default">
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding">
                <div className="container-max max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <span className="pill-tag mb-4 inline-block">FAQ</span>
                        <h2 className="text-4xl font-bold tracking-tight">
                            Common <em className="italic">Questions</em>
                        </h2>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="faq-item rounded-2xl">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left">
                                    <span className="font-semibold text-charcoal pr-4">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : ""}`} />
                                </button>
                                {openFaq === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mt-3 pt-3 border-t border-border/50">
                                        <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section-padding pt-0">
                <div className="container-max">
                    <h2 className="text-3xl font-bold text-charcoal mb-8">Related <em className="italic">Services</em></h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {relatedServices.map((rs) => (
                            <Link key={rs.id} href={rs.href} className="service-image-card group block h-[280px]">
                                <Image src={rs.image} alt={rs.shortTitle} fill className="object-cover" />
                                <div className="overlay" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                    <h3 className="text-lg font-bold text-white">{rs.shortTitle}</h3>
                                    <p className="text-sm text-white/60 line-clamp-2 mt-1">{rs.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA — Rounded card */}
            <section className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="relative rounded-[24px] overflow-hidden h-[320px]">
                        <Image src={service.image} alt="CTA" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                                Ready to Get <em className="italic">Started?</em>
                            </h2>
                            <p className="text-white/60 mb-8 max-w-lg">Book a free consultation with our {service.shortTitle} experts today.</p>
                            <Link href="/contact" className="btn-pill text-sm">
                                Book Consultation <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
