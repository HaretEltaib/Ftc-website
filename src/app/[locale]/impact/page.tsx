"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Globe2, GraduationCap, Users2, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const IMPACT_STAGES = [
    {
        title: "مبادرات مدرسة شهداء الشط",
        icon: <GraduationCap size={32} />,
        color: "text-secondary",
        border: "border-t-secondary",
        desc: "نظمنا معارض داخل المدرسة لتعريف زملائنا بعلوم الروبوتيكا مما زاد الإقبال على نادي الروبوت بنسبة 150%."
    },
    {
        title: "ورش عمل STEM",
        icon: <Rocket size={32} />,
        color: "text-accent",
        border: "border-t-accent",
        desc: "تدريب أكثر من 200 طالب وطالبة من المرحلة الإعدادية على مبادئ البرمجة ومفاهيم الهندسة الميكانيكية."
    },
    {
        title: "التعاون مع المدارس الأخرى",
        icon: <Users2 size={32} />,
        color: "text-neutral-light",
        border: "border-t-neutral-light/50",
        desc: "قمنا بزيارات دورية للمدارس الحكومية في طرابلس لنقل فكرة مسابقة FIRST والمساعدة في إطلاق أندية روبوت مماثلة."
    }
];

export default function ImpactPage() {
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
                        <Globe2 size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        الأثر <span className="text-accent">المجتمعي</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        نؤمن أن الهندسة ليست فقط لبناء الروبوتات، بل لبناء الإنسان ومجتمع التكنولوجيا. طموحنا يتجاوز جدران معملنا لنصل لكل طالب مبدع في ليبيا.
                    </motion.p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {IMPACT_STAGES.map((stage, index) => (
                        <motion.div key={stage.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.2 }}>
                            <Card className={`h-full border-t-4 ${stage.border} text-center flex flex-col items-center hover:-translate-y-2 transition-transform`}>
                                <div className={`w-16 h-16 rounded-2xl bg-primary flex items-center justify-center ${stage.color} mb-6 shadow-lg`}>
                                    {stage.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4">{stage.title}</h3>
                                <p className="text-neutral-light/80 font-medium leading-relaxed">
                                    {stage.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Collaboration */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Card className="bg-gradient-to-r from-primary to-secondary/40 border-accent/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
                            <div>
                                <h2 className="text-3xl font-heading font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
                                    المشاركة في المعارض التقنية
                                </h2>
                                <p className="text-neutral-light/90 leading-relaxed font-medium max-w-2xl mb-6">
                                    شاركنا بشرف في معارض المؤسسات التقنية والأكاديمية الليبية للاتصالات، وقدمنا عروضاً حية للجمهور لنشر ثقافة منظمة FIRST والعلوم التكنولوجية بين مختلف الأعمار. نأمل أن يكون جناح فريقنا في المعارض شرارة تلهم الفرق الأخرى في المستقبل.
                                </p>
                                <Link href="/exhibition">
                                    <Button className="mx-auto md:mx-0">
                                        استكشف معرض الصور
                                    </Button>
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 aspect-video bg-primary/80 rounded-xl border-2 border-dashed border-secondary/50 flex items-center justify-center">
                                <span className="text-neutral-light/40">Exhibition Video/Image Placeholder</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </Section>
        </>
    );
}
