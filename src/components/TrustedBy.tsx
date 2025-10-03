import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TrustedBy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Humblify förändrade fundamentalt hur vi ser på finansiell risk. Vi kan nu kvantifiera miljöpåverkan i samma termer som vi talar om ROI.",
      author: "Anna Svensson",
      role: "CFO",
      company: "Nordic Energy Solutions",
      focus: "CFO"
    },
    {
      quote: "Det enda verktyget som faktiskt kopplar hållbarhet till P&L. Vi har minskat vår rapporteringstid med 60% och ökat strategisk insikt med 200%.",
      author: "Erik Lindberg",
      role: "Chief Sustainability Officer",
      company: "Global Manufacturing AB",
      focus: "CSO"
    },
    {
      quote: "Humblify gav oss den klarhet vi behövde för att fatta ett mångmiljardbeslut med full transparens och förtroende från alla intressenter.",
      author: "Maria Johansson",
      role: "Strategic Project Lead",
      company: "Infrastructure Development Corp",
      focus: "Strateg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/5 to-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Betrodd av ledare inom</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground">
            <span className="px-4 py-2 card-glass">Energi</span>
            <span className="px-4 py-2 card-glass">Tillverkning</span>
            <span className="px-4 py-2 card-glass">Infrastruktur</span>
            <span className="px-4 py-2 card-glass">Finans</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  display: activeIndex === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Card className="card-glow p-12 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 opacity-20">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <div>
                        <p className="text-lg font-bold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-12' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
