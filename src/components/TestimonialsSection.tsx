import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Lindberg",
      title: "CFO",
      company: "Nordic Steel Group",
      quote: "EROI-analysen hjälpte oss att identifiera €12M i dold miljörisk inom vår tillverkningsportfölj. Nu fattar vi investeringsbeslut med full transparens.",
      rating: 5
    },
    {
      name: "Anders Eriksson",
      title: "Chief Sustainability Officer",
      company: "GreenTech Solutions",
      quote: "Äntligen ett verktyg som översätter våra hållbarhetsinitiativ till språk som styrelsen förstår. EROI har blivit vårt hemliga vapen.",
      rating: 5
    },
    {
      name: "Dr. Elena Kowalski",
      title: "Head of Strategic Planning",
      company: "Future Energy Ventures",
      quote: "Radikal transparens är inte bara ett buzz-word här. Vi kan spåra varje rekommendation tillbaka till källdata. Det bygger otroligt förtroende.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-card/10 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Våra Kunder <span className="text-primary">Skapar Värde</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ledande företag inom energi, tillverkning och infrastruktur använder redan 
            EROI för att optimera sina investeringsportföljer.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-glass p-8 relative group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-background" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.title}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">€50M+</div>
              <div className="text-sm text-muted-foreground">Analyserat kapital</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">EROI-analyser</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">87%</div>
              <div className="text-sm text-muted-foreground">Förbättrat ROI</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI-monitorering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;