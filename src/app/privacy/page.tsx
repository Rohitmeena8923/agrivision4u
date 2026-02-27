"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sections = [
    { title: "1. Information We Collect", text: "We collect information you provide directly, such as your name, email address, phone number, organization, and service interest when you submit a consultation request or contact form. We also collect usage data through analytics services to improve our website experience." },
    { title: "2. How We Use Your Information", text: "Your information is used to respond to your inquiries, provide requested consultancy services, send relevant updates about our services (with your consent), and improve our website functionality. We do not sell your personal data to third parties." },
    { title: "3. Data Security", text: "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is transmitted over encrypted channels (SSL/TLS)." },
    { title: "4. Cookies & Analytics", text: "We use Google Analytics 4 to understand website usage patterns. You can disable cookies through your browser settings. We also use essential cookies required for website functionality." },
    { title: "5. Your Rights", text: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at info@agrivision4u.com." },
    { title: "6. Contact Us", text: "For privacy-related inquiries, contact: info@agrivision4u.com | +91 98765 43210" },
];

export default function PrivacyPage() {
    return (
        <>
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">Legal</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Privacy <em className="italic">Policy</em>
                        </h1>
                        <p className="text-lg text-muted">Last updated: February 27, 2026</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-10">
                <div className="container-max max-w-3xl">
                    <div className="space-y-5">
                        {sections.map((s, i) => (
                            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 mt-0.5">
                                        <Shield className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-charcoal mb-3">{s.title}</h2>
                                        <p className="text-muted leading-relaxed">{s.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
