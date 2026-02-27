"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#0f2b11] to-brand-dark" />
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(249,168,37,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(46,125,50,0.3) 0%, transparent 50%)" }} />
            <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-brand-accent" />
                        <span className="text-brand-accent text-sm font-semibold">Let&apos;s Build Resilience Together</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white max-w-3xl mx-auto mb-6 leading-tight">
                        Ready to future-proof your <span className="text-brand-accent">agricultural operations?</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                        Schedule a free consultation with our climate-agriculture experts and discover how data-driven solutions can transform your outcomes.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-brand-accent text-brand-dark font-bold rounded-full text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20">
                        Schedule a Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
