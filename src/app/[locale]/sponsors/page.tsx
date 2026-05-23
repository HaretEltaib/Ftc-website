"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Handshake, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SPONSORS = [
    {
        name: "إدارة مدرسة شهداء الشط الثانوية",
        type: "الشريك التأسيسي",
        desc: "دعمت الفكرة منذ اليوم الأول وقدمت المساحة والتجهيزات الأولية ليصبح الحلم حقيقة.",
        tier: "Platinum"
    },
    {
        name: "الأكاديمية الليبية للاتصالات العامة",
        type: "الراعي التقني",
        desc: "دعم الفريق بالموارد التقنية وتوفير فرص التدريب والتطوير للطلاب في مجال الاتصالات والبرمجة.",
        tier: "Gold"
    },
    {
        name: "اتحاد الطلبة",
        type: "الراعي المجتمعي",
        desc: "تنظيم المعارض المدرسية وحملات التوعية لاستقطاب المبدعين وتسهيل المهام اللوجستية.",
        tier: "Silver"
    }
];

export default function SponsorsPage() {
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
                        <Handshake size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-neutral-white"
                    >
                        الرعاة <span className="text-accent">وشركاء النجاح</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-light/80 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        الإنجازات العظيمة لا تتحقق بالجهد الفردي. نشكر كل من آمن برسالتنا وساهم في تجهيزنا لبطولة FIRST Tech Challenge.
                    </motion.p>
                </div>
            </section>

            <Section>
                {/* Current Sponsors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {SPONSORS.map((sponsor, index) => (
                        <motion.div key={sponsor.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.2 }}>
                            <Card className={`h-full text-center flex flex-col items-center hover:scale-105 transition-transform ${sponsor.tier === "Platinum" ? "border-t-4 border-t-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]" :
                                sponsor.tier === "Gold" ? "border-t-4 border-t-accent shadow-lg shadow-accent/20" :
                                    "border-t-4 border-t-[#bdc3c7]"
                                }`}>
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 font-bold text-2xl ${sponsor.tier === "Platinum" ? "bg-neutral-100/10 text-neutral-100" :
                                    sponsor.tier === "Gold" ? "bg-accent/10 text-accent" :
                                        "bg-[#bdc3c7]/10 text-[#bdc3c7]"
                                    }`}>
                                    {sponsor.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-2">{sponsor.name}</h3>
                                <span className={`text-sm font-semibold mb-4 ${sponsor.tier === "Platinum" ? "text-neutral-300" :
                                    sponsor.tier === "Gold" ? "text-accent" :
                                        "text-[#bdc3c7]"
                                    }`}>{sponsor.type}</span>
                                <p className="text-neutral-light/80 font-medium leading-relaxed">
                                    {sponsor.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action for Future Sponsors */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="bg-gradient-to-l from-primary to-secondary text-center border-accent/30 py-12">
    <Star size={48} className="mx-auto text-accent mb-6 animate-pulse" />

    <h2 className="text-3xl font-heading font-bold mb-4">
        كن شريكاً في بناء مهندسي المستقبل
    </h2>

    <p className="text-neutral-light/90 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
        رعايتك لفريق 33554 تعني استثماراً حقيقياً في مستقبل التكنولوجيا في ليبيا.
        نحن نبحث عن رعاة لدعم جهودنا في المشاركات الدولية والمحلية ولتطوير أدوات الروبوت الخاصة بالفريق.
    </p>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=www.haret2010@gmail.com&su=طلب%20رعاية%20MS%20Robotics%20Team%2033554&body=السادة%20الكرام،%0A%0Aتحية%20طيبة%20وبعد،%0A%0Aالسادة%20قادة%20فريق%20MS%20Robotics%20Team%2033554%20التابع%20لمدرسة%20الشهداء%20الثانوية%20%E2%80%93%20ليبيا،%0A%0Aنسعى%20لتمثيل%20بلادنا%20بأفضل%20صورة%20ممكنة.%0A%0Aنأمل%20التعاون%20معكم%20كشريك%20داعم%20للفريق،%20حيث%20أن%20دعمكم%20سيساهم%20في%20تطوير%20مشاريعنا%20الهندسية%20ودعم%20نشر%20ثقافة%20STEM%20في%20المجتمع.%0A%0Aيسعدنا%20تزويدكم%20بمزيد%20من%20التفاصيل%20ومناقشة%20فرص%20الرعاية.%0A%0Aمع%20فائق%20الاحترام%20والتقدير،%0AMS%20Robotics%20Team%2033554" >
        <Button size="lg" className="shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/60">
            تواصل معنا لرعايتنا 
            <ArrowLeft className="ml-2" size={20} />
        </Button>
    </a>
</Card>
                </motion.div>
            </Section>
        </>
    );
}
