import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light to-white px-4">
            <div className="text-center max-w-lg">
                <div className="relative mb-8">
                    <span className="text-[180px] font-display font-bold text-brand-primary/10 leading-none select-none">404</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10 text-brand-primary" />
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-500 text-lg mb-8">
                    Looks like this page has migrated to greener pastures. Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors">
                        <Home className="w-4 h-4" /> Go Home
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-light transition-colors">
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Link href="/#services" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">Services</Link>
                    <Link href="/case-studies" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">Case Studies</Link>
                    <Link href="/insights" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">Insights</Link>
                    <Link href="/about" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">About</Link>
                </div>
            </div>
        </div>
    );
}
