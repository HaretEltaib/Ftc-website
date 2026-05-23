"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, BrainCircuit, Gamepad2, Blocks } from "lucide-react";

export default function ProgrammingPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const codeSnippet = `
// FTC 33554 Autonomous Example
public void runOpMode() {
    initializeHardware();
    visionSystem.detectElement();
    waitForStart();

    if (opModeIsActive()) {
        int position = visionSystem.getPosition();
        
        switch(position) {
            case LEFT:
                driveStraight(24, 0.5);
                turnLeft(90);
                scorePreload();
                break;
            case CENTER:
                driveStraight(36, 0.5);
                scorePreload();
                break;
            case RIGHT:
                driveStraight(24, 0.5);
                turnRight(90);
                scorePreload();
                break;
        }
        
        parkInZone();
    }
}
  `.trim();

    return (
        <>
            <section className="bg-secondary/40 py-24 border-b border-secondary/50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6"
                    >
                        <Code2 size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        البرمجة <span className="text-accent">والذكاء الاصطناعي</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        نستخدم أحدث تقنيات الرؤية الحاسوبية ومعالجة البيانات لبناء خوارزميات ذكية تسمح لروبوتنا بالتنقل المستقل والتفاعل البشري الدقيق.
                    </motion.p>
                </div>
            </section>

            <Section>
                {/* Features Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl font-heading font-bold mb-6 text-neutral-white flex items-center gap-3">
                            <BrainCircuit className="text-secondary" /> الأنظمة المستقلة (Autonomous)
                        </h2>
                        <p className="text-neutral-light/90 leading-relaxed font-medium mb-6">
                            يعتمد فريقنا على لوغارتميات الطريق المتقدمة (RoadRunner) جنباً إلى جنب مع Odometry Pods لتحديد موقع الروبوت في الملعب بدقة متناهية (ملم/درجة).
                            نستخدم كاميرا USB لمعالجة الصور (OpenCV / TensorFlow) للتعرف على العناصر التسجيلية في أول 30 ثانية من المباراة.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">Java</span>
                            <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">OpenCV</span>
                            <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">RoadRunner v1.0</span>
                        </div>
                    </motion.div>

                    {/* Logic Snippet */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="bg-[#0d1117] border-secondary/50 p-0 overflow-hidden font-mono text-sm leading-relaxed text-neutral-light/90 shadow-2xl" hoverable={false}>
                            <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-secondary/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <span className="text-xs text-neutral-light/50">AutoDrive.java</span>
                            </div>
                            <div className="p-4 overflow-x-auto text-left" dir="ltr">
                                <pre><code>{codeSnippet}</code></pre>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* TeleOp and Systems */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="h-full border-t-4 border-t-accent">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent">
                                    <Gamepad2 size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">التحكم اليدوي (TeleOp)</h2>
                            </div>
                            <p className="text-neutral-light/90 leading-relaxed font-medium">
                                برمجة استجابة متحكمات القيادة (Gamepad) بحيث تتوافق مع نظام Mechanum القياسي. لقد قمنا بتخصيص منحنيات التسارع (Acceleration Curves) للسائقين لتمكين القيادة الدقيقة أثناء التقاط الكتل، والسرعة القصوى أثناء التنقل الحر.
                            </p>
                        </Card>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <Card className="h-full border-t-4 border-t-secondary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary">
                                    <Blocks size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">منطق الميكانيكا (Shooter/Feeder)</h2>
                            </div>
                            <p className="text-neutral-light/90 leading-relaxed font-medium">
                                إدارة المهام المتزامنة (State Machines) لتنظيم عملية الرفع (Slides) والإلقاء (Outtake). عند الضغط على زر واحد، يتحرك الروبوت تلقائياً عبر سلسلة حركات متتالية بدلاً من التحكم اليدوي المعقد لكل محرك على حدة، مما يوفر وقت المباراة بنسبة 30%.
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
