import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Conecte seus canais", desc: "Integre WhatsApp, Instagram, Messenger e outros canais em minutos." },
  { num: "02", title: "Configure automações", desc: "Crie fluxos e agentes de IA para automatizar o atendimento." },
  { num: "03", title: "Escale seu negócio", desc: "Acompanhe métricas, otimize processos e cresça sem limites." },
];

const HowItWorks = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.08),transparent_60%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary mb-4 px-4 py-1.5 rounded-full glass"
          >
            Como Funciona
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comece em{" "}
            <span className="gradient-text text-glow">3 passos simples</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px origin-left"
            style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--secondary)/0.5), hsl(var(--accent)/0.5))" }}
          />
          
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
              className="text-center relative group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-xl mb-6 relative z-10 shadow-glow group-hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] transition-shadow duration-300"
              >
                {s.num}
              </motion.div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
