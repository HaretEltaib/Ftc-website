"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export function Navbar() {
    const t = useTranslations("Navigation");
    const locale = useLocale();
    const pathname = usePathname();
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    const nextLangText = locale === 'ar' ? 'EN' : 'AR';
    const nextLangFullText = locale === 'ar' ? 'English' : 'العربية';

    const NAV_LINKS = [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/robotics", label: t("robotics") },
        { href: "/sustainability", label: t("sustainability") },
        { href: "/team", label: t("team") },
        { href: "/impact", label: t("impact") },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-accent/50 group-hover:scale-110 transition-transform bg-primary border-2 border-accent/20">
                        <Image src="/logo.png" alt="MS Robotics Logo" fill className="object-cover p-1" />
                    </div>
                    <div>
                        <h1 className="font-heading font-bold text-lg leading-tight tracking-wide">
                            FTC Team 33554
                        </h1>
                        <p className="text-xs text-accent font-medium">Martyrs of Al-Shatta Secondary School</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-medium text-sm hover:text-accent transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <div className="h-6 w-px bg-secondary/50 mx-2"></div>
                    <Link
                        href={pathname}
                        locale={nextLocale}
                        className="text-xs font-semibold uppercase tracking-wider hover:text-accent transition-colors"
                    >
                        {nextLangText}
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-neutral-light hover:text-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-secondary/50 overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-lg font-medium hover:text-accent hover:translate-x-[-10px] transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-secondary/50">
                                <Link
                                    href={pathname}
                                    locale={nextLocale}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors"
                                >
                                    {nextLangFullText}
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
