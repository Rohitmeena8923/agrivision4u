"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/constants";

export default function InsightsPage() {
    const allPosts = [...blogPosts, ...blogPosts];

    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark">
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">Knowledge Hub</span>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Insights & <span className="text-brand-accent">Articles</span></h1>
                        <p className="text-lg text-white/70">Expert analysis on climate-agriculture trends, regulations, and technology impacting India&apos;s agricultural future.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post, i) => (
                            <motion.article
                                key={`${post.slug}-${i}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:translate-x-1 transition-all"
                            >
                                <div className="h-44 bg-gradient-to-br from-brand-dark to-brand-primary/80 p-6 flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Tag className="w-3.5 h-3.5 text-brand-accent" />
                                        <span className="text-brand-accent text-xs font-semibold">{post.category}</span>
                                    </div>
                                    <h3 className="text-white font-display font-bold leading-tight line-clamp-2">{post.title}</h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                                    <Link href={`/insights/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
