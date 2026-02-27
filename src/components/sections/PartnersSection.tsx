"use client";
import { motion } from "framer-motion";

const partners = [
    "NABARD", "NDMA", "World Bank", "UNDP", "GIZ", "ICAR", "FSSAI", "ISRO",
];

export default function PartnersSection() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container-max px-4 sm:px-6 lg:px-8">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-8">
                    Trusted by leading organizations
                </motion.p>
                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                    {partners.map((p, i) => (
                        <motion.div
                            key={p}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-center h-12 px-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-brand-primary/20 transition-colors">
                                <span className="text-sm font-bold text-gray-600 tracking-wide">{p}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
