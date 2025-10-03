import { motion } from 'framer-motion';
import { Database, GitBranch, AlertTriangle, Scale } from 'lucide-react';

const FogOfComplexity = () => {
  const problems = [
    {
      icon: Database,
      title: 'Data Silos',
      description: 'Fragmenterad information i otaliga system'
    },
    {
      icon: GitBranch,
      title: 'Fragmented Analysis',
      description: 'Stuprörsanalyser utan helhetsperspektiv'
    },
    {
      icon: AlertTriangle,
      title: 'Hidden Risks',
      description: 'Dolda kostnader och externaliteter'
    },
    {
      icon: Scale,
      title: 'Regulatory Pressure',
      description: 'Ökande krav på transparens och rapportering'
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-destructive">Dagens beslut</span>{' '}
            <span className="text-foreground">fattas i blindo.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I en värld av datakaos, stuprörsanalyser och ignorerade externaliteter 
            är traditionella verktyg otillräckliga. Fragmenterad data leder till 
            <span className="text-destructive font-semibold"> dolda risker</span> och 
            <span className="text-destructive font-semibold"> förlorad lönsamhet</span>.
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass p-8 text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:bg-destructive/20 transition-colors border border-destructive/30">
                  <problem.icon className="w-10 h-10 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block card-glow px-12 py-6">
            <p className="text-xl font-bold">
              <span className="text-destructive">Resultat:</span>{' '}
              <span className="text-foreground">Suboptimala beslut och missade möjligheter.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FogOfComplexity;
