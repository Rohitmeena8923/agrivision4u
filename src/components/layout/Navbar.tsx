"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { navLinks, services } from "@/lib/constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }} animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-cream/95 backdrop-blur-md border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="container-max px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/logo-icon.png" alt="Agrivision4u" width={40} height={40} priority className="rounded-xl object-contain" />
                        <span className="text-xl font-bold text-charcoal tracking-tight">Agrivision4u</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                    <button className="px-4 py-2 text-sm font-medium flex items-center gap-1.5 rounded-full text-slate hover:text-primary hover:bg-accent/40 transition-all">
                                        {link.label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                                                <div className="bg-white rounded-2xl p-2 w-[360px] shadow-xl border border-border">
                                                    {services.map((s) => (
                                                        <Link key={s.id} href={s.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/30 transition-all group/item">
                                                            <Image src={s.image} alt={s.shortTitle} width={48} height={48} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                                                            <div>
                                                                <p className="text-sm font-semibold text-charcoal group-hover/item:text-primary transition-colors">{s.shortTitle}</p>
                                                                <p className="text-xs text-muted mt-0.5 line-clamp-1">{s.description.slice(0, 55)}...</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link key={link.label} href={link.href} className="px-4 py-2 text-sm font-medium rounded-full text-slate hover:text-primary hover:bg-accent/40 transition-all">
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="btn-pill text-sm">
                            Book a Call <span className="arrow-circle w-6 h-6 bg-white/20"><ArrowUpRight className="w-3.5 h-3.5 text-white" /></span>
                        </Link>
                    </div>

                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-accent/30 transition-all">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-cream border-t border-border">
                        <div className="container-max px-4 py-6 space-y-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label} className="space-y-1">
                                        <p className="px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Services</p>
                                        {services.map((s) => (
                                            <Link key={s.id} href={s.href} onClick={() => setMobileOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate hover:text-primary hover:bg-accent/30 transition-all">
                                                <Image src={s.image} alt={s.shortTitle} width={32} height={32} className="w-8 h-8 rounded-lg object-cover" />
                                                <span className="text-sm font-medium">{s.shortTitle}</span>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-3 rounded-xl text-slate hover:text-primary hover:bg-accent/30 transition-all text-sm font-medium">
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div className="pt-4">
                                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-pill w-full justify-center">
                                    Book a Call <span className="arrow-circle w-6 h-6 bg-white/20"><ArrowUpRight className="w-3.5 h-3.5 text-white" /></span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
