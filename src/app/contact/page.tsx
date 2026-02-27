"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

interface FormData {
    name: string; org: string; designation: string; email: string; phone: string; service: string; message: string;
}

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const onSubmit = async (data: FormData) => {
        setStatus("sending");
        try {
            // In production, this would call /api/contact
            await new Promise(r => setTimeout(r, 1500));
            console.log("Form data:", data);
            setStatus("success");
            reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark">
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">Get In Touch</span>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Book a <span className="text-brand-accent">Consultation</span></h1>
                        <p className="text-lg text-white/70">Ready to explore how Agrivision4u can help your organization? Fill out the form below and our team will get back to you within 24 hours.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white -mt-8 relative z-10">
                <div className="container-max">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
                                {status === "success" ? (
                                    <div className="text-center py-12">
                                        <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                                        <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">Thank You!</h3>
                                        <p className="text-gray-500">Your consultation request has been received. We'll contact you within 24 hours.</p>
                                        <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-secondary transition-colors">Submit Another Request</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                                                <input {...register("name", { required: "Name is required" })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all" placeholder="Your full name" />
                                                {errors.name && <p className="text-climate-risk text-xs mt-1">{errors.name.message}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
                                                <input {...register("org")} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all" placeholder="Company / Agency" />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                                                <input type="email" {...register("email", { required: "Email is required" })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all" placeholder="you@company.com" />
                                                {errors.email && <p className="text-climate-risk text-xs mt-1">{errors.email.message}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                                <input type="tel" {...register("phone")} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all" placeholder="+91 98765 43210" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Designation</label>
                                            <input {...register("designation")} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all" placeholder="Your role" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In *</label>
                                            <select {...register("service", { required: "Please select a service" })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all bg-white">
                                                <option value="">Select a service...</option>
                                                <option value="disaster-management">Disaster Management Consultancy</option>
                                                <option value="climate-data">Climate & Environment Data Services</option>
                                                <option value="climate-finance">Climate Finance & CSA Advisory</option>
                                                <option value="food-compliance">Food Labelling & Licensing</option>
                                                <option value="agri-waste">Agri Waste to Value</option>
                                                <option value="multiple">Multiple Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.service && <p className="text-climate-risk text-xs mt-1">{errors.service.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                                            <textarea {...register("message", { required: "Message is required" })} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-light outline-none transition-all resize-none" placeholder="Tell us about your requirements..." />
                                            {errors.message && <p className="text-climate-risk text-xs mt-1">{errors.message.message}</p>}
                                        </div>
                                        {status === "error" && (
                                            <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg text-climate-risk text-sm">
                                                <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                                            </div>
                                        )}
                                        <button type="submit" disabled={status === "sending"} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-yellow-400 transition-all disabled:opacity-60 text-lg">
                                            {status === "sending" ? (
                                                <span className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                                            ) : (
                                                <><Send className="w-5 h-5" /> Submit Consultation Request</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Info */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-2 space-y-6">
                            {[
                                { icon: MapPin, title: "Office", content: siteConfig.address },
                                { icon: Mail, title: "Email", content: siteConfig.email },
                                { icon: Phone, title: "Phone", content: siteConfig.phone },
                                { icon: Clock, title: "Working Hours", content: "Mon – Fri: 9:00 AM – 6:00 PM IST" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4 p-5 bg-brand-light/50 rounded-xl">
                                    <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-brand-dark">{item.title}</p>
                                        <p className="text-gray-600 text-sm">{item.content}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Map Placeholder */}
                            <div className="h-64 bg-gradient-to-br from-brand-light to-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                                    <p className="text-sm text-gray-500">Google Maps Integration</p>
                                    <p className="text-xs text-gray-400">New Delhi, India</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
