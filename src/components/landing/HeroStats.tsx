import { motion } from "framer-motion";
import { MessageCircle, Users, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const StatCounter = ({ end, suffix, label, icon: Icon }: { end: number; suffix: string; label: string; icon: React.ElementType }) => {
  const { ref, count } = useCountUp(end, 2200);
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
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

const HeroStats = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.8 }}
    className="flex flex-wrap items-center gap-8 mt-12 justify-center lg:justify-start"
  >
    <StatCounter end={50} suffix="k+" label="Mensagens/mês" icon={MessageCircle} />
    <StatCounter end={2000} suffix="+" label="Empresas ativas" icon={Users} />
    <StatCounter end={98} suffix="%" label="Satisfação" icon={TrendingUp} />
  </motion.div>
);

export default HeroStats;
