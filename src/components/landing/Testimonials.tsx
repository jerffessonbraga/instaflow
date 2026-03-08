import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Costa",
    role: "CEO, TechVendas",
    text: "A plataforma transformou nosso atendimento. Reduzimos o tempo de resposta em 80% com os agentes de IA.",
    avatar: "AC",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor, MegaShop",
    text: "Ter todos os canais em um só lugar mudou completamente nossa operação. Recomendo para qualquer empresa.",
    avatar: "CM",
  },
  {
    name: "Mariana Silva",
    role: "Head de Marketing, GrowUp",
    text: "O CRM integrado e as automações nos ajudaram a triplicar a conversão de leads em 3 meses.",
    avatar: "MS",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.06),transparent_60%)]" />
      
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
            Depoimentos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos{" "}
            <span className="gradient-text text-glow">clientes dizem</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 hover:border-glow transition-all duration-300 relative"
            >
              <Quote size={32} className="text-primary/10 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + j * 0.08, type: "spring", stiffness: 200 }}
                  >
                    <Star size={16} className="fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-glow">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
