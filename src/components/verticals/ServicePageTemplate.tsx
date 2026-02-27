"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Database, TrendingUp, FileCheck, Recycle, CheckCircle } from "lucide-react";
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
    const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 2);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: `linear-gradient(135deg, #0D1B0F 0%, ${service.color}33 50%, #0D1B0F 100%)` }}>
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-white">{service.shortTitle}</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${service.color}30` }}>
                            <Icon className="w-8 h-8" style={{ color: service.color }} />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">{service.title}</h1>
                        <p className="text-xl text-white/70 leading-relaxed">{service.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-b border-gray-100">
                <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(service.stats).map(([key, val], i) => (
                            <motion.div key={key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="text-center">
                                <p className="text-2xl font-data font-bold" style={{ color: service.color }}>{val}</p>
                                <p className="text-gray-500 text-sm capitalize">{key}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Our Approach</span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">How We <span className="text-brand-primary">Work</span></h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodology.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: service.color }}>
                                    {i + 1}
                                </div>
                                <h3 className="font-display font-bold text-brand-dark mb-2">{step}</h3>
                                {i < methodology.length - 1 && <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gray-200" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Services */}
            <section className="section-padding bg-gray-50/50">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">Our <span className="text-brand-primary">Sub-Services</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {service.subServices.map((sub, i) => (
                            <motion.div key={sub.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: `${service.color}15` }}>
                                        <CheckCircle className="w-5 h-5" style={{ color: service.color }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-brand-dark mb-2">{sub.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{sub.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technology */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-brand-dark">Tools & <span className="text-brand-primary">Technology</span></h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techTools.map((tool, i) => (
                            <motion.span key={tool} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="px-5 py-2.5 bg-brand-light rounded-full text-sm font-medium text-brand-dark border border-brand-primary/10 hover:bg-brand-primary hover:text-white transition-colors cursor-default">
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-gray-50/50">
                <div className="container-max max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-brand-dark">Frequently Asked <span className="text-brand-primary">Questions</span></h2>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                                    <span className="font-semibold text-brand-dark pr-4">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                                </button>
                                {openFaq === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                                        <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Verticals */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-brand-dark">Related <span className="text-brand-primary">Services</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {relatedServices.map((rs) => {
                            const RSIcon = iconMap[rs.icon] || Shield;
                            return (
                                <Link key={rs.id} href={rs.href} className="group flex items-start gap-4 p-6 bg-brand-light/50 rounded-2xl hover:bg-brand-light transition-colors">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${rs.color}20` }}>
                                        <RSIcon className="w-6 h-6" style={{ color: rs.color }} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{rs.shortTitle}</h3>
                                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{rs.description}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary shrink-0 mt-1 transition-colors" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-primary/80">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Ready to get started?</h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">Book a free consultation with our {service.shortTitle} experts today.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl">
                        Book Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
