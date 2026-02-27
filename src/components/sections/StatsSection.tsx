"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { impactStats } from "@/lib/constants";
import { FolderCheck, MapPin, Ruler, Sprout } from "lucide-react";

const icons = [FolderCheck, MapPin, Ruler, Sprout];

export default function StatsSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary animate-gradient" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l20-20H0z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E\")" }} />
            <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {impactStats.map((stat, i) => {
                        const Icon = icons[i];
                        return (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-brand-accent" />
                                </div>
                                <div className="text-4xl sm:text-5xl text-white mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
