import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-cream-section">
            <div className="text-center max-w-lg">
                <div className="relative mb-8">
                    <span className="text-[180px] font-display font-bold text-primary/5 leading-none select-none">404</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-green-soft rounded-full flex items-center justify-center border-2 border-primary/10">
                            <Search className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mb-4">Page Not Found</h1>
                <p className="text-muted text-lg mb-8">Looks like this page has migrated to greener pastures.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light shadow-sm transition-all">
                        <Home className="w-4 h-4" /> Go Home
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-slate font-semibold hover:border-primary/20 hover:text-primary transition-all">
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
