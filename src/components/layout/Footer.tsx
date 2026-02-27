import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Leaf } from "lucide-react";
import { siteConfig, services } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white">
            {/* Main Footer */}
            <div className="container-max section-padding pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg font-display">A</span>
                            </div>
                            <span className="text-xl font-bold font-display">
                                agri<span className="text-brand-accent">vision</span>4u
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            India&apos;s premier Climate-Agriculture Consultancy. Bridging climate science,
                            technology, and on-ground expertise for a resilient agricultural future.
                        </p>
                        <div className="flex gap-3">
                            {["linkedin", "twitter", "youtube"].map((s) => (
                                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center transition-colors" aria-label={s}>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {["About Us", "Case Studies", "Insights", "Careers", "Contact"].map((l) => (
                                <li key={l}>
                                    <Link href={`/${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-white/60 hover:text-brand-accent text-sm transition-colors">
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.id}>
                                    <Link href={s.href} className="text-white/60 hover:text-brand-accent text-sm transition-colors">
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">{siteConfig.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                                <a href={`tel:${siteConfig.phone}`} className="text-white/60 hover:text-white text-sm transition-colors">{siteConfig.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-white text-sm transition-colors">{siteConfig.email}</a>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <Leaf className="w-4 h-4 text-brand-accent" />
                                <span className="text-sm font-semibold">WhatsApp</span>
                            </div>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-accent text-sm hover:underline">
                                Chat with us →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">© {new Date().getFullYear()} Agrivision4u. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/40 hover:text-white/60 text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
