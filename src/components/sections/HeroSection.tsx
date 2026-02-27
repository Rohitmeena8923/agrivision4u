"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Satellite, BarChart3, Leaf } from "lucide-react";

export default function HeroSection() {
    const words = ["Empowering", "India's", "Agricultural", "Climate", "Resilience"];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

            <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text */}
                    <div className="lg:col-span-7">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
                            <Leaf className="w-4 h-4 text-brand-accent" />
                            <span className="text-white/80 text-sm font-medium">India&apos;s Premier Climate-Agriculture Consultancy</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                            {words.map((word, i) => (
                                <motion.span
                                    key={word}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                                    className="inline-block mr-3"
                                >
                                    {word === "Climate" ? <span className="text-brand-accent">{word}</span> : word}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-lg sm:text-xl text-white/70 max-w-xl mb-8 leading-relaxed">
                            From disaster assessment and climate data analytics to carbon credit advisory, food compliance, and agricultural waste solutions — we deliver science-based, technology-enabled services across 5 critical verticals.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex flex-col sm:flex-row gap-4">
                            <Link href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 text-lg">
                                Explore Services <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg">
                                Book Free Consultation
                            </Link>
                        </motion.div>
                    </div>

                    {/* Stat Cards */}
                    <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
                        {[
                            { icon: Satellite, label: "States Covered", value: "18+", color: "from-blue-500/20 to-blue-600/10" },
                            { icon: BarChart3, label: "Projects Delivered", value: "500+", color: "from-green-500/20 to-green-600/10" },
                            { icon: Leaf, label: "Hectares Assessed", value: "50,000+", color: "from-yellow-500/20 to-yellow-600/10" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 + i * 0.2, duration: 0.5 }}
                                className={`animate-float bg-gradient-to-r ${stat.color} backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex items-center gap-4`}
                                style={{ animationDelay: `${i * 0.5}s` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-data font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-white/60">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
