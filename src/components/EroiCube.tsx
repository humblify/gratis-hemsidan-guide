import { motion } from 'framer-motion';
import { DollarSign, Leaf, Users, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const EroiCube = () => {
  const [activeface, setActiveFace] = useState(0);
  
  const faces = [
    {
      icon: DollarSign,
      title: 'Financial Data',
      description: 'ROI, NPV, Kassaflöde',
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/40'
    },
    {
      icon: Leaf,
      title: 'Environmental Data',
      description: 'CO₂, Vatten, Energi',
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/40'
    },
    {
      icon: Users,
      title: 'Social Data',
      description: 'Intressenter, Samhälle',
      color: 'from-success/20 to-success/5',
      borderColor: 'border-success/40'
    },
    {
      icon: TrendingUp,
      title: 'Risk Analysis',
      description: 'Scenarier, Prediktioner',
      color: 'from-destructive/20 to-destructive/5',
      borderColor: 'border-destructive/40'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFace((prev) => (prev + 1) % faces.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

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
            <span className="text-foreground">Vi introducerar </span>
            <span className="text-glow">EROI</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">Environmental Return On Investment</span> - 
            Det kompletta måttet på verklig avkastning.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Vi kvantifierar och monetariserar miljöpåverkan, vilket ger dig en 
            <span className="text-accent font-semibold"> holistisk bild</span> av ett projekts 
            sanna, totala avkastning.
          </p>
        </motion.div>

        {/* EROI Cube Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Cube Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Cube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 cube-rotate" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 card-glow flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-glow mb-2">EROI</h3>
                      <p className="text-sm text-muted-foreground">Holistisk Avkastning</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Data Points */}
              {faces.map((face, index) => {
                const angle = (index * 360) / faces.length;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={face.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeface === index 
                        ? `card-glow ${face.borderColor}` 
                        : 'card-glass opacity-60'
                    }`}>
                      <face.icon className={`w-8 h-8 ${
                        activeface === index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Data Dimensions */}
          <div className="space-y-6">
            {faces.map((face, index) => (
              <motion.div
                key={face.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-glass p-6 transition-all duration-500 cursor-pointer ${
                  activeface === index ? `${face.borderColor} border-2 shadow-2xl` : ''
                }`}
                onMouseEnter={() => setActiveFace(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${face.color} flex items-center justify-center border ${face.borderColor}`}>
                    <face.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {face.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {face.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EroiCube;
