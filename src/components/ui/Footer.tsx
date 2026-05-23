import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navigation");

    return (
        <footer className="bg-secondary/20 border-t border-secondary pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 inline-block">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-accent/50 bg-primary border-2 border-accent/20">
                                <Image src="/logo.png" alt="MS Robotics Logo" fill className="object-cover p-1" />
                            </div>
                            <div>
                                <h2 className="font-heading font-bold text-xl tracking-wide">
                                    FTC Team 33554
                                </h2>
                                <p className="text-sm text-accent font-medium">{t("school")}</p>
                            </div>
                        </Link>
                        <p className="text-neutral-light/80 text-sm max-w-md leading-relaxed mb-6 font-medium">
                            {t("tagline")}
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://www.instagram.com/ms_robotics33554" icon={<Instagram size={20} />} />
                            <SocialLink href="#" icon={<Twitter size={20} />} />
                            <SocialLink href="#" icon={<Linkedin size={20} />} />
                            <SocialLink href="https://github.com/HaretEltaib?tab=overview&from=2025-12-01&to=2025-12-31" icon={<Github size={20} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-6 border-b-2 border-accent inline-block pb-1">{t("links")}</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/about">{tNav("about")}</FooterLink>
                            <FooterLink href="/robotics">{tNav("robotics")}</FooterLink>
                            <FooterLink href="/sustainability">{tNav("sustainability")}</FooterLink>
                            <FooterLink href="/team">{tNav("team")}</FooterLink>
                            <FooterLink href="/impact">{tNav("impact")}</FooterLink>
                        </ul>
                    </div>

                    {/* Partners */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-6 border-b-2 border-accent inline-block pb-1">{t("sponsors")}</h3>
                        <ul className="space-y-4 text-sm text-neutral-light/80">
                            <li>{t("school")}</li>
                            <li>Libyan Academy of Telecom</li>
                            <li>Student Union</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-light/60">
                    <p>© {new Date().getFullYear()} FTC Team 33554. All Rights Reserved.</p>
                    <p className="flex items-center gap-1">
                        Built for FIRST Tech Challenge <span>Into The Deep 2025-2026 (Transitioning to 26-27)</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-neutral-light hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-sm text-neutral-light/80 hover:text-accent transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                {children}
            </Link>
        </li>
    );
}
