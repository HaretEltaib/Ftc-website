"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Wrench, TerminalSquare, Gamepad2, Megaphone } from "lucide-react";

const COACHES = [
    {
        name: "سراج البدري",
        role: "Siraj Al-Badri - القائد العام ومدرب البرمجة",
        desc: "يقود الفريق برؤية استراتيجية، ويوجه فريق البرمجة لكتابة أكواد تنافسية للتحكم الذاتي واليدوي.",
        imagePlaceholder: "S"
    },
    {
        name: "عدي عقيلة",
        role: "Adi Aqila - القائد والمشرف على التركيب",
        desc: "المهندس الميكانيكي الذي يضع أسس تصميم الروبوت الصلبة ويوجه فريق البناء نحو أفضل الحلول الهندسية.",
        imagePlaceholder: "A"
    }
];

const SUBTEAMS = [
    {
        title: "لجنة التركيب والبناء (Construction)",
        icon: <Wrench size={32} />,
        color: "text-accent",
        border: "border-t-accent",
        desc: "مسؤولون عن التصميم بمساعدة الحاسوب (CAD) وتجميع القطع الميكانيكية بأساليب هندسية مبتكرة."
    },
    {
        title: "لجنة البرمجة (Programming)",
        icon: <TerminalSquare size={32} />,
        color: "text-secondary",
        border: "border-t-secondary",
        desc: "تطوير لوغارتميات الذكاء الاصطناعي، وTeleOp، وبرمجة الأنظمة المستقلة باستخدام Java و Android Studio."
    },
    {
        title: "فريق القيادة (Drivers)",
        icon: <Gamepad2 size={32} />,
        color: "text-neutral-light",
        border: "border-t-neutral-light/50",
        desc: "التدريب المكثف على قيادة الروبوت والعمل تحت الضغط لضمان تحقيق أعلى النقاط في المباريات."
    },
    {
        title: "اللجنة الإعلامية (Media)",
        icon: <Megaphone size={32} />,
        color: "text-accent",
        border: "border-t-accent",
        desc: "توثيق الإنجازات، تصميم الهوية البصرية، وإدارة ملف الجوائز (Portfolio) وتقديم الفريق للرعاة."
    }
];

export default function TeamPage() {
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
                        نخبة <span className="text-accent">أبطالنا</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        النجاح لا يعتمد على الروبوت فحسب، بل على العقول المبدعة التي تعمل معاً في تناغم واحترافية.
                    </motion.p>
                </div>
            </section>

            <Section>
                {/* Coaches Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-heading font-bold mb-10 text-center border-b-2 border-accent pb-4 block mx-auto w-fit">
                        المدربون والقادة
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {COACHES.map((coach, index) => (
                            <motion.div key={coach.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.2 }}>
                                <Card className="flex flex-col items-center text-center p-8 bg-secondary/20">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-secondary flex items-center justify-center border-4 border-accent/20 shadow-xl">
                                        <span className="text-5xl font-bold text-accent/50">{coach.imagePlaceholder}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading mb-2 text-neutral-white">{coach.name}</h3>
                                    <p className="text-accent text-sm mb-4 font-semibold">{coach.role}</p>
                                    <p className="text-neutral-light/80 font-medium leading-relaxed">
                                        {coach.desc}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subteams Section */}
                <div>
                    <h2 className="text-3xl font-heading font-bold mb-10 text-center border-b-2 border-accent pb-4 block mx-auto w-fit">
                        اللجان المتخصصة
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SUBTEAMS.map((team, index) => (
                            <motion.div key={team.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.1 }}>
                                <Card className={`h-full border-t-4 ${team.border} flex flex-col items-start hover:bg-secondary/40 transition-colors`}>
                                    <div className={`w-16 h-16 rounded-2xl bg-primary flex items-center justify-center ${team.color} mb-6 shadow-lg`}>
                                        {team.icon}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold mb-3">{team.title}</h3>
                                    <p className="text-neutral-light/80 font-medium leading-relaxed">
                                        {team.desc}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
