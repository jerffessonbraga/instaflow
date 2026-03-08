import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

const channels = [
  { name: "WhatsApp", icon: "💬" },
  { name: "Instagram", icon: "📸" },
  { name: "Messenger", icon: "💭" },
  { name: "Email", icon: "📧" },
  { name: "Telegram", icon: "✈️" },
];

const stats = [
  { end: 5, suffix: "+", label: "Canais integrados" },
  { end: 10, suffix: "M+", label: "Mensagens enviadas" },
  { end: 99, suffix: ".9%", label: "Uptime garantido" },
  { end: 24, suffix: "/7", label: "Suporte ativo" },
];

const StatItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { ref, count } = useCountUp(end, 1800);
  return (
    <div className="text-center">
      <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl text-foreground">
        {count}{suffix}
      </span>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const Channels = () => {
  return (
    <section className="py-20 border-y border-border/50 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container mx-auto space-y-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]"
        >
          Integrado com os principais canais
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass hover:border-glow transition-all duration-300 cursor-default"
            >
              <span className="text-2xl">{ch.icon}</span>
              <span className="font-medium text-sm text-foreground">{ch.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border/50"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Channels;
