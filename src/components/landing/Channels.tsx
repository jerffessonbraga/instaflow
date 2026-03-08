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
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto space-y-12">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Integrado com os principais canais
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              <span className="text-2xl">{ch.icon}</span>
              <span className="font-medium text-sm">{ch.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
