"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import { useState } from "react";

const categories = ["All", "Climate Finance", "Climate Data", "Disaster Management", "Food Compliance", "Waste Solutions"];

export default function InsightsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">Knowledge Hub</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Insights & <em className="italic">Articles</em>
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto">Latest research, analysis, and expert perspectives on climate-smart agriculture in India.</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter tabs */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-6">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-white border border-border text-charcoal hover:border-primary hover:text-primary"
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured article */}
            <section className="section-padding pb-10">
                <div className="container-max">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Link href={`/insights/${filtered[0]?.slug}`} className="group grid lg:grid-cols-2 gap-8 bg-white rounded-[24px] overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                            <div className="relative h-[300px] lg:h-auto overflow-hidden">
                                <Image src={filtered[0]?.image || ""} alt={filtered[0]?.title || ""} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-5 left-5 pill-tag">{filtered[0]?.category}</span>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-muted text-sm mb-4">
                                    <span>{filtered[0]?.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{filtered[0]?.readTime}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-tight group-hover:text-primary transition-colors">{filtered[0]?.title}</h2>
                                <p className="text-muted leading-relaxed mb-6">{filtered[0]?.excerpt}</p>
                                <div className="inline-flex items-center gap-2 btn-pill w-fit">
                                    Read Article <span className="arrow-circle"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* All articles grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.slice(1).map((post, i) => (
                            <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
                                className="h-full">
                                <Link href={`/insights/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="relative h-52 overflow-hidden shrink-0">
                                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute top-4 left-4 pill-tag text-[10px]">{post.category}</span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-muted text-xs mb-3">
                                            <span>{post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                        </div>
                                        <h3 className="font-bold text-charcoal mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                                        <div className="mt-4 pt-4 border-t border-border inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                            Read more <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
