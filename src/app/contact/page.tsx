"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle, Loader2, ArrowUpRight } from "lucide-react";

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().optional(),
    organization: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, "Please share more details"),
});
type FormData = z.infer<typeof schema>;

const contactInfo = [
    { icon: MapPin, label: "Office", value: "New Delhi, India" },
    { icon: Mail, label: "Email", value: "info@agrivision4u.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
];

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const onSubmit = async (data: FormData) => { setStatus("sending"); console.log(data); await new Promise((r) => setTimeout(r, 1500)); setStatus("sent"); };

    return (
        <>
            {/* Hero — Agrotive style */}
            <section className="topo-bg pt-32 pb-20">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="pill-tag mb-6 inline-block">Get In Touch</span>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                            Book a <em className="italic">Consultation</em>
                        </h1>
                        <p className="text-lg text-muted max-w-xl mx-auto">Let&apos;s discuss how we can help your agricultural enterprise thrive in a changing climate.</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-4 pb-10">
                <div className="container-max">
                    <div className="grid sm:grid-cols-3 gap-5">
                        {contactInfo.map((info, i) => (
                            <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all text-center">
                                <div className="w-12 h-12 mx-auto rounded-xl bg-accent flex items-center justify-center mb-3">
                                    <info.icon className="w-5 h-5 text-primary" />
                                </div>
                                <p className="font-bold text-charcoal text-sm">{info.label}</p>
                                <p className="text-sm text-muted mt-1">{info.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="section-padding pt-6">
                <div className="container-max max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="bg-white rounded-[24px] p-8 sm:p-10 border border-border">
                        {status === "sent" ? (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">Thank You!</h3>
                                <p className="text-muted">We&apos;ll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="text-center mb-4">
                                    <h2 className="text-2xl font-bold text-charcoal">Send Us a Message</h2>
                                    <p className="text-sm text-muted mt-1">Fill out the form and our team will respond promptly.</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                                        <input {...register("name")} placeholder="Your full name" className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-charcoal placeholder:text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" />
                                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">Organization</label>
                                        <input {...register("organization")} placeholder="Company / Agency" className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-charcoal placeholder:text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">Email *</label>
                                        <input {...register("email")} type="email" placeholder="you@company.com" className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-charcoal placeholder:text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" />
                                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                                        <input {...register("phone")} placeholder="+91 98765 43210" className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-charcoal placeholder:text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-2">Service Interest</label>
                                    <select {...register("service")} className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-slate focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none">
                                        <option value="">Select a service...</option>
                                        <option value="disaster">Disaster Management</option>
                                        <option value="climate-data">Climate Data Services</option>
                                        <option value="climate-finance">Climate Finance & CSA</option>
                                        <option value="food">Food Labelling & Licensing</option>
                                        <option value="waste">Agri Waste to Value</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-charcoal mb-2">Message *</label>
                                    <textarea {...register("message")} rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3.5 rounded-xl bg-cream border border-border text-charcoal placeholder:text-muted/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none" />
                                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                                </div>
                                <button type="submit" disabled={status === "sending"}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-light transition-all disabled:opacity-50">
                                    {status === "sending" ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
