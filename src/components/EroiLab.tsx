import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Info, TrendingUp, Calculator } from "lucide-react";

const EroiLab = () => {
  const [investment, setInvestment] = useState([10]);
  const [revenue, setRevenue] = useState([5]);
  const [emissions, setEmissions] = useState([1000]);
  const [carbonPrice, setCarbonPrice] = useState([50]);

  // Simple EROI calculation
  const calculateEROI = () => {
    const annualRevenue = revenue[0]; // Million EUR
    const investmentCost = investment[0]; // Million EUR
    const annualEmissions = emissions[0]; // Tons CO2
    const pricePerTon = carbonPrice[0]; // EUR/ton
    
    const environmentalCost = (annualEmissions * pricePerTon) / 1000000; // Convert to millions
    const adjustedRevenue = annualRevenue - environmentalCost;
    const eroi = (adjustedRevenue / investmentCost) * 100;
    
    return {
      eroi: Math.max(0, eroi).toFixed(1),
      environmentalCost: environmentalCost.toFixed(2),
      adjustedRevenue: adjustedRevenue.toFixed(2),
      paybackYears: (investmentCost / Math.max(0.1, adjustedRevenue)).toFixed(1)
    };
  };

  const results = calculateEROI();

  return (
    <section id="eroi-lab" className="section-padding bg-gradient-to-b from-background to-card/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              Interaktiv Demonstration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">EROI-labbet:</span> Upplev Radikal Transparens
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Testa vårt Environmental Return on Investment-ramverk. Justera parametrarna och se 
            omedelbart hur miljöfaktorer påverkar er investeringsanalys.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <Card className="card-glass p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-primary" />
                Investeringsparametrar
              </h3>

              <div className="space-y-8">
                {/* Investment Cost */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Investeringskostnad</label>
                    <span className="text-primary font-bold">{investment[0]} M€</span>
                  </div>
                  <Slider
                    value={investment}
                    onValueChange={setInvestment}
                    max={50}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                {/* Annual Revenue */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Årlig Intäkt</label>
                    <span className="text-primary font-bold">{revenue[0]} M€</span>
                  </div>
                  <Slider
                    value={revenue}
                    onValueChange={setRevenue}
                    max={20}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* CO2 Emissions */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">CO₂-utsläpp (ton/år)</label>
                    <span className="text-primary font-bold">{emissions[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={emissions}
                    onValueChange={setEmissions}
                    max={5000}
                    min={100}
                    step={50}
                    className="w-full"
                  />
                </div>

                {/* Carbon Price */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Koldioxidpris (€/ton)</label>
                    <span className="text-primary font-bold">{carbonPrice[0]}€</span>
                  </div>
                  <Slider
                    value={carbonPrice}
                    onValueChange={setCarbonPrice}
                    max={200}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Main EROI Card */}
            <Card className="card-glow p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Environmental Return on Investment</h3>
              <div className="text-6xl font-bold text-glow mb-4">
                {results.eroi}%
              </div>
              <p className="text-muted-foreground">
                Miljöjusterad avkastning på investerat kapital
              </p>
            </Card>

            {/* Breakdown */}
            <Card className="card-glass p-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Transparent Kalkyl
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Årlig Intäkt:</span>
                  <span className="font-medium">{revenue[0]} M€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Miljökostnad:</span>
                  <span className="font-medium text-destructive">-{results.environmentalCost} M€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Justerad Intäkt:</span>
                  <span className="font-medium text-success">{results.adjustedRevenue} M€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span>Investeringskostnad:</span>
                  <span className="font-medium">{investment[0]} M€</span>
                </div>
                <div className="flex justify-between py-3 font-bold text-lg">
                  <span>EROI:</span>
                  <span className="text-primary">{results.eroi}%</span>
                </div>
              </div>
            </Card>

            {/* Additional Insights */}
            <Card className="card-glass p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-semibold">Projektionsinsikter</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Återbetalningstid: <span className="text-primary font-medium">{results.paybackYears} år</span></p>
                <p>• Miljöpåverkan utgör <span className="text-warning font-medium">{((parseFloat(results.environmentalCost) / revenue[0]) * 100).toFixed(1)}%</span> av intäkterna</p>
                <p>• {parseFloat(results.eroi) > 15 ? "Stark" : parseFloat(results.eroi) > 8 ? "Acceptabel" : "Svag"} EROI-profil för hållbar lönsamhet</p>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button className="btn-hero w-full">
                Se Fullständig Analys i The Strategic Navigator
              </Button>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h4 className="font-semibold mb-4">Vad gör detta unikt?</h4>
            <p className="text-muted-foreground leading-relaxed">
              Detta är precis den typ av <strong className="text-primary">Radikal Transparens</strong> som 
              ligger i kärnan av Humblify-plattformen. Varje beräkning, varje rekommendation, varje insikt 
              kan spåras tillbaka till källdata. Inga svarta lådor, inga gömda algoritmer – bara ren, 
              verifierbar analys som CFO:er kan lita på.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EroiLab;