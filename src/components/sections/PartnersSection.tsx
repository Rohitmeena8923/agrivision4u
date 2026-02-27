"use client";
import { motion } from "framer-motion";

const partners = ["NABARD", "NDMA", "World Bank", "UNDP", "GIZ", "ICAR", "FSSAI", "ISRO", "FAO", "IMD"];

export default function PartnersSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-10">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white rounded-[24px] p-12 border border-border text-center">
                    <span className="pill-tag mb-4 inline-block">Trusted Partners</span>
                    <h3 className="text-2xl font-bold text-charcoal mb-8">Organizations We Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {partners.map((p, i) => (
                            <motion.span key={p} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                                className="px-6 py-2.5 rounded-full bg-cream border border-border text-sm font-medium text-slate hover:bg-accent hover:text-primary hover:border-accent transition-all cursor-default">
                                {p}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
