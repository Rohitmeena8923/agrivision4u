"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.4 }}
            className="flex flex-col min-h-[100dvh]"
        >
            {children}
        </motion.div>
    );
}
