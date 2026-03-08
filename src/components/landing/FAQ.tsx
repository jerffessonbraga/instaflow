import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a integração com Instagram e WhatsApp?",
    answer:
      "A InstaFlow conecta-se diretamente às APIs oficiais do Instagram e WhatsApp Business. Em poucos cliques, você vincula suas contas e todas as mensagens passam a ser gerenciadas em uma única caixa de entrada unificada.",
  },
  {
    question: "Preciso de conhecimento técnico para usar a plataforma?",
    answer:
      "Não! A InstaFlow foi projetada para ser intuitiva. Qualquer pessoa consegue configurar automações, criar chatbots e gerenciar conversas sem escrever uma linha de código.",
  },
  {
    question: "Posso testar antes de assinar um plano?",
    answer:
      "Sim, oferecemos um período de teste gratuito de 14 dias com acesso a todas as funcionalidades do plano Pro. Não é necessário cartão de crédito para começar.",
  },
  {
    question: "Quantos atendentes podem usar a plataforma ao mesmo tempo?",
    answer:
      "Depende do seu plano. O plano Starter suporta até 3 atendentes, o Pro até 10 e o Enterprise oferece atendentes ilimitados com controle avançado de permissões.",
  },
  {
    question: "A InstaFlow oferece relatórios e analytics?",
    answer:
      "Sim! Todos os planos incluem dashboards com métricas de tempo de resposta, volume de conversas, desempenho da equipe e taxa de conversão. O plano Enterprise inclui relatórios personalizados e exportação de dados.",
  },
  {
    question: "Como funciona o suporte ao cliente da InstaFlow?",
    answer:
      "Oferecemos suporte via chat ao vivo e e-mail em todos os planos. Clientes Pro e Enterprise contam com suporte prioritário e gerente de conta dedicado para garantir o sucesso da implementação.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.04),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass border border-primary/20 text-primary mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre a InstaFlow e descubra como podemos transformar seu atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl border border-border/50 p-2 md:p-4">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-border/30 rounded-xl px-5 py-1 hover:border-primary/30 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.2)] transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base hover:no-underline hover:text-primary transition-colors duration-200 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
