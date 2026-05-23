"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, Cpu, Leaf, Users } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/80 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/80 border border-accent/30 text-accent font-medium text-sm mb-6 shadow-lg shadow-accent/20"
          >
            {t("season")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-neutral-white mb-6 leading-tight tracking-tight"
          >
            {t("title_building")} <span className="text-accent">{t("title_engineers")}</span>
            <br />
            <span className="text-4xl md:text-6xl text-neutral-light/90">{t("title_of_future")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-light/80 max-w-2xl mb-10 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/about">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50">
                {t("cta_about")}
                <ArrowLeft className="mr-2" size={20} />
              </Button>
            </Link>
            <Link href="/sponsors">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("cta_sponsor")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <Section className="bg-secondary/10 border-y border-secondary/30 relative z-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeUp}>
            <Card className="text-center group border-t-4 border-t-accent flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">{t("stats_team")}</h3>
              <p className="text-neutral-light/80 mb-6 font-medium leading-relaxed">
                {t("stats_team_desc")}
              </p>
              <Link href="/team" className="text-accent font-bold hover:underline underline-offset-4 flex items-center justify-center gap-1 mt-auto">
                {t("stats_team_link")} <ArrowLeft size={16} />
              </Link>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="text-center group border-t-4 border-t-accent flex flex-col items-center hover:border-accent/50">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">{t("stats_sustainability")}</h3>
              <p className="text-neutral-light/80 mb-6 font-medium leading-relaxed">
                {t("stats_sustainability_desc")}
              </p>
              <Link href="/sustainability" className="text-accent font-bold hover:underline underline-offset-4 flex items-center justify-center gap-1 mt-auto">
                {t("stats_sustainability_link")} <ArrowLeft size={16} />
              </Link>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="text-center group border-t-4 border-t-secondary flex flex-col items-center hover:border-secondary/50">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
                <Cpu size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">{t("stats_robotics")}</h3>
              <p className="text-neutral-light/80 mb-6 font-medium leading-relaxed">
                {t("stats_robotics_desc")}
              </p>
              <Link href="/robotics" className="text-secondary font-bold hover:underline underline-offset-4 flex items-center justify-center gap-1 mt-auto">
                {t("stats_robotics_link")} <ArrowLeft size={16} />
              </Link>
            </Card>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
