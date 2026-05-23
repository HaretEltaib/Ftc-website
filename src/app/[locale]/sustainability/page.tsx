"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, TrendingUp, TreeDeciduous } from "lucide-react";

const TIMELINE_STAGES = [
    { id: 1, title: "الاختيار والتوظيف", desc: "اختيار الطلاب الشغوفين وإجراء اختبارات القبول لضمان التزامهم بالتخصصات المختلفة." },
    { id: 2, title: "التأسيس التقني", desc: "ورش عمل مكثفة في مبادئ الميكانيكا، CAD، البرمجة (Java)، والإلكترونيات." },
    { id: 3, title: "فهم تحدي FIRST", desc: "دراسة دقيقة لقوانين اللعبة (Game Manual) واستنباط استراتيجيات الفوز." },
    { id: 4, title: "التصميم الأولي (V1)", desc: "تصميم النماذج الأولية على برامج 3D واختبارها على نماذج خشبية ومحركات بسيطة." },
    { id: 5, title: "البناء والبرمجة الأولية", desc: "بناء الهيكل المعدني وتركيب حساسات Control Hub مع كتابة كود التحرك الأساسي." },
    { id: 6, title: "التجربة والتحسين (V2)", desc: "اكتشاف العيوب الميكانيكية، تعديلها، تحسين الذكاء الاصطناعي وكاميرا التعرف على العناصر." },
    { id: 7, title: "تدريب السائقين", desc: "محاكاة المباريات، التدرب على العمل تحت الضغط، وتنسيق العمل مع الفِرق الشريكة." },
    { id: 8, title: "الأثر المجتمعي", desc: "نشر المعرفة في المدارس الأخرى وعمل ورش تعليمية لطلاب الإعدادية لتهيئة أجيال FTC القادمة." },
    { id: 9, title: "المنافسة ونقل الراية", desc: "المشاركة في البطولة، تقييم الأداء، ومن ثم توجيه رواد الفريق الحالي لتدريب الجيل الجديد من الطلاب." },
];

export default function SustainabilityPage() {
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
                        className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6"
                    >
                        <TreeDeciduous size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        خريطة <span className="text-accent">الاستدامة</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        لا نبني روبوتاً ليوم واحد، بل نبني نظاماً لسنوات. منهجية فريقنا تضمن نقل المعرفة واستمرار تدفق الإبداع الهندسي جيلاً بعد جيل.
                    </motion.p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl font-heading font-bold mb-6 text-neutral-white flex items-center gap-3">
                            <TrendingUp className="text-accent" /> نظام نقل المعرفة
                        </h2>
                        <p className="text-neutral-light/90 leading-relaxed font-medium mb-6">
                            يعتبر ملف الاستدامة (Sustainability Tracker) أحد أهم ركائز فريقنا 33554 ضمن جائزة FIRST للإلهام والاستدامة. نؤمن بأن النجاح الحقيقي يتمثل في قدرة الفريق على الاستمرار حتى بعد تخرج أعضائه المؤسسين.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "برنامج الإرشاد الداخلي (Mentorship): الخريجون يدربون الطلاب الجدد.",
                                "مكتبة الأكواد والتصاميم المفتوحة (Open Source Archive).",
                                "الشراكة الدائمة مع مؤسسات مثل الأكاديمية الليبية."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={20} />
                                    <span className="text-neutral-light font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="bg-secondary/40 border-2 border-dashed border-accent/50 flex items-center justify-center h-80 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                            <TreeDeciduous size={120} className="text-accent/20 group-hover:scale-110 transition-transform duration-700" />
                            <h3 className="absolute bottom-8 font-heading font-bold text-2xl text-center w-full z-10 text-neutral-white">
                                Building the Engineers of the Future
                            </h3>
                        </Card>
                    </motion.div>
                </div>

                {/* 9 Stage Timeline */}
                <div className="relative">
                    <h2 className="text-3xl font-heading font-bold mb-16 text-center border-b-2 border-accent pb-4 w-fit mx-auto">
                         دورة حياة الفريق (نموذج 9 مراحل)
                        </h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute top-0 bottom-0 right-[28px] md:right-1/2 w-1 bg-secondary/50 md:translate-x-1/2 rounded-full hidden md:block"></div>

                        <div className="space-y-12">
                            {TIMELINE_STAGES.map((stage, index) => (
                                <motion.div
                                    key={stage.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeUp}
                                    className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Center Dot */}
                                    <div className="hidden md:flex absolute right-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-primary border-4 border-accent items-center justify-center font-bold text-lg z-10 shadow-lg shadow-accent/30">
                                        {stage.id}
                                    </div>

                                    {/* Content Box */}
                                    <div className="w-full md:w-5/12">
                                        <Card className={`border-t-4 ${index % 2 === 0 ? "border-t-secondary" : "border-t-accent"}`}>
                                            <div className="flex items-center gap-4 mb-4 md:hidden">
                                                <span className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg">
                                                    {stage.id}
                                                </span>
                                                <h3 className="text-xl font-heading font-bold text-neutral-white">{stage.title}</h3>
                                            </div>
                                            <h3 className="text-xl font-heading font-bold mb-3 text-neutral-white hidden md:block">{stage.title}</h3>
                                            <p className="text-neutral-light/80 font-medium leading-relaxed">
                                                {stage.desc}
                                            </p>
                                        </Card>
                                    </div>
                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

