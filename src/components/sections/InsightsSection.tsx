"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/constants";

export default function InsightsSection() {
    return (
        <section className="section-padding">
            <div className="container-max">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="pill-tag mb-4 inline-block">Insights</span>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Latest <em className="italic">Articles</em>
                        </h2>
                    </motion.div>
                    <Link href="/insights" className="btn-pill-outline text-sm">
                        View All <span className="arrow-circle-dark w-7 h-7"><ArrowRight className="w-3.5 h-3.5" /></span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {blogPosts.slice(0, 3).map((post, i) => (
                        <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <Link href={`/insights/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="relative h-52 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-4 left-4 pill-tag text-[10px]">{post.category}</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-muted text-xs mb-3">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
