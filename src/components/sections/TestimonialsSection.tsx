"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function TestimonialsSection() {
    return (
        <section className="section-padding bg-brand-light/50">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full mb-4">Testimonials</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark">
                        Trusted by <span className="text-brand-primary">Leaders</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow relative"
                        >
                            <Quote className="w-10 h-10 text-brand-light absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-brand-dark">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}, {t.org}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
