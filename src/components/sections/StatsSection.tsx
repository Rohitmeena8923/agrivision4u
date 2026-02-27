"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 18, suffix: "", label: "States Covered" },
    { value: 50000, suffix: "+", label: "Hectares Assessed" },
    { value: 100000, suffix: "+", label: "Carbon Credits" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = value;
        const duration = 2000;
        const step = Math.max(1, Math.floor(end / (duration / 16)));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, value]);
    return <span ref={ref} className="font-data font-bold text-4xl sm:text-5xl">{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-6">
            <div className="container-max">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-primary rounded-[24px] px-8 sm:px-16 py-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        {stats.map((stat, i) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="text-white"><Counter value={stat.value} suffix={stat.suffix} /></div>
                                <p className="text-white/50 text-sm mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
