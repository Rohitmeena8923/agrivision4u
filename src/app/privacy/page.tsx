import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Agrivision4u Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container-max max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-display font-bold text-brand-dark mb-2">Privacy Policy</h1>
                <p className="text-gray-400 text-sm mb-12">Last updated: February 27, 2026</p>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed">We collect information you provide directly, such as your name, email address, phone number, organization, and service interest when you submit a consultation request or contact form. We also collect usage data through analytics services to improve our website experience.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600 leading-relaxed">Your information is used to respond to your inquiries, provide requested consultancy services, send relevant updates about our services (with your consent), and improve our website functionality. We do not sell your personal data to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">3. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is transmitted over encrypted channels (SSL/TLS).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">4. Cookies & Analytics</h2>
                        <p className="text-gray-600 leading-relaxed">We use Google Analytics 4 to understand website usage patterns. You can disable cookies through your browser settings. We also use essential cookies required for website functionality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">5. Your Rights</h2>
                        <p className="text-gray-600 leading-relaxed">You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at info@agrivision4u.com.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-brand-dark mb-4">6. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">For privacy-related inquiries, contact: info@agrivision4u.com | +91 98765 43210</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
