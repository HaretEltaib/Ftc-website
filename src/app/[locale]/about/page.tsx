"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Target, Lightbulb, HeartHandshake, History, Handshake } from "lucide-react";

export default function AboutPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <section className="bg-secondary/40 py-24 border-b border-secondary/50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        من نحن <span className="text-accent">؟</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        نحن فريق FTC 33554 من مدرسة الشهداء الثانوية. نعتز بكوننا أول فريق روبوتات في مدرسة عامة في ليبيا، ونسعى لأن نكون نموذجاً يحتذى به في الابتكار والعمل الجماعي.
                    </motion.p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Mission */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="h-full border-t-4 border-t-accent hover:border-accent">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">مهمتنا (Mission)</h2>
                            </div>
                            <p className="text-neutral-light/90 leading-relaxed font-medium">
                                بناء بيئة تعليمية ملهمة لطلاب المدارس العامة في ليبيا، تمكنهم من ممارسة الهندسة وتطوير مهاراتهم التقنية والشخصية، وتمثيل بلادنا بأفضل صورة في تحديات FIRST.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Vision */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="h-full border-t-4 border-t-secondary hover:border-secondary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary">
                                    <Lightbulb size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">رؤيتنا (Vision)</h2>
                            </div>
                            <p className="text-neutral-light/90 leading-relaxed font-medium">
                                أن نكون رواداً في صناعة الروبوتات على مستوى المدارس في  ليبيا , وأن نلهم جيلاً جديداً من المهندسين والقادة التكنولوجيين.
                            </p>
                        </Card>
                    </motion.div>
                </div>

                {/* Founding Story & Values */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
                        <Card className="h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-neutral-white">
                                    <History size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">قصة التأسيس</h2>
                            </div>
                            <div className="space-y-4 text-neutral-light/90 leading-relaxed font-medium">
                                <p>
                                    بدأت رحلتنا كحلم بتوفير فرص متكافئة لطلاب المدارس العامة. بالرغم من قلة الموارد، اجتمع شغف الطلاب مع إصرار المدربين لتأسيس أول فريق FTC في مدرسة عامة في ليبيا.
                                </p>
                                <p>
                                    منذ يومنا الأول، واجهنا تحديات عديدة، من توفير المعدات إلى بناء مساحة عمل متكاملة. ولكن بدعم من إدارة المدرسة وتعاون المجتمع، تمكنا من بناء أساس قوي للمستقبل.
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-1">
                        <Card className="h-full border-t-4 border-t-accent">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent">
                                    <HeartHandshake size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">قيمنا الأساسية</h2>
                            </div>
                            <ul className="space-y-3 text-neutral-light/90 font-medium">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    الاحترافية الممتعة (Gracious Professionalism)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    التعاون المشترك (Coopertition)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    الابتكار والعمل الجاد
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    الاستدامة ونقل المعرفة
                                </li>
                            </ul>
                        </Card>
                    </motion.div>
                </div>

                {/* Scorpionz Collaboration */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Card className="bg-gradient-to-l from-primary to-secondary/50 border-accent/20">
                        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
                            <div className="w-24 h-24 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <Handshake size={48} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-heading font-bold mb-3 flex items-center justify-center md:justify-start gap-3">
                                    التعاون المشترك <span className="text-sm font-normal py-1 px-3 bg-secondary rounded-full">Scorpionz 26254</span>
                                </h2>
                                <p className="text-neutral-light/90 leading-relaxed font-medium">
                                    إيماناً منا بقيمة العمل معاً (Coopertition)، نفخر بشراكتنا وتعاوننا المستمر مع فريق Scorpionz Robotics 26254. نتبادل الخبرات، وندير ورش عمل مشتركة، ونتدرب معاً لرفع مستوى المنافسة وتمثيل ليبيا بأفضل المعايير الدولية في منظمة FIRST.
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </Section>
        </>
    );
}
