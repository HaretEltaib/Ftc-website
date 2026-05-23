"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Image as ImageIcon } from "lucide-react";

// Placeholder data for exhibition gallery
const GALLERY = [
    { id: 1, title: "الفريق في ورشة العمل", category: "Team", color: "from-secondary/50 to-transparent" },
    { id: 2, title: "الروبوت V1", category: "Robot", color: "from-accent/50 to-transparent" },
    { id: 3, title: "معرض المدرسة", category: "Event", color: "from-neutral-light/30 to-transparent" },
    { id: 4, title: "مناقشة الاستراتيجيات", category: "Team", color: "from-secondary/50 to-transparent" },
    { id: 5, title: "تجميع أجزاء V2", category: "Robot", color: "from-accent/50 to-transparent" },
    { id: 6, title: "زيارة الأكاديمية الليبية", category: "Event", color: "from-neutral-light/30 to-transparent" },
];

export default function ExhibitionPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <section className="bg-secondary/40 py-24 border-b border-secondary/50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-neutral-light/10 rounded-full flex items-center justify-center text-neutral-light mx-auto mb-6"
                    >
                        <ImageIcon size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        معرض <span className="text-accent">الصور</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        توثيق لرحلة العمل، التصميم، والنجاح. استعرض ألبوم صور فريقنا والروبوت في مختلف الفعاليات والمراحل.
                    </motion.p>
                </div>
            </section>

            <Section>
                {/* Filters (Visual only for now) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["الكل", "الفريق والمختبر", "الروبوت (Robot)", "الفعاليات الخارجية"].map((filter, i) => (
                        <button key={i} className={`px-6 py-2 rounded-full font-medium transition-colors ${i === 0 ? "bg-accent text-primary font-bold shadow-md shadow-accent/20" : "bg-secondary/50 text-neutral-light hover:bg-secondary"
                            }`}>
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GALLERY.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ delay: (index % 3) * 0.15 }}
                            className="relative group rounded-2xl overflow-hidden bg-secondary/20 border border-secondary/50 aspect-video md:aspect-[4/3] flex items-center justify-center"
                        >
                            {/* Background Placeholder Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                            <ImageIcon size={48} className="text-secondary opacity-50 relative z-10 group-hover:scale-110 transition-transform duration-500" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                                <h3 className="text-neutral-white font-heading font-bold text-lg">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
