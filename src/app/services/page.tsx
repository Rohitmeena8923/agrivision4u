"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">Our Expertise</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Premium <em className="italic">Solutions</em> for Agriculture
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto mb-8">
                            Empowering stakeholders with data-driven consulting across the entire agricultural value chain.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20 -mt-10">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider mb-2 inline-block shadow-sm">
                                            {service.shortTitle}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-bold text-xl text-charcoal mb-3 line-clamp-2">{service.title}</h3>
                                    <p className="text-sm text-slate leading-relaxed mb-6 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-cream text-charcoal font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                        >
                                            View Details
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                                                <ArrowUpRight className="w-4 h-4 text-charcoal group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-primary rounded-[24px] px-8 sm:px-16 py-16 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Looking for a tailored solution?</h2>
                        <p className="text-white/50 max-w-lg mx-auto mb-8">Connect with our industry experts to discuss your specific requirements.</p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-cream transition-all">
                            Book a Consultation <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0"><ArrowUpRight className="w-3.5 h-3.5 text-primary" /></span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
