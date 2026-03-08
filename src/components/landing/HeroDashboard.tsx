import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const HeroDashboard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
    className="relative"
  >
    {/* Glow behind card */}
    <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl opacity-50" />
    
    <div className="relative rounded-2xl overflow-hidden glass border-glow p-4">
      <div className="rounded-xl bg-muted/50 p-4 space-y-3">
        {/* Browser dots */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <div className="w-3 h-3 rounded-full bg-primary" />
          <div className="flex-1 h-6 rounded-md bg-card/60 ml-4" />
        </div>
        
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Conversas", value: "1.284", color: "bg-primary/15 text-primary border-primary/20" },
            { label: "Leads", value: "342", color: "bg-secondary/15 text-secondary border-secondary/20" },
            { label: "Automações", value: "28", color: "bg-accent/15 text-accent border-accent/20" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.12, type: "spring", stiffness: 120 }}
              className={`rounded-lg p-3 border ${stat.color}`}
            >
              <div className="text-xs font-medium opacity-80">{stat.label}</div>
              <div className="text-xl font-display font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Chat rows */}
        <div className="space-y-2 mt-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="flex items-center gap-3 glass rounded-lg p-3"
            >
              <div className="w-8 h-8 rounded-full gradient-primary flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-3 rounded bg-muted/80 w-2/3" />
                <div className="h-2 rounded bg-muted/60 w-1/3" />
              </div>
              <div className="text-xs text-muted-foreground">agora</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Floating badge top-right */}
    <motion.div
      initial={{ opacity: 0, x: 20, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
      className="absolute -top-4 -right-4 glass-strong rounded-xl shadow-glow p-3 flex items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
          <Zap size={16} />
        </div>
        <div>
          <div className="text-xs font-semibold text-foreground">IA Ativa</div>
          <div className="text-[10px] text-muted-foreground">Respondendo...</div>
        </div>
      </motion.div>
    </motion.div>

    {/* Floating badge bottom-left */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
      className="absolute -bottom-3 -left-3 glass-strong rounded-xl shadow-glow p-3"
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
);

export default HeroDashboard;
