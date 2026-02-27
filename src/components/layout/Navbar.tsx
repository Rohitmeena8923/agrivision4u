"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Shield, Database, TrendingUp, FileCheck, Recycle, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Database, TrendingUp, FileCheck, Recycle };

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg font-display">A</span>
                        </div>
                        <span className={`text-xl font-bold font-display transition-colors ${scrolled ? "text-brand-dark" : "text-white"}`}>
                            agri<span className="text-brand-accent">vision</span>4u
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        {navLinks.map((link) =>
                            link.children ? (
                                <div key={link.label} className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                    <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-brand-dark hover:text-brand-primary hover:bg-brand-light" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
                                        {link.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-1 gap-1"
                                            >
                                                {link.children.map((child) => {
                                                    const Icon = iconMap[child.icon] || Shield;
                                                    return (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-light transition-colors group/item"
                                                            onClick={() => setServicesOpen(false)}
                                                        >
                                                            <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">
                                                                <Icon className="w-5 h-5 text-brand-primary group-hover/item:text-white" />
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-sm text-brand-dark">{child.label}</p>
                                                                <p className="text-xs text-gray-500 mt-0.5">{child.desc}</p>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-brand-dark hover:text-brand-primary hover:bg-brand-light" : "text-white/90 hover:text-white hover:bg-white/10"}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-brand-dark text-sm font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-brand-accent/25"
                        >
                            <Phone className="w-4 h-4" />
                            Book Consultation
                        </Link>
                        <button
                            className="lg:hidden p-2 rounded-lg"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? (
                                <X className={scrolled ? "text-brand-dark" : "text-white"} />
                            ) : (
                                <Menu className={scrolled ? "text-brand-dark" : "text-white"} />
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-6 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div key={link.label} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                                    {link.children ? (
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider mb-2 mt-4">Services</p>
                                            {link.children.map((child) => {
                                                const Icon = iconMap[child.icon] || Shield;
                                                return (
                                                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-3 text-white/90 hover:text-brand-accent transition-colors">
                                                        <Icon className="w-5 h-5 text-brand-accent" />
                                                        <span className="font-medium">{child.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <Link href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-xl font-display text-white hover:text-brand-accent transition-colors">
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-brand-accent text-brand-dark font-bold rounded-full text-lg">
                            <Phone className="w-5 h-5" />
                            Book Consultation
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
