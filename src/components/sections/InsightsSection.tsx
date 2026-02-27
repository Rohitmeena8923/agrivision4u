"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/constants";

export default function InsightsSection() {
    return (
        <section className="section-padding bg-gray-50/50">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary text-sm font-semibold rounded-full mb-4">Insights</span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">
                            Latest <span className="text-brand-primary">Insights</span>
                        </h2>
                    </div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:translate-x-1 transition-all"
                        >
                            <div className="h-40 bg-gradient-to-br from-brand-dark to-brand-primary/80 p-6 flex flex-col justify-end">
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
    );
}
