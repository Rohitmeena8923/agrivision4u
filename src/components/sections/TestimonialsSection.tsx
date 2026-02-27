"use client";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function TestimonialsSection() {
    return (
        <section className="section-padding">
            <div className="container-max">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="pill-tag mb-4 inline-block">Testimonials</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            What <em className="italic">Clients</em> Say
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
                    {testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                <span className="text-xs text-muted ml-2">5.0</span>
                            </div>
                            <p className="text-slate italic leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-charcoal">{t.name}</p>
                                    <p className="text-xs text-muted">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
