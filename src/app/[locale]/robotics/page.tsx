"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Layers, Settings, Maximize, PlayCircle } from "lucide-react";

export default function RoboticsPage() {
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
                        className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6"
                    >
                        <Settings size={40} className="animate-spin-slow" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        التصميم <span className="text-secondary">الميكانيكي</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        استعداداً لموسم 2025-2026 لتحدي الدخول إلى الأعماق (Into The Deep)، قام فريقنا بهندسة حلول ميكانيكية مبتكرة تعتمد على الدقة والكفاءة وسهولة الصيانة.
                    </motion.p>
                </div>
            </section>

            <Section>
                {/* Core Design Principles */}
                <div className="mb-20">
                    <h2 className="text-3xl font-heading font-bold mb-10 text-center border-b-2 border-accent pb-4 w-fit mx-auto">
                        مبادئنا الهندسية
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
                            <Card className="text-center group border-t-2 border-t-accent hover:border-t-4 transition-all">
                                <Layers className="mx-auto text-accent mb-4" size={32} />
                                <h3 className="text-xl font-heading font-bold mb-3">Modular Design</h3>
                                <p className="text-neutral-light/80 font-medium text-sm leading-relaxed">
                                    تصميم الروبوت كأقسام مستقلة (Drive Base, Intake, Outtake) لتسهيل عمليات التعديل والصيانة السريعة خلال المباريات.
                                </p>
                            </Card>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                            <Card className="text-center group border-t-2 border-t-accent hover:border-t-4 transition-all">
                                <Maximize className="mx-auto text-accent mb-4" size={32} />
                                <h3 className="text-xl font-heading font-bold mb-3">Custom 3D Parts</h3>
                                <p className="text-neutral-light/80 font-medium text-sm leading-relaxed">
                                    استخدام طابعات 3D لإنتاج قطع استثنائية (Custom Mounts & Hooks) تخفف من وزن الروبوت وتلائم القياسات الدقيقة.
                                </p>
                            </Card>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}>
                            <Card className="text-center group border-t-2 border-t-secondary hover:border-t-4 transition-all">
                                <Settings className="mx-auto text-secondary mb-4" size={32} />
                                <h3 className="text-xl font-heading font-bold mb-3">Center of Gravity</h3>
                                <p className="text-neutral-light/80 font-medium text-sm leading-relaxed">
                                    توزيع استراتيجي للوزن والبطارية في الأسفل لمنع الانقلاب (Tipping) عند استخدام الـ Linear Slides لرفع العناصر.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* V1 vs V2 Evolution */}
                <div className="mb-20">
                 <h2 className="text-3xl font-heading font-bold mb-10 text-center border-b-2 border-accent pb-4 w-fit mx-auto">
                     مراحل تطور الروبوت
                    </h2>
                    <Card className="p-0 overflow-hidden bg-primary shadow-2xl border-secondary/50">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 md:border-l border-b md:border-b-0 border-secondary/50 relative bg-secondary/10">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="text-8xl font-black font-heading">V1</span>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-neutral-white mb-4 relative z-10">النسخة الأولى (V1)</h3>
                                <ul className="space-y-3 relative z-10 font-medium text-neutral-light/90">
                                    <li><span className="text-accent">•</span> استخدام Mechanum Wheels للتحرك بالاتجاهات الأربعة.</li>
                                    <li><span className="text-accent">•</span> تصميم ذراع مبسط لالتقاط الكتل من الأرض.</li>
                                    <li><span className="text-accent">•</span> كانت تعاني من بطء في عملية النقل بين الـ Intake والـ Outtake.</li>
                                    <li><span className="text-accent">•</span> وزن الكابلات جعل التوجيه غير دقيق في الأنظمة المستقلة.</li>
                                </ul>
                            </div>
                            <div className="p-8 md:p-12 relative bg-gradient-to-br from-primary to-secondary/30">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="text-8xl font-black font-heading">V2</span>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-accent mb-4 relative z-10">النسخة المحسنة (V2 - Championship)</h3>
                                <ul className="space-y-3 relative z-10 font-medium text-neutral-light/90">
                                    <li><span className="text-accent">•</span> إضافة نظام تعليق (Odometry) لتحسين دقة الوصول الميتري للذكاء الاصطناعي بنسبة 95%.</li>
                                    <li><span className="text-accent">•</span> تصميم نظام نقل عناصر (Active Intake) مستقل للتعامل مع كتل متعددة.</li>
                                    <li><span className="text-accent">•</span> استخدام بكرات ومحركات 435 RPM لتسريع الـ Linear Slides وتقليل وقت التسجيل.</li>
                                    <li><span className="text-accent">•</span> إعادة توجيه (Cable Management) كامل عبر قنوات مخصصة.</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Testing Video Placeholder */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Card className="text-center p-12 bg-secondary/20 border-dashed border-2">
                        <PlayCircle size={64} className="mx-auto text-neutral-light/40 mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">معرض الفيديو واختبارات الأداء</h3>
                        <p className="text-neutral-light/60 text-sm">سيتم إضافة فيديوهات توثيقية حقيقية للروبوت وهو يسجل النقاط قريباً.</p>
                    </Card>
                </motion.div>
            </Section>
        </>
    );
}
