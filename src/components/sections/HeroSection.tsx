"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FFF4EC] topo-bg pt-20 pb-10">
            <div className="container-max px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Headline & copy */}
                    <div className="flex flex-col items-start justify-center text-left z-10 max-w-xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="font-display text-[2.75rem] sm:text-[3.5rem] xl:text-[4.2rem] font-bold leading-[1.05] tracking-tight text-charcoal mb-4"
                        >
                            Building a<br />
                            <span className="text-primary italic">Climate-Ready</span><br />
                            Tomorrow.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-8 font-sans"
                        >
                            Expert consulting in disaster management, agri-waste technology,
                            and data-driven sustainability strategies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4 mb-10"
                        >
                            {/* CTA buttons — pill shaped with arrow circles */}
                            <Link href="/#services" className="btn-pill text-sm sm:text-base">
                                Explore Our Solutions
                                <span className="arrow-circle"><ArrowUpRight className="w-4 h-4" /></span>
                            </Link>
                            <Link href="/contact" className="btn-pill-outline text-sm sm:text-base bg-white/50 backdrop-blur-sm">
                                Get a Free Consultation
                                <span className="arrow-circle-dark w-8 h-8"><ArrowUpRight className="w-4 h-4" /></span>
                            </Link>
                        </motion.div>

                        {/* Trust badges - Original Style */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                            className="flex flex-wrap items-center gap-5 text-sm text-charcoal/80 font-medium">
                            {["500+ Projects", "18 States", "50K+ Hectares"].map((stat) => (
                                <span key={stat} className="flex items-center gap-1.5">
                                    <CheckCircle className="w-4 h-4 text-primary" /> {stat}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Masonry Grid */}
                    <div className="grid grid-cols-2 gap-3 lg:gap-4 relative w-full mt-8 lg:mt-0 max-w-xl ml-auto">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-3 lg:gap-4">
                            {/* Card 1: Disaster Management */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-2 pb-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="relative w-full h-[120px] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                                    <Image src="/images/hero/disaster-management.jpg" priority alt="Disaster Management" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                                        <span className="text-[8px] text-white font-bold tracking-wider">ADVISORY</span>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-base text-charcoal mb-0 px-1.5 leading-tight">Disaster Mgt</h3>
                                <p className="text-[11px] text-charcoal/60 px-1.5 font-sans mt-0.5">AI risk prediction</p>
                                <div className="mt-3 px-1.5 flex items-center gap-2">
                                    <span className="text-[10px] font-semibold text-charcoal/50 group-hover:text-primary transition-colors">View more</span>
                                    <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <ArrowUpRight className="w-3 h-3 text-charcoal/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Food Labelling */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-2 pb-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="relative w-full h-[100px] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                                    <Image src="/images/hero/food-compliance.jpg" priority alt="Food Compliance" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                                        <span className="text-[8px] text-white font-bold tracking-wider">COMPLIANCE</span>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-base text-charcoal mb-0 px-1.5 leading-tight">Food Labelling</h3>
                                <p className="text-[11px] text-charcoal/60 px-1.5 font-sans mt-0.5">FSSAI certification</p>
                                <div className="mt-3 px-1.5 flex items-center gap-2">
                                    <span className="text-[10px] font-semibold text-charcoal/50 group-hover:text-primary transition-colors">View more</span>
                                    <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <ArrowUpRight className="w-3 h-3 text-charcoal/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Agri Waste */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-2 pb-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="relative w-full h-[110px] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                                    <Image src="/images/hero/agri-waste.jpg" alt="Agri Waste" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                                        <span className="text-[8px] text-white font-bold tracking-wider">TECHNOLOGY</span>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-base text-charcoal mb-0 px-1.5 leading-tight">Agri Waste</h3>
                                <p className="text-[11px] text-charcoal/60 px-1.5 font-sans mt-0.5">Bioenergy solutions</p>
                                <div className="mt-3 px-1.5 flex items-center gap-2">
                                    <span className="text-[10px] font-semibold text-charcoal/50 group-hover:text-primary transition-colors">View more</span>
                                    <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <ArrowUpRight className="w-3 h-3 text-charcoal/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Column 2 (Staggered) */}
                        <div className="flex flex-col gap-3 lg:gap-4 lg:pt-16 mt-4 lg:mt-0">
                            {/* Card 4: Climate Data */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-2 pb-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="relative w-full h-[140px] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                                    <Image src="/images/hero/climate-data.jpg" priority alt="Climate Data" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                                        <span className="text-[8px] text-white font-bold tracking-wider">INTELLIGENCE</span>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-base text-charcoal mb-0 px-1.5 leading-tight">Climate Data</h3>
                                <p className="text-[11px] text-charcoal/60 px-1.5 font-sans mt-0.5">Drone surveys</p>
                                <div className="mt-3 px-1.5 flex items-center gap-2">
                                    <span className="text-[10px] font-semibold text-charcoal/50 group-hover:text-primary transition-colors">View more</span>
                                    <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <ArrowUpRight className="w-3 h-3 text-charcoal/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 5: Climate Finance */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-2 pb-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="relative w-full h-[130px] rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                                    <Image src="/images/hero/climate-finance.jpg" alt="Climate Finance" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                                        <span className="text-[8px] text-white font-bold tracking-wider">CARBON</span>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-base text-charcoal mb-0 px-1.5 leading-tight">Climate Finance</h3>
                                <p className="text-[11px] text-charcoal/60 px-1.5 font-sans mt-0.5">Carbon credits advisory</p>
                                <div className="mt-3 px-1.5 flex items-center gap-2">
                                    <span className="text-[10px] font-semibold text-charcoal/50 group-hover:text-primary transition-colors">View more</span>
                                    <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <ArrowUpRight className="w-3 h-3 text-charcoal/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
