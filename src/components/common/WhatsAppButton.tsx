"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a href="https://wa.me/919876543210?text=Hello%20Agrivision4u%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group" aria-label="Chat on WhatsApp">
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-all">
                    <MessageCircle className="w-6 h-6 text-white" />
                </div>
            </div>
        </a>
    );
}
