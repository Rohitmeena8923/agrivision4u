"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Clock, User, Calendar, Tag, ArrowUpRight, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/constants";

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts.find((p) => p.slug === slug);
    const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

    if (!post) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
                    <p className="text-muted mb-8">Article not found.</p>
                    <Link href="/insights" className="btn-pill">Back to Insights</Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero — Agrotive topo style */}
            <section className="topo-bg pt-32 pb-10">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/insights" className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Insights
                        </Link>
                        <span className="pill-tag mb-4 block w-fit">{post.category}</span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-3xl">{post.title}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="container-max">
                    <div className="relative rounded-[24px] overflow-hidden h-[280px] sm:h-[400px]">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section-padding">
                <div className="container-max">
                    <div className="grid lg:grid-cols-[1fr,320px] gap-12">
                        {/* Main Content */}
                        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            {/* Meta bar */}
                            <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-border text-sm text-muted">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} read</span>
                                {"author" in post && <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>}
                            </div>

                            {/* Article body */}
                            <div className="prose prose-lg max-w-none
                                prose-headings:text-charcoal prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                prose-p:text-slate prose-p:leading-relaxed prose-p:mb-4
                                prose-li:text-slate prose-li:leading-relaxed
                                prose-strong:text-charcoal prose-strong:font-semibold
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-table:rounded-xl prose-table:overflow-hidden
                                prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3
                                prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-border
                            ">
                                {"content" in post && post.content?.split("\n").map((line, i) => {
                                    if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
                                    if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
                                    if (line.startsWith("- ")) return <li key={i} dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                                    if (line.startsWith("| ")) {
                                        if (line.startsWith("|---")) return null;
                                        const cells = line.split("|").filter(c => c.trim());
                                        return <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-cream rounded-lg mb-1 text-sm">{cells.map((c, j) => <span key={j} className={j === 0 ? "font-semibold text-charcoal" : "text-muted"}>{c.trim()}</span>)}</div>;
                                    }
                                    if (line.match(/^\d+\./)) return <li key={i} className="list-decimal ml-4" dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                                    if (line.trim() === "") return <br key={i} />;
                                    return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                                })}
                            </div>

                            {/* Tags */}
                            {"tags" in post && (
                                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
                                    <Tag className="w-4 h-4 text-muted mt-1" />
                                    {(post.tags as string[])?.map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full bg-cream border border-border text-sm text-slate">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </motion.article>

                        {/* Sidebar */}
                        <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:sticky lg:top-28 self-start space-y-6">
                            {/* Author card */}
                            {"author" in post && (
                                <div className="bg-white rounded-2xl p-6 border border-border">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                                            {(post.author as string)?.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-charcoal">{post.author}</p>
                                            <p className="text-xs text-muted">{(post as any).authorRole}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Share */}
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h4 className="text-sm font-bold text-charcoal mb-3 flex items-center gap-2"><Share2 className="w-4 h-4" /> Share Article</h4>
                                <div className="flex gap-2">
                                    {["LinkedIn", "Twitter", "WhatsApp"].map((s) => (
                                        <button key={s} className="flex-1 py-2 rounded-full bg-cream border border-border text-xs font-medium text-slate hover:bg-accent hover:text-primary hover:border-accent transition-all">{s}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Related articles */}
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h4 className="text-sm font-bold text-charcoal mb-4">Related Articles</h4>
                                <div className="space-y-4">
                                    {relatedPosts.map((rp) => (
                                        <Link key={rp.slug} href={`/insights/${rp.slug}`} className="flex items-start gap-3 group">
                                            <Image src={rp.image} alt={rp.title} width={64} height={48} className="rounded-lg object-cover shrink-0 w-16 h-12" />
                                            <div>
                                                <p className="text-sm font-semibold text-charcoal leading-snug line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</p>
                                                <p className="text-xs text-muted mt-1">{rp.readTime}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-primary rounded-2xl p-6 text-center">
                                <h4 className="text-white font-bold mb-2">Need Expert Advice?</h4>
                                <p className="text-white/60 text-sm mb-4">Get a free consultation with our climate-agriculture specialists.</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-cream transition-all">
                                    Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* More articles */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="container-max">
                    <h2 className="text-3xl font-bold text-charcoal mb-8">More <em className="italic">Articles</em></h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {relatedPosts.map((rp, i) => (
                            <motion.div key={rp.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <Link href={`/insights/${rp.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="relative h-44 overflow-hidden">
                                        <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute top-3 left-3 pill-tag text-[10px]">{rp.category}</span>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs text-muted mb-2">{rp.date} · {rp.readTime}</p>
                                        <h3 className="font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
