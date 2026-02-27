"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-4 sm:px-6 lg:px-8 pb-6">
            <div className="container-max bg-charcoal rounded-[24px] px-8 sm:px-12 lg:px-16 py-14 text-white/60">
                {/* Top row: Logo + Newsletter */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 pb-12 border-b border-white/10">
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <Image src="/images/logo-icon.png" alt="Agrivision4u" width={36} height={36} className="rounded-lg" />
                            <span className="text-lg font-bold text-white">Agrivision4u</span>
                        </Link>
                        <p className="text-sm leading-relaxed">India&apos;s premier Climate-Agriculture Consultancy. Science-based, technology-enabled solutions for sustainable agricultural growth.</p>
                        <div className="flex gap-3 mt-5">
                            {[["I", "Instagram"], ["L", "LinkedIn"], ["X", "X"]].map(([letter, name]) => (
                                <a key={name} href="#" aria-label={name} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-xs font-bold hover:text-white hover:bg-white/10 transition-all">
                                    {letter}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:max-w-sm w-full">
                        <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
                        <p className="text-sm mb-4">Get the latest insights on climate-agriculture delivered to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input type="email" placeholder="Enter email address..." className="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-primary" />
                            <button className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-all shrink-0 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Link columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {[["Home", "/"], ["About Us", "/about"], ["Case Studies", "/case-studies"], ["Insights", "/insights"], ["Contact", "/contact"]].map(([l, h]) => (
                                <li key={l}><Link href={h} className="text-sm hover:text-white transition-colors">{l}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">Services</h4>
                        <ul className="space-y-3">
                            {[["Disaster Mgmt", "/services/disaster-management"], ["Climate Data", "/services/climate-environment-data"], ["Climate Finance", "/services/climate-finance-csa"], ["Food Compliance", "/services/food-labelling-licensing"], ["Waste Solutions", "/services/agri-waste-to-value"]].map(([l, h]) => (
                                <li key={l}><Link href={h} className="text-sm hover:text-white transition-colors">{l}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">Legal</h4>
                        <ul className="space-y-3">
                            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/privacy"]].map(([l, h]) => (
                                <li key={l}><Link href={h} className="text-sm hover:text-white transition-colors">{l}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>info@agrivision4u.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
                    <span>&copy; {new Date().getFullYear()} Agrivision4u. All rights reserved.</span>
                    <span>Designed with ❤️ for India&apos;s farmers</span>
                </div>
            </div>
        </footer>
    );
}
