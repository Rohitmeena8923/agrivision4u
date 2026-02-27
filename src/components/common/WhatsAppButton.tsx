"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppButton() {
    return (
        <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Agrivision4u,%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-ring group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="absolute right-18 bg-white text-brand-dark text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
}
