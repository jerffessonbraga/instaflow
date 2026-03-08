import { motion } from "framer-motion";
import { Inbox, Users, Workflow, Bot, Mail, Share2, BarChart3 } from "lucide-react";

const features = [
  { icon: Inbox, title: "Inbox Unificado", desc: "Todas as conversas de todos os canais em uma única caixa de entrada inteligente." },
  { icon: Users, title: "CRM Integrado", desc: "Gerencie leads, contatos e negociações sem sair da plataforma." },
  { icon: Workflow, title: "Automações", desc: "Crie fluxos automatizados para qualificar leads e responder instantaneamente." },
  { icon: Bot, title: "Agentes de IA", desc: "Atendentes virtuais que entendem contexto e resolvem problemas reais." },
  { icon: Mail, title: "Email Marketing", desc: "Campanhas segmentadas com templates profissionais e analytics." },
  { icon: Share2, title: "Social Media", desc: "Publique e gerencie conteúdo em todas as redes sociais." },
  { icon: BarChart3, title: "Analytics", desc: "Dashboards em tempo real com métricas que importam para o seu negócio." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const Features = () => {
  return (
    <section id="recursos" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary mb-4 px-4 py-1.5 rounded-full glass"
          >
            Recursos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa,{" "}
            <span className="gradient-text text-glow">em um só lugar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ferramentas poderosas para gerenciar comunicação, vendas e atendimento de forma integrada.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group glass rounded-xl p-6 hover:border-glow transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1, transition: { duration: 0.5 } }}
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300"
              >
                <f.icon size={22} />
              </motion.div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
