"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle, Share2, Tag } from "lucide-react";
import { caseStudies } from "@/lib/constants";

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const study = caseStudies.find((s) => s.slug === slug);
    const relatedStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 3);

    if (!study) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
                    <p className="text-muted mb-8">Case Study not found.</p>
                    <Link href="/case-studies" className="btn-pill">Back to Case Studies</Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="topo-bg pt-32 pb-10">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                        </Link>
                        <span className="pill-tag mb-4 block w-fit">{study.vertical}</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">{study.title}</h1>
                        <p className="text-lg text-slate mt-5 max-w-3xl leading-relaxed">{study.excerpt}</p>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Marquee or Grid */}
            <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="container-max">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-primary rounded-3xl p-6 sm:p-10 mb-8 flex flex-wrap gap-8 justify-center items-center shadow-lg"
                    >
                        {Object.entries(study.metrics).map(([key, val]) => (
                            <div key={key} className="text-center px-4">
                                <span className="block text-white/60 uppercase text-xs font-bold tracking-wider mb-2">{key}</span>
                                <span className="block text-white font-display font-bold text-2xl sm:text-3xl">{val}</span>
                            </div>
                        ))}
                    </motion.div>

                    <div className="relative rounded-[32px] overflow-hidden h-[300px] sm:h-[450px]">
                        <Image src={study.image} alt={study.title} fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section-padding">
                <div className="container-max">
                    <div className="grid lg:grid-cols-[1fr,320px] gap-12">
                        {/* Main Content */}
                        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>

                            <div className="prose prose-lg max-w-none
                                prose-headings:text-charcoal prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                prose-p:text-slate prose-p:leading-relaxed prose-p:mb-5
                                prose-li:text-slate prose-li:leading-relaxed
                                prose-strong:text-charcoal prose-strong:font-semibold
                            ">
                                {("content" in study) && study.content?.split("\n").map((line, i) => {
                                    if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
                                    if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
                                    if (line.startsWith("- ")) return <li key={i} className="list-disc ml-4" dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                                    if (line.trim() === "") return <br key={i} />;
                                    return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                                })}
                            </div>

                        </motion.article>

                        {/* Sidebar */}
                        <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:sticky lg:top-28 self-start space-y-6">

                            {/* Share */}
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h4 className="text-sm font-bold text-charcoal mb-3 flex items-center gap-2"><Share2 className="w-4 h-4" /> Share Case Study</h4>
                                <div className="flex gap-2">
                                    {["LinkedIn", "Twitter", "Email"].map((s) => (
                                        <button key={s} className="flex-1 py-2 rounded-full bg-cream border border-border text-xs font-medium text-slate hover:bg-accent hover:text-primary hover:border-accent transition-all">{s}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Related Case Studies */}
                            {relatedStudies.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 border border-border">
                                    <h4 className="text-sm font-bold text-charcoal mb-4">Other Success Stories</h4>
                                    <div className="space-y-4">
                                        {relatedStudies.map((rs) => (
                                            <Link key={rs.slug} href={`/case-studies/${rs.slug}`} className="flex items-start gap-3 group">
                                                <Image src={rs.image} alt={rs.title} width={64} height={48} className="rounded-lg object-cover shrink-0 w-16 h-12" />
                                                <div>
                                                    <span className="text-[10px] font-bold text-primary uppercase">{rs.vertical}</span>
                                                    <p className="text-sm font-semibold text-charcoal leading-snug line-clamp-2 group-hover:text-primary transition-colors">{rs.title}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-primary rounded-2xl p-6 text-center">
                                <h4 className="text-white font-bold mb-2">Want similar results?</h4>
                                <p className="text-white/60 text-sm mb-4">Contact our team to discuss your project requirements today.</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-cream transition-all">
                                    Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </>
    );
}
