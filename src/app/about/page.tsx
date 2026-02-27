"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Brain, Heart, Cpu, ShieldCheck, Globe, Users, Award, ArrowUpRight } from "lucide-react";

const values = [
    { icon: Brain, title: "Scientific Rigor", desc: "Evidence-based methodologies grounded in peer-reviewed research and field validation." },
    { icon: Heart, title: "Community First", desc: "Our work directly benefits millions of smallholder farmers across India." },
    { icon: Cpu, title: "Innovation", desc: "Leveraging satellite analytics, AI, drones, and IoT for transformative solutions." },
    { icon: ShieldCheck, title: "Integrity", desc: "Transparent reporting, ethical practices, and unbiased analysis in every engagement." },
    { icon: Globe, title: "Sustainability", desc: "Every recommendation considers long-term environmental and social impact." },
    { icon: Users, title: "Collaboration", desc: "Working with governments, NGOs, and private sector for systemic change." },
];

const team = [
    { name: "Dr. Rajesh Kumar", role: "Founder & CEO", area: "Climate Science & Policy" },
    { name: "Priya Sharma", role: "Head of Operations", area: "AgriTech & Data" },
    { name: "Amit Patel", role: "Lead Consultant", area: "Carbon Markets & ESG" },
    { name: "Dr. Sunita Verma", role: "Senior Advisor", area: "Food Safety & Compliance" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero — Agrotive style */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">About Us</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Building India&apos;s Climate-Agriculture <em className="italic">Future</em>
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto">Empowering India&apos;s agricultural ecosystem through science, technology, and sustainable consultancy.</p>
                    </motion.div>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-4 pb-10">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 gap-5">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-white rounded-2xl p-10 border border-border hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h2>
                            <p className="text-muted leading-relaxed">
                                To deliver science-based, technology-enabled consultancy services that strengthen India&apos;s agricultural resilience against climate change — making climate adaptation accessible, actionable, and measurable for every stakeholder.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-primary rounded-2xl p-10 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-white/60 leading-relaxed">
                                To become India&apos;s most trusted Climate-Agriculture platform by 2030 — recognized for transforming how farmers, agribusinesses, and governments build resilience through integrated consultancy, data, and finance solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Image */}
            <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="container-max">
                    <div className="relative rounded-[24px] overflow-hidden h-[300px] sm:h-[400px]">
                        <Image src="/images/hero-banner.png" alt="About Agrivision4u" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 max-w-sm">
                                <p className="font-bold text-charcoal text-lg">10+ Years of Excellence</p>
                                <p className="text-sm text-muted">India&apos;s premier climate-agriculture consultancy serving 18 states.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <span className="pill-tag mb-4 inline-block">Core Values</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            What <em className="italic">Drives</em> Us
                        </h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {values.map((v, i) => (
                            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <v.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">{v.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding pt-0">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <span className="pill-tag mb-4 inline-block">Our People</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Leadership <em className="italic">Team</em>
                        </h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {team.map((member, i) => (
                            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl mb-5">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="font-bold text-charcoal">{member.name}</h3>
                                <p className="text-sm text-primary mt-1 font-semibold">{member.role}</p>
                                <p className="text-xs text-muted mt-1">{member.area}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="px-4 sm:px-6 lg:px-8 pb-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-white rounded-[24px] p-12 border border-border text-center">
                        <span className="pill-tag mb-4 inline-block">Credentials</span>
                        <h3 className="text-2xl font-bold text-charcoal mb-8">Certifications & Accreditations</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["ISO 9001:2015", "NDMA Empaneled", "NABARD Accredited", "FSSAI Certified", "Verra VCS Approved", "Gold Standard"].map((cert, i) => (
                                <motion.span key={cert} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className="px-6 py-2.5 rounded-full bg-cream border border-border text-sm font-medium text-slate hover:bg-accent hover:text-primary hover:border-accent transition-all cursor-default flex items-center gap-2">
                                    <Award className="w-4 h-4" /> {cert}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-primary rounded-[24px] px-8 sm:px-16 py-16 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Work With Us</h2>
                        <p className="text-white/50 max-w-lg mx-auto mb-8">Join 500+ organizations trusting Agrivision4u for climate-agriculture excellence.</p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-cream transition-all">
                            Get in Touch <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0"><ArrowUpRight className="w-3.5 h-3.5 text-primary" /></span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
