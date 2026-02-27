"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="relative rounded-[24px] overflow-hidden h-[400px] sm:h-[320px]">
                    <Image src="/images/hero-banner.png" alt="CTA" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-3">
                            Ready to Transform Your<br />Agricultural <em className="italic">Practices?</em>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-lg">Schedule a free 30-minute strategy call with our experts. No obligations, just insights.</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/contact" className="btn-pill text-sm">
                                Start Your Free Trial
                                <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                            </Link>
                            <Link href="/contact" className="btn-pill-outline bg-white/10 border-white/20 text-white hover:bg-white/20 text-sm">
                                Talk to an Expert
                                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0"><ArrowUpRight className="w-3.5 h-3.5 text-white" /></span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
