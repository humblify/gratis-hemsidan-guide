import { motion } from 'framer-motion';
import { Eye, GitMerge, Target, TrendingUp } from 'lucide-react';

const CorePrinciples = () => {
  const principles = [
    {
      icon: Eye,
      title: 'Radikal Transparens',
      description: 'Spåra varje beräkning tillbaka till källan med vår unika kunskapsgraf. Se exakt hur varje datapunkt påverkar ditt resultat.',
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/40'
    },
    {
      icon: GitMerge,
      title: 'Integrerat Beslutsfattande',
      description: 'Se finansiella och miljömässiga data i en och samma vy. Ingen kompromiss mellan lönsamhet och hållbarhet.',
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/40'
    },
    {
      icon: Target,
      title: 'Prediktiv Riskhantering',
      description: 'Kör tusentals scenarier för att förstå framtida risker och möjligheter. Förbered dig för det okända.',
      color: 'from-success/20 to-success/5',
      borderColor: 'border-success/40'
    },
    {
      icon: TrendingUp,
      title: 'Hållbar Lönsamhet',
      description: 'Optimera dina projekt för maximal, långsiktig avkastning. Hållbarhet är inte en kostnad - det är en investering.',
      color: 'from-warning/20 to-warning/5',
      borderColor: 'border-warning/40'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/10 to-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Byggd på </span>
            <span className="text-glow">fyra grundpelare</span>
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-glass p-8 group hover:scale-[1.02] transition-all duration-500 glass-hover"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center border ${principle.borderColor} group-hover:scale-110 transition-transform duration-500`}>
                  <principle.icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
