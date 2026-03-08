import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Users, Zap, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useRef } from "react";

const StatCounter = ({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: React.ElementType }) => {
  const { ref, count } = useCountUp(end, 2200);
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <Icon size={18} />
      </div>
      <div>
        <span ref={ref} className="font-display font-bold text-2xl text-foreground">
          {count.toLocaleString("pt-BR")}{suffix}
        </span>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Zap size={14} />
              Plataforma Omnicanal White Label
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Todos os seus canais.{" "}
              <span className="gradient-text">Uma só plataforma.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Gerencie WhatsApp, Instagram, Messenger, CRM, automações e agentes de IA em um único lugar. Escale seu atendimento sem complicação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#precos">
                <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 text-base hover:opacity-90 transition-opacity">
                  Começar Gratuitamente <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#recursos">
                <Button size="lg" variant="outline" className="font-semibold px-8 text-base border-border text-foreground hover:bg-muted">
                  Ver Recursos
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              <StatCounter end={50} suffix="k+" label="Mensagens/mês" icon={MessageCircle} />
              <StatCounter end={2000} suffix="+" label="Empresas ativas" icon={Users} />
              <StatCounter end={98} suffix="%" label="Satisfação" icon={TrendingUp} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover bg-card border border-border p-4">
              {/* Mock dashboard */}
              <div className="rounded-xl bg-muted p-4 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="flex-1 h-6 rounded-md bg-card/60 ml-4" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Conversas", value: "1.284", color: "bg-primary/20 text-primary" },
                    { label: "Leads", value: "342", color: "bg-secondary/20 text-secondary" },
                    { label: "Automações", value: "28", color: "bg-accent/20 text-accent" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 120 }}
                      className={`rounded-lg p-3 ${stat.color}`}
                    >
                      <div className="text-xs font-medium opacity-80">{stat.label}</div>
                      <div className="text-xl font-display font-bold">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2 mt-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.12 }}
                      className="flex items-center gap-3 bg-card/60 rounded-lg p-3"
                    >
                      <div className="w-8 h-8 rounded-full gradient-primary flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 rounded bg-muted w-2/3" />
                        <div className="h-2 rounded bg-muted w-1/3" />
                      </div>
                      <div className="text-xs text-muted-foreground">agora</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card-hover border border-border p-3 flex items-center gap-2"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">IA Ativa</div>
                  <div className="text-[10px] text-muted-foreground">Respondendo...</div>
                </div>
              </motion.div>
            </motion.div>

            {/* New floating element - left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              className="absolute -bottom-3 -left-3 bg-card rounded-xl shadow-card-hover border border-border p-3"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-foreground">+12 leads hoje</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
