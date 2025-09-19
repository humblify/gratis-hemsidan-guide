import { Database, AlertTriangle, TrendingDown } from "lucide-react";
import problemIcons from "@/assets/problem-icons.png";

const ProblemSection = () => {
  const problems = [
    {
      icon: Database,
      title: "Dataöverflöd, Insiktsbrist",
      description: "Finansiella prognoser, miljökonsekvensbeskrivningar och regulatoriska krav existerar i isolerade silos, vilket leder till fragmenterade beslut."
    },
    {
      icon: AlertTriangle,
      title: "Dolda Risker",
      description: "Miljörisker förblir osynliga i traditionella finansiella kalkyler tills det är för sent och kostnaderna exploderar."
    },
    {
      icon: TrendingDown,
      title: "Strandade Tillgångar",
      description: "Investeringar som inte tar hänsyn till hållbarhet riskerar att bli värdelösa när regulatoriska förändringar accelererar."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Problemet: <span className="text-primary">Dataöverflöd, Insiktsbrist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dagens beslutsfattare drunknar i data men svälter på handlingskraftiga insikter. 
            Tre kritiska utmaningar blockerar vägen till hållbar lönsamhet.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="card-glass p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Element */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-destructive/10 rounded-xl border border-destructive/20">
            <p className="text-destructive font-medium">
              Resultat: Suboptimala beslut, förhöjda risker och missade möjligheter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;